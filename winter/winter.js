gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".winter_main",
    start: "50% 50%",
    end: "100% 50%",
    // markers: true,
    scrub: 2,
    pin: true,
    // toggleAction: "restart none none none pause",
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
    "-=0.4"
  );

// function image_mask() {
//   ScrollTrigger.refresh(true);
//   gsap.to(".mask-container", {
//     scrollTrigger: {
//       trigger: ".mask-container",
//       // end: "bottom bottom",
//       scrub: true,
//       toggleAction: "restart none none reset",
//       pin: ".mask-container",
//     },
//     height: "32vw",
//     width: "32vw",
//     duration: 4,
//   });
// }
// let chck_if_gsap_loaded = setInterval(function () {
//   const screenSize = window.screen.width >= 1025;
//   if (window.gsap && window.ScrollTrigger && screenSize) {
//     console.log(Boolean(window.gsap));
//     console.log(Boolean(window.ScrollTrigger));
//     image_mask();
//     clearInterval(chck_if_gsap_loaded);
//   }
// }, 1000);

//animated text
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function changeTextLetter(event) {
  let iteration = 0;

  // get initial text
  const initText = event.target.innerText;

  // clear previous interval
  clearInterval(interval);

  // set interval to change text letter by letter
  interval = setInterval(() => {
    event.target.innerText = initText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.textValue[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= event.target.dataset.textValue.length) {
      clearInterval(interval);
    }

    // increase iteration
    iteration += 1 / 10;
  }, 40);
}

const animTexts = document.querySelectorAll(".animated-text");

animTexts.forEach((element) => {
  element.addEventListener("mouseover", () => {
    changeTextLetter(event);
  });
});

//contact
function splitTextIntoSpans(target) {
  let elements = document.querySelectorAll(target);
  elements.forEach((element) => {
    element.classList.add("split-text");
    let text = element.innerText;
    let splitText = text
      .split(" ")
      .map(function (word) {
        let char = word
          .split("")
          .map((char) => {
            return `<span class="split-char">${char}</span>`;
          })
          .join("");
        return `<div class="split-word">${char}&nbsp</div>`;
      })
      .join("");

    element.innerHTML = splitText;
  });
}

splitTextIntoSpans(".bubble-text");

//contact section
