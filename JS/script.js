let hamburger = document.querySelector(".hamburger");

let nav_height = document.querySelector(".nav");
let nav_display = document.querySelector("nav ul")

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

let width = screen.width

let footer = document.getElementById("footer");

const setSvg = (height)=>{
    return`
        <h1>Greenlight House</h1>
        <div class="footer-links f1-links-rigth-space">
            <h5><a href="">Follow us on</a></h5>
            <a class="f-link" href="https://www.reddit.com" target="_blank">Reddit</a>
            <a class="f-link" href="https://www.facebook.com" target="_blank">Facebook</a>
            <a class="f-link" href="https://www.instagram.com" target="_blank">Instagram</a>
        </div>
        <div class="footer-links f2-links-rigth-space">
            <h5><a href="">Quick Links</a></h5>
            <a class="f-link" href="index.html">Home</a>
            <a class="f-link" href="./HTML/contact.html">Contact Us</a>
            <a class="f-link" href="./HTML/explore.html">Explore Store</a>
        </div>
        <a href="#the-header" class="to-top">Back to top</a>
        <svg class="f-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 ${height}">
            <path
                d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,7200,320C480,3200,2400,3200,120,3200L0,3200Z">
            </path>
        </svg>`}
        

        if (window.matchMedia("(max-width: 420px)").matches){
            footer.innerHTML = setSvg("850")
        }
        else if (window.matchMedia("(max-width: 860px)").matches){
            footer.innerHTML = setSvg("830")
        }
        else if (window.matchMedia("(min-width: 860px)").matches){
            footer.innerHTML = setSvg("430")
        }


