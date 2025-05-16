<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use App\Observers\CustomerObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

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


    protected static function booted()
    {
        static::addGlobalScope('user', function (Builder $builder) {
            $builder->where('user_id', Auth::id());
        });
    }
}
