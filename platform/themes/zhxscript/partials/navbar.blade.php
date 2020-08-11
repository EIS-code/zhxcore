<div class="header-menus">
    <div class="mainmenu">
        <nav class="navbar navbar-expand-md">
            <a class="navbar-brand" href="{!! route('public.index') !!}"><img src="{!! get_image_url(theme_option('logo')) !!}" class="img-fluid" alt="{!! theme_option('site_title') !!}" /></a>
            <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

                {!!
                           Menu::renderMenuLocation('main-menu', [
                               'options' => ['class' => 'navbar-nav'],
                               'view'    => 'menues.main-menu',
                           ])
                       !!}

            </div>
        </nav>
    </div>
</div>