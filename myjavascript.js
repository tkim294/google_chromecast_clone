// Video autoplay management
var videoSource = new Array();
videoSource[0] = ' https://storage.googleapis.com/mannequin/blobs/a4c70e88-2049-4a05-911e-3d293c3c22ed.mp4';
videoSource[1] = 'https://storage.googleapis.com/mannequin/blobs/2c3bdd96-3648-492b-a1c9-9d79aba6b981.mp4';
videoSource[2] = 'https://storage.googleapis.com/mannequin/blobs/32ee9c44-a766-48f1-99bf-55cd60b54b07.mp4';
videoSource[3] = 'https://storage.googleapis.com/mannequin/blobs/4b6c776f-3be6-4a90-a3ae-290f5038a01f.mp4';
videoSource[4] = 'https://storage.googleapis.com/mannequin/blobs/7b2af470-1321-456f-b80d-a70039e7f443.mp4';

var numOfVideo = videoSource.length;
let currentVideo = 0;
const videoElement = document.getElementById('myVideo');

function videoPlay(videoNum) {
    videoElement.setAttribute('src', videoSource[videoNum]);
    videoElement.autoplay = true;
    videoElement.load();
}

document.getElementById('myVideo').addEventListener('ended', videoHandler, false);

videoPlay(0);
ensureVideoPlays();

function videoHandler() {
    currentVideo++;
    if (currentVideo === videoSource.length - 1) {
        currentVideo = 0;
        videoPlay(currentVideo);
    } else {
        videoPlay(currentVideo);
    }
}

function ensureVideoPlays() {
    const video = document.getElementById('myVideo');

    if (!video) return;

    const promise = video.play();
    if (promise !== undefined) {
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            video.muted = true;
            video.play();
        });
    }
}