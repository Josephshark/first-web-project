const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/deja-vu-piece.jpg') {
      myImage.setAttribute('src','images/nature-image.png');
    } else {
      myImage.setAttribute('src','images/deja-vu-piece.jpg');
    }
}
