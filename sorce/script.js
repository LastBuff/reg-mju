document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const images = carousel.children;
  const total = images.length;
  let index = 0;

  const updateSlide = () => {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlide();
  });

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlide();

  });

});
