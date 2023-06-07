difference = 0
rightWristX = 0
leftWristX = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 550)
    canvas.position(100, 110)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('#ff5349')
    fill('#ff5349')
    text('Jay Pandya', 100, 100)
    textSize(difference)
}

function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

        rightWristX = results[0].pose.rightWrist.x
        leftWristX = results[0].pose.leftWrist.x

        difference = floor(leftWristX - rightWristX)
    }
}
