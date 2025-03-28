<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        /** @var User $user */
        $user = auth()->user();

        return inertia('dashboard', [
            'completedTasks' => $user->tasks()->where('completed', true)->get(),
            'incompleteTasks' => $user->tasks()->where('completed', false)->get(),
        ]);
    }
}