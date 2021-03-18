(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



// stage content:
(lib.adobe_animate_html5_canvas_scrolling_graph = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var width = lib.properties.width;
		var height = lib.properties.height;
		var totalShapes = 5;
		var graphScaleX = 5;
		var graphScaleY = 30;
		var shapes = [];
		var dX; // the offset in the x axis will be the same for all graphs
		
		function main()
		{
			var i, shape;
			
			for (i = 0; i < totalShapes; i++)
			{
				shape = new createjs.Shape();
				shape.color = '#' + (Math.random().toString(16) + "000000").substring(2,8);
				shape.startPos = { x: width, y: height * 0.5 };
				shape.minY = 0;
				shape.maxY = height;
				root.addChild(shape);
				shapes[i] = shape;
			}
			
			root.tick = root.on("tick", tickHandler);
		};
		
		function tickHandler()
		{
			var shape;
			
			dX = (Math.random() * 1) * graphScaleX;
			
			for (i = shapes.length - 1; i >= 0; i--)
			{
				shape = shapes[i];
				plotGraph(shape, pointsX, pointsY);
				moveGraph(shape, width, height);
			}
			
			if (shapes.length === 0)
				root.off("tick", root.tick);
		}
		
		function plotGraph(shape, funcX, funcY)
		{
			shape.graphics.beginStroke(shape.color);
			shape.graphics.moveTo(shape.startPos.x, shape.startPos.y);
			shape.startPos.x = funcX(shape);
			shape.startPos.y = funcY(shape);
			shape.graphics.lineTo(shape.startPos.x, shape.startPos.y);
			shape.graphics.endStroke();
		}
		
		// your function to handle the logic on the x axis
		function pointsX(shape)
		{
			return shape.startPos.x - dX;
		}
		
		// your function to handle the logic on the y axis
		function pointsY(shape)
		{
			return clamp(shape.startPos.y - (-1 + Math.random() * 2) * graphScaleY, shape.minY, shape.maxY);
		}
		
		function moveGraph(shape, rangeX, rangeY)
		{
			if (shape.startPos.x >= -rangeX * 0.5 && shape.startPos.x <= rangeX * 0.5)
				shape.x += dX;
			
			if (shape.startPos.x < -rangeX)
			{
				shape.cache(-rangeX, 0, rangeX, rangeY, Math.max(shape.scaleX * stage.scaleX, shape.scaleY * stage.scaleY));
				shape.graphics.clear();
				shapes.splice(shapes.indexOf(shape), 1);
			}
		}
		
		function clamp(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		}
		
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '475FA0FC0668014EB8482F34B4CA49E9',
	width: 550,
	height: 400,
	fps: 60,
	color: "#F4F4F4",
	opacity: 1.00,
	manifest: [],
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
an.compositions['475FA0FC0668014EB8482F34B4CA49E9'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;