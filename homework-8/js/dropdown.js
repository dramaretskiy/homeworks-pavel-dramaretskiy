// 6. Реализовать примитивный дропдаун
let getMenu = document.querySelector(".menu");

getMenu.addEventListener("click", ({ target }) => {
  let close = getMenu.querySelector(".close");

  if (close) {
    close.classList.remove("close");
    close.classList.add("d-none");
  }

  let itemLi;
  if (target.tagName === "Li") {
    itemLi = target;
  } else {
    itemLi = target.closest("li");
  }

  let liClose = itemLi.querySelector(".dropdown-menu");
  if (liClose) {
    liClose.classList.add("close");
    liClose.classList.remove("d-none");
  } else {
    alert("Кликни на список!");
  }

  if (liClose === close) {
    close.classList.remove("close");
    close.classList.add("d-none");
  }
});
