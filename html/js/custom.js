// main banner owlcarousel js start 
$(document).ready(function() {
	$('.banner').owlCarousel({
	    loop:true,
	    // margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});
	// main banner owlcarousel js end 

	// new arrival slider start
$(document).ready(function() {
	$('.tab-slider').owlCarousel({
	    loop:true,
	    // margin:30,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        500:{
	            items:2
	        },
	        800:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})
});
// new arrival slider end
$(document).ready(function() {
	var headertag = $('.bottom-header');
	$(window).scroll(function(){
		if ($(this).scrollTop() > 152){
			headertag.addClass("header-fixed");
		}
		else{ 
			headertag.removeClass("header-fixed");
		}
	});
});
// tab slider
$(document).ready(function() {

    $("#tabs li a").on("click", function(e){
      var title = $(e.currentTarget).attr("title");
      $("#tabs li a , .tab_content li div").removeClass("selected")
      $(".tab-"+title +", .items-"+title).addClass("selected")
      $("#items").attr("class","tab-"+title);

      return false;
    });
  
   });

/*---Mobile menu icon Start---*/
$(document).ready(function() {
    var navbar_toggle = $('.navbar-toggle i');
    var menu_var = $('#menu');
    $('.navbar-toggle').on("click", function(){
      
      if(menu_var.hasClass('menu-open')){
        menu_var.removeClass('menu-open');
        navbar_toggle.removeClass('fa-close');
        navbar_toggle.addClass('fa-bars');
      }else{
        menu_var.addClass('menu-open');
        navbar_toggle.addClass('fa-close');
        navbar_toggle.removeClass('fa-bars');
      }
      return false;
    });
       });
    /*---Mobile menu icon End---*/

    // opener-plus/minus start
    $(document).ready(function() {
    $('span.opener').on("click", function(){
      
        if ($(this).hasClass("plus")) {
          $(this).parent().find('.dropdown-content').slideDown();
          $(this).removeClass('plus');
          $(this).addClass('minus');
        }
        else
        {
          $(this).parent().find('.dropdown-content').slideUp();
          $(this).removeClass('minus');
          $(this).addClass('plus');
        }
        return false;
      });
       });
    // opener-plus/minus end