//cursor working
let mouseCursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0,
  invert = document.querySelectorAll(".cursor-invert");
gsap.to({}, 0.005, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(mouseCursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("grow");
    mouseCursor.classList.remove("grow-small");
  });
  link.addEventListener("mousemove", () => {
    mouseCursor.classList.add("grow");
    if (link.classList.contains("small")) {
      mouseCursor.classList.remove("grow");
      mouseCursor.classList.add("grow-small");
    }
  });
});
invert.forEach((section) => {
  section.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("invert");
  });
  section.addEventListener("mousemove", () => {
    mouseCursor.classList.add("invert");
  });
});
//scroll reveal
let windowHeight = window.innerHeight;
console.log(document.documentElement.scrollHeight - 2 * windowHeight);
function scrollReveal() {
  var revealPoint = 0.1 * windowHeight;
  var revealElement = document.querySelectorAll(".reveal");
  for (var i = 0; i < revealElement.length; i++) {
    var revealTop = revealElement[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      revealElement[i].classList.add("reveal_active");
    } else {
      revealElement[i].classList.remove("reveal_active");
    }
  }
}

window.addEventListener("scroll", scrollReveal);

//progress bar
let scrollIndicator = document.querySelector(".progress-bar");
let documentHeight = document.documentElement.scrollHeight;
let viewportHeight = windowHeight;
console.log(viewportHeight, "hey", documentHeight);
window.onscroll = function () {
  // if (scrollY > 300 && scrollY < 350) {
  //   ScrollTrigger.refresh(true);
  //   // heroSection();
  // }
  // (scrollY > 200 && scrollY <= 300) ||
  scrollIndicator.style.transform = `scaleX(${
    scrollY / (documentHeight - viewportHeight)
  })`;
};
// gsap.to(".progress-bar", {
//   value: 100,
//   scrollTrigger: {
//     scrub: 0.5,
//   },
// });

//carousel working
const portfolioSlides = document.querySelectorAll(".portfolio-slide");
// const portfolioSlider = document.querySelector(".portfolio-slider");
const portfolioBtnLeft = document.querySelector(".portfolio-slider__btn--left");
const portfolioBtnRight = document.querySelector(
  ".portfolio-slider__btn--right"
);
let portfolioCurrentSlide = 0;
const portfolioMaxSlide = portfolioSlides.length;
const portfolioGoToSlide = function (slide) {
  portfolioSlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const portfolioNextSlide = function () {
  portfolioCurrentSlide++;
  if (portfolioCurrentSlide === portfolioMaxSlide) portfolioCurrentSlide = 0;
  portfolioGoToSlide(portfolioCurrentSlide);
};
const portfolioPrevSlide = function () {
  if (portfolioCurrentSlide === 0) portfolioCurrentSlide = portfolioMaxSlide;
  portfolioCurrentSlide--;
  portfolioGoToSlide(portfolioCurrentSlide);
};
portfolioBtnRight.addEventListener("click", portfolioNextSlide);
portfolioBtnLeft.addEventListener("click", portfolioPrevSlide);
portfolioGoToSlide(0);

//mapty carousel
const maptySlides = document.querySelectorAll(".mapty-slide");
const maptyBtnLeft = document.querySelector(".mapty-slider__btn--left");
const maptyBtnRight = document.querySelector(".mapty-slider__btn--right");
let maptyCurrentSlide = 0;
const maptyMaxSlide = maptySlides.length;
const maptyGoToSlide = function (slide) {
  maptySlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const maptyNextSlide = function () {
  maptyCurrentSlide++;
  if (maptyCurrentSlide === maptyMaxSlide) maptyCurrentSlide = 0;
  maptyGoToSlide(maptyCurrentSlide);
};
const maptyPrevSlide = function () {
  if (maptyCurrentSlide === 0) maptyCurrentSlide = maptyMaxSlide;
  maptyCurrentSlide--;
  maptyGoToSlide(maptyCurrentSlide);
};
maptyBtnRight.addEventListener("click", maptyNextSlide);
maptyBtnLeft.addEventListener("click", maptyPrevSlide);
maptyGoToSlide(0);

//omnifood working

const omnifoodSlides = document.querySelectorAll(".omnifood-slide");
const omnifoodBtnLeft = document.querySelector(".omnifood-slider__btn--left");
const omnifoodBtnRight = document.querySelector(".omnifood-slider__btn--right");
let omnifoodCurrentSlide = 0;
const omnifoodMaxSlide = omnifoodSlides.length;
const omnifoodGoToSlide = function (slide) {
  omnifoodSlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const omnifoodNextSlide = function () {
  omnifoodCurrentSlide++;
  if (omnifoodCurrentSlide === omnifoodMaxSlide) omnifoodCurrentSlide = 0;
  omnifoodGoToSlide(omnifoodCurrentSlide);
};
const omnifoodPrevSlide = function () {
  if (omnifoodCurrentSlide === 0) omnifoodCurrentSlide = omnifoodMaxSlide;
  omnifoodCurrentSlide--;
  omnifoodGoToSlide(omnifoodCurrentSlide);
};
omnifoodBtnRight.addEventListener("click", omnifoodNextSlide);
omnifoodBtnLeft.addEventListener("click", omnifoodPrevSlide);
omnifoodGoToSlide(0);

gsap.registerPlugin(ScrollTrigger);
function mask_cover() {
  gsap.to(
    ".mask-container",

    {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "center bottom",
        end: "bottom bottom",
        scrub: 2,
        // toggleActions: "restart pause none none",
      },
      height: "30rem",
      width: "30rem",
      duration: 2,
    }
  );
}
mask_cover();
//horizontal scroll

function horizontalScroll() {
  ScrollTrigger.refresh(true);
  let hs = gsap.timeline();
  hs.to(
    ".horizontal-scroll-section",
    {
      xPercent: -200 / 3,
      scrollTrigger: {
        trigger: ".skills-section",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 2,

        pin: ".horizontal-scroll-section",
      },
    },
    "skill-scroll"
  );
  ScrollTrigger.refresh(true);
  hs.to(".animated-text", {
    left: "150vw",
    top: "35vh",
    ease: "none",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "bottom bottom",
      end: "bottom top",
      // markers: true,
      scrub: 2,
      pin: true,
    },
  });
}
if (window.innerWidth >= 560) {
  horizontalScroll();
}
