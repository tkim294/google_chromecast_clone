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

// Image change timer management
var image = document.getElementById('main-image');
var imageArray = [
    'https://lh3.googleusercontent.com/UBUETCc8EVM-7oW51JEU5xMEHtrQLXOfHO7copH2Hshg0KNCONshfc2yIMwCSHmU-J9lt7l8pblDC7NhtLp9Lhubv1wSHg4_lZL5=rw-w1230',
    'https://lh3.googleusercontent.com/OYo1qxZwLVn155V6NLcbq69iUGabvSgP5YyyBEkwEvZYw70ZYN7pbt5Lx3rS7uWGP0URFVuWa2boSdjHL1sBD_Z3n5bVoiVOg3s=rw-w1230',
    'https://lh3.googleusercontent.com/g0yZeeumvKhaxed-Uw6EMkGQnQs38766KNty4BSX6KVAdm9yFwSAAaITaHCpDJUcGFT_NVdPAJ6BlGs9CwErT1pQZLBV37EBFQ=rw-w1230'
];
var imageIndex = 0;

function changeImage() {
    image.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex > imageArray.length - 1) {
        imageIndex = 0;
    }
}

setInterval(changeImage, 5000);

// text hovering effect on the image
var controller = new ScrollMagic.Controller();

// text click changes image
function openImg(index) {}