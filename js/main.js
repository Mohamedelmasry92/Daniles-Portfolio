let aboutOffset = $('#about').offset().top

$(window).scroll(()=>{
    let scrollFromTop = $(window).scrollTop();
    if(scrollFromTop > aboutOffset - 100){
        $('#main-nav').css('backgroundColor' , 'rgba(0,0,0,0.8)')
        $('#btnUp').fadeIn(1000)
    }else{
        $('#main-nav').css('backgroundColor' , 'transparent')
        $('#btnUp').fadeOut(1000)

    }
})


$('#btnUp').click(()=>{
    $('html,body').animate({scrollTop : 0} , 1000)
})


$('.nav-item a').click(function(){
    $(".nav-item a").removeClass('myActive')
    $(this).addClass('myActive')

    let aHref = $(this).attr('href')
    console.log(aHref);
    let Offset = $(aHref).offset().top
    console.log(Offset);
    $('html , body').animate({scrollTop : Offset},100)
})