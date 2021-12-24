// Video autoplay management
var videoSource = new Array();
videoSource[0] =
  " https://storage.googleapis.com/mannequin/blobs/a4c70e88-2049-4a05-911e-3d293c3c22ed.mp4";
videoSource[1] =
  "https://storage.googleapis.com/mannequin/blobs/2c3bdd96-3648-492b-a1c9-9d79aba6b981.mp4";
videoSource[2] =
  "https://storage.googleapis.com/mannequin/blobs/32ee9c44-a766-48f1-99bf-55cd60b54b07.mp4";
videoSource[3] =
  "https://storage.googleapis.com/mannequin/blobs/4b6c776f-3be6-4a90-a3ae-290f5038a01f.mp4";
videoSource[4] =
  "https://storage.googleapis.com/mannequin/blobs/7b2af470-1321-456f-b80d-a70039e7f443.mp4";

var numOfVideo = videoSource.length;
let currentVideo = 0;
const videoElement = document.getElementById("myVideo");
const shrinkedVideoElement = document.getElementById("shrinked-video");

function videoPlay(videoNum) {
    changeOpacityForAllButton();
    removeAnimation();
    switch(videoNum) {
        case 0:
            document.getElementById('netflix-button').style.opacity = 1;
            document.getElementById('netflix-progress1').classList.add('run-animation');
            document.getElementById('netflix-progress2').classList.add('run-animation');
            document.getElementById('netflix-progress3').classList.add('run-animation');
            break;
        case 1:
            document.getElementById('youtube-button').style.opacity = 1;
            document.getElementById('youtube-progress1').classList.add('run-animation');
            document.getElementById('youtube-progress2').classList.add('run-animation');
            document.getElementById('youtube-progress3').classList.add('run-animation');
            break;
        case 2: 
            document.getElementById('google-button').style.opacity = 1;
            document.getElementById('google-progress1').classList.add('run-animation');
            document.getElementById('google-progress2').classList.add('run-animation');
            document.getElementById('google-progress3').classList.add('run-animation');
            break;
        case 3:
            document.getElementById('hbo-button').style.opacity = 1;
            document.getElementById('hbo-progress1').classList.add('run-animation');
            document.getElementById('hbo-progress2').classList.add('run-animation');
            document.getElementById('hbo-progress3').classList.add('run-animation');
            break;
        case 4:
            document.getElementById('hulu-button').style.opacity = 1;
            document.getElementById('hulu-progress1').classList.add('run-animation');
            document.getElementById('hulu-progress2').classList.add('run-animation');
            document.getElementById('hulu-progress3').classList.add('run-animation');
            break;
    }

  videoElement.setAttribute("src", videoSource[videoNum]);
  videoElement.autoplay = true;
  videoElement.load();

  shrinkedVideoElement.setAttribute("src", videoSource[videoNum]);
  shrinkedVideoElement.autoplay = true;
  shrinkedVideoElement.load();
}

document
  .getElementById("myVideo")
  .addEventListener("ended", videoHandler, false);

document
  .getElementById("shrinked-video")
  .addEventListener("ended", videoHandler, false);

videoPlay(0);
ensureVideoPlays("myVideo");
ensureVideoPlays("shrinked-video");


function videoHandler() {
    currentVideo++;
    if (currentVideo === videoSource.length) {
      currentVideo = 0;
      videoPlay(currentVideo);
    } else {
      videoPlay(currentVideo);
    }
  }

function ensureVideoPlays(id) {
  const video = document.getElementById(id);

  if (!video) return;

  const promise = video.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        // Autoplay started
      })
      .catch((error) => {
        // Autoplay was prevented.
        video.muted = true;
        video.play();
      });
  }
}


// Click change video
if(document.querySelector('.circle-button')) {
    document.querySelectorAll('.circle-button').forEach((el, index) => {

        // bind click event to each el
        el.addEventListener('click', function (e) {
            currentVideo = index;

            document
            .getElementById("myVideo")
            .addEventListener("ended", videoHandler, false);

            document
            .getElementById("shrinked-video")
            .addEventListener("ended", videoHandler, false);

            videoPlay(index);
            ensureVideoPlays("myVideo");
            ensureVideoPlays("shrinked-video");
            
        });

    });
}

// make all button opacity of 0.5 
function changeOpacityForAllButton() {
    if(document.querySelector('.circle-button')) {
        document.querySelectorAll('.circle-button').forEach((el, index) => {
            el.style.opacity = 0.5;
        });
    }
}

// Remove animation class from all button class
function removeAnimation() {
    document.getElementById('netflix-progress1').classList.remove('run-animation');
    document.getElementById('netflix-progress2').classList.remove('run-animation');
    document.getElementById('netflix-progress3').classList.remove('run-animation');

    document.getElementById('youtube-progress1').classList.remove('run-animation');
    document.getElementById('youtube-progress2').classList.remove('run-animation');
    document.getElementById('youtube-progress3').classList.remove('run-animation');

    document.getElementById('google-progress1').classList.remove('run-animation');
    document.getElementById('google-progress2').classList.remove('run-animation');
    document.getElementById('google-progress3').classList.remove('run-animation');

    document.getElementById('hbo-progress1').classList.remove('run-animation');
    document.getElementById('hbo-progress2').classList.remove('run-animation');
    document.getElementById('hbo-progress3').classList.remove('run-animation');

    document.getElementById('hulu-progress1').classList.remove('run-animation');
    document.getElementById('hulu-progress2').classList.remove('run-animation');
    document.getElementById('hulu-progress3').classList.remove('run-animation');
}