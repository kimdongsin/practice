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

const al = document.querySelector(".alert");
const sec = document.querySelector(".sec");
let count = 5;

const loginForm = document.querySelector(".loginForm");

const slide = document.querySelector(".slide-container");
const btn = document.querySelectorAll(".btnBox .btn");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let val = 0;

const lorem = document.querySelector(".lorem");

menuList.style.display = "none";

menuBtn.addEventListener("click", function () {
    if (menuList.style.display != "block") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
})

mo.addEventListener("click", function () {
    bg.classList.add("ani");
})

cl.addEventListener("click", function () {
    bg.classList.remove("ani");
})

submitBtn.addEventListener("click", function (e) {
    if (userID.value.length == 0) {
        alert("아이디를 입력해주세요.");
        e.preventDefault();
    } else if (userPWD.value.length == 0) {
        alert("비밀번호를 입력해주세요.");
        e.preventDefault();
    } else if (userPWD.value.length < 6) {
        alert("비밀번호 6자리 이상 입력해주세요.");
        e.preventDefault();
    }
})

loginForm.addEventListener("submit", function (e) {
    if (/[A-Z]/.test(userPWD.value) == false) {
        alert("비밀번호에 대문자를 포함해주세요.")
        e.preventDefault();
    }
})


setInterval(function () {
    if (count == 0) {
        al.style.display = "none";
    } else {
        sec.innerHTML = count;
        console.log(count);
        count--;
    }

}, 1000)


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (btn[i] == btn[1]) {
            slide.style.transform = "translateX(" + (-500) + "px)"
            val = 500;
            console.log("val :" + val);
        } else if (btn[i] == btn[2]) {
            slide.style.transform = "translateX(" + (-1000) + "px)"
            val = 1000;
            console.log("val :" + val);
        } else {
            slide.style.transform = "translateX(" + (-0) + "px)"
            val = 0;
            console.log("val :" + val);
        }
    })
}

prev.addEventListener("click", function () {
    val -= 500;
    if (val == -500 && prev) {
        val = 1000;
    }
    slide.style.transform = "translateX(" + (-val) + "px)"
    console.log("val :" + val);


})

next.addEventListener("click", function () {
    val += 500;
    if (val == 1500 && next) {
        val = 0;
    }
    slide.style.transform = "translateX(" + (-val) + "px)"
    console.log("val :" + val);
})

lorem.addEventListener('scroll', function(){
    if(lorem.scrollTop + lorem.clientHeight == lorem.scrollHeight){
        alert("통과");
    }
    console.log( lorem.scrollTop);
    console.log( lorem.scrollHeight);
    console.log( lorem.clientHeight);
});