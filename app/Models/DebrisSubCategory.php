<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;

class DebrisSubCategory extends Model
{
    use FiltersRecords;

    protected $fillable = [
        'name', 'mdi_code', 'debris_category_id', 'ospar_code',
        'unep_code'
    ];

    public function category()
    {
        return $this->belongsTo(DebrisCategory::class, 'debris_category_id');
    }

    public function debris()
    {
        return $this->hasMany(Debris::class);
    }
}
