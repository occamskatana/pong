
function Table(positionx, positiony){
	this.positionx = positionx;
	this.positiony = positiony;
} 


function Paddle(positionx, positiony){ 
	var Y = positiony
	this.positionx = positionx;
	this.positiony = Y
	this.speed = 10;
	this.moveDown =  function() {
		 Y -= 10;
		 console.log(Y)
	}
	this.moveUp = function() {
		return positiony += 10;
	}
}

function Ball(positionx, positiony){
	this.positionx = positionx;
	this.positiony = positiony;
}

Table.prototype.render = function(positionx, positiony, context, canvasWidth, canvasHeight){
	context.beginPath();
	context.rect(positionx, positiony, canvasWidth, canvasHeight);
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = "green";
	context.stroke();
}

Paddle.prototype.render = function (positionx, positiony, context) {
	context.fillStyle="white";
	context.fillRect(positionx, positiony, 15, 85);
}


Ball.prototype.render = function(positionx, positiony, context, canvasWidth, canvasHeight){
	context.beginPath();
	context.arc(positionx, positiony, 8, 0, 2 * Math.PI, false)
	context.fiillStyle="white";
	context.fill();
}

var render = function(context, canvasWidth, canvasHeight){
	table.render(0, 0, context, canvasWidth, canvasHeight);
	cpuPaddle.render(2, 100, context);
	playerPaddle.render(canvasWidth - 17, 220, context)
	ball.render(canvasWidth / 2, canvasHeight /  2, context);
	cpuPaddle.moveDown();
	console.log(cpuPaddle.Y)
}

 window.onload = function(){

  canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvasHeight = context.canvas.clientHeight;
	canvasWidth = context.canvas.clientWidth;
  table = new Table();
  cpuPaddle = new Paddle(2, 100);
  playerPaddle = new Paddle(canvasWidth - 17, 100, context)
  ball = new Ball(canvasWidth / 2, canvasHeight / 2, context);
	
  step();
}





var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback) { window.setTimeout(callback, 1000/60) };


var step = function(){
	render(context, canvasWidth, canvasHeight)
	animate();
}
















