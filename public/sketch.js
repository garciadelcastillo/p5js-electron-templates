var easerCount = 500;
var easing = 0.05;
var diameter = 10;

var easer = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);

  for (var i = 0; i < easerCount; i++) {
    var e = new Easer(width / 2, height / 2, diameter, easing);
    easer.push(e);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < easer.length; i++) {
    easer[i].update();
    easer[i].render();
  }
}

function mousePressed() {
  for (var i = 0; i < easer.length; i++) {
    easer[i].setTarget(mouseX, mouseY);
  }
}


function Easer(xpos, ypos, diameter, newEasing) {
  this.x = xpos;
  this.y = ypos;
  this.targetX = this.x;
  this.targetY = this.y;
  this.d = diameter;
  this.ease = newEasing;
  this.clr = color(random(0, 255), random(0, 255), random(0, 255), 127);

  this.render = function() {
    fill(this.clr);
    ellipse(this.x, this.y, this.d, this.d);
  }

  this.update = function() {
    var dx = this.targetX - this.x;
    var dy = this.targetY - this.y;
    if (abs(dx) > 1.0 || abs(dy) > 1.0) {
      this.x += dx * this.ease;
      this.y += dy * this.ease;
    } else {
      this.setRandomTarget();
    }
  }

  this.setTarget = function(xpos, ypos) {
    this.targetX = xpos;
    this.targetY = ypos;
  }

  this.setRandomTarget = function() {
    this.targetX = random(0, width);
    this.targetY = random(0, height);
  }
}

