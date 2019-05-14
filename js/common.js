// Лайки на слайдер //
$('.js-like').click(function(){
    $(this).toggleClass('liked');
});
// Слайдер //
$(document).ready(function() {

    var itemSlider = $('.slider-items');

    itemSlider.slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true
    });

    itemSlider.on("afterChange", function(event, slick, currentSlide, nextSlide){
        $(".count-current").text('0' + parseInt(currentSlide + 1));
        $(".count-all").text('0' + parseInt(slick.slideCount));
    });

    $(".slider-prev").click(function() {
        itemSlider.slick("prev");
    });
    $(".slider-next").click(function() {
        itemSlider.slick("next");
    });

    $(".count-current").text('01');
    $(".count-all").text('0' + itemSlider.slick("getSlick").slideCount);

    $('.slider-block').each(function(e,i){
        var idItem = $(i).data("slick-index");
        $(i).find(".slider-color input[type='radio']").attr('name', 'item-' + idItem);
    });

});

// Анимация загрузки //
$(document).ready(function() {
perCirc($('#sellPerCirc'), 75);
perCir($('#sellPercCir'), 60);

function perCirc($el, end, i) {
    if (end < 0)
        end = 0;
    else if (end > 100)
        end = 100;
    if (typeof i === 'undefined')
        i = 0;
    var curr = (100 * i) / 360;
    if (i <= 180) {
        $el.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #283C54 50%),linear-gradient(90deg, #283C54 50%, transparent 50%)');
    } else {
        $el.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #C78FF9 50%),linear-gradient(90deg, #283C54 50%, transparent 50%)');
    }

    if (curr < end) {
        setTimeout(function () {
            perCirc($el, end, ++i);
        }, 1);
    }
}
    function perCir($el, end, i) {
        if (end < 0)
            end = 0;
        else if (end > 100)
            end = 100;
        if (typeof i === 'undefined')
            i = 0;
        var curr = (100 * i) / 360;
        if (i <= 180) {
            $el.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #283C54 50%),linear-gradient(90deg, #283C54 50%, transparent 50%)');
        } else {
            $el.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #FFC35A 50%),linear-gradient(90deg, #283C54 50%, transparent 50%)');
        }

        if (curr < end) {
            setTimeout(function () {
                perCir($el, end, ++i);
            }, 1);
        }
    }
});

// Фиксированное меню //
$(document).ready(function(){
    var HeaderTop = 15;

    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
            $('.menu-scroll').addClass('fixed');
        } else {
            $('.menu-scroll').removeClass('fixed');
        }
    });
});


// Мобильное меню //
$(document).ready(function() {
    $('.menu-mobile, .menu-mobile__close').on('click', function(){
        $('.menu-m').toggle();
        return false;
    })
});