<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Models\Unit;
use App\Models\Tenant;
use App\Utils\SMSUtil;
use App\Mail\TenantInvoiceMail;
use App\Models\Invoice;
use App\Models\BillInvoice;
use App\Models\TenantsBill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\MpesaApiController;
use App\Imports\TenantsImport;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

// use App\Services\TwilioService;


class ApiTenantController extends Controller
{


    public function tenantBills(Request $request, $id)
    {
        // Log the incoming request data
        Log::info('Fetching tenant bills', ['tenant_id' => $id, 'request' => $request->all()]);

        $tenant = Tenant::find($id);

        if (!$tenant) {
            // Log a warning if the tenant is not found
            Log::warning('Tenant not found', ['tenant_id' => $id]);
            return response()->json(['message' => 'Tenant not found'], 404);
        }

        // Log tenant details
        Log::info('Tenant found', ['tenant' => $tenant]);

        // $tenantsbills = TenantsBill::where('tenant_id', $tenant->id)->get();

        $tenantsbills = TenantsBill::with('bill', 'tenant.unit')->where('tenant_id', $tenant->id)->get();

        if ($tenantsbills->isEmpty()) {
            // Log if no bills are found
            Log::info('No bills found for tenant', ['tenant_id' => $tenant->id]);

            $tenantUnit = $tenant->unit;

            // Check if deposit status is zero (unpaid)
            if ($tenantUnit && $tenantUnit->deposit_status == 0) {
                // Add rent and deposit to the bill result as a custom entry
                $tenantsbills->push([
                    'id' => null, // No bill ID since it's a custom addition
                    'tenant_id' => $tenant->id,
                    'bill_id' => null, // No specific bill
                    'amount' => $tenantUnit->rent + $tenantUnit->deposit, // Add rent and deposit
                    'created_at' => now(),
                    'updated_at' => now(),
                    'bill' => [
                        'bill' => 'Rent & Deposit',
                        'unit_cost' => $tenantUnit->rent,
                        'number_of_units' => 1,
                        'amount' => $tenantUnit->rent + $tenantUnit->deposit,
                    ],
                    'tenant' => [
                        'tenant_name' => $tenant->tenant_name,
                        'email' => $tenant->email,
                        'unit' => $tenantUnit,
                    ]
                ]);
            }
            elseif ($tenantUnit->deposit_status == 1) {
                // Add only the rent to the bill result if the deposit is already paid
                $tenantsbills->push([
                    'id' => null, // No bill ID since it's a custom addition
                    'tenant_id' => $tenant->id,
                    'bill_id' => null, // No specific bill
                    'amount' => $tenantUnit->rent, // Add only rent
                    'created_at' => now(),
                    'updated_at' => now(),
                    'bill' => [
                        'bill' => 'Rent',
                        'unit_cost' => $tenantUnit->rent,
                        'number_of_units' => 1,
                        'amount' => $tenantUnit->rent,
                    ],
                    'tenant' => [
                        'tenant_name' => $tenant->tenant_name,
                        'email' => $tenant->email,
                        'unit' => $tenantUnit,
                    ]
                ]);
            }
        } 
        
   
else {
            // Log the tenant bills fetched
            Log::info('Tenant bills fetched', ['tenant_id' => $tenant->id, 'bills' => $tenantsbills]);
        }

        return response()->json($tenantsbills);
    }

    public function index()
    {
        //  $tenants = Tenant::all();
        $tenants = Tenant::with('property', 'unit')->get();
        return response()->json($tenants);
    }


    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'tenant_name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'required|string|max:255',
                'unit_id' => '|max:255',
                'property_id' => 'required|max:255',
                'nationa_id' => 'max:255',
                'agreement' => 'max:255',

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
            return response()->json(['message' => 'ErrgetBillsSummaryor assigning bill', 'error' => $e->getMessage()], 500);
        }
    }




    public function tenantInvoice(Request $request, $id)
    {
        $tenant_id = $id;
        // dd($tenant_id);


        $tenant = Tenant::with(['bills', 'unit', 'property'])->find($tenant_id);
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
            //$smsutil = new SMSUtil();

            $this->sendSmsToTenant($tenant, 'Reminder: Your invoice for this month is due date "" created.');
            return response()->json(['message' => 'invoice was sent ']);
        }

        // If no invoice exists for this month, create a new one
        // $tenant_bills= $tenant->bills;
        // // dd( $tenant_bills);


        $deposit = $unit->deposit;
        $rent = $unit->rent;

        $totalAmount = $unit->rent + $tenant->bills->sum('amount');
        $deposit_status = $unit->deposit_status;
        // dd($deposit_status);

        // Check if deposit status is 0 to include it in totalAmount
        if ($unit->deposit_status == '0') {
            $totalAmount += $unit->deposit;
        }


        $dueDate = now()->addDays(30);
        $invoice = new Invoice();
        $invoice->tenant_id = $tenant_id;
        $invoice->unit_id = $unit->id;
        $invoice->total_amount = $totalAmount;
        // Add other invoice details if necessary
        $invoice->due_date = $dueDate; // Set the due date here
        $invoice->save();
        // dd($invoice);

        $phone = $tenant->phone;
        $tenant_name = $tenant->tenant_name;
        $unit_number = $unit->unit_number;
        $property_name = $tenant->property->property_name;


        $billsSummary = $this->getBillsSummary($tenant->bills);


        // Encode the phone number to make it URL-safe

        $encodedPhone = urlencode($phone);
        $encodedAmount = urlencode($invoice->total_amount);
        $encodedUnitNumber = urlencode($unit_number);
        // $encodedBillsSummary = urlencode($billsSummary);

        // Create the link with the encoded phone number ,amount, unit_number, billsummary parameter
        // $link = route('mpesa.stkpush', ['phone' => $encodedPhone]);

        // Create the link with the encoded parameters
        $link = route('mpesa.stkpush', [
            'phone' => $encodedPhone,
            'amount' => $encodedAmount,
            'unit_number' => $encodedUnitNumber,
            // 'bills_summary' => $encodedBillsSummary,
        ]);


        $message =  " Hi {$tenant_name} Room Number {$unit_number}, {$property_name} {$billsSummary}. Total Amount: {$invoice->total_amount}   Click this link to pay: {$link}";
        // return response()->json($message);


        //  dd($message);
        // // dd( $tenant_bills);

        $this->sendSmsToTenant($tenant, $message);

        // invoice to mail
        $invoice = [
            'inovoice_number' => $id,
            'tenant_name' => $tenant_name,
            'unit_number' => $unit_number,
            'property_name' => $property_name,
            'bills_summary' => $billsSummary,
            'rent' => $rent,
            'deposit' => $deposit,
            'deposit_status' => $deposit_status,
            'issued_at' => $invoice->created_at->toDateString(), // Format the created_at date as needed
            'due_date' => $invoice->due_date->toDateString(), // Format the due date as needed
            'total_amount' => $invoice->total_amount,
            'link' => $link
        ];

        //  dd($invoice);
        // dd($tenant->email);
        Mail::to($tenant->email)->send(new TenantInvoiceMail($invoice, $tenant));


        // $this->Sen
        // $mpesaUtil = new MpesaApiController();

        // $mpesaUtil->initiateSTKPush($phone, $unit_number, $invoice->total_amount);

        // Attach bills to the invoice
        // foreach ($tenant->bills as $bill) {
        //     $invoice->bills()->attach($bill->id, ['amount' => $bill->amount]);
        // }

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
    //attach link to  for client to click and trigger mpesa push  in message 

    private function sendSmsToTenant($tenant, $message)
    {
        try {
            $sendSMS = new SMSUtil();
            //  $sendSMS->sendSMS($tenant->phone, $message);
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


    public function upload(Request $request)
    {

        $request->validate([
            'property_id' => 'required|exists:properties,id',
            'file' => 'required|mimes:xlsx,xls|max:10240', // Adjust the file size limit as needed
        ]);
        //   dd($request);
        $propertyId = $request->input('property_id');
        $file = $request->file('file');

        try {
            $import = new TenantsImport($propertyId);
            Excel::import($import, $file);

            return response()->json(['message' => 'Tenants uploaded successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
