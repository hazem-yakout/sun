
let hole = document.getElementById("hole");
let ob = document.getElementById("ob");
let bird = document.getElementById("bird");
let span = document.querySelector("span");
let score = 0;
let isJumping = false;

// Function to handle jump events
function handleJump() {
  isJumping = true;
  let jumpTimer = 0;
  let jumpInterval = setInterval(function () {
    jumpTimer++;
    let birdtop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if (birdtop > 0 && jumpTimer < 15) {
      bird.style.top = birdtop - 5 + "px";
    }
    if (jumpTimer > 20) {
      clearInterval(jumpInterval);
      isJumping = false;
      jumpTimer = 0;
    }
  }, 10);
}

// Event listener for click (desktop) and touchstart (mobile) events
document.addEventListener("mousedown", handleJump);
document.addEventListener("touchstart", handleJump);

// Event listener for hole animation iteration
hole.addEventListener("animationiteration", () => {
  let rand = Math.random() * (500 - 150);
  hole.style.top = rand + "px";
  score++;
  span.textContent = score;
});

// Main game loop
setInterval(function () {
  let birdtop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
  if (!isJumping) {
    bird.style.top = birdtop + 3 + "px";
  }
  let obstcle = parseInt(getComputedStyle(ob).getPropertyValue("left"));
  let holetop = parseInt(getComputedStyle(hole).getPropertyValue("top"));

  // Collision detection and game over condition
  if (
    birdtop > window.innerHeight || // Adjusted for viewport height
    (obstcle < 20 && (birdtop > holetop + 200 || birdtop < holetop))
  ) {
    alert(`Game Over. Your Score: ${score}`);
    bird.style.top = 100 + "px";
    ob.style.left = "100%";
    hole.style.left = "100%";
    score = 0;
    span.textContent = score;
  }
}, 10);
