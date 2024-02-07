document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loading-container").style.display = "flex";
  setTimeout(function () {
    document.querySelector(".loading-container").style.display = "none";
  }, 2500);
});
