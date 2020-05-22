@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">

                <!-- form start -->
                <form action="{{route('page.update',[$page->id])}}" method="post" accept-charset="UTF-8"
                      class="form-horizontal" enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    <div class="box-body">
                        <div class="col-md-8">
                            <label>Title <span style="color:#db4437;">*</span></label>
                            <input type="text" id="title" name="title" value="{{$page->title}}"
                                   class="form-control name margin-bottom"
                                   placeholder="Input Title" required>


                            <label>Content&nbsp;<span style="color:#db4437;">*</span></label>
                            <textarea class="textarea margin-bottom contentEditor" name="content"
                                      placeholder="Place your post content here"
                                      style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"
                                      required>{{$page->content}}
                            </textarea>

                            <label> Tag</label><br/>
                            <select id="cbo-admins" class=" select2 tag_id" style="width: 100%;"  multiple="multiple" name="tag_id[]" style="width: 100%;" tabindex="-1" aria-hidden="true">

                                @foreach ($listTags as $item)
                                    <option {{$item->selected?'selected':''}} value={{$item->id}}>{{$item->tag_name}}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="col-md-4">
                            <label>Template</label> <br>
                            <select class="form-control margin-bottom" style="width: 100%;" name="template"
                                    data-placeholder="Template">
                                @foreach($template as $row)
                                    <option
                                        @if ($row == $page->template)
                                        selected="selected"
                                        @endif
                                        value="{{$row}}">{{$row}}</option>
                                @endforeach
                            </select>

                        </div>
                    </div>


                    <div class="box-footer">
                        <div class="col-md-12">
                            <div class="pull-right">
                                <div class="btn-group pull-right ">
                                    <button class="btn btn-primary"><i class="fa fa-save mr-1"></i>Save changes</button>
                                </div>


                                <div class="btn-group" style="margin-right: 5px">
                                    <a href="{{route('page.index')}}"  style='margin-right: 10px' class="btn btn-default">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('scripts')

    <script type="text/javascript">
        $(function () {
            $('.select2').select2();
            $('.contentEditor').summernote({
                height: 150,   //set editable area's height
            });

            $("#remove").click(function () {
                let me = $(this);
                let url = me.data('url');
                swal({
                    title: 'Are you sure?',
                    text: "Are you sure that you want to delete this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        $.ajax({
                            url: url,
                            type: 'DELETE',
                            data: {
                                '_token': $('meta[name="csrf-token"]').attr('content')
                            },
                            success: function (result) {
                                swal({
                                    title: "Deleted!",
                                    text: "Your imaginary file has been deleted!",
                                    type: "success",
                                    onClose: () => {
                                        window.location = "{{route('page.index')}}"
                                    }
                                });
                            },
                            error: function (result) {
                                swal("Error!", result.responseText, "error");
                            }
                        });
                    }
                })
            })
        });

    </script>
@endpush
