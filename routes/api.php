<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TypeEventController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\EventParticipantController;
use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

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
//Route::post('/events',[EventController::class,'store']);
//Route::put('/events',[EventController::class,'store']);
//Route::resource('events', EventController::class);
//Route::get('/users/{id}',[UserController::class,'show']);

Route::get('/users',[UserController::class,'index']);

Route::get('/event-paginate',[EventController::class,'paginateEvents']);
Route::resource('event-participants', EventParticipantController::class);
Route::get('/event-by-type/{id}',[EventController::class,'getEventsByType']);

Route::get('/type_events/{id}',[TypeEventController::class,'index']);

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

Route::resource('events', EventController::class)->only(['index','show']);

Route::group(['middleware'=>['auth:sanctum']],
            function(){
                Route::get('/profile',function(Request $request){

                return auth()->user();

    });
    Route::resource('events', EventController::class)->only(['update','store','destroy']);
    Route::post('/logout',[AuthController::class,'logout']);
   }
);
Route::post('/forgot',[AuthController::class,'forgot']);
Route::post('/reset',[AuthController::class,'reset']);


// Route::group(['middleware'=>['auth:sanctum']],
//             function(){
//                 Route::get('/profile',function(Request $request){
//                 return auth()->user();});
    
    
// }
// );
//Route::post('forgot_password',[ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');

//Route::post('reset_password',[ResetPasswordController::class, 'reset'])->name('password.reset');




 




// Route::post('/reset-password', function (Request $request) {
//     $request->validate([
//         'token' => 'required',
//         'email' => 'required|email',
//         'password' => 'required|min:8|confirmed',
//     ]);
 
//     $status = Password::reset(
//         $request->only('email', 'password', 'password_confirmation', 'token'),
//         function (User $user, string $password) {
//             $user->forceFill([
//                 'password' => Hash::make($password)
//             ])->setRememberToken(Str::random(60));
 
//             $user->save();
 
//             event(new PasswordReset($user));
//         }
//     );
 
//     return $status === Password::PASSWORD_RESET
//                 ? redirect()->route('login')->with('status', __($status))
//                 : back()->withErrors(['email' => [__($status)]]);
// })->middleware('guest')->name('password.update');

 








