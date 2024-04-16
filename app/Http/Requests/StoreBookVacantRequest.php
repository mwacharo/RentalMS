<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookVacantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //

            'property_id' => 'required|exists:properties,id',
            'tenant_id' => 'required|exists:users,id',
            'date' => 'required|date|after_or_equal:today',
            'status' => 'required|string|max:255',
        ];
    }
}
