// cursor
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveinnerCursor);

function moveinnerCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  // console.log(x,y)
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("transform");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("transform");
  });
  link.addEventListener("mouseover", () => {
    outerCursor.classList.add("transform");
  });
  link.addEventListener("mouseleave", () => {
    outerCursor.classList.remove("transform");
  });
});

// slideshow

/* Find all slideshow containers */
var slideshowContainers = document.getElementsByClassName(
  "slideshow-container"
);
/* For each container get starting variables */
for (let s = 0; s < slideshowContainers.length; s++) {
  /* Read the new data attribute */
  var cycle = slideshowContainers[s].dataset.cycle;
  /* Find all the child nodes with class mySlides */
  var slides = slideshowContainers[s].querySelectorAll(".mySlides");
  var slideIndex = 0;
  /* Now we can cycle slides, but this recursive function must have parameters */
  /* slides and cycle never change, those are unique for each slide container */
  /* slideIndex will increase during each iteration */
  showSlides(slides, slideIndex, cycle);
}

/* Function is alsmost same, but now it uses 3 new parameters */
function showSlides(slides, slideIndex, cycle) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  /* Calling same function, but with new parameters and cycle time */
  setTimeout(function () {
    showSlides(slides, slideIndex, cycle);
  }, cycle);
}
