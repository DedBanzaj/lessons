"use strict"
window.onload = function () {
    document.addEventListener("click", documentActions);
    // Actions (прослушивание события клик и делегирование его)
    const spoilersArray = document.querySelectorAll('[data-spoilers]');


    spoilersShowHide(spoilersArray);

    function documentActions(e) {
        const targetElement = e.target;

        //обработка нажатия меню бургера ========================================================================================
        if (window.innerWidth <= 768 || isMobile.any()) {
            if (targetElement.classList.contains('icon-menu')) {
                menuBurger();
            }
        }
    }


    //Прокрутка и подсветка HEADER ========================================================================================

    const headerElement = document.querySelector('.header');
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
        } else {
            headerElement.classList.add('_scroll');
        }
    };

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);



}