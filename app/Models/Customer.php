<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'slug',
        'phone',
        'img_url',
        'address',
        'nid',
    ];

    protected $hidden = [
        'user_id'
    ];


    public function customerTransations()
    {
        return $this->hasMany(CustomerTransation::class);
    }
}
