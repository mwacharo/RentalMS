<?php

namespace App\Services;

use App\Models\Transaction;
use Illuminate\Support\Facades\Http;

class Mpesa
{
    public static function sendSTKPush($phone, $unitNumber, $amount ,)
    {
        $url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        $accessToken = env('MPESA_ACCESS_TOKEN'); // Assuming you set MPESA_ACCESS_TOKEN in your .env file
        $contentType = 'application/json';

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $accessToken,
            'Content-Type' => $contentType,
        ])->post($url, [
            "BusinessShortCode" => env('MPESA_BUSINESS_SHORT_CODE'),
            "Password" => env('MPESA_PASSWORD'),
            "Timestamp" => now()->format('YmdHis'),
            "TransactionType" => "CustomerPayBillOnline",
            "Amount" => $amount,
            "PartyA" => $phone,
            "PartyB" => env('MPESA_SHORT_CODE'),
            "PhoneNumber" => $phone,
            // "CallBackURL" => env('MPESA_CALLBACK_URL'),
            "AccountReference" => $unitNumber,
            "TransactionDesc" => "Payment of unit $unitNumber"
        ]);



             // Parse the response
             $responseData = $response->json();

             // Store the response in the transactions table
             Transaction::create([
                 'transaction_type' => 'STK Push',
                 'trans_id' => $responseData['CheckoutRequestID'], // Assuming CheckoutRequestID is the transaction ID
                 'trans_time' => now(),
                 'trans_amount' => $amount,
                 'business_short_code' => env('MPESA_BUSINESS_SHORT_CODE'),
                 'bill_ref_number' => $unitNumber,
                 'org_account_balance' => $responseData['Balance'] ?? null,
                 'third_party_trans_id' => $responseData['MpesaReceiptNumber'] ?? null,
                 'msisdn' => $phone,
                 'first_name' => null, // You may need to extract these from the response if available
                 'middle_name' => null,
                 'last_name' => null,
             ]);

        return $response->body();
    }
}
