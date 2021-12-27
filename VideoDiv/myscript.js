// Video autoplay management
var videoSource1 = new Array();
videoSource1[0] =
    " https://storage.googleapis.com/mannequin/blobs/a4c70e88-2049-4a05-911e-3d293c3c22ed.mp4";
videoSource1[1] =
    "https://storage.googleapis.com/mannequin/blobs/2c3bdd96-3648-492b-a1c9-9d79aba6b981.mp4";
videoSource1[2] =
    "https://storage.googleapis.com/mannequin/blobs/32ee9c44-a766-48f1-99bf-55cd60b54b07.mp4";
videoSource1[3] =
    "https://storage.googleapis.com/mannequin/blobs/4b6c776f-3be6-4a90-a3ae-290f5038a01f.mp4";
videoSource1[4] =
    "https://storage.googleapis.com/mannequin/blobs/7b2af470-1321-456f-b80d-a70039e7f443.mp4";

var numOfVideo = videoSource1.length;
let currentVideo1 = 0;
const videoElement1 = document.getElementById("myVideo1");
const shrinkedvideoElement1 = document.getElementById("shrinked-video");

function videoPlayShrink(videoNum) {
    changeOpacityForAllButton();
    removeAnimation();
    switch (videoNum) {
        case 0:
            document.getElementById("netflix-button").style.opacity = 1;
            document
                .getElementById("netflix-progress1")
                .classList.add("run-animation");
            document
                .getElementById("netflix-progress2")
                .classList.add("run-animation");
            document
                .getElementById("netflix-progress3")
                .classList.add("run-animation");
            break;
        case 1:
            document.getElementById("youtube-button").style.opacity = 1;
            document
                .getElementById("youtube-progress1")
                .classList.add("run-animation");
            document
                .getElementById("youtube-progress2")
                .classList.add("run-animation");
            document
                .getElementById("youtube-progress3")
                .classList.add("run-animation");
            break;
        case 2:
            document.getElementById("google-button").style.opacity = 1;
            document
                .getElementById("google-progress1")
                .classList.add("run-animation");
            document
                .getElementById("google-progress2")
                .classList.add("run-animation");
            document
                .getElementById("google-progress3")
                .classList.add("run-animation");
            break;
        case 3:
            document.getElementById("hbo-button").style.opacity = 1;
            document.getElementById("hbo-progress1").classList.add("run-animation");
            document.getElementById("hbo-progress2").classList.add("run-animation");
            document.getElementById("hbo-progress3").classList.add("run-animation");
            break;
        case 4:
            document.getElementById("hulu-button").style.opacity = 1;
            document.getElementById("hulu-progress1").classList.add("run-animation");
            document.getElementById("hulu-progress2").classList.add("run-animation");
            document.getElementById("hulu-progress3").classList.add("run-animation");
            break;
    }

    videoElement1.setAttribute("src", videoSource1[videoNum]);
    videoElement1.autoplay = true;
    videoElement1.load();

    shrinkedvideoElement1.setAttribute("src", videoSource1[videoNum]);
    shrinkedvideoElement1.autoplay = true;
    shrinkedvideoElement1.load();
}

document
    .getElementById("myVideo1")
    .addEventListener("ended", videoHandlerShrink, false);

document
    .getElementById("shrinked-video")
    .addEventListener("ended", videoHandlerShrink, false);

videoPlayShrink(0);
ensureVideoPlays1("myVideo1");
ensureVideoPlays1("shrinked-video");

function videoHandlerShrink() {
    currentVideo1++;
    if (currentVideo1 === videoSource1.length) {
        currentVideo1 = 0;
        videoPlayShrink(currentVideo1);
    } else {
        videoPlayShrink(currentVideo1);
    }
}

function ensureVideoPlays1(id) {
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
if (document.querySelector(".circle-button")) {
    document.querySelectorAll(".circle-button").forEach((el, index) => {
        // bind click event to each el
        el.addEventListener("click", function(e) {
            currentVideo1 = index;

            document
                .getElementById("myVideo1")
                .addEventListener("ended", videoHandlerShrink, false);

            document
                .getElementById("shrinked-video")
                .addEventListener("ended", videoHandlerShrink, false);

            videoPlayShrink(index);
            ensureVideoPlays1("myVideo1");
            ensureVideoPlays1("shrinked-video");
        });
    });
}

// make all button opacity of 0.5
function changeOpacityForAllButton() {
    if (document.querySelector(".circle-button")) {
        document.querySelectorAll(".circle-button").forEach((el, index) => {
            el.style.opacity = 0.5;
        });
    }
}

// Remove animation class from all button class
function removeAnimation() {
    document
        .getElementById("netflix-progress1")
        .classList.remove("run-animation");
    document
        .getElementById("netflix-progress2")
        .classList.remove("run-animation");
    document
        .getElementById("netflix-progress3")
        .classList.remove("run-animation");

    document
        .getElementById("youtube-progress1")
        .classList.remove("run-animation");
    document
        .getElementById("youtube-progress2")
        .classList.remove("run-animation");
    document
        .getElementById("youtube-progress3")
        .classList.remove("run-animation");

    document.getElementById("google-progress1").classList.remove("run-animation");
    document.getElementById("google-progress2").classList.remove("run-animation");
    document.getElementById("google-progress3").classList.remove("run-animation");

    document.getElementById("hbo-progress1").classList.remove("run-animation");
    document.getElementById("hbo-progress2").classList.remove("run-animation");
    document.getElementById("hbo-progress3").classList.remove("run-animation");

    document.getElementById("hulu-progress1").classList.remove("run-animation");
    document.getElementById("hulu-progress2").classList.remove("run-animation");
    document.getElementById("hulu-progress3").classList.remove("run-animation");
}

// Move element to the center when it is clicked
window.onresize = function(e) {
    if (screen.width < 768) {}
};

/* fading in elements  */

$(document).ready(function() {
    if (screen.width >= 768) {
        $('#video-frame').fadeIn();
        $('#netflix').fadeIn(2000);
        $('#youtube').fadeIn(2500);
        $('#google').fadeIn(3000);
        $('#hbo').fadeIn(3500);
        $('#hulu').fadeIn(4000);
        $('#explore').fadeIn(4500);
    } else {
        $('#video-frame').css('display', 'inline-block');
        $('#netflix').css('display', 'inline-block');
        $('#youtube').css('display', 'inline-block');
        $('#google').css('display', 'inline-block');
        $('#hbo').css('display', 'inline-block');
        $('#hulu').css('display', 'inline-block');
        $('#explore').css('display', 'inline-block');
    }
})

// $('#netflix-video-div').on('click', function() {
//     console.log('scrolled');
//     $('#video-frame').fadeIn();
//     $('#netflix').fadeIn(2000);
//     $('#youtube').fadeIn(2500);
//     $('#google').fadeIn(3000);
//     $('#hbo').fadeIn(3500);
//     $('#hulu').fadeIn(4000);
//     $('#explore').fadeIn(4500);
// });