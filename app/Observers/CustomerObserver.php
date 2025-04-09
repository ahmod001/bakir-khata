<?php

namespace App\Observers;

use App\Models\Customer;

class CustomerObserver
{
    /**
     * Handle the Customer "created" event.
     * 
     */

    public function saving(Customer $customer): void
    {
        $customer->slug = generateSlug(Customer::class, $customer->name);
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
