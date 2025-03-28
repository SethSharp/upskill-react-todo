<?php

namespace App\Models;

use App\Enums\TaskStatus;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
   use HasFactory;

   protected $guarded = [];

   protected $casts = [
       'status' => TaskStatus::class
   ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
   }
}
