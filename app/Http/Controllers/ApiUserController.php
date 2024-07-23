<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ApiUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $users=User::all();
    
        return response()->json( $users);

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

        // dd($request);

          //
          $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:landlords,email',
            'phone' => 'required|string|max:255',
            
        
        ]);

        $users = User::create($validatedData);
        


        return response()->json(['message' => ' created successfully', 'data' => $users], 201);
    
    }


    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
