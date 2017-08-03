$(function (){

    /* =====================*/
    /* first section slider 
    /* =====================*/

    if( $('.slider__list').length ) {

    	$('.slider__list').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: true,
			slidesToShow: 1,
      		slidesToScroll: 1
		});
    }

	/* =====================*/
    /* video
    /* =====================*/

	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/omXn_LghtAg?autoplay=1&rel=0' 
				}
			}
		}
	});

	/* =====================*/
    /* services slider
    /* =====================*/

	$('.slider-services__list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
			{
		      breakpoint: 821,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
			{
		      breakpoint: 751,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		]
	});

	/* =====================*/
    /* works masonry
    /* =====================*/
	
    $('.gallery__list').masonry({
        itemSelector: '.gallery__item',
         columnWidth: '.gallery__item'
		//  isFitWidth: true
    });

	/* =====================*/
    /* works magnificPopup
    /* =====================*/

	if($('.gallery__list').length) {
			$('.gallery__list').magnificPopup({
				delegate: 'a.gallery__link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] 
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
				}
			});
		}

	/* =====================*/
    /* works isotope
    /* =====================*/

	var $grid = $('.gallery__list').isotope();
	$('.works__header__nav__item').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
			$grid.isotope({ 
				filter: filterValue 
			});
	});

	/* =====================*/
    /* clients slider
    /* =====================*/

	$('.slider-clients__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

});