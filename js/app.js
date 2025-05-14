function hideContentDivs() {
  const contentDivs = document.getElementsByClassName("content");
  for (let i = 0; i < contentDivs.length; ++i) {
    contentDivs[i].style.display = "none";
  }
}

// Select all <a> elements in the <nav>
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hideContentDivs();

    // Get the target content class from the data-content attribute
    const targetContent = link.getAttribute("data-content");
    const targetDiv = document.querySelector(`.${targetContent}`);

    // Display the corresponding content div
    if (targetDiv) {
      targetDiv.style.display = "flex";
    }
  });
});

const headerContainer = document.querySelector(".header-container");
const numberOfContainers = 9; // Adjust this number as needed
const gridsPerContainer = 3; // Number of grid-max elements per container

for (let i = 0; i < numberOfContainers; i++) {
  // Create a new grid-container
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  // Populate the grid-container with grid-max elements
  for (let j = 0; j < gridsPerContainer; j++) {
    const gridMax = document.createElement("div");
    gridMax.classList.add("grid-max");
    gridContainer.appendChild(gridMax);
  }

  // Append the grid-container to the grid-container-boss
  headerContainer.appendChild(gridContainer);
}

// Existing logic for populating grid-max elements
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
