let hamburger = document.querySelector(".hamburger");

let nav_height = document.querySelector(".nav");
// let nav_display = document.querySelector(".navigations");
let nav_display = document.querySelector("nav ul")

// hamburger.addEventListener("click", ()=>{
//     console.log("yess clicked")
//     nav_height.classList.toggle("tog-ham-height")
//     setTimeout(()=>{nav_display.classList.toggle("tog-ham-display")}
//     , 500)
// })

hamburger.addEventListener("click", ()=>{
    nav_height.classList.toggle("tog-ham-height")
    if(nav_display.classList.contains("tog-ham-display")){
        setTimeout(()=>{
            nav_display.classList.remove("tog-ham-display")
        }, 200)
    }
    else{
        nav_display.classList.add("tog-ham-display")
    }
})


let title = document.querySelector(".title")
let btn = document.querySelector(".exp-a")

window.onscroll = ()=>{
    let position = window.scrollY;
    title.style.transform = `translateX(${position*3}px)`
    btn.style.transform = `translateX(${-position*3}px)`
}
