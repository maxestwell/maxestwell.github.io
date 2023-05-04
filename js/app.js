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

// carousel for analog
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
