$(function (){
    
	/* ================*/
    /* slider first-section
    /* ================*/

    if( $('.slider__list').length ) {

    	$('.slider__list').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: true,
			slidesToShow: 1,
      		slidesToScroll: 1
		});
    }

	/* ================*/
    /* slider__gallery
    /* ================*/

	if( $('.slider__gallery-photo__list').length ) {

    	$('.slider__gallery-photo__list').slick({
			slidesToShow: 4,
      		slidesToScroll: 4,
			  responsive: [
			{
		      breakpoint: 1080,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
			{
		      breakpoint: 960,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
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
    }

	
	/* =============================*/
    /* slider__gallery magnificPopup
    /* =============================*/

	if($('.slider__gallery-photo__list').length) {
			$('.slider__gallery-photo__list').magnificPopup({
				delegate: 'a.slider__gallery__link',
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
    /* gallery magnificPopup
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
});