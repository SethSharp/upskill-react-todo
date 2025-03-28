<?php

namespace App\Http\Controllers\Tasks;

use App\Http\Controllers\Controller;

class CreateTaskController extends Controller
{
    public function __invoke()
    {
        return inertia('tasks/create');
    }
}