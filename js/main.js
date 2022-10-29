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
        autoplaySpeed: 2000,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM7SUFFcEQsQ0FBQyxDQUFDLHlDQUF5QyxHQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0UsQ0FBQyxDQUFDLG9DQUFvQyxHQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xHLENBQUM7QUFFRCxnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWLFNBQVMsU0FBUyxDQUFDLEVBQVU7SUFDekIsQ0FBQyxDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELFVBQVU7QUFDVixTQUFTLFVBQVU7SUFDZixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxvREFBb0Q7QUFDcEQsU0FBUyxXQUFXLENBQUMsRUFBVTtJQUMzQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAvL9CX0LDQv9GD0YHQuiDRhNGD0L3QutGG0LjQuCDQv9GA0Lgg0L/RgNC+0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0YtcclxuICAgIHN0YXJ0UXVlc3Rpb24oKTtcclxuXHJcbiAgICAvL9Ce0YLQutGA0YvRgtC40LUg0LfQsNC60YDRi9GC0LjQtSDQvNC10L3RjlxyXG4gICAgJCgnLmpzLW9wZW4tZGVza3RvcC1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgb3BlbkNsb3NlTWVudSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL9CY0LfQvNC40L3QtdC90LjQtSDQstC+0L/RgNC+0YHQsFxyXG4gICAgJCgnLmpzLXNlbGVjdC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHNlbGVjdFF1ZXN0aW9uKCQodGhpcykuZGF0YSgnc2VsZWN0LXF1ZXN0aW9uJykpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL9CX0LDQutGA0YvRgtC40LUg0L7RgtC60YDRi9GC0LjQtSDQstC+0L/RgNC+0YHQsCDQsiBmYXFcclxuICAgICQoJy5qcy1jbG9zZS1vcGVuLXF1ZXN0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy/QnNC+0LTQsNC70YzQvdGL0LUg0L7QutC90LBcclxuICAgIC8v0J7RgtC60YDRi9GC0LjQtVxyXG4gICAgJCgnLmpzLW9wZW4tbW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmKCQoJy5qcy1vcGVuLWRlc2t0b3AtbWVudScpLmhhc0NsYXNzKCdyZXZlcnNlJykpe1xyXG4gICAgICAgICAgICBvcGVuQ2xvc2VNZW51KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGVuTW9kYWwoJCh0aGlzKS5kYXRhKCdtb2RhbCcpKTtcclxuICAgIH0pXHJcbiAgICAvL9CX0LDQutGA0YvRgtC40LVcclxuICAgICQoJy5qcy1jbG9zZS1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgfSlcclxuICAgICQoJy5tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKXtcclxuICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLy/Qn9C10YDQtdC+0YLQutGA0YvRgtC40LVcclxuICAgICQoJy5qcy1yZU9wZW4tbW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHJlT3Blbk1vZGFsKCQodGhpcykuZGF0YSgnbW9kYWwnKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8v0KHQu9Cw0LnQtNC10YDRi1xyXG4gICAgLy/QndCw0YfQsNC70YzQvdGL0Lkg0YHQu9Cw0LnQtNC10YBcclxuICAgICQoJy5zbGlkZXJNYWluX19jb250ZW50Jykuc2xpY2soe1xyXG4gICAgICAgIG5leHRBcnJvdzogJy5zbGlkZXJNYWluX19yaWdodEFycm93JyxcclxuICAgICAgICBwcmV2QXJyb3c6ICcuc2xpZGVyTWFpbl9fbGVmdEFycm93JyxcclxuICAgICAgICBjdXN0b21QYWdpbmcgOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwic2xpZGVyX19kb3RzXCI+PC9kaXY+JztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5NjEsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAvL9Ch0LrRgNC+0LvQuyDRgSDQv9Cw0YDRgtC10YDQsNC80LhcclxuICAgICQoJy5wYXJ0bmVyc19faW5uZXInKS5zbGljayh7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgLy/QodC60YDQvtC70Lsg0LrQvdC+0L/QvtC6INCyINCy0L7Qv9GA0L7RgdCw0YVcclxuICAgICQoJy5xdWVzdGlvbnNfX2J1dHRvbnMnKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBuZXh0QXJyb3c6ICcucXVlc3Rpb25zX19yaWdodEFycm93JyxcclxuICAgICAgICBwcmV2QXJyb3c6ICcucXVlc3Rpb25zX19sZWZ0QXJyb3cnLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5NjEsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSlcclxuICAgIC8v0J7RgtC30YvQstGLXHJcbiAgICAkKCcucmV2aWV3c19fYm90dG9tJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgbmV4dEFycm93OiAnLnJldmlld3NfX3JpZ2h0QXJyb3cnLFxyXG4gICAgICAgIHByZXZBcnJvdzogJy5yZXZpZXdzX19sZWZ0QXJyb3cnLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk2MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvL9CQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjFxyXG4gICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTYwKXtcclxuICAgICAgICBsZXQgaTpudW1iZXIgPSAxO1xyXG4gICAgICAgICQoJy5yZXZpZXdfX2JveCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoaSA8PSAzKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy/QpNGD0L3QutGG0LjQuFxyXG4vL9Ce0YLQutGA0YvRgtC40LUt0LfQsNC60YDRgtGL0LjQtSDQvNC10L3RjtGI0LrQuFxyXG5mdW5jdGlvbiBvcGVuQ2xvc2VNZW51KCk6dm9pZHtcclxuICAgICQoJy5qcy1vcGVuLWRlc2t0b3AtbWVudScpLnRvZ2dsZUNsYXNzKCdyZXZlcnNlJyk7XHJcbiAgICAkKCcuaGVhZGVyX19tZW51Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbm9TY3JvbGwnKTtcclxufVxyXG4vL9Cf0YDQvtGB0LzQvtGC0YAg0YLQvtCz0L4g0LrQsNC60L7QuSDQstC+0L/RgNC+0YEg0L3Rg9C20L3QviDQv9C+0LrQsNC30LDRgtGMINC/0YDQuCDQt9Cw0L/Rg9GB0LrQtSDRgdCw0LnRgtCwXHJcbmZ1bmN0aW9uIHN0YXJ0UXVlc3Rpb24oKTogdm9pZHtcclxuICAgIGxldCBwYWdlOiBudW1iZXIgPSAkKCcuanMtc2VsZWN0LWJ1dHRvbi5zZWxlY3QnKS5kYXRhKCdzZWxlY3QtcXVlc3Rpb24nKTtcclxuICAgICQoJy5xdWVzdGlvbnNfX3dyYXBwZXJbZGF0YS1xdWVzdGlvbj0nK3BhZ2UrJ10nKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG59XHJcblxyXG4vL9CY0LfQvNC10L3QuNC1INCy0YvQsdC+0YDQsCDQstC+0L/RgNC+0YHQsFxyXG5mdW5jdGlvbiBzZWxlY3RRdWVzdGlvbihwYWdlU2VsZWN0OiBudW1iZXIpOiB2b2lke1xyXG4gICAgbGV0IHBhZ2U6IG51bWJlciA9ICQoJy5qcy1zZWxlY3QtYnV0dG9uLnNlbGVjdCcpLmRhdGEoJ3NlbGVjdC1xdWVzdGlvbicpO1xyXG4gICAgJCgnLnF1ZXN0aW9uc19fd3JhcHBlcltkYXRhLXF1ZXN0aW9uPScrcGFnZSsnXScpLmhpZGUoKTtcclxuICAgICQoJy5qcy1zZWxlY3QtYnV0dG9uLnNlbGVjdCcpLnJlbW92ZUNsYXNzKCdzZWxlY3QnKTtcclxuXHJcbiAgICAkKCcuanMtc2VsZWN0LWJ1dHRvbltkYXRhLXNlbGVjdC1xdWVzdGlvbj0nK3BhZ2VTZWxlY3QrJ10nKS5hZGRDbGFzcygnc2VsZWN0Jyk7XHJcbiAgICAkKCcucXVlc3Rpb25zX193cmFwcGVyW2RhdGEtcXVlc3Rpb249JytwYWdlU2VsZWN0KyddJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKS5oaWRlKCkuZmFkZUluKCk7XHJcbn1cclxuXHJcbi8v0JzQvtC00LDQu9GM0L3Ri9C1INC+0LrQvdCwXHJcbi8v0J7RgtC60YDRi9GC0LjQtVxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoaWQ6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAkKCcubW9kYWwjJytpZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLm1vZGFsX19iYWNrZ3JvdW5kJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdub1Njcm9sbCcpO1xyXG59XHJcblxyXG4vL9CX0LDQutGA0YvRgtC40LVcclxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpOnZvaWQge1xyXG4gICAgJCgnLm1vZGFsLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5tb2RhbF9fYmFja2dyb3VuZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm9TY3JvbGwnKTtcclxufVxyXG5cclxuLy/Ql9Cw0LrRgNGL0YLQuNC1INC+0LTQvdC+0LPQviDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCDQuCDQvtGC0LrRgNGL0YLQuNC1INC00YDRg9Cz0L7Qs9C+XHJcbmZ1bmN0aW9uIHJlT3Blbk1vZGFsKGlkOiBzdHJpbmcpOnZvaWQge1xyXG4gICAgJCgnLm1vZGFsLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5tb2RhbCMnK2lkKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0iXX0=
