<?php
    
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/hello', function () {
    return response()->json(['message' => 'Hello, World!']);
});

Route::post('/user', function(Request $req) {
    $username = $req->input('username');
    $email = $req->input('email');

    return response()->json([
        'message' => 'Success',
        'username' => $username,
        'email' => $email
    ]);
});