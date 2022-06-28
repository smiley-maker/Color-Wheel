let getColor;
let move;
let move2;
let move3;

function preload() {
  colorWheel = loadImage("Colorwheel.PNG");
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b){
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  move = random(100);
  move2 = random(100);
  move3 = random(100);
}

function draw(){
   background(255);
   push();
   image(colorWheel, 0, 0);
   colorWheel.resize(height * 0.5, height * 0.5);
   getColor = colorWheel.get(mouseX, mouseY);
   
   push();
   stroke(getColor[0], getColor[1], getColor[2]);
   fill(getColor[0], getColor[1], getColor[2], 100);
   ellipse(width * 0.5, height * 0.5, 133, 133);
   pop();
   
   fill(getColor);
   ellipse(mouseX, mouseY, 33, 33);
   pop();
   
   push();
   fill(0);
   noStroke();
   textSize(33);
   textFont("Times New Roman");
   textAlign(CENTER, CENTER);
   text(getColor, width * 0.5, height * 0.7);
   text(rgbToHex(getColor[0], getColor[1], getColor[2]), width * 0.5, height * 0.8);
   pop();
  
  push();
  strokeWeight(4);
  fill(getColor[0] + move, getColor[1] + move, getColor[2] + move);
  rect(width - 160, height * 0.7, 50, 140);

  fill(getColor[0] + move2, getColor[1] + move2, getColor[2] + move2);
  rect(width - 110, height * 0.7, 50, 140);
  
  fill(getColor[0] + move3, getColor[1] + move3, getColor[2] + move3);
  rect(width - 60, height * 0.7, 50, 140);  
  pop();
  
  push();
  
  fill(255, 99, 214);
  noStroke();
  textSize(26);
  textFont("Times New Roman");
  textAlign(CENTER, CENTER);
  text("Similar Colors:", width - 110, height * 0.6);

  pop();
  
}
