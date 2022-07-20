<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DebrisSubCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'mid_code', 'debris_category_id'];

    public function category()
    {
        return $this->belongsTo(DebrisCategory::class);
    }

    public function debris()
    {
        return $this->hasMany(Debris::class);
    }
}
