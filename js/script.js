// Side Menu Bar

$(document).ready(function(){
    $(".toggle").on('click', function(){
        $(this).toggleClass("close");
        $(".nav-toggle").toggleClass("open");

        if($(".toggle").hasClass(".close")){
            anime({
                targets: '.toggle.close span',
                duration: 1500,
                rotate: [0, 45],
                delay:500
            });
            
        }
        else{
            anime({
                targets: '.toggle img',
                delay: 500,
                rotate: [60,0]
            });
        }
    });

// Scroll Indicator

$(".indicator1").click(function() {
    $('html, body').animate({
        scrollTop: $(".practicals").offset().top
    }, 1000);
});
$(".indicator2").click(function() {
    $('html, body').animate({
        scrollTop: $(".glossary").offset().top
    }, 1000);
});
$(".indicator3").click(function() {
    $('html, body').animate({
        scrollTop: $(".labtools").offset().top
    }, 1000);
});
$(".indicator4").click(function() {
    $('html, body').animate({
        scrollTop: $(".footer").offset().top
    }, 1000);
});



// Practicals Carousel

    var $slider = $('.slider');
    var $progressBar = $('.progress');
    $progressBar.css('background-size','30% 100%')
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount+-1) ) * 100;
      $progressBar
        .css('background-size', calc + '% 100%')
    });
    
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    });
    

    $(".welcomeHead, .wel-head").lettering();
    
    anime({
        targets: '.welcomeHead',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start:500})
    });
    anime({
        targets: '.wel-head',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start:1500})
    });
});


// Practical Page Box Hover Background Color Change Animation


let subBox = document.querySelectorAll('.line1 div');
let bg = document.querySelector('.bodyMain');
let bioHead = document.querySelector('.bioHead');
let phyHead = document.querySelector('.phyHead');
let cheHead = document.querySelector('.cheHead');
let bioCard = document.querySelectorAll('.menu1');
let phyCard = document.querySelectorAll('.menu2');
let cheCard = document.querySelectorAll('.menu3');
let bioIcons = document.querySelector('.bioIcons');
let phyIcons = document.querySelector('.phyIcons');
let cheIcons = document.querySelector('.cheIcons');


subBox.forEach(element => {
    element.addEventListener('mouseenter', function(event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;

    });
    element.addEventListener('mouseleave', function(event){
        bg.style.backgroundColor ='white';

    });
});

// Practical Page Heading Hover Animation

bioCard.forEach(element => {
    element.addEventListener('mouseenter', function(event){
        bioHead.style.opacity = 1;
        bioHead.style.top = '35%';
        bioIcons.style.opacity = 1;
        bioIcons.style.top = '0';
    });
    element.addEventListener('mouseleave', function(event){
        bioHead.style.opacity = 0;
        bioHead.style.top = '5%';
        bioIcons.style.opacity = 0;
        bioIcons.style.top = '95%';

    });
});
phyCard.forEach(element => {
    element.addEventListener('mouseenter', function(event){
        phyHead.style.opacity = 1;
        phyHead.style.top = '35%';
        phyIcons.style.opacity = 1;
        phyIcons.style.top = '0';
    });
    element.addEventListener('mouseleave', function(event){
        phyHead.style.opacity = 0;
        phyHead.style.top = '5%';
        phyIcons.style.opacity = 0;
        phyIcons.style.top = '95%';

    });
});
cheCard.forEach(element => {
    element.addEventListener('mouseenter', function(event){
        cheHead.style.opacity = 1;
        cheHead.style.top = '40%';
        cheHead.style.left = '-60%';
        cheIcons.style.opacity = 1;
        cheIcons.style.top = '0';
    });
    element.addEventListener('mouseleave', function(event){
        cheHead.style.opacity = 0;
        cheHead.style.top = '5%';
        cheIcons.style.opacity = 0;
        cheIcons.style.top = '95%';

    });
});
// Practical Page Box Tilt Animation

VanillaTilt.init(document.querySelectorAll(".line1 div"), {
    max: 30,
    speed: 300,
    glare: true,
    "max-glare":1, 
});