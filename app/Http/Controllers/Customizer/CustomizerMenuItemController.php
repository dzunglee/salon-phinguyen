<?php

namespace App\Http\Controllers\Customizer;

use App\Presenters\Customizer\Menu\EditCustomizerMenuItemPresenter;
use App\Presenters\Customizer\Menu\IndexCustomizerMenuItemPresenter;
use App\Services\Customizer\CustomizerMenuItemService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class CustomizerMenuItemController extends Controller
{

    /**
     * @var \App\Services\Customizer\CustomizerMenuItemService
     */
    private $service;

    public function __construct()
    {
        $this->service = service(CustomizerMenuItemService::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @param $slug
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function index($slug)
    {
        if (!empty(\request()->lang) && in_array(\request()->lang, $this->lang)){
            app()->setLocale(\request()->lang);
            \Session::put('locale', \request()->lang);
            $lang = \request()->lang;
        }else{
            app()->setLocale( 'en');
            \Session::put('locale', 'en');
            $lang = 'en';
        }

        
//        $item = $this->service->getCustomizerMenuItemById('2');
        $this->title('Menus');
        $this->description('');
        $this->breadcrumb(["text"=>"Menus","url"=>"customizer/menu"],["text"=>"Menu Items"]);
        $menuType = $this->service->checkIssetSlug($slug);
        if (!$menuType){
            abort(404);
        }
        $data = $this->service->getMenuItemByType($menuType->id,$lang);
        $typeOfMenuList = $this->service->getTypeOfMenuList();
        $data = presenter(IndexCustomizerMenuItemPresenter::class,['data'=>$data, 'menuType' => $menuType, 'typeOfMenuList' => $typeOfMenuList]);
        return $this->view('pages.customizer.menu_item.index',$data);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $res = $this->service->store();
        if ($res->errorCode == 200){
            show_alert($res->message,'success');
            return redirect()->back();
        }
        show_alert($res->message,'error');
        return redirect()->back()->withInput();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \Throwable
     */
    public function edit($id)
    {
        $lang = session('locale');
        $item = $this->service->getCustomizerMenuItemById($id,$lang);
        $menuType = $item->menu;
        if (!$menuType || !$item){
            abort(404);
        }
        $typeOfMenuList = $this->service->getTypeOfMenuList();
        $menuByTypeList = $this->service->getMenuItemByType($menuType->id,$lang);
        $data = presenter(EditCustomizerMenuItemPresenter::class,['item'=>$item,'menuByTypeList'=>$menuByTypeList, 'menuType' => $menuType, 'typeOfMenuList' => $typeOfMenuList]);
        $contents = $this->view('pages.customizer.menu_item.edit', $data)->render();
        return response($contents,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $lang = session('locale');
        if($lang == 'vi'){
            app()->setLocale('vi');
            \Session::put('locale', 'vi');
        }else{
            app()->setLocale( 'en');
            \Session::put('locale', 'en');
        }
        $res = $this->service->update($id);
        if ($res->errorCode == 200){
            return response($res->message, 200);
        }
        return response($res->message, $res->errorCode);
        app()->setLocale( 'en');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = $this->service->destroy($id);
        if ($res->errorCode == 200){
            return response('Deleted',$res->errorCode);
        }
        return response('Can not delete this menu_type.',$res->errorCode);
    }

    public function getMenuElementByType(){
        $type = \request('type','link');
        $id = \request('item_id',null);
        if ($id){
            $item = $this->service->getCustomizerMenuItemById($id);
        }
        $res = '';
        switch ($type){
            case 'post':
                $res .= $this->service->getAllPostHtml(isset($item) && $item->type == 'post'?$item->uri:null);
                break;
            case 'page':
                $res .= $this->service->getAllPageHtml(isset($item) && $item->type == 'page'?$item->uri:null);
                break;
            case 'category':
                $res .= $this->service->getAllCategoryHtml(isset($item) && $item->type == 'category'?$item->uri:null);
                break;
            default:
                $res .= sprintf('<label for="uri" class="control-label">URI</label>
                            <input type="text" id="uri" name="uri" value="%s" class="form-control uri" placeholder="Input URI">',isset($item) && $item->type == 'link'?$item->uri:null);
                break;
        }
        return response()->json($res, 200);
    }


    public function saveMenuItem(){
        $res = $this->service->saveMenuItem();
        if ($res->errorCode == 200){
            return response('Success',200);
        }
        return response('',400);

    }
}
