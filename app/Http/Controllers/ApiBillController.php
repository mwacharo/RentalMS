<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Models\Tenant;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

class ApiBillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        //
        $bills = Bill::all();

        $tenant = Tenant::with(['bills'])->where('id', $id)->first();
        $tenant_bill = $tenant->bills->pluck('id')->toArray();
        $bill_ = $tenant->bills;

        $bills->transform(function ($bill) use ($tenant_bill, $bill_) {
            $bill->clicked = (in_array($bill->id, $tenant_bill)) ? true : false;
            // $bill->amount = $amount;

            foreach ($bill_ as $key => $value) {
                if ($value->id == $bill->id) {
                    $bill->amount = $value->pivot->amount;
                }
            }

            return $bill;
        });

        return response()->json($bills);
    }

    public function billList(){
        $bills= Bill::all();
        return response()->json($bills);

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
        // 'tenant_name', 'email', 'phone', 'tenant_id'
        $validateData = $request->validate(
            [
                'bill' => 'required|max:255',
                'amount' => 'required|string',
                'unit_cost' => 'required|max:255',
                'number_of_units' => 'required|string'
    

            ]
        );
        $bills = Bill::create($validateData);
        return response()->json(['message' => 'Bill created successfully', 'data' => $bills], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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

        $bill = Bill::find($id);
        if (!$bill) {
            return response()->json(['message' => 'bill not found'], 404);
        }

        $validatedData = $request->validate([
            'bill' => 'required|max:255',
            'amount' => '|string|max:255',
            'unit_cost' => 'required|max:255',
            'number_of_units' => 'required|string'



        ]);

        $bill->update($validatedData);

        return response()->json(['message' => 'bill updated successfully', 'data' => $bill]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $bill = Bill::find($id);
        // dd($bill);
        if ($bill) {
            $bill->delete();
            return response()->json(['message' => 'bill deleted successfully']);
        } else {
            return response()->json(['message' => 'bill not found'], 404);
        }
    }
}
