<?php

namespace App\Http\Controllers;

use App\Models\Landlord;
use Illuminate\Http\Request;

class ApiLandlordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        // $landlords = Landlord::all();
        $landlords = Landlord::with('properties')->get();

        // dd($landlords);
        return response()->json($landlords);
      

    }

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
            'landlord_name' => 'required|string|max:255',
            'email' => 'required|email|unique:landlords,email',
            'phone' => 'required|string|max:255',
            
            // Add other validation rules as needed
            // country 
            //State 
        ]);

        $landlord = Landlord::create($validatedData);
        


        return response()->json(['message' => 'Landlord created successfully', 'data' => $landlord], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $landlord = Landlord::find($id);
        if ($landlord) {
            return response()->json($landlord);
        } else {
            return response()->json(['message' => 'Landlord not found'], 404);
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

        $landlord = Landlord::find($id);
        if (!$landlord) {
            return response()->json(['message' => 'Landlord not found'], 404);
        }

        $validatedData = $request->validate([
            'landlord_name' => 'string|max:255',
            'email' => 'email|unique:landlords,email,' . $id,
            'phone' => 'string|max:255',
        ]);

        $landlord->update($validatedData);

        return response()->json(['message' => 'Landlord updated successfully', 'data' => $landlord]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $landlord = Landlord::find($id);
        if ($landlord) {
            $landlord->delete();
            return response()->json(['message' => 'Landlord deleted successfully']);
        } else {
            return response()->json(['message' => 'Landlord not found'], 404);
        }
    }



    public function landlordSearch(Request $request)
    {
        $query = $request->get('query');

        $landlords = Landlord::where('landlord_name', 'LIKE', "%{$query}%")
            ->orWhere('email', 'LIKE', "%{$query}%")
            ->orWhere('phone', 'LIKE', "%{$query}%")
            ->get();

        return response()->json($landlords);
    }
}
