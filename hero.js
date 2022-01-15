class Hero {
  constructor(img, x, y, scale, health) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.health = health;
  }
  handleControls() {
    if (keyDown("RIGHT_ARROW")) {
      this.hero.x += 10;
      if (this.hero.x > 1400) {
        this.hero.x = 1300;
      }
    } else if (keyDown("LEFT_ARROW")) {
      this.hero.x -= 10;
      if (this.hero.x < 100) {
        this.hero.x = 300;
      }
    }
  }
  display() {
    this.hero = createSprite(this.x, this.y);
    this.hero.addImage(this.img);
    this.hero.scale = this.scale;
  }

  showHealth() {
    
    push();
    // image(lifeImg, width / 2 , 100 , 20, 20);
    fill("red");
    rect(width / 2 - 100, height - 350, 185, 20);
    rect(width / 2 - 100, height- 350, 185, 20);
    noStroke();
    pop();
  }
}
