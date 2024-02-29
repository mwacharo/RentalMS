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
    
        Schema::create('payment_history', function (Blueprint $table) {
            $table->id(); // Creates an auto-incrementing primary key column
            $table->bigInteger('tenant_id')->unsigned(); // For storing user ID
            $table->string('transaction_id')->unique(); // Unique transaction ID
            $table->decimal('amount', 8, 2); // Amount paid
            $table->string('payment_method'); // Payment method used
            $table->string('status'); // Status of the payment
            $table->text('description')->nullable(); // A description of the payment
            $table->timestamps(); // Creates created_at and updated_at columns

            // Optional: Foreign key constraint (ensure the users table exists or remove this line)
            $table->foreign('tenant_id')->references('id')->on('tenants')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_histories');
    }
};
