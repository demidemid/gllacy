(function($){
  $(".contacts__button").click(function() {
    $(".hide-layout, .popup").fadeIn(300);  // плавно показываем окно/фон
  })
  $(".popup__cross-button, .hide-layout").click(function() {
    $(".popup").css({ display: "none" });
    $(".hide-layout, .popup").fadeOut(300); // плавно скрываем окно/фон
  });
})(jQuery);


(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active slideInRight");
                $(tabs).children("ul").children("li").addClass("slideOutLeft");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);

$(document).ready(function(){
    $(".tabs").lightTabs();
});

(function() {

  var boxes = $('.slider__nav-item'),
      colors = ['#859f91','#8996a6','#9d8b84'];

  boxes.on('click', function(){
      $('body').css('background-color', colors[$(this).index('.slider__nav-item')]);
  });
})();
