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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tenant_id');
            $table->unsignedBigInteger('unit_id');
            $table->decimal('total_amount', 8, 2);
            $table->date('due_date');
            $table->string('status');
            $table->timestamp('issued_at')->useCurrent();
            $table->timestamps();
            $table->foreign('tenant_id')->references('id')->on('tenants');
            $table->foreign('unit_id')->references('id')->on('units');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
// inovoice table --- invoice_no.
// Bills table 
//  tenant_id 
//Deposist
// 
