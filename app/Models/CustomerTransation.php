<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerTransation extends Model
{
    protected $fillable = [
        'amount',
        'type',
        'note',
        'customer_id',
    ];
}
