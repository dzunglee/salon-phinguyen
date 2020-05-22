<?php

namespace App\Services;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\Input;
use SaliproPham\LaravelMVCSP\Service;

class TagService extends Service
{
    public function getList(){
        $sortBy = "id";
        $order = "id";
        $data = Tag::query();

        if(request()->input('search') != ''){
            //dd($data);
            $key = request()->input('search');

            $data = $data->where(function($query) use ($key) {
                $query
//                    ->where('id', 'like', $key)
                    ->orWhere('tag_name', 'like', '%' . $key . '%')
                    ->orWhere('slug', 'like', '%' . $key . '%');
            });
        }
        $data =   $data->orderBy($sortBy, $order);
        return $data->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
    }

    public function getListAll(){
        return Tag::all();
    }

    public function get($id = ""){
        return Tag::find($id);
    }

    public function getByName($name){
        return Tag::where('tag_name', $name)->first();
    }
    public function getBySlug($slug){
        return Tag::where('slug', $slug)->first();
    }


    public function getPostsByTag($tagID){
        return Post::join('post_tag', 'posts.id', '=', 'post_tag.post_id')->select('posts.*')->where('tag_id', $tagID)->with(['getEditor', 'getAuthor'])->get();

    }

    public function create($data){
        return Tag::create($data);
    }

    public function update($tag, $data){
        $data['slug'] = str_slug($data['slug']);
        $tag->fill($data);
        $tag->save();
        return $tag;
    }

    public function destroy($id){
        return Tag::destroy($id);
    }
}
