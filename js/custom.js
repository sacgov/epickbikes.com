$(document).ready(function() {
    /*fixed header*/
    $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
            $('header').addClass('shrink');
        }
        else {
        $('header').removeClass('shrink');
        }
    });

    /*toggle circular links*/
    $('.circle_links').mouseover(function(){
        $('ul.circle_links').addClass('active');
    });
    /*toggle circular links*/
    $('.circle_links').mouseout(function(){
        $('ul.circle_links').removeClass('active');
    });


    /*buy/rent display/hide block*/
    $(".next_div").click(function(){
        $(".block4").animate({
          width: "toggle"
        });
        $(".block3").animate({
          width: "toggle"
        });
    });

    $(".next_div").scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('#buyBike').addClass('newClass');
      } else {
         $('#rentBike').removeClass('newClass');
      }
    });



    $('.toggle').hover(function(e) {
        e.preventDefault();

        $('#features img').attr('src',$(this).attr('srcUrl'));
      
        var $this = $(this);
      
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });

    var h1__a = "Our Team";
    var span__a = "Efficiency, Energy and Enthusiasm. All at one place";


    $('#ourTeam li').mouseover(function(e) {
      e.preventDefault();

      
      var h1Value = $(this).find('p').text();
      var spanValue = $(this).find('h3').text();
      $('#contentRight').html(function() {
          return $(this)
          .html()
          .replace(h1__a, h1Value)
          .replace(span__a, spanValue);
        });
    });

    $('#ourTeam li').mouseout(function(e) {
      e.preventDefault();

      var h1Value = $(this).find('p').text();
      var spanValue = $(this).find('h3').text();

      $('#contentRight').html(function() {
          return $(this)
          .html()
          .replace(h1Value, h1__a)
          .replace(spanValue, span__a);
        });
    });

    $('.banner-1 img').click(function() { 
       var id = $(this).attr('data-target');
       
       $(".tab-content .tab-pane").removeClass('show');
       $('#'+id).addClass('show');

       
   });


    var owl1 = $('.banner-1');
        owl1.owlCarousel({
            smartSpeed:450,
            margin: 0,
            nav: false,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="30.72" height="11.52" viewBox="0 0 30.72 11.52"><path d="M-30.72,4.8H-3.677L-7.114,1.354-5.76,0,0,5.76l-5.76,5.76-1.354-1.354L-3.677,6.72H-30.72Z" transform="translate(30.72)"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="30.72" height="11.52" viewBox="0 0 30.72 11.52"><path d="M-30.72,4.8H-3.677L-7.114,1.354-5.76,0,0,5.76l-5.76,5.76-1.354-1.354L-3.677,6.72H-30.72Z" transform="translate(30.72)"/></svg>'],
            dots: false,
            autoplay:true,
            autoplayTimeout:1000,
            loop: true,
            mouseDrag: false,
            responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
            }
        });

    var owl2 = $('.testi');
        owl2.owlCarousel({
            smartSpeed:450,
            margin: 0,
            nav: false,
            dots: false,
            autoplay:true,
            autoplayTimeout:1000,
            loop: true,
            mouseDrag: false,
            responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
            }
        });


    $('.js-anchor-link').click(function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      var getLinkId = $(this).attr('href').split('#');
      //console.log(getLinkId[1]);
      if(getLinkId[1] == 'featuresBlock') {//.product_features .nav li && products && features
        $('.product_features .nav li:first-child a').removeClass('active');
        $('.product_features .nav li:nth-child(2) a').addClass('active');
        $('#products').removeClass('active show');
        $('#features').addClass('active show')
      }
      if(getLinkId[1] == 'productsBlock') {//.product_features .nav li && products && features
        $('.product_features .nav li:first-child a').addClass('active');
        $('.product_features .nav li:nth-child(2) a').removeClass('active');
        $('#products').addClass('active show');
        $('#features').removeClass('active show')
      }
      if(getLinkId[1] == 'buyBike') {
        $('#buyBike').css("display", "block");
        $('#rentBike').css("display", "none");
      }
      if(getLinkId[1] == 'rentBike') {
        $('#buyBike').css("display", "none");
        $('#rentBike').css("display", "block");
      }
      if(target.length){
        var scrollTo = target.offset().top;
        $('#mySidenav').css("display", "none");
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
      }
    });
    
    $(".openNav").click(function(){
        $('#mySidenav').css("display", "block");
    })
    $(".closeNav").click(function(){
        $('#mySidenav').css("display", "none");
    })

})

/*side menu*/
/*function openNav() {  
   document.getElementById("mySidenav").style.width = "320px";
}
 function closeNav() {   
   document.getElementById("mySidenav").style.width = "0";
}*/


