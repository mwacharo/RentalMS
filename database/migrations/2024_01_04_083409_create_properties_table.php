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
    Schema::create('properties', function (Blueprint $table) {
        $table->id();
        $table->string('property_name');
        $table->string('address');
        $table->string('email')->unique();
        $table->string('phone');
        // $table->string('website');
        $table->string('website')->nullable();
        $table->string('description');
        $table->unsignedBigInteger('number_of_units');
        $table->unsignedBigInteger('landlord_id');
        $table->timestamps();
        $table->softDeletes(); 


        $table->foreign('landlord_id')->references('id')->on('landlords')->onDelete('cascade');

    });
}

    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
