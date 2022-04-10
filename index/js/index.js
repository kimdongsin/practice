const mo = document.querySelector("#mo");
const bg = document.querySelector(".black-bg");
const cl = document.querySelector("#close"); 
const ani = document.querySelector(".ani");
const menuBtn = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");

const submitBtn = document.querySelector("#submitBtn");

const userID = document.querySelector("#userID");
const userPWD = document.querySelector("#userPWD");

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

function 삼육구게임(num){
    if(num % 9 == 0){
        console.log("박수x2!");
    }else if(num % 3 == 0){
        console.log("박수!");
        
    }else{
        console.log("통과!");
    }
}


삼육구게임(3);



/*
 Q3. 공인중개사 시험점수를 입력하면 합격인지 알려주는 함수를 만들어봅시다.

 

공인중개사 1차 시험은 개론, 민법 2개 과목이 있습니다.

과목마다 100점 만점이지만 두 과목 합해서 120점 이상이면 합격시켜줍니다. 

다만 한 과목이 40점 미만이면 과락으로 불합격됩니다.  

과목 점수 2개를 파라미터로 입력하면 합격인지 불합격인지 여부를 콘솔창에 출력하는 함수를 만들어보십시오. 
*/

function 합격했냐(num1, num2){
    if(num1 > 100 || num2 > 100){
        console.log("정확한 점수를 입력해주세요.");
    }else if(num1 < 40 || num2 < 40){
        console.log("과락으로 불합격입니다.");
    }else if((num1+num2) >= 120){
        console.log("합격입니다.");
    }else {
        console.log("불합격입니다.");
    }
}