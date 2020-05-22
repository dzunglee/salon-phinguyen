<?php

namespace App\Http\Controllers\Customizer;

use App\Services\Customizer\CustomizerMenuTypeService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CustomizerMenuTypeController extends Controller
{

    /**
     * @var \App\Services\Customizer\CustomizerMenuTypeService
     */
    private $service;

    public function __construct()
    {
        $this->service = service(CustomizerMenuTypeService::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function index()
    {
        $this->title('Menus');
        $this->description('');
        $this->breadcrumb(["text"=>"Menus"]);
        $data = $this->service->indexPaginate();
        return $this->view('pages.customizer.menu_type.index',compact('data'));
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
            show_toast($res->message,'success');
            return redirect(route('menu.index'));
        }
        show_toast($res->message,'error');
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
        $item = $this->service->getCustomizerMenuById($id);
        if (!$item){
            abort(404);
        }
        $contents = view('pages.customizer.menu_type.edit', compact('item'))->render();
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
        $res = $this->service->update($id);
        if ($res->errorCode == 200){
            return response($res->message, 200);
        }
        return response($res->message, $res->errorCode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        $res = $this->service->destroy($id);
        if ($res->errorCode == 200){
            return response('Deleted',$res->errorCode);
        }
        return response('Can not delete this menu_type.',$res->errorCode);
    }
}
