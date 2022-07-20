<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaxaViability extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function taxas()
    {
        return $this->hasMany(Taxa::class);
    }
}
