var open = document.querySelector(".Logo-Menu")
var Menu = document.querySelector(".Menu2")
var Snappp = document.querySelector(".Snappp")
var Close = document.querySelector(".Close");
Close.style.display = "none";
Close.style.fontSize = "26px"

open.addEventListener("click" , ()=>{
    Menu.classList.remove("Menu2");
    Menu.classList.add("MenuOpen");
    Menu.id = "";
    Snappp.classList.remove("Snappp");
    Snappp.classList.add("Snapppp");
    open.style.display = "none";
    Close.style.display = "block";
})

Close.addEventListener("click" , ()=> {
    Menu.classList.remove("MenuOpen");
    Menu.classList.add("Menu2");
    Menu.id = "Menu2";
    Snappp.classList.remove("Snapppp");
    Snappp.classList.add("Snappp");
    Close.style.display = "none";
    open.style.display = "block";
})