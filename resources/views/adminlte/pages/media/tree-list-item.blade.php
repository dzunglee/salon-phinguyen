<style>
    .tree-breadcrumb{
        padding: 5px;
        border-bottom: 1px solid #80808033;
    }
    .tree-list {
        height: 100%;
    }
    .tree-item {
        height: 40px;
        padding: 10px;
        border-bottom: 1px solid #33333317;
        cursor: pointer;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        padding-right: 30px;
    }
    .tree-item.active {
        background-color: #3c8dbc !important;
        color: #fff;
    }

    .tree-item:hover{
        background-color: #3333330a;
    }

    .tree-item > i{
        font-size: 20px;
        vertical-align: middle;
    }

    .tree-item span{
        vertical-align: middle;
    }

    .tree-item span.angle-right{
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 23px;
        position: absolute;
        top: 10px;
        right: 5px;

    }

    .tree-item span.angle-right:hover{
        background-color: #b8c3c373;
    }

    #form-tree-add input{
        display: inline-block;
        width: calc(100% - 28px);
    }

    #form-tree-add.disabled {
        pointer-events: none;
        opacity: 0.4;
    }

</style>
<div class="breadcrumb tree-breadcrumb treeBreadcrumb" data-current-path = {{json_encode($path)}}>
    <a class="tree-breadcrumb-link" href="/" title="Home" >Home</a>
    @foreach($treeBreadcrumbs as $key => $item)
        @if($item['name'])
            <span> > </span>
        @endif
        @if($key != count($treeBreadcrumbs) - 1)
            <a class="tree-breadcrumb-link" href="{{$item['path']}}" title="{{ucfirst($item['name'])}}">{{ucfirst($item['name'])}}</a>
        @else
            <span class="" title="{{ucfirst($item['name'])}}">{{ucfirst($item['name'])}}</span>
        @endif
    @endforeach
</div>
<div class="tree-list modalTreePanel">

    <!-- /.modal -->

    <div class="tree-list-inner modalTreeList">
        @foreach($directories as $folder)
        <div class="tree-item modalTreeItem" data-data = '{{json_encode($folder)}}'>
            <i class="fa fa-folder"></i>
            <span title="{{$folder['name']}}">{{$folder['name']}}</span>
            <span class="angle-right pull-right angleRight"><i class="fa fa-angle-right"></i></span>
        </div>
        @endforeach
    </div>
    <form id="form-tree-add" action="{{route('media.tree.add')}}" method="post" accept-charset="UTF-8"
           class="form-horizontal"  pjax-container="1" style="margin:10px" hidden>
        {{ csrf_field() }}
        <div class="">
            <i class="fa fa-folder" style=" font-size: 20px;"></i>
            <input id="newName" type="text"  name="newName"  maxlength="255" class="form-control" value="New folder" required/><br/>
        </div>
        <div class="input-group input-group-sm" style="width: 150px;">
            <div class="input-group-btn">
                <button type="submit" class="btn btn-default hidden" ></button>
            </div>
        </div>
    </form>
</div>
<script>
    $(function () {
    });
</script>