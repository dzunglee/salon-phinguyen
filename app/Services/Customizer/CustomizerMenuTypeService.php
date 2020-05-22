<?php

namespace App\Services\Customizer;
use App\Models\CustomizerMenuType;
use SaliproPham\LaravelMVCSP\Service;
use Illuminate\Foundation\Validation\ValidatesRequests;

class CustomizerMenuTypeService extends Service
{

    use ValidatesRequests;


    public function getCustomizerMenuById($id){
        return CustomizerMenuType::find($id);
    }

    public function indexPaginate(){$s = request()->get('s', '');
        $query = CustomizerMenuType::query();
        if (!empty($s))
            $query->where('title', 'like', '%' . $s . '%');
        return $query->paginate(config('w3cms.items_per_page'));
    }
    public function store(){
        $res = (object)[
            'errorCode' => 200,
            'message' => 'Create new menu successfully'
        ];

        $data = $this->validate(request(), [
            'title' => 'required|max:50',
            'slug' => 'required|max:50'
        ]);
        try {
            CustomizerMenuType::create($data);
        } catch (\Exception $e) {
            $res->errorCode = 400;
            $res->message = $e->getMessage();
        }
        return $res;
    }

    public function update($id){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Update permission successfully'
        ];
        $data = $this->validate(request(),[
            'title' => 'required|max:50',
            'slug' => 'required|max:50'
        ]);
        try{
            CustomizerMenuType::where('id',$id)->update($data);
        }catch (\Exception $e){
            $res->errorCode = 400;
            $res->message = $e->getMessage();
        }
        return $res;
    }

    public function destroy($id){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Delete menu successfully'
        ];
        if(!CustomizerMenuType::destroy($id)){
            $res->errorCode = 1;
            $res->message = 'Can not delete menu';
        }
        return $res;
    }
}
