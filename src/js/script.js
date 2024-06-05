window.addEventListener('DOMContentLoaded', () => {
    const header__list = document.querySelector('.header__list'),
    headerItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header__list.classList.toggle('header__list_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header__list.classList.toggle('header__list_active');
        })
    })
})
