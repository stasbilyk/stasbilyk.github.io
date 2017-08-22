$(function() {
    'use strict';

	/* ==================== */
	/* responsive menu
	/* ==================== */

	var $aside = $(".navigation"),
		$main = $('body'),
		$btn = $('.responsive-btn');

	$btn.on('click',function () {
		
			$main.addClass("active-menu-body");
			$aside.addClass("active-menu");
			$(this).addClass('active-btn-menu');

	});

	$(document).on('mouseup',function (e) {
		if ($aside.has(e.target).length === 0){
        	$aside.removeClass("active-menu");
			$main.removeClass("active-menu-body");
			$btn.removeClass('active-btn-menu');
    	}
	});

	/* ==================== */
	/* load more works
	/* ==================== */

	$("box-hidden").slice(0, 4).show();
    $(".load_more_works").on('click', function (e) {
        e.preventDefault();
        $(".portfolio__item:hidden").slice(0, 4).addClass('show');
        if ($(".portfolio__item:hidden").length == 0) {
            $(this).addClass('hidden');
        }
    });


	var lastId,
        topMenu = $(".nav__list"),
        topMenuHeight = topMenu.outerHeight() + 50,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { 
                return item; }
        });


    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - 75;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000);
        e.preventDefault();
    });


    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("current")
                .end().filter("[href=#"+id+"]").parent().addClass("current");
        }


        if ( $(document).scrollTop() > 70 ) {

			$('.header').addClass('header-top');

		} else {

			$('.header').removeClass('header-top');			

		}

		if( $(document).scrollTop() > 170 ) {

			$('.header').addClass('fixed-header');
		}

		else {

			$('.header').removeClass('fixed-header');

		}
    });

    

});