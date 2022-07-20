<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaxaMaturity extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function taxas()
    {
        return $this->belongsToMany(Taxa::class, 'taxa_has_maturities');
    }
}
