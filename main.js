let currentFrame = 0;
const totalFrames = 60;
const characterImage = document.getElementById("character");

function changeIdleFrame() {
    currentFrame = (currentFrame + 1) % totalFrames;
    const frameNumber = currentFrame.toString().padStart(3, "0");
    characterImage.src = `images/idle/tile${frameNumber}.png`;
}

setInterval(changeIdleFrame, 100);  // Change every 100ms for animation speed
