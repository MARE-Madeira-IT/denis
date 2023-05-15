<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CollectionError extends Model
{
    protected $fillable = ["row", "collection_id"];
    use HasFactory;

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }
}
