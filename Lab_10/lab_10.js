let F1 = true;
let F2 = true;

let scena = document.querySelector('#scena');
let stick = document.querySelector('#stick');
let head = document.querySelector('#top');
let bird = document.querySelector('#bird');
let rabbit = document.querySelector('#rabbit');
let trap = document.querySelector('#trap');
let before = document.querySelector('#before');
let after = document.querySelector('#after');


head.addEventListener('mousedown', event => {
    stick.style.marginTop = '5vh';});
head.addEventListener('mouseup', event => {
    stick.style.marginTop = '2vh';});


scenaUp = () => {
    scena.style.transition = '1s';
    scena.style.bottom = '100%';
}

turnUpLight = () => {
    if (F1) {
        trap.style.opacity = '0.5';
        before.style.opacity = '1';
        after.style.display = 'block';
        F1 = false;} 
    else {
        trap.style.opacity = '0';
        before.style.opacity = '0';
        after.style.display = 'none';
        F1 = true;}

}
doMagic = () => {
    rabbit.style.transition = '0.5s';
    bird.style.transition = '0.5s';

    if (F2) {
        rabbit.style.bottom = '10vh';
        setTimeout(() => bird.style.bottom = '25vh', 500);
        F2 = false;} 
    else {
        bird.style.bottom = '10vh';
        setTimeout(() => rabbit.style.bottom = '25vh', 500);
        F2 = true;}

    setTimeout(() => {rabbit.style.transition = '0s'; bird.style.transition = '0s';}, 1000);

}
