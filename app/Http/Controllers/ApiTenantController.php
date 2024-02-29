<?php

namespace App\Http\Controllers;

use App\Utils\SMSUtil;
use App\Models\Bill;
use App\Models\BillInvoice;
use App\Models\Invoice;
use App\Models\Tenant;
use App\Models\TenantsBill;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
// use App\Services\TwilioService;


class ApiTenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //  $tenants = Tenant::all();
        $tenants = Tenant::with('property')->get();
        return response()->json($tenants);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // This method is typically used for displaying the form for creating a new resource,
        // but in an API, it's not commonly used. You can leave it empty.
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'tenant_name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'required|string|max:255',
                'unit_id' => '|max:255',
                'property_id' => 'required|max:255',
            ]);

            $tenant = Tenant::create($validatedData);
            $tenant = Tenant::with('property')->find($tenant->id);

            return response()->json(['message' => 'Tenant created successfully', 'data' => $tenant], 201);
        } catch (\Exception $e) {
            // Log the exception for debugging
            Log::error($e);

            // Return an error response
            return response()->json(['message' => 'Error creating tenant', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tenant = Tenant::find($id);

        if (!$tenant) {
            return response()->json(['message' => 'Tenant not found'], 404);
        }

        return response()->json($tenant);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // This method is typically used for displaying the form for editing a resource,
        // but in an API, it's not commonly used. You can leave it empty.
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $tenant = Tenant::find($id);

            if (!$tenant) {
                return response()->json(['message' => 'Tenant not found'], 404);
            }

            $validatedData = $request->validate([
                'tenant_name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'required|string|max:255',
                'unit_id' => 'required|max:255',
                'property_id' => 'required|max:255',
            ]);

            $tenant->update($validatedData);

            return response()->json(['message' => 'Tenant updated successfully', 'data' => $tenant]);
        } catch (\Exception $e) {
            // Log the exception for debugging
            Log::error($e);

            // Return an error response
            return response()->json(['message' => 'Error updating tenant', 'error' => $e->getMessage()], 500);
        }
    }
    public function  submitBill(Request $request, $id)
    {
        $bills = $request->bills;

        try {
            // $validatedData = $request->validate([

            // ]);
            // return $bills;
            foreach ($bills as $key => $bill) {
                TenantsBill::create([
                    'tenant_id' => $id,
                    'bill_id' => $bill['billId'],
                    'amount' => $bill['amount'],
                ]);
            }

            // $tenant = Tenant::create($validatedData);
            // $tenant = Tenant::with('property')->find($tenant->id);

            return response()->json(['message' => 'Bills assigned successfully'], 201);
        } catch (\Exception $e) {
            // Log the exception for debugging
            Log::error($e);

            // Return an error response
            return response()->json(['message' => 'Error assigning bill', 'error' => $e->getMessage()], 500);
        }
    }




    public function tenantInvoice(Request $request, $id)
    {
        $tenant_id = $id;


        $tenant = Tenant::with(['bills', 'unit','property'])->find($tenant_id);
        // return (   $tenant);


        if (!$tenant) {
            return response()->json(['message' => 'Tenant not found'], 404);
        }

        $unit = $tenant->unit;

        // Check if an invoice has already been created this month
        $existingInvoice = Invoice::where('tenant_id', $tenant_id)
            ->whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->first();

        if ($existingInvoice) {
            // An invoice has already been created this month, send a reminder
            // Implement your reminder logic here
            $smsutil = new SMSUtil();

            $this->sendSmsToTenant($tenant, 'Reminder: Your invoice for this month is due date "" created.');
            return response()->json(['message' => 'Reminder sent successfully']);
        }

        // If no invoice exists for this month, create a new one
        $totalAmount = $unit->rent + $tenant->bills->sum('amount');
        if (!$tenant->deposit_paid) {
            // check if deposit has status of paid do not include it if status not paid include it 
            $totalAmount += $unit->deposit;
        }

        $invoice = new Invoice();
        $invoice->tenant_id = $tenant_id;
        $invoice->unit_id = $unit->id;
        $invoice->total_amount = $totalAmount;
        // Add other invoice details if necessary
        $invoice->save();

        $phone = $tenant->phone;
        $tenant_name = $tenant->tenant_name;
        $unit_number = $unit->unit_number;
        $property_name = $tenant->property->property_name;


        $billsSummary = $this->getBillsSummary($tenant->bills);

        $message =  " Hi {$tenant_name} Room Number {$unit_number} of {$property_name} Bills Summary: {$billsSummary}. Total Amount: {$invoice->total_amount}";
        // return response()->json($message);
    dd($message);

        $this->sendSmsToTenant($tenant, $message);

        // Attach bills to the invoice
        foreach ($tenant->bills as $bill) {
            $invoice->bills()->attach($bill->id, ['amount' => $bill->amount]);
        }

        return response()->json(['message' => 'Invoice created successfully', 'data' => $invoice]);
    }

    private function getBillsSummary($bills)
    {
        $billsSummary = '';

        foreach ($bills as $bill) {
            // $billsSummary .= "Bill: {$bill}, Amount: {$bill->amount}. ";
            $billsSummary .= " {$bill->bill},{$bill->amount}. ";
        }

        return $billsSummary;
    }

    private function sendSmsToTenant($tenant, $message)
    {
        try {
            $sendSMS = new SMSUtil();
            $sendSMS->sendSMS($tenant->phone, $message);
        } catch (\Exception $e) {
            Log::error('SMS sending failed: ' . $e->getMessage());
            // Handle the exception as per your requirement
        }
    }
    //fetch invoices 
    // public function fetchInvoice()
    // {  

    
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $tenant = Tenant::find($id);

            if (!$tenant) {
                return response()->json(['message' => 'Tenant not found'], 404);
            }

            $tenant->delete();

            return response()->json(['message' => 'Tenant deleted successfully']);
        } catch (\Exception $e) {
            // Log the exception for debugging
            Log::error($e);

            // Return an error response
            return response()->json(['message' => 'Error deleting tenant', 'error' => $e->getMessage()], 500);
        }
    }
}
