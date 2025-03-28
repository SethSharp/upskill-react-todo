<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Task;
use App\Enums\TaskStatus;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'User',
            'email' => 'user@todo.test',
        ]);

        $user->tasks()->create([
            'description' => 'Brush your teeth',
            'status' => TaskStatus::STATUS_COMPLETED,
        ]);

        $user->tasks()->create([
            'description' => 'Check emails',
            'status' => TaskStatus::STATUS_NOT_COMPLETED,
        ]);
    }
}
