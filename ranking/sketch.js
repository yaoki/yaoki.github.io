var i = 0;
var data, label;
var maxData;
var maxWidth = screen.width /3;
var constant;
function setup() {
  label = ["a","b","c","d","e","f","g"];
  data = [100, 200, 300, 400, 580, 600, 925];
  maxData = max(data);
  constant = maxWidth/maxData;
 createCanvas(maxData * constant,500); 
}
function draw() {
  console.log(screen.width);
  background(0);
  stroke(0,255,0);
  //X軸
  line(29,400,maxData*constant,400)
  //Y軸
  line(29,10,29,400);

// line(10,50,100,100 - 0.3 * i);
//   i += 1;
//   line(100,100 - 0.3 * i,200 + sqrt(i),i * 3.14);
//   if (i > 400 / 3.14) i = 0;
// ellipse(100,100 - 0.3 * i,50,50);
// ellipse(200 + sqrt(i),i * 3.14,20,20);
  for(j=0; j<13; j +=1){
    fill(255);
    noStroke();
    textSize(15);
    text(label[j],0,30*j+25);
    
    //グラフを描く
    fill(0,0,255);
    noStroke();
    if( max(data) == j){
      fill(255,0,0);
      line(400, 0, 200, 10);
    }
    rect(30,30*j + 10,data[j]*constant,15);
  }
}

