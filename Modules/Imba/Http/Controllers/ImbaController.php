<?php

namespace Modules\Imba\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;

class ImbaController extends ControllerImba
{
    private $theme = 'light'; // light or dark

    public function __construct()
    {
        $locale = Cookie::get('locale', null);
        if (!$locale) {
            $locale = config('setting.language');
            Cookie::queue('locale', $locale, 1000000);
            app()->setLocale($locale);
        }
        $menu = get_menu('imba-menu');
        $socialMenu = get_menu('socials-menu');
        $this->theme = Cookie::get('theme', 'light');
        try {
            $this->theme = decrypt($this->theme, false);
        } catch (\Exception $e) {
            logger($e->getMessage());
        }
        view()->share('theme', $this->theme);
        view()->share('menu', $menu);
        view()->share('socialMenu', $socialMenu);
        Config::set('setting', setting()->all());
        $this->updateSeo(config('setting.site_title', 'Title'), config('setting.fe_site_description', 'description'), config('setting.site_cover_image', 'Title'));
    }

    public function index()
    {
        $categories = get_post_categories();
        $banner = get_single_post(null, 'banner');
        $banner = $this->addAttributesAndItems($banner, 'item-');

        $about = get_single_post(null, 'about-us');
        $about->attributes = $this->generateArrayKeyFromArray($about->attributes);

        $ourGame = get_single_post(null, 'our-games');
        $ourGame->attributes = $this->generateArrayKeyFromArray($ourGame->attributes);

        $theTeam = get_single_post(null, 'the-team');
        $theTeam->attributes = $this->generateArrayKeyFromArray($theTeam->attributes);

        $ourStudio = get_single_post(null, 'our-studio');
        $ourStudio = $this->addAttributesAndItems($ourStudio, 'item-');

        $jobOpenings = get_single_post(null, 'job-openings');
        $jobOpenings->attributes = $this->generateArrayKeyFromArray($jobOpenings->attributes);

        $getInTouch = get_single_post(null, 'get-in-touch');
        $getInTouch->attributes = $this->generateArrayKeyFromArray($getInTouch->attributes);

        $games = get_posts(12, 'desc', 'created_at', [], [3]);
        foreach ($games as $item) {
            $item->attributes = $this->generateArrayKeyFromArray($item->attributes);
            $item->class = isset($item->category) ? $item->category->slug : '';
        }

        $teams = get_posts(12, 'desc', 'created_at', [], [4]);
        foreach ($teams as $item) {
            $item->attributes = $this->generateArrayKeyFromArray($item->attributes);
        }

        $jobs = get_posts(12, 'desc', 'created_at', [], [6]);
        return view('imba::index', compact('categories', 'banner', 'about', 'ourGame', 'theTeam', 'ourStudio', 'jobOpenings', 'getInTouch', 'games', 'teams', 'jobs'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('imba::create');
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
        return view('imba::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        return view('imba::edit');
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


    public function generateArrayKeyFromArray($array = [], $field = 'name')
    {
        $attributesTmp = [];
        foreach ($array as $attribute) {
            $attributesTmp[$attribute->$field] = $attribute->content;
        }
        return $attributesTmp;
    }

    public function compileAttribute($attNames = '', $attributes = [])
    {
        $items = [];
        foreach ($attributes as $key => $attribute) {
            if (strpos($key, $attNames) !== false) {
                $arrTmp = explode('|', $attribute);
                foreach ($arrTmp as &$value) {
                    $value = trim($value);
                }
                array_push($items, $arrTmp);
            }
        }
        return $items;
    }

    public function addAttributesAndItems($post, $attrPrefix = 'item-')
    {
        $post->attributes = $this->generateArrayKeyFromArray($post->attributes);
        $post->items = $this->compileAttribute($attrPrefix, $post->attributes);
        return $post;
    }

    public function changeTheme()
    {
        $theme = request()->get('theme', 'light');
        return \response()->json($theme)->cookie('theme', $theme, 1000000);
    }
}
