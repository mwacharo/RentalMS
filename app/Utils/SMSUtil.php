<?php

namespace App\Utils;

class SMSUtil
{
    private $api_key = 'eb6bccbc3995b60ced129e6af9e37ed9';
    private $partner_id = '9799';
    private $api_url = 'https://quicksms.advantasms.com/api/services/sendsms/';

    public function sendSMS($phone, $message)
    {
        // data to be sent
        $data = [
            'apikey' => $this->api_key,
            'partnerID' => $this->partner_id,
            'message' => $message,
            'shortcode' => 'JuaMobile',
            'mobile' => $phone,
        ];

        $payload = json_encode($data);

        $headers = [
            'Content-Type: application/json',
        ];

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $this->api_url);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $result = curl_exec($curl);

        if (curl_errno($curl)) {
            $error_message = curl_error($curl);
            curl_close($curl);
            throw new \Exception('SMS sending failed: ' . $error_message);
        }
        curl_close($curl);

        $response = json_decode($result, true);

        return $response;
    }
}