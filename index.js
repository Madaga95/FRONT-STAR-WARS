window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    transparence.style.background = "#0000007a";
    transparence.style.height = "50px";
  } else {
    transparence.style.background = "transparent";
  }
});
