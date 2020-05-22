<?php

namespace App\Services;
use App\Models\Page;
use App\Models\PageTag;
use Illuminate\Support\Facades\Input;
use SaliproPham\LaravelMVCSP\Service;
use Illuminate\Support\Facades\Auth;

class PageService extends Service
{

    public function __construct()
    {

    }
    public function getList(){
        //        Filter list


//        Request
        $key_search = request()->input('search');
        $key_author = request()->input('author');
        $key_template = request()->input('template');
        $key_tags = request()->input('tag_id');

//        Select all data
        $data = Page::query()->with(['getAuthor']);

//        Filter

        if ($key_author) {
            $data = $data->where('author', $key_author);
        }

        if ($key_template) {
            $data = $data->where('pages.template', $key_template);
        }
//        Search box

        if($key_tags ){
            foreach($key_tags as $tag){
                $data = $data->whereHas('tags', function ($query)  use ($tag){
                    $query->where('tag_id', $tag);
                });
            }
        }

        if ($key_search) {
            $data = $data->where(function ($query) use ($key_search) {
                $query
//                    ->where('content', 'like', '%' . $key_search . '%')
                    ->orwhere('pages.title', 'like', '%' . $key_search . '%')
                    ->orwhere('pages.slug', 'like', '%' . $key_search . '%');
            });
        }

        $data = $data->orderBy('id', 'id');
        return $data->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
    }

    public function get($id = ""){

    }

    public function create(){
        $data = [
            'title' => request()->input('title'),
            'description' => $this->getStringToSeo(request()->input('content')),
            'title_seo' => $this->getStringToSeo(request()->input('title')),
            'content' => request()->input('content'),
            'author' => Auth::guard(config('w3cms.auth.guard'))->user()->id,
            'template' => request()->input('template'),
        ];

        $page = Page::create($data);
        $page->slug = str_slug(request()->input('title'), '-').'-'.$page->id;
        $page->save();

        if(request()->input('tag_id')){
            $this->addPageTag($page['id'], request()->input('tag_id'));
        }
        return $page;
    }

    public function update($id){
        $data = [
            'title' => request()->input('title'),
            'content' => request()->input('content'),
            'template' => request()->input('template'),
        ];

        $page = Page::find($id);
        $page->fill($data);
        $page->save();
        if(request()->get('tag_id',[])){
            $this->addPageTag($page['id'], request()->get('tag_id',[]));
        }else{
            $this->removeAllPageTag($page['id']);
        }
        return $page;
    }

    public function destroy($id){
        return Page::destroy($id);
    }

    function getStringToSeo($text){
        if(!$text) return '';
        $text = strip_tags($text);
        if(strlen($text) > 255){
            $text = substr($text, 0, 255);
        }
        return $text;
    }

    function addSelectedFlag(&$listAllTags, $listSelectedTags){
        foreach($listSelectedTags as $selectedTag){
            foreach($listAllTags as $tag){
                if( $tag->id == $selectedTag->id){
                    $tag->selected = true;
                }
            }
        }

    }

    public function addPageTag($pageID, $tags){
        PageTag::where('page_id', $pageID)->delete();
        foreach($tags as $tag){
            if($tag){
                $data = [
                    'tag_id'=> $tag,
                    'page_id' => $pageID
                ];
                PageTag::create($data);
            }
        }
    }

    public function removePageTag( $id, $tag_id){
        PageTag::where('page_id', $id)->where('tag_id', $tag_id)->first()->delete();
    }
    public function removeAllPageTag( $id){
        PageTag::where('page_id', $id)->delete();
    }
}
