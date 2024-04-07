const images=[
    "image1.jpg",
    "image2.jpg"
];
const randomNumber=Math.floor(Math.random()*images.length);
console.log(randomNumber);
document.body.style.backgroundImage=`url("images/${images[randomNumber]}")`;