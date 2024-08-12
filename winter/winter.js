gsap.registerPlugin(ScrollTrigger);
function heroSection() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".winter_main",
      start: "50% 50%",
      end: "100% 50%",
      scrub: 2,
      aniticipatePin: 1,
      // pin: ".winter_main",
      pin: true,
      pinSpacing: false,
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
    .from(".winter_hero .winter_img", { y: "100%", scale: 0, opacity: 0 });
}
heroSection();

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
console.log(scrollY);
animTexts.forEach((element) => {
  element.addEventListener("mouseover", () => {
    changeTextLetter(event);
  });
});
// let revealFlag = true;
// window.addEventListener("scroll", () => {
//   if (
//     scrollY > document.documentElement.scrollHeight - 2 * windowHeight &&
//     revealFlag
//   ) {
//     changeTextLetter(event);
//     setTimeout(function () {
//       revealFlag = false;
//     }, 1000);
//     // revealFlag = false;
//     console.log(revealFlag);
//     clearInterval(interval);
//     return;
//   }
// });
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
