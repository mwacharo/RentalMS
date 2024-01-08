<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tenant_id');
            $table->unsignedBigInteger('unit_id');
            $table->unsignedBigInteger('invoice_id');
            $table->decimal('amount', 8, 2);
            $table->timestamp('paid_at');
            $table->string('payment_method');
            $table->timestamps();
            $table->foreign('tenant_id')->references('id')->on('tenants');
            $table->foreign('unit_id')->references('id')->on('units');
            $table->foreign('invoice_id')->references('id')->on('invoices');

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
