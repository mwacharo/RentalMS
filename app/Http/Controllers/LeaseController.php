<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreleaseRequest;
use App\Http\Requests\UpdateleaseRequest;
use App\Models\lease;

class LeaseController extends Controller
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
    public function store(StoreleaseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(lease $lease)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(lease $lease)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateleaseRequest $request, lease $lease)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(lease $lease)
    {
        //
    }
}
