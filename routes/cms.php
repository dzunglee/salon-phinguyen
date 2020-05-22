<?php

Route::namespace('CmsAuth')->group(function () {
    Route::get('login', 'LoginController@showLoginForm')->name('cms.login.show');
    Route::post('login', 'LoginController@login')->name('cms.login');
    Route::get('logout', 'LoginController@logout')->name('cms.logout');

//    Route::get('register', 'RegisterController@showRegistrationForm')->name('cms.register');
//    Route::post('register', 'RegisterController@register');

    Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('cms.password.request');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('cms.password.email');
    Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm')->name('cms.password.reset');
    Route::post('password/reset', 'ResetPasswordController@reset')->name('cms.password.update');
});

Route::middleware('auth:cms', 'admin.log', 'admin.activity', 'admin.permission')->group(function () {
    Route::get('/', 'DashBoardController@index')->name('cms.dash.index');

    Route::get('profile/activities', 'AdminProfileController@getMoreActivities')->name('cms.profile.activities');
    Route::get('users/profile', 'AdminProfileController@profile')->name('cms.profile');
    Route::get('users/profile/activity', 'AdminProfileController@activity')->name('cms.profile.activity');
//    Route::get('users/profile/settings', 'AdminProfileController@settings')->name('cms.profile.settings');
    Route::put('users/profile', 'AdminProfileController@updateProfile')->name('cms.profile.update');
    Route::put('users/profile/password', 'AdminProfileController@updatePassword')->name('cms.profile.update.password');
    Route::post('users/profile/upload-avatar', 'AdminProfileController@uploadAvatar')->name('cms.profile.upload-avatar');

    Route::resource('roles', 'RoleController');
    Route::resource('permissions', 'PermissionController');

    Route::resource('users', 'AdminController');
    Route::resource('menus', 'MenuController');
    Route::post('menus/save', 'MenuController@saveMenu')->name('menus.save');

    Route::get('translate', 'translateController@getTranslate')->name('translate');
    Route::put('translate', 'translateController@changeTranslate')->name('translate.update');

    Route::delete('posts/{id}/remove_tag/{tag_id}', 'PostController@removePostTag')->name('posts.remove_post_tag');
    Route::delete('posts/{id}/remove_post_cat', 'PostController@removePostCategory')->name('posts.remove_post_cat');
    Route::resource('posts', 'PostController');
    Route::resource('page', 'PageController');
    Route::resource('page-tags', 'PageTagController');
    Route::delete('page/{id}/remove_tag/{tag_id}', 'PageController@removePageTag')->name('page.remove_page_tag');

    Route::post('category/save', 'CategoryController@saveCategory')->name('category.save');
    Route::post('category/{id}/add_post', 'CategoryController@addPostCategory')->name('category.add_post');
    Route::resource('category', 'CategoryController');

    Route::delete('tags/deleteTagPost/{id}/{id2}', 'TagController@destroyTagPost')->name('deleteTagInPost');
    Route::resource('tags', 'TagController');

    Route::delete('logs/delete', 'LogController@deleteAll')->name('logs.delete');
    Route::resource('logs', 'LogController');

    Route::get('media', 'MediaController@index')->name('cms.media');
    Route::post('media/upload', 'MediaController@upload')->name('cms.media.upload');
    Route::get('media/test', 'MediaController@getMedia')->name('media.test');
    Route::post('media/rename', 'MediaController@rename')->name('media.rename');
    Route::post('media/move', 'MediaController@move')->name('media.move');
    Route::get('media/get-directory-tree', 'MediaController@getDirectoryTreeByPath')->name('media.move.tree');
    Route::post('media/add-tree-item', 'MediaController@addTreeFolder')->name('media.tree.add');
    Route::delete('media/delete', 'MediaController@delete')->name('media.delete');
    Route::post('media/add', 'MediaController@addNewFolder')->name('media.add');
    Route::post('media/save', 'MediaController@saveSettings')->name('media.save');
    Route::get('media/get-settings', 'MediaController@getSettings')->name('media.settings.get');
    Route::get('media/get-image-edit', 'MediaController@getImageEdit')->name('cms.media.edit-image');
    Route::post('media/post-image-edit', 'MediaController@postImageEdit')->name('cms.media.post-image-edit');
    Route::post('media/summernote/image', 'MediaController@postImageSummernote')->name('cms.media.image-summernote');

    Route::get('setting', 'SettingController@index')->name('cms.setting');
    Route::post('setting', 'SettingController@save')->name('cms.setting.save');

    
    Route::get('test','TestController@test');

    // customizer
    Route::namespace('Customizer')->prefix('customizer')->group(function () {
        Route::resource('menu', 'CustomizerMenuTypeController')->except(['create','show']);
        Route::get('menu/edit/{slug}', 'CustomizerMenuItemController@index')->name('c-menu.edit');
        Route::post('menu/edit/{slug}', 'CustomizerMenuItemController@store')->name('c-menu-item.store');
        Route::post('menu/get-menu-element-by-type', 'CustomizerMenuItemController@getMenuElementByType')->name('get-menu-element-by-type');
        Route::post('menu/save', 'CustomizerMenuItemController@saveMenuItem')->name('menu.save');
        Route::resource('menu-item', 'CustomizerMenuItemController')->except(['index','create','show']);
        Route::get('site-settings', 'SiteIdentifyController@index')->name('site-settings.index');
        Route::post('site-settings', 'SiteIdentifyController@save')->name('site-settings.save');
    });
});

//Route::get('/', function () {
//    view('cms.auth.admin.login');
//})->middleware('auth:cms');