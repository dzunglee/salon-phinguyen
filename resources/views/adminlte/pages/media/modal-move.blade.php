<style>
    #modal-move .modal-body {
        min-height: 300px;
    }
</style>
<div class="modal fade" id="modal-move" data-tree-url="{{route('media.move.tree')}}">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Move item to...</h4>
            </div>
            <div style="margin:15px">
                <div id="alert-error" class="alert alert-danger alert-dismissable" hidden>
                    {{--<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>--}}
                    <p> </p>
                </div>
            </div>
            <div class="modal-body modalTreePanel">

            </div>
            <div class="modal-footer">
                <div class="col-md-6">
                    <a id="btn-create-folder" class="dd-nodrag pull-left"
                       data-parent-elm=""
                       data-url=""
                       data-toggle="modal" data-target="#odal-tree-add"
                       style="color: #3c8dbc; cursor: pointer; margin: 5px 0; font-size: medium">Create new folder
                    </a>
                </div>
                <div class="col-md-6">
                    <div class=" pull-right">
                        <div class="btn btn-default" data-dismiss="modal" aria-label="Close" style="">Cancel</div>
                        <button type="button" class="btn btn-primary" id="btn-move-submit" data-url="{{route('media.move')}}" >Move</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<script>
    $(function () {

    });
</script>


<!-- /.modal -->
