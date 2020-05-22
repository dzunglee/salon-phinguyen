<?php

namespace App\Services;
use App\Classes\UploadFile;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use SaliproPham\LaravelMVCSP\Service;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Foundation\Validation\ValidatesRequests;


class MediaService extends Service
{
    use ValidatesRequests;

    public $imageExtensions = ['image/gif', 'image/jpeg', 'image/png'];
    private $imageManager;

    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->imageManager = new ImageManager();
    }

    public function getDirectoriesDetail($parent = ''){
        $directories = Storage::directories($parent);
        $list = [];
        foreach ($directories as $directory){
            $contents = $this->getDirectoryDetail($directory);
            array_push($list, $contents);
        }
        $sort = request('sort',['name' => setting('default_sort_date_or_name','name'), 'order' => setting('default_sort_az_or_za','asc')]);
        if($sort && $sort['name'] == 'name'){
            $this->sortListByKey($list, $sort['name'], $sort['order']);
        }
        return $list;
    }

    public function getDirectoryDetail($directory){
        return [
            'id' => str_random(20),
            'name' => basename($directory),
            'type' => 'folder',
            'path' => $directory,
        ];
    }


    public function getFilesDetail($parent = ''){
        $files = Storage::files($parent);
        $list = [];
        foreach ($files as $file){
            $contents = $this->getFileDetail($file);
            array_push($list, $contents);
        }
        //$list = $this->isFileAnImageOrNot($list);

        $sort = request('sort',['name' => setting('default_sort_date_or_name','name'), 'order' => setting('default_sort_az_or_za','asc')]);
        if($sort){
            $this->sortListByKey($list, $sort['name'], $sort['order']);
        }
        return $list;
    }

    public function sortListByKey(&$list, $key, $order = 'asc'){
        if(!$key) return;

        $keys = ['name', 'size', 'type', 'lastModified'];
        if(!in_array($key, $keys)) return;

        if($key == 'size') $key = 'sizeByte';

        if($order == 'des'){
            usort($list, function ($item1, $item2) use($key){
                return mb_strtolower($item1[$key])  <=  mb_strtolower($item2[$key]) ;
            });
        }else{
            usort($list, function ($item1, $item2) use($key){
                return mb_strtolower($item1[$key]) >=  mb_strtolower($item2[$key]) ;
            });
        }

    }

    public function getFileDetail($file){
        $data = [
            'id' => str_random(20),
            'name' => basename($file),
            'type' => Storage::mimeType($file),
            'size' => $this->convertToReadableSize(Storage::size($file)),
            'lastModified' =>  \DateTime::createFromFormat("U", Storage::lastModified($file))->format(setting('date_formats').' H:i'),
            'url' => Storage::url($file),
            'urlFull' => url(Storage::url($file)),
            'path' => $file,
            'sizeByte' => Storage::size($file)
        ];

        if(in_array($data['type'], $this->imageExtensions)){
            $data['image'] = true;
        }
        return $data;
    }

    function convertToReadableSize($size){
        $number = 1024;
        if($size < $number) return '1KB';
        $base = log($size) / log($number);
        $suffix = array("", "KB", "MB", "GB", "TB");
        $f_base = floor($base);
        return round(pow($number, $base - floor($base)), 1) . $suffix[$f_base];
    }

    function uploadFiles($array = [], $folder = ''){
        $result = [
            'numberItemSuccess' => 0,
            'doneFiles' => [],
            'errorFiles' => [],
            'numberItemFailed' => 0
        ];

        if (!is_array($array)){
            throw new \Exception('Input must be an array');
        }

        foreach ($array as &$file){
            if(!$file->getClientSize() || $file->getClientSize() > setting('up_load_max_size')*1048576){
                array_push($result['errorFiles'],  ['name' => $file->getClientOriginalName(), 'errorMsg' => 'Upload file failed, file must not be greater than '.setting('up_load_max_size').'MB']);
                $result['numberItemFailed'] ++;
                continue;
            }

            try{
                $newFile = UploadFile::uploadFile($file, $folder);
                if($newFile){
                    $data = $this->getFileDetail($this->trimPath($folder.'/'.$newFile));
                    $data['old_name'] = $file->getClientOriginalName();

                    array_push($result['doneFiles'],  $data );
                    $result['numberItemSuccess'] ++;
                }else{
                    array_push($result['errorFiles'],  ['name' => $file->getClientOriginalName(), 'errorMsg' => 'Upload file failed!']);
                    $result['numberItemFailed'] ++;
                }
            }catch (\Exception $e){
                logger($e->getMessage());
                array_push($result['errorFiles'],  ['name' => $file->getClientOriginalName(), 'errorMsg' => $e->getMessage()]);
                $result['numberItemFailed'] ++;
            }
        }
        return $result;
    }

    function getBreadcrumbByPath($path){
        $lastStr = substr($path, -1);
        if ($lastStr == '/'){
            $path = substr($path,0, strlen($path) - 1);
        }
        $res = [];
        if (trim($path) !== ''){
            $path = $this->trimPath($path);
            $arr = explode('/',$path);
            foreach ($arr as $key => $item){
                $temp = [
                    'name' => $item,
                    'path' => ''
                ];
                for ($i = 0; $i <= $key; $i++){
                    $temp['path'].=$arr[$i].'/';
                }
                $res[] = $temp;
            }
        }
        return $res;
    }

    /**
     * @param $file -- a file or path
     * @return bool
     */
    function isImage($file){
        return in_array(Storage::mimeType($file), $this->imageExtensions);
    }

    function editImage(){
        $data = $this->validate(request(),[
            'image-path' => 'required',
            'width' => 'required|numeric',
            'height' => 'required|numeric',
            'ratio' => 'required|numeric',
            'newWidthValue' => 'required|numeric',
            'newHeightValue' => 'required|numeric',
            'x' => 'required|numeric',
            'y' => 'required|numeric',
            'type' => 'required',
            'current-folder' => 'required',
            'quantity' => 'required|numeric|max:100|min:30',
        ]);
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Edit image successfully'
        ];

        try{
            $imageDetail = $this->getFileDetail($data['image-path']);
            $file = Storage::disk()->get($data['image-path']);
            $image = $this->imageManager->make($file);
            // check size change
            if($data['width'] == $image->width() && $data['height'] == $image->height()){
                $image->crop(intval ($data['newWidthValue']),intval($data['newHeightValue']),intval($data['x']),intval($data['y']), $data['quantity']);
                $storagePath = Storage::disk(config('w3cms.file_directory'));
                $storagePath = $storagePath->path($data['current-folder']);
                $newName = $imageDetail['name'];
                if($data['type'] == 'create'){
                    $newName = UploadFile::randomName(config('w3cms.file_directory').'/'.$data['current-folder'],$imageDetail['name']);
                }
                $image->save($storagePath.$newName);

            }else{
                $image->resize(intval ($data['width']),intval($data['height']));
                $storagePath = Storage::disk(config('w3cms.file_directory'));
                $storagePath = $storagePath->path($data['current-folder']);
                $newName = $imageDetail['name'];
                if($data['type'] == 'create'){
                    $newName = UploadFile::randomName(config('w3cms.file_directory').'/'.$data['current-folder'],$imageDetail['name']);
                }
                $image->save($storagePath.$newName);
            }
        }catch (\Exception $e){
            logger($e->getMessage());
            $res->errorCode = 400;
            $res->message = 'Cant not edit this image';
        }
        return $res;
    }

    function delete($selectedList){
        $result = [
            'numberItemSuccess' => 0,
            'doneFiles' => [],
            'errorFiles' => [],
            'numberItemFailed' => 0
        ];
        foreach ($selectedList as $item) {
            $path = $item['path'];
            $type = $item['type'];
            try{
                if ($type == 'folder') {
                    Storage::deleteDirectory($path);
                } else {
                    Storage::delete($path);
                }
                array_push($result['doneFiles'], $path );
                $result['numberItemSuccess'] ++;
            }catch (\Exception $err){
                array_push($result['errorFiles'],  $path );
                $result['numberItemFailed'] ++;
            }
        }
        return $result;

    }


    function move($selectedList, $destinationPath){
        $result = [
            'numberItemSuccess' => 0,
            'doneFiles' => [],
            'errorFiles' => [],
            'numberItemFailed' => 0
        ];

        foreach ($selectedList as $item){
            try{
                $oldFile = $this->trimPath($item['path']);
                $name = $item['name'];
                $newFile = $this->trimPath(config('w3cms.file_directory').'/'.$destinationPath.'/'.$name);

                if($oldFile == $newFile){
                    array_push($result['errorFiles'],  ['path' => $oldFile, 'errorMsg'=> 'The source and destination are the same'] );
                    $result['numberItemFailed'] ++;
                }else{
                    $override = setting('override_if_exists',0);
                    if(Storage::exists($newFile) && !$override){
                        array_push($result['errorFiles'],  ['path' => $oldFile, 'errorMsg'=> 'File/folder already exist in this path'] );
                        $result['numberItemFailed'] ++;
                    }else {
                        Storage::move($oldFile, $newFile);
                        array_push($result['doneFiles'], $oldFile);
                        $result['numberItemSuccess']++;
                    }
                }

            }catch (\Exception $err){
                array_push($result['errorFiles'],
                    ['path' => $oldFile,
                    'errorMsg'=> "Can not move file/folder"
//                    'old' => $oldFile ,
//                    'new' => $newFile,
//                    'destinationPath' => $destinationPath
                    ]);
                $result['numberItemFailed'] ++;
            }
        }
        return $result;

    }

    function sumFilesSize($files = []){
        $total = 0;
        try{
            foreach ($files as $file){
                $total += $file->getClientSize();
            }
        }catch (\Exception $e){
            log($e->getMessage());
            return 0;
        }
        return $total / 1048576; //byte to mb
    }

    function trimPath($path){
        while (strpos($path, '//')){
            $path = str_replace('//', '/', $path);
        }
        return $path;
    }
}
