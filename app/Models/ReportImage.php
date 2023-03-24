<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportImage extends Model
{
    protected $fillable = ["path", "report_id"];
    use HasFactory;
}
