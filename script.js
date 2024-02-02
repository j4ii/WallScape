document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loading-container").style.display = "flex";
  setTimeout(function () {
    document.querySelector(".loading-container").style.display = "none";
  }, 5000);
});

var links = document.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = link.href;
  });
});
