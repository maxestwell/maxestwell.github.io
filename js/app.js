function hideAllContentDivs() {
  const contentDivs = document.getElementsByClassName("content");
  for (let i = 0; i < contentDivs.length; ++i) {
    const div = contentDivs[i];
    div.style.display = "none";
  }
}

const gridMax = document.querySelector(".grid-max");

if (gridMax) {
  const computedStyle = window.getComputedStyle(gridMax);
  const columns = computedStyle
    .getPropertyValue("grid-template-columns")
    .split(" ").length;
  const rows = computedStyle
    .getPropertyValue("grid-template-rows")
    .split(" ").length;

  const totalCells = columns * rows;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("span");
    cell.classList.add("grid-cell");
    gridMax.appendChild(cell);
  }

  // const m = [
  //   2, 101, 201, 301, 401, 501, 601, 701, 103, 204, 105, 6, 107, 207, 307, 407,
  //   507, 607, 707,
  // ];
  // const a = [
  //   12, 111, 210, 310, 410, 510, 610, 710, 113, 214, 314, 414, 514, 614, 714,
  // ];

  // const targetIndices = [...m, ...a];

  // targetIndices.forEach((index) => {
  //   const specificCell = gridMax.children[index];
  //   if (specificCell) {
  //     specificCell.style.backgroundColor = "#ffc033";
  //     specificCell.style.pointerEvents = "none";
  //   }
  // });
}
