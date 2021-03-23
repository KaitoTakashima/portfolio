$(function(){
    ScrollReveal().reveal('.js_scrolleffect', {
        duration: 1500, // アニメーションの完了にかかる時間
        origin: 'bottom',
        distance: '50px',
        viewFactor: .2, // 0~1,どれくらい見えたら実行するか
    });
})

$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 100;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });