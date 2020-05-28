<div style="width: 120px; display: inline-block">
    <select id="select-lang" class="form-control" >
        @if(session('locale') == 'en')
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
        @else
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
        @endif
    </select>
</div>

<script>
    $('#select-lang').on('change',  (function() {
        var $lang = $("option:selected",$(this));
        $(location).attr('href', '?lang='+ $lang.val())
    }));
</script>
