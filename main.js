Webcam.set {(
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
)};

camera = document.getElementById("webcam_live_view");

Webcam.attach('#camera');

function CaptureImage() {
    Webcam.snap(function (data_uri) {
       document.getElementById("captured_image").innerHTML = '<img id = capturedimage src = "' + data_uri + '"/>'; 
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Jps5fQdvb/model.json");