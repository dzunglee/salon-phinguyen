<?php

namespace App\Classes;

use Illuminate\Session\Store;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class UploadFile
{
    public  $storage;

    private static $singletonObj = null;

    public static function getInstance() {
        if (self::$singletonObj !== null) {
            return self::$singletonObj;
        }

        self::$singletonObj = new self();
        return self::$singletonObj;
    }

    public function __construct()
    {
        $this->storage = Storage::disk('public');
    }

    /**
     * store
     * @param $file
     * @param string $folder
     * @return mixed
     */
    public static function uploadImage($file, $folder = ''){
        $object = self::getInstance();
        $folder = $folder? $folder : 'images' ;
        if (!$object->storage->exists($folder)) {
            $object->storage->makeDirectory($folder);
        }
        try {
            $fileName = $file->getClientOriginalName();
            $imageName = str_random(20) . $fileName;
            return  Storage::url($file->storeAs("public/".$folder, $imageName));
        } catch (\Exception $e) {

            if (request()->expectsJson()) {
                return "";
            }else{
                $error = ValidationException::withMessages([
                    'file' => 'Unsupported image type'
                ]);
                throw $error;
            }
        }
    }

    public static  function uploadSquareImage($file, $folder = ""){
        $object = self::getInstance();
        $quality = 100;
        $folder = $folder? $folder : 'images' ;
        if (!$object->storage->exists($folder)) {
            $object->storage->makeDirectory($folder);
        }
        try {
            $fileName = $file->getClientOriginalName();
            $image = Image::make($file);
            $maxSize = $image->width() >  $image->height()?  $image->height() : $image->width();
            $image->resize($maxSize, $maxSize);

            $imageName = str_random(20) . $fileName;
            $image->save($object->trimPath($object->storage->path($folder . '/') . $imageName, $quality));
            return Storage::url($folder) . '/' . $imageName;

        } catch (\Exception $e) {
            if (request()->expectsJson()) {
                return "";
            }else{
                $error = ValidationException::withMessages([
                    'file' => 'Unsupported image type'
                ]);
                throw $error;
            }
        }
    }


    /**
     * store
     * @param $file
     * @param string $folder
     * @return mixed
     */
    public static function uploadFile($file, $folder = ''){
        $object = self::getInstance();
        if($file->getClientSize() <= setting('up_load_max_size')*1048576){
            $folder = $folder? $folder : 'default';
            $override = setting('override_if_exists',0);
            if (!Storage::exists($folder)) {
                Storage::makeDirectory($folder);
            }
            try {
                $fileName = $file->getClientOriginalName();
                $imageName = $object->trimName($fileName, $folder);

                if (!$override){
                    $path = $object->trimPath($folder.'/'.$fileName);
                    if (Storage::exists($path)){
                        $imageName = self::randomName($folder,$imageName);
                    }
                    Storage::url($file->storeAs($folder, $imageName));
                    return $imageName;
                }else{
                    Storage::url($file->storeAs($folder, $imageName));
                    return $imageName;
                }

            } catch (\Exception $e) {
                if (request()->expectsJson()) {
                    return "";
                }else{
                    $error = ValidationException::withMessages([
                        'file' => 'Unsupported image type'
                    ]);
                    throw $error;
                }
            }
        }else{
            return null;
        }
    }


    public static function randomName($path, $name){
        $object = self::getInstance();
        $last_dot = strrpos($name, '.');
        $ext = substr($name, $last_dot);
        $name = substr($name, 0, $last_dot);
        if(!$name){
            $name = 'no_name';
        }
        $newName = $name.$ext;
        $i = 0;
        $filePath = $object->trimPath($path.'/'.$newName);

        while(Storage::exists($filePath)){
            $newName = $name.'_'.$i.$ext;
            $filePath = $object->trimPath($path.'/'.$newName);
            $i++;
        }
        return $newName;
    }

    function trimPath($path){
        while (strpos($path, '//')){
            $path = str_replace('//', '/', $path);
        }
        return $path;
    }

    function trimName($str, $folder)
    {

        $last_dot = strrpos($str, '.');
        $ext = substr($str, $last_dot);
        $string = substr($str, 0, $last_dot);

        $string = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $string);
        $string = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $string);
        $string = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $string);
        $string = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $string);
        $string = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $string);
        $string = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $string);
        $string = preg_replace("/(đ)/", 'd', $string);

        $string = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $string);
        $string = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $string);
        $string = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $string);
        $string = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $string);
        $string = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $string);
        $string = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $string);
        $string = preg_replace("/(Đ)/", 'D', $string);

        $entities = array('!', '*', "'", "(", ")", ";", ":", "@", "&", "=", "+", "$", ",", "/", "?", "%", "#", "[", "]", "^");
        $string = str_replace($entities, '', $string);
        $string = $string ? $string : str_random(20);
        $path = $this->trimPath($folder.'/'.$string.$ext);

        if(Storage::exists($path) && $string.$ext != $str){
            $string = $string.str_random(10);
        }
        return $string.$ext;
    }
}