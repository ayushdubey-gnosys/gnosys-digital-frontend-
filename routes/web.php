<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::inertia('/solutions/erpnext-healthcare', 'solutions/ERP\'s/erpnext-for-healthcare')->name('erpnext-for-healthcare');
Route::inertia('/solutions/epc-project-control', 'solutions/ERP\'s/epc-project-control')->name('epc-project-control');
Route::inertia('/solutions/erpnext-ecommerce', 'solutions/ERP\'s/erpnext-ecommerce')->name('erpnext-ecommerce');
Route::inertia('/solutions/erpnext-restaurants', 'solutions/ERP\'s/erpnext-restaurants')->name('erpnext-restaurants');
Route::inertia('/solutions/erpnext-financial', 'solutions/ERP\'s/erpnext-finance')->name('erpnext-finance');
Route::inertia('/solutions/erpnext-education', 'solutions/ERP\'s/erpnext-education')->name('erpnext-education');
Route::inertia('/solutions/erpnext-nonprofits', 'solutions/ERP\'s/erpnext-ngo')->name('erpnext-nonprofits');
Route::inertia('/solutions/erpnext-professional-services', 'solutions/ERP\'s/erpnext-professional-services')->name('erpnext-professional-services');
Route::inertia('/solutions/erpnext-retail', 'solutions/ERP\'s/erpnext-retail')->name('erpnext-retail');
Route::inertia('/solutions/erpnext-trading', 'solutions/ERP\'s/erpnext-trading-distribution')->name('erpnext-trading');
Route::inertia('/solutions/erpnext-manufacturing', 'solutions/ERP\'s/erpnext-manufacturing')->name('erpnext-manufacturing');
Route::inertia('/solutions/channel-distribution', 'solutions/channel-distribution')->name('channel-distribution');
Route::inertia('/solutions/custom-manufacturing', 'solutions/custom-manufacturing')->name('custom-manufacturing');
Route::inertia('/solutions/custom-warehouse', 'solutions/custom-warehouse')->name('custom-warehouse');
Route::inertia('/solutions/supply-chain', 'solutions/supply-chain')->name('supply-chain');
Route::inertia('/solutions/seo-services', 'solutions/seo-services')->name('seo-services');
Route::inertia('/solutions/case-study', 'solutions/case-study')->name('case-study');
Route::inertia('/solutions/blog', 'solutions/blog')->name('blog');
Route::get('/{type}/{slug?}', function($type, $slug = null) {
    return inertia('category', [
        'type' => $type,
        'slug' => $slug
    ]);
})->whereIn('type', ['digital-products', 'digital-services', 'solutions'])->name('category');

Route::inertia('/free-digital-consultation', 'free-digital-consultation')->name('free-digital-consultation');
Route::inertia('/growth-systems-discovery-call', 'growth-systems-discovery-call')->name('growth-systems-discovery-call');
Route::inertia('/delivery-engagement-models', 'delivery-engagement-models')->name('delivery-engagement-models');
Route::inertia('/erpnext-implementation', 'solutions/ERP\'s/erpnext-implementation')->name('erpnext-implementation');
Route::inertia('/contact', 'contact')->name('contact');
Route::inertia('/about/culture-of-change', 'about/culture-of-change')->name('culture-of-change');
Route::inertia('/about/engagement-models', 'delivery-engagement-models')->name('engagement-models');
Route::inertia('/cart', 'cart')->name('cart');
Route::get('/product/{slug?}', function($slug = null) {
    return inertia('product', [
        'slug' => $slug
    ]);
})->name('product.show');
require __DIR__.'/settings.php';
