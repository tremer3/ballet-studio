window.addEventListener('DOMContentLoaded', () => {
    const header__list = document.querySelector('.header__list'),
    headerItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header__list.classList.toggle('header__list_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header__list.classList.toggle('header__list_active');
        })
    })
})

$(document).ready(function() {
    
    /* Fixed Header */ 
    let header = $(".header__list");
    let promo = $(".promo");
    let promoH = promo.innerHeight();;
    let scrollPos = $(window).scrollTop();
    let nav = $(".header__list");
    let navToggle = $(".header__listToggle");

    checkScroll(scrollPos, promoH)

    $(window).on("scroll resize", function() {
        promoH = promo.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, promoH);
    });

    function checkScroll(scrollPos, promoH) {
        if( scrollPos > promoH ) {
            header.addClass("header__list_fixed");
        } else {
            header.removeClass("header__list_fixed");
        }
    }

    // Smooth scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});
