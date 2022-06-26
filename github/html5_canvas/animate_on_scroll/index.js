(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Shapes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap/KAIAAz/IT/AAIAAT/g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnEHFQi7i7AAkKQAAkIC7i8QC8i7EIAAQEJAAC8C7QC7C8AAEIQAAEKi7C7Qi8C7kJAAQkIAAi8i7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap/KAIJ/z/IKAT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-64,128,128);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.TriangleAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shape
	this.instance = new lib.Shapes("single",2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TriangleAnimation, new cjs.Rectangle(-64,-64,128,128), null);


(lib.SquareAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// shape
	this.instance = new lib.Shapes("single",0);
	this.instance.setTransform(-544.05,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0,alpha:1},29,cjs.Ease.quintOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-608,-64,672,128);


(lib.CircleAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// shape
	this.instance = new lib.Shapes("single",1);
	this.instance.setTransform(0,-448.95);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},29,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-512.9,128,621.6999999999999);


// stage content:
(lib.animate_cc_html5_canvas_animate_on_scroll = function(mode,startPosition,loop,reversed) {
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
		
		root.startPlaying = function(target)
		{
			target.gotoAndPlay(1);
		};
		
		root.backToStart = function(target)
		{
			target.gotoAndStop(0);
		};
		
		root.triangleReset = function(target)
		{
			target.alpha = 0;
			target.rotation = -360;
		};
		
		root.anims = 
		[
			{
				target: root.square,
				viewRatio: 0.75,
				onEnter: root.startPlaying,
				onExit: root.backToStart
			},
			{
				target: root.circle,
				viewRatio: 0.65,
				onInit: null,
				onEnter: function(target){target.gotoAndPlay(3);},
				onExit: root.backToStart
			},
			{
				target: root.triangle,
				viewRatio: 0.75,
				onInit: root.triangleReset,
				onEnter: function(target){createjs.Tween.get(target).to({alpha:1, rotation:0}, 500, createjs.Ease.backOut);},
				onExit: root.triangleReset
			}
		];
		
		root.scrollHandler = function(e)
		{
			var anim;
			
			for (var i = 0, total = root.anims.length; i < total; i++)
			{
				anim = root.anims[i];
				
				if (!anim.initialized && anim.onInit)
				{
					anim.initialized = true; 
					anim.onInit(anim.target);
				}			
				
				if (anim.started)
				{			
					if (window.scrollY <= anim.target.y - window.innerHeight)
					{
						anim.started = false;
						
						if (anim.onExit)
							anim.onExit(anim.target);
					}			
				}
				else
				{			
					if (window.scrollY >= anim.target.y - window.innerHeight * anim.viewRatio)
					{
						anim.started = true;
						
						if (anim.onEnter)
							anim.onEnter(anim.target);
					}
				}
			}
		};
		
		root.scrollHandler(null);
		window.addEventListener("scroll", root.scrollHandler.bind(root));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// anims
	this.triangle = new lib.TriangleAnimation();
	this.triangle.name = "triangle";
	this.triangle.setTransform(480,4320);

	this.circle = new lib.CircleAnimation();
	this.circle.name = "circle";
	this.circle.setTransform(480,2700);

	this.square = new lib.SquareAnimation();
	this.square.name = "square";
	this.square.setTransform(480,1080);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.square},{t:this.circle},{t:this.triangle}]}).wait(1));

	// background
	this.instance = new lib.Background("single",0);
	this.instance.setTransform(0,5400);
	this.instance.alpha = 0.1992;

	this.instance_1 = new lib.Background("single",0);
	this.instance_1.setTransform(0,4320);
	this.instance_1.alpha = 0.1992;

	this.instance_2 = new lib.Background("single",0);
	this.instance_2.setTransform(0,3240);
	this.instance_2.alpha = 0.1992;

	this.instance_3 = new lib.Background("single",0);
	this.instance_3.setTransform(0,2160);
	this.instance_3.alpha = 0.1992;

	this.instance_4 = new lib.Background("single",0);
	this.instance_4.setTransform(0,1080);
	this.instance_4.alpha = 0.1992;

	this.instance_5 = new lib.Background("single",0);
	this.instance_5.setTransform(-0.05,0);
	this.instance_5.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(352,2970,608,2970);
// library properties:
lib.properties = {
	id: '3383E8FC715B0D41A43607953EA7270C',
	width: 960,
	height: 5940,
	fps: 60,
	color: "#00CCCC",
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
an.compositions['3383E8FC715B0D41A43607953EA7270C'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;