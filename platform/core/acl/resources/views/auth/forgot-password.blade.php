@extends('core/acl::auth.master')

@section('content')
    <div class="login login-1 wizard d-flex flex-column flex-lg-row flex-column-fluid">
        <div class="login-aside d-flex flex-column flex-row-auto" style="background-color: #ffffff;">
            <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
                <a href="#" class="login-logo text-center pt-lg-25 pb-10">
                    <img src="{{ asset('vendor/core/media/logos/logo-letter-1.png') }}" class="max-h-70px" alt=""/>
                </a>

                <h3 class="font-weight-bolder text-center font-size-h4 text-dark-50  line-height-xl">
                    {{ config('app.name') }}
                </h3>
            </div>

            <div class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center"
                style="background-position-y: calc(100% + 5rem); background-image: url({{ asset('vendor/core/media/svg/illustrations/login-visual-5.svg') }})">
            </div>
        </div>
        <div class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
            <div class="d-flex flex-row-fluid flex-center">
                <div class="login-form">
                    <div class="pb-5 pb-lg-15">
                        <h3 class="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">{{ trans('core/acl::auth.forgot_password.title') }}:</h3>
                        <p class="text-muted font-weight-bold font-size-h4">{!! clean(trans('core/acl::auth.forgot_password.message')) !!}</p>
                    </div>
                    {!! Form::open(['route' => 'access.password.email', 'class' => 'login-form', 'id' => 'kt_login_forgot_form']) !!}
                        <div class="form-group" id="emailGroup">
                            <label>{{ trans('core/acl::auth.login.email') }}</label>
                            {!! Form::text('email', old('email'), ['class' => 'form-control h-auto py-7 px-6 border-0 rounded-lg font-size-h6', 'placeholder' => trans('core/acl::auth.login.email')]) !!}
                        </div>
                        <button type="submit" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4" id="kt_login_forgot_form_submit_button">
                            <span class="signin">{{ trans('core/acl::auth.forgot_password.submit') }}</span>
                        </button>
                        <a href="{{ route('access.login') }}" id="kt_login_forgot_cancel" class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">{{ trans('core/acl::auth.back_to_login') }}</a>
                        <div class="clearfix"></div>
                    {!! Form::close() !!}
                </div>
            </div>
            <div class="text-dark order-2 order-md-1">
                <span class="text-muted font-weight-bold mr-2">
                    {!! clean(trans('core/base::layouts.copyright', ['year' => now(config('app.timezone'))->format('Y'), 'company' => setting('admin_title', config('core.base.general.base_name')), 'version' => get_cms_version()])) !!}
                </span>
            </div>
        </div>
    </div>
@stop
@push('footer')
    <script>
        var email = document.querySelector('[name="email"]');
        email.focus();
        document.getElementById('emailGroup').classList.add('focused');

        // Focus events for email and password fields
        email.addEventListener('focusin', function(){
            document.getElementById('emailGroup').classList.add('focused');
        });
        email.addEventListener('focusout', function(){
            document.getElementById('emailGroup').classList.remove('focused');
        });
    </script>
@endpush

