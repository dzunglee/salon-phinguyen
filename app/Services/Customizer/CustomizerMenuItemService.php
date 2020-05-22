<?php

namespace App\Services\Customizer;
use App\Models\Category;
use App\Models\CustomizerMenuItem;
use App\Models\CustomizerMenuType;
use App\Models\Page;
use App\Models\Post;
use SaliproPham\LaravelMVCSP\Service;
use Illuminate\Foundation\Validation\ValidatesRequests;

class CustomizerMenuItemService extends Service
{
    use ValidatesRequests;

    public $typeOfMenuList = ['link' => 'Custom link','page' => 'Page', 'post' => 'Post', 'category' => 'Category'];

    public function checkIssetSlug($slug){
        return CustomizerMenuType::where('slug', $slug)->first();
    }
    public function getMenuItemByType($typeId, $language = 'en'){
        $model = new CustomizerMenuItem();
        $res = $model->where('menu_type_id', $typeId)->orderBy('order')->get();
        if($translatable = $model->translatable){
            $newRes = [];
            foreach ($res as $item){
                $newItem = $item->attributesToArray();
                foreach ($translatable as $key){
                    $newItem[$key] = $item->getTranslation($key, $language);
                }
                $newRes[] = $newItem;
            }
            return $newRes;
        }
        return $res->toArray();
    }

    public function getCustomizerMenuItemById($id,$lang){
        $newsItem = CustomizerMenuItem::find($id);
        $trans = [
            'en' => 'Portfolio',
            'vi' => 'Dự Án'
         ];
        app()->setlocale($lang);
        return CustomizerMenuItem::find($id);
    }
    public function store(){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Create new menu successfully'
        ];
        $data = $this->validate(request(),[
            'parent_id' => 'required',
            'title' => 'required|max:100',
            'icon' => 'max:100',
            'uri' => 'max:100',
            'menu_type_id' => 'required',
            'type' => 'required',
        ]);
        if(!CustomizerMenuItem::create($data)){
            $res->errorCode = 1;
            $res->message = 'Can not create menu item';
        }
        return $res;
    }

    public function update($id){
        $data = $this->validate(request(),[
            'parent_id' => 'required',
            'title' => 'required|max:100',
            'icon' => 'required|max:100',
            'uri' => 'max:100',
            'menu_type_id' => 'required',
            'type' => 'required',
        ]);
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Update menu item successfully'
        ];
        $menu = CustomizerMenuItem::find($id);
        $menu->fill($data);
        $menu->save();
        if (!$menu){
            $res->errorCode = 1;
            $res->message = 'Can not update menu';
        }
        return $res;
    }

    public function destroy($id){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Delete menu item successfully'
        ];
        if(!CustomizerMenuItem::destroy($id)){
            $res->errorCode = 1;
            $res->message = 'Can not delete menu item';
        }
        return $res;
    }

    public function getTypeOfMenuList(){
        return $this->typeOfMenuList;
    }

    public function getAllPostHtml($selectedId = null){
        $posts = Post::orderBy('title','asc')->get();
        try{
            $html  = '<label for="parent_id" class="control-label">Select post</label>'.
                '<select class="form-control" id="select2" name="uri"><option value="">&nbsp;</option>';
            foreach ($posts as $post){
                $html.= sprintf('<option value="%d" %s>%s</option>',$post->id, $selectedId == $post->id?'selected':'', $post->title);
            }
            $html.='</selec>';
            $html.='<script> $("#select2").select2()</script>';
            return $html;
        }catch (\Exception $e){
            return '';
        }
    }

    public function getAllPageHtml($selectedId = null){
        $pages = Page::orderBy('title','asc')->get();
        try{
            $html  = '<label for="parent_id" class="control-label">Select page</label>'.
                '<select class="form-control" id="select2" name="uri"><option value="">&nbsp;</option>';
            foreach ($pages as $page){
                $html.= sprintf('<option value="%d" %s>%s</option>',$page->id, $selectedId == $page->id?'selected':'', $page->title);
            }
            $html.='</selec>';
            $html.='<script> $("#select2").select2()</script>';
            return $html;
        }catch (\Exception $e){
            return '';
        }
    }

    public function getAllCategoryHtml($selectedId = null){
        $cats = Category::orderBy('category_name','asc')->get();
        try{
            $html  = '<label for="parent_id" class="control-label">Select category</label>'.
                '<select class="form-control" id="select2" name="uri"><option value="">&nbsp;</option>';
            foreach ($cats as $cat){
                $html.= sprintf('<option value="%d" %s>%s</option>',$cat->id, $selectedId == $cat->id?'selected':'', $cat->category_name);
            }
            $html.='</selec>';
            $html.='<script> $("#select2").select2()</script>';
            return $html;
        }catch (\Exception $e){
            return '';
        }
    }



    public function saveMenuItem(){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Success'
        ];
        $data = json_decode(request()->get('data',[]));
        try{
            $this->saveArrayMenuItem($data,0);
            return $res;
        }catch (\Exception $e){
            $res->errorCode = 1;
            $res->message = 'Can not save menu';
            logger($e->getMessage());
            return $res;
        }
    }

    public function saveArrayMenuItem($array = [], $parentId, $order = 0){
        foreach ($array as $item){
            $menu = CustomizerMenuItem::find($item->id);
            $menu->parent_id = $parentId;
            $order++;
            $menu->order = $order;
            $menu->save();
            if (isset($item->children))
                $this->saveArrayMenuItem($item->children, $item->id,$order);
        }
    }
}
