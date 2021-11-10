leftX=0;
rightwristX=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    rickroll=createCapture(VIDEO);
    rickroll.size(550,500);
    posenet=ml5.poseNet(rickroll,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background("white");
    textSize(difference);
    fill("gray");
    stroke("black");
    text("Ian",100,100);
document.getElementById("make").innerHTML="fontsize of the text will be ="+ difference + "px";    
}
function modelLoaded(){
    console.log("posenet initialized");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftX-rightwristX);
        console.log("leftX="+leftX+"rightwrist="+rightwristX+"difference="+difference);
    }
}