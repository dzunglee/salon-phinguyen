<input type="hidden" name="current-path" value="{{route('cms.media',['path'=>$currentPath['path']])}}">
<input type="hidden" name="current-folder" value="{{$currentPath['path']}}">
<div class="breadcrumb fm bg-gray mt-2 mb-0">
    @if(count($fileBreadcrumbs) > 0)
        <a class="fm-breadcrumb" href="{{route('cms.media')}}" title="Home">Home</a> >
    @else
        <span title="Home">Home</span>
    @endif()
    @foreach($fileBreadcrumbs as $key => $breadcrumbc)
        @if($key < count($fileBreadcrumbs) - 1)
            <a class="fm-breadcrumb" href="{{route('cms.media',['path'=>$breadcrumbc['path']])}}" title="{{ucfirst($breadcrumbc['name'])}}">{{ucfirst($breadcrumbc['name'])}}</a><span> > </span>
        @else
            <span title="{{ucfirst($breadcrumbc['name'])}}">{{ucfirst($breadcrumbc['name'])}}</span>
        @endif
    @endforeach
    <div class="pull-right">
        <i class="fa fa-list px-1 show-list {{($viewType=='list')?'view-active':''}} "></i>
        <i class="fa fa-th show-grid {{($viewType=='grid')?'view-active':($viewType!=='list')?'view-active':''}}"></i>
    </div>
</div>
<hr class="mb-0">
<div class="col-sm-12">
    <div class="content-fmg row no-padding mt-0 fm-html list {{($viewType=='list')?:'grid'}} treePanel" id="filedrag-fmg" style="min-height: 345px">
        <div class="list {{($isShowPreview === 'true')?'col-xs-9':'col-xs-12'}} {{$isShowPreview}} px-0 pt-3 treeList">
            <div class="file-item header">
                <div class="thumb">
                    Icon
                </div>
                <div class="name pr-2">Name<i data-short="name" class="fa short-icon pull-right {{(isset($short) && $short['name'] == 'name')?(($short['order']) == 'asc'?'fa-angle-up active':'fa-angle-down active'):'fa-angle-up'}} mr-1"></i></div>
                <div class="type pr-2">Type<i data-short="type" class="fa short-icon pull-right {{(isset($short) && $short['name'] == 'type')?(($short['order']) == 'asc'?'fa-angle-up active':'fa-angle-down active'):'fa-angle-up'}} mr-1"></i></div>
                <div class="size pr-2">Size<i data-short="size" class="fa short-icon pull-right {{(isset($short) && $short['name'] == 'size')?(($short['order']) == 'asc'?'fa-angle-up active':'fa-angle-down active'):'fa-angle-up'}} mr-1"></i></div>
                <div class="last-modified pr-2">Last modified<i data-short="lastModified" class="fa short-icon pull-right {{(isset($short) && $short['name'] == 'lastModified')?(($short['order']) == 'asc'?'fa-angle-up active':'fa-angle-down active'):'fa-angle-up'}} mr-1"></i></div>
                <div class="clearfix"></div>
            </div>

            @foreach($folders as $folder)
                <div id="{{$folder['id']}}" class="file-item folder-item treeItem" data-data='{{json_encode($folder)}}'  data-id='{{$folder['path']}}' data-path="{{route('cms.media',['path'=>!empty(request('path'))?request('path').'/'.$folder['name']:$folder['name']] )}}">
                    <div class="thumb">
                        <i class="fa fa-folder" aria-hidden="true"></i>
                    </div>
                    <div class="name pr-2" title="{{$folder['name']}}">{{$folder['name']}}</div>
                    <div class="type pr-2"></div>
                    <div class="size pr-2"></div>
                    <div class="last-modified pr-2"></div>
                    <div class="clearfix"></div>
                </div>
            @endforeach
            @foreach($files as $file)
                <div id="{{$file['id']}}" class="file-item treeItem file"  data-data='{{json_encode($file)}}' data-id='{{$file['path']}}'>
                    <div class="thumb">
                        @if(isset($file['image']))
                            <img src="{{$file['url']}}">
                        @else
                            <i class="fa fa-file" aria-hidden="true"></i>
                        @endif
                    </div>
                    <div class="name pr-2" title="{{$file['name']}}">{{$file['name']}}</div>
                    <div class="type pr-2">{{$file['type']}}</div>
                    <div class="size pr-2">{{$file['size']}}</div>
                    <div class="last-modified pr-2">{{$file['lastModified']}}</div>
                    <div class="clearfix"></div>
                </div>
            @endforeach
            @if(count($folders) == 0 && count($files) == 0)
                <p class="text-center table-caption">This folder is empty.</p>
            @else
                <p class="text-center table-caption" style="display: none">This folder is empty.</p>
            @endif
        </div>
        <div id="file-preview" class="file-preview col-xs-3 no-padding" style="display: {{($isShowPreview === 'true')?'block':'none'}};">
            <div class="file-preview-inner" hidden>
                <div class="file-thumb">
                    <div >
                        <div class="preview-inner">
                            <img id="preview-img" src="">
                        </div>

                    </div>
                </div>
                <div class="detail-group p-3">
                    <div class="detail-item">
                        <div class="groupDetailTitle">
                            <label class="title">Title: </label>
                            <strong id="detail-name"  class="value"></strong>
                        </div>
                        <div  class="groupDetailTypeTitle">
                            <label  class="title">Type: </label>
                            <strong id="detail-type" class="value"></strong>
                        </div>
                        <div  class="groupDetailSize">
                            <label class="title">Size: </label>
                            <strong id="detail-size" class="value"></strong>
                        </div>
                        <div  class="groupDetailLastModified">
                            <label class="title">Last modified: </label>
                            <strong id="detail-last-modified" class="value"></strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<div class="clearfix"></div>
@if(isset($type))
<script>
    window.fileSelect = $('.fileselect-fmg');
    window.fileSelect.customFileUpload({
        accepts: []
    });
</script>
@endif