<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVacantRequest;
use App\Http\Requests\UpdateVacantRequest;
use App\Models\Vacant;

class VacantController extends Controller
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
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVacantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Vacant $vacant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vacant $vacant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVacantRequest $request, Vacant $vacant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vacant $vacant)
    {
        //
    }
}
