@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')

<div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Edit category</h3>
                </div>
                <form method="POST" action="{{route('category.update', [$data['id']])}}" class="form-horizontal" accept-charset="UTF-8" pjax-container="1">
                    <div class="box-body" style="display: block;">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
                        <div class="box-body fields-group">
                            <div class="form-group  ">
                                <label for="title" class="col-sm-2  control-label">Category name &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input type="text" id="name" name="category_name" value="{{$data['category_name']}}" class="form-control title" placeholder="Input Title" required/>
                                </div>
                            </div>

                            <div class="form-group  ">
                                <label for="name" class="col-sm-2  control-label">Slug &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input type="text" id="slug" name="slug" value="{{$data['slug']}}"
                                           class="form-control name"
                                           placeholder="Input Name">
                                </div>
                            </div>

                            <div class="form-group  ">
                                <label for="parent_id" class="col-sm-2  control-label">Parent</label>
                                <div class="col-sm-8">
                                    <input type="hidden" name="parent_id"/>
                                    <select class="form-control parent_id select2" style="width: 100%;" name="parent_id"  >
                                        <option value="null">Root</option>
                                        {!! $treeComboBoxWithParentItem !!}
                                        
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class=" pull-right">
                                <button class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">List posts of category</h3>
                    <div class="pull-right" style="" data-toggle="buttons">
                        <label class="btn btn-sm btn-success 5bf1932171cbf-filter-btn " id="add-posts">
                            <input type="checkbox"><i class="fa fa-plus"></i>&nbsp;&nbsp;Add
                        </label>

                    </div> 
                </div>

                <div class="box-header with-border posts-add-form" style='display:none'>
                        <form method='POST' action="{{route('category.add_post', [$data['id']])}}" class="form-horizontal" pjax-container="">
                            <div class="box-body">
                            {{ csrf_field() }}
                                <div class="fields-group">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label"> Posts</label>
                                        <div class="col-sm-8">
                                            <select id="cbo-posts" class="form-control select2 editor" style="width: 100%;"  name="post_ids[]" style="width: 100%;" tabindex="-1" aria-hidden="true"  multiple="multiple">
                                                @foreach($listAllPosts as $item)
                                                <option  value={{$item->id}} {{in_array($item->id,$listPostsIDOfThisCategory)?'disabled':''}}>{{$item->title}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group  ">
                                        <label for="parent_id" class="col-sm-2  control-label">From categories</label>
                                        <div class="col-sm-8">
                                            <select class="form-control parent_id select2" style="width: 100%;" name="category_ids[]"  multiple="multiple" >
                                                {!! $treeComboBoxWithCurrentItem !!}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->

                            <div class="box-footer">
                                <div class="col-md-2"></div>
                                <div class="col-md-8" style='padding-right: 5px;'>
                                  
                                    <div class="pull-right" style="">
                                        <button class="btn btn-info submit"><i class=""></i>Apply</button>
                                    </div>

                                </div>
                            </div>
                        </form>

                    </div>
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover table-bordered">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Photo</th>
                                <th class="min-col-100">Title</th>
                                <th class="col-admin">Author</th>
                               <th class="col-admin">Editor</th>
                                <th>Categories</th>
                                <th>Tags</th>
                                <th width="150px">Time</th>
                                <th width="30px"></th>
                            </tr>
                            @foreach($posts as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td style=" width: 100px!important;" class="text-center"><img class="img-responsive" src='{{$item->photo?$item->photo:""}}'/></td>
                                <td>{{$item->title}}</td>
                                @if($item->getAuthor)
                                    <td>{{$item->getAuthor->name}}</td>
                                @else
                                    <td></td>
                                @endif

                                @if($item->getEditor)
                                    <td>{{$item->getEditor->name}}</td>
                                @else
                                    <td></td>
                                @endif

                                <td>{{$item->category?$item->category->category_name:''}}</td>
                                <td>
                                    @if($item->tags)
                                        @foreach($item->tags as $tag)
                                            <span class="label label-default">{{$tag->tag_name}}</span>
                                        @endforeach
                                    @endif
                                </td>
                                <td> <small>
                                        @if($item->publish_date)
                                            <span >Published at: {{date_format(date_create($item->publish_date),setting('date_formats'))}}</span><br/>
                                        @endif
                                        @if($item->created_at)
                                            <span style="opacity: 0.6; font-style: italic;">Created at: {{$item->created_at->format(setting('date_formats'))}}</span>
                                        @endif
                                    </small>
                                </td>
                                <td class="no-padding" style="">
                                    <div class="dropdown" style="padding-top: 5px">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a class="edit-ajax" data-target="#edit-modal" href="{{route('posts.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('posts.remove_post_cat',[$item->id])}}" title="Delete" data-parent-elm="tr">Remove post's category</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->

                <div class="pull-right">
                    <br/>
                    {{ $posts->links()}}
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
  <script type="text/javascript">
    $(function () {
        $('.select2').select2();

        $( "#add-posts" ).click(function() {
          $(".posts-add-form").slideToggle();
        });

        $('#name').keyup(function () {
            $('#slug').val($.str_slug($(this).val()));
        });

        $('#slug').change(function () {
            $('#slug').val($.str_slug($(this).val()));
        });
    })
   
    
  </script>
@endpush