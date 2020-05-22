<div class="modal fade" id="modal-add-folder">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Add new folder</h4>
            </div>
            <div class="modal-body">
                <form id="form-add-folder" action="{{route('media.add')}}" method="post" accept-charset="UTF-8"
                      class="form-horizontal"  pjax-container="1">
                    <div id="alert-error" class="alert alert-danger alert-dismissable" hidden>
                        {{--<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>--}}
                        <p> </p>
                    </div>
                    {{ csrf_field() }}
                    <div class="">
                        <input id="inpNewFolderName" type="text"  name="newName" maxlength="255" class="form-control" value="New folder" required/><br/>
                    </div>
                    <div class="box-footer modal-footer">
                        <div class="col-md-12">
                            <div class=" pull-right">
                                <div class="btn btn-default" data-dismiss="modal" aria-label="Close" style="">Cancel</div>
                                <button class="btn btn-primary" id="btn-add-folder-submit"><i class="fa fa-plus mr-1"></i> Add</button>
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
