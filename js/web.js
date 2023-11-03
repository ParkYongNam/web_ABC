$(document).ready(function () {
    //화면이 준비되면 실행해라.

    setInterval(function () {
        $(".swiper-wrapper").animate({
            "marginLeft": -1200
        }, 400, function () {
            $("div:first-child", this).appendTo($(this))
            $(this).css("marginLeft", 0)
        })
    }, 3000)
})
//$(document).ready(function () {
//화면이 준비되면 실행해라.

//    setInterval(function () {
//        $(".swiper-wrapper").animate({
//            "marginLeft": -300
//        }, 400, function () {
//            $("div:first-child", this).appendTo($(this))
//            $(this).css("marginLeft", 0)
//        })
//    }, 3000)
//})     d-felx를 풀면 위로 올라간다

