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
        Schema::create('bill_invoices', function (Blueprint $table) {
    

            $table->id();
            $table->unsignedBigInteger('bill_id');
            $table->unsignedBigInteger('invoice_id');
            $table->decimal('amount', 10, 2);
            $table->foreign('bill_id')->references('id')->on('bills');
            $table->foreign('invoice_id')->references('id')->on('invoices');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bill_invoices');
    }
};
