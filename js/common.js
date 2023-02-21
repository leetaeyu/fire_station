$(function(){ 
    $(".pc_depth1 > a").mouseenter(function(){
        $(".pc_depth2_box").css({"opacity":"0.95", "z-index":"10"});
    });
    $(".pc_depth2_box").mouseleave(function(){
        $(".pc_depth2_box").css({"opacity":"0", "z-index":"-2"});
    });

    $(".gnb_button").click(function(){
        $("body").toggleClass("hidden");
        $(".gnb_container").toggleClass("active");
    });

    $(".mo_depth1 > a").click(function(){
        $(this).parent().siblings().find(".mo_depth2").stop().slideUp(300);
        $(this).next().stop().slideToggle(300);
        if(!$(this).hasClass("border")) {
            $(".mo_depth1").removeClass("border")
            $(this).addClass("border");
        } else {
            $(this).removeClass("border")
        }
    });

    $(".station_label").click(function(){
        $(".station_item").toggleClass("active");
        //앵커의 기능 실행을 금지
        return false;
    });

    $("a").click(function(){
        if($(this).attr("href") == "#") {
            return false;
        }
    });
});
