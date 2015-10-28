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

    $('#locationList').click(function(e){
        if($('#ez_categories_tab').hasClass('opened')){
            $('#ez_categories_tab').slideUp(100);
            $('#ez_location_tab').slideDown(100);
            $('#ez_location_tab').addClass('opened').removeClass('list-hidden');
            $('#ez_categories_tab').addClass('list-hidden').removeClass('opened');
        }else{
            $('#ez_location_tab').slideToggle(100);
            $('#ez_location_tab').addClass('opened').removeClass('list-hidden');
            $('#ez_categories_tab').addClass('list-hidden').removeClass('opened');
        }
    });

    $('#categoryList').click(function(e){
        if($('#ez_location_tab').hasClass('opened')){
            $('#ez_categories_tab').slideDown(100);
            $('#ez_location_tab').slideUp(100);
            $('#ez_categories_tab').addClass('opened').removeClass('list-hidden');
            $('#ez_location_tab').addClass('list-hidden').removeClass('opened');
        }else{
            $('#ez_categories_tab').slideToggle(100);
            $('#ez_categories_tab').addClass('opened').removeClass('list-hidden');
            $('#ez_location_tab').addClass('list-hidden').removeClass('opened');
        }
    });

    $('#Beverages').click(function(e){
        showList('Beverages','Fruits','Diwali','Beverages');
    });

    $('#Fruits').click(function(e){
        showList('Fruits','Beverages', 'Diwali','Fruits');
    });

    $('#Diwali').click(function(e){
        showList('Diwali','Beverages','Fruits', 'Diwali');
    });

    function showList(id, hid1, hid2, list){
        if($('#'+hid1).hasClass('list-open') || $('#'+hid2).hasClass('list-open')){
            $('#'+hid1+'List').slideUp(500);
            $('#'+hid1).removeClass('list-open');

            $('#'+hid2+'List').slideUp(500);
            $('#'+hid2).removeClass('list-open');

            $('#'+id+'List').slideDown(500);
            $('#'+id).addClass('list-open');
        }else{
            $('#'+id).addClass('list-open');
            $('#'+list+'List').slideToggle(500);
        }
    }
});
