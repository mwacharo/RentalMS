<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;



    // protected $fillable = ['tenant_id','water_bill', 'internet_bill', 'waste_collection', 'rent'];

    // public function bills()
    // {
    //     return $this->belongsTo(Tenant::class);
    // }

    // Change from tenant_id to unit_id or property_id
    //  protected $fillable = ['unit_id', 'water_bill', 'internet_bill', 'waste_collection', 'rent','deposit'];\\
    protected $fillable = [
        'bill',
        'amount',
        'unit_cost',
        'number_of_units'
        // 'total_amount','unit_price'
    ];

    // Update relationship method
    //  public function unit()
    //  {
    //      return $this->belongsTo(Unit::class);
    //  }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function tenants()
    {
        return $this->belongsToMany(Tenant::class, 'tenants_bills')->using(TenantsBill::class);
    }

    //  public function invoice()
    //  {
    //      return $this->belongsTo(Invoice::class);
    //  }
    public function invoices()
    {
        //  return $this->belongsToMany(Invoice::class, 'bill_invoices')->withPivot('amount');

        return $this->belongsToMany(Invoice::class, 'bill_invoices')
            ->using(BillInvoice::class)
            ->withPivot('amount');
    }
}
