<form class="form-ajax" data-method="put" action="{{route('menu-item.update',[$item->id])}}" method="post" accept-charset="UTF-8">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <input name="lang" value="{{session('locale')}}" hidden>
    <div class="form-group">
        {{-- <div style="float:right">
            @include('adminlte.partials.lang1')
        </div> --}}
        <label for="parent_id" class="control-label">Parent</label>
        <input type="hidden" name="menu_type_id" value="{{$menuType->id}}"/>
        <select class="form-control parent_id" style="width: 100%;" name="parent_id"  >
            <option value="0">Root</option>
            {!! $menuOptionHtml !!}
        </select>
    </div>
    <div class="form-group  ">
        <label for="title" class="control-label">Title</label>
        <input type="text" id="title" name="title" value="{{$item->title}}" class="form-control title" placeholder="Input Title" />
    </div>
    <div class="form-group">
        <label for="icon" class="control-label">Icon</label>
        <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
            <input style="width: 140px" type="text" id="icon" name="icon" value="{{$item->icon}}" class="form-control icon" placeholder="Input Icon" />
        </div>
        <span class="help-block">
                                <i class="fa fa-info-circle"></i>&nbsp;For more icons please see <a href="http://fontawesome.io/icons/" target="_blank">http://fontawesome.io/icons/</a>
                            </span>
    </div>
    <div class="form-group">
        <label for="type" class="control-label">Type menu</label>
        <select class="form-control" name="type" id="typeE">
            @foreach($typeOfMenuList as $key => $value)
                <option value="{{$key}}" {{$key == $item->type?'selected':''}}>{{$value}}</option>
            @endforeach
        </select>
    </div>
    <div class="appendData form-group">
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary">
            <i class="fa fa-save mr-1"></i>Save changes
        </button>
    </div>
</form>
<script type="text/javascript">
    $(function () {

        $(".parent_id").select2({"allowClear":true,"placeholder":"Parent"});
        $('.icon').iconpicker({placement:'bottomLeft'});
        setTimeout(function () {
            $('#typeE').trigger('change');
        },100)
        $('#typeE').change(function () {
            $.post('{{route('get-menu-element-by-type')}}',{
                type: $(this).val(),
                item_id: '{{$item->id}}',
                _token: $('meta[name="csrf-token"]').attr('content')
            }).done(function (data) {
                console.log(data)
                $('.appendData').empty().append(data);
            });
        });
    });
</script>