<?php

namespace App\Services;
use App\Models\Admin;
use App\Models\Page;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;
use SaliproPham\LaravelMVCSP\Service;

class DashBoardService extends Service
{
    public function statistical(){
        $postUser = Post::where('author',Auth::user()->id)->count();
        $data = ['user'=>Admin::count(),'post'=>Post::count(),'postUser'=>$postUser,'page'=>Page::count(),'tag'=>Tag::count()];
        return $data;
    }
}
