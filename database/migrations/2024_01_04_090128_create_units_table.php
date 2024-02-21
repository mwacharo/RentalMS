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
        Schema::create('units', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('property_id');
            $table->string('unit_number');
            $table->decimal('deposit', 8, 2);
            $table->decimal('rent', 8, 2);
            $table->string('unit_status');
            $table->timestamps();

            $table->foreign('property_id')->references('id')->on('properties');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('units');
    }
};
