(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,694,863],[696,0,317,189],[696,191,317,189]]}
];


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



(lib.apple = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.br_flag = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.us_flag = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.USFlag = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.us_flag();
	this.instance.setTransform(-79.25,-47.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-47.2,158.5,94.5);


(lib.Orange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0F006C").ss(2,1,1).p("ACQncQAJhPgDhPIAeACIBRAEQgIBegVBYQBbApBMBMQClCmAADpQAADqilClQilCmjqAAQigAAiBhPQgVgNgUgPQgkgaghghQililAAjqQAAjpClimQB+h9ClgeQA1gKA3AAQBJAABDARQACAAACABgABVjoQANAFANAEQASAEAUACQA9AEBKgdABVjoQAjhfAQhgQAFgbADgaADom+QgJAlgLAkQgaBRglBLAgolfQA0BZBJAe");
	this.shape.setTransform(1.3,-3.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F76819").s().p("AipICQgtgLgqgTQgjgaghghQililAAjqQAAjpClimQB+h9ClgeQCFABBuA7QgQBggiBgQAMAFANADQATAFATACQAmhLAZhRQAZAUAYAXQCbCcAADaQAADbibCbQibCbjaAAQhFAAg+gPgADwkFQA3AAA/gZQg/AZg3AAIgBAAIAAAAIgNAAIgDAAIADAAIANAAIAAAAIABAAgACgkUQhKgeg1hZQA1BZBKAeg");
	this.shape_1.setTransform(-6.125,0.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF530E").s().p("AmVHmQgVgNgVgPQAqATAtALQA+AQBFgBQDbABCaicQCbiaAAjbQAAjbibibQgYgYgZgUQALgkAJgkQBbAoBMBNQCmClAADpQAADqimClQilCljpABQihAAiAhPgAjgoqQA0gKA4AAQBKAABBARIAEABIgIA1Qhtg8iGgBg");
	this.shape_2.setTransform(12.975,3.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8005").s().p("AhKDJIAFgJQAfhXAQhXQAGgeAEgeQAKhSgDhSIBQAEQgIBegVBYQgJAkgLAkQgaBQgkBLQgUgBgSgFg");
	this.shape_3.setTransform(19.9125,-46.4125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC5A2").s().p("AgvDFQAjhgAPhgIAIg0QAJhPgDhOIAeABQADBSgKBSQgEAfgGAdQgQBXgeBXIgFAKQgNgDgNgFg");
	this.shape_4.setTransform(14.6203,-46.7875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F29714").s().p("AmQBqQilgsAAg+QAAg9ClgsQCngrDpAAQDqAACmArQCmAsAAA9QAAA+imAsQimArjqABQjpgBingrg");
	this.shape_5.setTransform(-1.15,52.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-68.3,116.5,135.6);


(lib.Highlight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AsrpOIZXAAQCAAAAACAIAAOdQAAB/iAAAI5XAAQiAAAAAh/IAAudQAAiACAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Highlight, new cjs.Rectangle(-95,-60,190,120.1), null);


(lib.BrazilFlag = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.br_flag();
	this.instance.setTransform(-79.25,-47.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-47.2,158.5,94.5);


(lib.Apple1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.apple();
	this.instance.setTransform(-86.75,-107.85,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.7,-107.8,173.5,215.7);


(lib.USButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flag
	this.instance = new lib.USFlag("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-47.2,158.5,94.5);


(lib.OrangeButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// apple
	this.instance = new lib.Orange("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-68.3,116.5,135.6);


(lib.BrazilButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flag
	this.instance = new lib.BrazilFlag("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-47.2,158.5,94.5);


(lib.AppleButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// apple
	this.instance = new lib.Apple1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.7,-107.8,173.5,215.7);


// stage content:
(lib.html5_canvas_change_language = function(mode,startPosition,loop,reversed) {
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
		var usButton = root.usButton;
		var brButton = root.brButton;
		var appleButton = root.appleButton;
		var orangeButton = root.orangeButton;
		var highlight = root.highlight;
		var languages = { EN_US: "EnUS", PT_BR: "PtBR" };
		var language = languages.EN_US;
		var voice;
		
		function main()
		{
			document.body.style.backgroundColor = lib.properties.color;
			usButton.on("click", changeLanguage, null, false, { lang: languages.EN_US });
			brButton.on("click", changeLanguage, null, false, { lang: languages.PT_BR });
			appleButton.on("click", playVoice, null, false, { voicePrefix: "Apple" });
			orangeButton.on("click", playVoice, null, false, { voicePrefix: "Orange" });
		}
		
		function changeLanguage(e, data)
		{
			language = data.lang;
			highlight.x = e.currentTarget.x;
			highlight.y = e.currentTarget.y;
		}
		
		function playVoice(e, data)
		{
			if (voice)
				voice.stop();
				
			voice = playSound(data.voicePrefix + language);
		}
		
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// gui
	this.orangeButton = new lib.OrangeButton();
	this.orangeButton.name = "orangeButton";
	this.orangeButton.setTransform(646.4,411.7);
	new cjs.ButtonHelper(this.orangeButton, 0, 1, 2);

	this.appleButton = new lib.AppleButton();
	this.appleButton.name = "appleButton";
	this.appleButton.setTransform(328.4,371.1);
	new cjs.ButtonHelper(this.appleButton, 0, 1, 2);

	this.brButton = new lib.BrazilButton();
	this.brButton.name = "brButton";
	this.brButton.setTransform(646.4,156.1);
	new cjs.ButtonHelper(this.brButton, 0, 1, 2);

	this.usButton = new lib.USButton();
	this.usButton.name = "usButton";
	this.usButton.setTransform(328.4,154.8);
	new cjs.ButtonHelper(this.usButton, 0, 1, 2);

	this.highlight = new lib.Highlight();
	this.highlight.name = "highlight";
	this.highlight.setTransform(328.4,154.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight},{t:this.usButton},{t:this.brButton},{t:this.appleButton},{t:this.orangeButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(713.4,364.8,12.300000000000068,114.19999999999999);
// library properties:
lib.properties = {
	id: 'B6B1939D7A484E5AA71B43344BFFCEFD',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFB338",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"sounds/AppleEnUS.mp3", id:"AppleEnUS"},
		{src:"sounds/ApplePtBR.mp3", id:"ApplePtBR"},
		{src:"sounds/OrangeEnUS.mp3", id:"OrangeEnUS"},
		{src:"sounds/OrangePtBR.mp3", id:"OrangePtBR"}
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
an.compositions['B6B1939D7A484E5AA71B43344BFFCEFD'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;