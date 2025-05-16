<?php

namespace App\Observers;

use App\Models\Customer;
use Illuminate\Support\Facades\Auth;

class CustomerObserver
{
    /**
     * Handle the Customer "created" event.
     * 
     */

    public function saving(Customer $customer): void
    {
        $slug = generateSlug(Customer::class, $customer->name);
        $customer->slug = $slug;
        $customer->user_id = Auth::id();
    }
    /**
     * Handle the Customer "updated" event.
     */
    public function updated(Customer $customer): void {}

    /**
     * Handle the Customer "deleted" event.
     */
    public function deleting(Customer $customer): void
    {
        $customer->customerTransations()->delete();
    }

    /**
     * Handle the Customer "restored" event.
     */
    public function restored(Customer $customer): void
    {
        //
    }

    /**
     * Handle the Customer "force deleted" event.
     */
    public function forceDeleted(Customer $customer): void
    {
        //
    }
}
