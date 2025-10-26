<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register/index');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'school' => 'required|string|max:255',
            'birth_date' => 'required|date|before:today',
            'cpf' => 'required|string|size:14|unique:users,cpf',
            'school_year' => 'required|string|in:6,7,8,9,1,2,3',
            'gender' => 'required|in:male,female,other',
            'language' => 'required|string|in:pt-BR,en-US,es-ES',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'phone' => 'required|string|max:15',
            'avatar' => 'nullable|string',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'school' => $request->school,
            'birth_date' => $request->birth_date,
            'cpf' => $request->cpf,
            'school_year' => $request->school_year,
            'gender' => $request->gender,
            'language' => $request->language,
            'email' => $request->email,
            'phone' => $request->phone,
            'avatar' => $request->avatar,
            'password' => $request->password,
            'role' => 'aluno', // Sempre define como aluno no registro
        ]);

        event(new Registered($user));

        // Redireciona para o login ao invés de logar automaticamente
        return redirect()->route('login')->with('status', 'Cadastro realizado com sucesso! Faça login para continuar.');
    }
}
