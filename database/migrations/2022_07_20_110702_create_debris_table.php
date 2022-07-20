<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDebrisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debris', function (Blueprint $table) {
            $table->id();
            $table->string('habitat');
            $table->string('depth');
            $table->string('weight');
            $table->string('rugosity');
            $table->string('marks');
            $table->string('origin');
            $table->unsignedBigInteger('debris_size_id');
            $table->unsignedBigInteger('debris_rugosity_id');
            $table->unsignedBigInteger('debris_habitat_id');
            $table->unsignedBigInteger('debris_thickness_id');
            $table->unsignedBigInteger('debris_material_id');
            $table->unsignedBigInteger('debris_type_id');
            $table->unsignedBigInteger('debris_subcategory_id');
            $table->timestamps();

            $table->foreign('debris_size_id')->references('id')->on('debris_sizes');
            $table->foreign('debris_rugosity_id')->references('id')->on('debris_rugosities');
            $table->foreign('debris_habitat_id')->references('id')->on('debris_habitats');
            $table->foreign('debris_thickness_id')->references('id')->on('debris_thicknesses');
            $table->foreign('debris_material_id')->references('id')->on('debris_materials');
            $table->foreign('debris_type_id')->references('id')->on('debris_types');
            $table->foreign('debris_subcategory_id')->references('id')->on('debris_sub_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('debris');
    }
}
