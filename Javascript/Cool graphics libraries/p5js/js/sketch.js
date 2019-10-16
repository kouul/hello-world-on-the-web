let x = 0;

function setup(){
  let myCanvas = createCanvas(500, 50);
  myCanvas.parent("containerDiv");
  background(100);
}

function draw(){
  ellipse(x, height/2, 25, 25);
  fill(100);
  x = x + 3
  if (x >= width){
    x = 0;
  }
}