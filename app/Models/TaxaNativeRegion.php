<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;

class TaxaNativeRegion extends Model
{
    use FiltersRecords;

    protected $fillable = ['name'];

    public function taxas()
    {
        return $this->belongsToMany(Taxa::class, 'taxa_has_native_regions');
    }
}
