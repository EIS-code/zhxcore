
@if($page->id == setting('show_on_front'))
<header>
    <div class="header-wrapper">
        <div class="header-top">
            <div class="container">
                <div class="header-topwrap">
                    <div class="row">
                        <!--<div class="col-md-10 col-lg-10">-->
                        <div class="col-md-12 col-lg-12">
                            {!! Theme::partial('navbar') !!}
                        </div>
                        <!--<div class="col-md-2 col-lg-2">
                            <div class="header-btns">
                                <a href="#" class="btn"><i class="fa fa-user"></i>Client Login</a>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            [static-block alias="{!! theme_option('hero_block', 'Missing Block') !!}"][/static-block]
        </div>
    </div>
</header>
@else
<header>
        <div class="header-top in-header-top">
            <div class="container">
                <div class="header-topwrap">
                    <div class="row">
                        <!--<div class="col-md-10 col-lg-10">-->
                        <div class="col-md-12 col-lg-12">
                            {!! Theme::partial('navbar') !!}
                        </div>
                        <!--<div class="col-md-2 col-lg-2">
                            <div class="header-btns">
                                <a href="#" class="btn"><i class="fa fa-user"></i>Client Login</a>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom in-header-bottom">
            <div class="container">
                <div class="in-banner-contents text-center">
                    <h3>{!! $page->name !!}</h3>
                </div>
            </div>
        </div>
    </header>
@endif

<div class="holder">
{!! apply_filters(PAGE_FILTER_FRONT_PAGE_CONTENT, $page->content, $page) !!}
</div>