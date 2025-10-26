<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
    public function store(RegisterRequest $request): RedirectResponse
    {
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

        // Retorna sucesso sem redirecionar (o frontend mostra o modal)
        return back()->with('success', 'Cadastro realizado com sucesso!');
    }
}
