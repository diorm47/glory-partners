document.querySelectorAll(".faq_item .faq_title").forEach((title) => {
  title.addEventListener("click", () => {
    const item = title.parentElement;
    item.classList.toggle("active");
  });
});

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.querySelector(".nav_line").style.width = scrollPercent + "%";
});

document.querySelectorAll(".scrollBtn").forEach((button) => {
  button.addEventListener("click", function () {
    const targetSelector = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
