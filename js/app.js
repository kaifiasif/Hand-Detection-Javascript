navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
// Select everything in my html
const video = document.querySelector('#video');
const audio = document.querySelector('#audio');

const canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let model;
// Start Video 
handTrack.startVideo(video)
    .then(status => {
        if (!status) {
            navigator.getUserMedia({ video: {} }, stream => {
                video.srcObject = stream;
                setInterval(detection, 1000);
            },
                err => console.log(err)
            );
        }
    })

function detection() {
    model.detect(video)
        .then(predictions => {
            console.log("Predictions", predictions);
            // modal.renderPredictions(predictions, canvas, context, video);
            if (predictions.length > 0) {
                audio.play();
            }
        });
}
// Load Handtrack
handTrack.load()
    .then(lmodel => {
        model = lmodel;
    })


