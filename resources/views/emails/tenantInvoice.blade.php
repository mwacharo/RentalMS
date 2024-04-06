<x-mail::message>
# Invoice Details
Date Issued: {{ $invoice['issued_at'] }}

Hello {{ $invoice['tenant_name'] }},

An invoice has been created for your unit, number {{ $invoice['unit_number'] }}, in the property {{ $invoice['property_name'] }}.

Here are the details:

- Bills Summary: {{ $invoice['bills_summary'] }}
- Rent         : {{ $invoice['rent'] }}
@if($invoice['deposit_status'] == '0')
- Deposit      : {{ $invoice['deposit'] }}
@endif
- Total Amount : {{ $invoice['total_amount'] }}

Please pay this invoice by the due date of {{ $invoice['due_date'] }}.

You can easily make a payment by clicking on the following link: {{ $invoice['link'] }}.

Thank you,

{{ config('app.name') }}
</x-mail::message>
