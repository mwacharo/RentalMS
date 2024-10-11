<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class ApiCompanyController extends Controller
{
    public function index()
    {
        // $companies = Company::with('properties')->get();
        $companies = Company::all();

        return response()->json($companies);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'company_name' => 'required|string|max:255',
            'email' => 'required|email|unique:companies,email',
            'phone' => 'required|string|max:255',
        ]);


        // dd($validatedData);

        $company = Company::create($validatedData);

        return response()->json(['message' => 'Company created successfully', 'data' => $company], 201);
    }

    public function show(string $id)
    {
        $company = Company::find($id);
        if ($company) {
            return response()->json($company);
        } else {
            return response()->json(['message' => 'Company not found'], 404);
        }
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        $company = Company::find($id);
        if (!$company) {
            return response()->json(['message' => 'Company not found'], 404);
        }

        $validatedData = $request->validate([
            'company_name' => 'string|max:255',
            'email' => 'email|unique:companies,email,' . $id,
            'phone' => 'string|max:255',
        ]);

        $company->update($validatedData);

        return response()->json(['message' => 'Company updated successfully', 'data' => $company]);
    }

    public function destroy(string $id)
    {
        $company = Company::find($id);
        if ($company) {
            $company->delete();
            return response()->json(['message' => 'Company deleted successfully']);
        } else {
            return response()->json(['message' => 'Company not found'], 404);
        }
    }

    public function companySearch(Request $request)
    {
        $query = $request->get('query');
        $companies = Company::where('company_name', 'LIKE', "%{$query}%")
            ->orWhere('email', 'LIKE', "%{$query}%")
            ->orWhere('phone', 'LIKE', "%{$query}%")
            ->get();

        return response()->json($companies);
    }
}
