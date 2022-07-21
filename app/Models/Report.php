<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    public function validations()
    {
        return $this->belongsToMany(User::class, 'report_has_validations');
    }
}
