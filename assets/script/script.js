gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-header",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "50%+=500px",
    },
});
tl.to(".header-background-back", { scale: 1 }, 0);
tl.to(".header-background-front", { opacity: 0 }, 0);
