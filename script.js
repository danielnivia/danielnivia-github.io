var index = 0; // starting point
var images = []; // array for the images to rotate
var time = 3000; // miliseconds 

let videoPLayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");
let textElements = document.getElementById("elementsText");
let imagesRotate = document.getElementById("currentImage");

//filling the array
images[0] = 'media/img1.png' 
images[1] = 'media/img2.png'
images[2] = 'media/img3.png'
images[3] = 'media/img4.png'




setInterval(displayImg, 3000);

function displayImg() {

  let currentImage = document.getElementById("currentImage"); // gets the image from html
    
  currentImage.src = images[index];
  index++ // increment
  index = index%4 // calculates the remainder
}


function stopVideo(){
    videoPlayer.style.display = "none";
    myVideo.pause();
    textElements.style.display = "flex";
    imagesRotate.style.display = "flex";

}

// play function video receives a string with the file path
function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block";
    textElements.style.display = "none";
    imagesRotate.style.display = "none";

}