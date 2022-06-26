(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"page0_atlas_", frames: [[0,0,16,16]]}
];


// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["page0_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


// stage content:
(lib.page0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.advanceTimeline = function(offset)
		{
			root.gotoAndStop(root.currentFrame + offset);
		};
		
		root.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.setTransform(28,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:82.85},0).wait(1).to({x:137.7},0).wait(1).to({x:192.55},0).wait(1).to({x:247.4},0).wait(1).to({x:302.25},0).wait(1).to({x:357.1},0).wait(1).to({x:411.95},0).wait(1).to({x:466.8},0).wait(1).to({x:521.65},0).wait(1));

	// recs
	this.instance_1 = new lib.Rec("single",0);
	this.instance_1.setTransform(521.65,200);
	this.instance_1.alpha = 0.1016;

	this.instance_2 = new lib.Rec("single",0);
	this.instance_2.setTransform(466.8,200);
	this.instance_2.alpha = 0.1016;

	this.instance_3 = new lib.Rec("single",0);
	this.instance_3.setTransform(411.95,200);
	this.instance_3.alpha = 0.1016;

	this.instance_4 = new lib.Rec("single",0);
	this.instance_4.setTransform(357.1,200);
	this.instance_4.alpha = 0.1016;

	this.instance_5 = new lib.Rec("single",0);
	this.instance_5.setTransform(302.25,200);
	this.instance_5.alpha = 0.1016;

	this.instance_6 = new lib.Rec("single",0);
	this.instance_6.setTransform(247.4,200);
	this.instance_6.alpha = 0.1016;

	this.instance_7 = new lib.Rec("single",0);
	this.instance_7.setTransform(192.55,200);
	this.instance_7.alpha = 0.1016;

	this.instance_8 = new lib.Rec("single",0);
	this.instance_8.setTransform(137.7,200);
	this.instance_8.alpha = 0.1016;

	this.instance_9 = new lib.Rec("single",0);
	this.instance_9.setTransform(82.85,200);
	this.instance_9.alpha = 0.1016;

	this.instance_10 = new lib.Rec("single",0);
	this.instance_10.setTransform(28,200);
	this.instance_10.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295,392,234.70000000000005,-184);
// library properties:
lib.properties = {
	id: 'F5DC15BAD22F4645A7C8DCF99DB85BFF',
	width: 550,
	height: 400,
	fps: 24,
	color: "#111111",
	opacity: 1.00,
	manifest: [
		{src:"images/page0_atlas_.png", id:"page0_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['F5DC15BAD22F4645A7C8DCF99DB85BFF'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;