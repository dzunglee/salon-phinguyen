<?php
/**
 * Created by PhpStorm.
 * User: hlam
 * Date: 11/16/2018
 * Time: 4:01 PM
 */

namespace App\Http\Controllers;

use App\Services\PageTagService;
use Illuminate\Support\Facades\DB;

class PageTagController extends Controller
{

    public $service;

    public function __construct()
    {
        $this->service = service(PageTagService::class);
    }

    public function index()
    {
        //dd('dà');
        $this->title('Page Tags');
        $this->description('');
        $this->breadcrumb(["text"=>"Page Tags"]);

//        $this->checkAuth();
        $search = \request()->input('search');
        $data = $this->service->getList($search);
        return$this->view('pages.page_tag.index', compact('data'));
    }

    public function create()
    {
        $this->title('Page Tags');
        $this->description('');
        $this->breadcrumb(["text"=>"Page Tags", 'url'=> 'page-tags'],["text"=>"Create"] );

//        $this->checkAuth();
//        $this->setTitle('Create tags');
        return$this->view('pages.page_tag.create');
    }

    public function store()
    {
//        $this->checkAuth();
        $data = $this->validate(request(), [
            'tag_name' => 'required|max:255',
            'slug' => 'required|max:255'
        ]);

        $data['slug'] = str_slug($data['slug']);

        if($this->service->getBySlug($data['slug'])){
            show_alert('Slug "'.$data['slug'].'" already exist!', 'error', 'Error');
            return redirect()->back()->withInput();
        }

        $this->service->create($data);
        show_alert("Create new admin successfully", 'success', 'Success');
        return redirect(route('page-tags.index'));

    }


    public function show()
    {
        abort(404);
    }

    public function edit($id)
    {
        $this->title('Page Tags');
        $this->description('');
        $this->breadcrumb(["text"=>"Page Tags", 'url'=> 'page-tags'],["text"=>"Edit"] );

//        $this->checkAuth();
//        $this->setTitle('Update tags');

        $tag =$this->service->get($id);
        if(!$tag){
           abort('404');
        }
        $pages =  $this->service->getPagesByTag($id);
        return$this->view('pages.page_tag.edit', compact('tag', 'pages'));
    }


    public function update($id)
    {
        $data = $this->validate(request(), [
            'tag_name' => 'required|max:255',
            'slug' => 'required|max:255',
        ]);

        $tag = $this->service->get($id);

        if (!$tag) {
            show_alert("Update failed!", 'error', 'Error');
            return redirect()->back()->withInput();
        }

        $data['slug'] = str_slug($data['slug']);

        if ($tag->slug != $data['slug'] && $this->service->getBySlug($data['slug'])) {
            show_alert('Slug "'.$data['slug'].'" already exist!', 'error', 'Error');
            return redirect()->back()->withInput();
        }

        try{
            $this->service->update($tag, $data);
            show_alert("Update tag successfully", 'success', 'Success');
            return redirect(route('page-tags.index'));

        }catch (\Exception $err){
            show_alert($err->getMessage(), 'error', 'Error');
            return redirect()->back()->withInput();
        }
    }

    public function destroy($id)
    {
//       $this->checkAuth();
        $this->service->get($id);
        if ($this->service->destroy($id))
            return response('', 200);
        return response('Can not delete this tag.', 400);
    }

    public function destroyTagPost($postId, $tagId)
    {
        //$this->checkAuth();
        DB::table('post_tag')->where('post_tag.tag_id', $tagId)
            ->where('post_tag.post_id', $postId)->delete();

        return response('', 200);

    }
}
