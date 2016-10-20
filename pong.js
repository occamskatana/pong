
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
	this.paddleend = this.positiony + 85
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
	this.speedx = 0;
	this.speedy = 0;
	this.radius = 8;
	this.served = false;
}


Ball.prototype.render = function(context){
	context.beginPath();
	context.arc(this.positionx, this.positiony, this.radius, 0, 2 * Math.PI, false)
	context.fiillStyle = "white";
	context.fill();
	this.move();
}

Ball.prototype.move = function(){
	this.positionx = this.positionx - this.speedx;
	this.positiony = this.positiony - this.speedy;

	if (this.positiony + 8 >= canvasHeight || this.positiony <= 8){
		this.speedy = this.speedy * -1 
		console.log(this.speedy)
	};


}

Ball.prototype.serve = function(){
	if(this.served == false){
		this.speedx = -5
		this.speedy = Math.random() * (1 + 5) - 1
		this.served = true; 
	}
}

Ball.prototype.reset = function(){
	this.speedx = 0;
	this.speedy = 0;
	this.positionx = canvasWidth / 2;
	this.positiony = canvasHeight / 2;
	this.served = false;
}

speedupBall = function(speedchange){
	if(ball.served == true){
		if (ball.speedx < 0){
			ball.speedx -= speedchange;
		} else {
			ball.speedx += speedchange;
		}

		if (ball.speedy < 0){
			ball.speedy -= speedchange;
		} else {
			ball.speedy += speedchange;
		}
	}
}


var collisionDetection = function(){
	var cpuPaddleSurface = cpuPaddle.positionx + cpuPaddle.width;

	if (ball.positionx >= (canvasWidth - 17) && playerPaddle.positiony < ball.positiony && playerPaddle.positiony + 85 > ball.positiony){

		
			ball.speedx = -ball.speedx;
			// ball.speedy = -ball.speedy;
			console.log(cpuPaddle.positiony, ball.positiony, cpuPaddle.paddleend)
			console.log(playerPaddle.positiony, ball.positiony, playerPaddle.paddleend)
		
	} else if(ball.positionx >= canvasWidth - 17){

		if(playerPaddle.paddleend < ball.positiony || playerPaddle.positiony > ball.positiony){
			cpuScore++
			setScores();
			ball.reset();
		}
	};

	if (ball.positionx <= cpuPaddleSurface && cpuPaddle.positiony < ball.positiony && (cpuPaddle.positiony + cpuPaddle.height) > ball.positiony){
		ball.speedx = -ball.speedx;
		// ball.speedy = -ball.speedy;
		console.log(cpuPaddle.positiony, ball.positiony, cpuPaddle.paddleend)
	} else if 
	(ball.positionx <= 17){

		if (cpuPaddle.paddleend < ball.positiony || cpuPaddle.positiony > ball.positiony){
			console.log(cpuPaddle.positiony, ball.positiony, cpuPaddle.positiony + cpuPaddle.height)
			console.log(playerPaddle.positiony, ball.positiony, playerPaddle.paddleend)
			playerScore++;
			setScores();
			ball.reset();
		}
	}
}


var computeAi = function(){
	var midpoint = cpuPaddle.positiony + (cpuPaddle.height / 2)
	if (ball.positiony <= midpoint){
		cpuPaddle.positiony = cpuPaddle.positiony - 3.5
	} else if(ball.positiony >= midpoint) {
		cpuPaddle.positiony = cpuPaddle.positiony + 3.5
	}
}


//function for rendering every object constructed through methods above within the context of the canvas
var render = function(context){
	computeAi()
	cpuPaddle.render(context);
	playerPaddle.render(context)
	ball.render(context);
}



var step = function(){
	collisionDetection()
	context.clearRect(0, 0, canvasWidth, canvasHeight)
	render(context)
	animate(step)
	speedupBall(.02)
}

var endGame = function(winner){
	canvas.style.display = "none";
	scoreContainer.style.display= "none";
}

var setScores = function(){
	cpuScoreDisplay.innerHTML = "";
	cpuScoreDisplay.innerHTML = cpuScore;
	playerScoreDisplay.innerHTML = "";
	playerScoreDisplay.innerHTML = playerScore;

	if (cpuScore >= 11){
		endGame();
		youLost.style.display = "";
	} else if (playerScore >= 11){
		endGame();
		youWon.style.display = "";
	}
}

var dmx = function(){
	var sound = new buzz.sound('dmx', {
		formats: ["mp3"]
	})
	sound.play();
}

//objects instantiated according to the height and width of the page
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
  cpuScore = 0;
  playerScore = 0;
  cpuScoreDisplay = document.getElementById('cpu-score');
  playerScoreDisplay = document.getElementById('player-score')
  scoreContainer = document.getElementById('score-container');
  youLost = document.getElementById('you-lost');
  youWon = document.getElementById('you-won');
  youLost.style.display = "none";
  youWon.style.display = "none";
  dmx();
  setScores();
  step();
  touch = null
  last = touch
}


window.addEventListener('keydown', function(e){
	if(e.keyCode == 38){
		playerPaddle.moveUp();
	} else if(e.keyCode == 40){
		playerPaddle.moveDown();
	}
});

window.addEventListener('keydown', function(e){
	if(e.keyCode == 13){
		ball.serve()
	}
});

window.addEventListener('touchstart', function(e){
	touch = e.targetTouches[0].screenY 
	ball.serve()
});

window.addEventListener('touchmove', function(e){
	last = touch
	touch = e.targetTouches[0].screenY
	move = ((touch - last))
	playerPaddle.positiony +=  move
})




var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback) { window.setTimeout(callback, 1000/60) };




















