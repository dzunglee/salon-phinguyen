<form class="form-ajax" data-method="put" action="{{route('permissions.update',[$item->id])}}" method="post" accept-charset="UTF-8">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="form-group">
        <label for="nameU">Name <span class="text-red">*</span></label>
        <input  type="text" id="nameU" name="nameU" value="{{$item->name}}" class="form-control" placeholder="Input name" required>
        <small class="help-block"> Use only letters and underscore character</small>
    </div>
    <div class="form-group">
        <label for="description">Description</label>
        <textarea  type="text" id="description" name="descriptionU" class="form-control" placeholder="Input Description">{{$item->description}}</textarea>
    </div>
    <div class="form-group">
        <label for="path">Path</label>
        <input  type="text" id="path" name="pathU" value="{{$item->path}}" class="form-control" placeholder="Input path">
    </div>
    <div class="form-group">
        <label for="method">Method</label>
        <select class="form-control" name="methodU" id="method">
            @foreach($methods as $key => $method)
                <option value="{{$method}}" {{$item->method == $method?'selected':''}}>{{strtoupper($method)}}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="type">Type</label>
        <select class="form-control" name="typeU" id="type">
            @foreach($types as $key => $type)
                <option value="{{$key}}" {{$item->type == $key?'selected':''}}>{{$type['name']}}</option>
            @endforeach
        </select>
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary">
            <i class="fa fa-save mr-1"></i>Save changes
        </button>
    </div>
</form>
<script type="text/javascript">
    $( document ).ready(function() {
        $('#name').keyup(function () {
            let me = $(this);
            var textValue = me.val();
            textValue =textValue.toLowerCase().replace(/ /g,"_");
            me.val(textValue);
        }).change(function () {
            let me = $(this);
            var textValue = me.val();
            textValue =textValue.toLowerCase().replace(/ /g,"_");
            me.val(textValue);
        })
    });
</script>