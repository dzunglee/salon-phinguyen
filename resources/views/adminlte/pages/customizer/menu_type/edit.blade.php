<form class="form-ajax" data-method="put" action="{{route('menu.update',[$item->id])}}" method="post" accept-charset="UTF-8">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="form-group">
        <label for="title">Title <span class="text-red">*</span></label>
        <input  type="text" id="title" name="title" value="{{$item->title}}" class="form-control" placeholder="Input name" required max="50">
    </div>

    <div class="form-group">
        <label for="slug" class="control-label">Slug &nbsp;<span class="text-red">*</span></label>
        <input type="text" id="slug" name="slug" value="{{$item->slug}}"
               class="form-control" placeholder="Input slug" required>
        <p style="font-style: italic; margin: 5px 0 5px; opacity: .5;" > The “slug”
            is the URL-friendly version of the name. It is usually all
            lowercase and contains only letters, numbers, and hyphens.</p>
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary">
            <i class="fa fa-save mr-1"></i>Save changes
        </button>
    </div>
</form>
<script type="text/javascript">
    $(function () {
        $('#title').keyup(function () {
            $('#slug').val($.str_slug($(this).val()));
        });

        $('#slug').change(function () {
            $('#slug').val($.str_slug($(this).val()));
        });
    });
</script>