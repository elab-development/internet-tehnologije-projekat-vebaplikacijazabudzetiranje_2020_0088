<?php 
namespace App\Http\Requests;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordRequest extends FormRequest{


    public function authorize() {
        return !($user=auth()->user()) || !($user instanceof User);
    }

    public function rules() {
        return [
            'email'=> [
                'required',
                'exists:users,email'
            ],
            'token'=>[
                'required'
            ],
            'password'=>[
                'required',
                'min:6',
                'confirmed'
            ]
            ];
    }
}