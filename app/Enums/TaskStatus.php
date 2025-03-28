<?php

namespace App\Enums;

enum TaskStatus: string
{
    case STATUS_COMPLETED = 'completed';
    case STATUS_NOT_COMPLETED = 'not_completed';
}