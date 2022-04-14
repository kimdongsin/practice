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


/* 
Q2. 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.

근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다. 

주의사항은 가격으로 10.3 이런거 넣으면 뒤에 소수점 길게 나올 수도 있으니 알아서 처리해보든가 합시다. 

*/

function fun(dc, whether) {
    if (whether == true) {
        return parseFloat(dc - (dc * 0.1) - (dc * 0.15)).toFixed(2);
    } else {
        return parseFloat(dc - (dc * 0.1)).toFixed(2);
    }
}

console.log(fun(10.3, true));