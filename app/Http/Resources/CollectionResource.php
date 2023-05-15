<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
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
            'title' => $this->title,
            'doi' => $this->doi,
            'path' => $this->path,
            'description' => $this->description,
            'startUpload' => $this->startUpload,
            'endUpload' => $this->endUpload,
            'nReports' => $this->reports->count(),
            'created_at' => (string) $this->created_at,
        ];
    }
}
