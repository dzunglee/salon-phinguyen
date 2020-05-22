<?php

namespace App\Http\Controllers;

use App\Presenters\Media\IndexMediaPresenter;
use App\Services\MediaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Intervention\Image\ImageManager;

class MediaController extends Controller
{
    /**
     * @var \App\Services\MediaService
     */
    private $service;
    private $imageManager;
    private $settings = [
        'showPreview' => 1
    ];

    public function __construct()
    {
        $this->service = service(MediaService::class);
        $this->imageManager = new ImageManager();
    }
    //
    public function index()
    {
        $this->title('Media');
        $this->description('');
        $this->breadcrumb(["text"=>"Media"]);
        $path = request('path','');
        $fileBreadcrumbs = $this->service->getBreadcrumbByPath($path);
        $currentPath = count($fileBreadcrumbs) > 0?$fileBreadcrumbs[count($fileBreadcrumbs)-1]:['name' => '','path'=>'/'];
        $path = config('w3cms.file_directory').'/'.$path;
        $type = request('type',null);
        $isModal = request('is-modal',null);
        $folders = $this->service->getDirectoriesDetail($path);
        $files = $this->service->getFilesDetail($path);
        $isShowPreview = request('isShowPreview','true');
        $viewType = request('viewType',setting('default_view','grid'));
        $viewType = is_null($viewType)?setting('default_view','grid'):$viewType;
        $short = request('sort',['name' => setting('default_sort_date_or_name','name'), 'order' => setting('default_sort_az_or_za','asc')]);
        if ($type){
            $contents = view('pages.media.index-without-header',compact('folders', 'files', 'path','fileBreadcrumbs','currentPath','type', 'isModal', 'isShowPreview','viewType','short'))->render();
            return response($contents, 200);
        }
        if ($isModal){
            $contents = view('pages.media.modal-media',compact('folders', 'files', 'path','fileBreadcrumbs','currentPath', 'isShowPreview','viewType','short'))->render();
            return response($contents,200);
        }
        return $this->view('pages.media.index', compact('folders', 'files', 'path','fileBreadcrumbs','currentPath', 'isShowPreview','viewType','short'));
    }

    public function getMedia($folder = ''){
        //dd(Storage::exists('public/New folder/New folder'));
        dd(  'avatars' <= 'New folder');
        $folder = $folder?$folder : '';
        $this->title('Media Test');
        $this->description('');
        $this->breadcrumb(["text"=>"Media"]);
        $list = $this->service->getFilesDetail($folder.'/public/images');

        return $this->view('pages.media.test', compact('list'));
    }


    public function rename(){
        //dd(request()->all());
        $this->validate(request(),[
            'newName' => 'required|max:255',
        ]);

        $folder = config('w3cms.file_directory').'/'.request()->input('curPath');
        $oldFile = $this->service->trimPath($folder.'/'.request()->input('oldName'));
        $newFile = $this->service->trimPath($folder.'/'.request()->input('newName'));

        if(!Storage::exists($oldFile)){
            return response("",'404');
        }

        if($oldFile == $newFile){
            if(request()->input('type') == 'folder'){
                $result = $this->service->getDirectoryDetail($newFile);
                $path = (!empty(request('curPath')) && request('curPath') != '/' )?request('curPath').'/'.request('newName'):request('newName');
                $result['dataPath'] = route('cms.media',['path'=>$path] );
            }else{
                $result = $this->service->getFileDetail($newFile);
            }
            return response()->json( $result , '200');
        }

        try{
            Storage::move($oldFile, $newFile);
            if(request()->input('type') == 'folder'){
                $result = $this->service->getDirectoryDetail($newFile);
                $path = (!empty(request('curPath')) && request('curPath') != '/' )?request('curPath').'/'.request('newName'):request('newName');
                $result['dataPath'] = route('cms.media',['path'=>$path] );
            }else{
                $result = $this->service->getFileDetail($newFile);
            }
            return response()->json( $result , '200');
        }catch (\Exception $err){
            return response('Rename Failed', '400');
//                return response($err->getMessage(), '400');
        }
    }

    public function addNewFolder(){
        $name = request()->input('newName');
        $this->validate(request(),[
            'newName' => 'required|max:255',
        ]);

        if (!strpbrk($name, "\\/?%*:|\"<>") === FALSE) {
            return response( "Folder name cannot contain any of the following characters: \\/?%*:|\"<>", '400');
        }

        $path = config('w3cms.file_directory').'/'.request()->input('curPath');
        $newFolder = $this->service->trimPath($path.'/'.$name);

        if(Storage::exists($newFolder)){
            return response( 'Folder already exist!', '400');
        }

        try{
            Storage::makeDirectory($newFolder);
            $folder =  $this->service->getDirectoryDetail($newFolder);;
            return response( view('pages.media.item-folder', compact('folder')), '200');
        }catch (\Exception $err){
            return response('Add Folder Failed', '400');
        }
    }

    public function move(){
        $selectedList = request()->input('selectedList');
        $destinationPath = request()->input('destinationPath');
        if(!$selectedList || !is_array($selectedList) || sizeof($selectedList) == 0){
            return response( "Cannot move file/folder", 400);
        }
        return response($this->service->move($selectedList, $destinationPath), 200);
    }

    public function addTreeFolder(){
        $this->validate(request(),[
            'newName' => 'required|max:255',
        ]);
        $name = request()->input('newName');

        if (!strpbrk($name, "\\/?%*:|\"<>") === FALSE) {
            return response( "Folder name cannot contain any of the following characters: \\/?%*:|\"<>", '400');
        }

        $path = config('w3cms.file_directory').'/'.request()->input('curPath');
        //$newFolder = $path.'/'.$name;
        $newFolder = $this->service->trimPath($path.'/'.$name);

        if(Storage::exists($newFolder)){
            return response( 'Folder already exist!', '400');
        }

        try{
            Storage::makeDirectory($newFolder);
            $folder =  $this->service->getDirectoryDetail($newFolder);
            $result = [
                'folder' => (String)view('pages.media.item-folder', compact('folder')),
                'treeFolder' => (String)view('pages.media.item-tree-folder', compact('folder'))
            ];

//            $result = view('pages.media.item-tree-folder', compact('folder'));
            return response( $result, '200');
        }catch (\Exception $err){
            return response('Add Folder Failed', '400');
        }

    }

    public function delete(){
        $selectedList = request()->input('selectedList');
        return response()->json($this->service->delete($selectedList), 200);
    }

    public function saveSettings(){
        $settings['showPreview'] = request()->input('isShowPreview')?1:0;
        $this->settings = $settings;
        return response( $settings, '200');
    }

    public function getSettings(){
        if($this->settings){
            return response( $this->settings, '200');
        }
    }

	public function upload(){
        $files = request('files');
        //dd(array_sum($_FILES['files']['size']));
        if ($this->service->sumFilesSize($files) >= setting('post_max_size')){
            return response()->json('Upload too large. Maximum size is '.setting('post_max_size').'MB', 400);
        }

        if(request('totalFile') > ini_get('max_file_uploads')){
            return response()->json('Cannot upload more than '.ini_get('max_file_uploads').' file', 400);
        }
        
        $folder = request('folder','');
        $folder = $folder != '/'? $this->service->trimPath(config('w3cms.file_directory').'/'.$folder) : config('w3cms.file_directory');
        return  response($this->service->uploadFiles($files, $folder), 200);
    }

    public function getImageEdit(){
        $path = $this->service->trimPath(request('image-path',null));
        if ($path){
            $exists = Storage::exists($path);
            if (!$exists){
                return response('File not found!', 404);
            }
            if (!$this->service->isImage($path)){
                return response('Can not edit this file!', 400);
            }
            $file = Storage::disk()->get($path);
            $image = $this->imageManager->make($file);
            $width = $image->width();
            $height = $image->height();
            $imagePath = Storage::url($path).'?t='.time();
            $contents = view('pages.media.modal-edit-image', compact('width', 'height', 'imagePath', 'path'))->render();
            return response($contents);
        }else{
            return response('File not found!', 404);
        }
    }

    public function postImageEdit(){
        $res = $this->service->editImage();
        return response($res->message, $res->errorCode);
    }

    public function getDirectoryTreeByPath(){
        $path = request()->input('path');
        $treeBreadcrumbs = $this->service->getBreadcrumbByPath($path);
        if($path){
            $path = '/'.$path;
        }
        $path = $this->service->trimPath($path);
        $directories = $this->service->getDirectoriesDetail($this->service->trimPath(config('w3cms.file_directory').$path));
        return response(view('pages.media.tree-list-item', compact('directories', 'treeBreadcrumbs', 'path')), 200);
    }
    public function postImageSummernote(){
        $today = date("Y-m");
        $files = request('image');
        $folder = "public/upload/$today";
        return  response($this->service->uploadFiles($files, $folder), 200);
    }

}
