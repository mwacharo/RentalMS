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
    private $shortcode = 600996;
    private $passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
    private $phone = '254741821113';
    private $amount = 1;
    private $appUrl = 'https://solssa.com/api/callback';
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
        ])->get($this->baseUrl . '/oauth/v1/generate?grant_type=client_credentials');

        $data = $response->json();

        return $data['access_token'];
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

    public function registerUrl()
    {


        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => '{
    "ShortCode": "",
    "ResponseType": "",
    "ConfirmationURL": "",//https://solssa.com/confirmation
    "ValidationURL": "//https://solssa.com/validation"
}',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer <Access-Token>',
                'Content-Type: application/json',
                'Cookie: incap_ses_1025_2742146=mt6zKIkhFEHXe01/Mok5Dv/x7mUAAAAAM+p7RPnZA1IrlW+nEdgICA==; visid_incap_2742146=RdlS9dvfSFq2xLQMsjUKDf/x7mUAAAAAQUIPAAAAAABZe8evzdo55T186SJB4NoF'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;

        echo $response;
    }


    //     public function confirmation(Request $request)
    //     {
    //         Log::info($request->all());





    //         return response()->json(['message' => 'Confirmation received successfully']);
    //     }


    public function handleConfirmationCallback(Request $request)
    {
        try {
            // Process the confirmation request and return a response
            $confirmationRequestData = $request->all();

            // Log the confirmation request data for debugging
            Log::info('Confirmation Request Data:', $confirmationRequestData);

            // Create a new Transaction instance
            $transaction = new Transaction([
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

            $transaction->save();

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
