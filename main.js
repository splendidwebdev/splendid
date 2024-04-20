const showcase = document.querySelector(".showcase");
const text__ = document.querySelectorAll(".text__");
const audio = new Audio();
audio.src = "music.mp3"

text__.forEach((text)=>{
    setTimeout(()=>{
        text.style.opacity = "1";
    },2000)
})
const showcase_box = document.querySelector(".showcase_box");

window.addEventListener("load", ()=>{

    const logo = document.querySelector("#logo");
    setTimeout(()=>{
        logo.classList.add("active");

    },1000)
    setTimeout(()=>{
        showcase_box.classList.add("active");
        showcase.classList.add("active")
        audio.play()

    },1800)
    setTimeout(()=>{
    showcase.classList.add("active")

    },2800)
})
let span = document.createElement("span");
span.classList.add("bankai");

window.addEventListener("mousemove", (e)=>{
    span.style.left = e.offsetX + "px"
    span.style.top = e.offsetY + "px";
})
showcase.appendChild(span)