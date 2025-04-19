<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class LoginResponse implements LoginResponseContract
{
    /**
     * Get the response that should be returned after login.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function toResponse($request): RedirectResponse
    {
        $user = Auth::user(); // Get the currently authenticated user

        // Check user type and redirect accordingly
        if ($user instanceof \App\Models\Tenant) {
            return redirect()->route('tenant-dashboard');
        } elseif ($user instanceof \App\Models\Landlord) {
            return redirect()->route('landlord-dashboard');
        } elseif ($user instanceof \App\Models\Company) {
            return redirect()->route('company-dashboard');
        }

        // Default redirection
        return redirect()->route('dashboard');
    }
}
