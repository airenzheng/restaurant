window.onload = init;

var username,getday,people,iphone,txt1,submit;

function init(){
    username = document.getElementById("username");
    getday = document.getElementById("dayd");
    people = document.getElementById("people");
    iphone = document.getElementById("iphone");
    txt1 = document.getElementById("txt1");
    submit = document.getElementById("submit");

    submit.onclick = checkOK();
}




function checkuserName(){
    if(username.value == "")
    {
        window.alert ("请输入用户名");
        return false;
    }else if (username.value.length < 1 || username.value.length > 15)
    {
        window.alert ("该用户名的长度应在2-15字符之间");
        return false;
    }else{
        return true;
    }
}

function checkgeday(){
    if(getday.value == ""){
        window.alert ("请输入预定时间");
        return false;
    }else{
        return true;
    }
}

function checkpeople(){
    if(people.value == ""){
        window.alert ("请输入就餐人数");
        return false;
    }else if (username.value.length < 1 || username.value.length > 7)
    {
        window.alert ("该用户名的长度应在2-15人之间");
        return false;
    }else{
        return true;
    }
}

function checkiphone(){
        var re = /^1+\d{10}$/;
            if(isNaN(iphone.value))
            // if(otxt.value != re)
            {
                window.alert ("请输入正确的电话格式（电话号码由数字构成");
            }else if(iphone.value.charAt(11))
            {
                window.alert ("电话号码过长");
            }
            else if(iphone.value.charAt(10))
            {
                if(re.test(iphone.value))
                {
                    
                    window.alert("格式正确√");
                }
                else
                {
                    window.alert("第一位必须为数字1 ");
                }
            }
            else
            {
                window.alert9("电话号码过短");
            }

}

function checktxt()
{
    if(txt1.value == ""){
        window.alert = "请输入预定时间";
        return false;
    }else{
        return true;
    }

}



function checkOK(){
    if(checkuserName() == true && getday() == true  && people() == true&& iphone() == true && txt1() == true)
    {
        // location.replace("welcome.html");
        // window.location.assign("../html/order.html");
        window.alert("您的订单已提交成功了");
    }else{
        return false;
    }
}