const mo = document.querySelector("#mo");
const bg = document.querySelector(".black-bg");
const cl = document.querySelector("#close"); 
const ani = document.querySelector(".ani");
const menuBtn = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");

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