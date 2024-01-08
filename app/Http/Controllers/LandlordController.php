<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLandlordRequest;
use App\Http\Requests\UpdateLandlordRequest;
use App\Models\Landlord;

class LandlordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $validatedData = $request->validate([
            'landlord_name' => 'required|string|max:255',
            'email' => 'required|email|unique:landlords,email',
            'phone' => 'required|string|max:255',
            // Add other validation rules as needed
        ]);

        $landlord = Landlord::create($validatedData);

        return response()->json(['message' => 'Landlord created successfully', 'data' => $landlord], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLandlordRequest $request)
    {
        //
     
    }

    /**
     * Display the specified resource.
     */
    public function show(Landlord $landlord)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Landlord $landlord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLandlordRequest $request, Landloard $landlord)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Landlord $landlord)
    {
        //
    }
}
