<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taxas', function (Blueprint $table) {
            $table->id();
            $table->string('authority')->nullable();
            $table->string('year_first_report')->nullable();
            $table->string('reference')->nullable();
            $table->string('identification');
            $table->unsignedBigInteger('report_id');
            $table->unsignedBigInteger('taxa_level_id');
            $table->unsignedBigInteger('taxa_species_status_id');
            $table->unsignedBigInteger('taxa_population_status_id');
            $table->unsignedBigInteger('taxa_abundance_id');
            $table->unsignedBigInteger('taxa_viability_id');
            $table->timestamps();

            $table->foreign('report_id')->references('id')->on('reports')->onDelete('cascade');
            $table->foreign('taxa_level_id')->references('id')->on('taxa_levels')->onDelete('cascade');
            $table->foreign('taxa_species_status_id')->references('id')->on('taxa_species_statuses')->onDelete('cascade');
            $table->foreign('taxa_population_status_id')->references('id')->on('taxa_population_statuses')->onDelete('cascade');
            $table->foreign('taxa_abundance_id')->references('id')->on('taxa_abundances')->onDelete('cascade');
            $table->foreign('taxa_viability_id')->references('id')->on('taxa_viabilities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('taxas');
    }
}
