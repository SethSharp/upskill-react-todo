<?php

namespace App\Http\Controllers\Tasks;

use App\Http\Controllers\Controller;

class StoreTaskController extends Controller
{
    public function __invoke()
    {
        auth()->user()->tasks()->create([
            'description' => request()->input('description'),
        ]);

        return redirect()
            ->to(route('dashboard'));
    }
}