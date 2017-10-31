var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// functions ------------------
function resizeCanvas(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

// events ----------------------
window.addEventListener('resize', resizeCanvas );
resizeCanvas();


var run00;
var run01;
var run02;
var run03;
var run04;
var run05;
var run06;
var run07;
var run08;
var run09;
var run10;
var run11;
var run12;
var run13;

//set each image up as a variable

var counter = 0;

//as well as a counter variable

function preload() {
  run00 = loadImage("pics/run1.png");
  run01 = loadImage("pics/run2.png");
  run02 = loadImage("pics/run3.png");
  run03 = loadImage("pics/run4.png");
  run04 = loadImage("pics/run5.png");
  run05 = loadImage("pics/run6.png");
  run06 = loadImage("pics/run7.png");
  run07 = loadImage("pics/run8.png");
  run08 = loadImage("pics/run9.png");
  run09 = loadImage("pics/run10.png");
  run10 = loadImage("pics/run11.png");
  run11 = loadImage("pics/run12.png");
  run12 = loadImage("pics/run13.png");
  run13 = loadImage("pics/run14.png");



  //load each frame in your preload function

}


function setup(){

	createCanvas(2000, 2000);



}

function draw(){

if(mouseIsPressed){

if(counter == 0){
image(run00, mouseX-128, mouseY-128);
}
if(counter == 1){
image(run01, mouseX-128, mouseY-128);
}
if(counter == 2){
image(run02, mouseX-128, mouseY-128);
}
if(counter == 3){
image(run03, mouseX-128, mouseY-128);
}
if(counter == 4){
image(run04, mouseX-128, mouseY-128);
}
if(counter == 5){
image(run05, mouseX-128, mouseY-128);
}
if(counter == 6){
image(run06, mouseX-128, mouseY-128);
}
if(counter == 7){
image(run07, mouseX-128, mouseY-128);
}
if(counter == 8){
image(run08, mouseX-128, mouseY-128);
}
if(counter == 9){
image(run09, mouseX-128, mouseY-128);
}
if(counter == 10){
image(run10, mouseX-128, mouseY-128);
}
if(counter == 11){
image(run11, mouseX-128, mouseY-128);
}
if(counter == 12){
image(run13, mouseX-128, mouseY-128);
}
if(counter == 13){
image(run13, mouseX-128, mouseY-128);
}
if(counter == 14){
image(run14, mouseX-128, mouseY-128);
}

//then create a series of if statements.

if(counter < 13){ counter = counter+1;}
else{counter = 0;}

//finally, create an if statement that says "if the counter is less than 14, add one to the counter. if it is 7, reset the counter back to 0 (so the counter will loop

}

}

//RESIZE YOUR IMAGES TMR!!
