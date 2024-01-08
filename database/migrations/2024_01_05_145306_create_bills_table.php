<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('bills', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('unit_id'); // assuming bills are linked to units
            $table->decimal('water_bill', 8, 2);
            $table->decimal('internet_bill', 8, 2);
            $table->decimal('waste_collection', 8, 2);
            $table->decimal('rent', 8, 2);
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('unit_id')->references('id')->on('units')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bills');
    }
};
