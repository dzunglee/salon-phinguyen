<form class="form-ajax" data-method="put" action="{{route('roles.update',[$item->id])}}" method="post" accept-charset="UTF-8">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="box-body">
        <div class="fields-group">
            <div class="form-group">
                <label for="name">Name <span class="text-red">*</span></label>
                <input  type="text" id="name" name="name" value="{{$item->name}}" class="form-control" placeholder="Input name" required>
            </div>
            <div class="form-group">
                <label for="permissions">{{trans('Level')}}</label>
                <select class="form-control" name="level">
                    @foreach($levelList as $key => $level)
                        <option value="{{$key}}" {{$item->level == $key?'selected':''}}>{{$level}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="permissions">Permissions</label>
                <select class="form-control" name="permissions[]" id="permissions" multiple>
                    @foreach($permissions as $key => $permission)
                        <option value="{{$permission->name}}" {{$permission->selected?'selected':''}}>{{$permission->name}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea  type="text" id="description" name="description" class="form-control" placeholder="Input Description">{{$item->description}}</textarea>
            </div>
            <div class="text-right">
                <button type="submit" class="btn btn-primary"><i class="fa fa-save mr-1"></i>Save changes</button>
            </div>
        </div>
    </div>
</form>

<script type="text/javascript">
    $('#permissions').select2();
</script>