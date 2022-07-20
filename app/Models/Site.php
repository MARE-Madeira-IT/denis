<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'region', 'country_id', 'lme_id'];

    public function country()
    {
        return $this->belongsTo("App\Models\Country");
    }

    public function lme()
    {
        return $this->belongsTo("App\Models\Lme");
    }
}
