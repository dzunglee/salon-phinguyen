<?php

namespace App\Http\Controllers;
use App\Classes\ActivityLogs;
use App\Classes\AdminAuth;
use App\Presenters\Post\CreatePresenter;
use App\Presenters\Post\PostPresenter;
use App\Services\AdminService;
use App\Services\CategoryService;
use App\Services\PostService;
use App\Services\TagService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Classes\Tree;
use Illuminate\Support\Facades\Lang;
use phpDocumentor\Reflection\DocBlock\Description;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public $aaa = '';
    public $editPermission = 'edit-post';
    public $publishPermission = 'post-publisher';

    public $service;
    public $tagService;
    public $categoryService;
    public $adminService;

    public function __construct()
    {
        $this->service = service(PostService::class);
        $this->tagService = service(TagService::class);
        $this->categoryService = service(CategoryService::class);
        $this->adminService = service(AdminService::class);
    }
    public $languagess = array();
    public function index()
    {
        app()->setLocale('en');
        $this->title('Posts');
        $this->description('');
        $this->breadcrumb(["text"=>"Posts"]);

        $data = $this->service->getList();
        $translate = array();
        foreach($data as $value){
            $d = $this->checklang($value->getTranslations('title'),$value->getTranslations('description'),$value->getTranslations('content'));
            $vi = in_array("vi",$d,true);
            
            $en = in_array("en",$d,true);
            if($vi == "true" && $en == "true"){
                $translate[] = "en | vn";
            }
            else if($vi == true && $en == false){
                dd("222");
                $translate[] = "vi";
            }
            else{
                $translate[] = "en";
            }
        }
        $listAdmin = $this->adminService->getListAll();
        $listTags = $this->tagService->getListAll();
        $list = $this->categoryService->getListAll()->toArray();

        $treeComboBox = (new Tree($list, "category_name"))->treeToOptions( $data['category_id']);
        $psrData = presenter(PostPresenter::class, ['data'=>$data, 'listAdmin' => $listAdmin, 'listTags' => $listTags, 'treeComboBox' => $treeComboBox, 'translate' => $translate]);
        //dd($psrData);
        return $this->view('pages.post.index', $psrData);
    }
    public function checklang($title,$description,$content){
        foreach($title as $key => $value){
            $languagess[] = $key;
        }
        foreach($description as $key => $value){
            $languagess[] = $key;
        }
        foreach($content as $key => $value){
            $languagess[] = $key;
        }
        return $languagess;
    }
    /**
     * Show the form for creating a new resource.
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function create()
    {
        $this->title('Posts');
        $this->description('');
        $this->breadcrumb(["text"=>"Posts", 'url'=>'posts'],["text"=>"Create"] );

        $isPublisher = AdminAuth::checkAuth($this->publishPermission);
        $listTags = $this->tagService->getListAll();
        $list = $this->categoryService->getListAll()->toArray();
        $treeComboBox = (new Tree($list, "category_name"))->treeToOptions();
        $custom_fields =  $this->service->custom_fields();
        return $this->view('pages.post.create', compact( 'listTags', 'treeComboBox', 'isPublisher','custom_fields'));
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request request()
     * @return Response
     */
    public function store()
    {
        app()->setLocale( 'en');
        $data = $this->validate(request(),[
            'title' =>  'required|max:255',
            'content' => '',
            'category_id' => '',
            'photo' =>  '',
            'title_seo' => 'max:255',
            'description' => '',
        ]);

        $attributes =  $this->validate(request(),[
            'attributes' => 'array',
            'attributes.*.display_name' =>  'required',
            'attributes.*.type' =>  'required',
            'attributes.*.content' =>  '',
        ]);
        $validator = $this->service->checkValueCustomField($attributes);
        if ($validator == null || empty($attributes)){
            try{
                $newPost = $this->service->create($data, isset($attributes['attributes']) ? $attributes['attributes']:[]);
                ActivityLogs::init('link', "" , $newPost->title, "posts/".$newPost->id."/edit");
            }catch (\Exception $err){
                show_alert($err->getMessage(), 'error', 'Error');
                return redirect()->back()->withInput();
            }

            show_alert("Create new post successfully", 'success', 'Success');
            return redirect()->back();
        }else{
            return redirect()->back()->withErrors($validator)->withInput();
        }
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show()
    {
        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function edit($id)
    {
        if (!empty(\request()->lang) && in_array(\request()->lang, $this->lang)){
            app()->setLocale(\request()->lang);
            \Session::put('locale', \request()->lang);
        }else{
            app()->setLocale( 'en');
            \Session::put('locale', 'en');
        }
        
        $this->title('Posts');
        $this->description('');
        $this->breadcrumb(["text"=>"Posts", 'url'=> 'posts'],["text"=>"Edit"] );

        $data = $this->service->get($id);

        if($data == null){
            abort(404);
        }

        $isPublisher = AdminAuth::checkAuth($this->publishPermission);
        $listTags = $this->tagService->getListAll();
        $this->service->addSelectedFlag($listTags, $data->tags);

        $list = $this->categoryService->getListAll()->toArray();
        $treeComboBox = (new Tree($list, "category_name"))->treeToOptions( $data['category_id']);
        $custom_fields =  $this->service->custom_fields();

        return $this->view('pages.post.edit', compact('data', 'listTags', 'isPublisher', "treeComboBox",'custom_fields'));
    }

    /**
     * Update the specified resource in storage.
     * @param  Request request()
     * @return Response
     */
    public function update($id)
    {
        if (!empty(\request()->lang) && in_array(\request()->lang, $this->lang)){
            app()->setLocale(\request()->lang);
            \Session::put('locale', \request()->lang);
        }else{
            app()->setLocale( 'en');
            \Session::put('locale', 'en');
        }

        $post = $this->service->get($id);
        if(!$post){

        }

        $data = $this->validate(request(),[
            'title' =>  'required|max:255',
            'slug' => 'required|max:255',
            'content' => '',
            'category_id' => '',
            'photo' =>  '',
            'title_seo' => 'max:255',
            'description' => '',
        ]);

        $attributes =  $this->validate(request(),[
            'attributes' =>  'array',
            'attributes.*.display_name' =>  'required',
            'attributes.*.type' =>  'required',
            'attributes.*.content' =>  'nullable',
        ]);
        $validator = $this->service->checkValueCustomField($attributes);
        if ($validator == null || empty($attributes)) {
            try {
                $post = $this->service->update($post, $data, isset($attributes['attributes']) ? $attributes['attributes'] : []);
                ActivityLogs::init('link', 'update a post', $post->title, "posts/" . $post->id . "/edit");
            } catch (\Exception $err) {
                show_alert($err->getMessage(), 'error', 'Error');
                return redirect()->back()->withInput();
            }
        }else{
            return redirect()->back()->withErrors($validator)->withInput();
        }
        app()->setLocale( 'en');
        show_alert("Update post successfully", 'success', 'Success');

        return redirect()->back();

    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy($id)
    {
        try{
            $this->service->destroy($id);
        }
        catch (\Exception $err){
            return response($err->getMessage(),400);
        }
        return response('',200);

    }


    /**
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */

    public function removePostCategory($id){
        try{
            $this->service->get($id)->update(['category_id' => null]);
        }
        catch (\Exception $err){
            return response($err->getMessage(),400);
        }

        return response('',200);
    }

    public function removePostTag( $id, $tag_id){
        try{
            $this->service->removePostTag($id, $tag_id);
        }
        catch (\Exception $err){
            return response($err->getMessage(),400);
        }

        return response('',200);
    }
}
