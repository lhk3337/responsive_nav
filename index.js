const button = document.querySelector(".bars");
const jsMenu = document.querySelector(".menu");
const jsSns = document.querySelector(".sns");
button.addEventListener("click", function (event) {
  if (jsMenu.style.display == "none" && jsSns.style.display == "none") {
    jsMenu.style.display = "inline";
    jsSns.style.display = "inline";
  } else {
    jsMenu.style.display = "none";
    jsSns.style.display = "none";
  }
});
