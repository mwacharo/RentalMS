<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;

class ApiPropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // request('json');
        $properties = Property::with('units','landlord')->get();
        return response()->json($properties);
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

         dd($request->all());
        //
        $validatedData = $request->validate([
            'email' => 'required|email|unique:landlords,email',
            'phone' => 'required|string|max:255',
            'property_name' => 'required|string|max:255',
            'landlord_id' => 'required|max:255',
            'address' => 'required|string|max:255',
            'property_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            // 'website' => 'nullable|string|max:255', // Assuming website can be nullable
            'description' => 'nullable|string',
            'number_of_units' => 'nullable|string',

            // Add other validation rules as needed
            // country 
            //State 
        ]);

        $landlord = Property::create($validatedData);


        $landlord = Property::with('landlord')->find($landlord->id);



        return response()->json(['message' => 'Property created successfully', 'data' => $landlord], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $properties = Property::find($id);
        if ($properties) {
            return response()->json($properties);
        } else {
            return response()->json(['message' => 'Property not found'], 404);
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
        $property = Property::find($id);
        if (!$property) {
            return response()->json(['message' => 'Property not found'], 404);
        }

        $validatedData = $request->validate([
            'email' => 'required|email|unique:landlords,email',
            'phone' => 'required|string|max:255',
            'property_name' => 'required|string|max:255',
            'landlord_id' => 'required|max:255',
            'address' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'number_of_units' => 'nullable',



        ]);

        $property->update($validatedData);

        return response()->json(['message' => 'property upated successfully', 'data' => $property]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        //
        $property = Property::find($id);
        if ($property) {
            $property->delete();
            return response()->json(['message' => 'property deleted successfully']);
        } else {
            return response()->json(['message' => 'Property not found'], 404);
        }
    }
    public function propertySearch(Request $request)
    {
        $query = $request->get('query');

        $properties = Property::where('property_name', 'LIKE', "%{$query}%")
            ->orWhere('email', 'LIKE', "%{$query}%")
            ->orWhere('phone', 'LIKE', "%{$query}%")
            ->get();

        return response()->json($properties);
    }
}
