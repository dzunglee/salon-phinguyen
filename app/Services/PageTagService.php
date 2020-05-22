<?php

namespace App\Services;
use App\Models\Page;
use App\Models\PTag;
use Illuminate\Support\Facades\Input;
use SaliproPham\LaravelMVCSP\Service;

class PageTagService extends Service
{
    public function getList($search = ""){
        $data = PTag::query();
        $sortBy = "id";
        $order = "id";
        if(request()->input('search') != ''){
            //dd($data);
            $key = request()->input('search');

            $data = $data->where(function($query) use ($key) {
                $query
//                    ->where('id', $key)
                    ->orWhere('tag_name', 'like', '%' . $key . '%')
                    ->orWhere('slug', 'like', '%' . $key . '%');
            });

        }
        $data =   $data->orderBy($sortBy, $order);
        return $data->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
    }

    public function getListAll(){
        return PTag::all();
    }

    public function get($id = ""){
        return PTag::find($id);
    }

    public function getByName($name){
        return PTag::where('tag_name', $name)->first();
    }
    public function getBySlug($slug){
        return PTag::where('slug', $slug)->first();
    }


    public function getPagesByTag($tagID){
        return Page::join('page_tag', 'pages.id', '=', 'page_tag.page_id')->select('pages.*')->where('tag_id', $tagID)->get();
        //return Post::join('post_tag', 'posts.id', '=', 'post_tag.post_id')->select('posts.*')->where('tag_id', $tagID)->get();

    }

    public function create($data){
        return PTag::create($data);
    }

    public function update($tag, $data){
        $data['slug'] = str_slug($data['slug']);
        $tag->fill($data);
        $tag->save();
        return $tag;
    }

    public function destroy($id){
        return PTag::destroy($id);
    }
}
