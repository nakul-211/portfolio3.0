//cursor working
let mouseCursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0,
  invert = document.querySelectorAll(".cursor-invert"),
  miscellaneousProjects = document.querySelectorAll(".project-cursor");
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
function removeCustomCursors() {
  mouseCursor.classList.remove("reactQuiz-cursor");
  mouseCursor.classList.remove("travelList-cursor");
  mouseCursor.classList.remove("omnifood-cursor");
  mouseCursor.classList.remove("portfolio-cursor");
  mouseCursor.classList.remove("custom-cursor");
}
miscellaneousProjects.forEach((project) => {
  project.addEventListener("mouseenter", function (e) {
    const currentProject = e.target.classList;
    if (currentProject.value.includes("reactQuiz-project")) {
      removeCustomCursors();
      mouseCursor.classList.add("reactQuiz-cursor");
    } else if (currentProject.value.includes("travelList-project")) {
      removeCustomCursors();
      mouseCursor.classList.add("travelList-cursor");
    } else if (currentProject.value.includes("omnifood-project")) {
      removeCustomCursors();
      mouseCursor.classList.add("omnifood-cursor");
    } else if (currentProject.value.includes("portfolio-project")) {
      removeCustomCursors();
      mouseCursor.classList.add("portfolio-cursor");
    }
  });
});
document
  .querySelector(".miscellaneous-projects")
  .addEventListener("mouseleave", () => {
    removeCustomCursors();
    mouseCursor.classList.add("custom-cursor");
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

const usePopcornSlides = document.querySelectorAll(".usePopcorn-slide");
const usePopcornBtnLeft = document.querySelector(
  ".usePopcorn-slider__btn--left"
);
const usePopcornBtnRight = document.querySelector(
  ".usePopcorn-slider__btn--right"
);
let usePopcornCurrentSlide = 0;
const usePopcornMaxSlide = usePopcornSlides.length;
const usePopcornGoToSlide = function (slide) {
  usePopcornSlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const usePopcornNextSlide = function () {
  usePopcornCurrentSlide++;
  if (usePopcornCurrentSlide === usePopcornMaxSlide) usePopcornCurrentSlide = 0;
  usePopcornGoToSlide(usePopcornCurrentSlide);
};
const usePopcornPrevSlide = function () {
  if (usePopcornCurrentSlide === 0) usePopcornCurrentSlide = usePopcornMaxSlide;
  usePopcornCurrentSlide--;
  usePopcornGoToSlide(usePopcornCurrentSlide);
};
usePopcornBtnRight.addEventListener("click", usePopcornNextSlide);
usePopcornBtnLeft.addEventListener("click", usePopcornPrevSlide);
usePopcornGoToSlide(0);

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
