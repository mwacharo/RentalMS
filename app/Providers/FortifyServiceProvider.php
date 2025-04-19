<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Fortify\Contracts\ResetsUserPasswords;
use Laravel\Fortify\Contracts\UpdatesUserPasswords;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;



use App\Models\User;
use App\Models\Tenant;
use App\Models\Landlord;
use App\Models\Company;
use Illuminate\Support\Facades\Hash;

use App\Http\Responses\LoginResponse;


use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;



class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Bind Fortify's contracts to your custom implementations
        $this->app->singleton(CreatesNewUsers::class, CreateNewUser::class);
        $this->app->singleton(ResetsUserPasswords::class, ResetUserPassword::class);
        $this->app->singleton(UpdatesUserPasswords::class, UpdateUserPassword::class);
        $this->app->singleton(UpdatesUserProfileInformation::class, UpdateUserProfileInformation::class);
    }

    public function boot(): void
    {



        RateLimiter::for('login', function (Request $request) {
            return Limit::perMinute(10)->by($request->input('email') . $request->ip());
        });



        $this->app->singleton(LoginResponseContract::class, LoginResponse::class);

        Fortify::authenticateUsing(function ($request) {
            $email = $request->input('email');
            $password = $request->input('password');
            $role = $request->input('user_type', 'User');

            Log::info('Attempting login', [
                'email' => $email,
                'password' => $password, // Be cautious in production, for debug only!
                'user_type' => $role,
            ]);

            $guardsToTry = [
                'User' => ['guard' => 'web', 'model' => User::class],
                'Tenant' => ['guard' => 'tenant', 'model' => Tenant::class],
                'Landlord' => ['guard' => 'landlord', 'model' => Landlord::class],
                'Company' => ['guard' => 'company', 'model' => Company::class],
            ];

            if (!isset($guardsToTry[$role])) {
                Log::warning("Unknown user_type provided", ['user_type' => $role]);
                return null;
            }

            $guard = $guardsToTry[$role]['guard'];
            $model = $guardsToTry[$role]['model'];

            $user = $model::where('email', $email)->first();

            if (!$user) {
                Log::warning('Login failed: Email not found', ['email' => $email, 'guard' => $guard]);
                return null;
            }

            if (!Hash::check($password, $user->password)) {
                Log::warning('Login failed: Password mismatch', [
                    'email' => $email,
                    'guard' => $guard,
                ]);
                return null;
            }

            Auth::guard($guard)->login($user);
            session(['guard_used' => $guard]); // Optional, useful for debugging

            Log::info('Login successful', [
                'email' => $email,
                'guard' => $guard,
                'user_id' => $user->id
            ]);

            return $user;
        });
    }
}
