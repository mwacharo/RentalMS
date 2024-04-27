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
        Schema::create('book_vacants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vacant_id');
            $table->foreignId('tenant_id');
            $table->foreignId('property_id');
            $table->date('date');
            $table->string('status')->default('pending');
            $table->string('number_of_units');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_vacants');
    }
};
