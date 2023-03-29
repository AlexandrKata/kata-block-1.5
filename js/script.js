const show = document.querySelector('.link-visible'),
    hide = document.querySelector('.link-hide'),
    container = document.querySelector('.container');

function showBrand() {
    show.addEventListener('click', (e) => {
        e.preventDefault();
        show.classList.add('hidden');
        hide.classList.remove('hidden');
        container.classList.add('container--show');
    })
}

function hideBrand() {
    hide.addEventListener('click', (e) => {
        e.preventDefault();
        hide.classList.add('hidden');
        show.classList.remove('hidden');
        container.classList.remove('container--show');
    })
}

showBrand();
hideBrand();

//swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});