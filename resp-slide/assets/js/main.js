$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});

// for slider
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

$(document).bind('mobileinit',function(){
    $.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
});

$( document ).ready(function(){
  $('#myCarousel').carousel({
      interval: 4000
    })

    $('.carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      if ( $(window).width() < 768){
        for (var i=0;i<0;i++) {
          next=next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
        }
      }
      if( $(window).width() > 768 ){
          for (var i=0;i<1;i++) {
          next=next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
        }
      }
    });
});

$(document).bind('mobileinit',function(){
    $.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
});



$( document ).ready(function(){
    var limit=null;
    $('#right').click(function(e){
        // console.log(listContent.length);
        var elem = $('.anchor');
        var elem1 = elem.first()[0].id;
        var elem2 = elem.last()[0].id;
        if(elem1<listContent.length && (elem2 == listContent.length || elem2 < (listContent.length-1))){
            console.log(elem1,elem2);
            var parent = $('.anchor');
            for(var i=parseInt(elem1),j=0;i<parseInt(elem2)+1;i++,j++){
                if(listContent[i+limit]){
                    $(parent)[j].id=i+limit;
                    parent[j].href=listContent[i+limit].link;
                    $(parent[j]).find('img')[0].src="images/"+listContent[i+limit].imgSrc;
                }else{
                    $(parent)[j].id=i+limit;
                    $(parent[j]).addClass('hide');
                }
            }
        }
    });

    $('#left').click(function(e){
        var elem = $('.anchor');
        var elem1 = elem.first()[0].id;
        if(elem1 == 0){
            alert('cannot go back');
        }else{
            var elem2 = elem.last()[0].id;
            var parent = $('.anchor');
            for(var i=parseInt(elem1),j=0;i<parseInt(elem2)+1;i++,j++){
                $(parent)[j].id=i-limit;
                $(parent[j]).removeClass('hide');
                parent[j].href=listContent[i-limit].link;
                $(parent[j]).find('img')[0].src="images/"+listContent[i-limit].imgSrc;
            }
        }
    });

    if($(window).width()<768){
        limit=2;
        for(var i=0;i<2;i++){
            $('.content-inside').append('<a href="'+listContent[i].link+'" class="anchor" id="'+i+'"><img src="images/'+listContent[i].imgSrc+'" alt="img" class="images"/></a>');
        }
    }else if($(window).width()<992){
        limit=3;
        for(var i=0;i<3;i++){
            $('.content-inside').append('<a href="'+listContent[i].link+'" class="anchor" id="'+i+'"><img src="images/'+listContent[i].imgSrc+'" alt="img" class="images"/></a>');
        }
    }else{
        limit=6;
        for(var i=0;i<6;i++){
            $('.content-inside').append('<a href="'+listContent[i].link+'" class="anchor" id="'+i+'"><img src="images/'+listContent[i].imgSrc+'" alt="img" class="images"/></a>');
        }
    }

    // $('.carousel-inner').each(function(){
    //     allElements.push($('.carousel-inner').children);   
    // });
    // if($(window).width()<700){
    //     $('.carousel').
    // }
    // $('.carousel .item').each(function(){
    //   var next = $(this).next();
    //   if (!next.length) {
    //     next = $(this).siblings(':first');
    //   }
    //   next.children(':first-child').clone().appendTo($(this));
    //   console.log(next.children(':first-child').clone().appendTo($(this)));
    //   if ( $(window).width() < 768){
    //     for (var i=0;i<1;i++) {
    //       next=next.next();
    //       if (!next.length) {
    //         next = $(this).siblings(':first');
    //       }
    //       next.children(':first-child').clone().appendTo($(this));
    //     }
    //   }
    //   if( $(window).width() > 768 ){
    //       for (var i=0;i<1;i++) {
    //       next=next.next();
    //       if (!next.length) {
    //         next = $(this).siblings(':first');
    //       }
    //       next.children(':first-child').clone().appendTo($(this));
    //     }
    //   }
    // });
});
