<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TypeEventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap='type';
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return
         [
            'id'=>$this->resource->id,
            'name'=>$this->resource->name
        ];
    }
}
