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
        Fortify::authenticateUsing(function (Request $request) {
            $role = $request->input('user_type', 'web');
            $guard = Auth::guard($this->mapRoleToGuard($role));
            

            // dd($guard);
            Log::info("Attempting login", [
                'role' => $role,
                'email' => $request->input('email'),
                'ip' => $request->ip(),
            ]);

            $user = $guard->attempt([
                'email' => $request->input('email'),
                'password' => $request->input('password'),
            ]);

            if ($user) {
                Log::info("Login successful", [
                    'user_id' => $guard->user()->id,
                    'role' => $role,
                ]);
                return $guard->user();
            } else {
                Log::warning("Login failed", [
                    'role' => $role,
                    'email' => $request->input('email'),
                    'ip' => $request->ip(),
                ]);
            }

            return null;
        });
    }


    private function mapRoleToGuard($role)
    {
        $roleModelMap = [


            'Landlord' => 'landlord',
            'Tenant' => 'tenant',
            'Company' => 'company',
            'User' => 'web'
            // 'Landlord' => \App\Models\Landlord::class,
            // 'Tenant' => \App\Models\Tenant::class,
            //         'Tenant' => 'tenant',
            // 'Company' => \App\Models\Company::class,
            // 'User' => \App\Models\User::class,
        ];

        return $roleModelMap[$role] ?? \App\Models\User::class; // Default to User model
    }
}
