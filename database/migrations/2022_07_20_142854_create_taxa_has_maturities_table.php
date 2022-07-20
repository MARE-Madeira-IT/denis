<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxaHasMaturitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taxa_has_maturities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('taxa_id');
            $table->unsignedBigInteger('taxa_maturity_id');
            $table->timestamps();

            $table->foreign('taxa_id')->references('id')->on('taxas')->onDelete('cascade');
            $table->foreign('taxa_maturity_id')->references('id')->on('taxa_maturities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('taxa_has_maturities');
    }
}
