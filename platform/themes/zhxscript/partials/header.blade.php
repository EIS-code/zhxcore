<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" name="viewport"/>
        <!-- FAVICONS -->
        <link rel="shortcut icon" href="{!! (theme_option('favicon')) ? get_image_url(theme_option('favicon')) : Theme::asset()->url('img/favicon/favicon.png') !!}" type="image/png">
        <link rel="icon" href="{!! (theme_option('favicon')) ? get_image_url(theme_option('favicon')) : Theme::asset()->url('img/favicon/favicon.png') !!}" type="image/png">
        <!-- CSS -->
        <link href="//fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        {!! Theme::header() !!}

        <?php
        /*
        <script>
            window.PUSHER_APP_KEY = '{{ config('broadcasting.connections.pusher.key') }}';
            window.APP_DEBUG = {{ config('app.debug') ? 'true' : 'false' }};
            window.HOST_NAME = 'socket.zhxcodex.com';
            window.WS_PORT = '6002';
            window.WSS_PORT = '6002';
        </script>
        */
        ?>
    </head>
    <body @if (class_exists('Language', false) && Language::getCurrentLocaleRTL()) dir="rtl" @endif>
    <div class="loader"></div>
