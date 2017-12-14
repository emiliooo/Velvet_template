$( document ).ready(function() {
    
        $( ".hamburger" ).click(function() {
        if(  $(".menu_list").hasClass("expand") ) {
            $(".menu_list").hide(500);
            $('.menu_list').removeClass('expand')
        }else{
            $(".menu_list").show(500);
            $('.menu_list').addClass('expand')
        }
        });


    });