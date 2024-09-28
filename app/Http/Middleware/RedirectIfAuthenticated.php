<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
   



    public function handle(Request $request, Closure $next, string ...$guards): Response
{
    Log::info('RedirectIfAuthenticated middleware guards:', ['guards' => $guards]);

    // Check the user_type to select the appropriate guard
    $role = $request->input('user_type', 'web'); // 'web' as default
    $guard = $this->mapRoleToGuard($role); // Map the role to guard

    // dd($guard );

    Log::info('Mapped guard:', ['guard' => $guard]);

    // Auth check based on the mapped guard
    if (Auth::guard($guard)->check()) {
        $user = Auth::guard($guard)->user();
        Log::info('Authenticated user details:', ['user' => $user]);

        switch ($guard) {
            case 'tenant':
                Log::info('Redirecting to tenant dashboard.');
                return redirect()->route('tenant-dashboard');
            case 'landlord':
                Log::info('Redirecting to landlord dashboard.');
                return redirect()->route('landlord-dashboard');
            case 'company':
                Log::info('Redirecting to company dashboard.');
                return redirect()->route('dashboard');
            default:
                Log::info('Redirecting to user dashboard.');
                return redirect()->route('dashboard');
        }
    }

    Log::info('No authenticated user found. Proceeding with request.');
    return $next($request);
}

private function mapRoleToGuard($role)
{
    $roleGuardMap = [
        'Landlord' => 'landlord',
        'Tenant' => 'tenant',
        'Company' => 'company',
        'User' => 'web',
    ];
    // dd($roleGuardMap[$role]);

    return $roleGuardMap[$role] ?? 'web'; // Default to 'web' guard
}



    // public function handle(Request $request, Closure $next, string ...$guards): Response
    // {
    //     Log::info('RedirectIfAuthenticated middleware guards:', ['guards' => $guards]);
    
    //     $guards = empty($guards) ? [null] : $guards;


    //     // dd($guards);
    
    //     foreach ($guards as $guard) {
    //         Log::info('Checking guard:', ['guard' => $guard]);
    
    //         if (Auth::guard($guard)->check()) {
    //             $user = Auth::guard($guard)->user();
    //             Log::info('Authenticated user details:', ['user' => $user]);
    
    //             // Check for user roles
    //             if ($user) {
    //                 Log::info('User role:', ['role' => $user->role]);
    
    //                 switch ($user->guard) {
    //                     case 'tenant':
    //                         Log::info('Redirecting to tenant dashboard.');
    //                         return redirect()->route('tenant.dashboard');
    //                     case 'landlord':
    //                         Log::info('Redirecting to landlord dashboard.');
    //                         return redirect()->route('landlord.dashboard');
    //                     case 'company':
    //                         Log::info('Redirecting to company dashboard.');
    //                         return redirect()->route('dashboard');
    //                     default:
    //                         Log::info('Redirecting to user dashboard.');
    //                         return redirect()->route('dashboard');
    //                 }
    //             }
    //         }
    //     }
    
    //     Log::info('No authenticated user found. Proceeding with request.');
    //     return $next($request);
    // }
}    
