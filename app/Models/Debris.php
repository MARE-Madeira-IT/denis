<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Debris extends Model
{
    use HasFactory;
    protected $fillable = [
        "depth",
        "debris_type_id",
        "debris_habitat_id",
        "debris_size_id",
        "weight",
        "debris_thickness_id",
        "debris_rugosity_id",
        "debris_subcategory_id",
        "marks",
        "origin",
        "otherHabitat",
        "otherRugosity",
        "debris_category_id"
    ];

    public static function generateDataArray($data)
    {
        return [
            "depth" => Arr::get($data, "debris_depth"),
            "debris_habitat_id" => $data["debris_habitat"],
            "debris_type_id" => $data["debris_type"],
            "debris_size_id" => $data["debris_size"],
            "weight" => Arr::get($data, "debris_weight"),
            "debris_thickness_id" => Arr::get($data, "debris_thickness"),
            "debris_rugosity_id" => Arr::get($data, "debris_rugosity"),
            "debris_subcategory_id" => count($data["debris_sub_category"]) == 2 ? $data["debris_sub_category"][1] : null,
            "debris_category_id" => $data["debris_sub_category"][0],
            "marks" => Arr::get($data, "debris_marks"),
            "origin" => Arr::get($data, "debris_origin"),
            "otherHabitat" => Arr::get($data, "debris_otherHabitat"),
            "otherRugosity" => Arr::get($data, "debris_otherRugosity"),
        ];
    }

    public static function store($data)
    {
        return self::create([
            "depth" => Arr::get($data, "debris_depth"),
            "debris_habitat_id" => $data["debris_habitat"],
            "debris_type_id" => $data["debris_type"],
            "debris_size_id" => $data["debris_size"],
            "debris_image" => Arr::get($data, "debris_image"),
            "weight" => Arr::get($data, "debris_weight"),
            "debris_thickness_id" => Arr::get($data, "debris_thickness"),
            "debris_rugosity_id" => Arr::get($data, "debris_rugosity"),
            "debris_subcategory_id" => count($data["debris_sub_category"]) == 2 ? $data["debris_sub_category"][1] : null,
            "debris_category_id" => $data["debris_sub_category"][0],
            "marks" => Arr::get($data, "debris_marks"),
            "origin" => Arr::get($data, "debris_origin"),
            "otherHabitat" => Arr::get($data, "debris_otherHabitat"),
            "otherRugosity" => Arr::get($data, "debris_otherRugosity"),
        ]);
    }

    public function material()
    {
        return $this->belongsTo(DebrisMaterial::class, 'debris_material_id');
    }

    public function type()
    {
        return $this->belongsTo(DebrisType::class, 'debris_type_id');
    }

    public function category()
    {
        return $this->belongsTo(DebrisCategory::class, 'debris_category_id');
    }

    public function subcategory()
    {
        return $this->belongsTo(DebrisSubCategory::class, 'debris_subcategory_id');
    }

    public function size()
    {
        return $this->belongsTo(DebrisSize::class, 'debris_size_id');
    }

    public function thickness()
    {
        return $this->belongsTo(DebrisThickness::class, 'debris_thickness_id');
    }

    public function habitat()
    {
        return $this->belongsTo(DebrisHabitat::class, 'debris_habitat_id');
    }

    public function rugosity()
    {
        return $this->belongsTo(DebrisRugosity::class, 'debris_rugosity_id');
    }

    public function report()
    {
        return $this->hasOne(Report::class);
    }
}
