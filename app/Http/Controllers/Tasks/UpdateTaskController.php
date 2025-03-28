<?php

namespace App\Http\Controllers\Tasks;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class UpdateTaskController extends Controller
{
    public function __invoke(Request $request, Task $task): RedirectResponse
    {
        $task->update([
            'completed' => $request->boolean('completed'),
        ]);

        return redirect()
            ->back()
            ->with('success', 'Updated state of task');
    }
}