<?php

namespace App\Http\Controllers;

use App\Models\ExtendRole;
use App\Models\GroupPermission;
use App\Models\Menu;
use App\Presenters\getMenuItemPresenter;
use App\Presenters\Menu\CreateMenuItemPresenter;
use App\Presenters\Menu\EditMenuItemPresenter;
use App\Presenters\Menu\IndexMenuPresenter;
use App\Services\MenuService;
use App\Traits\AuthorizeTrait;
use Illuminate\Http\Request;
use Mockery\Exception;
use Spatie\Permission\Models\Permission;

class MenuController extends Controller
{
    use AuthorizeTrait;

    /**
     * @var \App\Services\MenuService
     */
    private $service;

    public function __construct()
    {
        $this->service = service(MenuService::class);
    }

    public function saveMenu(){
        $this->checkAuth();

        $res = $this->service->saveMenu();
        if ($res->errorCode == 200){
            return response('Success',200);
        }
        return response('',400);

    }

    public function index()
    {
        $this->title('Menus');
        $this->description('');
        $this->breadcrumb(["text"=>"Menus"]);
        $data = $this->service->getMenu();
        $data = presenter(IndexMenuPresenter::class,['data'=>$data]);
        return $this->view('pages.menu.index', $data);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function create()
    {
        $this->title('Create Menu');
        $this->description('');
        $this->breadcrumb(["text"=>"Menus", 'url'=> 'menus'],["text"=>"Create"] );
        $data = $this->service->getCreateMenuItemData();
        $data = presenter(CreateMenuItemPresenter::class,$data);
        return $this->view('pages.menu.create', $data);
    }

    public function store()
    {
        $res = $this->service->store();
        if ($res->errorCode == 200){
            show_alert($res->message,'success');
            return redirect(route('menus.index'));
        }
        show_alert($res->message,'error');
        return redirect()->back()->withInput();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        abort(404);
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function edit($id)
    {
        $this->title('Edit Menu');
        $this->description('');
        $this->breadcrumb(["text"=>"Menus", 'url'=> 'menus'],["text"=>"Edit"] );
        $data = $this->service->getEditMenuItemData($id);
        $data = presenter(EditMenuItemPresenter::class,$data);
        return $this->view('pages.menu.edit',$data);
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
        $res = $this->service->update($id);
        if ($res->errorCode == 200){
            show_alert($res->message,'success');
            return redirect(route('menus.index'));
        }
        show_alert($res->message,'error');
        return redirect()->back()->withInput();

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
        return response('Can not delete this menu.',$res->errorCode);
    }

    public function getMenu()
    {
        $menus = Menu::orderBy('order')->get();
        $me = me();
        if ($me){
            foreach ($menus as $key => $menu){
                if (count($menu->getAllPermissions()) != 0){
                    $flag = false;
                    foreach ($menu->getAllPermissions() as $permission){
                        if (is_root_user($me)){
                            $flag = true;
                        }
                        elseif ($me->can($permission->name))
                            $flag = true;
                    }
                    if (!$flag)
                        $menus->forget($key);
                }
            }
            $newMenus = [];
            $parents = [];
            foreach ($menus as $menu) {
                if (!$menu['parent_id']) {
                    $parents[] = $menu;
                }
                $newMenus[$menu['parent_id']][] = $menu;
            }
            return tree_menu($newMenus, $parents);
        }
        return redirect()->route('cms.login.show');
    }
}
