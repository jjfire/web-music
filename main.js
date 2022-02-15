scoreLeftWrist = 0;
scoreRightWrist = 0;
song = "";
song1="";
leftWristX = 0;
leftWristY = 0;
status1="";
status2="";
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');

}

function draw() {
    image(video, 0, 0, 600, 500);
status1=song.isPlaying();
status2=song1.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");

    if (scoreRightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);
song1.stop()
        
if (song.isPlaying()== false) {
            song.play()
            document.getElementById("song_name").innerHTML= " Song: Harry Potter";
        } 
    }

    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song.stop()

        if(song1.isPlaying()== false){
            song1.play()
            document.getElementById("song_name").innerHTML= "Song: Peter Pan";
        }
    }
}



function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
    }
}