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

    public function debris()
    {
        return $this->belongsTo(Debris::class);
    }

    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    public function taxa()
    {
        return $this->belongsTo(Taxa::class);
    }
}
