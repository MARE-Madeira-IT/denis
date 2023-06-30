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
            $table->string('otherHabitat')->nullable();
            $table->string('otherMaterial')->nullable();
            $table->string('depth')->nullable();
            $table->string('weight')->nullable();
            $table->string('otherRugosity')->nullable();
            $table->string('marks')->nullable();
            $table->string('origin')->nullable();
            $table->unsignedBigInteger('debris_size_id')->nullable();
            $table->unsignedBigInteger('debris_rugosity_id')->nullable();
            $table->unsignedBigInteger('debris_habitat_id')->nullable();
            $table->unsignedBigInteger('debris_thickness_id')->nullable();
            $table->unsignedBigInteger('debris_material_id')->nullable();
            $table->unsignedBigInteger('debris_type_id')->nullable();
            $table->unsignedBigInteger('debris_subcategory_id')->nullable();
            $table->unsignedBigInteger('debris_category_id')->nullable();
            $table->timestamps();

            $table->foreign('debris_size_id')->references('id')->on('debris_sizes')->onDelete('cascade');
            $table->foreign('debris_rugosity_id')->references('id')->on('debris_rugosities')->onDelete('cascade');
            $table->foreign('debris_habitat_id')->references('id')->on('debris_habitats')->onDelete('cascade');
            $table->foreign('debris_thickness_id')->references('id')->on('debris_thicknesses')->onDelete('cascade');
            $table->foreign('debris_material_id')->references('id')->on('debris_materials')->onDelete('cascade');
            $table->foreign('debris_type_id')->references('id')->on('debris_types')->onDelete('cascade');
            $table->foreign('debris_category_id')->references('id')->on('debris_categories')->onDelete('cascade');
            $table->foreign('debris_subcategory_id')->references('id')->on('debris_sub_categories')->onDelete('set null');
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
