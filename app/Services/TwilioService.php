<?php

namespace App\Services;

use Twilio\Rest\Client;

class TwilioService
{
    protected $client;
    protected $from;

    public function __construct()
    {
        $account_sid = env('TWILIO_ACCOUNT_SID');
        $auth_token = env('TWILIO_AUTH_TOKEN');
        $this->from = env('TWILIO_PHONE_NUMBER');


        if (!$account_sid || !$auth_token) {
            throw new \Exception("Twilio credentials not set in environment.");
        }

        $this->client = new Client($account_sid, $auth_token);
    }

    public function sendSMS($to, $message)
    {
        return $this->client->messages->create($to, [
            'from' => $this->from,
            'body' => $message
        ]);
    }
}
