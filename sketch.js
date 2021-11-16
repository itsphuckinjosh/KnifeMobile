var x = 0;
let run = true

function setup() {
 
  img = loadImage('Knife3.png');
  
}

function draw() {
  var canvDim = 350
  createCanvas(canvDim, canvDim);
  imageMode(CENTER);

  var imgScl = .19
  var imgW = img.width * imgScl
  var imgH = img.height * imgScl

let a = atan2(mouseY - height / 2, mouseX - width / 2);
  
    x -= 0.01;
    
    translate(canvDim / 2+5, canvDim / 2); 


  if (run == true){
    for (let i = 0; i < 10; i++) {
      rotate(cos(x));
      image(img, 0, 0, imgW, imgH);
    }
  }
  
  if (run == false){
    rotate(a-PI);
    image(img, 0, 0, imgW, imgH);
  }

}

  function touchStarted() {
  if (run == true){
    run = false
  } else if (run == false){
    run = true
  }
  }

  function touchEnded() {
  if (run == true){
    run = false
  } else if (run == false){
    run = true
  }
  }