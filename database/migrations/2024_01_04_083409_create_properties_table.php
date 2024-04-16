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
            // $table->id();
            // $table->string('property_name');
            // $table->string('address');
            // $table->string('email')->unique();
            // $table->string('phone');
            // // $table->string('website');
            // $table->string('website')->nullable();
            // $table->string('description');
            // $table->unsignedBigInteger('number_of_units');
            // $table->unsignedBigInteger('landlord_id');
            // $table->timestamps();
            // $table->softDeletes(); 


            $table->id();
            $table->unsignedBigInteger('landlord_id');
            $table->string('property_name');
            $table->string('address');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('website')->nullable();
            $table->text('description');
            $table->unsignedBigInteger('number_of_units');
            // $table->string('property_type');
            // $table->integer('bedrooms');
            // $table->integer('bathrooms');
            $table->decimal('rent', 10, 2)->nullable();
            $table->decimal('deposit', 10, 2)->nullable();
            $table->string('lease_term')->nullable();
            // $table->json('amenities')->nullable(); // storing as JSON
            $table->decimal('latitude', 9, 6)->nullable();
            $table->decimal('longitude', 9, 6)->nullable();
            $table->json('images')->nullable(); // storing image URLs as JSON
            $table->string('video_url')->nullable();
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
