document.addEventListener("DOMContentLoaded", function () {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide = document.querySelector('.slide');
    let items = document.querySelectorAll('.item');

    next.addEventListener('click', function () {
        let firstItem = slide.querySelector('.item');
        slide.appendChild(firstItem);
    });

    prev.addEventListener('click', function () {
        let lastItem = slide.querySelectorAll('.item')[items.length - 1];
        slide.prepend(lastItem);
    });
});