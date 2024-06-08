gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".winter_main",
    start: "50% 50%",
    end: "150% 50%",
    scrub: 2,
    pin: true,
  },
});

tl.to(".winter_hero", {}, "a")
  .to(".winter_top", { top: "-50%" }, "a")
  .to(".winter_bottom", { bottom: "-50%" }, "a")
  .to(".winter_top-h1", { top: "60%" }, "a")
  .to(".winter_bottom-h1", { bottom: "60%" }, "a")
  .to(
    ".winter_hero .winter_content",
    { top: "-30%", delay: -0.4, margin: "10% 0" },
    "b"
  )
  .from(
    ".winter_hero .winter_img",
    { y: "100%", scale: 0, opacity: 0 },
    "-=.4"
  );
