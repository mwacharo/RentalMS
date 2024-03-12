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
        Schema::create('tenants', function (Blueprint $table) {
            $table->id(); // Primary key, automatically named 'id'
            $table->string('tenant_name');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('national_id')->nullable()->unique()->comment('National ID or Passport Number');
            $table->string('agreement')->nullable();


            $table->unsignedBigInteger('unit_id')->nullable();
            $table->string('property_id')->nullable();
            $table->timestamps();

            $table->foreign('unit_id')->references('id')->on('units');


        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
