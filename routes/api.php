<?php

use App\Http\Controllers\EventParticipantController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TypeEventController;
use App\Http\Controllers\API\AuthController;


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

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/user',[UserController::class,'show']);



Route::group(['middleware'=>['auth:sanctum']], function(){

    Route::resource('event-participants', EventParticipantController::class);
    Route::get('/event-by-type/{id}',[EventController::class,'getEventsByType']);
    Route::get('/random-user',[EventController::class,'randomUser']);
    Route::get('/filter-events',[EventController::class,'filterEvents']);
    Route::get('/type_events',[TypeEventController::class,'index']);
    Route::post('/logout',[AuthController::class,'logout']);
    Route::put('/user/{id}',[UserController::class,'update']);
    

    Route::resource('events', EventController::class);
    Route::get('/users',[UserController::class,'index']);
    Route::get('/event-paginate',[EventController::class,'paginateEvents']);


    Route::get('/profile',function(Request $request){
        return auth()->user();
    });


}
);