const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const startText = document.getElementById("start");
canvas.width = (window.innerWidth/2);
canvas.height = (window.innerHeight/2);
canvas.style.border = "1px solid white";
const player = new Entity("music.mp3");
const box = new Entity("music.mp3");
box.singing=true;
box.position.x+=300;
// player movement
const keys = {
  started: false,
  right: false,
  left: false
}
document.addEventListener("keydown", (key) => {
  if (key.code=="Space") {
    startText.style.display="none";
    keys.started=true;
  }
  if (key.code=="ArrowRight") keys.right=true;
  if (key.code=="ArrowLeft") keys.left=true;
});

document.addEventListener("keyup", (key) => {
  if (key.code=="ArrowRight") keys.right=false;
  if (key.code=="ArrowLeft") keys.left=false;
});
// -------------
window.onload = () => {
  function loop() {
    if (keys.started) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (keys.right) player.position.x+=5;
      if (keys.left) player.position.x-=5;
      player.update();
      box.update();

      if (player.position.x+50 >= (box.position.x-box.volume*5) && player.position.x-50 <= (box.position.x+box.volume*5)) {
        console.log("listening box")
        if (player.position.x >= (box.position.x-box.volume*2) && player.position.x <= (box.position.x+box.volume*2)) {
          box.audio.volume=1;
        } else {
          box.audio.volume=0.1;
        }
      }
    }
    window.requestAnimationFrame(loop);
  }
  loop();
}