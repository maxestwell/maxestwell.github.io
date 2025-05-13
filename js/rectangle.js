class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collide = false;
  }

  drawRect() {
    if (this.collide) {
      fill(255, 255, 0);
    } else {
      fill(255);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  collided(cx, cy, cr) {
    let closeX = cx;
    let closeY = cy;
    // 1. Check where the circle is relative to the rectangle
    if (cx > this.x + this.w) {
      closeX = this.x + this.w;
    } else if (cx < this.x) {
      closeX = this.x;
    }

    if (cy > this.y + this.h) {
      closeY = this.y + this.h;
    } else if (cy < this.y) {
      closeY = this.y;
    }

    // 2. Calculate the distance between cx, cy and the rectangle's closest edges
    let distX = cx - closeX;
    let distY = cy - closeY;
    let distance = sqrt(distX * distX + distY * distY);
    // let d = dist(cx, cy, closeX, closeY);

    // 3. Check if collided
    if (distance <= cr) {
      this.collide = true;
    } else {
      this.collide = false;
    }
  }
}
