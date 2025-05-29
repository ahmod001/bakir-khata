<?php

namespace App\Policies;

use App\Models\Customer;
use App\Models\CustomerTransation;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CustomerTransationPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CustomerTransation $customerTransation, Customer $customer)
    {
        if ($user->id === $customerTransation->user_id && $customerTransation->customer_id === $customer->id) {
            return Response::allow();
        }
        return Response::deny();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CustomerTransation $customerTransation)
    {
        if ($user->id === $customerTransation->user_id) {
            return Response::allow();
        }
        return Response::deny();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CustomerTransation $customerTransation): bool
    {
        if ($user->id === $customerTransation->user_id) {
            return Response::allow();
        }
        return Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CustomerTransation $customerTransation): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CustomerTransation $customerTransation): bool
    {
        return false;
    }
}
