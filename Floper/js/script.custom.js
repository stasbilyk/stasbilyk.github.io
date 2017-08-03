$(function(){
    'use strict';

    /* ==================== */
	/* arrow slider show
	/* ==================== */

    $(".slider-services__list .slick-next").on('click',function(){

        $(".slider-services__list .slick-prev").addClass("show");
        
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

        if( $(document).scrollTop() > 85 ){

             if ($(window).innerWidth() < '821'){
               $('.fixed-header').addClass('fixed-header-mobile');
               $('.logo').addClass('logo-mobile');
            } else if ($(window).innerWidth() > '820'){

                $('.fixed-header').removeClass('fixed-header-mobile');
                $('.logo').removeClass('logo-mobile');

            }
            
        } else {
            $('.header').removeClass('header-top');
        }
        if( $(document).scrollTop() > 400 ){
            $('.header').addClass('fixed-header');
        } else {
            $('.header').removeClass('fixed-header fixed-header-mobile');
        }

	});
    
    $(document).ready(function() {
        
        if ($(window).innerWidth() < '821'){
            $('.logo').addClass('logo-mobile');
        } else if ($(window).innerWidth() > '820'){
            $('.logo').removeClass('logo-mobile');
        }
        
    });

    /* ===========================*/
	/* scroll ckick menu
	/* ===========================*/

    $('.nav__link').on('click', function (){
		var currentBlock = $(this).attr('href');
		var offsetBlock = $(currentBlock).offset().top - 80;
        $('html, body').animate({
            scrollTop:offsetBlock
        },1000);
    }); 

    $('.btn--about').on('click', function (){
		var currentBlock = $(this).attr('href');
		var offsetBlock = $(currentBlock).offset().top - 0;
        $('html, body').animate({
            scrollTop:offsetBlock
        },1000);
    });
 

    /* ===========================*/
    /*  change the active menu
    /* ===========================*/

    var lastId,
    topMenu = $(".nav__list"),
    topMenuHeight = topMenu.outerHeight() + 50,
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
    
    /* ===========================*/
    /*  change the active menu works
    /* ===========================*/

    $('.works__header__nav__link').on('click',function() {
        var current = $('.works__header__nav__link');
        current.removeClass('works__header__nav__link-active active');
        $(this).addClass('works__header__nav__link-active active');
    });
   
});



