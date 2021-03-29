const modal = document.getElementById("modal");
const subscribeBtn = document.getElementById("subscribe");
const span = document.getElementsByClassName("close")[0];
const closeModal = document.getElementById("modal_close");
const nav = document.getElementById("nav");
const logo = document.querySelector(".nav_logo");

console.log("main js worked");

var myFullpage = new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true
});


$('html').bind('mousewheel DOMMouseScroll keydown', function (e) {
    console.log("function for nav");
    if(!document.getElementById("first-slide").className.includes("active")) {
        nav.classList.add("bg-grey");
        logo.setAttribute("src", "./images/logo-blue.png")
    } else {
        nav.classList.remove("bg-grey");
        logo.setAttribute("src", "./images/logo-white.png")
    }

});

document.getElementById("goToTop").addEventListener("click", () => {
    fullpage_api.moveTo();
    nav.classList.remove("bg-grey");
    logo.setAttribute("src", "./images/logo-white.png")
});

const show_modal = () => {
    console.log("show modal");
    modal.style.display = "flex";
}

const close_modal = () => {
    console.log("close modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
