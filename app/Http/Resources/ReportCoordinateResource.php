<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReportCoordinateResource extends JsonResource
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
            'custom_id' => $this->custom_id,
            'date' => $this->date,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'debris' => new MinimalDebrisResource($this->debris),
            'taxas' =>  MinimalTaxaResource::collection($this->taxas),
            'created_at' => $this->created_at,
        ];
    }
}
