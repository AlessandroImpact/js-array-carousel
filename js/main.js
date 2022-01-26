/*DEVO DEFINIRE UN ARRAY PER LE FOTO */

const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

const name = [
    'svezia',
    'italia',
    'danimarca',
    'russia',
    'cina',

]

let slides = '';
let bullets = '';

for (let i=0 ; i< images.length; i++){

    slides += ` <div class="item ">
                    <img src="${images[i]}">
                </div>` ;      
                
    
    bullets += `<div class="circle"></div> `

}

/*creo le slide */

let itemsContainer = document.querySelector('.items-container');

itemsContainer.innerHTML = slides;

/*creo i bullets */

let circleContainer = document.querySelector('.circle-container');

circleContainer.innerHTML = bullets;

/*inizializzo variabile che riferisce alla prima slide attiva */

let currentSlide = 0;

let items = document.getElementsByClassName('item'); /*questo è un array */

items[currentSlide].classList.add('active');

let circles = document.getElementsByClassName('circle');

circles[currentSlide].classList.add('active');

