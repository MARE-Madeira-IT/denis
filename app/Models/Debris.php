<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Debris extends Model
{
    use HasFactory;

    public function material()
    {
        return $this->belongsTo(DebrisMaterial::class);
    }

    public function type()
    {
        return $this->belongsTo(DebrisType::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(DebrisSubCategory::class);
    }

    public function size()
    {
        return $this->belongsTo(DebrisSize::class);
    }

    public function thickness()
    {
        return $this->belongsTo(DebrisThickness::class);
    }

    public function habitat()
    {
        return $this->belongsTo(DebrisHabitat::class);
    }

    public function rugosity()
    {
        return $this->belongsTo(DebrisRugosity::class);
    }
}
