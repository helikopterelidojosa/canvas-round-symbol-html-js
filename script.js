var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function arc(x,y,radius,color){
ctx.beginPath();
ctx.arc(x,y,radius,0,2*Math.PI);
ctx.strokeStyle = color; 
ctx.stroke();
}

arc(100,100,50,'red');//50
arc(100,100,53);//50+3




arc(100,100,3)

//+++++++++
arc(100,75,25)
arc(100,125,25)
arc(75,100,25)
arc(125,100,25)

//centa r 25
arc(100,100,25)
