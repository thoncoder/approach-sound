class Entity {
  position = {x:0,y:0};
  listening = true;
  singing = false;
  volume = 30;
  audio=new Audio();

  constructor (path) {
    this.audio=new Audio(path);
  }

  sing () {
    if (this.singing) {
      this.audio.play();
      this.audio.volume=0;
      context.beginPath();
      context.fillStyle = "rgb(0, 200, 60)";
      context.fillRect(this.position.x+50, this.position.y, this.volume*5, 10);
      context.beginPath();
      context.fillStyle = "rgb(0, 200, 60)";
      context.fillRect(this.position.x, this.position.y, -this.volume*5, 10);
    }
  }

  draw () {
    context.fillStyle = "rgb(200,0,0)";
    context.fillRect(this.position.x, this.position.y, 50, 100);
  }

  update () {
    if (this.position.y <= (canvas.height-100)) {
      this.position.y+=10;
    }
    this.sing();
    this.draw();
  }
}