let currentFrame = 0;
let isFlipped = false;  // Track whether the character is facing left or right
let animationType = 'idle'; // Default animation type
const totalIdleFrames = 60;
const totalWalkFrames = 76;  // From tile000.png to tile075.png
const totalPunchFrames = 100;  // From tile000.png to tile099.png
const totalSecretFrames = 16; // From tile000.png to tile015.png
const characterImage = document.getElementById("character");

// Function to change the image based on the current frame and animation type
function changeCharacterFrame() {
    let frameNumber = currentFrame.toString().padStart(3, "0");
    let animationFolder = animationType;

    // Flip the character if moving right
    if (isFlipped) {
        characterImage.style.transform = "scaleX(-1)";
    } else {
        characterImage.style.transform = "scaleX(1)";
    }

    if (animationType === 'walk') {
        frameNumber = currentFrame.toString().padStart(3, "0");
        characterImage.src = `images/walk/tile${frameNumber}.png`;
    } else if (animationType === 'punch') {
        frameNumber = currentFrame.toString().padStart(3, "0");
        characterImage.src = `images/punch/tile${frameNumber}.png`;
    } else if (animationType === 'test1') {
        frameNumber = currentFrame.toString().padStart(3, "0");
        characterImage.src = `images/test1/tile${frameNumber}.png`;
    } else {
        characterImage.src = `images/idle/tile${frameNumber}.png`;
    }
}

// Function to handle walking
function walk(direction) {
    if (direction === 'right') {
        isFlipped = false;
    } else if (direction === 'left') {
        isFlipped = true;
    }

    animationType = 'walk';
    currentFrame = (currentFrame + 1) % totalWalkFrames;
    changeCharacterFrame();
}

// Function to handle punching
function punch() {
    animationType = 'punch';
    currentFrame = (currentFrame + 1) % totalPunchFrames;
    changeCharacterFrame();
}

// Function to handle the secret animation when 'P' is pressed
function secretAnimation() {
    animationType = 'test1';
    currentFrame = (currentFrame + 1) % totalSecretFrames;
    changeCharacterFrame();
}

// Listen for key presses to control movement and animations
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        walk('right');
    } else if (event.key === 'ArrowLeft') {
        walk('left');
    } else if (event.key === ' ') {
        punch();
    } else if (event.key === 'p' || event.key === 'P') {
        secretAnimation();
    }
});

// Start the idle animation when no key is pressed
setInterval(() => {
    if (animationType === 'idle') {
        currentFrame = (currentFrame + 1) % totalIdleFrames;
        changeCharacterFrame();
    }
}, 100);  // Adjust the speed of the idle animation here
