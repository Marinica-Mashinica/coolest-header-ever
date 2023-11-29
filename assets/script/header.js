gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-header",
        pin: true,
        scrub: 2,
        start: "top center",
        end: "50%+=500px",
    },
    markers: {
        startColor: "green",
        endColor: "red",
        borderColor: "red",
    },
});
tl.to(".header-background-back", { scale: 1 }, 0);
tl.to(".header-background-front", { opacity: 0 }, 0);
