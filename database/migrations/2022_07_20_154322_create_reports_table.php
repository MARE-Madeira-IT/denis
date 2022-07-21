<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->decimal('latitude', 10, 7);
            $table->decimal('longitude', 10, 7);
            $table->text('notes')->nullable();
            $table->unsignedBigInteger('site_id');
            $table->unsignedBigInteger('debris_id');
            $table->unsignedBigInteger('taxa_id');
            $table->timestamps();

            $table->foreign('site_id')->references('id')->on('sites');
            $table->foreign('debris_id')->references('id')->on('debris');
            $table->foreign('taxa_id')->references('id')->on('taxas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
}
