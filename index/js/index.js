const mo = document.querySelector("#mo");
const bg = document.querySelector(".black-bg");
const cl = document.querySelector("#close"); 
const ani = document.querySelector(".ani");

mo.addEventListener("click", function(){
    bg.classList.add("ani");
})

cl.addEventListener("click", function(){
    bg.classList.remove("ani");
})