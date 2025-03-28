<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Task;
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
            'status' => Task::STATUS_COMPLETED,
        ]);

        $user->tasks()->create([
            'description' => 'Check emails',
            'status' => Task::STATUS_NOT_COMPLETED,
        ]);
    }
}
