status = "";
objects = [];

function preload() {

}

function setup() {
    canvas = createCanvas(380, 280);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 380, 280)
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Searching for Object";
}

function modelLoaded() {
    console.log("model has loaded!");
    status = true;
}