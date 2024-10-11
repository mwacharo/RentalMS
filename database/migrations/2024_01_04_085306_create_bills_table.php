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
            $table->string('bill');
            $table->string('unit_cost');
            $table->string('number_of _units');
            // unit_cost
            $table->decimal('amount', 8, 2);
            // $table->decimal('total_amount', 8, 2);
            // $table->decimal('unit_price', 8, 2);

            $table->timestamps();

            // Foreign key constraint
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
