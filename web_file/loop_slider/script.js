let index = 0;
let inta = 0;

function slide() {
    const slider = document.querySelector('.slider');

    if(index < 3) {
        slider.style.transition = 'transform.4s';
        clearInterval(inta);
        inta_ory();
        index++;
    } else {
        clearInterval(inta);
        inta_reset()
        index = 0;
        slider.style.transition = 'none'
    }
    slider.style.transform = `translateX(-${1280 * index}px)`;
}
inta = setInterval(slide, 3000);

function inta_reset() {
    clearInterval(inta);
    inta = setInterval(slide, 1);
}
function inta_ory() {
    clearInterval(inta);
    inta = setInterval(slide, 3000);
}