// Sticky header:
let header = document.querySelector("#header");

header.classList.toggle("sticky", window.scrollY > 100);

// Text-replacing animation:
gsap.registerPlugin(TextPlugin);

//replaces yourElement's text with "This is the new text" over the course of 2 seconds
let replaceText = document.querySelector("#replace-text");
gsap.to(replaceText, {
    duration: 6,
    text: "JavaScript",
    ease: "none",
    delay: 4,
});
