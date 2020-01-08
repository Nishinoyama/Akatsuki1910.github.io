$(window).scroll(function(){
    $(".passing").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight / 4){
            $(this).addClass('move');
        }
    });
});