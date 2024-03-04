<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_type');
            $table->string('trans_id')->unique();
            $table->dateTime('trans_time');
            $table->decimal('trans_amount', 10, 2);
            $table->string('business_short_code');
            $table->string('bill_ref_number');
            // $table->string('invoice_number')->nullable();
            $table->string('org_account_balance')->nullable();
            $table->string('third_party_trans_id')->nullable();
            $table->string('msisdn');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->timestamps(); // Optionally adds created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
