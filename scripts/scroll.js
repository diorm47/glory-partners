const block = document.querySelector(".roadmap");
const title = document.querySelector(".roadmap_top");
let lastScrollTop = block.scrollTop;
let hasShifted = false;

block.addEventListener("scroll", () => {
  const triggerOffset = 300; // можно адаптировать под размер
  const scrollingDown = block.scrollTop > lastScrollTop;
  const scrollingUp = block.scrollTop < lastScrollTop;

  if (!hasShifted && scrollingDown && block.scrollTop > triggerOffset) {
    title?.classList.add("roadmap_title_sec");
    hasShifted = true;
  }

  if (hasShifted && scrollingUp && block.scrollTop < triggerOffset) {
    title?.classList.remove("roadmap_title_sec");
    hasShifted = false;
  }

  lastScrollTop = block.scrollTop;
});

// Плавная инерционная прокрутка внутри блока
let scrollTarget = 0;
let isAnimating = false;

function animateScroll() {
  const currentY = block.scrollTop;
  const distance = scrollTarget - currentY;
  const step = distance * 0.08; // регулировка плавности

  if (Math.abs(distance) > 0.5) {
    block.scrollTop += step;
    requestAnimationFrame(animateScroll);
  } else {
    isAnimating = false;
  }
}

block.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    scrollTarget += e.deltaY * 0.8;

    // Ограничим прокрутку в пределах блока
    scrollTarget = Math.max(
      0,
      Math.min(scrollTarget, block.scrollHeight - block.clientHeight)
    );

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animateScroll);
    }
  },
  { passive: false }
);
