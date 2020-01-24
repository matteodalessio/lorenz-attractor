var x = y = z = Math.random();
var dx, dy, dz;
var dt = 0.01;

var s = 10;
var b = 8/3;
var p = 28;

function setup() {

    pixelDensity(10);
    createCanvas(500, 500);
    background(0);
    stroke(255);
}

function draw() {

    dx = (s*(y - x)) * dt;
    dy = (p*x - x*z - y) * dt;
    dz = (x*y - b*z) * dt;

    x = x + dx;
    y = y + dy;
    z = z + dz;

    translate(width/2, height/2);
    scale(5);
    strokeWeight(0.2);
    bezier(x, y);
}