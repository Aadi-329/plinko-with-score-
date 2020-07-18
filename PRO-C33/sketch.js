var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles
var plinkos = [];
var divisions=[];


var divisionHeight=300;
turn=0;
var score =0
var gameState="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
   
    
}
 


function draw() {
  background("black");
  textSize(20)
  
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  if(turn>=5){
    gameState="end"
    push()
    textSize(40)
    text("GAME OVER",400,250)
    pop()

    }
    

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
     
  
  
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
   if(particles!=null){

    particles.display()
    if(particles.body.position.y>760){
      if(particles.body.position.x<300){
      score=score+500
      particles=null
      
      
      
      }
      if(particles!=null){
      if(particles.body.position.x>300 && particles.body.position.x<600){
        score=score+100
        particles=null
        
        
        
        }
      }
      if(particles!=null){
        if(particles.body.position.x>600 && particles.body.position.x<900){
          score=score+200
          particles=null
          
          
          
          }
        }
  
      
      
           }
}
text("500",20,700)
text("500",100,700)
text("500",180,700)
text("500",260,700)
text("100",340,700)
text("100",420,700)
text("100",500,700)
text("200",580,700)
text("200",660,700)
text("200",740,700)
  }

function mousePressed(){
if(gameState==="play"){
particles=new Particle(mouseX,10,10,10);

turn++
}

}