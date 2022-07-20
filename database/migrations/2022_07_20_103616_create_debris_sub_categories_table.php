<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDebrisSubCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debris_sub_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('mdi_code')->unique();
            $table->unsignedBigInteger('debris_category_id');
            $table->timestamps();

            $table->foreign('debris_category_id')->references('id')->on('debris_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('debris_sub_categories');
    }
}
