let iconGrids = document.querySelectorAll(".grid-line");

let items = document.querySelectorAll(".item");
let images = document.querySelectorAll(".item-image");
let itemsContent = document.querySelectorAll(".item-content");
let likesWrapper = document.querySelectorAll(".item-section-likes__wrapper");
let itemStats = document.querySelectorAll(".item-stats");
let itemSections = document.querySelectorAll(".item-section");

let heroList = document.querySelector(".hero__list");
let crossBtn = document.querySelector(".fa-xmark");
let airDatePickerInp = document.getElementById("airDatepicker");
let loadMoreBtn = document.querySelector(".load-more-btn");

crossBtn.addEventListener("click", () => {
  airDatePickerInp.value = "";
});

loadMoreBtn.addEventListener("click", () => {
  window.alert("Thank you for watching!");
});

function changeClassName(subject, className) {
  subject.classList.toggle(className);
}

function changeClassNameMulty(nodeList, className) {
  nodeList.forEach((item) => {
    item.classList.toggle(className);
  });
}

iconGrids.forEach((iconGrid) => {
  iconGrid.addEventListener("click", () => {
    iconGrids.forEach((icon) => icon.classList.remove("grid-line--active"));

    iconGrid.classList.add("grid-line--active");

    changeClassName(heroList, "hero__list--grid");
    changeClassNameMulty(items, "item--grid");
    changeClassNameMulty(images, "item-image--grid");
    changeClassNameMulty(itemsContent, "item-content--grid");
    changeClassNameMulty(likesWrapper, "item-section-likes__wrapper--grid");
    changeClassNameMulty(itemStats, "item-stats--grid");
    changeClassNameMulty(itemSections, "item-section--grid");
  });
});
