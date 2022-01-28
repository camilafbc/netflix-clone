
// Slideshow

// var quant = document.querySelectorAll('.slider-active');

// var atual = 0;

// var imagem = document.getElementsByClassName('filme-principal');

// var next = document.getElementById('next');
// var voltar = document.getElementById('voltar');

// for(let i=0; 1 < quant.length; i++){

// }

// Carrrossel

// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel)

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    btnPrev: '.prev', 
    btnNext: '.next',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})