const button = document.querySelector(".bars");
const jsMenu = document.querySelector(".menu");
const jsSns = document.querySelector(".sns");
const jsBody = document.querySelector("body");
button.addEventListener("click", function (event) {
  if (jsMenu.style.display == "none" && jsSns.style.display == "none") {
    jsMenu.style.display = "flex";
    jsSns.style.display = "flex";
  } else {
    jsMenu.style.display = "none";
    jsSns.style.display = "none";
  }
});

function sizeScreen() {
  const widthLength = window.innerWidth;
  if (widthLength > 920) {
    jsMenu.style.display = "flex";
    jsSns.style.display = "flex";
  }
}
window.addEventListener("resize", sizeScreen);
