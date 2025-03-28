<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('description');
            $table->boolean('status')->default(\App\Enums\TaskStatus::STATUS_NOT_COMPLETED);
            $table->timestamps();
        });
    }
};
