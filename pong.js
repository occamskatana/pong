
function Table(positionx, positiony){
	this.positionx = positionx;
	this.positiony = positiony;
} 


function Paddle(positionx, positiony){
	this.positionx = positionx;
	this.positiony = positiony;
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
}

 window.onload = function(){

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var canvasHeight = context.canvas.clientHeight;
	var canvasWidth = context.canvas.clientWidth;
  table = new Table();
  cpuPaddle = new Paddle(2, 100);
  playerPaddle = new Paddle(canvasWidth - 17, 100, context)
  ball = new Ball(canvasWidth / 2, canvasHeight / 2, context);
	
  render(context, canvasWidth, canvasHeight);
}





var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback) { window.setTimeout(callback, 1000/60) };


var step = function(){
	var ball;
	var table;
	var playerPaddle;
	var cpuPaddle;
	setElements()

}
















