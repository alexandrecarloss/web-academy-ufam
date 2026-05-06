// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

const colorPicker = document.getElementById("colorPicker");

function hexToHue(hex) {
  const r = parseInt(hex.substr(1, 2), 16) / 255;
  const g = parseInt(hex.substr(3, 2), 16) / 255;
  const b = parseInt(hex.substr(5, 2), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;

  if (max === min) h = 0;
  else if (max === r) h = (60 * (g - b) / (max - min) + 360) % 360;
  else if (max === g) h = 60 * (b - r) / (max - min) + 120;
  else h = 60 * (r - g) / (max - min) + 240;

  return h;
}

let themeHue = 200;

colorPicker.addEventListener("input", () => {
  themeHue = hexToHue(colorPicker.value);
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function colorFromTheme(hue, saturation = 70) {
  const lightness = random(30, 70);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function randomShape() {
  const shapes = ["circle", "square", "triangle"];
  return shapes[random(0, shapes.length - 1)];
}

class Ball {
  constructor(x, y, velX, velY, color, size, shape) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.shape = shape;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
  
    if (this.shape === "circle") {
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    }
  
    else if (this.shape === "square") {
      ctx.rect(
        this.x - this.size,
        this.y - this.size,
        this.size * 2,
        this.size * 2
      );
    }
  
    else if (this.shape === "triangle") {
      ctx.moveTo(this.x, this.y - this.size);
      ctx.lineTo(this.x - this.size, this.y + this.size);
      ctx.lineTo(this.x + this.size, this.y + this.size);
      ctx.closePath();
    }
  
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = colorFromTheme(themeHue);
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    colorFromTheme(themeHue),
    size,
    randomShape()
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();