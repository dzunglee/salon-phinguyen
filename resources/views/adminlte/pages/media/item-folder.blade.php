<div id="{{$folder['id']}}" class="file-item folder-item treeItem" data-data='{{json_encode($folder)}}'  data-id='{{$folder['path']}}' data-path="{{route('cms.media',['path'=>!(empty(request('curPath')) || request('curPath') == '/' )?request('curPath').'/'.$folder['name']:$folder['name']] )}}">
    <div class="thumb">
        <i class="fa fa-folder" aria-hidden="true"></i>
    </div>
    <div class="name pr-2">{{$folder['name']}}</div>
    <div class="type pr-2"></div>
    <div class="size pr-2"></div>
    <div class="last-modified pr-2"></div>
    <div class="clearfix"></div>
</div>