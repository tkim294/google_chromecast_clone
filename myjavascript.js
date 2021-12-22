// Refresh browser when resizing the window
window.onresize = function (e) {
  e.preventDefault();
  document.location.reload(true);
};

// Check if the screen size is less than tablet

// nav menu active
var menuItems = $(".main-menu a");
$(".main-menu a").on("click", function (event) {
  event.preventDefault();
  menuItems.removeClass("active");
  $(this).addClass("active");
});

// mobile menu click event
if ($(window).width() < 1025) {
  document.getElementById("main-menu").style.visibility = "hidden";
  var active = false;
  function mobileButtonClicked() {
    if (!active) {
      active = true;
      document.getElementById("mobile-button").classList.add("mobile-active");
      document.getElementById("main-menu").style.visibility = "visible";
    } else {
      document
        .getElementById("mobile-button")
        .classList.remove("mobile-active");
      document.getElementById("main-menu").style.visibility = "hidden";
      active = false;
    }
  }

  document.getElementById("main-menu").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("main-menu").style.visibility = "hidden";
    var button_title = e.target.innerText || e.target.textContent;
    document.getElementById("button-title").innerHTML = button_title;
    document.getElementById("mobile-button").classList.remove("mobile-active");
    active = false;
  });
  $(function () {
    $(document).on("click", function (e) {
      e.preventDefault();
      if (
        $(e.target).is(
          "#main-menu, #overview, #setup, #techspecs, #app, #compare, #mobile-button, #button-title, #mobile-div"
        )
      ) {
        return;
      }
      document
        .getElementById("mobile-button")
        .classList.remove("mobile-active");
      document.getElementById("main-menu").style.visibility = "hidden";
      active = false;
    });
  });
}

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

function videoPlay(videoNum) {
  videoElement.setAttribute("src", videoSource[videoNum]);
  videoElement.autoplay = true;
  videoElement.load();
}

document
  .getElementById("myVideo")
  .addEventListener("ended", videoHandler, false);

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
  const video = document.getElementById("myVideo");

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

// Image change timer management
var image = document.getElementById("main-image");

var imageArray = [
  "https://lh3.googleusercontent.com/OYo1qxZwLVn155V6NLcbq69iUGabvSgP5YyyBEkwEvZYw70ZYN7pbt5Lx3rS7uWGP0URFVuWa2boSdjHL1sBD_Z3n5bVoiVOg3s=rw-w1230",
  "https://lh3.googleusercontent.com/UBUETCc8EVM-7oW51JEU5xMEHtrQLXOfHO7copH2Hshg0KNCONshfc2yIMwCSHmU-J9lt7l8pblDC7NhtLp9Lhubv1wSHg4_lZL5=rw-w1230",
  "https://lh3.googleusercontent.com/g0yZeeumvKhaxed-Uw6EMkGQnQs38766KNty4BSX6KVAdm9yFwSAAaITaHCpDJUcGFT_NVdPAJ6BlGs9CwErT1pQZLBV37EBFQ=rw-w1230",
];
var imageIndex = 0;
var subtext = ["iphone", "tv", "tablet"];

function changeImage() {
  image.setAttribute("src", imageArray[imageIndex]);
  showhide(subtext[imageIndex]);
  imageIndex++;
  if (imageIndex > imageArray.length - 1) {
    imageIndex = 0;
  }
}

var interval = setInterval(changeImage, 5000);
if ($(window).width() < 426) {
  clearInterval(interval);
}

// text fade-in effect on the image
var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("digit");
for (var i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    offset: 50, // start a little later
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    // .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
    .addTo(controller);
}

// text visible and change color when a title is clicked
var divState = { iphone: false, tv: false, tablet: false };

function showhide(id) {
  if (document.getElementById) {
    var divid = document.getElementById(id);
    divState[id] = true;
    // close others
    for (var div in divState) {
      if (div !== id) {
        document.getElementById(div).style.display = "none";
        document.getElementById(div).parentElement.style.opacity = 0.6;
        document
          .getElementById(div)
          .parentElement.parentElement.firstElementChild.classList.remove(
            "section-clicked"
          );
        document
          .getElementById(div)
          .parentElement.parentElement.firstElementChild.classList.add(
            "section-not-clicked"
          );
        divState[div] = false;
      }
    }
    divid.style.display = "block";
    divid.parentElement.style.opacity = 1;
    divid.parentElement.parentElement.firstElementChild.classList.add(
      "section-clicked"
    );
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
  if ($(window).width() < 426) {
    clearInterval(interval);
  }
}

// Second image changes
var image2Array = [
  "https://lh3.googleusercontent.com/3MvmMkO7vYxFbt3xD07tn1XO586FV4YsBCTXcrnd4-cGBJIJR-CZ4BWNH8ecdY-1l2Eh7en486Jd4P1ROlnpzCIpmViCl6AHXQ=rw-w1320",
  "https://lh3.googleusercontent.com/94oEqiNO2fuRcM8zV91w3MCBSiuTahGUhjcxbCiwLG31osQij920KaJGR3qO1toPrjdFNAhunzAoYl_LoXyA1bqw3nfau6sktr8=rw-w1320",
];

var image2 = document.getElementById("main-image2");
var imageIndex2 = 0;
var idArray = ["speaking", "nest"];
var divState2 = { speaking: false, nest: false };

function changeImage2() {
  image2.setAttribute("src", image2Array[imageIndex2]);
  showhide2(idArray[imageIndex2]);
  imageIndex2++;
  if (imageIndex2 > image2Array.length - 1) {
    imageIndex2 = 0;
  }
}

var interval2 = setInterval(changeImage2, 5000);
if ($(window).width() < 426) {
  clearInterval(interval2);
}

// text click changes image
function openImg2(index) {
  clearInterval(interval2);
  image2.setAttribute("src", image2Array[index]);
  showhide2(idArray[index]);
  imageIndex2 = index + 1;
  if (imageIndex2 > image2Array.length - 1) {
    imageIndex2 = 0;
  }
  interval2 = setInterval(changeImage2, 5000);
  if ($(window).width() < 426) {
    cleaerInterval(interval2);
  }
}

// text visible and change color when a title is clicked
var divState2 = { speaking: false, nest: false };

function showhide2(id) {
  // textbox show and hide function
  if (id === "speaking") {
    document.getElementById("speaking-box").style.visibility = "visible";
    document.getElementById("nest-box").style.visibility = "hidden";
  }

  if (id === "nest") {
    document.getElementById("nest-box").style.visibility = "visible";
    document.getElementById("speaking-box").style.visibility = "hidden";
  }

  if (document.getElementById) {
    var divid = document.getElementById(id);
    divState2[id] = true;
    // close others
    for (var div in divState2) {
      if (div !== id) {
        document.getElementById(div).style.display = "none";
        document.getElementById(div).parentElement.style.opacity = 0.6;
        document
          .getElementById(div)
          .parentElement.parentElement.firstElementChild.classList.remove(
            "section-clicked"
          );
        document
          .getElementById(div)
          .parentElement.parentElement.firstElementChild.classList.add(
            "section-not-clicked"
          );
        divState2[div] = false;
      }
    }
    divid.style.display = "block";
    divid.parentElement.style.opacity = 1;
    divid.parentElement.parentElement.firstElementChild.classList.add(
      "section-clicked"
    );
  }
}

/* Mobile responsive dot button select (Changing images and text) - First Page */
var mobileImageArray = [
  "https://lh3.googleusercontent.com/FZq4DD848ycViiLlUa6c9zlAQ9ToTcMXnC3699scqzXjv0A-qts7LLBeJdk1Qz7EbHm_LX452DGtjH7lc2rzG3fGOkY0u_iByB2L=rw-w1280",
  "https://lh3.googleusercontent.com/2_CQMQfABwT8rSZbLU-0zt2PgxQ44G_hzyInIzQyOT-t8iM7MGwvo8-vsZ0Uyoa0LsVAyMAxnSMqH-EWprMl7nSplra9k8MPaw=rw-w1280",
  "https://lh3.googleusercontent.com/aJlDh2E_sFfAKPttcLTGnk1FxD8z3HKVUACALa8uWfAD69XnhlA701KLtuDRQWzvaOCfp6K7NWTBjkkqBzdbaQzEwEpQ7-DkX6U=rw-w1280",
];

var mobileTitleArray = [
  "Stream from Android and iPhone®.",
  "See your laptop on your TV.",
  "command your TV from your tablet.",
];

var mobileSubtitleArray = [
  "Enjoy thousands of Android or iPhone apps, <sup>2</sup> and play or pause directly from your &nbsp;phone.",
  "Mirror your laptop screen to your TV with your Chrome browser. Surf the web or see your media on the big screen. <sup>3</sup>",
  "Turn your Android or iOS tablet into an even better entertainment center. Just tap the Cast button in any compatible app. <sup>4</sup>",
];

var elements = document.querySelectorAll(".dot");

function clickDots(index) {
  document
    .getElementById("mobile-main-image")
    .setAttribute("src", mobileImageArray[index]);

  document.getElementById("mobile-title").innerHTML = mobileTitleArray[index];
  document.getElementById("mobile-subtitle").innerHTML =
    mobileSubtitleArray[index];

  // Remove all active class
  removeClass();

  document.getElementById("dot" + (index + 1)).classList.add("dot-active");
}

function removeClass() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("dot-active");
  }
}

/* Add swipe function to mobile first page */
$(document).ready(function () {
  $("#mobile-main-image").on("swiperight", function (e) {
    e.preventDefault();
    var activeDotIndex = findActiveDot();
    if (activeDotIndex === 0) {
      return;
    }
    clickDots(activeDotIndex - 1);
  });
});

$(document).ready(function () {
  $("#mobile-main-image").on("swipeleft", function (e) {
    e.preventDefault();
    var activeDotIndex = findActiveDot();
    if (activeDotIndex === 2) {
      return;
    }
    clickDots(activeDotIndex + 1);
  });
});

function findActiveDot() {
  for (var i = 1; i <= 3; i++) {
    if ($("#dot" + i).hasClass("dot-active")) {
      return i - 1;
    }
  }
}

/* Mobile responsive dot button select (Changing images and text) - Second Page */
var mobileImageArray2 = [
  "https://lh3.googleusercontent.com/sFaGxBwGRkSsu6LorvuMTQbLHwU0hw_LO-bE2fE93G9DtLIH18i_G2Ai7hSK0L4u0dnePN4_UuQUmGMJdxx87OOfnq0WB12kVYPu=rw-w1280",
  "https://lh3.googleusercontent.com/MkTNJg1j018fbqMmm-oEH3qA-1mItFHer-S-5VAvRYDPWYrKOKXnGN1LVlhwlB3VnFd8Lz2MQe_fkg0txZ3Zw1nrk9zjT2ewbZ8=rw-w1280",
];

var mobileTitleArray2 = [
  "Start streaming by speaking.",
  "See your Nest cameras on your TV.",
];

var mobileSubtitleArray2 = [
  "Use your voice to stream from compatible apps, mute the volumne, rewind, and more with Chromecast and Google Home.<sup>1</sup>",
  "Check your Nest cameras and Nest Hello video dorrbell<sup>6</sup> from your couch with Chromecast and Google Home.<sup>7</sup>",
];

var elements2 = document.querySelectorAll(".dot2");

function clickDots2(index) {
  document
    .getElementById("mobile-main-image2")
    .setAttribute("src", mobileImageArray2[index]);

  document.getElementById("mobile-title2").innerHTML = mobileTitleArray2[index];
  document.getElementById("mobile-subtitle2").innerHTML =
    mobileSubtitleArray2[index];

  // Remove all active class
  removeClass2();

  document.getElementById("dot" + (index + 4)).classList.add("dot-active");
}

function removeClass2() {
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].classList.remove("dot-active");
  }
}

/* Add swipe function to mobile second page */

$(document).ready(function () {
  $("#mobile-main-image2").on("swiperight", function (e) {
    e.preventDefault();
    var activeDotIndex = 0;

    for (var i = 1; i <= 2; i++) {
      if ($("#dot" + (i + 3)).hasClass("dot-active")) {
        activeDotIndex = i - 1;
        break;
      }
    }

    if (activeDotIndex === 0) {
      return;
    }

    clickDots2(activeDotIndex - 1);
  });
});

$(document).ready(function () {
  $("#mobile-main-image2").on("swipeleft", function (e) {
    e.preventDefault();
    var activeDotIndex = 0;

    for (var i = 1; i <= 2; i++) {
      if ($("#dot" + (i + 3)).hasClass("dot-active")) {
        activeDotIndex = i - 1;
        break;
      }
    }

    if (activeDotIndex === 1) {
      return;
    }

    clickDots2(activeDotIndex + 1);
  });
});

/* netflix video pin */
