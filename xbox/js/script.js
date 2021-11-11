"use strict"
window.onload = function () {
    document.addEventListener("click", documentActions);
    // Actions (прослушивание события клик и делегирование его)
    const spoilersArray = document.querySelectorAll('[data-spoilers]');
    spoilersShowHide(spoilersArray);

    function documentActions(e) {
        const targetElement = e.target;

        //обработка нажатия меню стрелки
        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElement.classList.contains('menu_arrow')) {

                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
                _removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover');
            }
        }

        //обработка нажатия меню бургера ========================================================================================
        if (window.innerWidth <= 768 && isMobile.any()) {
            if (targetElement.classList.contains('icon-menu')) {
                menuBurger();
            }
        }

        //обработка нажатия иконки поиск ========================================================================================
        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        }
        else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active');
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
    /*
        //GALLERY ============================================================================
        const furniture = document.querySelector('.furniture__body');
        if (furniture && !isMobile.any()) {
            const furnitureItems = document.querySelector('.furniture__items');
            const furnitureColumn = document.querySelectorAll('.furniture_column');
    
            // animation speed ================
            const speed = furniture.dataset.speed;
    
            let positionX = 0;
            let coordXProcent = 0;
    
            function setMouseGalleryStyle() {
                let furnitureItemsWidth = 0;
                furnitureColumn.forEach(element => {
                    furnitureItemsWidth += element.offsetWidth;
                });
    
                const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
                const distX = Math.floor(coordXProcent - positionX);
    
                positionX = positionX + (distX * speed);
                let position = furnitureDifferent / 200 * positionX;
    
                furnitureItems.style.cssText = `transform: translate3d(${position}px, 0,0);`;
    
                if (Math.abs(distX) > 0) {
                    requestAnimationFrame(setMouseGalleryStyle);
                } else {
                    furniture.classList.remove('_init');
                }
            }
            furniture.addEventListener("mousemove", function (e) {
                //получаем ширину
                const furnitureWidth = furniture.offsetWidth;
    
                // ноль по центру
                const coordX = e.pageX - furnitureWidth / 2;
    
                //получаем процентную координату
                coordXProcent = coordX / furnitureWidth * 200;
    
                if (!furniture.classList.contains('_init')) {
                    requestAnimationFrame(setMouseGalleryStyle);
                    furniture.classList.add('_init');
                }
            });
        }
    */

}