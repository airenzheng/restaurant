$(function()
    {
        //移入
        $('#ul1 > li').mouseenter(function()
        {
            $(this).children('ul').stop(true,false).slideDown(100);
        })

        //移出
        $('#ul1 > li').mouseleave(function()
        {
            $(this).children('ul').stop(true,false).slideUp(100);
        })

    })
