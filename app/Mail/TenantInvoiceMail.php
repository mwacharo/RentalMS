<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TenantInvoiceMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    // public function __construct()
    // {
    //     //
    // }

    public $invoice;
    public $tenant;

    public function __construct($invoice, $tenant)
    {
        $this->invoice = $invoice;
        $this->tenant = $tenant;
    }

    public function build()
    {
        return $this->view('emails.tenantInvoice')
            ->with([
                // 'invoiceAmount' => $this->invoice->total_amount,
                // 'tenantName' => $this->tenant->tenant_name,
                

                'invoiceAmount' => $this->invoice['total_amount'], // Change to array access
                'tenantName' => $this->tenant->tenant_name,
                // Include other variable
                // Include other variables here
            ]);
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Tenant Invoice Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.tenantInvoice',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
