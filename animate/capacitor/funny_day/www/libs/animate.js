(function()
{
    class Animate
    {
        constructor()
        {
            createjs.Ticker.timingMode = createjs.Ticker.RAF;
        }

        setup(props)
        {
            this.lib = props.lib;			
            this.root = props.root;
            this.stage = this.root.stage;
            this.canvas = this.stage.canvas;
            this.stage.mouseMoveOutside = true;
            this.stage.preventSelection = false;
            createjs.Touch.enable(this.stage, true, false);
            Display.setup();
        }
    }

	class Calc
	{
		static clamp(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		}
		
		static randomRange(min, max)
		{
			return Math.random() * (max - min) + min;
		}
		
		static lerp(v1, v2, f)
		{
			 return f * v1 + (1 - f) * v2;
		}
		
		static distanceBetweenTwoPoints = function(x1, y1, x2, y2)
		{
			const dx = x1 - x2;
			const dy = y1 - y2;

			return Math.sqrt(dx * dx + dy * dy);
		}
		
		static angleBetweenTwoPoints = function(x1, y1, x2, y2)
		{
			return Math.atan2(y2 - y1, x2 - x1);
		}
		
		static degreesToRadians = function(degrees)
		{
			return degrees * Math.PI / 180;
		}

		static radiansToDegrees = function(radians)
		{
			return radians * 180 / Math.PI;
		}
		
		static rotationTo360(rotation)
		{
			return (rotation + 360) % 360;
		}
	}

    class Display
	{
		static setup()
		{
			Display.domContainers = [ animate.canvas, anim_container, dom_overlay_container ];
			Display.w = animate.lib.properties.width;
			Display.h = animate.lib.properties.height;
			Display.pixelRatio = window.devicePixelRatio || 1;
			Text.fix();
			Display.resizeHandler();
		}
		
		static resizeHandler(e)
		{
			Display.iW = window.innerWidth;
			Display.iH = window.innerHeight;
			
			Display.domContainers[0].width = Display.iW * Display.pixelRatio;			
			Display.domContainers[0].height = Display.iH * Display.pixelRatio;
			
			Display.domContainers.forEach(function(container)
			{				
				container.style.width = "100%";				
				container.style.height = "100%";
			});
			
			animate.stage.scaleX = Display.pixelRatio;
			animate.stage.scaleY = Display.pixelRatio;
			animate.stage.tickOnUpdate = false;            
			animate.stage.update();            
			animate.stage.tickOnUpdate = true;

			Display.orientation = Display.iW > Display.iH ? "landscape" : "portrait";
			Display.scale = Math.max(window.innerWidth / animate.lib.properties.width, window.innerHeight / animate.lib.properties.height);
		}

        static getWidth(target)
		{
			if (target === animate.root)
				return Display.iW;

			if (target instanceof createjs.Text)
				return target.getMeasuredWidth();

			if (target.getBounds())
				return target.getBounds().width;

			return target.nominalBounds.width * target.scaleX;
		}

		static getHeight(target)
		{
			if (target === animate.root)
				return Display.iH;

			if (target instanceof createjs.Text)
				return target.getMeasuredHeight();

			if (target.getBounds())
				return target.getBounds().height;

			return target.nominalBounds.height * target.scaleY;
		}
		
		static getSize(target)
		{
			return { width: Display.getWidth(target), height: Display.getHeight(target) };
		}
	}

    class Text
    {
        static fix(lineHeightRatio = 0.14)
		{
			const chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
			const firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

			if ((chrome || firefox) && createjs)
			{
				createjs.Text.prototype._drawTextLine = function(ctx, text, y)
				{
					if (this.textBaseline === "top")
						y += (this.lineHeight || this.getMeasuredLineHeight()) * lineHeightRatio;
					
					ctx[this.outline ? "strokeText" : "fillText"](text, 0, y, this.maxWidth || 0xFFFF);
				};
			}
		}
    }

    class UI extends Display
	{
		constructor(props)
		{
			super(props);
		}

		static pos(target, ratioX = 1, ratioY = 1)
		{
			UI.posX(target, ratioX);
			UI.posY(target, ratioY);
		}

		static posX(target, ratio = 1)
		{
			target.x = Display.getWidth(target.parent) * ratio;
		}

		static posY(target, ratio = 1)
		{
			target.y = Display.getHeight(target.parent) * ratio;
		}

		static size(target, width, height)
		{
			UI.width(target, width, false);
			UI.height(target, height, false);
		}

		static width(target, width, keepAspectRatio = true)
		{
			target.scaleX = width / target.nominalBounds.width;

			if (keepAspectRatio)
				target.scaleY = target.scaleX;
		}

		static height(target, height, keepAspectRatio = true)
		{
			target.scaleY = height / target.nominalBounds.height;

			if (keepAspectRatio)
				target.scaleX = target.scaleY;
		}

		static fill(target, ratioX = 1, ratioY = 1)
		{
			UI.fillX(target, ratioX);
			UI.fillY(target, ratioY);
		}

		static fillX(target, ratio = 1)
		{
			target.scaleX = Display.getWidth(target.parent) * ratio / target.nominalBounds.width;
		}

		static fillY(target, ratio = 1)
		{
			target.scaleY = Display.getHeight(target.parent) * ratio / target.nominalBounds.height;
		}

		static fit(target)
		{
			const targetSize = Display.getSize(target);
			const parentSize = Display.getSize(target.parent);
						
			if (targetSize.width >= targetSize.height)
			{
				if (parentSize.width >= parentSize.height)
					UI.height(target, parentSize.height);
				else
					UI.width(target, parentSize.width);
			}				
			else
			{
				if (parentSize.width >= parentSize.height)
					UI.width(target, parentSize.width);
				else
					UI.height(target, parentSize.height);
			}
		}

		static offset(target, ratioX = 1, ratioY = 1, absoluteX = 0, absoluteY = 0)
		{
			UI.offsetX(target, ratioX, absoluteX);
			UI.offsetY(target, ratioY, absoluteY);
		}
		
		static offsetX(target, ratio = 1, absolute = 0)
		{
			target.x += Display.getWidth(target) * ratio + absolute;
		}

		static offsetY(target, ratio = 1, absolute = 0)
		{
			target.y += Display.getHeight(target) * ratio + absolute;
		}

		static clamp(target, props, min = Number.MIN_VALUE, max = Number.MAX_VALUE)
		{
			props.forEach(prop => target[prop] = Calc.clamp(target[prop], min, max));
		}

		static autoScale(target)
		{
			target.scale = animate.Display.scale;
		}

		static row(children, offset = 0, width = undefined)
		{
			if (!width)
				width = Display.getWidth(children[0]);

			children.forEach((child, index) =>
			{
				child.x = (width + offset) * index;
			});
		}
		
		static fitViewPort(target, className)
		{
			Display.setNominalBounds(target, className);
			
			if (Display.orientation === "landscape")
				UI.width(target, Display.iW);
			else
				UI.height(target, Display.iH);
			
			if (target.nominalBounds.height * target.scaleY < Display.iH)
				UI.height(target, Display.iH);
		}
	}

    window.animate = new Animate();
    animate.Calc = Calc;
    animate.Display = Display;
    animate.UI = UI;
    animate.Text = Text;
})()

/*
(function()
{
	class animate
	{
		static setup(props)
		{
			animate.lib = props.lib;			
			animate.root = props.root;
			animate.stage = animate.root.stage;
			animate.canvas = animate.stage.canvas;
			createjs.Touch.enable(animate.stage, true, false);
			animate.stage.mouseMoveOutside = true;
			animate.stage.preventSelection = false;
			Display.setup();
			createjs.Ticker.timingMode = createjs.Ticker.RAF;
			animate.root.on("mousedown", animate.mouseDownHandler);
			window.addEventListener("resize", animate.resizeHandler);
			
			if (props.showFPS)
				animate.addFPSText();
		}
		
		static addFPSText()
		{
			const fpsLabel = new createjs.Text("-- fps", "bold 18px Arial", "#FFF");
			
			fpsLabel.x = 10;
			fpsLabel.y = 10;
			animate.root.addChild(fpsLabel);
			createjs.Ticker.on("tick", e => fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps");
		}
		
		static debug(text)
		{
			if (animate.debugText)
				animate.debugText.text = text;
			else
			{
				animate.debugText = new createjs.Text(text, "bold 18px Arial", "#FFF");
				animate.debugText.x = 10;
				animate.debugText.y = 50;
				animate.root.addChild(animate.debugText);
			}
		}
		
		static tickStart(callback)
		{
			animate.stage.removeAllEventListeners("tickstart");
			animate.stage.on("tickstart", callback, animate.root, true);
		}

		static resizeHandler(e)
		{
			UI.resizeHandler(e);

			if (animate.root.resizeHandler)
				animate.root.resizeHandler(e);
		}
		
		static mouseDownHandler(e)
		{
			if (animate.root.mouseDownHandler)
				animate.root.mouseDownHandler(e);
		}
		
		static getMouseWheelDelta(e)
		{
			const evt = window.event || e;
			return Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
		}
		
		static isMobile()
		{
			return createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
		}
		
		static changeBackgroundColor = function(canvasColor, animColor, documentColor)
		{
			canvas.style.backgroundColor = canvasColor;
			anim_container.style.backgroundColor = animColor;
			document.body.style.backgroundColor = documentColor;			
		};
	}
	
	class Calc
	{
		static clamp(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		}
		
		static randomRange(min, max)
		{
			return Math.random() * (max - min) + min;
		}
		
		static lerp(v1, v2, f)
		{
			 return f * v1 + (1 - f) * v2;
		}
		
		static distanceBetweenTwoPoints = function(x1, y1, x2, y2)
		{
			const dx = x1 - x2;
			const dy = y1 - y2;

			return Math.sqrt(dx * dx + dy * dy);
		}
		
		static angleBetweenTwoPoints = function(x1, y1, x2, y2)
		{
			return Math.atan2(y2 - y1, x2 - x1);
		}
		
		static degreesToRadians = function(degrees)
		{
			return degrees * Math.PI / 180;
		}

		static radiansToDegrees = function(radians)
		{
			return radians * 180 / Math.PI;
		}
		
		static rotationTo360(rotation)
		{
			return (rotation + 360) % 360;
		}
	}
	
	class Sound
	{
		static play(linkage, type, stopPrevious = true, props = {})
		{            
			if (stopPrevious && Sound.channels[type])
				Sound.channels[type].stop();
				
			Sound.channels[type] = createjs.Sound.play(linkage, props);
		};
	}
	
	class Basis
	{
		constructor(props)
		{
			this.target = props.target;
			this.callbacks = props.callBacks || {};
		}
	}
	
	class Display extends Basis
	{
		constructor(props)
		{
			super(props);
						
			if (props.tick)
				this.tick = createjs.Ticker.on("tick", this.tickHandler, this);
		}
		
		tickHandler(e)
		{			
			if (this.callbacks.tickHandler)
				this.callbacks.tickHandler(e, this);
		}
		
		remove()
		{
			const index = Body.children.indexOf(this);
			
			if (index > -1)
				Body.children.splice(index, 1);
				
			Display.remove(this.target);
			
			if (this.tick)
				createjs.Ticker.off("tick", this.tick);
		}
		
		static add(linkage, container, index)
		{
			return container.addChildAt(new animate.lib[linkage](), index);
		}
		
		static remove(target)
		{
			target.removeAllEventListeners();
			createjs.Tween.removeTweens(target);
			target._off = true;
			target.parent.removeChild(target);
		}

		static setup()
		{
			Display.domContainers = [ animate.canvas, anim_container, dom_overlay_container ];
			Display.w = animate.lib.properties.width;
			Display.h = animate.lib.properties.height;
			Display.pixelRatio = window.devicePixelRatio || 1;
			Display.fixText();
			Display.resizeHandler();
		}
		
		static resizeHandler(e)
		{
			Display.iW = window.innerWidth;
			Display.iH = window.innerHeight;
			
			Display.domContainers[0].width = Display.iW * Display.pixelRatio;			
			Display.domContainers[0].height = Display.iH * Display.pixelRatio;
			
			Display.domContainers.forEach(function(container)
			{				
				container.style.width = "100%";				
				container.style.height = "100%";
			});
			
			animate.stage.scaleX = Display.pixelRatio;
			animate.stage.scaleY = Display.pixelRatio;
			animate.stage.tickOnUpdate = false;            
			animate.stage.update();            
			animate.stage.tickOnUpdate = true;

			Display.orientation = Display.iW > Display.iH ? "landscape" : "portrait";
			Display.scale = Math.max(window.innerWidth / animate.lib.properties.width, window.innerHeight / animate.lib.properties.height);
			
			if (animate.root.resizeHandler)
				animate.root.resizeHandler(e);
		}

		static getPointerPos(target)
		{
			return target.globalToLocal(animate.stage.mouseX, animate.stage.mouseY);
		}

		static fixText(lineHeightRatio = 0.14)
		{
			const chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
			const firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

			if ((chrome || firefox) && createjs)
			{
				createjs.Text.prototype._drawTextLine = function(ctx, text, y)
				{
					if (this.textBaseline === "top")
						y += (this.lineHeight || this.getMeasuredLineHeight()) * lineHeightRatio;
					
					ctx[this.outline ? "strokeText" : "fillText"](text, 0, y, this.maxWidth || 0xFFFF);
				};
			}
		}

		static getWidth(target)
		{
			if (target === animate.root)
				return Display.iW;

			if (target instanceof createjs.Text)
				return target.getMeasuredWidth();

			if (target.getBounds())
				return target.getBounds().width;

			return target.nominalBounds.width * target.scaleX;
		}

		static getHeight(target)
		{
			if (target === animate.root)
				return Display.iH;

			if (target instanceof createjs.Text)
				return target.getMeasuredHeight();

			if (target.getBounds())
				return target.getBounds().height;

			return target.nominalBounds.height * target.scaleY;
		}
		
		static getSize(target)
		{
			return { width: Display.getWidth(target), height: Display.getHeight(target) };
		}

		static cache(target, offsetX = 0, offsetY = 0, uncache = true)
		{
			let bounds;

			if (uncache)
				target.uncache();

			bounds = target.nominalBounds;
			bounds.width += offsetX;
			bounds.height += offsetY;
			target.cache(-offsetX, -offsetY, bounds.width * 2, bounds.height * 2, Display.scale);
		}
		
		static cacheMultiple(targets, offsetX = 0, offsetY = 0, uncache = true)
		{
			let i;
			
			for (i = targets.length - 1; i > -1; i--)
				Display.cache(targets[i], offsetX, offsetY, uncache);
		}

		static removeAll(container)
		{
			while(container.numChildren > 0)
				Display.remove(getChildAt(0));
		}
		
		static setNominalBounds(target, className)
		{
			animate.lib[className].prototype.nominalBounds = { x: target.x, y: target.y, width: animate.lib.properties.width, height: animate.lib.properties.height };
		}
		
		static depthSort()
		{
			animate.root.inGame.world.sortChildren(function(a, b)
			{
				if (Body.grounds.indexOf(a) > -1 || Body.grounds.indexOf(b) > -1)
					return 0;
				
				return a.y - b.y;
			});		
		}
	}
	
	class UI extends Display
	{
		constructor(props)
		{
			super(props);
		}

		static pos(target, ratioX = 1, ratioY = 1)
		{
			UI.posX(target, ratioX);
			UI.posY(target, ratioY);
		}

		static posX(target, ratio = 1)
		{
			target.x = Display.getWidth(target.parent) * ratio;
		}

		static posY(target, ratio = 1)
		{
			target.y = Display.getHeight(target.parent) * ratio;
		}

		static size(target, width, height)
		{
			UI.width(target, width, false);
			UI.height(target, height, false);
		}

		static width(target, width, keepAspectRatio = true)
		{
			target.scaleX = width / target.nominalBounds.width;

			if (keepAspectRatio)
				target.scaleY = target.scaleX;
		}

		static height(target, height, keepAspectRatio = true)
		{
			target.scaleY = height / target.nominalBounds.height;

			if (keepAspectRatio)
				target.scaleX = target.scaleY;
		}

		static fill(target, ratioX = 1, ratioY = 1)
		{
			UI.fillX(target, ratioX);
			UI.fillY(target, ratioY);
		}

		static fillX(target, ratio = 1)
		{
			target.scaleX = Display.getWidth(target.parent) * ratio / target.nominalBounds.width;
		}

		static fillY(target, ratio = 1)
		{
			target.scaleY = Display.getHeight(target.parent) * ratio / target.nominalBounds.height;
		}

		static fit(target)
		{
			const targetSize = Display.getSize(target);
			const parentSize = Display.getSize(target.parent);
						
			if (targetSize.width >= targetSize.height)
			{
				if (parentSize.width >= parentSize.height)
					UI.height(target, parentSize.height);
				else
					UI.width(target, parentSize.width);
			}				
			else
			{
				if (parentSize.width >= parentSize.height)
					UI.width(target, parentSize.width);
				else
					UI.height(target, parentSize.height);
			}
		}

		static offset(target, ratioX = 1, ratioY = 1, absoluteX = 0, absoluteY = 0)
		{
			UI.offsetX(target, ratioX, absoluteX);
			UI.offsetY(target, ratioY, absoluteY);
		}
		
		static offsetX(target, ratio = 1, absolute = 0)
		{
			target.x += Display.getWidth(target) * ratio + absolute;
		}

		static offsetY(target, ratio = 1, absolute = 0)
		{
			target.y += Display.getHeight(target) * ratio + absolute;
		}

		static clamp(target, props, min = Number.MIN_VALUE, max = Number.MAX_VALUE)
		{
			props.forEach(prop => target[prop] = Calc.clamp(target[prop], min, max));
		}

		static autoScale(target)
		{
			target.scaleX = target.scaleY = animate.Display.scale;
		}

		static row(children, offset = 0, width = undefined)
		{
			if (!width)
				width = Display.getWidth(children[0]);

			children.forEach((child, index) =>
			{
				child.x = (width + offset) * index;
			});
		}
		
		static fitViewPort(target, className)
		{
			Display.setNominalBounds(target, className);
			
			if (Display.orientation === "landscape")
				UI.width(target, Display.iW);
			else
				UI.height(target, Display.iH);
			
			if (target.nominalBounds.height * target.scaleY < Display.iH)
				UI.height(target, Display.iH);
		}
	}
	
	class Gamepad extends UI
	{
		constructor(props)
		{
			super(props);
			this.keyForce = props.keyForce || 35;
			this.keys = {};
			window.addEventListener("keydown", this.keyDownHandler.bind(this));
			window.addEventListener("keyup", this.keyUpHandler.bind(this));
		}
		
		keyDownHandler(e)
		{
			this.keys[e.key] = true;
		}

		keyUpHandler(e)
		{
			delete this.keys[e.key];
		}
	}
	
	class DPad extends UI
	{
		constructor(props)
		{
			super(props);
			this.pressed = false;
			this.xRange = props.xRange || 60;
			this.yRange = props.yRange || 60;
			this.deltaX = 0;
			this.deltaY = 0;
			this.target.stage.on("stagemousedown", this.mouseDownHandler, this);
			this.target.stage.on("stagemouseup", this.pressUpHandler, this);
		}
		
		getDelta()
		{
			const pointerPos = Display.getPointerPos(this.target);
			
			this.deltaX = Calc.clamp(pointerPos.x, -this.xRange * 0.5, this.xRange * 0.5);
			this.deltaY = Calc.clamp(pointerPos.y, -this.yRange * 0.5, this.yRange * 0.5);			
		}
		
		mouseDownHandler(e)
		{			
			this.pointerPos = Display.getPointerPos(e.currentTarget);
			this.getDelta();
			this.pressed = true;
			
			if (this.callbacks.mouseDownHandler)
				this.callbacks.mouseDownHandler(e, this);
		}
		
		tickHandler(e)
		{
			if (this.pressed)
				this.getDelta();
			
			if (this.callbacks.tickHandler)
			{
				this.pointerPos = Display.getPointerPos(this.target.parent);
				this.callbacks.tickHandler(e, this);
			}				
		}
		
		pressUpHandler(e)
		{
			this.pressed = false;
			
			if (this.callbacks.pressUpHandler)
				this.callbacks.pressUpHandler(e, this);
		}
	}
	
	class Game extends Display
	{
		constructor(props)
		{
			super(props);
		}
	}
	
	class Camera extends Game
	{
		constructor(props)
		{
			super(props);
			this.follow = props.follow;
			this.ease = props.ease || 0.65;
			this.target.x = this.seekX();
			this.target.y = this.seekY();
		}
		
		seekX()
		{
			return -this.follow.x;
		}
		
		seekY()
		{
			return -this.follow.y;
		}
		
		tickHandler()
		{
			this.target.x = Calc.lerp(this.target.x, this.seekX(), this.ease);
			this.target.y = Calc.lerp(this.target.y, this.seekY(), this.ease);
		}
	}
	
	class Body extends Game
	{
		constructor(props)
		{
			super(props);
			Body.children.push(this);
			this.collidable = true;
			this.getPrevX();
			this.getPrevY();
		}
		
		tickHandler(e)
		{
			Display.depthSort();
			
			if (this.callbacks.tickHandler)
				this.callbacks.tickHandler(e, this);
			
			this.getPrevX();
			this.getPrevY();
		}
		
		getPrevX()
		{
			this.prevX = this.target.x;
		}
		
		getPrevY()
		{
			this.prevY = this.target.y;
		}
		
		passThrough(delay)
		{
			this.collidable = false;
			clearTimeout(this.passThroughTimeout);
			
			this.passThroughTimeout = setTimeout(() => this.collidable = true, delay);
		}
		
		circularCollision(body0, body1, radius, callback)
		{
			if (!this.collidable)
				return;
			
			if (Calc.distanceBetweenTwoPoints(body0.target.x, body0.target.y, body1.target.x, body1.target.y) < radius)
				callback(body0, body1);
		}
		
		shapeCollision(body0, body1, callback)
		{
			if (!this.collidable)
				return;
			
			const hit0 = body0.target.hit || body0.target;				
			const hit1 = body1.target.hit || body1.target;			
			const angle = Calc.angleBetweenTwoPoints(body0.prevX, body0.prevY, hit0.x, hit0.y);
			let point = hit0.localToLocal(0, 0, hit1);
			let hit = false;
			
			while (hit1.hitTest(point.x, point.y))
			{
				hit = true;
				hit0.x = hit0.x - 0.5 * Math.cos(angle);
				hit0.y = hit0.y - 0.5 * Math.sin(angle);
				point = hit0.localToLocal(0, 0, hit1);
			}
			
			if (callback && hit)
				callback(body0, body1);
		}
	}
	
	class StaticBody extends Body
	{
		constructor(props)
		{
			super(props);
		}
	}
	
	class DynamicBody extends Body
	{
		constructor(props)
		{
			super(props);
			this.vX = props.vX || 0;
			this.vY = props.vY || 0;
			this.minVX = props.minVX || 20;
			this.minVY = props.minVY || 20;
			this.friction = props.friction || 0.85;
		}
		
		moveX(delta)
		{
			this.vX *= this.friction;
			this.target.x += this.vX * delta * 0.001;
			
			if (Math.abs(this.vX) > 0 && Math.abs(this.vX) < this.minVX)
				this.vX = 0;
		}
		
		moveY(delta)
		{
			this.vY *= this.friction;
			this.target.y += this.vY * delta * 0.001;
			
			if (Math.abs(this.vY) > 0 && Math.abs(this.vY) < this.minVY)
				this.vY = 0;
		}
		
		tickHandler(e)
		{			
			this.moveX(e.delta);
			this.moveY(e.delta);
			
			Display.depthSort();
			
			if (this.callbacks.tickHandler)
				this.callbacks.tickHandler(e, this);
			
			this.getPrevX();
			this.getPrevY();
		}
	}
	
	class Player extends DynamicBody
	{
		constructor(props)
		{
			super(props);
			this.gamepad = props.gamepad;
			this.keys = props.keys || {};
		}
		
		keyX()
		{			
			if (this.gamepad.keys[this.keys.left])
				this.vX -= this.gamepad.keyForce;
			else if (this.gamepad.keys[this.keys.right])
				this.vX += this.gamepad.keyForce;	
		}
		
		keyY()
		{			
			if (this.gamepad.keys[this.keys.up])
				this.vY -= this.gamepad.keyForce;
			else if (this.gamepad.keys[this.keys.down])
				this.vY += this.gamepad.keyForce;
		}
		
		tickHandler(e)
		{
			this.keyX();
			this.keyY();
			this.moveX(e.delta);
			this.moveY(e.delta);
			
			Display.depthSort();
			
			if (this.callbacks.tickHandler)
				this.callbacks.tickHandler(e, this);
			
			this.getPrevX();
			this.getPrevY();
		}
	}
	
	class Warp extends StaticBody
	{
		constructor(props)
		{
			super(props);
			this.passenger = props.passenger;
			this.radius = props.radius;
			this.callback = props.callback;
			this.target.visible = false;
		}
		
		tickHandler()
		{
			this.circularCollision(this, this.passenger, this.radius, this.callback.bind(this));
		}
	}
	
	class Collectible extends StaticBody
	{
		constructor(props)
		{
			super(props);
			this.collector = props.collector;
			this.radius = props.radius;
			this.callback = props.callback;
		}
		
		tickHandler()
		{
			this.circularCollision(this, this.collector, this.radius, this.callback.bind(this));
			Display.depthSort();
		}
	}
	
	window.animate = animate;
	window.animate.Calc = Calc;
	window.animate.Sound = Sound;
	window.animate.Basis = Basis;
	window.animate.Display = Display;
	window.animate.UI = UI;
	window.animate.Gamepad = Gamepad;
	window.animate.DPad = DPad;
	window.animate.Game = Game;
	window.animate.Camera = Camera;
	window.animate.Body = Body;
	window.animate.StaticBody = StaticBody;
	window.animate.DynamicBody = DynamicBody;
	window.animate.Player = Player;
	window.animate.Warp = Warp;
	window.animate.Collectible = Collectible;
	
	Sound.channels = {};
	Body.children = [];
	Body.grounds = [];
}());
*/