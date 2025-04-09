<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\CustomerTransation;
use Illuminate\Http\Request;

class CustomerTransationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Customer $customer)
    {
        $transition = $customer->load('customerTransations');

        return response()->json([
            'status' => true,
            'message' => 'Customer transactions retrieved successfully',
            'data' => [
                'customer' => $customer,
                'transactions' => $transition
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Customer $customer, Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'type' => 'required|in:CREDIT,DUE',
            'note' => 'nullable|string|max:255',
        ]);

        CustomerTransation::create([
            'amount' => $request->input('amount'),
            'type' => $request->input('type'),
            'note' => $request->input('note'),
            'customer_id' => $customer->id,
        ]);

        return response()->json([
            'message' => 'Customer transaction created successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer, CustomerTransation $customerTransation)
    {
        return response()->json([
            'status' => true,
            'message' => 'Customer transaction retrieved successfully',
            'data' => $customerTransation
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CustomerTransation $customerTransation)

    {
        $request->validate([
            'amount' => 'required|numeric',
            'type' => 'required|in:CREDIT,DUE',
            'note' => 'nullable|string|max:255',
        ]);


        $customerTransation->update([
            'amount' => $request->input('amount'),
            'type' => $request->input('type'),
            'note' => $request->input('note'),
        ]);

        return response()->json([
            'message' => 'Customer transaction updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CustomerTransation $customerTransation)
    {
        $customerTransation->delete();
        return response()->json([
            'message' => 'Customer transaction deleted successfully',
        ]);
    }
}
