<?php

namespace App\Http\Controllers;

use App\Services\CategoryService;
use Illuminate\Http\Request;
use App\Classes\Tree;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    public $service;

    public function __construct()
    {
        $this->service = service(CategoryService::class);
    }

    public function index(Request $request)
    {
        $this->title('Categories');
        $this->description('');
        $this->breadcrumb(["text"=>"Categories"]);

        $data = $this->service->getList()->toArray();
        $tree = new Tree($data,'category_name');
        $treeView = $tree->treeToDropAble('category');
        $list = $this->service->getListAll()->toArray();
        $treeComboBox = (new Tree($list, "category_name"))->treeToOptions();
        return $this->view('pages.category.index', compact('treeView','treeComboBox'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function create()
    {
        abort(404);
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
//        $this->checkAuth();

        $data = $this->validate(request(), [
            'category_name' => 'required|max:255',
            'slug' => 'required|max:255'
        ]);

        $data['slug'] = str_slug(request()->input('slug'));

        if($this->service->getBySlug($data['slug'])){
            show_alert('Slug "'.request()->input('slug').'" already exist!', 'error', 'Error');
            return redirect()->back()->withInput();
        }

        try{
            $this->service->create($data);
        }
        catch (\Exception $err){
            show_alert($err->getMessage(), 'error', 'Error');
            return redirect()->back()->withInput();
        }

        show_alert("Created successfully", 'success', 'Success');
        return redirect(route('category.index'));
    }

    /**
     * Show the specified resource.
     */
    public function show()
    {
        abort(404);
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function edit($id)
    {
        $this->title('Categories');
        $this->description('');
        $this->breadcrumb(["text"=>"Categories", 'url'=> 'category'],["text"=>"Edit"] );

//        $this->checkAuth();
        $data = $this->service->get($id);

        if($data == null){
            abort(404);
        }

        $posts = $this->service->getPostsByCategory($id);
        $listAllPosts = $this->service->getAllPosts();
        $listPostsIDOfThisCategory = $this->service->getPostsIDByCategory($id);

        $list = $this->service->getListAll()->toArray();
        $treeComboBoxWithParentItem = (new Tree($list, "category_name" ))->treeToOptions($data['parent_id'],[$id]);
        $treeComboBoxWithCurrentItem = (new Tree($list, "category_name"))->treeToOptions([], [], [$id]);
        return $this->view('pages.category.edit', compact('data', 'posts', 'listAllPosts', 'listPostsIDOfThisCategory', 'treeComboBoxWithParentItem', 'treeComboBoxWithCurrentItem' ));


    }

    /**
     * Update the specified resource in storage.
     * @param $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update($id)
    {
        //dd($this->service->getByName('hong'));
        $category = $this->service->get($id);
        if(!$category){ abort(404);}

        $this->validate(request(), [
            'category_name' => 'required|max:255',
            'slug' => 'required|max:255'
        ]);

        $slug = str_slug(request()->input('slug'));

        if(($category['slug'] != $slug) && $this->service->getBySlug($slug)){
            show_alert('Slug "'.request()->input('slug').'" already exist!', 'error', 'Error');
            return redirect()->back()->withInput();
        }

        try{
            $this->service->update($category);
        }
        catch (\Exception $err){
            show_alert($err->getMessage(), 'error', 'Error');
            return redirect()->back()->withInput();
        }

        show_alert("Updated successfully", 'success', 'Success');
        return redirect(route('category.index'));
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy($id)
    {
        //$this->checkAuth();
        //$this->checkAuth(request());
        try{
            $this->service->deleteCategoryWithChild($id);
            return response('',200);
        }
        catch (\Exception $err){
            return response($err->getMessage(),400);
        }
    }


    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function saveCategory()
    {
       // $this->checkAuth();
        //dd(request()->all()['data'], json_decode(request()->all()['data']));
        try{
            $list = json_decode(request()->all()['data']);
            $this->service->saveTree($list, null);
        }
        catch (\Exception $err){
            return response($err->getMessage(),400);
        }

        return response('',200);
    }



    public function addPostCategory($id){
        //$this->checkAuth();
        //dd(request()->input('post_id'), $id);
        try{
            $this->service->addPostCategory($id);
        }catch (\Exception $err){
            show_alert($err->getMessage(), 'error', 'Error');
            return redirect()->back();
        }
        show_alert("Add post category successfully", 'success', 'Success');
        return redirect()->back();
    }
}
