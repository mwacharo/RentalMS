<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ApiTenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tenants = Tenant::all();
        return response()->json($tenants);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // This method is typically used for displaying the form for creating a new resource,
        // but in an API, it's not commonly used. You can leave it empty.
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'tenant_name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'required|string|max:255',
                'unit_id' => 'required|string|max:255',
                'property_id' => 'required|string|max:255',
            ]);

            $tenant = Tenant::create($validatedData);

            return response()->json(['message' => 'Tenant created successfully', 'data' => $tenant], 201);
        } catch (\Exception $e) {
            // Log the exception for debugging
            Log::error($e);

            // Return an error response
            return response()->json(['message' => 'Error creating tenant', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tenant = Tenant::find($id);

        if (!$tenant) {
            return response()->json(['message' => 'Tenant not found'], 404);
        }

        return response()->json($tenant);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // This method is typically used for displaying the form for editing a resource,
        // but in an API, it's not commonly used. You can leave it empty.
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $tenant = Tenant::find($id);

            if (!$tenant) {
                return response()->json(['message' => 'Tenant not found'], 404);
            }

            $validatedData = $request->validate([
                'tenant_name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'required|string|max:255',
                'unit_id' => 'required|string|max:255',
                'property_id' => 'required|string|max:255',
            ]);

            $tenant->update($validatedData);

            return response()->json(['message' => 'Tenant updated successfully', 'data' => $tenant]);
        } catch (\Exception $e) {
            // Log the exception for debugging
            Log::error($e);

            // Return an error response
            return response()->json(['message' => 'Error updating tenant', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $tenant = Tenant::find($id);

            if (!$tenant) {
                return response()->json(['message' => 'Tenant not found'], 404);
            }

            $tenant->delete();

            return response()->json(['message' => 'Tenant deleted successfully']);
        } catch (\Exception $e) {
            // Log the exception for debugging
            Log::error($e);

            // Return an error response
            return response()->json(['message' => 'Error deleting tenant', 'error' => $e->getMessage()], 500);
        }
    }
}

