<?php

namespace App\Http\Controllers;

use File;
use Illuminate\Http\Request;
use Lang;

class translateController extends Controller
{
    private $langPath = '';

    public function __construct()
    {
        $this->langPath = realpath(base_path('Modules/Imba/resources/lang/'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return "11";
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getTranslate()
    {
        if (!empty(\request()->lang) && in_array(\request()->lang, $this->lang)) {
            if (\request()->lang == 'vi') {
                \Session::put('locale', \request()->lang);
                $jsonString = file_get_contents($this->langPath . DIRECTORY_SEPARATOR . 'en.json');
                $jsonStringVi = file_get_contents($this->langPath . DIRECTORY_SEPARATOR . 'vi.json');
                $data = json_decode($jsonString, true);
                $dataVi = json_decode($jsonStringVi, true);
                return $this->view('pages.translate.index', compact('data', 'dataVi'));
            } else {
                \Session::put('locale', 'en');
                $jsonString = file_get_contents($this->langPath . DIRECTORY_SEPARATOR . 'en.json');
                $data = json_decode($jsonString, true);
                $dataVi = $data;
                return $this->view('pages.translate.index', compact('data', 'dataVi'));
            }
        } else {
            \Session::put('locale', 'vi');
            dd([$this->langPath, base_path(), app_path()]);
            $jsonString = file_get_contents($this->langPath . DIRECTORY_SEPARATOR . 'en.json');
            $jsonStringVi = file_get_contents($this->langPath . DIRECTORY_SEPARATOR . 'vi.json');
            $data = json_decode($jsonString, true);
            $dataVi = json_decode($jsonStringVi, true);
            return $this->view('pages.translate.index', compact('data', 'dataVi'));
        }
    }

    public function changeTranslate(Request $request)
    {
        $lang = session('locale');
        if ($lang == 'vi') {
            $jsonStringVi = file_get_contents($this->langPath . DIRECTORY_SEPARATOR . 'vi.json');
            $dataVi = json_decode($jsonStringVi, true);
            $a = $request->translateChange;
            foreach ($a as $key => $value) {
                if ($value == '') {
                    return back();
                } else {
                    $dataVi[$key] = $value;
                }
            }
            $newJsonString = json_encode($dataVi);
            file_put_contents($this->langPath . DIRECTORY_SEPARATOR . 'vi.json', $newJsonString);
            return back();
        } else {
            $jsonString = file_get_contents($this->langPath . DIRECTORY_SEPARATOR . 'en.json');
            $data = json_decode($jsonString, true);
            $a = $request->translateChange;
            foreach ($a as $key => $value) {
                $data[$key] = $value;
            }
            $newJsonString = json_encode($data);
            file_put_contents($this->langPath . DIRECTORY_SEPARATOR . 'en.json', $newJsonString);
            return back();
        }

    }
}
