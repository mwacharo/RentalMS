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
        $properties= Property::all();
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
        //
        $validatedData = $request->validate([
            // 'email' => 'required|email|unique:landlords,email',
            'phone' => 'required|string|max:255',
            'property_name'=>'required|string|max:255',           
             'landlord_id' => 'required|string|max:255',
             'address' => 'required|string|max:255',
              'description' => 'required|string|max:255',


            // Add other validation rules as needed
            // country 
            //State 
        ]);

        $landlord = Property::create($validatedData);

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
            // 'email' => 'required|email|unique:landlords,email',
            // 'phone' => 'required|string|max:255',
            'property_name'=>'required|string|max:255',           
             'landlord_id' => 'required|string|max:255',
             'address' => 'required|string|max:255',
              'description' => 'required|string|max:255',

          
        ]);
    
        $property->update($validatedData);
    
        return response()->json(['message' => 'property updated successfully', 'data' => $property]);
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
}
