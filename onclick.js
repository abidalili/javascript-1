// function myMessege1() {
//   var myVar = document.querySelector("#dis");
//   myVar.innerHTML = "you have click on button 1";
// }

// function myMessege2() {
//   var myVar = document.querySelector("#dis");
//   myVar.innerHTML = "you have click on button 2";
// }

// image slider

var photos = [
  "images/IMG_2669.jpg",
  "images/IMG_6902.jpg",
  "images/IMG_6924.jpg",
  "images/IMG_9076.jpg",
];
var imgTag = document.querySelector("img");
var count = 0;
function next() {
  count++;

  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
imgTag.src = photos[count];
function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
