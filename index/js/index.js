const mo = document.querySelector("#mo");
const bg = document.querySelector(".black-bg");
const cl = document.querySelector("#close"); 
const ani = document.querySelector(".ani");
const menuBtn = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");

const submitBtn = document.querySelector("#submitBtn");

const userID = document.querySelector("#userID");
const userPWD = document.querySelector("#userPWD");

const dark = document.querySelector("#dark");
const body = document.querySelector("body");

let count = 0;

menuList.style.display="none";
    
menuBtn.addEventListener("click", function(){
    if(menuList.style.display != "block"){
        menuList.style.display="block";
    }else{
        menuList.style.display="none";
    }
})

mo.addEventListener("click", function(){
    bg.classList.add("ani");
})

cl.addEventListener("click", function(){
    bg.classList.remove("ani");
})

submitBtn.addEventListener("click", function(e){
    if(userID.value.length == 0){
        alert("아이디를 입력해주세요.");
        e.preventDefault();
    }else if(userPWD.value.length == 0){
        alert("비밀번호를 입력해주세요.");
        e.preventDefault();
    }else if(userPWD.value.length < 6){
        alert("비밀번호 6자리 이상 입력해주세요.");
        e.preventDefault();
    }
})


dark.addEventListener("click", function(){
    count += 1;
    console.log(count);
    if(count % 2 != 0){
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        body.classList.add("light");
        body.classList.remove("dark");
    }
})