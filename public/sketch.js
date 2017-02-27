const easerCount = 500
const easing = 0.05
const diameter = 10
let easer = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  // console.log(`${windowWidth}, ${windowHeight}`)
  noStroke()
  background(255)

  for (let i = 0; i < easerCount; i++) {
    let e = new Easer(width / 2, height / 2, diameter, easing)
    easer.push(e)
  }
}

function draw() {
  background(255)

  for (let i = 0; i < easer.length; i++) {
    easer[i].update()
    easer[i].render()
  }
}

function mousePressed() {
  for (let i = 0; i < easer.length; i++) {
    easer[i].setTarget(mouseX, mouseY)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}


function Easer(xpos, ypos, diameter, newEasing) {
  this.x = xpos
  this.y = ypos
  this.targetX = this.x
  this.targetY = this.y
  this.d = diameter
  this.ease = newEasing
  this.clr = color(random(0, 255), random(0, 255), random(0, 255), 127)

  this.render = function() {
    fill(this.clr)
    ellipse(this.x, this.y, this.d, this.d)
  }

  this.update = function() {
    let dx = this.targetX - this.x
    let dy = this.targetY - this.y
    if (abs(dx) > 0.1 || abs(dy) > 0.1) {
      this.x += dx * this.ease
      this.y += dy * this.ease
    } else {
      this.setRandomTarget()
    }
  }

  this.setTarget = function(xpos, ypos) {
    this.targetX = xpos
    this.targetY = ypos
  }

  this.setRandomTarget = function() {
    this.targetX = random(0, width)
    this.targetY = random(0, height)
  }
}

