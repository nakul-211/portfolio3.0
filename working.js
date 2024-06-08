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

//smoot scroll
const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

let offset = -10;

// body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.scrollY - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
