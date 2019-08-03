var $ = jQuery;
$(document).ready(function(){

    //menu

    $('.burger').on('click', function() {
        $('.menu-conyainer').slideToggle(300);
    }) 

    
    //burger

    var isActive = false;

    $('.js-menu').on('click', function() {
        if (isActive) {
            $(this).removeClass('active');
            $('body').removeClass('menu-open');
            $('.line-burger-bottom').removeClass('opacity-hidden');
            $('.line-burger-top').removeClass('opacity-hidden');

        } else {
            $(this).addClass('active');
            $('body').addClass('menu-open');
            $('.line-burger-bottom').addClass('opacity-hidden');
            $('.line-burger-top').addClass('opacity-hidden');
        }

        isActive = !isActive;
    });




    //accordion

    function accordion(el){
        el.find(".title").click(function(){
            $(this).next(".content").slideToggle('fast');
            $(".content").not($(this).next(".content")).slideUp('fast');
        });
    }
    $(document).ready(function(){
        accordion($(".accordion"));
    });



    //scrol

    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });


    //hidden and show menu

    if(window.matchMedia('(max-width: 820px)').matches)
    {
        
      $('.burger').on('click', function() {
        $('.logo-img').toggleClass('logo-non');
        $('.head-link').toggleClass('btn-block');
      })
    }


    //css animate

    $(window).scroll(function() {
        $('.mov').each(function() {
            var imgPos = $(this).offset().top;
            var topOf = $(window).scrollTop();
            if(imgPos < topOf+800) {
                $(this).removeClass('before');
            }
        })
    })


});







