// nav menu active 
var menuItems = $(".main-menu a");
$(".main-menu a").on('click', function(event) {
    event.preventDefault();
    menuItems.removeClass('active');
    $(this).addClass('active');
});

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
    'https://lh3.googleusercontent.com/OYo1qxZwLVn155V6NLcbq69iUGabvSgP5YyyBEkwEvZYw70ZYN7pbt5Lx3rS7uWGP0URFVuWa2boSdjHL1sBD_Z3n5bVoiVOg3s=rw-w1230',
    'https://lh3.googleusercontent.com/UBUETCc8EVM-7oW51JEU5xMEHtrQLXOfHO7copH2Hshg0KNCONshfc2yIMwCSHmU-J9lt7l8pblDC7NhtLp9Lhubv1wSHg4_lZL5=rw-w1230',
    'https://lh3.googleusercontent.com/g0yZeeumvKhaxed-Uw6EMkGQnQs38766KNty4BSX6KVAdm9yFwSAAaITaHCpDJUcGFT_NVdPAJ6BlGs9CwErT1pQZLBV37EBFQ=rw-w1230'
];
var imageIndex = 0;
var subtext = ['iphone', 'tv', 'tablet'];

function changeImage() {
    image.setAttribute("src", imageArray[imageIndex]);
    showhide(subtext[imageIndex]);
    imageIndex++;
    if (imageIndex > imageArray.length - 1) {
        imageIndex = 0;
    }
}

var interval = setInterval(changeImage, 5000);

// text hovering effect on the image
var controller = new ScrollMagic.Controller();


// text visible and change color when a title is clicked
var divState = { iphone: false, tv: false, tablet: false };

function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = true;
        // close others
        for (var div in divState) {
            if (div !== id) {
                document.getElementById(div).style.display = 'none';
                document.getElementById(div).parentElement.style.opacity = 0.6;
                document.getElementById(div).parentElement.parentElement.firstElementChild.classList.remove("section-clicked");
                document.getElementById(div).parentElement.parentElement.firstElementChild.classList.add("section-not-clicked");
                divState[div] = false;
            }
        }
        divid.style.display = 'block';
        divid.parentElement.style.opacity = 1;
        divid.parentElement.parentElement.firstElementChild.classList.add("section-clicked")
    }
}

// text click changes image
function openImg(index) {
    clearInterval(interval);
    image.setAttribute("src", imageArray[index]);
    showhide(subtext[index]);
    imageIndex = index + 1;
    if (imageIndex > imageArray.length - 1) {
        imageIndex = 0;
    }
    interval = setInterval(changeImage, 5000);
}