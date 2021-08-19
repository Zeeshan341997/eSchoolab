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


let circle = document.querySelectorAll('.line1 div');
let bg = document.querySelector('.bodyMain');

circle.forEach(element => {
    element.addEventListener('mouseenter', function(event){
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    });
    element.addEventListener('mouseleave', function(event){
        bg.style.backgroundColor ='white';
    });
});

// Practical Page Box Tilt Animation

VanillaTilt.init(document.querySelectorAll(".line1 div"), {
    max: 15,
    speed: 300,
    glare: true,
    "max-glare":1, 
});