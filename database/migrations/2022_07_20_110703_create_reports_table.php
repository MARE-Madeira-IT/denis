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
            $table->date('date');
            $table->date('final_date')->nullable();
            $table->string('date_type')->default('day');
            $table->string('custom_id')->nullable();
            $table->unsignedBigInteger('collection_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->decimal('latitude', 10, 7);
            $table->decimal('longitude', 10, 7);
            $table->string('title_publication')->nullable();
            $table->string('journal_publication')->nullable();
            $table->string('doi')->nullable();
            $table->integer('year_publication')->nullable();
            $table->string('volume_publication')->nullable();
            $table->string('pages_publication')->nullable();
            $table->string('first_author')->nullable();
            $table->string('authors')->nullable();
            $table->text('notes')->nullable();
            $table->text('ongoing_survey')->nullable();
            $table->unsignedBigInteger('site_id');
            $table->unsignedBigInteger('debris_id');
            $table->timestamps();

            $table->foreign('collection_id')->references('id')->on('collections')->onDelete('set null');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('site_id')->references('id')->on('sites')->onDelete('cascade');
            $table->foreign('debris_id')->references('id')->on('debris')->onDelete('cascade');
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
