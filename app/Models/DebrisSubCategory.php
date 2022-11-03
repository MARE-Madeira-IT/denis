<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;

class DebrisSubCategory extends Model
{
    use FiltersRecords;

    protected $fillable = ['name', 'mid_code', 'debris_category_id'];

    public function category()
    {
        return $this->belongsTo(DebrisCategory::class, 'debris_category_id');
    }

    public function debris()
    {
        return $this->hasMany(Debris::class);
    }
}
