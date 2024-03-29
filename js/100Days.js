let d = document;

/* DAY-2 */
let $menu = d.getElementById("menu");
let $bar1 = d.querySelector(".bar1");
let $bar2 = d.querySelector(".bar2");
let $bar3 = d.querySelector(".bar3");

/* DAY-7 */
let $lupa = d.querySelector(".search svg");
let $input = d.querySelector(".inputPanel");
let $menu2Icon = d.querySelector(".dropDownPanel svg");
let $menu2 = d.querySelector(".dropDownPanel");
let $panel = d.querySelector(".panel");
let $hideMenu = d.querySelector(".hideMenuPanel");


let $open = d.querySelectorAll(".phot");
let $bottom = d.querySelector(".infoBottom");
let $top = d.querySelector(".infoTop");
let $imgTop = d.querySelector(".imageTransition");
let $close = d.querySelector(".closeInfoTransition");

let $obsession = d.querySelector(".obsession");
let $infoBlock = d.querySelector(".infoBlock");

d.addEventListener("click", (e) => {

  /* DAY-2 */
  if (e.target === $menu) {
    $bar1.classList.toggle("activeMenu1");
    $bar2.classList.toggle("activeMenu2");
    $bar3.classList.toggle("activeMenu3");
  }

 /* DAY-7 */
  if (e.target === $lupa) {
    $input.classList.toggle("activeInputPanel");
    $menu2.classList.toggle("hiddenMenuPanel");
  }
  if (e.target === $menu2Icon) {
    $panel.classList.toggle("movePanel");
    $hideMenu.classList.toggle("movePanelHide");
  }


  $open.forEach((element) => {
    if (e.target === element) {
      $top.classList.toggle("moveTop");
      $bottom.classList.toggle("moveBottom");
      $imgTop.classList.toggle("moveImg");
      $close.classList.toggle("moveClose");
    }
  });

  if (e.target === $close) {
    $top.classList.toggle("moveTop");
    $bottom.classList.toggle("moveBottom");
    $imgTop.classList.toggle("moveImg");
    $close.classList.toggle("moveClose");
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
