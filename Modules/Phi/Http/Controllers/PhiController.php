<?php

namespace Modules\Phi\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;

class PhiController extends MainController
{

    public function __construct()
    {
        Config::set('setting', setting()->all());
        $locale = Cookie::get('locale', null);
        $menu = get_menu('imba-menu');
        $socialMenu = get_menu('socials-menu');
        view()->share('menu', $menu);
        view()->share('socialMenu', $socialMenu);
        $this->updateSeo(config('setting.site_title', 'Title'), config('setting.fe_site_description', 'description'), config('setting.site_cover_image', 'Title'));
    }

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('phi::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('phi::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        return view('phi::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        return view('phi::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
