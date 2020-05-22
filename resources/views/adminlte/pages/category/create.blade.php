@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')

<div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Create new category</h3>
                </div>
                <form method="POST" action="{{route('category.store')}}" class="form-horizontal" accept-charset="UTF-8" pjax-container="1">
                    <div class="box-body" style="display: block;">
                        {{ csrf_field() }}
                        <div class="box-body fields-group">
                            <div class="form-group  ">
                                <label for="title" class="col-sm-2  control-label">Category name &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                        <input type="text" id="name" name="category_name" value="{{old('name')}}" class="form-control title" placeholder="Input Title" required/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="slug" class="col-sm-2  control-label">Slug &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input type="text" id="slug" name="slug" value="{{old('slug')}}"
                                           class="form-control" placeholder="Input slug" required>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="parent_id" class="col-sm-2  control-label">Parent</label>
                                <div class="col-sm-8">
                                    <input type="hidden" name="parent_id"/>
                                    <select class="form-control parent_id" style="width: 100%;" name="parent_id"  >
                                        <option value="null">Root</option>
                                        {!! $treeComboBox !!}
                                        
                                    </select>
                                    <div class="box-body no-padding">
                                        <div class="dd">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class=" pull-right">
                                <button class="btn btn-primary">Submit</button>
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
