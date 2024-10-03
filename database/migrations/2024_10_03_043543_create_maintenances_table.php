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
        Schema::create('maintenances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->references('id')->on('tenants'); // Foreign key for tenant
            $table->foreignId('property_id')->references('id')->on('properties'); // Foreign key for tenant
            $table->foreignId('unit_id'); // Foreign key for unit
            $table->text('description'); // Maintenance description
            $table->date('request_date'); // Date of maintenance request
            $table->enum('status', ['pending', 'in_progress', 'completed', 'cancelled'])->default('pending'); // Status
            $table->enum('priority', ['low', 'medium', 'high'])->default('medium'); // Priority of the request
            $table->string('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maintenances');
    }
};
