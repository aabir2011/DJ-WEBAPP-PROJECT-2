Harry_Potter = "music.mp3";
Peter_Pan = "music2.mp3";

function preoad(){
    Harry_Potter = loadSound("music.mp3");
    Peter_Pan = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 540);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}