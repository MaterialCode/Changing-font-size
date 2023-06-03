function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 550)
    canvas.position(100, 110)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('#d9534f')
}

function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
    }
}
