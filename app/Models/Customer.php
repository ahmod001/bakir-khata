<?php

namespace App\Models;

use App\Observers\CustomerObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy([CustomerObserver::class])]

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
