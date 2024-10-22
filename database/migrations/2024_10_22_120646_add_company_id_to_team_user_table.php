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
        Schema::table('team_user', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->nullable()->after('team_id');
        });
    }
    
    public function down()
    {
        Schema::table('team_user', function (Blueprint $table) {
            $table->dropColumn('company_id');
        });
    }
    
};
