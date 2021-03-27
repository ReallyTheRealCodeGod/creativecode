// Click and Drag an object

let musicbox1;
let musicbox2;
let musicbox3;
let beatbox1;


function setup() {
  createCanvas(640, 360);
  musicbox1 = new musicBox(100, 100, 50, 50);
  musicbox2 = new musicBox(150, 100, 50, 50);
  musicbox3 = new musicBox(200, 100, 50, 50);

  beatbox1 = new beatBox(250,100,100,50);
}

function draw() {
// background(255);
  background('rgb('+ musicbox1.y +','+ musicbox2.y +','+ musicbox3.y +')');
  musicbox1.over();
  musicbox1.update();
  musicbox1.show();
  musicbox2.over();
  musicbox2.update();
  musicbox2.show();
  musicbox3.over();
  musicbox3.update();
  musicbox3.show();

  beatbox1.over();
  beatbox1.update();
  beatbox1.show();
  
  //console.log(musicbox1.x)

}

function mousePressed() {
  musicbox1.pressed();
  musicbox2.pressed();
  musicbox3.pressed();
  beatbox1.pressed();
}

function mouseReleased() {
  musicbox1.released();
  musicbox2.released();
  musicbox3.released();
  beatbox1.released();
}