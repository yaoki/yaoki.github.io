var i = 0;
function setup() {
 createCanvas(400,400); 
}

function draw() {
  background(0);
  stroke(0,255,0);
 line(10,50,100,100 - 0.3 * i);
  i += 1;
  line(100,100 - 0.3 * i,200 + sqrt(i),i * 3.14);
  if (i > 400 / 3.14) i = 0;
 ellipse(100,100 - 0.3 * i,50,50);
 ellipse(200 + sqrt(i),i * 3.14,20,20);
}