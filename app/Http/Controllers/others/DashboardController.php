<?php

namespace App\Http\Controllers\others;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\CustomerTransation;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function getStatistics()
    {
        $total_customers = Customer::count();

        $totals = CustomerTransation::where('user_id', Auth::id())
            ->selectRaw("
            SUM(CASE WHEN type = 'DUE' THEN amount ELSE 0 END) as total_due,
            SUM(CASE WHEN type = 'CREDIT' THEN amount ELSE 0 END) as total_credit
        ")
            ->first();

        $statistics = [
            'total_customers' => $total_customers,
            'total_due' => $totals->total_due ?? 0,
            'total_credit' => $totals->total_credit ?? 0,
            'total_balance' => ($totals->total_credit ?? 0) - ($totals->total_due ?? 0),
        ];

        return response()->json([
            'status' => 'success',
            'data' => $statistics,
        ]);
    }
}
