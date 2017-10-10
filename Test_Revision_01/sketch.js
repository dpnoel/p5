function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var xPos, yPos, eSize, eColor, eSizeMax, eSteps;
  var dX, dY;
  var dMax;
  clear();
  xPos = windowWidth/2;
  yPos = windowHeight/2;
  eSizeMax = 600;
  eSize = eSizeMax;
  eColor = 0; 
  eSteps = 10;
  dMax = eSizeMax/(2*(eSteps-1));
  dX = (mouseX - windowWidth/2)/(eSteps-1);
  dY = (mouseY - windowHeight/2)/(eSteps-1);
  
  if(dX>dMax){
    dX = dMax;}
    else if(dX<-dMax){
      dX = -dMax;}
  
  if(dY>dMax){
    dY = dMax;}
    else if(dY<-dMax){
      dY = -dMax;} 
  
  for(var i = 0 ; i<eSteps; i++){
    drawEllipse(xPos, yPos, eSize, eColor);
    xPos += dX;
    yPos += dY;
    eSize -= eSizeMax/eSteps;
    eColor += 255/eSteps;
  }
}

function drawEllipse(x, y, d, c){
  fill(c);
  noStroke();
  ellipse(x, y, d);
}