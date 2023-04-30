document.addEventListener("scroll", function() {
    const splash = document.getElementById("splash");
    if (window.pageYOffset > 817) {
      splash.classList.add("show");
    }
    if (window.pageYOffset < 817) {
      splash.classList.remove("show");
    }
  });
