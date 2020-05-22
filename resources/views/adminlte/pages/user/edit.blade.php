<form id="main-form" class="form-ajax" data-method="put"  action="{{route('users.update',[$item->id])}}" method="post" accept-charset="UTF-8">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="box-body">
        <div class="form-group  ">
            <label for="name" >Email <span class="text-red">*</span></label>
            <input type="email" id="email" name="email" value="{{$item->email}}" class="form-control" placeholder="Input email" autocomplete="off" disabled>
        </div>
        <div class="form-group  ">
            <label for="username" >Name<span class="text-red">*</span></label>
            <input autocomplete="off"  type="text" id="" name="name" value="{{$item->name}}" class="form-control" placeholder="Input name" required>
        </div>
        <div class="form-group">
            <label for="avatar">Avatar</label>
            <div class="media-loader-parent">
                <div class="preview">
                    <div class="preview-item">
                        <img height="150" src="{{$item->avatar}}">
                    </div>
                </div>
                <div class="input-group ">
                    <span class="input-group-addon"><i class="fa fa-upload"></i></span>
                    <input autocomplete="off"  type="text " name="avatar" class="form-control media-loader"  data-preview="#preview" placeholder="Choose file" value="{{$item->avatar}}" data-files="">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="password">Password <span class="text-red">*</span></label>
            <input autocomplete="off" type="password" id="password" name="password" value="" class="form-control"  minlength="6" maxlength="32" placeholder="Input Password">
        </div>
        <div class="form-group">
            <label for="password_confirmation">Password confirmation <span class="text-red">*</span></label>
            <input autocomplete="off"  type="password" id="password_confirmation" name="password_confirmation" value=""  minlength="6" maxlength="32" class="form-control" placeholder="Input Password confirmation">
        </div>

        @if(!$item->isSuperAdmin())
        <div class="form-group">
            <label for="role">Roles</label>
            <select class="form-control" name="role[]" id="role" multiple>
                @foreach($roles as $key => $role)
                    <option value="{{$role->name}}" {{isset($role->selected)?'selected':''}}>{{$role->name}}</option>
                @endforeach
            </select>
        </div>
        @endif
        <div class="box-footer">
            <div class="text-right">
                <button class="btn btn-primary"><i class="fa fa-save mr-1"></i>Save changes</button>
            </div>
        </div>
    </div>
</form>

<script type="text/javascript">
    $(function () {
        $('#role').select2();
    });
</script>