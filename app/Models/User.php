<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['metrics', 'permissionLevel'];

    public function getMetricsAttribute()
    {
        $reports = Report::where('user_id', $this->id)->get();

        $response = [
            "pending" => 0,
            "approved" => 0,
            "rejected" => 0,
        ];

        foreach ($reports as $key => $report) {
            $validations = $report->validation()->get();
            $statusSize = $report->validation()->count();

            $response[$validations[$statusSize - 1]->name] += 1;
        }
        return $response;
    }
    public function getPermissionLevelAttribute()
    {
        $permissionLevel = 0;

        if ($this->hasRole('validator')) {
            $permissionLevel = 1;
        }

        if ($this->hasRole('admin')) {
            $permissionLevel = 2;
        }

        return $permissionLevel;
    }


    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
