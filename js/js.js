/**
 * Created by MengL on 16/4/15.
 */
function testEmail(){
    var myemail = document.getElementById('myemail');
    var msg = document.getElementById('emailMsg');//获取span元素
//            alert(myemail.value);
//            对数据进行合法性检测
    if(/^\w+@\w+\.\w+$/.test(myemail.value)){
        myemail.className="right";
        msg.innerHTML='email输入正确';
        return true;
    }else{
        myemail.className="wrong";
        msg.innerHTML='email输入错误';
        return false;
    }
}


function validate(){
    return testEmail();
}


function emptyValidate(elementId){
    var element = document.getElementById(elementId);//获取输入框
    var msgElement = document.getElementById(elementId+'Msg');//span的id
    if(element.value==""){
        element.className="wrong";
        msgElement.innerHTML="请输入密码";
        return false;
    }else{
        element.className="right";
        msgElement.innerHTML="已经输入密码";
        return true;
    }
}
//     判断两次输入的密码是否一致
function validateRepeat(srcName,desName){
    var srcElement = document.getElementById(srcName);
    var desElement = document.getElementById(desName);
    var msgElement = document.getElementById(desName+'Msg');//第二个(确认框)的文本内容
    if(srcElement.value == desElement.value){
        desElement.className = "right";
        msgElement.innerHTML="两次输入一致,验证成功";
        return true;
    }else{
        desElement.className = "wrong";
        msgElement.innerHTML="两次输入不一致,请重新输入!";
        return false;
    }
}



function validatePsd(){
    return emptyValidate("psd");
}
function validateConf(){
    if (emptyValidate("conf")){   //如果第二次输入的值不为空
        return validateRepeat("psd","conf");
    }
    return false;
}