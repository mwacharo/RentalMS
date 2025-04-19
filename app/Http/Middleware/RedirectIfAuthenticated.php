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
        // If no guards specified, check default guard
        $guards = empty($guards) ? [config('auth.defaults.guard')] : $guards;
        
        foreach ($guards as $guard) {
            Log::info('Checking authentication for guard', ['guard' => $guard]);
            
            if (Auth::guard($guard)->check()) {
                $user = Auth::guard($guard)->user();
                Log::info('User is already authenticated', ['guard' => $guard, 'user_id' => $user->id]);
                
                // Redirect based on the guard that the user is authenticated against
                switch ($guard) {
                    case 'tenant':
                        return redirect()->route('tenant-dashboard');
                    case 'landlord':
                        return redirect()->route('landlord-dashboard');
                    case 'company':
                        return redirect()->route('company-dashboard');
                    default:
                        return redirect()->route('dashboard');
                }
            }
        }

        Log::info('No authenticated user found, proceeding with request');
        return $next($request);
    }






   
}    
