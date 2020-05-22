<div id="{{$file['id']}}" class="file-item treeItem"  data-data='{{json_encode($file)}}' data-id='{{$file['path']}}'>
    <div class="thumb">
        @if(isset($file['image']))
            <img src="{{$file['url']}}">
        @else
            <i class="fa fa-file" aria-hidden="true"></i>
        @endif
    </div>
    <div class="name">{{$file['name']}}</div>
    <div class="type">{{$file['type']}}</div>
    <div class="size">{{$file['size']}}</div>
    <div class="last-modified">{{$file['lastModified']}}</div>
    <div class="clearfix"></div>
</div>