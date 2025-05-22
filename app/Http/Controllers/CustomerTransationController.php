<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\CustomerTransation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
            'user_id' => Auth::id()
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




    public function getDueHistory()
    {
        $year = now()->year;


        $rawData = CustomerTransation::selectRaw('MONTH(created_at) as month, SUM(amount) as due')
            ->where('type', 'DUE')
            ->whereYear('created_at', $year)
            ->groupBy(DB::raw('MONTH(created_at)'))
            ->pluck('due', 'month')
            ->toArray();


        // Formate the data
        $months = [
            1 => 'Jan',
            2 => 'Feb',
            3 => 'Mar',
            4 => 'Apr',
            5 => 'May',
            6 => 'Jun',
            7 => 'Jul',
            8 => 'Aug',
            9 => 'Sep',
            10 => 'Oct',
            11 => 'Nov',
            12 => 'Dec',
        ];

        $finalData = [];

        foreach ($months as $num => $name) {
            $finalData[] = [
                'name' => $name,
                'due' => $rawData[$num] ?? 0,
            ];
        }

        return $finalData;
    }
}
