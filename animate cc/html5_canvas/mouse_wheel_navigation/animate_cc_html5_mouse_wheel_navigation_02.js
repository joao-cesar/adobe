(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animate_cc_html5_mouse_wheel_navigation_02_atlas_", frames: [[0,0,205,205]]}
];


// symbols:



(lib.CachedTexturedBitmap_553 = function() {
	this.initialize(ss["animate_cc_html5_mouse_wheel_navigation_02_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_553();
	this.instance.parent = this;
	this.instance.setTransform(-51.25,-51.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-51.2,102.5,102.5);


// stage content:
(lib.animate_cc_html5_mouse_wheel_navigation_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		this.targetTimeline = this;
		this.targetTimeline.loop = true;
		this.targetTimeline.force = 40;
		this.targetTimeline.friction = 0.9;
		this.targetTimeline.minFrame = 0; // set the start range value here
		this.targetTimeline.maxFrame = this.targetTimeline.totalFrames - 1; // set the end range value here
		
		this.loopClamp = function(value, min, max)
		{
			if (value < min)
				return max;
			
			if (value > max)
				return min;
				
			return value;
		};
		
		this.clamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
				
			return value;
		};
		
		this.onMouseWheel = function (e)
		{
			e.preventDefault();
		
			var evt = window.event || e;
			var delta = Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
		
			that.targetTimeline.speed = delta * that.force;
		};
		
		this.tickHandler = function (e)
		{
			var clamp = that.targetTimeline.loop ? "loopClamp" : "clamp";
			
			that.targetTimeline.speed *= that.targetTimeline.friction;
			that.targetTimeline.gotoAndStop(that[clamp](that.targetTimeline.currentFrame + that.targetTimeline.speed, that.targetTimeline.minFrame, that.targetTimeline.maxFrame));
		};
		
		this.start = function ()
		{
			canvas.addEventListener('mousewheel', that.onMouseWheel.bind(that));
			canvas.addEventListener('DOMMouseScroll', that.onMouseWheel.bind(that));
			createjs.Ticker.on("tick", that.tickHandler);
		};
		
		if (!this.hasStarted)
		{
			this.gotoAndStop(this.targetTimeline.minFrame);
			this.start();
			this.hasStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(550));

	// animation
	this.instance = new lib.Rec("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-51.25,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:601.25},549).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172.5,348.8,480,-97.5);
// library properties:
lib.properties = {
	id: '27DE2D0218DF18419436DFD343CB7F5C',
	width: 550,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/animate_cc_html5_mouse_wheel_navigation_02_atlas_.png?1567010785774", id:"animate_cc_html5_mouse_wheel_navigation_02_atlas_"}
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
an.compositions['27DE2D0218DF18419436DFD343CB7F5C'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;