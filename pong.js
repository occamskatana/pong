var setElements = function(){

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var canvasHeight = context.canvas.clientHeight;
	var canvasWidth = context.canvas.clientWidth;

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

	Table.prototype.render = function(positionx, positiony){
		context.beginPath();
		context.rect(positionx, positiony, canvasWidth, canvasHeight);
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = "green";
		context.stroke();
	}

	Paddle.prototype.render = function (positionx, positiony) {
		context.fillStyle="white";
		context.fillRect(positionx, positiony, 15, canvasHeight/4);
	}

	Ball.prototype.render = function(positionx, positiony){
		context.beginPath();
		context.arc(positionx, positiony, 8, 0, 2 * Math.PI, false)
		context.fiillStyle="white";
		context.fill();
	}


  var table = new Table();
  table.render(0, 0);
  cpuPaddle = new Paddle(2, 100);
	
  playerPaddle = new Paddle(canvasWidth - 17, 100)
	
  ball = new Ball(canvasWidth / 2, canvasHeight / 2);
	
  render();
}


var render = function(){
	cpuPaddle.render(2, 100);
	playerPaddle.render(canvasWidth - 17, 220)
	ball.render(canvasWidth / 2, canvasHeight /  2);
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

window.onload = setElements;














