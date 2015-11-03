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
            var parent = $('.anchor');
            for(var i=parseInt(elem1),j=0;i<parseInt(elem2)+1;i++,j++){
                if(listContent[i+limit]){
                    $(parent)[j].id=i+limit;
                    parent[j].href=listContent[i+limit].link;
                    $(parent[j]).find('.item-price')[0].innerHTML=listContent[i+limit].price;
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
                $(parent[j]).find('.item-price')[0].innerHTML=listContent[i-limit].price;
            }
        }
    });

    if($(window).width()<768){
        limit=2;
        for(var i=0;i<2;i++){
            // $('.content-inside').append('<a href="'+listContent[i].link+'" class="anchor" id="'+i+'"><img src="images/'+listContent[i].imgSrc+'" alt="img" class="images"/></a>');
            // $('.content-inside').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 anchor" id="'+i+'"><div class="col-xs-6 col-sm-4 col-md-11 col-lg-12 product_block"><div class="product_img"></div><div class="caption"><h5>Milton Casserole block</h5><div class="price-container"><div class="inner-price-container clear"><div class="cart-left-cont pull-left"><span class="btn btn-danger"><i class="fa fa-minus"></i></span></div><div class="cart-right-cont pull-right"><span class="btn btn-success"><i class="fa fa-plus"></i></span></div></div><div class="col-xs-6 col-sm-4 col-md-11 col-lg-12 p-init price_qan_block"><div class="tile-skus"><div class="tile-sku-size"><div class="tile-sku-size-info-selected triangle-right"><span>1</span><span>Box</span></div></div></div><div class="tile-sku-price"><div class="tile-sku-ourprice"><i class="fa fa-inr"></i><span class="item-price">'+listContent[i].price+'</span></div><del class="item-mrp"><i class="fa fa-inr"></i><span class="item-price">471</span></del></div></div></div></div></div></div>');
            $('.content-inside').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 anchor" id="'+i+'"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product_block"><div class="product_img"></div><div class="caption"><h5>'+listContent[i].name+'</h5><div class="price-container"><div class="inner-price-container clear"><div class="cart-left-cont pull-left"><span class="btn btn-danger"><i class="fa fa-minus"></i></span></div><div class="cart-right-cont pull-right"><span class="btn btn-success"><i class="fa fa-plus"></i></span></div></div><div class="price_qan_block clear"><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-init tile-skus"><div class="tile-sku-size"><div class="tile-sku-size-info-selected triangle-right"><span>1</span><span>Box</span></div></div></div><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-init tile-sku-price"><div class="tile-sku-ourprice"><i class="fa fa-inr"></i><span class="item-price">'+listContent[i].price+'</span></div><del class="item-mrp"><i class="fa fa-inr"></i><span>471</span></del></div></div></div></div></div></div>');
        }
    }else if($(window).width()<992){
        limit=3;
        for(var i=0;i<3;i++){
            // $('.content-inside').append('<a href="'+listContent[i].link+'" class="anchor" id="'+i+'"><img src="images/'+listContent[i].imgSrc+'" alt="img" class="images"/></a>');
            // $('.content-inside').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 anchor" id="'+i+'"><div class="col-xs-6 col-sm-4 col-md-11 col-lg-12 product_block"><div class="product_img"></div><div class="caption"><h5>Milton Casserole block</h5><div class="price-container"><div class="inner-price-container clear"><div class="cart-left-cont pull-left"><span class="btn btn-danger"><i class="fa fa-minus"></i></span></div><div class="cart-right-cont pull-right"><span class="btn btn-success"><i class="fa fa-plus"></i></span></div></div><div class="col-xs-6 col-sm-4 col-md-11 col-lg-12 p-init price_qan_block"><div class="tile-skus"><div class="tile-sku-size"><div class="tile-sku-size-info-selected triangle-right"><span>1</span><span>Box</span></div></div></div><div class="tile-sku-price"><div class="tile-sku-ourprice"><i class="fa fa-inr"></i><span class="item-price">'+listContent[i].price+'</span></div><del class="item-mrp"><i class="fa fa-inr"></i><span class="item-price">471</span></del></div></div></div></div></div></div>');
            $('.content-inside').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 anchor" id="'+i+'"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product_block"><div class="product_img"></div><div class="caption"><h5>'+listContent[i].name+'</h5><div class="price-container"><div class="inner-price-container clear"><div class="cart-left-cont pull-left"><span class="btn btn-danger"><i class="fa fa-minus"></i></span></div><div class="cart-right-cont pull-right"><span class="btn btn-success"><i class="fa fa-plus"></i></span></div></div><div class="price_qan_block clear"><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-init tile-skus"><div class="tile-sku-size"><div class="tile-sku-size-info-selected triangle-right"><span>1</span><span>Box</span></div></div></div><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-init tile-sku-price"><div class="tile-sku-ourprice"><i class="fa fa-inr"></i><span class="item-price">'+listContent[i].price+'</span></div><del class="item-mrp"><i class="fa fa-inr"></i><span>471</span></del></div></div></div></div></div></div>');
        }
    }else{
        limit=6;
        for(var i=0;i<6;i++){
            // $('.content-inside').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 anchor" id="'+i+'"><div class="col-xs-6 col-sm-4 col-md-11 col-lg-12 product_block"><div class="product_img"></div><div class="caption"><h5>Milton Casserole block</h5><div class="price-container"><div class="inner-price-container clear"><div class="cart-left-cont pull-left"><span class="btn btn-danger"><i class="fa fa-minus"></i></span></div><div class="cart-right-cont pull-right"><span class="btn btn-success"><i class="fa fa-plus"></i></span></div></div><div class="col-xs-6 col-sm-4 col-md-11 col-lg-12 p-init price_qan_block"><div class="tile-skus"><div class="tile-sku-size"><div class="tile-sku-size-info-selected triangle-right"><span>1</span><span>Box</span></div></div></div><div class="tile-sku-price"><div class="tile-sku-ourprice"><i class="fa fa-inr"></i><span class="item-price">'+listContent[i].price+'</span></div><del class="item-mrp"><i class="fa fa-inr"></i><span class="item-price">471</span></del></div></div></div></div></div></div>');
            // $('.content-inside').append('<a href="'+listContent[i].link+'" class="anchor" id="'+i+'"><img src="images/'+listContent[i].imgSrc+'" alt="img" class="images"/></a>');
            $('.content-inside').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 anchor" id="'+i+'"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product_block"><div class="product_img"></div><div class="caption"><h5>'+listContent[i].name+'</h5><div class="price-container"><div class="inner-price-container clear"><div class="cart-left-cont pull-left"><span class="btn btn-danger"><i class="fa fa-minus"></i></span></div><div class="cart-right-cont pull-right"><span class="btn btn-success"><i class="fa fa-plus"></i></span></div></div><div class="price_qan_block clear"><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-init tile-skus"><div class="tile-sku-size"><div class="tile-sku-size-info-selected triangle-right"><span>1</span><span>Box</span></div></div></div><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-init tile-sku-price"><div class="tile-sku-ourprice"><i class="fa fa-inr"></i><span class="item-price">'+listContent[i].price+'</span></div><del class="item-mrp"><i class="fa fa-inr"></i><span>471</span></del></div></div></div></div></div></div>');
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
});
