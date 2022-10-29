$(document).ready(function () {
    //Запуск функции при прогрузке страницы
    startQuestion();
    //Открытие закрытие меню
    $('.js-open-desktop-menu').on('click', function (e) {
        e.preventDefault();
        openCloseMenu();
    });
    //Изминение вопроса
    $('.js-select-button').on('click', function (e) {
        e.preventDefault();
        selectQuestion($(this).data('select-question'));
    });
    //Закрытие открытие вопроса в faq
    $('.js-close-open-question').on('click', function () {
        $(this).toggleClass('select');
        $(this).parent().next().slideToggle();
    });
    //Модальные окна
    //Открытие
    $('.js-open-modal').on('click', function (e) {
        e.preventDefault();
        if ($('.js-open-desktop-menu').hasClass('reverse')) {
            openCloseMenu();
        }
        openModal($(this).data('modal'));
    });
    //Закрытие
    $('.js-close-modal').on('click', function (e) {
        e.preventDefault();
        closeModal();
    });
    $('.modal').on('click', function (e) {
        e.preventDefault();
        if (e.target === document.querySelector('.modal')) {
            closeModal();
        }
    });
    //Переоткрытие
    $('.js-reOpen-modal').on('click', function (e) {
        e.preventDefault();
        reOpenModal($(this).data('modal'));
    });
    //Слайдеры
    //Начальный слайдер
    $('.sliderMain__content').slick({
        nextArrow: '.sliderMain__rightArrow',
        prevArrow: '.sliderMain__leftArrow',
        customPaging: function (slider, i) {
            return '<div class="slider__dots"></div>';
        },
        dots: true,
        autoplay: true,
        speed: 650,
        autoplaySpeed: 5000,
        slidesPerRow: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    dots: false
                },
            }
        ]
    });
    //Скролл с партерами
    $('.partners__inner').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        variableWidth: true,
        infinite: false,
    });
    //Скролл кнопок в вопросах
    $('.questions__buttons').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        nextArrow: '.questions__rightArrow',
        prevArrow: '.questions__leftArrow',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 961,
                settings: 'unslick',
            }
        ]
    });
    //Отзывы
    $('.reviews__bottom').slick({
        dots: false,
        infinite: false,
        autoplay: false,
        nextArrow: '.reviews__rightArrow',
        prevArrow: '.reviews__leftArrow',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 961,
                settings: 'unslick',
            }
        ]
    });
    //Адаптивность
    if ($(window).width() <= 960) {
        let i = 1;
        $('.review__box').each(function () {
            if (i <= 3) {
                $(this).show();
            }
            i++;
        });
    }
});
//Функции
//Открытие-закртыие менюшки
function openCloseMenu() {
    $('.js-open-desktop-menu').toggleClass('reverse');
    $('.header__menu').slideToggle();
    $('body').toggleClass('noScroll');
}
//Просмотр того какой вопрос нужно показать при запуске сайта
function startQuestion() {
    let page = $('.js-select-button.select').data('select-question');
    $('.questions__wrapper[data-question=' + page + ']').css('display', 'flex');
}
//Измение выбора вопроса
function selectQuestion(pageSelect) {
    let page = $('.js-select-button.select').data('select-question');
    $('.questions__wrapper[data-question=' + page + ']').hide();
    $('.js-select-button.select').removeClass('select');
    $('.js-select-button[data-select-question=' + pageSelect + ']').addClass('select');
    $('.questions__wrapper[data-question=' + pageSelect + ']').css('display', 'flex').hide().fadeIn();
}
//Модальные окна
//Открытие
function openModal(id) {
    $('.modal#' + id).addClass('active');
    $('.modal__background').addClass('active');
    $('body').addClass('noScroll');
}
//Закрытие
function closeModal() {
    $('.modal.active').removeClass('active');
    $('.modal__background').removeClass('active');
    $('body').removeClass('noScroll');
}
//Закрытие одного модального окна и открытие другого
function reOpenModal(id) {
    $('.modal.active').removeClass('active');
    $('.modal#' + id).addClass('active');
}
