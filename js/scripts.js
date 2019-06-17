; (function () {

    "use strict";

    /*
		* -------------------------------------------------------
		*  CAROUSEL LESSONS
		* -------------------------------------------------------
	*/

    function owlInitialize() {
        if ($(window).width() < 991) {
            $('.carousel-lessons').owlCarousel({
                loop: true,
                margin: 0,
                dots: false,
                nav: false,
                lazyLoad: true,
                responsive: {
                    0: {
                        items: 1,
                        center: true,
                        stagePadding: 65,
                        dots: true
                    },
                    767: {
                        items: 3,
                        center: true,
                        stagePadding: 85,
                        dots: true
                    },
                    991: {
                        items: 3,
                        center: true,
                        stagePadding: 105,
                        dots: true
                    }
                }
            });
        } else {
            $('.carousel-lessons').owlCarousel('destroy');
        }
    }
    $(document).ready(function (e) {
        owlInitialize();
    });
    $(window).resize(function () {
        owlInitialize();
    });


    /*
		* -------------------------------------------------------
		*  PARALLAX
		* -------------------------------------------------------
	*/
    if ($('.js-parallax').length > 0) {
        $('.js-parallax').paroller();
    }


	/*
		* -------------------------------------------------------
		*  COPYRIGHT YEARS
		* -------------------------------------------------------
	*/
    function getCopyrightYears() {
        var dateCopyrightHTML = document.querySelector('.js-copyright-years');
        var date = new Date();
        var dateYears = date.getFullYear();
        dateCopyrightHTML.innerHTML = dateYears;
    }
    getCopyrightYears();



	/*
		* -------------------------------------------------------
		*  LAZY LOAD
		* -------------------------------------------------------
	*/
    var bLazy = new Blazy({
        // Options
        offset: 100
    });


    // informer
    var informer = document.querySelector('.informer');
    var informerClose = document.querySelector('.informer__close');

    function hideInformer() {
        informer.classList.add('informer--hidden')
    }
    informerClose.addEventListener('click', hideInformer);



    // load video
    function lazyLoadVideoYuotube() {
        var youtube = document.querySelectorAll(".video-custom");

        for (var i = 0; i < youtube.length; i++) {

            //youtube thumbnail
            var image = new Image();
            image.src = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/maxresdefault.jpg";
            image.setAttribute("alt", "");
            image.classList.add("video-custom__poster");

            //load image after page is loaded
            image.addEventListener("load", function () {
                youtube[i].appendChild(image);
            }(i));

            //create iframe click youtube
            youtube[i].addEventListener("click", function () {
                var iframe = document.createElement("iframe");
                iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + this.dataset.embed + "?controls=1&amp;showinfo=0&amp;autoplay=1");
                iframe.setAttribute("allow", "autoplay;encrypted-media");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("class", "video-custom__iframe");
                this.appendChild(iframe);
                this.classList.add("video-custom--active");
            });

        };
    }
    lazyLoadVideoYuotube();



    /*
		* -------------------------------------------------------
		*  ANIMATION SCROLL
		* -------------------------------------------------------
	*/
    // animation arrow
    var controllerProcess = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 2200
        }
    });
    new ScrollMagic.Scene({
        triggerElement: ".into__body"
    })
        .setClassToggle(".intro__arrow", "intro__arrow--active")
        .addTo(controllerProcess);

    // animation bg text 1
    var controllerProcess2 = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 2000
        }
    });
    new ScrollMagic.Scene({
        triggerElement: ".into__body"
    })
        .setClassToggle(".subtitle__highlighted", "subtitle__highlighted--active")
        .addTo(controllerProcess2);

    // animation bg text 2
    var controllerProcess3 = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 2000
        }
    });
    new ScrollMagic.Scene({
        triggerElement: ".access"
    })
        .setClassToggle(".subtitle__highlighted", "subtitle__highlighted--active")
        .addTo(controllerProcess3);


    /*
           * -------------------------------------------------------
           *  SCROLL ANCHOR
           * -------------------------------------------------------
       */
    $('.js-scroll').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 500);
        e.preventDefault();
    });


})();