@extends('core/acl::auth.master')

@section('content')
    <!--p>{{ trans('core/acl::auth.sign_in_below') }}:</p-->

    <div class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white login-signin-on">
        <div class="login-aside d-flex flex-column flex-row-auto" style="background-color: #F2C98A;">
            <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
                <a href="#" class="text-center mb-10">
                    <img src="{{ asset('vendor/core/media/logos/logo-letter-1.png') }}" class="max-h-70px" alt=""/>
                </a>

                <h3 class="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style="color: #986923;">
                    {{ config('app.name') }}
                </h3>
            </div>

            <div class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style="background-image: url({{ asset('vendor/core/media/svg/illustrations/login-visual-1.svg') }})"></div>
        </div>

        <div class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
            <div class="d-flex flex-column-fluid flex-center">
                <div class="login-form login-signin">
                    {!! Form::open(['route' => 'access.login', 'class' => 'login-form', 'id' => 'kt_login_signin_form']) !!}
                        <!-- <div class="pb-13 pt-lg-0 pt-5">
                            <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">{{ config('app.name') }}</h3>
                        </div> -->

                        <div class="form-group" id="emailGroup">
                            <label class="font-size-h6 font-weight-bolder text-dark">{{ trans('core/acl::auth.login.username') }}</label>
                            {!! Form::text('username', old('username', app()->environment('demo') ? 'zhxcore' : null), ['class' => 'form-control form-control-solid h-auto py-7 px-6 rounded-lg', 'placeholder' => trans('core/acl::auth.login.username')]) !!}
                        </div>

                        <div class="form-group">
                            <div class="d-flex justify-content-between mt-n5">
                                <label class="font-size-h6 font-weight-bolder text-dark pt-5">{{ trans('core/acl::auth.login.password') }}</label>

                                <a href="{{ route('access.password.request') }}" class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5" id="kt_login_forgot" title="{{ trans('core/acl::auth.forgot_password.title') }}">
                                    {{ trans('core/acl::auth.lost_your_password') }}
                                </a>
                            </div>

                            {!! Form::input('password', 'password', (app()->environment('demo') ? '159357' : null), ['class' => 'form-control form-control-solid h-auto py-7 px-6 rounded-lg', 'placeholder' => trans('core/acl::auth.login.password')]) !!}
                        </div>

                        <div>
                            <label>
                                {!! Form::checkbox('remember', '1', true, ['class' => 'hrv-checkbox']) !!} {{ trans('core/acl::auth.login.remember') }}
                            </label>
                        </div>
                        <br>

                        <button type="submit" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3" id="kt_login_signin_submit">
                            <span class="signin">{{ trans('core/acl::auth.login.login') }}</span>
                        </button>
                        <div class="clearfix"></div>

                        {!! apply_filters(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, null, \ZHXCore\ACL\Models\User::class) !!}

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
        var username = document.querySelector('[name="username"]');
        var password = document.querySelector('[name="password"]');
        username.focus();
        document.getElementById('emailGroup').classList.add('focused');

        // Focus events for email and password fields
        username.addEventListener('focusin', function(){
            document.getElementById('emailGroup').classList.add('focused');
        });
        username.addEventListener('focusout', function(){
            document.getElementById('emailGroup').classList.remove('focused');
        });

        password.addEventListener('focusin', function(){
            document.getElementById('passwordGroup').classList.add('focused');
        });
        password.addEventListener('focusout', function(){
            document.getElementById('passwordGroup').classList.remove('focused');
        });
    </script>
@endpush
