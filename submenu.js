const subnavSlide = () => {
    const burger = document.querySelector('.burger');
    const topic = document.querySelector('.topic');
    const submenu = document.querySelector('.submenu');

    topic.addEventListener('click', () => {
        submenu.classList.toggle('submenu-active');
        burger.addEventListener('click', () => {
            submenu.classList.toggle('submenu-active');
        });
    });
}

subnavSlide();