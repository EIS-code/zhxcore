{!! Theme::partial('header') !!}


<div id="app">

    {!! Theme::content() !!}


{!! Theme::partial('footer') !!}

</div>

{!! Theme::footer() !!}

<script type="text/javascript">
    AOS.init({
        duration: 1200,
    })
</script>
</body>
</html>