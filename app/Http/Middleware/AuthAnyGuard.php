<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthAnyGuard
{


    //   /**
    //  * Handle an incoming request.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \Closure  $next
    //  * @return mixed
    //  */
    // public function handle($request, Closure $next)
    // {
    //     // List of guards you want to check
    //     $guards = ['tenant', 'company', 'landlord', 'user'];

    //     // Check if the user is authenticated with any guard
    //     foreach ($guards as $guard) {
    //         if (Auth::guard($guard)->check()) {
    //             return $next($request); // Allow access if any guard is authenticated
    //         }
    //     }

    //     // If no guard is authenticated, redirect or return an unauthorized response
    //     return redirect()->route('login'); // Or return abort(403) for unauthorized
    // }
}
