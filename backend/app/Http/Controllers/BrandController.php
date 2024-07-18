<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use App\Http\Requests\BrandStoreRequest;
use App\Http\Requests\BrandUpdateRequest;


class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $brands = Brand::all();
        return response()->json($brands);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(BrandStoreRequest $request) {
        $brand = Brand::create($request->validated());
        return response()->json($brand, 201);
    }
  
    /**
     * Display the specified resource.
     */
    public function show(Brand $brand) {
        return response()->json($brand);
    }
  
    /**
     * Update the specified resource in storage.
     */
    public function update(BrandUpdateRequest $request, Brand $brand) {
        $brand->update($request->validated());
        return response()->json($brand);
    }
  
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand) {
        $brand->delete();
        return response()->json(['message' => 'Brand deleted successfully']);
    }
}
