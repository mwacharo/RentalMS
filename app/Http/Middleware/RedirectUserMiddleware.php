<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectUserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    // public function handle(Request $request, Closure $next): Response
    // {
    //     if (Auth::check()) {
    //         if (Auth::user()->is_tenant) {
    //             return redirect()->route('tenant-dashboard');
    //         } elseif (Auth::user()->is_user) {
    //         } elseif (Auth::user()->is_tenant) {
    //         } elseif (Auth::user()->is_admin) {
    //             return $next($request);
    //         }
    //     }
    //     return $next($request);
    // }
}
