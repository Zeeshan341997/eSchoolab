$(document).ready(function(){
    $(".toggle").on('click', function(){
        $(this).toggleClass("close");
        $(".nav-toggle").toggleClass("open");
    });
});