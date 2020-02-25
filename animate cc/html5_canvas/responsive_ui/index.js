(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.Rec1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2fDwIAAnfMAs/AAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec1, new cjs.Rectangle(-144,-24,288,48), null);


(lib.Rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvDwIAAnfIHfAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec, new cjs.Rectangle(-24,-24,48,48), null);


// stage content:
(lib.adobe_animate_html5_responsive_ui = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
		
		root.start = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			root.stop();
			root.resizeHandler();
			window.addEventListener("resize", root.resizeHandler);
		};
		
		root.resizeRoot = function(e)
		{
			var bounds = root.rec0.nominalBounds;
			var column1 = root.w * 0.5;
			var column2 = root.w - bounds.width * 0.5;
			var row1 = root.h * 0.5;
			var row2 = root.h - bounds.height * 0.5;
			
			root.rec1.x = column1;
			
			root.rec2.x = column2;
			
			root.rec3.y = row1;
			
			root.rec4.x = column1;
			root.rec4.y = row1;
			
			root.rec5.x = column2;
			root.rec5.y = row1;
			
			root.rec6.y = row2;
			
			root.rec7.x = column1;
			root.rec7.y = row2;
			
			root.rec8.x = column2;
			root.rec8.y = row2;
			
			root.rec9.scaleX = root.rec9.scaleY = window.innerWidth / lib.properties.width;
			root.rec9.x = column1;
			root.rec9.y = bounds.height * 0.5 + (root.rec4.y - root.rec1.y) * 0.5;
		};
		
		root.resizeCanvas = function(e)
		{
			root.w = window.innerWidth;
			root.h = window.innerHeight;
			
			canvas.width = root.w;
			canvas.height = root.h;
			canvas.style.width = root.w + "px";
			canvas.style.height = root.h + "px";
			
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;
		};
		
		root.resizeHandler = function(e)
		{
			root.resizeCanvas(e);
			root.resizeRoot(e);
		};
		
		root.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ui
	this.rec9 = new lib.Rec1();
	this.rec9.name = "rec9";
	this.rec9.setTransform(291.6,105.05);

	this.rec8 = new lib.Rec();
	this.rec8.name = "rec8";
	this.rec8.setTransform(526,376);

	this.rec7 = new lib.Rec();
	this.rec7.name = "rec7";
	this.rec7.setTransform(291.6,376);

	this.rec6 = new lib.Rec();
	this.rec6.name = "rec6";
	this.rec6.setTransform(24,376);

	this.rec5 = new lib.Rec();
	this.rec5.name = "rec5";
	this.rec5.setTransform(526,186.15);

	this.rec4 = new lib.Rec();
	this.rec4.name = "rec4";
	this.rec4.setTransform(291.6,186.1);

	this.rec3 = new lib.Rec();
	this.rec3.name = "rec3";
	this.rec3.setTransform(24,186.15);

	this.rec2 = new lib.Rec();
	this.rec2.name = "rec2";
	this.rec2.setTransform(526,24);

	this.rec1 = new lib.Rec();
	this.rec1.name = "rec1";
	this.rec1.setTransform(291.6,24);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(24,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec0},{t:this.rec1},{t:this.rec2},{t:this.rec3},{t:this.rec4},{t:this.rec5},{t:this.rec6},{t:this.rec7},{t:this.rec8},{t:this.rec9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,275,200);
// library properties:
lib.properties = {
	id: '7F34D921B394A64FABB2750AEF99AB3A',
	width: 550,
	height: 400,
	fps: 60,
	color: "#0B0B0B",
	opacity: 1.00,
	manifest: [],
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
an.compositions['7F34D921B394A64FABB2750AEF99AB3A'] = {
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