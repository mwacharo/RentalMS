<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MpesaApiController extends Controller
{
    private $baseUrl = 'https://sandbox.safaricom.co.ke';
    private $shortcode = 174379;
    private $passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
    private $phone = '254741821113';
    private $amount = 1;
    private $appUrl = 'https://51db-41-90-185-223.ngrok-free.app/api/callback';
    private $apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    public function initiateSTKPush($phone, $unit_number, $amount)
    {
        $timestamp = now()->format('YmdHis');
        $password = $this->generatePassword();

        $token = $this->generateToken();

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Content-Type' => 'application/json',
        ])->post($this->apiUrl, [
            'BusinessShortCode' => $this->shortcode,
            'Password' => $password,
            'Timestamp' => $timestamp,
            'TransactionType' => 'CustomerPayBillOnline',
            'Amount' => $amount,
            'PartyA' => $phone,
            'PartyB' => $this->shortcode,
            'PhoneNumber' => $phone,
            'CallBackURL' => $this->appUrl,
            'AccountReference' => $unit_number,
            'TransactionDesc' => 'Invoice payment',
        ]);

        Log::info($response);

        return $response->json();
    }

    private function generatePassword()
    {
        return base64_encode($this->shortcode . $this->passkey . now()->format('YmdHis'));
    }

    private function generateToken()
    {


        $response = Http::withHeaders([
            'Authorization' => 'Basic ' . $this->generateBase64(),

            'Cookie' => 'incap_ses_1018_2742146=oPrtAJGOJBcNds8xGasgDkyQ8WUAAAAAC5foIxbeBwqFOwtr67y7vg==; visid_incap_2742146=RdlS9dvfSFq2xLQMsjUKDf/x7mUAAAAAQUIPAAAAAABZe8evzdo55T186SJB4NoF',
        ])
            ->get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials');


        // Decode the JSON response
        $data = json_decode($response->body(), true);
        $token =$data['access_token'];
        dd($token);
    }



    private function generateBase64()
    {
        $key = "Kz2aQK2DBA2cZV9vfqRjob65sTzCh3f7EOCjN9gQjEdpi9GO";
        $secret = "JaM6bGFTcvULVNN3GRfjsmBEMY2lIlPJ6yaAWWwlkidtXsAeNM5aG52ARQXV5Cax";
        return base64_encode($key . ':' . $secret);
    }

    public function handleCallback(Request $request)
    {
        Log::info($request->all());

        return response()->json(['message' => 'Callback received successfully']);
    }


    // public function registerUrl()


    // {

    //     $token = $this->generateToken();
    //     // dd($token);
    //     // Prepare the request data
    //     $requestData = [
    //         "ShortCode" => "",
    //         "ResponseType" => "",
    //         "ConfirmationURL" => "https://solssa.com/api/confirmation",
    //         "ValidationURL" => "https://solssa.com/api/validation",
    //     ];

    //     // Make the HTTP request using Laravel's Http facade
    //     $response = Http::withHeaders([
    //         'Authorization' => 'Bearer' . $token,
    //         'Content-Type' => 'application/json',
    //     ])->post('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl', $requestData);

    //     // Get the response content
    //     $responseContent = $response->body();

    //     // Output the response
    //     echo $responseContent;
    // }




    public function handleConfirmationCallback(Request $request)
    {
        try {
            // Process the confirmation request and return a response
            $confirmationRequestData = $request->all();

            // Log the confirmation request data for debugging
            Log::info('Confirmation Request Data:', $confirmationRequestData);

            // Create a new Transaction instance
            $transaction = Transaction::create([
                'transaction_type' => $confirmationRequestData['TransactionType'],
                'trans_id' => $confirmationRequestData['TransID'],
                'trans_time' => date('Y-m-d H:i:s', strtotime($confirmationRequestData['TransTime'])),
                'trans_amount' => $confirmationRequestData['TransAmount'],
                'business_short_code' => $confirmationRequestData['BusinessShortCode'],
                'bill_ref_number' => $confirmationRequestData['BillRefNumber'],
                'org_account_balance' => $confirmationRequestData['OrgAccountBalance'] ?? null,
                'third_party_trans_id' => $confirmationRequestData['ThirdPartyTransID'] ?? null,
                'msisdn' => $confirmationRequestData['MSISDN'],
                'first_name' => $confirmationRequestData['FirstName'],
                'middle_name' => $confirmationRequestData['MiddleName'] ?? null,
                'last_name' => $confirmationRequestData['LastName'],
            ]);

            // $transaction->save();

            // Your additional logic for handling the confirmation callback

            // Sample response for confirmation
            $confirmationResponse = [
                "ResultCode" => "0",
                "ResultDesc" => "Success",
            ];

            // Log the confirmation response for debugging
            Log::info('Confirmation Response:', $confirmationResponse);

            return response()->json($confirmationResponse);
        } catch (\Exception $e) {
            // Log any exceptions that may occur during processing
            Log::error('Error during confirmation callback processing: ' . $e->getMessage());

            // Handle the error appropriately (e.g., return an error response)
            return response()->json(['error' => 'An error occurred during confirmation processing'], 500);
        }
    }
}
