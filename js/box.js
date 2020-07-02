$(function(){
            
    var index = 0;//标记当前的图片索引
    var f;

    //自调用
    timer();

    //计时器
    function timer(){

        f = setInterval(function(){
            if(index == $(".box-img").length - 1 ){
                index = 0;
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
            }else
            {
                index++;
                $(".box-img").css("opacity","0");
                $(".box-img").eq(index).css("opacity","1");
            }
        
        },2000)
    
    }
    
    //实行左点击切换事件
    $(".box-left").click(function(){

        //进行点击事件时暂停计时器的运行
        clearInterval(f);

        if(index == 0){
            index = $(".box-img").length - 1;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");

            //点击之后再重新启用计时器的运行
            timer();

        }else{
            index--;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");

            timer();
        }
       
    })

    //实行右点击切换事件
    $(".box-right").click(function(){

        clearInterval(f);

        if(index == $("box-img").length - 1){
            index = 0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");

            timer();
        }else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");

            timer();
        }
       
    })

    //实行指定的点击事件
    $(".button").click(function(){
        clearInterval(f);

        var btn = $(this).index();
        index = btn;

        $(".box-img").css("opacity","0");
        $(".box-img").eq(index).css("opacity","1");

        timer();
    })
})