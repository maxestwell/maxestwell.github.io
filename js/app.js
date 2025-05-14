function hideContentDivs() {
  const contentDivs = document.getElementsByClassName("content");
  for (let i = 0; i < contentDivs.length; ++i) {
    contentDivs[i].style.display = "none";
  }
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hideContentDivs();

    const targetContent = link.getAttribute("data-content");
    const targetDiv = document.querySelector(`.${targetContent}`);

    if (targetDiv) {
      targetDiv.style.display = "flex";
    }
  });
});

const headerContainer = document.querySelector(".header-container");
const numberOfContainers = 9;
const gridsPerContainer = 3;

for (let i = 0; i < numberOfContainers; i++) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let j = 0; j < gridsPerContainer; j++) {
    const gridMax = document.createElement("div");
    gridMax.classList.add("grid-max");
    gridContainer.appendChild(gridMax);
  }
  headerContainer.appendChild(gridContainer);
}

const gridMaxElements = document.querySelectorAll(".grid-max");

gridMaxElements.forEach((gridMax) => {
  const computedStyle = window.getComputedStyle(gridMax);
  const columns = computedStyle
    .getPropertyValue("grid-template-columns")
    .split(" ").length;

  const totalCells = columns;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("span");
    cell.classList.add("grid-cell");
    gridMax.appendChild(cell);
  }
});
