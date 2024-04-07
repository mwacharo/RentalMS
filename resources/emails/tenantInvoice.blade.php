<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Details</title>
</head>
<body>
    <p>Dear {{ $invoice['tenant_name'] }},</p>
    <p>Your invoice for the property "{{ $invoice['property_name'] }}" has been created successfully.</p>
    <p>Invoice Details:</p>
    <ul>
        <li>Tenant Name: {{ $invoice['tenant_name'] }}</li>
        <li>Unit Number: {{ $invoice['unit_number'] }}</li>
        <li>Property Name: {{ $invoice['property_name'] }}</li>
        {{-- <li>Total Amount: ${{ $invoice['total_amount'] }}</li> --}}
        @if (!empty($invoice['bills_summary']))
        <li>Bills Summary: {{ $invoice['bills_summary'] }}</li>
        @endif
    </ul>
    <p>Please make your payment at your earliest convenience.</p>
</body>
</html>
