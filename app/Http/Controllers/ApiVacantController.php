<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\Vacant;
// use Dotenv\Validator;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Facades\Storage;
// use Illuminate\Support\Facades\File;

use Illuminate\Http\Request;

class ApiVacantController extends Controller
{

    public function index()
    {
        //
        $vacants= Vacant::with('property')->get();
        return response()->json($vacants);
    }

    /**
     * Store a newly created resource in storage.
     */


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'property_id' => 'required|exists:properties,id',
            'description' => 'required|string',
            'rent' => 'required|numeric|min:0',
            'number_of_units' => 'required|integer|min:1',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $validator->validated();
        if ($request->hasFile('images')) {
            $images = [];
            foreach ($request->file('images') as $image) {
                // Store the image and add its path to the $images array
                $images[] = $image->store('images/vacants', 'public');
            }
            $data['images'] = json_encode($images);
        }

        $vacant = Vacant::create($data);

        return response()->json([
            'message' => 'Vacant ad created successfully!',
            'vacant' => $vacant
        ], 201);
    }

 

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $vacant = Vacant::find($id);
    
        if (!$vacant) {
            return response()->json(['message' => 'Vacant not found'], 404);
        }
    
        $validator = Validator::make($request->all(), [
            'property_id' => 'required|exists:properties,id',
            'description' => 'required|string',
            'rent' => 'required|numeric|min:0',
            'number_of_units' => 'required|integer|min:1',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
    
        $data = $validator->validated();
    
        if ($request->hasFile('images')) {
            $images = [];
            foreach ($request->file('images') as $image) {
                // Store the image and add its path to the $images array
                $images[] = $image->store('images/vacants', 'public');
            }
            $data['images'] = json_encode($images);
        }
    
        // Update the model
        $vacant->update($data);
    
        return response()->json([
            'message' => 'Vacant ad updated successfully!',
            'vacant' => $vacant
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $vacant = Vacant::find($id);
    
        if (!$vacant) {
            return response()->json(['message' => 'Vacant not found'], 404);
        }
    
        // Perform any necessary cleanup, like deleting associated images from storage
        $images = json_decode($vacant->images, true);
        if ($images) {
            foreach ($images as $image) {
                \Storage::delete($image);
            }
        }
    
        // Delete the model
        $vacant->delete();
    
        return response()->json(['message' => 'Vacant ad deleted successfully!'], 200);
    }
} 
