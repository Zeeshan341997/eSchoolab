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
        }else{
            anime({
                targets: '.toggle span',
                duration: 1500,
                rotate: [45, 0],
                delay:500
            });
        }
    });

    const signInBtn = document.querySelector("#sign-in-btn");
    const signUpBtn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".main-container");

    signUpBtn.addEventListener('click', () => {
        container.classList.add("sign-up-mode");
    });

    signInBtn.addEventListener('click', () => {
        container.classList.remove("sign-up-mode");
    });

    $(".welcomeScreen, .welcomeintro").lettering();

    anime({
        targets: '.home-section .welcomeOverlay',
        translateX: 1300,
        delay:1000,
        duration: 1500,
        easing: 'easeInSine'
    });
    anime({
        targets: '.home-section .welcomeImg img',
        opacity: 1,
        delay:1500,
        duration: 1500,
        easing: 'easeInSine'
    });
    anime({
        targets: '.welcomeintro',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start:3000})
    });
    anime({
        targets: '.welcomeScreen',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start:4500})
    });
    anime({
        targets: '.welcomeScreen span.char4, .welcomeScreen span.char6',
        keyframes:[
            {translateY: 100, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 8000,
    });
    anime({
        targets: '.welcomeScreen span.char2, .welcomeScreen span.char3, .welcomeScreen span.char5',
        keyframes:[
            {translateY: -100, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 8000,
    });
});



