const socialLinkControl = document.querySelector(".social-link-control");
let socialLinks = document.querySelector(".social-links");
let MenuControlSpan = document.querySelector(".hamburger-menu-control");
const barsStack = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".hamburger-menu");
// Hide and show menu
MenuControlSpan.addEventListener("click", () => {


    if (close.style.display === "none") {
        hamburgerMenu.style.display = "block";
        close.style.display = "block";
        barsStack.style.display = "none";
    }
    else {
        hamburgerMenu.style.display = "none";
        barsStack.style.display = "block";
        close.style.display = "none";
    }
})

// .....................................................................
// console.log(socialLinks)
socialLinkControl.addEventListener("click", () => {

    if (socialLinks.style.display === "flex") {
        socialLinks.style.display = "none";
    } else {
        socialLinks.style.display = "flex";
    }


})
const tl = gsap.timeline({
    ease: " power4.out",
    duration: .2
});
tl.fromTo("#my-name", { y: "90px", opacity: 0 }, { y: 0, opacity: 1 });
tl.fromTo("#job-title", { y: "90px", opacity: 0 }, { y: 0, opacity: 1 })
tl.fromTo("#short-description", { y: "90px", opacity: 0 }, { y: 0, opacity: 1 })
tl.fromTo("#hireme-btn", { y: "90px", opacity: 0 }, { y: 0, opacity: 1 })