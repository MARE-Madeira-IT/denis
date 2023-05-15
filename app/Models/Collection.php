<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    use HasFactory;
    protected $fillable = ["doi", "description", "title", "startUpload", "endUpload", "path", "user_id"];

    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function errors()
    {
        return $this->hasMany(CollectionError::class);
    }

    public function addError()
    {
        return $this->hasMany(CollectionError::class);
    }
}
