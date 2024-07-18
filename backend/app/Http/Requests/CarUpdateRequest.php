<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarUpdateRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'year' => 'required|integer|digits:4',
            'price' => 'required|numeric|min:0',
            'fuel' => 'required|string|max:50',
            'type' => 'required|string|max:50',
            'description' => 'required|string',
            'brand_id' => 'required|exists:brands,id',
        ];
    }
}
