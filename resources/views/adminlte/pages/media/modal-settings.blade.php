<div class="modal fade" id="modal-settings">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Settings</h4>
            </div>
            <div class="modal-body">
                <form id="form-settings" action="{{route('media.save')}}" method="post" accept-charset="UTF-8"
                      class="form-horizontal"  pjax-container="1">
                    <div id="alert-error" class="alert alert-danger alert-dismissable" hidden>
                        {{--<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>--}}
                        <p> </p>
                    </div>
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label class="col-sm-3  control-label">Show preview</label>
                        <div class="col-sm-8">
                            {{--<div class="checkbox pull-right">--}}
                                {{--<label class="" style="padding-left: 0">--}}
                                    {{--<input id="isShowPreview" type="checkbox" class="flat-red" name="isShowPreview">--}}
                                {{--</label>                               --}}

                            {{--</div>--}}
                            <div class="col-2 text-right" style="margin-bottom: 10px">
                                <label class="custom-toggle">
                                    <input type="checkbox" checked>
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                </label>
                            </div>

                        </div>
                        {{--{{$status =='1' ? 'checked' : '' }}--}}
                    </div>
                    <div class="box-footer modal-footer">
                        <div class="col-md-12">
                            <div class=" pull-right">
                                <div class="btn btn-default" data-dismiss="modal" aria-label="Close" style="">Cancel</div>
                                <button class="btn btn-primary" id="btn-settings-submit">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- /.modal -->

<script type="text/javascript">
    $(function () {

    });


</script>
