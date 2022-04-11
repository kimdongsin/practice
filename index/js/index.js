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



var 예금액 = 60000;
var 미래예금액 = 0;

if ( 예금액 >= 50000 ){
  미래예금액 = 예금액 * 1.2 ** 2 ;
} else {
  미래예금액 = 예금액 * 1.15 ** 2;
}

console.log(미래예금액) 


/*

첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,

첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.


(동작예시)

var 예금액이라는 변수에
60000을 집어넣으면 86400 이게 콘솔창에 출력되어야 합니다. (이자 20%가 2번 붙음)

var 예금액이라는 변수에
10000을 집어넣으면 13225 이게 콘솔창에 출력되어야 합니다. (이자 15%가 2번 붙음)


(응용 1)

위에서 1.2를 여러번 곱했는데 1.2를 10번 곱하려면 코드를 어떻게 짜야될까요? 

1.2 * 1.2 * 1.2 ... 계속 하면 되긴 하는데

자바스크립트엔 ** 이런 거듭제곱 연산자 기능도 있습니다.

 

*/


