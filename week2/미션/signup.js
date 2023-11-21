import "./signup.css";
var name= document.getElementById("name");
var nickname = document.getElementById("nickname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password_check =document.getElementById("password_check");

name.onchange = checkName;

function checkName( ){
    if(name.value.length==NULL){
        alert("필수 입력 항목입니다!");
        name.select();
    }
}

nickname.onchange = checkNickname;

function checkNickname( ){
    if(nickname.value.length<2 || nickname.value.length>5){
        alert("닉네임은 2~5글자로 구성해주세요!");
        nickname.select();
    }
}

email.onchange = checkEmail;

function checkEmail( ){
    if(email.value.length<2 || email.value.length>5){
        alert("닉네임은 2~5글자로 구성해주세요!");
        nickname.select();
    }
}