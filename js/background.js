const images = ["0.JPG", "1.JPG", "2.jpg", "3.jpeg"]
const pakuImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${pakuImage}`;
document.body.appendChild(bgImage);
bgImage.id = 'bgImage';


