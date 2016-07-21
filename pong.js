
function Table(positionx, positiony){
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


function Paddle(positionx, positiony){ 
	this.positionx = positionx;
	this.positiony = positiony;
	this.speed = 15;
	this.height = 85;
	this.width = 15;
	console.log(this)
}

Paddle.prototype.render = function (context) {
	context.fillStyle="white";
	context.fillRect(this.positionx, this.positiony, this.width, this.height);
}

Paddle.prototype.moveUp = function(){
	if(this.positiony >= 0){
		this.positiony -= this.speed
	}
}

Paddle.prototype.moveDown = function(){
	if(this.positiony + 85 <= canvasHeight){
		this.positiony = this.positiony + this.speed 
	}
}

function Ball(positionx, positiony){
	this.positionx = positionx;
	this.positiony = positiony;
}


Ball.prototype.render = function(context){
	context.beginPath();
	context.arc(this.positionx, this.positiony, 8, 0, 2 * Math.PI, false)
	context.fiillStyle="white";
	context.fill();
}



var render = function(context){
	cpuPaddle.render(context);
	playerPaddle.render(context)
	ball.render(context);
}



var step = function(){
	context.clearRect(0, 0, canvasWidth, canvasHeight)
	render(context)
	animate(step)
}


 window.onload = function(){
  canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvasHeight = context.canvas.clientHeight;
	canvasWidth = context.canvas.clientWidth;
  table = new Table();
  table.render(0, 0, context, canvasWidth, canvasHeight);
  cpuPaddle = new Paddle(2, 100);
  playerPaddle = new Paddle(canvasWidth - 17, 100, context);
  ball = new Ball(canvasWidth / 2, canvasHeight / 2, context);
  step()
}

window.addEventListener('keydown', function(e){
	if(e.keyCode == 38){
		playerPaddle.moveUp();
	} else if(e.keyCode == 40){
		playerPaddle.moveDown();
	}
})


var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback) { window.setTimeout(callback, 1000/60) };




















