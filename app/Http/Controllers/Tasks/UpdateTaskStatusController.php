<?php

namespace App\Http\Controllers\Tasks;

use App\Models\Task;
use App\Enums\TaskStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class UpdateTaskStatusController extends Controller
{
    public function __invoke(Request $request, Task $task): RedirectResponse
    {
        $task->update([
            'status' => TaskStatus::tryFrom($request->string('status')),
        ]);

        return redirect()
            ->back()
            ->with('success', 'Updated state of task');
    }
}