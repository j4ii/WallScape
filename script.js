{
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
}
{
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelector(".homeWallpaper").style.height = "0";
      2500;
      document.querySelector(".content").style.display = "block";
    }, 2500);
    setTimeout(function () {
      document.querySelector(".homeTitle").style.opacity = "0";
    }, 2500);
    setTimeout(function () {
      document.querySelector("header").style.display = "none";
    }, 5000);
  });
}
{
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const loadingScreen = document.querySelector(".loading-screen");
      const content = document.querySelector(".content");
      if (loadingScreen && content) {
        loadingScreen.style.display = "none";
        content.style.display = "block";
      }
    }, 2500);
  });
}
