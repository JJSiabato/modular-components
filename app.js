const burgerBtn = document.querySelector("#burger");
const siderbar = document.querySelector(".sider-bar")
const main = document.querySelector(".main")
let burgerX = false;

document.addEventListener("click", e =>{
    if(e.target.id("#burger")){
        if(burgerX){
            burgerBtn.classList.remove('active');
            siderbar.classList.remove('active');
            main.classList.remove('active');
            burgerX = false;
        }else{
            burgerBtn.classList.add('active');
            siderbar.classList.add('active');
            main.classList.add('active');
            burgerX=true;
    }}    
if (e.target.matches(".main")) {
    burgerBtn.classList.remove('active');
        siderbar.classList.remove('active');
        main.classList.remove('active');
        burgerX = false;}

});
