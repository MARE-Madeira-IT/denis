<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;

class Report extends Model
{
    use HasFactory;
    use FiltersRecords;

    public function validation()
    {
        return $this->belongsToMany(Validation::class, 'report_has_validations', 'report_id', 'validation_id');
    }

    public function debris()
    {
        return $this->belongsTo(Debris::class, 'debris_id');
    }

    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    public function taxas()
    {
        return $this->hasMany(Taxa::class);
    }
}
