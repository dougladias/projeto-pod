<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:130',
            'school' => 'required|string|min:1|max:200',
            'birth_date' => 'required|date|before:today',
            'cpf' => 'required|string|size:14|unique:users,cpf|regex:/^\d{3}\.\d{3}\.\d{3}-\d{2}$/',
            'school_year' => 'required|string|in:6,7,8,9,1,2,3',
            'gender' => 'required|string|in:male,female,other',
            'language' => 'required|string|in:pt-BR,en-US,es-ES',
            'email' => 'required|string|lowercase|email|max:50|unique:'.User::class,
            'phone' => 'required|string|min:14|max:15|regex:/^\(\d{2}\) \d{4,5}-\d{4}$/',
            'avatar' => 'required|string|in:niko,tina',
            'password' => ['required', 'string', 'min:6', 'max:50', 'confirmed', Rules\Password::defaults()],
            'terms' => 'required|boolean|accepted',
        ];
    }

    /**
     * Get custom validation messages.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            // CPF
            'cpf.unique' => 'Este CPF já está cadastrado. Tente fazer login ou use outro CPF.',
            'cpf.regex' => 'O CPF deve estar no formato: 000.000.000-00',
            'cpf.size' => 'O CPF deve ter 14 caracteres.',

            // Email
            'email.unique' => 'Este e-mail já está cadastrado. Tente fazer login ou use outro e-mail.',
            'email.email' => 'Digite um e-mail válido.',
            'email.max' => 'O e-mail é muito longo.',

            // Nome
            'name.min' => 'O nome deve ter no mínimo 3 caracteres.',
            'name.max' => 'O nome é muito longo.',

            // Outros campos
            'school.required' => 'A escola é obrigatória.',
            'birth_date.required' => 'A data de nascimento é obrigatória.',
            'birth_date.before' => 'A data de nascimento deve ser anterior a hoje.',
            'school_year.required' => 'Selecione o ano escolar.',
            'gender.required' => 'Selecione o sexo.',
            'language.required' => 'Selecione o idioma.',

            // Telefone
            'phone.regex' => 'O telefone deve estar no formato: (00) 00000-0000',
            'phone.min' => 'O telefone está incompleto.',

            // Avatar
            'avatar.required' => 'Escolha um avatar.',
            'avatar.in' => 'Escolha um avatar válido.',

            // Senha
            'password.min' => 'A senha deve ter no mínimo 6 caracteres.',
            'password.max' => 'A senha é muito longa.',
            'password.confirmed' => 'As senhas não coincidem.',

            // Termos
            'terms.accepted' => 'Você precisa aceitar os termos e condições.',
        ];
    }
}
