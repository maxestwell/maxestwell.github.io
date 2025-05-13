function hideContentDivs() {
  const contentDivs = document.getElementsByClassName("content");
  for (let i = 0; i < contentDivs.length; ++i) {
    const div = contentDivs[i];
    div.style.display = "none";
  }
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
