<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class RoleMiddleware
{
    /**
     * Mapping of roles to guards.
     */
    protected $guardMapping = [
        'tenant' => 'tenant',
        'landlord' => 'landlord',
        'company' => 'company',
        'web' => 'web',
        // Add more mappings as needed
    ];

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        // Map role to guard
        $guard = $this->guardMapping[$role] ?? null;

        // If the guard mapping is invalid, log error and redirect to login with an error message
        if (!$guard) {
            Log::error("Invalid role provided: $role. No guard found.");
            return redirect()->route('login')->withErrors(['message' => 'Invalid role provided.']);
        }

        // Retrieve the appropriate authentication guard
        $authGuard = Auth::guard($guard);

        // Log the guard being checked
        Log::info("Checking guard: $guard for role: $role");

        // If user is not authenticated with the correct guard, log warning and redirect to login
        if (!$authGuard->check()) {
            Log::warning("Unauthorized access attempt. User is not authenticated for guard: $guard with role: $role");
            return redirect()->route('login')->withErrors(['message' => 'You need to log in to access this resource.']);
        }

        // Get the authenticated user
        $user = $authGuard->user();

        // If user role does not match the expected role, log error and redirect to login
        if ($user->role !== $role) {
            Log::error("Role mismatch. Expected role: $role, but user has role: {$user->role}");
            Auth::guard($guard)->logout();
            return redirect()->route('login')->withErrors(['message' => 'Unauthorized access. Role mismatch detected.']);
        }

        // Log successful authentication
        Log::info("User {$user->id} authenticated successfully with role: $role");

        // Proceed with the request
        return $next($request);
    }
}
