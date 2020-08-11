<footer>
    <div class="footer-top">
        <div class="container">
            <div class="footer-topwrap">
                <div class="row">
                    <div class="col-md-4 col-lg-4">
                        <div class="footer-logo">
                            <a href="{!! route('public.index') !!}"><img src="{!! get_image_url(theme_option('footer_logo')) !!}" class="img-fluid" alt="{!! theme_option('site_title') !!}" /></a>
                            <p>Providing quality, budget saving, user friendly and result oriented services and products both locally and globally.</p>
                            <ul class="list-unstyled">
                                <li class="call-us"><a href="#">Phone: +1 (860) 365-6279</a></li>
                                <li class="mail-us"><a href="#">support@zhxscript.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3">
                        <div class="footer-links footer-list">
                            <h4>Company Links</h4>
                            <ul class="list-unstyled">
                                <li><a href="/contact-us">Get a Project Quote</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-5">
                        <div class="footer-newsletter footer-list">
                            <h4 class="text-center">Start Your Own Business</h4>
                            <p class="text-center">
                                <a href="https://panelscript.com">
                                    <img style="max-height: 250px;" src="https://marketstreetforum.com/uploads/monthly_2020_05/600x600.png.36912aaa99d2950a36f575a11aab09fa.png"/>
                                </a>
                            </p>
                            <?php
                            /*<h4>Newsletter</h4>
                        <p>A weekly newsletter with news, updates tips, deals and more.</p>
                        <div class="footer-form">
                            <?php
              <div class="input-group">
                                <input class="form-control" id="Input" placeholder="Enter Your Email id :" type="text">
                                <span class="input-group-btn">
                      <button type="submit" class="btn" id="Button"><i class="fa fa-paper-plane"></i></button>
                  </span>
                            </div>

                            </div>
                            <ul class="list-unstyled d-inline-flex">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                            */

                                ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-copyrights text-center">
                <p>{!! trans(theme_option('copyright'), ['year' => now(config('app.timezone'))->format('Y')]) !!}</p>
                <p>Powered by ZHXCore v{!! get_cms_version() !!}</p>
            </div>
        </div>
    </div>
    </footer>

