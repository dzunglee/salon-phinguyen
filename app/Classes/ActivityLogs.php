<?php

namespace App\Classes;

use App\Models\Activity;
use Illuminate\Support\Facades\Auth;

class ActivityLogs
{
    //
    public $activityList = [
        [
            'method' => 'POST',
            'path' => 'admin/posts',
            'action' => 'add a post'
        ],
        [
            'method' => 'POST',
            'path' => 'admin/profile/upload-avatar',
            'action' => 'upload new avatar'
        ],
        [
            'method' => 'PUT',
            'path' => 'admin/profile',
            'action' => 'updated your profile'
        ]
    ];

    public  $data;

//    public function __construct()
//    {
//        self::getInstance();
//    }

    private static $singletonObj = null;

    public static function getInstance() {
        if (self::$singletonObj !== null) {
            return self::$singletonObj;
        }

        self::$singletonObj = new self();
        return self::$singletonObj;
    }

    /**
     * store an activity to database
     * @param $request
     */
    public static function store($request){
        $object = self::getInstance();
        $activity = $object->get($request->path(), $request->method());

        if($activity){
            //dd($activity);
            if( !$object->data) return;
            $object->data['action'] = $activity['action']? $activity['action']: "did an action";
            Activity::create($object->data);
            $object->data = null;
        }
    }

    /**
     * create an activity log
     * @param $type |image|text|link
     * @param null $action | name of action
     * @param null $content |link or any message will show after action
     * @param null $attachment |image url or message in body of activity
     * @return ActivityLogs|null
     */
    public static function  init($type, $action = null, $content = null, $attachment = null){
        $object = self::getInstance();
        
        if(!$object->get(request()->path(), request()->method())){
            $object->push(request()->method(), request()->path(), $action?$action:"");
        }
        $object->data = [
            'admin_id' => (Auth::guard(config('w3cms.auth.guard'))->user())->id,
            'type' => $type,
            'attachment' => $attachment,
            'content' => $content
        ];
        return $object;
    }

    /**
     * get an activity in list activities
     * @param $path
     * @param $method
     * @return mixed|null
     */
    public function get($path, $method){
        foreach($this->activityList as $activity){
            if($path == $activity['path'] && $method == $activity['method']) return $activity;
        }
        return null;
    }

    /**
     * push an activity to activityList
     * @param $method
     * @param $path
     * @param $action
     */
    public function push($method, $path, $action){
        $newElement = [
            'method' => $method,
            'path' => $path,
            'action' => $action
        ];

        array_push($this->activityList, $newElement);
    }

    /**
     * render a list of activities
     * @param $activities
     * @param string $view
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View]
     */
    public static function render($activities, $view = 'pages.user.list_activities'){
        return view($view, compact('activities'));
    }


}
