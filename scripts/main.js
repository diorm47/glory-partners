document.querySelectorAll(".faq_item .faq_title").forEach((title) => {
  title.addEventListener("click", () => {
    const item = title.parentElement;
    item.classList.toggle("active");
  });
});
