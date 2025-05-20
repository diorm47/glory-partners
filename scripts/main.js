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

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
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
  progress *= 1.7;
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

// to top btn
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
