/*
----- Coding Tutorial by Patt Vira ----- 
Name: Mouse-Grid Interaction
Video Tutorial: https://youtu.be/hSDvqTMmOhA?si=4G9w9qORbUf4ZjhD

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let rectangles = [];
let cr = 10;
let cols;
let rows;
let size = 100;

function setup() {
  createCanvas(400, 400);
  cols = width / size;
  rows = height / size;
  for (let i = 0; i < cols; i++) {
    rectangles[i] = [];
    for (let j = 0; j < rows; j++) {
      rectangles[i][j] = new Rectangle(i * size, j * size, size, size);
    }
  }
  // r = new Rectangle(100, 100, 100, 50);
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rectangles[i][j].collided(mouseX, mouseY, cr);
      rectangles[i][j].drawRect();
    }
  }
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, cr * 2, cr * 2);
}
