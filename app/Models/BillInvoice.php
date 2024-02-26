<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class BillInvoice extends Pivot
{
    use HasFactory;

    protected $table = 'bill_invoices';

    protected $fillable = ['invoice_id', 'bill_id', 'amount'];
}
