<?php

namespace App\Services;
use App\Models\Post;
use Illuminate\Support\Facades\Input;
use mysql_xdevapi\Exception;
use SaliproPham\LaravelMVCSP\Service;
use App\Classes\UploadFile;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use App\Models\Category;
use App\Models\PostTag;
use App\Models\Tag;
use \Datetime;
use Validator;
use Lang;



class PostService extends Service
{
    public $tagService;
    public $categoryService;
    public $adminService;

    public function __construct()
    {
        $this->tagService = service(TagService::class);
        $this->categoryService = service(CategoryService::class);
        $this->adminService = service(AdminService::class);
    }
    public function getList(){
        $sortBy = "id";
        $order = "id";

        $data = Post::query()->with(['getEditor', 'getAuthor']);

        if(request()->input('category_id') != ''){
            $data = $data->where('category_id', request()->input('category_id'));
        }

        if(request()->input('tag_id')){
            foreach(request()->all()['tag_id'] as $tag){
                $data = $data->whereHas('tags', function ($query)  use ($tag){
                    $query->where('tag_id', $tag);
                });
            }
        }

        if(request()->input('editor') != ''){
            $data = $data->where('editor',request()->input('editor'));
        }

        if(request()->input('is_published') != ''){
            $data = $data->where('is_published',request()->input('is_published'));
            //dd(request()->input('is_published'));
        }

        if(request()->input('author') != ''){
            $data = $data->where('author',request()->input('author'));
            //dd($data);
        }

        if(request()->input('search') != ''){
            //dd($data);
            $key = request()->input('search');

            $data = $data->where(function($query) use ($key) {
                $query->where('id', 'like', $key)
                    ->orWhere('title', 'like', '%'.$key.'%');
            });
        }
        $data = $data->orderBy($sortBy, $order);
        return $data->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
    }

    public function getListAll(){
        return Post::all();
    }

    public function get($id = ""){
        return (new Post)->withAttributes($id);
    }

    public function create($data, $attributes){

//        $data['title_seo'] = $this->getStringToSeo(request()->input('title'));
//        $data['description'] = $this->getStringToSeo(request()->input('content'));
        $data['editor'] = Auth::guard(config('w3cms.auth.guard'))->user()->id;

        if(request()->input('date')){
            $publishDate = DateTime::createFromFormat('m/d/Y', request()->input('date'))->format('Y-m-d');
        }else{
            $publishDate = null;
        }

        if(request()->get('is_publish') && $publishDate){
            $data["is_published"] = 1;
            $data["publish_date"] = $publishDate;
            $data["author"] = Auth::guard(config('w3cms.auth.guard'))->user()->id;
        }else{
            $data["is_published"] = 0;
            $data["publish_date"] = null;
            $data["author"] = null;
        }

        if(request()->input('category_id')){
            $data["category_id"] = request()->input('category_id');
        }

//        $avatar = request()->input('photo',null);
//        if ($avatar){
//            $data['photo'] = 'https://place-hold.it/300';
//            //dd($data);
//        }
        request()->input('title_seo') == '' ? $data['title_seo'] = request()->input('title') : $data['title_seo'] = request()->input('title_seo');
        $newPost = Post::create($data);
        $newPost->slug = str_slug(request()->input('title'), '-').'-'.$newPost->id;
        $newPost->save();

        if(request()->input('tag_id')){
            $this->addPostTag($newPost['id'], request()->input('tag_id'));
        }
        if (is_array($attributes)){
            $newPost->updateOrCreateAttributes($attributes);
        }
        return $newPost;
    }

    public function update($post, $data, $attributes){
        if(request()->get('category_id',[])){
            $data["category_id"] = request()->get('category_id',[]);
        }

        if(request()->input('date')){
            $publishDate = DateTime::createFromFormat('m/d/Y', request()->input('date'))->format('Y-m-d');
        }else{
            $publishDate = null;
        }

//        $data['description'] = $this->getStringToSeo(request()->input('content'));

        if(request()->get('is_publish') && $publishDate){
            $data["is_published"] = 1;
            $data["publish_date"] = $publishDate;
            $data["author"] = Auth::guard(config('w3cms.auth.guard'))->user()->id;
        }else{
            $data["is_published"] = 0;
            $data["publish_date"] = null;
            $data["author"] = null;
        }

//        $avatar = request()->input('photo',null);
//        if (!$avatar){
//            $data['photo'] ='https://place-hold.it/300';
//        }
        $post->fill($data);

        $post->save();
        if(request()->get('tag_id',[])){
            $this->addPostTag($post['id'], request()->get('tag_id',[]));
        }else{
            $this->removeAllPostTag($post['id']);
        }

        if (is_array($attributes)){
            $post->updateOrCreateAttributes($attributes);
        }
        return $post;

    }

    public function destroy($id){
        if (Post::find($id)->can_delete == true)
            return Post::destroy($id);
        throw new \Exception('Can not delete this post','400');
    }


    /**
     * @return array
     */

//    public function getTreeListCategories(){
//        $categories = $this->categoryService->getList();
//        $list = [];
//
//        if(count($categories) > 0){
//            $this->getTree($list, null);
//        }
//        return $list;
//    }

    /**
     * @param $list
     * @param $id
     */

    function getTree (&$list, $id){
        $child =  Category::get()->where('parent_id', $id)->sortBy('order');
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
     * @param $text
     * @return mixed
     */
    function getStringToSeo($text){
        if(!$text) return '';
        $text = str_replace("&nbsp;",' ',strip_tags($text));
        if(strlen($text) > 255){
            $text = substr($text, 0, 255) . "...";
        }
        return $text;
    }


    /**
     * @param $list
     * @param $space
     * @return string\
     */

    function createTreeComboBox($list, $space){
        $tree = '';
        foreach ($list as $key => $item) {
            //dd($item);
            $tree .= '<option value="'.$item['item']['id'].'">'.$space.$item['item']['category_name']. '</option>';
            if(count($item['children']) > 0){
                $tree .= $this->createTreeComboBox($item['children'], $space.'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            }
        }
        return $tree;
    }

    /**
     * @param $listAllTags
     * @param $listSelectedTags
     */
    function addSelectedFlag(&$listAllTags, $listSelectedTags){
        foreach($listSelectedTags as $selectedTag){
            foreach($listAllTags as $tag){
                if( $tag->id == $selectedTag->id){
                    $tag->selected = true;
                }
            }
        }

    }

    /**
     * @param $list
     * @param $space
     * @param $selectedID
     * @return string
     */
    function createTreeComboBoxWithSelectedItem($list, $space, $selectedID){
        $tree = '';

        foreach ($list as $key => $item) {
            //dd($item);
            $tree .= '<option value="'.$item['item']['id'].'"';
            $tree .=  $selectedID == $item['item']['id']?'selected':'';
            $tree .='>'.$space.$item['item']['category_name']. '</option>';
            if(count($item['children']) > 0){
                $tree .= $this->createTreeComboBoxWithSelectedItem($item['children'], $space.'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', $selectedID);
            }
        }
        return $tree;
    }

    /**
     * @param $postID
     * @param $tags
     */
    public function addPostTag($postID, $tags){
        PostTag::where('post_id', $postID)->delete();
        foreach($tags as $tag){
            if($tag){
                $data = [
                    'tag_id'=> $tag,
                    'post_id' => $postID
                ];
                PostTag::create($data);
            }

        }
    }

    public function removePostTag( $id, $tag_id){
        PostTag::where('post_id', $id)->where('tag_id', $tag_id)->first()->delete();
    }
    public function removeAllPostTag( $id){
        PostTag::where('post_id', $id)->delete();
    }

    public function custom_fields(){
        $setting = json_decode(file_get_contents(base_path('database/dataJson/customfields.json')), true);
        $data = [];
        $time = getdate()['hours'].':'.getdate()['minutes'];
        if (getdate()['minutes'] <10){
            $time = getdate()['hours'].':0'.getdate()['minutes'];
        }if ( getdate()['hours'] <10){
            $time = '0'.getdate()['hours'].':'.getdate()['minutes'];
        }if (getdate()['minutes'] <10 && getdate()['hours'] <10){
            $time = '0'.getdate()['hours'].':0'.getdate()['minutes'];
        }
        $data['select'] = null;
        $data['option'] = null;
        if (!empty($setting)){
            $active = reset($setting);
            foreach ($setting as $key => $item){
                if ($key == $active){
                    $display = "block";
                    $required = "required";
                    $name = "attributes['+time+'][content]";
                }else{
                    $display = "none";
                    $required = "";
                    $name = "";
                }
                switch ($item){
                        case 'richTextEditor':
                        $data['select'] = $data['select']."'<option value=\"richTextEditor\">Rich Text Editor</option>' +";
                        $data['option'] = $data['option']."'<textarea rows=\"3\" name=\"$name\" class=\"contentEditor-cs form-control richTextEditor\"  placeholder=\"Input value\" style=\"resize: none; display: $display\" $required></textarea>' +";
                        break;
                    case 'text':
                        $data['select'] = $data['select']."'<option value=\"text\">Text</option>' +";
                        $data['option'] = $data['option']."'<textarea rows=\"3\" name=\"$name\" class=\"form-control text\"  placeholder=\"Input value\" style=\"resize: none; display: $display\" $required></textarea>' +";
                        break;
                    case 'number':
                        $data['select'] = $data['select']."'<option value=\"number\">Number</option>' +";
                        $data['option'] = $data['option']."'<input type=\"number\" class=\"form-control number\" name=\"$name\" style=\"display: $display\" $required>' +";
                        break;
                    case 'email':
                        $data['select'] = $data['select']."'<option value=\"email\">Email</option>' +";
                        $data['option'] = $data['option']."'<input type=\"email\" class=\"form-control email\" name=\"$name\" style=\"display: $display\" $required>' +";
                        break;
                    case 'time':
                        $data['select'] = $data['select']."'<option value=\"time\">Time</option>' +";
                        $data['option'] = $data['option']."'<input type=\"time\" class=\"form-control time\" name=\"$name\" style=\"display: $display\" value=\"$time\" $required>' +";
                        break;
                    case 'boolean':
                        $data['select'] = $data['select']."'<option value=\"boolean\">Yes or No</option>' +";
                        $data['option'] = $data['option']."'<select class=\"form-control boolean\" name=\"$name\" style=\"display: $display\" $required>' +
                                                           '   <option value=\"yes\">Yes</option>' +
                                                           '   <option value=\"no\">No</option>' +
                                                           '</select>' +";
                        break;
                    case 'image':
                        $data['select'] = $data['select']."'<option value=\"image\">Image</option>' +";
                        $data['option'] = $data['option']."'<div class=\"form-group image\" style=\"display: $display\">' +
                                                           '   <div class=\"media-loader-parent block-image\">' +
                                                           '       <div class=\"input-group \">' +
                                                           '           <span class=\"input-group-addon\" style=\"position: relative;z-index: 5; border-right: 1px solid #ccc;padding: 9px 24px 0px 13px; display: -webkit-box\"><i class=\"fa fa-upload\"></i></span>' +
                                                           '           <input autocomplete=\"off\" type=\"text \" class=\"form-control media-loader image\" placeholder=\"Choose file\" name=\"$name\" $required style=\"margin-left: -38px;padding-left: 50px;\">' +
                                                           '       </div>' +
                                                           '   </div>' +
                                                           '</div>' +";
                        break;
                    case 'date':
                        $data['select'] = $data['select']."'<option value=\"dates\">Date</option>' +";
                        $data['option'] = $data['option']."'<div class=\"form-group dates\" style=\"display: $display\">' +
                                                           '   <div class=\"input-group date block-csf\">' +
                                                           '       <div class=\"input-group-addon\" style=\"position: relative;z-index: 5; border-right: 1px solid #ccc;\">' +
                                                           '           <i class=\"fa fa-calendar\"></i>' +
                                                           '       </div>' +
                                                           '       <input type=\"text\" name=\"$name\" class=\"form-control pull-right datepicker-cs dates\" style=\"margin-left: -38px;padding-left: 50px;\" $required>' +
                                                           '   </div>' +
                                                           '</div>' +";
                        break;
                    case 'dateRanger':
                        $data['select'] = $data['select']."'<option value=\"dateRanger\">Date Ranger</option>' +";
                        $data['option'] = $data['option']."'<div class=\"form-group dateRanger\" style=\"display: $display\">' +
                                                           '   <div class=\"input-group date block-csf\">' +
                                                           '       <div class=\"input-group-addon\" style=\"position: relative;z-index: 5; border-right: 1px solid #ccc;\">' +
                                                           '           <i class=\"fa fa-calendar\"></i>' +
                                                           '       </div>' +
                                                           '       <input type=\"text\" name=\"$name\" class=\"form-control pull-right reservation-cs dateRanger\" style=\"margin-left: -38px;padding-left: 50px;\" $required>' +
                                                           '   </div>' +
                                                           '</div>' +";
                        break;
                    case 'color':
                        $data['select'] = $data['select']."'<option value=\"color\">Color</option>' +";
                        $data['option'] = $data['option']."'<div class=\"form-group color\" style=\"display: $display\">' +
                                                           '   <div class=\"input-group my-colorpicker-cs colorpicker-element block-csf\">' +
                                                           '       <input type=\"text\" name=\"$name\" class=\"form-control color\" value=\"#ff0000\" $required>' +
                                                           '       <div class=\"input-group-addon\" style=\"margin-left: -38px;position: relative;z-index: 3;border-left: 1px solid #ccc;\">' +
                                                           '           <i></i>' +
                                                           '       </div>' +
                                                           '   </div>' +
                                                           '</div>' +";
                        break;
                }
            }
        }
      return $data;
    }

    /**
     * Kiểm tra Attributes khi tạo một bài post
     *
     * @param $data
     * @return |null
     */
    public function checkValueCustomField($data){

        if (!empty($data['attributes'])){
            $data = $data['attributes'];
        }
        if ($this->checkAddField($data) == 0 ){
            return  __('validation/post.error_901');
        }
        if ($this->checkName($data) == 0 ){
            return  __('validation/post.error_name');
        }

        foreach ($data as $item){
            $messages = [
                'display_name.required' => 'Custom field names are not empty',
                'display_name.max'      => 'Custom field name is too long',
                'type.required'         => 'Custom field type are not empty',
                'type.max'              => 'Custom field type is too long',
                'content.required'      => 'Custom field content are not empty',
            ];
                $validator = Validator::make($item, [
                'display_name'  => 'required|max:255',
                'type'          => 'required|max:255',
                'content'       => 'required',
            ], $messages);

            if ($validator->fails()) {
                return $validator;
            }else{
                $checkType = $this->checkType($item);
                if ($checkType != null){
                    return $checkType;
                }
            }
        }
        return null;
    }

    private function checkName($value){
        if (!empty($value)){
            foreach ($value as $value_item){
                $ref = 0;
                foreach ($value as $value_item_re){
                    if ($value_item['display_name'] == $value_item_re['display_name']){
                        $ref++;
                    }
                }
                if ($ref > 1){
                    return 0; //lỗi
                }
            }
            return 1;
        }
    }
    /**
     * Kiểm tra Field thêm bằng hàm có đươc gửi lên đúng không
     * @param $value
     * @return int
     */
    private function checkAddField($value){
        $addField = json_decode(file_get_contents(base_path('database/dataJson/fieldsDefault.json')), true);
        if (!empty($addField)){
            foreach ($addField as $addField_item){
                if (!empty($value)){
                    if ($this->checkAddFieldDetail($value, $addField_item) == 0){
                        return 0;
                    }
                }else{
                    return 0;
                }
            }
            return 1;
        }
        return 1;
    }

    /**
     * Kiểm tra xem chi tiết Field thêm bằng hàm có đươc gửi lên đúng không
     * @param $value
     * @param $addField_item
     * @return int
     */
    private function checkAddFieldDetail($value,  $addField_item){
        foreach ($value as $value_item){
            if ($value_item['display_name'] == $addField_item['name']){
                if ($value_item['type'] == $addField_item['type']){
                    return 1;
                }
            }
        }
        return 0;
    }

    /**
     * Kiểm tra loại dữ liệu
     * Nếu cần thêm loại dữ liệu cần check thì thêm vô đây nha
     * @param $data  (gồm 1 mảng dữ liệu cần kiểm tra để trong content)
     * @return |null
     */
    public function checkType($data){
        switch ($data['type']){
            case ('text'):
                return null;
                break;
            case ('richTextEditor'):
                return null;
                break;
            case ('number'):
                $messages = [
                    'content.numeric' => __('validation/post.content_numeric'),
                ];
                $validator = Validator::make($data, [
                    'content'  => 'numeric',
                ], $messages);
                if ($validator->fails()) {
                    return $validator;
                }else{
                    return null;
                }
                break;
            case ('email'):
                $messages = [
                    'content.email' => __('validation/post.content_email'),
                ];
                $validator = Validator::make($data, [
                    'content'  => 'email',
                ], $messages);
                if ($validator->fails()) {
                    return $validator;
                }else{
                    return null;
                }
                break;
            case ('time'):
                $messages = [
                    'content.date_format' => __('validation/post.content_time'),
                ];
                $validator = Validator::make($data, [
                    'content'  => 'date_format:H:i',
                ], $messages);

                if ($validator->fails()) {
                    return $validator;
                }else{
                    return null;
                }
                break;
            case ('boolean'):
                $messages = [
                    'content.in' => __('validation/post.content_boolean'),
                ];
                $validator = Validator::make($data, [
                    'content'  => 'in:yes,no',
                ], $messages);
                if ($validator->fails()) {
                    return $validator;
                }else{
                    return null;
                }
                break;
                break;
            case ('image'):
                return null;
                break;
            case ('date'):
                $messages = [
                    'content.date_format' => __('validation/post.content_date'),
                ];
                $validator = Validator::make($data, [
                    'content'  => 'date_format:"m/d/Y"',
                ], $messages);
                if ($validator->fails()) {
                    return $validator;
                }else{
                    return null;
                }
                break;
            case ('dateRanger'):
                $data_s['start'] = substr($data['content'],0,10);
                $data_s['end'] = substr($data['content'],13,10);

                $messages = [
                    'start.date_format' => __('validation/post.content_dateRangerStart'),
                    'end.date_format' => __('validation/post.content_dateRangerEnd'),
                ];
                $validator = Validator::make($data_s, [
                    'start'  => 'date_format:"m/d/Y"',
                    'end'  => 'date_format:"m/d/Y"',
                ], $messages);
                if ($validator->fails()) {
                    return $validator;
                }else{
                    return null;
                }

                break;
            case ('color'):
                $messages = [
                    'content.regex' => __('validation/post.content_color'),
                ];
                $validator = Validator::make($data, [
                    'content'  => [
                        'regex:/^(\#[\da-f]{3}|\#[\da-f]{6}|rgba\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)(,\s*(0\.\d+|1))\)|hsla\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)(,\s*(0\.\d+|1))\)|rgb\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)|hsl\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)\))$/i',
                    ],
                ], $messages);
                if ($validator->fails()) {
                    return $validator;
                }else{
                    return null;
                }
                break;
            default:
                return null;
        }
    }
}
