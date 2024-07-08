let hole = document.getElementById("hole");
let ob = document.getElementById("ob");
let bird = document.getElementById("bird");
let span = document.querySelector("span");
let score = 0;

hole.addEventListener("animationiteration", () => {
  let rand = Math.random() * (500 - 150);
  hole.style.top = rand + "px";
  score++;
  span.textContent++;
});
setInterval(function () {
  let birdtop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
  if (!isJumping) {
    bird.style.top = birdtop + 3 + "px";
  }
  let obstcle = parseInt(getComputedStyle(ob).getPropertyValue("left"));
  let holetop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
  // صعب جدااااااا
  if (
    birdtop > 780 ||
    (obstcle < 20 && (birdtop > holetop + 200 || birdtop < holetop))
  ) {
    alert(`Game Over. Your Score: ${score}`);
    bird.style.top = 100 + "px";
    ob.style.left = "100%";
    hole.style.left = "100%";
    score = 0;
    span.textContent = 0;
  }
}, 10);
let isJumping = false;
document.addEventListener("click", () => {
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
});
// the end of game
