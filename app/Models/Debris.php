<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Debris extends Model
{
    use HasFactory;

    public function material()
    {
        return $this->belongsTo(DebrisMaterial::class, 'debris_material_id');
    }

    public function type()
    {
        return $this->belongsTo(DebrisType::class, 'debris_type_id');
    }

    public function subcategory()
    {
        return $this->belongsTo(DebrisSubCategory::class, 'debris_subcategory_id');
    }

    public function size()
    {
        return $this->belongsTo(DebrisSize::class, 'debris_size_id');
    }

    public function thickness()
    {
        return $this->belongsTo(DebrisThickness::class, 'debris_thickness_id');
    }

    public function habitat()
    {
        return $this->belongsTo(DebrisHabitat::class, 'debris_habitat_id');
    }

    public function rugosity()
    {
        return $this->belongsTo(DebrisRugosity::class, 'debris_rugosity_id');
    }

    public function report()
    {
        return $this->hasOne(Report::class);
    }
}
