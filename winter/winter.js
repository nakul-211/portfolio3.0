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
    { top: "-50%", delay: -0.4, margin: "0 0" },
    "b"
  )
  .from(
    ".winter_hero .winter_img",
    { y: "100%", scale: 0, opacity: 0 },
    "-=.4"
  );

//image cover scaler

(function () {
  let chck_if_gsap_loaded = setInterval(function () {
    const eleBuilder = document
      .querySelector("body")
      .classList.contains("elementor-editor-active");
    const screenSize = window.screen.width >= 1025;
    if (window.gsap && window.ScrollTrigger && !eleBuilder && screenSize) {
      gsap.registerPlugin(ScrollTrigger);
      image_mask();
      clearInterval(chck_if_gsap_loaded);
    }
  }, 500);

  function image_mask() {
    const imageMask = document.querySelector(
      ".elementor-element .circle-mask.elementor-widget-image .elementor-widget-container img"
    );
    gsap.to(imageMask, {
      scrollTrigger: {
        trigger: ".start-gsap-mask",
        start: "-15% 25%",
        end: "25% 25%",
        scrub: 1,
      },
      webkitMaskSize: 70 + "%",
      duration: 1,
    });
  }
})();
