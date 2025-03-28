<?php

namespace App\Http\Controllers\Tasks;

use App\Models\Task;
use App\Http\Controllers\Controller;

class DeleteTaskController extends Controller
{
    public function __invoke(Task $task)
    {
        $task->delete();

        return redirect()
            ->back();
    }
}