/*** Stick Menu ***/
jQuery(function($){
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 150) {
      $(".top-bar").addClass("is-sticky");
      $(".header-area").addClass("is-sticky");
    } else {
      $(".top-bar").addClass("is-sticky");
	  $(".header-area").removeClass("is-sticky");
    }
  })
})
/*** Change Color Preset ***/
jQuery(function ($) {  
        a = $(".sp-megamenu-parent > li.active > a").css("color");
        document.documentElement.style.setProperty('--background-color',a);
        document.documentElement.style.setProperty('--text-color',a);
        document.documentElement.style.setProperty('--border-color',a);
});