<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{asset($me->avatar)}}" class="img-circle current-user-avt" alt="User Image">
            </div>
        </div>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">

            @include('adminlte.partials.menu-item', $menus)
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>