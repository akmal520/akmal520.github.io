$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            // $(".goTop").fadeIn();
        }
        else {
            $(".navbar").removeClass("sticky");
            // $(".goTop").fadeOut();
        }
        // if(this.scrollY > 330) {
        //     $('.gw').fadeIn();
        // } else {
        //     $('.gw').fadeOut();
        // }
    });

    // $(".goTop").click(function(){
    //     var btn = $(this).attr('button');
    //     $('html , body').animate({
    //         scrollTop: btn.scrollY
    //     });
    // });

    $(".menu-toggler").click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".skrol").on('click', function(e){
        
        // ambil href dari class skrol
        var href = $(this).attr("href");
        
        // ambil isi element yang bersangkutan
        var tujuan = $(href);

        $('html , body').animate({

            scrollTop: tujuan.offset().top

        },1200);
        
        e.preventDefault();

    });
});