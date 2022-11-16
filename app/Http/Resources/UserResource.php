<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'image' => $this->image,
            'metrics' => $this->metrics,
            'institution' => $this->institution,
            'country' => $this->country,
            'phone' => $this->phone,
            'permissionLevel' => $this->permissionLevel,
            'roles' => [
                'validator' => $this->hasRole('validator'),
                'admin' => $this->hasRole('admin'),
            ]
        ];
    }
}
