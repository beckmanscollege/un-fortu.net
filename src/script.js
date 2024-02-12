var clickSound = document.getElementById("clickSound");
var secondImage = document.getElementById("secondImage");
var thirdImage = document.getElementById("thirdImage");

document.getElementById("firstImage").addEventListener("click", function() {
    this.style.display = "none";
    secondImage.style.display = "block";
});

secondImage.addEventListener("click", function() {
    this.style.display = "none";
    thirdImage.src = thirdImages[Math.floor(Math.random() * thirdImages.length)];
    thirdImage.style.display = "block";
    document.getElementById("text").style.display = "none";
    clickSound.play(); // Play the click sound
});
