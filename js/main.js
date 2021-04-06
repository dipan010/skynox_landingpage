$('.gallery-parent').each(function() {
    let thumbs = $(this).children('.gallery-thumbs'),
        top = $(this).children('.gallery-top');

    let galleryThumbs = new Swiper(thumbs, {
        spaceBetween: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });

    let galleryTop = new Swiper(top, {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    let productCarouselTopWidth = top.outerWidth();
    top.css('height', productCarouselTopWidth);

    let productCarouselThumbsItemWith = thumbs.find('.swiper-slide').outerWidth();
    thumbs.css('height', productCarouselThumbsItemWith);
});

let $easyzoom = $('.easyzoom').easyZoom();