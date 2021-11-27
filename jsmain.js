
//canvas hero image, creating 30 bouncing balls in a canvas object

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
    allBall.push(new Ball(Math.random()* w, Math.random()* h,  (Math.random() *6)-3,  (Math.random() *4)-2, Math.random()* 50+5, "#222121"));
    allBall.push(new Ball(Math.random()* w, Math.random()* h,  (Math.random() *4)-2,  (Math.random() *6)-3, Math.random()* 50+5, "#457b9d"));
    allBall.push(new Ball(Math.random()* w, Math.random()* h,  (Math.random() *4)-2,  (Math.random() *4)-2, Math.random()* 50+5, "#e63946"));

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

//adding intersection observer for in view animation triggers for education and work sections

let education = document.getElementById("intertrig")

let work = document.getElementById("trig2");

let fadeinArray = [education,work];



function Intered (entries)
{
  entries.forEach((entry) =>
    {
      if (entry.isIntersecting=== true )
    {
      entry.target.classList.add("visible");
      console.log("thisworks");
    }
    else
    {
      entry.target.classList.remove("visible");
      console.log("broken");  
    }

    });
    
};

let observer = new IntersectionObserver(Intered);

fadeinArray.forEach(ele => {
  observer.observe(ele);
});


//initial switch

changeWord();

// flashing text in the header
setInterval(changeWord,4000);


function changeWord() {
  const heroWord = document.getElementById("rotatehero");
  heroWord.style.opacity ="0";
  

  if(heroWord.innerText ==="Developer")
  {
    heroWord.className ="InOut";
    heroWord.innerText ="Engineer";
    setTimeout (function () {
      heroWord.classList.remove("InOut")},3300
      );
    

  }
  else if(heroWord.innerText==="Engineer")
  {
    heroWord.className ="InOut";
    heroWord.innerText="Researcher";
    setTimeout (function () {
    heroWord.classList.remove("InOut")},3300
    );
    
  }
  else if(heroWord.innerText==="Researcher")
  {
    heroWord.className ="InOut";
    heroWord.innerText ="Developer";
    setTimeout (function () {
      heroWord.classList.remove("InOut")},3300
      );
    
  }
  else{
    console.log("this broke");
    
  }

};








