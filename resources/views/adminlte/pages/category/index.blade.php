@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <style>
        .dd-handle > strong{
            white-space: nowrap;
            max-width: 90%;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: bottom;
        }
    </style>
    <div class="row">
        <div class="col-xs-8">
            <div class="box">
                <div class="box-header">

                    <div class="btn-group">
                        <a class="btn btn-primary btn-sm category-tools" data-action="expand">
                            <i class="fa fa-plus-square-o"></i>&nbsp;Expand
                        </a>
                        <a class="btn btn-primary btn-sm category-tools" data-action="collapse">
                            <i class="fa fa-minus-square-o"></i>&nbsp;Collapse
                        </a>
                    </div>
                    <div class="btn-group">
                        <a class="btn btn-info btn-sm category-save"><i class="fa fa-save"></i>&nbsp;Save</a>
                    </div>

                </div>

                <!-- /.box-header -->
                <div class="box-body">
                    <div class="dd mw-100">
                        <ol class="dd-list">
                            {!! $treeView !!}
                        </ol>
                    </div>
                </div>
                <!-- /.box-body -->

                <div class="pull-right">

                </div>
            </div>
            <!-- /.box -->
        </div>
        <div class="col-xs-4 pl-0">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h4 class="box-title">
                        Add new Category
                    </h4>
                </div>
                <!-- /.box-header -->
                <form action="{{route('category.store')}}" method="post" accept-charset="UTF-8" enctype="multipart/form-data" pjax>
                    <div class="box-body table-responsive">
                        {{ csrf_field() }}
                        <div class="form-group  ">
                            <label for="name">Category name &nbsp;<span class="text-red">*</span></label>
                            <input type="text" id="name" name="category_name" value="{{old('name')}}" class="form-control title" placeholder="Input Title" required/>
                        </div>

                        <div class="form-group">
                            <label for="slug">Slug &nbsp;<span class="text-red">*</span></label>
                            <input type="text" id="slug" name="slug" value="{{old('slug')}}"
                                   class="form-control" placeholder="Input slug" required>
                        </div>
                        <div class="form-group  ">
                            <label for="parent_id" >Parent</label>
                            <input type="hidden" name="parent_id"/>
                            <select class="form-control parent_id" name="parent_id"  >
                                <option value="null">Root</option>
                                {!! $treeComboBox !!}
                            </select>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-plus mr-1"></i> Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop

@push('scripts')
    <script type="text/javascript">

        $(function () {
            let menu = $('.dd').nestable({/* config options */});
            let saveUrl = '{{route('category.save')}}';

            $('.category-tools').on('click', function (e) {
                let target = $(e.target),
                    action = target.data('action');
                if (action === 'expand') {
                    menu.nestable('expandAll');
                }
                if (action === 'collapse') {
                    menu.nestable('collapseAll');
                }
            });

            $('.category-save').click(function () {
                let serialize = $('.dd').nestable('serialize');
                console.log(serialize);

                $.post(saveUrl, {
                    _token: $('meta[name="csrf-token"]').attr('content'),
                    data: JSON.stringify(serialize)
                }).done(function (data) {
                    toastr.success('Category has been saved!',null,[]);
                    $.pjax.reload({container:'#pjax-container'});
                }).fail(function () {
                    toastr.error('Internal Server Error',null,[]);
                })
            });


            $('.parent_id').select2();
            $('#name').keyup(function () {
                $('#slug').val($.str_slug($(this).val()));
            });

            $('#slug').change(function () {
                $('#slug').val($.str_slug($(this).val()));
            });
        });

    </script>
@endpush
