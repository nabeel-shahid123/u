
right_wrist_x = "";
right_wrist_y = "";

right_wrist_score = "";
game_status = "";





 
function setup(){
  var canvas =  createCanvas(700,600);
 
  canvas.parent('canvas');
  
  video = createCapture(VIDEO);
  
  video.hide();
  
  video.size(700,600);


  poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
  

}

function modelLoaded(){
  console.log("Model is loaded");
}
function gotPoses(results){
  if (results.length > 0) {
    console.log(results);
    right_wrist_x = results[0].pose.rightWrist.x;
    right_wrist_y = results[0].pose.rightWrist.y;
    
    right_wrist_score = results[0].pose.keypoints[10].score;
   
  }
}
function startGame()
{
  game_status = "start";
  document.getElementById("status").innerHTML = "Game is loaded";
}
function draw(){

  if (game_status == "start") {
    
  }
 
 background(0); 
 image (video, 0, 0, 700, 600);
 
 fill("black");
 stroke("black");
 rect(680,0,20,700);

 fill("black");
 stroke("black");
 rect(0,0,20,700);}
 

