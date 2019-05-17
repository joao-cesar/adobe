(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animate_cc_html5_pan_and_zoom_v5_atlas_", frames: [[114,126,31,30],[147,126,31,30],[180,126,28,27],[60,126,52,52],[60,66,58,58],[63,0,61,64],[0,0,61,64],[120,66,55,58],[0,66,58,64],[126,0,61,64],[177,66,52,58],[189,0,58,64],[0,132,31,8],[210,126,31,8],[210,136,28,7]]}
];


// symbols:



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["animate_cc_html5_pan_and_zoom_v5_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.MapBitmap = function() {
	this.initialize(img.MapBitmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3194,1872);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ResetButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.instance = new lib.CachedTexturedBitmap_17();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-16,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.1,-16,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-13.6,-14.4,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.1,-16,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-16,30.5,32);


(lib.PlusButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.instance = new lib.CachedTexturedBitmap_11();
	this.instance.parent = this;
	this.instance.setTransform(-7.65,-7.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.65,-7.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.9,-6.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// Shape
	this.instance_3 = new lib.CachedTexturedBitmap_16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.5,-14.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-13,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29,29);


(lib.MinusButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(-7.65,-2,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.65,-2,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.9,-1.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// Shape
	this.instance_3 = new lib.CachedTexturedBitmap_16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.5,-14.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-13,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29,29);


(lib.Map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bitmap
	this.instance = new lib.MapBitmap();
	this.instance.parent = this;
	this.instance.setTransform(-1597,-936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Map, new cjs.Rectangle(-1597,-936,3194,1872), null);


(lib.ArrowButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-16,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.5,-16,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-13.05,-14.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-16,29,32);


(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Reset Button
	this.resetButton = new lib.ResetButton();
	this.resetButton.name = "resetButton";
	this.resetButton.parent = this;
	this.resetButton.setTransform(45.75,-45.9);
	new cjs.ButtonHelper(this.resetButton, 0, 1, 2, false, new lib.ResetButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.resetButton).wait(1));

	// Up Button
	this.upButton = new lib.ArrowButton();
	this.upButton.name = "upButton";
	this.upButton.parent = this;
	this.upButton.setTransform(-20.9,-24,1,1,-90);
	new cjs.ButtonHelper(this.upButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.upButton).wait(1));

	// Left Button
	this.leftButton = new lib.ArrowButton();
	this.leftButton.name = "leftButton";
	this.leftButton.parent = this;
	this.leftButton.setTransform(-46.4,1.5,1,1,180);
	new cjs.ButtonHelper(this.leftButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.leftButton).wait(1));

	// Right Button
	this.rightButton = new lib.ArrowButton();
	this.rightButton.name = "rightButton";
	this.rightButton.parent = this;
	this.rightButton.setTransform(4.6,1.5);
	new cjs.ButtonHelper(this.rightButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rightButton).wait(1));

	// Down Button
	this.downButton = new lib.ArrowButton();
	this.downButton.name = "downButton";
	this.downButton.parent = this;
	this.downButton.setTransform(-20.9,27,1,1,90);
	new cjs.ButtonHelper(this.downButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.downButton).wait(1));

	// Plus Button
	this.plusButton = new lib.PlusButton();
	this.plusButton.name = "plusButton";
	this.plusButton.parent = this;
	this.plusButton.setTransform(45.75,1.5);
	new cjs.ButtonHelper(this.plusButton, 0, 1, 2, false, new lib.PlusButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plusButton).wait(1));

	// Minus Button
	this.minusButton = new lib.MinusButton();
	this.minusButton.name = "minusButton";
	this.minusButton.parent = this;
	this.minusButton.setTransform(45.75,47.4);
	new cjs.ButtonHelper(this.minusButton, 0, 1, 2, false, new lib.MinusButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.minusButton).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-60.9,-61.9,122.1,123.8), null);


(lib.App = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// UI
	this.ui = new lib.UI();
	this.ui.name = "ui";
	this.ui.parent = this;
	this.ui.setTransform(945.75,685.05);

	this.timeline.addTween(cjs.Tween.get(this.ui).wait(1));

	// Map
	this.map = new lib.Map();
	this.map.name = "map";
	this.map.parent = this;
	this.map.setTransform(512.05,384,0.2727,0.2727);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

}).prototype = getMCSymbolPrototype(lib.App, new cjs.Rectangle(76.5,128.8,930.4,618.2), null);


// stage content:
(lib.animate_cc_html5_pan_and_zoom_v5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var tl = this;
		
		tl.map =
		{
		    friction: 0.85,
		    boundsFriction: 0.85,
		    nudge: 5,
		    zoomStep: 0.01,
		    minScale: 0.1,
		    maxScale: 1,
		    checkBounds: true,
		    checkBoundsWhenDragging: false,
		    checkBoundsWhenPressing: false,
		    sprite: tl.app.map,
		    isDragging: false,
		    clickedX: 0,
		    clickedY: 0,
		    speedX: 0,
		    speedY: 0,
		    originalX: tl.app.map.x,
		    originalY: tl.app.map.y,
		    originalScaleX: tl.app.map.scaleX,
		    originalScaleY: tl.app.map.scaleY
		};
		
		tl.ui =
		{
		    resetButton: tl.app.ui.resetButton,
		    plusButton: tl.app.ui.plusButton,
		    minusButton: tl.app.ui.minusButton,
		    upButton: tl.app.ui.upButton,
		    rightButton: tl.app.ui.rightButton,
		    downButton: tl.app.ui.downButton,
		    leftButton: tl.app.ui.leftButton,
		    plusButtonDown: false,
		    minusButtonDown: false,
		    upButtonDown: false,
		    rightButtonDown: false,
		    downButtonDown: false,
		    leftButtonDown: false
		};
		
		tl.start = function(e)
		{
			stage.enableMouseOver();
			stage.mouseMoveOutside = true;
			createjs.Touch.enable(stage);
			createjs.Ticker.timingMode = createjs.Ticker.RAF;
		    createjs.Ticker.on("tick", tl.update);
		    tl.map.sprite.on("mousedown", tl.mouseDown);
		    tl.ui.resetButton.on("mousedown", tl.resetMap);
		    tl.ui.plusButton.on("mousedown", tl.zoomMap);
		    tl.ui.minusButton.on("mousedown", tl.zoomMap);
		    tl.ui.upButton.on("mousedown", tl.moveMap);
		    tl.ui.rightButton.on("mousedown", tl.moveMap);
		    tl.ui.downButton.on("mousedown", tl.moveMap);
		    tl.ui.leftButton.on("mousedown", tl.moveMap);
		    stage.on("stagemouseup", tl.stageMouseUp);
		    document.getElementById('canvas').addEventListener('mousewheel', tl.onMouseWheel);
		    document.getElementById('canvas').addEventListener('DOMMouseScroll', tl.onMouseWheel);
		
		    tl.resetMap();
		};
		
		tl.mouseDown = function(e)
		{
		    tl.map.clickedX = stage.mouseX;
		    tl.map.clickedY = stage.mouseY;
		    tl.map.isDragging = true;
		};
		
		tl.stageMouseUp = function() {
		    tl.map.isDragging = false;
		    tl.ui.plusButtonDown = false;
		    tl.ui.minusButtonDown = false;
		    tl.ui.upButtonDown = false;
		    tl.ui.rightButtonDown = false;
		    tl.ui.downButtonDown = false;
		    tl.ui.leftButtonDown = false;
		};
		
		tl.update = function(e)
		{
		    var usingButton = tl.ui.plusButtonDown || tl.ui.minusButtonDown || tl.ui.upButtonDown || tl.ui.rightButtonDown || tl.ui.downButtonDown || tl.ui.leftButtonDown;
		
		    if (tl.ui.plusButtonDown)
		        tl.scaleMap(-tl.map.zoomStep);
		    else if (tl.ui.minusButtonDown)
		        tl.scaleMap(tl.map.zoomStep);
		
		    if (tl.ui.upButtonDown)
		        tl.map.speedY -= tl.map.nudge;
		    else if (tl.ui.rightButtonDown)
		        tl.map.speedX += tl.map.nudge;
		    else if (tl.ui.downButtonDown)
		        tl.map.speedY += tl.map.nudge;
		    else if (tl.ui.leftButtonDown)
		        tl.map.speedX -= tl.map.nudge;
		
		    if (tl.map.isDragging)
			{
		        tl.map.speedX = stage.mouseX - tl.map.clickedX;
		        tl.map.speedY = stage.mouseY - tl.map.clickedY;
		    }
		
		    tl.map.speedX *= tl.map.friction;
		    tl.map.speedY *= tl.map.friction;
		    tl.map.sprite.x += tl.map.speedX;
		    tl.map.sprite.y += tl.map.speedY;
		    tl.map.clickedX = stage.mouseX;
		    tl.map.clickedY = stage.mouseY;
		
		    if (!tl.map.checkBounds)
		        return;
		
		    if (tl.map.isDragging && !tl.map.checkBoundsWhenDragging)
		        return;
		
		    if (usingButton && !tl.map.checkBoundsWhenPressing)
		        return;
		
		    var bounds = tl.map.sprite.nominalBounds;
		    var w = bounds.width * tl.map.sprite.scaleX;
		    var h = bounds.height * tl.map.sprite.scaleY;
		    var left = tl.map.sprite.x - w * 0.5;
		    var right = tl.map.sprite.x + w * 0.5;
		    var top = tl.map.sprite.y - h * 0.5;
		    var bottom = tl.map.sprite.y + h * 0.5;
		    var canvasWidth = canvas.width / stage.scaleX;
		    var canvasHeight = canvas.height / stage.scaleY;
			
			 if (tl.map.isDragging)
				 return;
		
		    if (w >= canvasWidth)
			{
		        if (left > 0)
		            tl.map.sprite.x = tl.lerp(tl.map.sprite.x, w * 0.5, tl.map.boundsFriction);
		        else if (right < canvasWidth)
		            tl.map.sprite.x = tl.lerp(tl.map.sprite.x, canvasWidth - w * 0.5, tl.map.boundsFriction);
		    }
			else
		        tl.map.sprite.x = tl.lerp(tl.map.sprite.x, tl.map.originalX, tl.map.boundsFriction);
		
		    if (h >= canvasHeight)
			{
		        if (top > 0)
		            tl.map.sprite.y = tl.lerp(tl.map.sprite.y, h * 0.5, tl.map.boundsFriction);
		        else if (bottom < canvasHeight)
		            tl.map.sprite.y = tl.lerp(tl.map.sprite.y, canvasHeight - h * 0.5, tl.map.boundsFriction);
		    }
			else
		        tl.map.sprite.y = tl.lerp(tl.map.sprite.y, tl.map.originalY, tl.map.boundsFriction);
		};
		
		tl.onMouseWheel = function(e)
		{
		    var delta;
		
		    if (e == window.event)
		        delta = -10 / window.event.wheelDeltaY;
		    else
		        delta = e.detail / 30;
		
		    var zoomFactor = delta;
		    tl.scaleMap(zoomFactor);
		};
		
		tl.resetMap = function()
		{
		    tl.map.sprite.x = tl.map.originalX;
		    tl.map.sprite.y = tl.map.originalY;
		    tl.map.sprite.scaleX = tl.map.sprite.scaleY = tl.map.originalScaleX;
		}
		
		tl.zoomMap = function(e)
		{
		    if (e.currentTarget == tl.ui.plusButton)
		        tl.ui.plusButtonDown = true;
		    if (e.currentTarget == tl.ui.minusButton)
		        tl.ui.minusButtonDown = true;
		};
		
		tl.moveMap = function(e)
		{
		    if (e.currentTarget == tl.ui.upButton)
		        tl.ui.upButtonDown = true;
		    else if (e.currentTarget == tl.ui.rightButton)
		        tl.ui.rightButtonDown = true;
		    else if (e.currentTarget == tl.ui.downButton)
		        tl.ui.downButtonDown = true;
		    else if (e.currentTarget == tl.ui.leftButton)
		        tl.ui.leftButtonDown = true;
		};
		
		tl.scaleMap = function(amount)
		{
		    tl.map.sprite.scaleX -= amount;
		    tl.map.sprite.scaleY = tl.map.sprite.scaleX;
		
		    if (tl.map.sprite.scaleX < tl.map.minScale)
		        tl.map.sprite.scaleX = tl.map.sprite.scaleY = tl.map.minScale;
		    else if (tl.map.sprite.scaleX > tl.map.maxScale)
		        tl.map.sprite.scaleX = tl.map.sprite.scaleY = tl.map.maxScale;
		};
		
		tl.lerp = function(v1, v2, friction)
		{
		    return friction * v1 + (1 - friction) * v2;
		}
		
		stage.on("drawstart", tl.start, null, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// App
	this.app = new lib.App();
	this.app.name = "app";
	this.app.parent = this;
	this.app.setTransform(0,0.25);

	this.timeline.addTween(cjs.Tween.get(this.app).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(588.5,513,418.4,234.20000000000005);
// library properties:
lib.properties = {
	id: '0E3C486926D3324382879D34D92ACC1B',
	width: 1024,
	height: 768,
	fps: 60,
	color: "#F5F5ED",
	opacity: 1.00,
	manifest: [
		{src:"images/MapBitmap.png?1553277505190", id:"MapBitmap"},
		{src:"images/animate_cc_html5_pan_and_zoom_v5_atlas_.png?1553277505178", id:"animate_cc_html5_pan_and_zoom_v5_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0E3C486926D3324382879D34D92ACC1B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;