"use strict"

/* -СПОЙЛЕР-------------------------------------------------------------------------- */
function spoilersShowHide(spArray) {

    if (spArray.length > 0) {
        const spoilersRegular = Array.from(spArray).filter(function (item, index, self) {
            return !item.dataset.spoilers.split(",")[0];
        });
        if (spoilersRegular.length > 0) {
            initSpoilers(spoilersRegular);
        }
        const spoilersMedia = Array.from(spArray).filter(function (item, index, self) {
            return item.dataset.spoilers.split(",")[0];
        });
        const breakpointsArray = [];
        if (spoilersMedia.length > 0) {

            spoilersMedia.forEach(item => {
                const param = item.dataset.spoilers;
                const breakpoint = {};
                const paramArray = param.split(",");
                breakpoint.value = paramArray[0];
                breakpoint.type = paramArray[1] ? paramArray[1].trim() : "max";
                breakpoint.item = item;
                breakpointsArray.push(breakpoint);
            });
        }
        let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);
            const spArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });

            matchMedia.addListener(function () {
                initSpoilers(spArray, matchMedia);
            });
            initSpoilers(spArray, matchMedia);
        });
    }
}


function initSpoilers(spoilersArray, matchMedia = false) {
    spoilersArray.forEach(spoilersBlock => {
        spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
        if (matchMedia.matches || !matchMedia) {
            spoilersBlock.classList.add('_init');
            initSpoilerBody(spoilersBlock);
            spoilersBlock.addEventListener("click", setSpoilerAction);
        }
        else {
            spoilersBlock.classList.remove('_init');
            initSpoilerBody(spoilersBlock, false);
            spoilersBlock.removeEventListener("click", setSpoilerAction);
        }
    });
}

function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
    const spoilersTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
    if (spoilersTitles.length > 0) {
        spoilersTitles.forEach(spoilerTitle => {
            if (hideSpoilerBody) {
                spoilerTitle.removeAttribute('tabindex');
                if (!spoilerTitle.classList.contains('_active')) {
                    spoilerTitle.nextElementSibling.hidden = true;
                }
            } else {
                spoilerTitle.setAttribute('tabindex', -1);
                spoilerTitle.nextElementSibling.hidden = false;
            }
        });
    }
}

function setSpoilerAction(e) {
    const el = e.target;
    if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
        const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
        const spoilersBlock = spoilerTitle.closest('[data-spoilers]')
        const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
        if (!spoilersBlock.querySelectorAll('._slide').length) {
            if (oneSpoiler && !spoilerTitle.classList.contains('_active')) {
                hideSpoilerBody(spoilersBlock);
            }
        }
        spoilerTitle.classList.toggle('_active');
        _slideToggle(spoilerTitle.nextElementSibling, 500);
    }
    e.preventDefault();
}

function hideSpoilerBody(spoilersBlock) {
    const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
    if (spoilerActiveTitle) {
        spoilerActiveTitle.classList.remove('_active');
        _slideUp(spoilerActiveTitle.nextElementSibling, 500);
    }
}

let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {

        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    };
};

let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        //console.log(target);
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.hidden = false;
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    };
};

let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}


function _removeClasses(elementsList, className) {
    for (let i = 0; i < elementsList.length; i++) {
        elementsList[i].classList.remove(className);
    }
}

/* -Меню БУРГЕР------------------------------------------------------------------------ */

function menuBurger() {
    document.querySelector('.menu__body').classList.toggle("_active");
    document.querySelector('.icon-menu').classList.toggle("_active");
    document.body.classList.toggle('_lock');
}



/* -ОПРЕДЛЕНИЕ МОБИЛЬНОГО УСТРОЙСТВА------------------------------------------------------------------------ */

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};