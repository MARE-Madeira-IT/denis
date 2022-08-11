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
            'type' => [
                'id' => $this->type->id,
                'name' => $this->type->name,
                'depth' => $this->depth
            ],
            'habitat' => [
                'id' => $this->habitat->id,
                'name' => $this->otherHabitat ? $this->otherHabitat : $this->habitat->name,
            ],
            'material' => [
                'id' => $this->material->id,
                'name' => $this->otherMaterial ? $this->otherMaterial : $this->material->name,
            ],
            'size' => [
                'id' => $this->size->id,
                'name' => $this->size->name,
            ],
            'thickness' => [
                'id' => $this->thickness->id,
                'name' => $this->thickness->name,
            ],
            'rugosity' => [
                'id' => $this->rugosity->id,
                'name' => $this->otherRugosity ? $this->otherRugosity : $this->rugosity->name,
            ],
            'litter_category' => [
                'id' => $this->subcategory->id,
                'name' => $this->subcategory->name,
                'mdi_code' => $this->subcategory->mdi_code
            ],

        ];
    }
}
