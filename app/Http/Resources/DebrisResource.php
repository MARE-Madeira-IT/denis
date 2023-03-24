<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DebrisResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'weight' => $this->weight,
            'marks' => $this->marks,
            'origin' => $this->origin,
            'image' => $this->debris_image,
            'type' => [
                'id' => $this->type->id,
                'name' => $this->type->name,
                'depth' => $this->depth
            ],
            'habitat' => [
                'id' => $this->habitat->id,
                'name' => $this->otherHabitat ? $this->otherHabitat : $this->habitat->name,
            ],
            'size' => [
                'id' => $this->size->id,
                'name' => $this->size->name,
            ],
            'thickness' => $this->thickness,
            'rugosity' => [
                'id' => $this->rugosity_id ? $this->rugosity->id : null,
                'name' => $this->otherRugosity ? $this->otherRugosity : $this->rugosity_id ? $this->rugosity->name : null,
            ],
            'litter_category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'subcategory' => $this->subcategory
            ],
        ];
    }
}
