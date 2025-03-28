<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Task;
use Inertia\Response;
use App\Enums\TaskStatus;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        /** @var User $user */
        $user = auth()->user();

        return inertia('dashboard', [
            'completedTasks' => $user->tasks()->where('status', TaskStatus::STATUS_COMPLETED)->get(),
            'incompleteTasks' => $user->tasks()->where('status', TaskStatus::STATUS_NOT_COMPLETED)->get(),
        ]);
    }
}