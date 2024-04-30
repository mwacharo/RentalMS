<?php

namespace App\Http\Controllers;

use App\Models\BookVacant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiBookVacantController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $id = Auth::id();
        // dd($id);
        // $bookings=BookVacant::all();  
        $bookings = BookVacant::with('property')->where('tenant_id', $id)->get();

        return response()->json($bookings);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $user = Auth::user();
        // dd($user);

        $validated = $request->validate([
            'vacant_id' => 'required|exists:properties,id',
            'property_id' => 'required|exists:properties,id',
            'tenant_id' => 'required|exists:users,id',
            'date' => 'required|date',
            'status' => 'string|max:255',
            'number_of_units' => 'string|max:255',

            // 'number_of_units' => 'required',
        ]);

        $booking = BookVacant::create($validated);

        return response()->json([
            'message' => 'Booking successfully created!',
            'booking' => $booking
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $booking = BookVacant::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $validated = $request->validate([
            'property_id' => 'sometimes|required|exists:properties,id',
            'tenant_id' => 'sometimes|required|exists:users,id',
            'date' => 'sometimes|required|date',
            'status' => 'sometimes|required|string|max:255',
        ]);

        $booking->update($validated);

        return response()->json([
            'message' => 'Booking successfully updated!',
            'booking' => $booking
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $booking = BookVacant::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $booking->delete();

        return response()->json(['message' => 'Booking successfully deleted']);
    }

    public function propertyBookings()

    {
        $id = Auth::id();
        // dd($id);
   
        $bookings = BookVacant::where('property_id', $id)->get();

        return response()->json($bookings);

    }
}
