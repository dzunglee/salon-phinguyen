<?php
/**
 * Created by PhpStorm.
 * User: hlam
 * Date: 11/16/2018
 * Time: 4:01 PM
 */

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\Tag;

use App\Services\TagService;
use Illuminate\Support\Facades\DB;

class TagController extends Controller
{

    public $service;

    public function __construct()
    {
        $this->service = service(TagService::class);
    }

    public function index()
    {
        $this->title('Tags');
        $this->description('');
        $this->breadcrumb(["text"=>"Tags"]);

//        $this->checkAuth();
        $search = \request()->input('search');
        $data = $this->service->getList($search);
        return$this->view('pages.tag.index', compact('data'));
    }

    public function create()
    {
        $this->title('Tags');
        $this->description('');
        $this->breadcrumb(["text"=>"Tags", 'url'=> 'tags'],["text"=>"Create"] );

//        $this->checkAuth();
//        $this->setTitle('Create tags');
        return$this->view('pages.tag.create');
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
        return redirect(route('tags.index'));

    }


    public function show(Tag $tag)
    {
        //
    }

    public function edit($id)
    {
        $this->title('Tags');
        $this->description('');
        $this->breadcrumb(["text"=>"Tags", 'url'=> 'tags'],["text"=>"Edit"] );

//        $this->checkAuth();
//        $this->setTitle('Update tags');

        $tag =$this->service->get($id);
        if(!$tag){
           abort('404');
        }
        $posts =  $this->service->getPostsByTag($id);

        return$this->view('pages.tag.edit', compact('tag', 'posts'));
    }


    public function update($id)
    {
//        $this->checkAuth();
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
            return redirect(route('tags.index'));

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
