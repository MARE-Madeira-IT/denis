<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Debris extends Model
{
    use HasFactory;
    protected $fillable = [
        "depth",
        "debris_type_id",
        "debris_habitat_id",
        "debris_material_id",
        "debris_size_id",
        "weight",
        "debris_thickness_id",
        "debris_rugosity_id",
        "debris_subcategory_id",
        "marks",
        "origin",
        "otherHabitat",
        "otherMaterial",
        "otherRugosity"
    ];

    public static function generateDataArray($data)
    {
        return [
            "depth" => array_key_exists("debris_depth", $data) ? $data["debris_depth"] : null,
            "debris_habitat_id" => $data["debris_habitat"],
            "debris_material_id" => $data["debris_material"],
            "debris_type_id" => $data["debris_type"],
            "debris_size_id" => $data["debris_size"],
            "weight" => array_key_exists("debris_weight", $data) ? $data["debris_otherHabitat"] : null,
            "debris_thickness_id" => $data["debris_thickness"],
            "debris_rugosity_id" => $data["debris_rugosity"],
            "debris_subcategory_id" => $data["debris_sub_category"][1],
            "marks" => array_key_exists("debris_marks", $data) ? $data["debris_otherHabitat"] : null,
            "origin" => array_key_exists("debris_origin", $data) ? $data["debris_otherHabitat"] : null,
            "otherHabitat" => array_key_exists("debris_otherHabitat", $data) ? $data["debris_otherHabitat"] : null,
            "otherMaterial" => array_key_exists("debris_otherMaterial", $data) ? $data["debris_otherMaterial"] : null,
            "otherRugosity" => array_key_exists("debris_otherRugosity", $data) ? $data["debris_otherRugosity"] : null,
        ];
    }

    public static function store($data)
    {
        return self::create([
            "depth" => array_key_exists("debris_depth", $data) ? $data["debris_depth"] : null,
            "debris_habitat_id" => $data["debris_habitat"],
            "debris_material_id" => $data["debris_material"],
            "debris_type_id" => $data["debris_type"],
            "debris_size_id" => $data["debris_size"],
            "weight" => array_key_exists("debris_weight", $data) ? $data["debris_otherHabitat"] : null,
            "debris_thickness_id" => $data["debris_thickness"],
            "debris_rugosity_id" => $data["debris_rugosity"],
            "debris_subcategory_id" => $data["debris_sub_category"][1],
            "marks" => array_key_exists("debris_marks", $data) ? $data["debris_otherHabitat"] : null,
            "origin" => array_key_exists("debris_origin", $data) ? $data["debris_otherHabitat"] : null,
            "otherHabitat" => array_key_exists("debris_otherHabitat", $data) ? $data["debris_otherHabitat"] : null,
            "otherMaterial" => array_key_exists("debris_otherMaterial", $data) ? $data["debris_otherMaterial"] : null,
            "otherRugosity" => array_key_exists("debris_otherRugosity", $data) ? $data["debris_otherRugosity"] : null,
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
