<?php

namespace App\Http\Controllers;

use App\Models\Maintenance;
use Illuminate\Http\Request;

class ApiMaintenanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all maintenance requests
        $maintenances = Maintenance::with('tenant', 'unit')->get();

        return response()->json($maintenances, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            // 'tenant_id' => 'required|exists:tenants,id',
            'unit_id' => 'required|exists:units,id',
            'description' => 'required|string',
            'request_date' => 'required|date',
            'status' => 'in:pending,in_progress,completed,cancelled',
            'priority' => 'in:low,medium,high',
        ]);

        // Create the maintenance request
        $maintenance = Maintenance::create([
            // 'tenant_id' => $request->tenant_id,

            // auth()->id()
            'unit_id' => $request->unit_id,
            'description' => $request->description,
            'request_date' => $request->request_date,
            'status' => $request->status ?? 'pending',
            'priority' => $request->priority ?? 'medium',
            'created_by' => auth()->id(), 
            'tenant_id' => auth()->id(),

        ]);

        return response()->json(['message' => 'Maintenance request created successfully', 'maintenance' => $maintenance], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Fetch a specific maintenance request
        $maintenance = Maintenance::with('tenant', 'unit')->find($id);

        if (!$maintenance) {
            return response()->json(['message' => 'Maintenance request not found'], 404);
        }

        return response()->json($maintenance, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Find the maintenance request
        $maintenance = Maintenance::find($id);

        if (!$maintenance) {
            return response()->json(['message' => 'Maintenance request not found'], 404);
        }

        // Validate incoming request
        $request->validate([
            'description' => 'string',
            'status' => 'in:pending,in_progress,completed,cancelled',
            'priority' => 'in:low,medium,high',
        ]);

        // Update the maintenance request
        $maintenance->update([
            'description' => $request->description ?? $maintenance->description,
            'status' => $request->status ?? $maintenance->status,
            'priority' => $request->priority ?? $maintenance->priority,
            'updated_by' => auth()->id(),
        ]);

        return response()->json(['message' => 'Maintenance request updated successfully', 'maintenance' => $maintenance], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Find the maintenance request
        $maintenance = Maintenance::find($id);

        if (!$maintenance) {
            return response()->json(['message' => 'Maintenance request not found'], 404);
        }

        // Delete the maintenance request
        $maintenance->delete();

        return response()->json(['message' => 'Maintenance request deleted successfully'], 200);
    }
}
