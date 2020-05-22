<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Services\PageService;
use App\Services\PageTagService;
use Illuminate\Http\Request;
use App\Models\Page;

class PageController extends Controller
{
    public $service, $tagService;
    public $templates = ['temp1', 'temp2', 'temp3', 'temp3'];

    public function __construct()
    {
        $this->service = service(PageService::class);
        $this->tagService = service(PageTagService::class);
    }

    public function index()
    {
        //        Inital
        $this->title('Pages');
        $this->description('');
        $this->breadcrumb(["text"=>"Pages"]);
        $listAuthor = Admin::select('id', 'name')->get();
        $listTags = $this->tagService->getListAll();
        $listTemplate = json_decode(json_encode($this->templates));
        $data = $this->service->getList();
        return $this->view('pages.page.index', compact('data', 'listAuthor', 'listTemplate', 'listTags'));
    }

    public function create()
    {
        $this->title('Pages');
        $this->description('');
        $this->breadcrumb(["text"=>"Pages", 'url'=>'page'],["text"=>"Create"] );
        $listTags = $this->tagService->getListAll();
        $template = json_decode(json_encode($this->templates));
        return $this->view('pages.page.create', compact('listTags','template'));
    }

    function store(Request $request)
    {
            $this->validate(request(), [
                'title' => 'required',
                'content' => 'required',
                'template' => 'required',
            ]);

            $this->service->create();
            show_alert("Create Successed",'success', 'Success');
            return redirect(route('page.index'));
    }

    public function show($id)
    {
        abort(404);
    }

    public function edit($id)
    {
        $this->title('Pages');
        $this->description('');
        $this->breadcrumb(["text"=>"Pages", 'url'=>'page'],["text"=>"Edit"] );

        $page_find = Page::find($id);
        if (!$page_find) {
            return redirect(route('page.index'));
        }
        $page = Page::join('admins', function ($join) {
            $join->on('pages.author', '=', 'admins.id');
        })->select('pages.*', 'admins.name as author')->where('pages.id', $id)->first();

        $listTags = $this->tagService->getListAll();
        $this->service->addSelectedFlag($listTags, $page->tags);
        $template = json_decode(json_encode($this->templates));
        return $this->view('pages.page.edit', compact('page', 'listTags','template'));
    }

    public function update($id)
    {
        $this->validate(request(), [
            'title' => 'required',
            'content' => 'required',
            'template' => 'required'
        ]);
        $this->service->update($id);
        show_alert("Update admin successfully",'success', 'Success');
        return redirect(route('page.index'));
    }

    public function destroy($id)
    {
        $this->service->destroy($id);
        return response('', 200);
    }

    public function removePageTag( $id, $tag_id){
        try{
            $this->service->removePageTag($id, $tag_id);
        }
        catch (\Exception $err){
            return response($err->getMessage(),400);
        }

        return response('',200);
    }

}
