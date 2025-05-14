let img;
let ditherMatrix = [
  [1, 49, 13, 61, 4, 52, 16, 64],
  [33, 17, 45, 29, 36, 20, 48, 32],
  [9, 57, 5, 53, 12, 60, 8, 56],
  [41, 25, 37, 21, 44, 28, 40, 24],
  [3, 51, 15, 63, 2, 50, 14, 62],
  [35, 19, 47, 31, 34, 18, 46, 30],
  [11, 59, 7, 55, 10, 58, 6, 54],
  [43, 27, 39, 23, 42, 26, 38, 22],
];
let scaleFactor = 0.15; // Change this to adjust the resolution

function preload() {
  img = loadImage("/assets/images/sunflowers.jpeg"); // Load your image here
}

function setup() {
  createCanvas(img.width * scaleFactor, img.height * scaleFactor);
  image(img, 0, 0);
  dither();
}

function dither() {
  loadPixels();
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      // Convert to grayscale using the Luma formula
      let grayscale = 0.299 * r + 0.587 * g + 0.114 * b;

      // Get the corresponding value from the dither matrix
      let ditherValue = (grayscale / 255) * 65;

      // Apply dithering
      if (ditherValue > ditherMatrix[x % 8][y % 8]) {
        for (let i = 0; i < scaleFactor; i++) {
          for (let j = 0; j < scaleFactor; j++) {
            set(x * scaleFactor + i, y * scaleFactor + j, color(255));
          }
        }
      } else {
        for (let i = 0; i < scaleFactor; i++) {
          for (let j = 0; j < scaleFactor; j++) {
            set(x * scaleFactor + i, y * scaleFactor + j, color(0));
          }
        }
      }
    }
  }

  updatePixels();
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("dithered_image", "jpg");
  }
}
