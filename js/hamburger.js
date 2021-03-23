jQuery(function($){
	$(".menu-trigger").click(function () {
        $(this).toggleClass('active');
    });
    $(".menu-trigger").click(function(){
        $(".js-open").toggleClass('open');
    });
});

