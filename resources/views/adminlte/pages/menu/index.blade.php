@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-xs-12">
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
                    <div class="btn-group pull-right">
                        <a class="btn btn-success btn-sm" href="{{route('menus.create')}}"> <i class="fa fa-plus"></i>&nbsp; New</a>
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
                <div class="box-footer">
                    <div class="btn-group pull-right">
                        <form method="post" action="{{route('menus.store')}}">
                            {{ csrf_field() }}
                            <input type="hidden" name="type" value="space"/>
                            <button type="submit" class="btn btn-primary btn-sm" href="{{route('menus.create')}}"><i class="fa fa-plus"></i>&nbsp;Add space bar</button>
                        </form>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>
@stop

@push('scripts')
    <script type="text/javascript">
        $( document ).ready(function() {
            let menu = $('.dd').nestable([]);
            let saveUrl = '{{route('menus.save')}}';

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
                    })
                })
            });
        });

    </script>
@endpush
