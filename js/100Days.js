let d = document;

let $menu = d.getElementById("menu");
let $bar1 = d.querySelector(".bar1");
let $bar2 = d.querySelector(".bar2");
let $bar3 = d.querySelector(".bar3");
let $input = d.querySelector(".input");
let $lupa = d.querySelector(".search svg");
let $menu2 = d.querySelector(".dropDown svg");
let $panel = d.querySelector(".panel");
let $hideMenu = d.querySelector(".hideMenu");

let $open = d.querySelector(".phot");
let $bottom = d.querySelector(".infoBottom");
let $top = d.querySelector(".infoTop");
let $imgTop = d.querySelector(".imageTransition");
let $containerTopBottom = d.querySelector(".infoPhotoTransition");
let $close = d.querySelector(".closeInfoTransition");

let $obsession = d.querySelector(".obsession");
let $infoBlock = d.querySelector(".infoBlock");

d.addEventListener("click", (e) => {
  if (e.target === $menu) {
    $bar1.classList.toggle("activeMenu1");
    $bar2.classList.toggle("activeMenu2");
    $bar3.classList.toggle("activeMenu3");
  }

  if (e.target === $lupa) {
    $input.classList.toggle("active");
    $menu2.classList.toggle("hidy");
  }

  if (e.target === $menu2) {
    $panel.classList.toggle("move");
    $hideMenu.classList.toggle("move2");
  }

  if (e.target === $open) {
    $top.classList.add("moveTop");
    $bottom.classList.add("moveBottom");
    $imgTop.classList.add("moveImg");
    $containerTopBottom.classList.add("displayContainer");
  }

  if (e.target === $close) {
    $top.classList.remove("moveTop");
    $bottom.classList.remove("moveBottom");
    $imgTop.classList.remove("moveImg");
    $containerTopBottom.classList.remove("displayContainer");
  }
});

d.addEventListener("mouseover", (e) => {
  if (e.target === $obsession) {
    $infoBlock.classList.add("activeInfoBlock");
  }
});

d.addEventListener("mouseout", (e) => {
  if (e.target === $obsession) {
    $infoBlock.classList.remove("activeInfoBlock");
  }
});
