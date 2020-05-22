@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-xs-8">
            <div class="box">
                <div class="box-header">
                    <div class="btn-group">
                        <a class="btn btn-primary btn-sm menu-tools" data-action="expand">
                            <i class="fa fa-plus-square-o"></i>&nbsp;Expand
                        </a>
                        <a class="btn btn-primary btn-sm menu-tools" data-action="collapse">
                            <i class="fa fa-minus-square-o"></i>&nbsp;Collapse
                        </a>
                    </div>
                    <div class="btn-group">
                        <a class="btn btn-info btn-sm menu-save"><i class="fa fa-save"></i>&nbsp;Save</a>
                    </div>
                    <div style="float:right">
                            @include('adminlte.partials.lang')
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive"> 
                    <div class="dd">    
                        <ol class="dd-list">
                            {!! $dragAbleHtml !!}
                        </ol>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
        <div class="col-xs-4 pl-0">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h4 class="box-title">
                        Create new menu
                    </h4>
                </div>
                <!-- /.box-header -->
                <form action="{{route('c-menu-item.store',[$menuType->slug])}}" method="post" accept-charset="UTF-8" enctype="multipart/form-data" pjax>
                    <div class="box-body table-responsive">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="parent_id" class="control-label">Parent</label>
                            <input type="hidden" name="menu_type_id" value="{{$menuType->id}}"/>
                            <select class="form-control parent_id" style="width: 100%;" name="parent_id"  >
                                <option value="0">Root</option>
                                {!! $menuOptionHtml !!}
                            </select>
                        </div>
                        <div class="form-group  ">
                            <label for="title" class="control-label">Title</label>
                            <input type="text" id="title" name="title" value="{{old('title')}}" class="form-control title" placeholder="Input Title" />
                        </div>
                        <div class="form-group">
                            <label for="icon" class="control-label">Icon</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                <input style="width: 140px" type="text" id="icon" name="icon" value="{{old('icon')}}" class="form-control icon" placeholder="Input Icon" />
                            </div>
                            <span class="help-block">
                                <i class="fa fa-info-circle"></i>&nbsp;For more icons please see <a href="http://fontawesome.io/icons/" target="_blank">http://fontawesome.io/icons/</a>
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="type" class="control-label">Type menu</label>
                            <select class="form-control" name="type" id="type">
                                @foreach($typeOfMenuList as $key => $value)
                                    <option value="{{$key}}">{{$value}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="appendData form-group">
                            <div class="form-group">
                                <label for="uri" class="control-label">URI</label>
                                <input type="text" id="uri" name="uri" value="{{old('uri')}}" class="form-control uri" placeholder="Input URI" />
                            </div>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-plus mr-1"></i> Add</button>
                        </div>
                    </div>
                </form>

                <div class="modal fade" tabindex="-1" role="dialog" id="edit-modal" aria-labelledby="myLargeModalLabel">
                    <div class="modal-dialog modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Edit menu item</h4>
                            </div>
                            <div class="modal-body" style="min-height: 459px">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@push('scripts')
    <script type="text/javascript">
        $( document ).ready(function() {
            let menu = $('.dd').nestable([]);
            let saveUrl = '{{route('menu.save')}}';

            $('.menu-tools').on('click', function (e) {
                let target = $(e.target),
                    action = target.data('action');
                if (action === 'expand') {
                    menu.nestable('expandAll');
                }
                if (action === 'collapse') {
                    menu.nestable('collapseAll');
                }
            });

            $('.menu-save').click(function () {
                let serialize = menu.nestable('serialize');

                $.post(saveUrl, {
                    _token: $('meta[name="csrf-token"]').attr('content'),
                    data: JSON.stringify(serialize)
                }).done(function (data) {
                    swal({
                        position: 'top-end',
                        type: 'success',
                        title: 'Menu has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    $.pjax.reload({container:'#pjax-container'});
                }).fail(function () {
                    swal({
                        position: 'top-end',
                        type: 'error',
                        title: 'Can not save menu',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
            });

            $(".parent_id").select2({"allowClear":true,"placeholder":"Parent"});
            $('.icon').iconpicker({placement:'bottomLeft'});

            $('#type').change(function () {
                $.post('{{route('get-menu-element-by-type')}}',{
                    type: $(this).val(),
                    _token: $('meta[name="csrf-token"]').attr('content')
                }).done(function (data) {
                    console.log(data)
                    $('.appendData').empty().append(data);
                });
            });
        });

    </script>
@endpush
