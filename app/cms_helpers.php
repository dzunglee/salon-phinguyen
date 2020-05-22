<?php


if (!function_exists('format_post_data')) {
    function format_post_data($post)
    {
        $post->created_at_formated = $post->created_at->format(setting('date_formats'));
        return $post;
    }
}


if (!function_exists('format_post_list')) {
    function format_post_list($posts)
    {
        foreach ($posts as &$post) {
            $post = format_post_data($post);
        }
        return $posts;
    }
}

if (!function_exists('get_posts_with_paginate')) {
    /**
     * get post with paginate
     * @param string $order
     * @param string $orderBy
     * @param array $categories
     * @param array $tag
     * @return mixed
     */
    function get_posts_with_paginate($order = 'asc', $orderBy = '', $categories = [], $tag = [])
    {
        $query = \App\Models\Post::where('is_published', '1')->where('deleted_at', null);
        $query->with('category');
        foreach ($categories as $key => $category) {
            if (is_null($category)) {
                unset($categories[$key]);
            }
        }
        if (count($categories) > 0) {
            $query->whereIn('category_id', $categories);
        }
        if (count($tag) > 0) {
            $query->whereHas('tags', function ($newQuery) use ($tag) {
                $newQuery->whereIn('tags.id', $tag);
            });
        }
        if (!empty($orderBy)) {
            $query->orderBy($orderBy, $order);
        } else {
            $query->orderBy('created_at', $order);
        }
        $res = $query->paginate(config('w3cms.items_per_page'));
        return format_post_list($res);
    }
}


if (!function_exists('get_posts')) {
    /**
     * get post with params
     * @param int $limit
     * @param string $order
     * @param string $orderBy
     * @param array $categories
     * @param array $tag
     * @param null $hasTag
     * @return mixed
     */
    function get_posts($limit = 10, $order = 'asc', $orderBy = '', $categories = [], $tag = [], $hasTag = null)
    {
        $query = \App\Models\Post::where('is_published', '1')->where('deleted_at', null);
        $query->with('category')->with(['attributes', 'category']);
        foreach ($categories as $key => $category) {
            if (is_null($category)) {
                unset($categories[$key]);
            }
        }
        if (count($categories) > 0) {
            $query->whereIn('category_id', $categories);
        }
        if (count($tag) > 0) {
            $query->whereHas('tags', function ($newQuery) use ($tag) {
                $newQuery->whereIn('tags.id', $tag);
            });
        }
        if ($hasTag) {
            $query->whereHas('tags', function ($newQuery) use ($hasTag) {
                $newQuery->where('tags.id', $hasTag);
            });
        }
        if (!empty($orderBy)) {
            $query->orderBy($orderBy, $order);
        } else {
            $query->orderBy('created_at', $order);
        }
//        dd($query->toSql());
        $query->limit($limit);
        return format_post_list($query->get());
    }
}

if (!function_exists('get_post_categories')) {
    /**
     * @param string $order
     * @param string $orderBy
     * @return mixed
     */
    function get_post_categories($order = 'asc', $orderBy = '')
    {
        $query = \App\Models\Category::orderBy('category_name');
        if (!empty($orderBy)) {
            $query->orderBy($orderBy, $order);
        } else {
            $query->orderBy('created_at', $order);
        }

        return $query->get();
    }
}

if (!function_exists('get_post_tags')) {
    /**
     * @return mixed
     */
    function get_post_tags()
    {
        return \App\Models\Category::orderBy('name')->get();
    }
}

if (!function_exists('get_cat_by_slug')) {
    /**
     * @param $slug
     * @return mixed
     */
    function get_cat_by_slug($slug)
    {
        $cat = \App\Models\Category::where('slug', $slug)->first();
        if ($cat) {
            return $cat;
        }
        return null;
    }
}

if (!function_exists('get_tag_by_slug')) {
    /**
     * @param $slug
     * @return mixed
     */
    function get_tag_by_slug($slug)
    {
        $cat = \App\Models\Tag::where('slug', $slug)->first();
        if ($cat) {
            return $cat;
        }
        return null;
    }
}

if (!function_exists('get_pages')) {
    /**
     * @param string $order
     * @param string $orderBy
     * @param array $whiteList
     * @param array $blackList
     * @return mixed
     */
    function get_pages($order = 'asc', $orderBy = '', $whiteList = [''], $blackList = [])
    {
        $query = \App\Models\Page::where('deleted_at', null);
        if (!empty($orderBy)) {
            $query->orderBy($orderBy, $order);
        } else {
            $query->orderBy('created_at', $order);
        }
        if (count($whiteList) > 0) {
            $query->whereIn('slug', $whiteList);
        }
        if (count($blackList) > 0) {
            $query->whereNotIn('slug', $blackList);
        }
        return $query->get();
    }
}

if (!function_exists('get_single_post')) {
    /**
     * @param null $id
     * @param $slug
     * @return mixed
     */
    function get_single_post($id = null, $slug = null)
    {
        if (!$id && !$slug) {
            return null;
        }
        $query = \App\Models\Post::where('deleted_at', null)->with('attributes');
        if ($id) {
            $query->where('id', $id);
        }
        if ($slug) {
            $query->where('slug', $slug);
        }
        $post = $query->first();
        if (!$post) {
            return $post;
        }
        return format_post_data($post);
    }
}

if (!function_exists('make_dynamic_post_route')) {
    /**
     * @param null $post
     * @return mixed
     */
    function make_dynamic_post_route($post = null)
    {
        if (!$post || !($post instanceof \App\Models\Post)) {
            return '';
        }
        $route = 'frontend.';
        try {
            switch (setting('post_permalink', 'post/{id}')) {
                case 'post/{id}':
                    $route = implode('/', [url('blog'), $post->id]);
                    break;
                case '{y}/{m}/{d}/{n}':
                    $route = implode('/', [url('/'), $post->created_at->year, $post->created_at->month, $post->created_at->day, $post->slug]);
                    break;
                case '{c}/{n}':
                    $route = implode('/', [url('/'), !empty($post->category->slug) ? $post->category->slug : "category", $post->slug]);
                    break;
                case '{n}':
                    $route = implode('/', [url('/'), $post->slug]);
                    break;
            }
            return $route;
        } catch (\Exception $e) {
            logger($e->getMessage());
            return '';
        }
    }
}

if (!function_exists('make_dynamic_category_url')) {
    /**
     * @param null $category
     * @return string
     */
    function make_dynamic_category_url($category = null)
    {
        if (!$category || !($category instanceof \App\Models\Category)) {
            return '';
        }
        return route('frontend.postByCat', ['cat' => $category->slug]);
    }
}
if (!function_exists('get_single_page')) {
    /**
     * @param null $id
     * @param $slug
     * @return mixed
     */
    function get_single_page($id = null, $slug = null)
    {
        if (!$id && !$slug) {
            return null;
        }
        $query = \App\Models\Page::where('deleted_at', null);
        if ($id) {
            $query->where('id', $id);
        }
        if ($slug) {
            $query->where('slug', $slug);
        }
        $page = $query->first();
        if (!$page) {
            return $page;
        }
        return format_post_data($page);
    }
}

if (!function_exists('make_dynamic_page_route')) {
    /**
     * @param null $page
     * @return mixed
     */
    function make_dynamic_page_route($page = null)
    {
        if (!$page || !($page instanceof \App\Models\Page)) {
            return '';
        }
        $route = 'frontend.';
        try {
            switch (setting('page_permalink', 'post/{id}')) {
                case 'page/{id}':
                    $route = route($route . 'pageDetailWithId', ['id' => $page->id]);
                    break;
                case 'page/{n}':
                    $route = route($route . 'pageDetailWithSlug', ['n' => $page->slug]);
                    break;
                case '{c}/{n}':
                    if (setting('page_custom_id_or_name', 'id') == 'name') {
                        $route = route($route . 'postDetailWithCatAndName', ['c' => setting('page_custom_prefix', 'page'), 'n' => $page->slug]);
                    } else {
                        $route = route($route . 'postDetailWithCatAndName', ['c' => setting('page_custom_prefix', 'page'), 'n' => $page->id]);
                    }
                    break;
            }
            return $route;
        } catch (\Exception $e) {
            logger($e->getMessage());
            return '';
        }
    }
}

if (!function_exists('make_url_menu_item')) {
    function make_url_menu_item($menu)
    {
        switch ($menu->type) {
            case 'post':
                $post = \App\Models\Post::find($menu->uri);
                $menu->url = !empty($post) ? make_dynamic_post_route($post) : '#';
                break;
            case 'page':
                $page = \App\Models\Page::find($menu->uri);
                $menu->url = !empty($page) ? make_dynamic_page_route($page) : '#';
                break;
            case 'category':
                $category = \App\Models\Category::find($menu->uri);
                $menu->url = !empty($category) ? make_dynamic_category_url($category) : '#';
                break;
            default:
                $menu->url = $menu->uri;
                break;
        }
    }
}


if (!function_exists('get_menu')) {
    function get_menu($slug = '')
    {
        $menu = \App\Models\CustomizerMenuType::with(['menuItems' => function ($query) {
            $query->orderBy('order');
        }])->where('slug', $slug)->first();
        if (!$menu) {
            return [];
        }
        $menusItems = $menu->menuItems;
        foreach ($menusItems as &$item) {
            make_url_menu_item($item);
        }

        $list = [];
        if (count($menusItems) > 0) {
            foreach ($menusItems as $item) {
                $list = array_merge($list, [$item]);
            }
        }

        $tree = new \App\Classes\Tree($list);
        return $tree->arrayToTree($list);
    }
}


if (!function_exists('get_data_by_url')) {
    /**
     * @param Illuminate\Http\Request $request
     * @return stdClass
     */
    function get_data_by_url($request)
    {
        $path = $request->path();
        $res = new stdClass();
        $res->title = setting('site_title', 'title');
        $res->is404 = false;
        $res->pageType = null;
        if ($path == '/') {
            $res->data = [
                'mainPost' => get_posts(6),
                'recentPost' => get_posts(4, 'desc'),
                'categories' => get_post_categories()
            ];
            $res->title = set_title($res->title, 'Home');
            $res->pageType = 'home';
        } elseif (preg_match('/^vi$/', $path, $matches)) {
            $res->pageType = 'vi';
        } elseif (preg_match('/^en$/', $path, $matches)) {
            $res->pageType = 'en';
        } elseif (preg_match('/^portfolio$/', $path, $matches)) {
            $portfolioTag = \App\Models\Tag::where('slug', 'portfolio')->first();
            $res->data = [
                'mainPost' => get_posts_with_paginate('desc', 'created_at', [], [$portfolioTag->id]),
            ];

            $res->title = set_title($res->title, 'Portfolio');
            $res->pageType = 'portfolio';
        } elseif (preg_match('/^portfolio[\/][a-z0-9-\/]{1,}$/', $path, $matches)) {
            $id = substr($path, strrpos($path, '/') + 1);
            $post = \App\Models\Post::with('attributes')->where('id', $id)->first();
            if ($post) {
                $portfolioSection = get_single_post(null, 'our-portfolio');
                $res->data = [
                    'item' => add_attributes_and_items($post),
                    'portfolioSection' => $portfolioSection,
                ];
                $res->title = set_title($res->title, $post->title);
                $res->description = $post->description;
                $res->image = $post->photo;
                $res->pageType = 'single-portfolio';
            } else {
                $res->is404 = true;
            }
        } elseif (preg_match('/^category[\/][a-z0-9-]{1,}$/', $path, $matches)) { // category/category name
            $catSlug = substr($path, strrpos($path, '/') + 1);
            $category = get_cat_by_slug($catSlug);
            if ($category) {
                $res->data = [
                    'cat' => $catSlug,
                    'mainPost' => get_posts_with_paginate('asc', 'created_at', [$category->id]),
                    'recentPost' => get_posts(4, 'desc'),
                    'categories' => get_post_categories()
                ];
                $res->title = set_title($res->title, $category->category_name);
                $res->pageType = 'post_by_cat';
            } else {
                // check this category path is a post path
                $name = substr($path, strrpos($path, '/') + 1);
                $postOrPage = get_single_post(null, $name);
                if ($postOrPage) {
                    $blogTag = get_tag_by_slug('post');
                    $res->data = [
                        'itemBlog' => $postOrPage,
                        'recentPost' => get_posts(4, 'desc', 'created_at', [], [$blogTag->id]),
                        'categories' => get_post_categories()
                    ];
                    $res->title = set_title($res->title, $postOrPage->title);
                    $res->description = $postOrPage->description;
                    $res->image = $postOrPage->image;
                    $res->pageType = 'single_post';
                } else {
                    // check this category path is a page path

                    $res->is404 = true;
                }
            }
        } elseif (preg_match('/^blog$/', $path, $matches)) { // all post
            $postTag = \App\Models\Tag::where('slug', 'post')->first();
            $res->data = [
                'cat' => 'all',
                'mainPost' => get_posts_with_paginate('desc', 'publish_date', [], [$postTag->id]),
                'recentPost' => get_posts(4, 'desc'),
                'categories' => get_post_categories()
            ];

            $res->title = set_title($res->title, 'Blog');
            $res->pageType = 'post';
        } else {
            $postOrPage = null;
            try {
                switch (setting('post_permalink', 'post/{id}')) {
                    case 'post/{id}':
                        $id = substr($path, strrpos($path, '/') + 1);
                        $postOrPage = get_single_post($id);
                        break;
                    case '{y}/{m}/{d}/{n}':
                        $name = substr($path, strrpos($path, '/') + 1);
                        $postOrPage = get_single_post(null, $name);
                        break;
                    case '{c}/{n}':
                        $name = substr($path, strrpos($path, '/') + 1);
                        $postOrPage = get_single_post(null, $name);
                        break;
                    case '{n}':
                        $name = $path;
                        $postOrPage = get_single_post(null, $name);
                        break;
                }
            } catch (\Exception $e) {
                logger($e->getMessage());
            }
            // check has post or not
            if ($postOrPage) {
                $blogTag = get_tag_by_slug('post');
                $res->data = [
                    'itemBlog' => $postOrPage,
                    'recentPost' => get_posts(4, 'desc', 'created_at', [], [$blogTag->id]),
                    'categories' => get_post_categories()
                ];
                $res->title = set_title($res->title, $postOrPage->title);
                $res->description = $postOrPage->description;
                $res->image = $postOrPage->photo;
                $res->pageType = 'single_post';
            } else {
                switch (setting('page_permalink', 'page/{id}')) {
                    case 'page/{id}':
                        $id = substr($path, strrpos($path, '/') + 1);
                        $postOrPage = get_single_page($id);
                        break;
                    case 'page/{n}':
                        $name = substr($path, strrpos($path, '/') + 1);
                        $postOrPage = get_single_page(null, $name);
                        break;
                    case '{c}/{n}':
                        if (setting('page_custom_id_or_name', 'id') == 'name') {
                            $name = substr($path, strrpos($path, '/') + 1);
                            $postOrPage = get_single_page(null, $name);
                        } else {
                            $id = substr($path, strrpos($path, '/') + 1);
                            $postOrPage = get_single_page($id);
                        }
                        break;
                }

                // check has page or not
                if ($postOrPage) {
                    $blogTag = get_tag_by_slug('post');
                    $res->data = [
                        'item' => $postOrPage,
                        'recentPost' => get_posts(4, 'desc', 'created_at', [], [$blogTag->id]),
                        'categories' => get_post_categories()
                    ];
                    $res->title = set_title($res->title, $postOrPage->title);
                    $res->pageType = 'single_page';
                } else {
                    $res->is404 = true;
                }
            }
        }
        return $res;
    }
}


if (!function_exists('set_title')) {
    /**
     * @param string $title
     * @param string $name
     * @return string
     */
    function set_title($title = '', $name = '')
    {
        return $name . ' ' . setting('separator', '-') . ' ' . $title;
    }
}


if (!function_exists('get_category_width_post_by_tag')) {

    function get_category_width_post_has_tag($tagId)
    {
        $query = \App\Models\Category::with(['posts' => function ($q) use ($tagId) {
            $q->whereHas('tags', function ($q) use ($tagId) {
                $q->where('tags.id', $tagId);
            });
        }]);
        return $query->get();
    }
}


if (!function_exists('generate_array_key_from_array')) {
    /**
     * Use this function to transform attributes relation to array
     * @param $tagId
     * @return \App\Models\Category[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    function generate_array_key_from_array($array = [], $field = 'name')
    {
        $attributesTmp = [];
        foreach ($array as $attribute) {
            $attributesTmp[$attribute->$field] = $attribute->content;
        }
        return $attributesTmp;
    }
}


if (!function_exists('compile_attribute')) {
    /**
     * Use this function to make an array from attribute that has same prefix
     * @param string $attNames prefix name
     * @param array $attributes
     * @return array
     */
    function compile_attribute($attNames = '', $attributes = [])
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
}


if (!function_exists('add_attributes_and_items')) {
    function add_attributes_and_items($post, $attrPrefix = 'item-')
    {
        $post->attributes = generate_array_key_from_array($post->attributes);
        $post->items = compile_attribute($attrPrefix, $post->attributes);
        return $post;
    }
}

if (!function_exists('get_id_from_youtube_url')) {
    function get_id_from_youtube_url($url = '')
    {
        parse_str(parse_url($url, PHP_URL_QUERY), $my_array_of_vars);
        if (empty($my_array_of_vars['v']))
            return null;
        return $my_array_of_vars['v'];
    }
}