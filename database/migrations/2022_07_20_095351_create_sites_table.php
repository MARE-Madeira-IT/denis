<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sites', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('region');
            $table->unsignedBigInteger('country_id')->nullable();
            $table->unsignedBigInteger('lme_id')->nullable();
            $table->timestamps();

            $table->foreign('country_id')->references('id')->on('countries');
            $table->foreign('lme_id')->references('id')->on('lmes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sites');
    }
}
