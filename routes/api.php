<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TypeEventController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('events',[EventController::class,'index']);
//Route::get('events/{id}',[EventController::class,'show']);

Route::get('/users/{id}',[UserController::class,'show']);
Route::get('type_events/{id}',[TypeEventController::class,'show']);
Route::post('/events',[EventController::class,'store']);
Route::put('/events',[EventController::class,'store']);

Route::resource('events', EventController::class);




