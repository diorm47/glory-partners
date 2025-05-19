// faq
document.querySelectorAll(".faq_item .faq_title").forEach((title) => {
  title.addEventListener("click", () => {
    const item = title.parentElement;
    item.classList.toggle("active");
  });
});

// nav scroll width
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.querySelector(".nav_line").style.width = scrollPercent + "%";
});

// nav scroll
document.querySelectorAll(".scrollBtn").forEach((button) => {
  button.addEventListener("click", function () {
    const targetSelector = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// text opacity
window.addEventListener("scroll", () => {
  const container = document.querySelector(".countries_text");
  const lines = container.querySelectorAll("p");
  const windowHeight = window.innerHeight;

  const containerRect = container.getBoundingClientRect();
  const blockHeight = containerRect.height;

  let progress =
    (windowHeight - containerRect.top) / (windowHeight + blockHeight);
  progress = Math.min(Math.max(progress, 0), 1);

  const totalLines = lines.length;
  const segment = 1 / totalLines;

  lines.forEach((line, index) => {
    const start = index * segment;
    const end = (index + 1) * segment;

    let lineProgress = (progress - start) / segment;
    lineProgress = Math.min(Math.max(lineProgress, 0), 1);

    const opacity = 0.3 + lineProgress * 0.7;
    const blur = 4 - lineProgress * 4;

    line.style.opacity = opacity;
    line.style.filter = `blur(${blur}px)`;
  });
});
window.dispatchEvent(new Event("scroll"));

const target = 26869;
const duration = 2000; // время анимации в мс (2 сек)
const frameRate = 60; // кадров в секунду
const totalFrames = Math.round(duration / (1000 / frameRate));
const counterElement = document.getElementById("counter");

let frame = 0;

const counter = setInterval(() => {
  frame++;
  const progress = frame / totalFrames;
  const current = Math.round(target * easeOutQuad(progress));
  counterElement.textContent = current.toLocaleString("ru-RU");

  if (frame >= totalFrames) clearInterval(counter);
}, 1000 / frameRate);

// Функция замедления (ease out)
function easeOutQuad(t) {
  return t * (2 - t);
}

// to top btn
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
