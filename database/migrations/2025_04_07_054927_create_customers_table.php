<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained()->onDelete('restrict')->onUpdate('cascade');

            $table->string('name')->index();
            $table->string('slug')->index()->nullable();
            
            $table->string('phone')->unique()->index();

            $table->text('img_url')->nullable();
            $table->string('address')->nullable();
            $table->string('nid')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
