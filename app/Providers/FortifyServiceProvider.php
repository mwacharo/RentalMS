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
        // Fortify::authenticateUsing(function (Request $request) {
        //     $role = $request->input('user_type', 'web');
        //     $guard = Auth::guard($this->mapRoleToGuard($role));
            


        //      // Log the active guard
        // Log::info('Active guard during authentication:', ['guard' => Auth::getDefaultDriver()]);


        //     // dd($guard);
        //     Log::info("Attempting login", [
        //         'role' => $role,
        //         'email' => $request->input('email'),
        //         'ip' => $request->ip(),
        //     ]);

        //     $user = $guard->attempt([
        //         'email' => $request->input('email'),
        //         'password' => $request->input('password'),
        //     ]);

        //     if ($user) {
        //         Log::info("Login successful", [
        //             'user_id' => $guard->user()->id,
        //             'role' => $role,
        //         ]);
        //         return $guard->user();
        //     } else {
        //         Log::warning("Login failed", [
        //             'role' => $role,
        //             'email' => $request->input('email'),
        //             'ip' => $request->ip(),
        //         ]);
        //     }

        //     return null;
        // });


        Fortify::authenticateUsing(function (Request $request) {
            $role = $request->input('user_type', 'web'); // Default to web if not provided
            $guardName = $this->mapRoleToGuard($role);
            $guard = Auth::guard($guardName);
        
            Log::info('Active guard during authentication:', ['guard' => $guardName]);
        
            $credentials = $request->only('email', 'password');
            if ($guard->attempt($credentials)) {
                Log::info('Login successful', [
                    'user_id' => $guard->user()->id,
                    'role' => $role,
                ]);
                session(['auth_guard' => $guardName]); // Store the guard in the session
                return $guard->user();
            } else {
                Log::warning('Login failed', [
                    'role' => $role,
                    'email' => $credentials['email'],
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
     
        ];

        return $roleModelMap[$role] ?? \App\Models\User::class; // Default to User model
    }
}
