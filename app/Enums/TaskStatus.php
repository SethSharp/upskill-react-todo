<?php

namespace App\Enums;

enum TaskStatus: string
{
    const STATUS_COMPLETED = 'completed';
    const STATUS_NOT_COMPLETED = 'not_completed';
}