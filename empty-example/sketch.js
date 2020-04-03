function setup() { // !!! replace void !!!
  createCanvas(400, 400); // !!!replace size(width, height); !!!!
  background (25);
}

function draw() { // !!! replace void !!!
  var cx = map(mouseX, 0, width, 0, 255); // !!! replace float !!!
  var cy = map(mouseY, 0, height, 0, 255); // !!! replace float !!!
  var nsize = width/8+cos(mouseY*PI/180)*width/20; // !!! replace float !!!
  // 基本型
  fill(cx,cy,150,50);
  noStroke();
  rect(mouseX,mouseY,nsize,nsize);

  var msize = map(mouseX, 0, width, 0, height);
  ellipse (width/2, height/2, msize/2,msize/2 );
  fill ( mouseX, mouseY, 0);
  noStroke();
}