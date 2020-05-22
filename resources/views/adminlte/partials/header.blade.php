<header class="main-header">
    <!-- Logo -->
    <a href="{{admin_url('/')}}" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>w3</b>CMS</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>

        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">

                <!-- User Account: style can be found in dropdown.less -->
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        &nbsp;<img src="{{asset($me->avatar)}}" class="user-image current-user-avt" alt="Auth avatar">
                    </a>
                    <ul class="dropdown-menu">
                        <li class="account-header">
                            <a href="{{route('cms.profile')}}">
                                <div class="account-header-avatar">
                                    <img src="{{asset($me->avatar)}}" class="img-responsive current-user-avt" alt="Auth avatar">
                                </div>
                                <div class="account-header-info">
                                    <div>{{ $me->name }}</div>
                                    <div>{{$me->email}}</div>
                                </div>
                            </a>
                        </li>
                        <!-- Menu Body -->
                        <li>
                            <a href="{{route('cms.profile')}}">
                                <i class="fa fa-key"></i> Change password
                            </a>
                         </li>
                        <li>
                            <a href="{{route('cms.logout')}}">
                                <i class="fa fa-sign-out"></i> Sign out
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</header>