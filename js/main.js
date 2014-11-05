$(function(){

    var headings = $(".promo-title h2").toArray();
    var count = 0;

    function switchHeading(){
        $(".promo-title h2").removeClass("show");
        $(headings[count]).addClass("show");
        count += 1;
        if(count > 2)
            count =0;

        setTimeout(switchHeading, 3500);
    }
    switchHeading();


    function checkScrollHeight() {
        if($(window).scrollTop() > $(window).height()) {
            $('nav.top-bar').removeClass('clear');
        } else {
            $('nav.top-bar').addClass('clear');
        }
    }
    if(window.location.pathname === '/') {
        $(window).scroll(checkScrollHeight);
        checkScrollHeight();
    }

});
