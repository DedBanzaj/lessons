let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper-scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }


let sliderScrollItems = document.querySelectorAll('._swiper-scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observerParents: true,
            direction: 'vertical',
            slidesPerView: auto,
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mouseweel: {
                releaseOnEdges: true,
            },
        });
        sliderScrollBar.scrollbar.updateSize();
    }
}

function sliders_bild_callback(params) { }


if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        //freeMode: true,
        preloadImage: false,
        parallax: true,
        pagination: {
            el: '.controls-slider-main__dots',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev',
        },

    });
}




if (document.querySelector('.slider-games__body')) {
    new Swiper('.slider-games__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 3.9,
        spaceBetween: 16,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        //       freeMode: true,
        preloadImage: false,

        /*
                pagination: {
                    el: '.slider-games__dots',
                    clickable: true,
                },
                */
        initialSlide: 0,
        navigation: {
            nextEl: '.slider-games .slider-arrow_next',
            //   prevEl: '.slider-games .slider-arrow_prev',
        },
        breakpoints: {
            320: { slidesPerView: 1.3, spaceBetween: 15 },
            480: { slidesPerView: 1.8, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 16 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 3.9, spaceBetween: 16 },
        },
    });
}



//let swiper = new Swiper('._swiper', {
    // Optional parameters
  //  direction: 'horizontal',
  //  loop: false,

    // If we need pagination
  //  pagination: {
  //      el: '.swiper-pagination',
  //      clickable: true,
        // dynamicBullets: true,
        // type: 'fraction',
        // type: 'progressbar',
  //  },

    // Navigation arrows
   // navigation: {
   //     nextEl: '.swiper-button-next',
   //     prevEl: '.swiper-button-prev',
  //  },

  // And if we need scrollbar
  //  scrollbar: {
  //      el: '.swiper-scrollbar',
  //      draggable: true,
  //  },

   // АВТОВЫСОТА
   // autoHeight: false,
    // Одновременно отображается слайдов
    //slidesPerView: 1,

    //отключение функционала, если слайдов меньше, чем в пред. пункте
    //watchOverFlow: true,

    //отступ между слайдами
    //spaceBetween: 30,

    //кол-во пролистіваеміх слайдов
    //slidesPerGroup: 2,

    //активный слайд по центру
    //centeredSlides: 1,

    //стартовый слайд
    //initialSlide: 0,

    //мультирядность слайд
    // slidesPerColumn: 2,


    //автопрокрутка
/*
    autoplay: {
        //задержка в мс
        delay: 1000,
        //остановка на последнем
        stopOnLastSlide: true,
        //отключение после ручного переключения
        disableOnInteraction: false,
    },
    */
    // скорость прокрутки
    //  speed: 700,

    //эффекты смены слайдов
    //  effect: 'slide',
    //'fade' - затухание
    //дополнительно к fade:
    //fadeEffect: {
    //    crossFade: true
    //},

    //'flip' - переворот
    //flipEffect: {
    //    slideShadow: true,
    //    limitRotation: true,
    //},

    //'cube' - переворот
    //cubeEffect: {
    //    slideShadow: true,
    //    shadow: true,
    //    shadowOffset: 20,
    //    shadowScale: 0.94,
    //},

    //'coverFlow' - переворот
    //cubeEffect: {
    //    slideShadow: true,
    //    rotate: 20,
    //    stretch: 50,
    //},


    // АДАПТИВНОСТЬ!!!
    // по ширине вьюпорта
/*
breakpoints: {
    320: { slidesPerView: 1, },
    480: { slidesPerView: 2, },
    992: { slidesPerView: 3, },
},

// по соотношению сторон
breakpoints: {
    @0.75: { slidesPerView: 1, },
    @1.00: { slidesPerView: 2, },
    @1.50: { slidesPerView: 3, },
},
*/
    // обновить свайпера при изменении элементов слайдера
    // observer: true,

    // обновить свайпера при изменении родительских элементов слайдера
    // observerParents: true,

    // обновить свайпера при изменении дочерних элементов слайдера
    // observerSlideChildren: true,
//});
