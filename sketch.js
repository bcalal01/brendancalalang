let x = 0
let y = 50;

let yvelocity = 1;
let xvelocity = 1.2;

let acceleration = 1;

let fading = false;

const imageheight = 176;
const imagewidth = 135;

//const mycanvas = document.getElementById('mycanvas')

const onoff = document.getElementById('offbutton')
const headshot = document.getElementById('me')

let motion = true;

let counter = 0;
let bounces = 0;
var mycanvas;

const container = document.getElementById('container')


function preload() {

    img = loadImage("images/linkedin.png");
  }

function setup() {
    //createCanvas(windowWidth, windowHeight, mycanvas);
    //console.log(mycanvas)
    mycanvas = createCanvas(windowWidth, windowHeight);
    mycanvas.style('opacity', 1);
    noFill();
    strokeWeight(3);
    x = random(0, windowWidth - imagewidth);
    //while ((xvelocity < 2) && (xvelocity > -2)) {
    //    console.log(xvelocity)
    //    xvelocity = random(-7, 7)
    //}
    image(img, x, y, imagewidth, imageheight);
    rect(x, y, imagewidth, imageheight, 5)
}

function fadeCanvas() {
    mycanvas.style('opacity', 0)
}

  
function draw() {

    counter++

    background(255)

    if (counter > 0) {
        //yvelocity += acceleration;
        x += xvelocity;
        y += yvelocity;
        if ((y > height - imageheight) && (bounces < 10)) {
            y = height - imageheight;
        }
        if ((y < 0) && (bounces < 10)) {
            y = 0;
        }
        if ((y >= height - imageheight) || (y <= 0)) {
            bounces ++;
            if (bounces < 10) {
                yvelocity = -yvelocity
                //xvelocity = random(xvelocity - .5, xvelocity + .5)
                //yvelocity += 1
            } else {
                yvelocity = -yvelocity
                //xvelocity = random(xvelocity - .5, xvelocity + .5)
                //fadeCanvas()
            }
        }

        if ((x > width - imagewidth) || (x < 0)) {
            bounces++
            if (bounces < 10) {
                xvelocity = -xvelocity
                //yvelocity = random(yvelocity - .5, yvelocity + .5)
            } else {
                xvelocity = -xvelocity
                //yvelocity = random(yvelocity - .5, yvelocity + .5)
                //fadeCanvas()
            }
        }

        drawpicture()
    }

    if (fading) {

    }
}

function drawpicture() {

    if (motion) {
        image(img, x, y, imagewidth, imageheight);
        rect(x, y, imagewidth, imageheight, 5)
    }
}

onoff.onclick = function() {
    console.log("hi")
    if (motion) {
        headshot.style.display = "block"
        onoff.innerHTML = "Turn on floating head"
        motion = false;
    } else {
        headshot.style.display = "none"
        onoff.innerHTML = "Turn off floating head"
        motion = true;
    }
}