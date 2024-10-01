// JavaScript for Star Rating
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
      const currentValue = this.getAttribute("data-value");
      updateStars(currentValue);
    });

    star.addEventListener("mouseout", function () {
      const selectedValue = document.querySelector(".star.active");
      if (selectedValue) {
        updateStars(selectedValue.getAttribute("data-value"));
      } else {
        updateStars(0); // Reset to zero when no star is selected
      }
    });

    star.addEventListener("click", function () {
      // Remove active class from all stars
      stars.forEach((s) => s.classList.remove("active"));
      // Add active class to the clicked star
      this.classList.add("active");
    });
  });

  function updateStars(rating) {
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= rating) {
        star.style.color = "gold"; // Change color to gold for selected stars
      } else {
        star.style.color = "#ccc"; // Reset color for unselected stars
      }
    });
  }
});
