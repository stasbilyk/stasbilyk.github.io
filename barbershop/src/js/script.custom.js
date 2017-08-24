$(function(){
   
    var btnMenuActive = $('.main-nav__button'),
        navList = $('.main-nav__wrap'),
        navLinkLog = $('.main-nav__link-login'),
        modalWin = $('.modal-window-wrap'),
        btnFormClose = $('.btn-form-close__link'),
        btnFormCloseTab = $('.btn-form-close-tablet_desctop');
        btnFormFail = $('.btn-modal-failure');
        modalWinFail = $('.failure-wrap');
        btnFormLuck = $('.btn-modal-luck');
        modalWinLuck = $('.luck-wrap');
    

    btnMenuActive.on('click',function(){
        navList.toggleClass('main-nav__wrap-active');
        btnMenuActive.toggleClass('main-nav__button-active'); 
    });

    navLinkLog.on('click',function(e){
        e.preventDefault();
        modalWin.addClass('modal-window-wrap-active');
        $('body').addClass('bodyoverflow');
    });

    btnFormClose.on('click',function(e){
        e.preventDefault();
        modalWin.removeClass('modal-window-wrap-active');
        modalWin.addClass('modal-window-wrap');
        $('body').removeClass('bodyoverflow');
    });

    btnFormCloseTab.on('click',function(e){
        e.preventDefault();
        modalWin.removeClass('modal-window-wrap-active');
        modalWin.addClass('modal-window-wrap');
     });

     btnFormFail.on('click',function(e){
        e.preventDefault();
        modalWinFail.hide();
        
     });
   
     btnFormLuck.on('click',function(e){
        e.preventDefault();
        modalWinLuck.hide();
        
     });

});

