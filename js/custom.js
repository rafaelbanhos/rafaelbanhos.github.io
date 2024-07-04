/*
 Theme Name: Resume
 Theme URI: http:/newtemplate.net/demo/resume/index.html
 Author: NewTemplate
 Author URI: https://themeforest.net/user/newtemplete
 Version: 1.0.1
 Description:  Resume One Page HTML5 Theme comes out with tons of powerful features. Its modern, attractive and clean design.
*/

/*-----------------------------------------------------------------------------------

 [Table of contents]

 1.0 Page loader
 2.0 Sticky header
 3.0 Water effect
 4.0 Smooth scroll
 5.0 Portfolio filtration
 6.0 Testimonial carousel
 7.0 Blog carousel
 8.0 Counter
 9.0 Parallax
 10.0 Ajax validation
 11.0 WOW


 */


(function ($) {

    "use strict";


    /**
     * 1.0 Page loader
     * -----------------------------------------------------------------------------
     */

    $(window).on('load', function () {
        $('#loader-wrapper').delay(100).fadeOut(500);
    });


    /*
     * 2.0 Sticky Header
     * -----------------------------------------------------------------------------
     */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 5) {
            $('.header-area').addClass('fixed');
            $('.header-area a.btn').addClass('button-scheme');
        }
        else {
            $('.header-area').removeClass('fixed');
            $('.header-area a.btn').removeClass('button-scheme');
        }
    });


    /*
     * 3.0 Water Effect
     * -----------------------------------------------------------------------------
     */

    $('.water-effect').ripples({
        resolution: 512,
        perturbance: 0.04,
        dropRadius: 20
    });


    /*
     * 4.0 Smooth Scroll
     * -----------------------------------------------------------------------------
     */

    $(document).on('scroll', onScroll);

    $('.scroll').on('click', function (e) {

        var scroll_speed = 1000;

        e.preventDefault();
        $(document).off('scroll');

        $('a').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, scroll_speed, 'swing', function () {
            $(document).on('scroll', onScroll);
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('#menu_scroll li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu_scroll li a').removeClass('active');
                currLink.addClass('active');
            }
            else {
                currLink.removeClass('active');
            }
        });
    }

    /*
     * 5.0 Portfolio filtration
     * -----------------------------------------------------------------------------
     */

    // quick search regex

    //ISOTOPE INIT
    $(window).on('load', function () {
    var filterValue;

    var $grid = $('.works-container');
    $grid.isotope({
        itemSelector: '.works-item',
        layoutMode: 'fitRows',
        filter: function () {
            var $this = $(this);
            return filterValue ? $this.is(filterValue) : true;
        }
    });


// bind filter button click
    $('.works-filter-wrap').on('click', '.works-filter li', function () {
        filterValue = $(this).attr('data-filter');
        $grid.isotope();
    });


    // change active class on buttons
    $('.works-filter li').on('click', function () {
        $('.works-filter li').removeClass('tab-active');
        $(this).addClass('tab-active');
    });

    });

    /*
     * 6.0 Testimonial carousel
     * -----------------------------------------------------------------------------
     */

    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true

            }
        }
    });

    /*
     * 7.0 Blog carousel
     * -----------------------------------------------------------------------------
     */
    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    /*
     * 8.0 Counter
     * -----------------------------------------------------------------------------
     */

    $(function () {
        $(".counter").countimator();
    });


    /*
     * 9.0 Parallax
     * -----------------------------------------------------------------------------
     */


    var parallax = document.querySelectorAll(".parallax_img"),
        speed = 0.08;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {
            var rect = el.getBoundingClientRect();
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "0 " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };


    /*
     * 10.0 Ajax validation
     * -----------------------------------------------------------------------------
     */

    // request submission
    var EnableDisableForm = function (objectType, btn1, btn1Text) {
        if (objectType == 'Disable') {
            $('#' + btn1).attr('disabled', 'disabled');
        } else {
            $('#' + btn1).removeAttr('disabled');
        }
        $('#' + btn1).val(btn1Text);
    };


    function AjaxFormSubmit(formname, btn1, btn1Text) {
        var options = {
            complete: function (response) {
                if ('Success') {

                    swal({
                        title: "Thank you!",
                        text: "Your message has been successfully Submitted.",
                        type: "success",
                        confirmButtonText: 'Close',
                        timer: 5000
                    });

                    $('#validation')[0].reset();

                }
                EnableDisableForm('Enabled', btn1, btn1Text);
            },
            error: function (response) {
                var data = response.responseText;
                console.log(data);
            }
        };
        $('#' + formname).ajaxSubmit(options);
    }


// Ajax form validation
    $('#validation').validate({
        errorElement: 'span',
        rules: {
            project: {
                required: true
            },
            name: {
                required: true
            },
            email: {
                required: true
            },
            company: {
                required: true
            },
            phone: {
                required: true
            },
            budget: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            project: {
                required: 'Required.'
            },
            name: {
                required: 'Required.'
            },
            email: {
                required: 'Required.'
            },
            company: {
                required: 'Required.'
            },
            phone: {
                required: 'Required.'
            },
            budget: {
                required: 'Required.'
            },
            message: {
                required: 'Required.'
            }
        },
        submitHandler: function (form) {
            EnableDisableForm('Disable');
            AjaxFormSubmit('validation', 'submit');
            return false; // required to block normal submit since you used ajax
        }
    });

    /*
     * 11.0 WOW
     * -----------------------------------------------------------------------------
     */
    new WOW().init();


})(jQuery);