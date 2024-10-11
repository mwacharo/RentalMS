<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
            'company' => 'nullable|string|max:255', // Validation for the company field
            
        
        ]);

        // $password = Str::random(8);
        // $validatedData['password'] = Hash::make($password);

        $users = User::create($validatedData);

        // Mail::to($user->email)->send(new WelcomeUser($user->email,$user->name, $password,));
        


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



    public function updateRole(Request $request, $userId)
    {
        $user = User::findOrFail($userId);
        $roleName = $request->input('role');

        // Remove all current roles and assign the new role
        $user->syncRoles([$roleName]);

        return response()->json(['message' => 'Role updated successfully.']);
    }

    public function updatePermissions(Request $request, $userId)
    {

        $user = User::findOrFail($userId);

        dd($user);
        $permissions = $request->input('permissions', []);

        // Remove all current permissions and assign new ones
        $user->syncPermissions($permissions);

        return response()->json(['message' => 'Permissions updated successfully.']);
    }
}
