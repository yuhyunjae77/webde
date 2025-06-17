let index = 0;
let inta;

function slide() {
    const slider = document.querySelector('.slider');
    if(index < 2) {
        index++;
    } else {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * 1200}px)`;
}
inta = setInterval(slide, 3000);

function popup_open() {
    const modal = document.getElementById('modal_box');
    modal.style.display = 'block';
}
function popup_close() {
    const modal = document.getElementById('modal_box');
    modal.style.display = 'none';
}

document.querySelectorAll('.menu li').forEach(item => {
    ['mouseenter', 'mouseleave'].forEach(event =>
        item.addEventListener(event, () => {
            item.querySelector('.submenu').style.height = event === 'mouseenter' ? '400%' : '0%';
        })
    );
});