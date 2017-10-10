var balles = [];
var maxBalles = 10;
function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i=0; i<maxBalles; i++){
    balles[i] = new Balle;
  }
}
//********************************************
function draw() {
  clear();
 /* posY += speed;
  clear();*/
  /*if(posY>windowHeight || posY<0){
    speed = -speed;
  }*/
  for(var i=0; i<maxBalles; i++){
    drawEllipse(balles[i].posX, balles[i].posY, balles[i].eSize, balles[i].eColor);
  }
}
//********************************************
function drawEllipse(x,y,s,c){
  fill(c);
  noStroke();
  ellipse(x,y,s,s);
}
//********************************************
function Balle(){
  this.eSize = 100;
  this.eColor = color(250,150,50);
  this.posX = random(0,windowWidth);
  this.posY = random(0,windowHeight);
  this.speedX = 5;
  this.speedY = 5;
}