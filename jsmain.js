

const canvas = document.getElementById('hero');
const ctx = canvas.getContext('2d');

const w = window.innerWidth;
const h = window.innerWidth *.3;

ctx.canvas.width = w;
ctx.canvas.height = h;

function Ball(x, y, vx, vy, radius, color) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.color = color;
}


let allBall = [];


for(let i=0;i<10;i++)
{
    allBall.push(new Ball(Math.random()* w, Math.random()* h,  Math.random() *8,  Math.random() *5, Math.random()* 50+5, "#222121"));
    allBall.push(new Ball(Math.random()* w, Math.random()* h,  Math.random() *5,  Math.random() *8, Math.random()* 50+5, "#457b9d"));
    allBall.push(new Ball(Math.random()* w, Math.random()* h,  Math.random() *5,  Math.random() *5, Math.random()* 50+5, "#e63946"));

}


function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  
  for ( let i = 0; i < allBall.length; i++) {
      ctx.beginPath();
      ctx.arc(allBall[i].x, allBall[i].y, allBall[i].radius, 0, Math.PI * 2, true);
      
      ctx.closePath();
      ctx.fillStyle = allBall[i].color;
      ctx.fill();
      
      allBall[i].x += allBall[i].vx;
      allBall[i].y += allBall[i].vy;

      if (allBall[i].y + allBall[i].vy > canvas.height || allBall[i].y + allBall[i].vy < 0) {
        allBall[i].vy = -allBall[i].vy;
      }
      if (allBall[i].x + allBall[i].vx > canvas.width || allBall[i].x + allBall[i].vx < 0) {
        allBall[i].vx = -allBall[i].vx; 
      }
  }
  window.requestAnimationFrame(draw); 
}

draw();










