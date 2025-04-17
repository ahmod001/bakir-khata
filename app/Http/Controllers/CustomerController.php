<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::all();

        return response()->json([
            'message' => 'Customers retrieved successfully',
            'data' => $customers
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'nid' => 'nullable|string',
            'address' => 'nullable|string',
            'img' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validation->errors()
            ], 422);
        }

        $customer = new Customer();
        $customer->user_id = $request->user()->id;
        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->address = $request->address;
        $customer->nid = $request->nid;

        if ($request->hasFile('img')) {
            $img = $request->file('img');
            $imgName = time() . '.' . $img->getClientOriginalExtension();
            $img->move(public_path('customers'), $imgName);
            $customer->img_url = 'customers/' . $imgName;
        }

        $customer->save();

        return response()->json([
            'message' => 'Customer created successfully',
            'data' => $customer
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        return response()->json([
            'message' => 'Customer retrieved successfully',
            'data' => $customer
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'phone' => 'sometimes|required|string|max:15',
            'nid' => 'sometimes|nullable|string',
            'address' => 'sometimes|nullable|string',
            'img' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        if ($request->has('name')) {
            $customer->name = $request->name;
        }
        if ($request->has('phone')) {
            $customer->phone = $request->phone;
        }
        if ($request->has('address')) {
            $customer->address = $request->address;
        }
        if ($request->has('nid')) {
            $customer->nid = $request->nid;
        }

        if ($request->hasFile('img')) {
            // Delete old image if exists
            if ($customer->img_url) {
                unlink(public_path($customer->img_url));
            }
            $img = $request->file('img');
            $imgName = time() . '.' . $img->getClientOriginalExtension();
            $img->move(public_path('customers'), $imgName);
            $customer->img_url = 'customers/' . $imgName;
        }

        $customer->save();

        return response()->json([
            'message' => 'Customer updated successfully',
            'data' => $customer
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();
        
        return response()->json([
            'message' => 'Customer deleted successfully'
        ]);
    }
}
