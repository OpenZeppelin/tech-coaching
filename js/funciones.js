/*
    $('.modulo-colgada').click(function(){
       $(this).toggleClass('card-detalle');
    });

    $('.modulo-colgada').click(function(){
       $('.card-detalle').fadeIn(); 
    });
    
    $('.card-detalle').click(function(){
        $('.card-detalle').fadeOut();
    })
*/

$(document).ready(function(){


    /* POP-UPS COLGADAs */

    $('.modulo-colgada').click(function(){
       $(this).toggleClass('card-detalle');
    });

    $('.modulo-colgada').click(function(){
       $('.card-detalle').animate({'opacity':0},0);
       $('.card-detalle').animate({'opacity':1},500); 
    });
    
    $('.cerrar').click(function(e){
        e.stopPropagation();
      $('.card-detalle').animate({'opacity':0},500,function(){
        $('.card-detalle').animate({'opacity':1},0);
        $('.modulo-colgada').removeClass('card-detalle');
      });
      
    })

    /* DEVOLUCIÓN DOCENTE */

    $('.input-devolución').click(function(e){
        e.stopPropagation();      
    })


    /* STARS */

    $('.notas img').click(function(e){
        e.stopPropagation();
        var _i = $(this).index();
        $(this).parent().find('img').each(function(){
            if($(this).index()<=_i){
                $(this).addClass('activa');
            } else{
                $(this).removeClass('activa');
            }
        })
    });


    /* SUBIR NUEVA COLGADA */
    
    $('.modal').hide();

    $('.subir-archivos').click(function(){
       $('.modal').fadeIn(); 
    });
    $('.cerrar').click(function(){
        $('.modal').fadeOut();
    })

    $('.box-subida').click(function(){
       $(this).toggleClass('archivo-subido');
    });

    /* BIBLIOGRAFIA */
    
    $('.modal').hide();

    $('.box-apunte').click(function(){
       $('.modal').fadeIn(); 
    });
    $('.apunte-cerrar').click(function(){
        $('.modal').fadeOut();
    })


});

