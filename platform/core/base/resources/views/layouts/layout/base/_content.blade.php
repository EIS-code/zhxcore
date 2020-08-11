{{-- Content --}}
@if (config('layout.content.extended'))
    @yield('page')
@else
    <div class="d-flex flex-column-fluid">
        <div class="{{ Metronic::printClasses('content-container', false) }}">
            @yield('page')
        </div>
    </div>
@endif
