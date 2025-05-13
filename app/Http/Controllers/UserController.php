<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            'user' => Auth::user()
        ]);
    }

    public function login(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => 'ভ্যালিডেশন ত্রুটি', 
                'errors' => $validation->errors()
            ], 422);
        }

        // Check if the user exists
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'ইউজার খুঁজে পাওয়া যায়নি'
            ], 401);
        }

        // Check if the password matches
        $isPasswordMatched = Hash::check($request->password, $user->password);
        if (!$isPasswordMatched) {
            return response()->json([
                'message' => 'পাসওয়ার্ড মেলেনি' 
            ], 401);
        }

        Auth::login($user);

        return response()->json([
            'user' => $user,
            'message' => 'ইউজার সফলভাবে লগইন হয়েছে' 
        ]);
    }

    public function register(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'string',
            'email' => 'required',
            'password' => 'required|string|confirmed',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => 'ভ্যালিডেশন ত্রুটি', // Validation error
                'errors' => $validation->errors()
            ], 422);
        }

        // check if the email already exists
        $existingUser = User::where('email', $request->email)->first();
        if ($existingUser) {
            return response()->json([
                'message' => 'এই ইমেইলটি ইতোমধ্যেই ব্যবহৃত হয়েছে' // Email is already taken
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        Auth::login($user);

        return response()->json([
            'user' => $user,
            'message' => 'ইউজার সফলভাবে রেজিস্টার হয়েছে' 
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json([
            'message' => 'ইউজার সফলভাবে লগআউট হয়েছে' 
        ]);
    }
}
