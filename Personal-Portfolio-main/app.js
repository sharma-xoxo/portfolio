let burger = document.querySelector(".burger");
let links = document.querySelector(".nav-links");

burger.addEventListener('click',()=>{
    // links.classList.add("nav-show");    // to add
    // links.classList.remove("nav-show");    /// to remove
    links.classList.toggle("nav-show");
})