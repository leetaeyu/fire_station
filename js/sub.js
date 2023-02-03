$(function(){
  // ani
  let scTop = 0;
  let wH = window.innerHeight;

  $(document).scroll(function(){
        scTop = $(this).scrollTop();
        $(".ani_left, .ani_right, .ani_top").each(function(){
            let offsetTop = $(this).offset().top - wH + 50;
            if(scTop > offsetTop){
                $(this).addClass("fade_in");
            } else {
                $(this).removeClass("fade_in");
            }
        });
    });

})