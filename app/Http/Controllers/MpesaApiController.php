<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
    private $appUrl = 'https://2236-41-90-189-168.ngrok-free.app/api/callback';
    private $apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    public function initiateSTKPush($phone,$unit_number,$amount)
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

        return $response->body();
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
        Log::info($request);

        return response()->json(['message' => 'Callback received successfully']);
    }
}