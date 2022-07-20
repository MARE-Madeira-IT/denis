<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DebrisCategory extends Model
{
    use HasFactory;

    public function subcategories()
    {
        return $this->hasMany(DebrisSubCategory::class);
    }
}
