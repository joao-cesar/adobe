var sc_Scene_1_0_0_fn = function() {
var stageWidth = 540;
var stageHeight = 960;
var world = {};
var spaceship = this.spaceship;
var asteroids = this.asteroids;
var bullets = this.bullets;
var stars0 = this.stars0;
var stars1 = this.stars1;
var keyCodes = {};
var keyboard = {};

var background = 
{
	scroll:function(target, speed)
	{
		target.y += speed;
			
		if (target.y < 0)
			target.y = 2882 - stageHeight;		
	}
}

var asteroid = 
{
	speedY:5,
	respawnX:function(){return Math.random() * stageWidth;},
	respawnY:function(){return 100 + Math.random() * 10000;},
	randomSpeedY:function(){return Math.random() * 10;}
}

function loop()
{
	var ast;
	
	if (keyboard.leftPressed)
		spaceship.speedX -= keyboard.arrowsForce;	
	
	if (keyboard.rightPressed)
		spaceship.speedX += keyboard.arrowsForce;	
	
	if (keyboard.upPressed)
		spaceship.speedY += keyboard.arrowsForce;
	
	if (keyboard.downPressed)
		spaceship.speedY -= keyboard.arrowsForce;
	
	spaceship.speedX *= world.frictionX;
	spaceship.speedY *= world.frictionY;
	spaceship.x += spaceship.speedX;
	spaceship.x = clamp(spaceship.x, 0, stageWidth);
	spaceship.y += spaceship.speedY;
	spaceship.y = clamp(spaceship.y, -stageHeight, 0);
	spaceship.rotationY = spaceship.speedX * 2;
	spaceship.updateBullets();
	
	asteroids.update();
	
	background.scroll(stars0, -3);
	background.scroll(stars1, -1.5);
	
	requestAnimationFrame(loop);
}

function clamp(value, min, max)
{
	if (value < min)
		return min;
	else if (value > max)
		return max;
	else
		return value;
		
}

function start()
{	
	keyboard.arrowsForce = 1;
	
	keyCodes.left = 37;
	keyCodes.up = 38;
	keyCodes.right = 39;
	keyCodes.down = 40;
	keyCodes.space = 32;
	
	world.frictionX = 0.9;
	world.frictionY = 0.9;

	spaceship.speedX = 0;
	spaceship.speedY = 0;
	spaceship.bulletCount = 0;
	spaceship.bulletSpeedY = 5;
	spaceship.bullets = [];
	
	spaceship.updateBullets = function()
	{
		spaceship.bullets.forEach(function(bul)
		{
			bul.position.y += spaceship.bulletSpeedY;
			
			if (bul.position.y > 0)
			{
				bul.position.x = 100;
				bul.position.y = 100;
			}
		});
	};
	
	spaceship.shoot = function()
	{
		var children = bullets.implementation.object.children;
		var bul = children[++spaceship.bulletCount % children.length];
		
		bul.position.x = spaceship.x;		
		bul.position.y = spaceship.y + 25;		
		spaceship.bullets.push(bul);
	};
	
	asteroids.reset = function(ast)
	{
		ast.position.x = asteroid.respawnX();
		ast.position.y = asteroid.respawnY();
		ast.speedY = asteroid.randomSpeedY();
	};
	
	asteroids.update = function(forceReset = false)
	{
		var ast;
		var children = asteroids.implementation.object.children;
		
		for (var i = 0, total = children.length; i < total; i++)
		{
			ast = children[i];
			ast.position.y -= asteroid.speedY;

			if (forceReset || ast.position.y < -stageHeight)
				asteroids.reset(ast);
		}
	};
	
	asteroids.update(true);

	document.addEventListener("keydown", function(e)
	{
		if (e.keyCode == keyCodes.left)
			keyboard.leftPressed = true;
		
		if (e.keyCode == keyCodes.up)
			keyboard.upPressed = true;
		
		if (e.keyCode == keyCodes.right)
			keyboard.rightPressed = true;
		
		if (e.keyCode == keyCodes.down)
			keyboard.downPressed = true;
		
		if (e.keyCode == keyCodes.space)
			spaceship.shoot();
		
	}, false);
		
	document.addEventListener("keyup", function(e)
	{
		if (e.keyCode == keyCodes.left)
			keyboard.leftPressed = false;
		
		if (e.keyCode == keyCodes.up)
			keyboard.upPressed = false;
		
		if (e.keyCode == keyCodes.right)
			keyboard.rightPressed = false;
		
		if (e.keyCode == keyCodes.down)
			keyboard.downPressed = false;
		
	}, false);

	loop();
}

start();
};

