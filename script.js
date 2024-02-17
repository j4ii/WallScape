document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loading-container").style.display = "flex";
  setTimeout(function () {
    document.querySelector(".loading-container").style.display = "none";
  }, 5000);
});
const list = document.querySelectorAll(".wallsCategoryLink");
function activeLink() {
  const activeIndex = Array.from(list).indexOf(this);
  localStorage.setItem("activeIndex", activeIndex);
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
const activeIndex = localStorage.getItem("activeIndex");
if (activeIndex !== null) {
  list[activeIndex].classList.add("active");
}
