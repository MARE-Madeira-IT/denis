<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MinimalDebrisResource extends JsonResource
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
            'mdi_code' => $this->subcategory ? $this->subcategory->mdi_code : null,
            'name' => $this->subcategory ? $this->subcategory->name : $this->category->name,
        ];
    }
}
