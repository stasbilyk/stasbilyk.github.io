$(function (){

    /* =====================*/
    /* first section slider 
    /* =====================*/

    if( $('.slider__list').length ) {

    	$('.slider__list').slick({
    		dots: true
    	});
    }

	/* =====================*/
    /* portfolio
    /* =====================*/

    if($('.portfolio__list').length) {
    	$('.portfolio__list').magnificPopup({
			delegate: 'a.portfolio__link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
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
    /* clients
    /* =====================*/

    if( $('.clients__list').length ) {

    	$('.clients__list').slick();
    }

});