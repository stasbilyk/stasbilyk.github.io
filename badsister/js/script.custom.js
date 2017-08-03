$(function() {
    'use strict';
    
    $(document).ready(function() {
    $(window).resize(function() {
        if ($(window).innerWidth() < '1921'){
            $(".slider__item").removeClass('slider__item_bg1 slider__item_bg2 slider__item_bg3');
            $('.slider__item-img').show();
        } else if ($(window).innerWidth() > '1920'){
            $(".slider__item").addClass('slider__item_bg1');
            $('.slider__item-img').hide();
        }
        
    });
});



    /* ==================== */
	/* responsive menu
	/* ==================== */

	var $aside = $(".navigation"),
		$main = $('body'),
		$btn = $('.responsive-btn'),
        $link = $('.nav__link'),
        $menu = $('.active-menu');

	$btn.on('click',function () {
		
			$main.addClass("active-menu-body");
			$aside.addClass("active-menu");
			$(this).addClass('active-btn-menu');

	});

    $link.on('click',function () {
		
			$main.removeClass("active-menu-body");
			$aside.removeClass("active-menu");
            $btn.removeClass('active-btn-menu');
			$btn.addClass('.active-btn-menu i:before');
           

	});

	$(document).on('mouseup',function (e) {
		if ($aside.has(e.target).length === 0){
        	$aside.removeClass("active-menu");
			$main.removeClass("active-menu-body");
			$btn.removeClass('active-btn-menu');
    	}
	});



    /* ===========================*/
	/* fixed menu
	/* ===========================*/

	$(window).scroll(function(){

	if( $(document).scrollTop() > 60){
		$('.header').addClass('header-top');
	} else {
		$('.header').removeClass('header-top');
	}
	if( $(document).scrollTop() > 60 ){
		$('.header').addClass('fixed-header');
	} else {
		$('.header').removeClass('fixed-header');
	}

	});

    /* ===========================*/
	/* scroll ckick menu
	/* ===========================*/

    $('.nav__link').on('click', function (){
		var currentBlock = $(this).attr('href');
		var offsetBlock = $(currentBlock).offset().top - 59;
        $('html, body').animate({
            scrollTop:offsetBlock
        },1000);
    });

	// /* ===========================*/
    // /*  change the active menu
    // /* ===========================*/

    var lastId,
    topMenu = $(".nav__list"),
    topMenuHeight = topMenu.outerHeight(),
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
        return item;
        }
    });


    menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    });

    
    $(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
        return this;
    });
    

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
        lastId = id;
        menuItems
        .parent().removeClass("current active")
        .end().filter("[href='#" + id + "']").parent().addClass("current active");
    }
});

    /* ==================== */
	/* load more gallery
	/* ==================== */

	$("hidden").slice(0, 8).show();
    $(".more_photos").on('click', function (e) {
        e.preventDefault();
        $(".gallery__item:hidden").slice(0, 8).addClass('show');
        if ($(".gallery__item:hidden").length == 0) {
            $(this).addClass('hidden');
        }
    });

    
    
});