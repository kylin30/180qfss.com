

    (function () {
        var messagaeSlideSwiper = new Swiper('.messagaeSlide-swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 3000,
            // 如果需要分页器
            pagination: '.messagaeSlide-swiper-pagination',
            paginationClickable: true,
            onSwiperCreated: function onSwiperCreated(swiper) {
                $('.messagaeSlide-swiper-container .swiper-pagination-switch').mouseenter(function () {
                    $(this).click();
                });
            }
        });
    })();
    
      
       