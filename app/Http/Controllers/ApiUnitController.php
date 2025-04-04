<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


    //    $user =Auth::user()->name;

    //    return $user;
        //
        // $units= Unit::all();
        $units = Unit::with('tenant','property',)->get();
        return response()->json($units);
    }


    // public function index()
    // {
    //     // Get the currently logged-in landlord
    //     $landlord = Auth::guard('landlord')->user();

    //     // Fetch units related to the landlord's properties
    //     $units = Unit::with('tenant', 'property')
    //         ->whereHas('property', function ($query) use ($landlord) {
    //             $query->where('landlord_id', $landlord->id);
    //         })
    //         ->get();

    //     return response()->json($units);
    // }



    // public function index(Request $request)
    // {
    //     // Check if the logged-in user is a landlord, tenant, or other role
    //     if (Auth::guard('landlord')->check()) {
    //         // Get the logged-in landlord
    //         $landlord = Auth::guard('landlord')->user();

    //         // Fetch units related to the landlord's properties
    //         $units = Unit::with('tenant', 'property')
    //             ->whereHas('property', function ($query) use ($landlord) {
    //                 $query->where('landlord_id', $landlord->id);
    //             })
    //             ->get();

    //         return response()->json($units);
    //     } elseif (Auth::guard('tenant')->check()) {
    //         // Get the logged-in tenant
    //         $tenant = Auth::guard('tenant')->user();

    //         // Fetch units related to the tenant
    //         $units = Unit::with('property')
    //             ->where('tenant_id', $tenant->id)
    //             ->get();

    //         return response()->json($units);
    //     }

    //     // Default response if no specific guard is authenticated
    //     return response()->json(['error' => 'Unauthorized'], 401);
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate([
            'property_id' => 'required|max:255',
            'unit_number' => 'required|string|max:255',
            'deposit' => 'required|string|max:255',
            'rent' => 'required|string|max:255',
            'unit_status' => '|string|max:255',

        ]);

        $unit = Unit::create($validatedData);

        $unit = Unit::with('property')->find($unit->id);
        return response()->json(['message' => 'Unit created successfully', 'data' => $unit], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $unit = Unit::find($id);
        if ($unit) {
            return response()->json($unit);
        } else {
            return response()->json(['message' => 'Unit not found']);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        //
        $unit = Unit::find($id);
        if (!$unit) {
            return response()->json(['message' => 'unit not found'], 404);
        }

        $validatedData = $request->validate([
            // 'email' => 'required|email|unique:landlords,email', 
            'property_id' => 'required|max:255',
            'unit_number' => 'required|string|max:255',
            'deposit' => 'required|string|max:255',
            'rent' => 'required|string|max:255',                    'deposit' => 'required|string|max:255',

            'unit_status' => '|max:255',


        ]);

        $unit->update($validatedData);

        return response()->json(['message' => 'unit updated successfully', 'data' => $unit]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $unit = Unit::find($id);
        if ($unit) {
            $unit->delete();
            return response()->json(['message' => 'unit deleted successfully']);
        } else {
            return response()->json(['message' => 'unit not found'], 404);
        }
    }
}
