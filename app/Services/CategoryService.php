<?php

namespace App\Services;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Support\Facades\Input;
use SaliproPham\LaravelMVCSP\Service;

class CategoryService extends Service
{
    public function getList(){
        return $this->getListAll();
    }

    public function getListAll(){
        return Category::orderBy('order','asc')->get();
    }

    public function getListByParent($parentID = ""){
        return Category::get()->where('parent_id', $parentID)->sortBy('order');
    }

    public function get($id = ""){
        return Category::find($id);
    }

    public function getByName($name){
        return Category::where('category_name', $name)->first();
    }

    public function getBySlug($slug){
        return Category::where('slug', $slug)->first();
    }

    public function create($data){
        $data['parent_id'] = (request()->input('parent_id') == 'null')?null:request()->input('parent_id');
        $data['order'] = '1';
        return Category::create($data);
    }

    public function update($category){
        $data = [
            'category_name' =>  request()->input('category_name'),
            'slug' => str_slug(request()->input('slug')),
            'parent_id' =>  (request()->input('parent_id') == 'null')?null:request()->input('parent_id'),
        ];
        $category->fill($data);
        $category->save();

    }


    public function destroy($id){
        return Category::destroy($id);
    }

    public function addPostCategory($id){
        //$this->checkAuth();
        //dd(request()->input('post_id'), $id);
        if(request()->input('post_ids')){
            Post::wherein('id', request()->input('post_ids'))->update(['category_id' => $id]);
        }

        if(request()->input('category_ids')){
            foreach(request()->input('category_ids') as $categoryID){
                Post::where('category_id', $categoryID)->update(['category_id' => $id]);
            }
        }
    }

    public function getPostsByCategory($catID){
        $sortBy = "id";
        $order = "id";
        $listCategoryWithChild = [$catID];
        $this->getChild($listCategoryWithChild, $catID );
        $posts = Post::select('id', 'title', 'content', 'description' ,'editor', 'author', 'category_id','slug','photo', 'publish_date', 'created_at')
        ->with(['category', 'getEditor', 'getAuthor', 'tags']);
        $posts = $posts->wherein('category_id', $listCategoryWithChild);
        return  $posts->orderBy($sortBy, $order)->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));

    }

    public function getPostsIDByCategory($catID){
        return Post::select('id')->where('category_id', $catID)->pluck('id')->toArray();
    }

    public function getAllPosts(){
        return Post::select('id','title')->get();
    }


    public function getChild(&$list, $id)
    {
        $child = $this->getListByParent($id);
        if (count($child) > 0) {
            foreach ($child as $key => $item) {
                array_push($list, $item['id']);
                $this->getChild($list, $item['id']);
            }
        }

    }



//    public function getTreeListCategories(){
//        $categories = $this->getList();
//        $list = [];
//
//        if(count($categories) > 0){
//            //call create tree list for category
//            $this->getTree($list, null);
//        }
//        return $list;
//    }

    function getTree (&$list, $id){
        $child =  $this->getListByParent($id);
        if(count($child) > 0){
            foreach ($child as $key => $item){
                $newChild = ['item'=>$item, 'children'=>[]];
                $index = array_push($list, $newChild) -1;
                $this->getTree($list[$index]['children'], $item['id']);
            }
        }else{
            $list = [];
        }
    }



    /**
     * @param $id
     */
    public function deleteCategoryWithChild($id){
        $categories = $this->getListByParent($id);
        foreach($categories as $category){
            $this->deleteCategoryWithChild($category->id);
        }
        $this->destroy($id);

    }

    public function saveTree($list, $parentID){
        $order = 1;
        foreach($list as $item){
            //dd($item->id);
            $row = $this->get($item->id);
            $row->parent_id = $parentID;
            $row->order = $order;
            $row->save();
            $order++;
            if(isset($item->children)){
                $this->saveTree($item->children, $item->id);
            }
        }
    }
}
