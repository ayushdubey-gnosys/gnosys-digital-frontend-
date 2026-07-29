<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'A'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::inertia('/solutions/erpnext-healthcare', 'erpnext-for-healthcare')->name('erpnext-for-healthcare');
Route::inertia('/solutions/epc-project-control', 'epc-project-control')->name('epc-project-control');
Route::inertia('/solutions/erpnext-ecommerce', 'erpnext-ecommerce')->name('erpnext-ecommerce');
Route::inertia('/solutions/erpnext-restaurants', 'erpnext-restaurants')->name('erpnext-restaurants');
Route::inertia('/solutions/erpnext-financial', 'erpnext-finance')->name('erpnext-finance');
Route::inertia('/solutions/erpnext-education', 'erpnext-education')->name('erpnext-education');
Route::inertia('/solutions/erpnext-nonprofits', 'erpnext-ngo')->name('erpnext-nonprofits');
Route::inertia('/solutions/erpnext-professional-services', 'erpnext-professional-services')->name('erpnext-professional-services');
Route::inertia('/solutions/erpnext-retail', 'erpnext-retail')->name('erpnext-retail');
Route::inertia('/solutions/erpnext-trading', 'erpnext-trading-distribution')->name('erpnext-trading');
Route::inertia('/solutions/erpnext-manufacturing', 'erpnext-manufacturing')->name('erpnext-manufacturing');
Route::inertia('/solutions/channel-distribution', 'channel-distribution')->name('channel-distribution');
Route::inertia('/solutions/custom-manufacturing', 'custom-manufacturing')->name('custom-manufacturing');
Route::inertia('/solutions/custom-warehouse', 'custom-warehouse')->name('custom-warehouse');
Route::inertia('/solutions/supply-chain', 'supply-chain')->name('supply-chain');
Route::inertia('/solutions/seo-services', 'seo-services')->name('seo-services');
Route::inertia('/solutions/case-study', 'case-study')->name('case-study');
Route::inertia('/solutions/blog', 'blog')->name('blog');
Route::get('/{type}/{slug?}', function($type, $slug = null) {
    return inertia('category', [
        'type' => $type,
        'slug' => $slug
    ]);
})->whereIn('type', ['digital-products', 'digital-services', 'solutions'])->name('category');

Route::inertia('/erpnext-implementation', 'erpnext-implementation')->name('erpnext-implementation');
require __DIR__.'/settings.php';
