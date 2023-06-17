const imgContainers = document.querySelectorAll(".img-container");
const dots = document.querySelectorAll(".dot");

imgContainers.forEach(
  (item, index) => (item.style.transform = `translateX(${100 * index}%)`)
);

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const selected = +e.target.dataset.dot;

    dots.forEach((dot, dotIndex) =>
      dotIndex === selected
        ? dot.classList.add("active")
        : dot.classList.remove("active")
    );

    imgContainers.forEach((item, index) => {
      if (index === selected) {
        item.style.transform = "translateX(0%)";
      } else {
        item.style.transform = `translateX(${100 * index - 100 * selected}%)`;
      }
    });
  });
});
