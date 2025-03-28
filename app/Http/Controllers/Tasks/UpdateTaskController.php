<?php

namespace App\Http\Controllers\Tasks;

use App\Models\Task;
use App\Http\Controllers\Controller;

class UpdateTaskController extends Controller
{
    public function __invoke(Task $task)
    {
        $task->update([
            'description' => request()->input('description'),
        ]);

        return redirect()
            ->back();
    }
}