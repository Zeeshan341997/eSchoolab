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
});