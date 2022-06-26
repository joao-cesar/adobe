(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,94,136,92],[0,0,416,92]]}
];


// symbols:



(lib.CachedTexturedBitmap_146 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_147 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_147();
	this.instance.parent = this;
	this.instance.setTransform(-52,-11.5,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-11.5,104,23);


// stage content:
(lib.animate_cc_html5_canvas_play_animations = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{label0:0,label1:12,label2:24,label3:36});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		if (!root.started)
		{
		    root.stop();
		    root.button0.on("click", function(e){root.gotoAndPlay("label0")});
		    root.button1.on("click", function(e){root.gotoAndPlay("label1")});
		    root.button2.on("click", function(e){root.gotoAndPlay("label2")});
		    root.button3.on("click", function(e){root.gotoAndPlay("label3")});
		    root.started = true;
		}
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(12).call(this.frame_35).wait(13));

	// anim
	this.instance = new lib.CachedTexturedBitmap_146();
	this.instance.parent = this;
	this.instance.setTransform(1,267,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:11.25},0).wait(1).to({x:21.45},0).wait(1).to({x:31.7},0).wait(1).to({x:41.95},0).wait(1).to({x:52.15},0).wait(1).to({x:62.4},0).wait(1).to({x:72.65},0).wait(1).to({x:82.85},0).wait(1).to({x:93.1},0).wait(1).to({x:103.35},0).wait(1).to({x:113.55},0).wait(1).to({x:123.8},0).wait(1).to({x:134.05},0).wait(1).to({x:144.25},0).wait(1).to({x:154.5},0).wait(1).to({x:164.75},0).wait(1).to({x:175},0).wait(1).to({x:185.2},0).wait(1).to({x:195.45},0).wait(1).to({x:205.7},0).wait(1).to({x:215.9},0).wait(1).to({x:226.15},0).wait(1).to({x:236.4},0).wait(1).to({x:246.6},0).wait(1).to({x:256.85},0).wait(1).to({x:267.1},0).wait(1).to({x:277.3},0).wait(1).to({x:287.55},0).wait(1).to({x:297.8},0).wait(1).to({x:308},0).wait(1).to({x:318.25},0).wait(1).to({x:328.5},0).wait(1).to({x:338.75},0).wait(1).to({x:348.95},0).wait(1).to({x:359.2},0).wait(1).to({x:369.45},0).wait(1).to({x:379.65},0).wait(1).to({x:389.9},0).wait(1).to({x:400.15},0).wait(1).to({x:410.35},0).wait(1).to({x:420.6},0).wait(1).to({x:430.85},0).wait(1).to({x:441.05},0).wait(1).to({x:451.3},0).wait(1).to({x:461.55},0).wait(1).to({x:471.75},0).wait(1).to({x:482},0).wait(1));

	// buttons
	this.button3 = new lib.Button();
	this.button3.name = "button3";
	this.button3.parent = this;
	this.button3.setTransform(275,209.5);
	new cjs.ButtonHelper(this.button3, 0, 1, 1);

	this.button2 = new lib.Button();
	this.button2.name = "button2";
	this.button2.parent = this;
	this.button2.setTransform(275,169.85);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.button1 = new lib.Button();
	this.button1.name = "button1";
	this.button1.parent = this;
	this.button1.setTransform(275,130.2);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.button0 = new lib.Button();
	this.button0.name = "button0";
	this.button0.parent = this;
	this.button0.setTransform(275,90.55);
	new cjs.ButtonHelper(this.button0, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button0},{t:this.button1},{t:this.button2},{t:this.button3}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(276,279.1,274,33.89999999999998);
// library properties:
lib.properties = {
	id: '31E3C1B830A25B4989099FE5561EBB30',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1569183895189", id:"index_atlas_"}
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
an.compositions['31E3C1B830A25B4989099FE5561EBB30'] = {
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