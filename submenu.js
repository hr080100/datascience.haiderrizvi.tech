const subnavSlide = () => {
    const burger = document.querySelector('.burger');
    const topic = document.querySelector('.topic');
    const author = document.querySelector('.author');
    const submenu = document.querySelector('.submenu');

    topic.addEventListener('click', () => {
        submenu.classList.toggle('submenu-active');
        author.classList.toggle('author-active');
        burger.addEventListener('click', () => {
            submenu.classList.toggle('submenu-active');
        });
    });
}

subnavSlide();