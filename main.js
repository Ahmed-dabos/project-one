let menu = document.getElementsByClassName("menu")[0];
menu.style.cursor = "pointer";
let ul = document.getElementsByTagName("ul")[0];
let span = document.getElementsByTagName("span")[1];
menu.addEventListener("click", function (event) {
  span.style.width = "100%";
  ul.style.display = "block";
  event.stopPropagation();
});
document.addEventListener("click", function () {
  ul.style.display = "none";
  span.style.width = "60%";
});
