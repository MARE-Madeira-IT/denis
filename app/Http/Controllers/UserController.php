<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $validator = $request->validated();
        $record = User::create($validator);
        $record->assignRole("user");

        return new UserResource($record);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $validator = $request->validated();
        $user->update($validator);

        if (array_key_exists('image', $validator)) {
            $filename = uniqid() . '.jpg';

            Image::make($validator['image'])->resize(500, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->save(public_path('images/users/' . $filename));

            $user->image = "/images/users/" . $filename;
            $user->save();
        }

        return new UserResource($user);
    }
}
