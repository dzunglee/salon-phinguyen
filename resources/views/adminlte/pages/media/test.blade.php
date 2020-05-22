@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-header with-border">
                    <div class="btn-group">
                        <a class="btn btn-default btn-sm"><i class="fa fa-rotate-right "></i></a>
                    </div>

                    <div class="btn-group">
                        <a class="btn btn-primary btn-sm">
                            <i class="fa fa-cloud-upload"></i>&nbsp;Upload
                        </a>
                        <a class="btn btn-primary btn-sm">
                            <i class="fa  fa-folder"></i>&nbsp;Add folder
                        </a>
                    </div>
                    <div class="btn-group btn-tool">
                        <a id="btn-move" class="btn btn-default btn-sm"><i class="fa fa-share"></i>&nbsp;Move</a>
                        <a id="btn-rename" class="btn btn-default btn-sm" data-toggle="modal" data-target="#modal-default"><i class="fa fa-i-cursor"></i>&nbsp;Rename</a>
                        <a id="btn-edit" class="btn btn-default btn-sm "><i class="fa fa-edit"></i>&nbsp;Edit</a>
                        <a id="btn-delete" class="btn btn-default btn-sm"><i class="fa fa-trash-o"></i>&nbsp;Delete</a>
                        <a id="btn-copy" class="btn btn-default btn-sm"><i class="fa fa-copy"></i>&nbsp;Copy Link</a>
                    </div>
                    <div class=" pull-right">
                        <a class="btn btn-default btn-sm"><i class="fa fa-ellipsis-v"></i></a>
                    </div>
                </div>
                <div class="breadcrumb">
                    <li>Media Library</li>
                    <li>Photos</li>
                </div>
            </div>
            <div class="treePanel" style="background-color: #B995A9; min-height: 300px">
                @foreach($list as $item)
                    <div id='{{$item['name']}}' class="treeItem" data-data = '{{json_encode($item)}}' style="background-color: #0b97c4; min-height: 30px; margin:5px">{{$item['name']}}</div>
                @endforeach

            </div>

        </div>
    </div>
    {!! view('pages.media.modal-rename') !!}
@endsection

@push('scripts')
    <script type="text/javascript">
        $(function () {
            hideButton();
            var seletedItem = {}
            var curFolder = $('.treePanel').data('path');
            console.log(curFolder);

            $('.treeItem').click(function (e) {
                var element = $(e.currentTarget);
                seletedItem = element.data('data');
                seletedItem.id = e.currentTarget.id;
                console.log(seletedItem);
                showButton();
                e.stopPropagation();
            });

            $('.treePanel').click(function (e) {
                seletedItem = {};
                console.log(seletedItem);
                hideButton();
            });

            function updateItemName(itemID, name) {
                $('#' + itemID).text(name);
            }
            
            function showButton() {
                if($.isEmptyObject(seletedItem)) {return;}
                var editableType = ["image/jpeg"];

                $('.btn-tool .btn').each(function() {
                    $( this ).attr("disabled",false);
                });
                if(!editableType.includes(seletedItem.type)){
                    $('#btn-edit').attr("disabled","disabled");
                }
            }

            function hideButton() {
                $('.btn-tool .btn').each(function() {
                    $( this ).attr("disabled","disabled");
                });
            }

            $('#btn-rename').click(function (e) {
                $('#modal-rename input[name="oldName"]').val(seletedItem.name);
                $('#modal-rename input[name="newName"]').val(seletedItem.name);
                $('#modal-rename').modal('show');
            });


            $("#form-rename").submit(function(e) {
                e.preventDefault(); // avoid to execute the actual submit of the form.
                var form = $(this);
                var url = form.attr('action');
                var data = form.serialize();
                data.path = curFolder;
                $.ajax({
                    type: "POST",
                    url: url,
                    data: data, // serializes the form's elements.
                    statusCode: {
                        401: function () {
                            $('#modal-edit-menu').modal('hide');
                            toastr.error('Not authorized',null,[]);
                        },
                        403: function () {
                            $('#modal-edit-menu').modal('hide');
                            toastr.error('Access Forbidden',null,[]);
                        },
                        400: function (result) {
                            $('#modal-edit-menu').modal('hide');
                            toastr.error(result.responseText,null,[]);
                        },
                        500: function () {
                            $('#modal-edit-menu').modal('hide');
                            toastr.error('Internal Server Error',null,[]);
                        }
                    },
                    success: function(data)
                    {
                        console.log(data);
                        toastr.success('Rename successfully!',null,[]);
                        updateItemName(seletedItem.id, data);
                    }
                });


            });


        });
    </script>
@endpush