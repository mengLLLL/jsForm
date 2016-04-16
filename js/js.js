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
//单选按钮练习
function showSex(){
    var sex = document.all("sex");
    for(var i = 0;i<sex.length;i++){
        if (sex[i].checked){
            alert("性别是:"+sex[i].value);
        }
    }
}
//复选框练习
function showInst(){
    var inst = document.all("inst");//获得所有的兴趣
    var str = "你的兴趣是:";
    for(var i = 0;i<inst.length;i++){
        if(inst[i].checked){
            str+=inst[i].value+",";
        }
    }
    alert(str);
}
function selectAll(){
    var inst = document.all('inst');
    for(var i = 0;i<inst.length;i++){
        inst[i].checked = document.getElementById('all').checked;
    }
}


//下拉列表框练习
function showCity(city){
    alert("你的家乡是"+city);
}
//文本域练习
function valiNote(){
    var note = document.getElementById('note');
    var msg = document.getElementById('noteMsg');
    //msg.innerHTML = "输入数据长度:"+note.value.length;  显示当前输入字符数目
     var len = note.value.length;
    if(len<=20){
        msg.innerHTML = "还可以输入"+(20-len)+"个字.";
        document.getElementById('sub').disabled = false;
    }else{
        msg.innerHTML = "超出字符限制!";
        document.getElementById('sub').disabled = true;
    }
}