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



(lib.Triangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhehyIC8B9IivBog");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-11.5,18.9,23);


(lib.SliderButton = function(mode,startPosition,loop,reversed) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// circles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECECF1").s().p("AhoBpQgsgrABg+QgBg9AsgrQArgrA9gBQA9ABAsArQAsArAAA9QAAA+gsArQgsArg9AAQg9AAgrgrg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94F0E3").s().p("AhoBpQgsgrABg+QgBg9AsgrQArgrA9gBQA9ABAsArQAsArAAA9QAAA+gsArQgsArg9AAQg9AAgrgrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-14.8,29.700000000000003,29.700000000000003);


(lib.Hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArsDwIAAnfIXZAAIAAHfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-24,149.7,48);


(lib.Base = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D4EEF9").s().p("AAihLQAcCJhlAPQBDgmAGhyg");
	this.shape.setTransform(17.16,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94D5F0").s().p("AAIDuQhZgGhPgtQgfgRgTgZQgfgmgBg3QgDhVAyhHQA1hLBTgnQBNgkBOAhQBMAhAoBFIAHAMQAgA/gJBFQgFBdhFA+QhCA6hZAAIgFAAgACLCdQBmgOgciLQgGB0hEAlg");
	this.shape_1.setTransform(-0.7097,-1.0623);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#59BEE8").s().p("AAAC9QhagGhPgsQgsgZgUgmQATAYAfARQBPAtBaAGQBcABBDg7QBFg+AFhcQAJhGggg/IgHgMQALAQAKASQAgA/gJBGQgFBbhFA+QhCA7hZAAIgEgBg");
	this.shape_2.setTransform(1.5988,5.9018);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24.8,50.1,49.7);


(lib.SoundButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AhyhyIDlDl");
	this.shape.setTransform(-0.325,0.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// fade
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(197,240,255,0.698)").s().p("AAPD4QhZgGhPgsQgsgZgUgmQgegngCg3QgDhVAyhHQA1hLBTgnQBNgkBOAhQBMAhAoBFQAMAQAJASQAgA/gJBFQgFBchFA+QhCA6hZAAIgFAAg");
	this.shape_1.setTransform(-0.0097,0.0127);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).wait(1));

	// icon
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BsQgSgSAAgaQAAgZASgSQASgSAZAAQAQAAAMAHIgUiHQBBABAZA7QgagMgXAGQgGAhANBOQAFALAAANQAAAagSASQgSASgZAAQgZAAgSgSg");
	this.shape_2.setTransform(0.35,-1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3));

	// base
	this.instance = new lib.Base("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24.8,50.1,49.7);


(lib.PlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.Triangle("single",0);
	this.instance.setTransform(0,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regY:-0.1,scaleX:0.9,scaleY:0.9,y:-0.1},0).wait(1));

	// base
	this.instance_1 = new lib.Base("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:0.9,scaleY:0.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24.8,50.1,49.7);


(lib.Slider = function(mode,startPosition,loop,reversed) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// hit
	this.hit = new lib.Hit();
	this.hit.name = "hit";
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.Hit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(120));

	// sliderButton
	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(-60,0);

	this.timeline.addTween(cjs.Tween.get(this.button).to({x:60,y:0.9},119,cjs.Ease.none).wait(1));

	// line1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ArQAAIWhAA");
	this.shape.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#797A7B").ss(5,1,1).p("ArQAAIWhAA");
	this.shape_1.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54BCE8").s().p("AqYBOQkTggAAguQAAgtETghQETghGFAAQGGAAESAhQEUAhAAAtQAAAukUAgQkSAimGgBQmFABkTgig");
	this.shape_2.setTransform(0,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(120));

	// playButton
	this.playButton = new lib.PlayButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(120.8,3.25);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(120));

	// soundButton
	this.instance = new lib.SoundButton("single",2);
	this.instance.setTransform(-114.25,3.25);

	this.soundButton = new lib.SoundButton();
	this.soundButton.name = "soundButton";
	this.soundButton.setTransform(-114.25,3.25);
	new cjs.ButtonHelper(this.soundButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.soundButton}]},1).wait(119));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.3,-24,285.20000000000005,52.1);


// stage content:
(lib.adobe_animate_html5_canvas_timeline_based_volume_slider = function(mode,startPosition,loop,reversed) {
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
		var slider = this.slider;
		var soundButton = slider.soundButton;
		var playButton = slider.playButton;
		
		document.body.style.backgroundColor = lib.properties.color;
		createjs.Touch.enable(stage);
		
		soundButton.on("click", function(e)
		{
			slider.gotoRatio(0);
		});
		
		playButton.on("click", function(e)
		{	
			if (slider.sound)
				slider.sound.stop();
			
			slider.sound = createjs.Sound.play("RaceCar");
			slider.sound.volume = slider.ratio;
		});
		
		slider.move = function(e)
		{	
			var target = e.currentTarget;
			var parent = target.parent;
			var mouseX = parent.globalToLocal(target.stage.mouseX, target.stage.mouseY).x;
			var bounds = target.nominalBounds.width;
			
			parent.ratio = mouseX / bounds + 0.5;
			parent.gotoRatio();
			parent.button.gotoAndStop(e.type !== "pressup" ? 1 : 0);
		};
		
		slider.gotoRatio = function(ratio)
		{
			if (ratio !== undefined)
				this.ratio = ratio;
				
			this.gotoAndStop(Math.floor(this.totalFrames * this.ratio));
			
			if (this.sound)
				this.sound.volume = this.ratio;
		};
		
		slider.loop = false;
		slider.ratio = 0;
		slider.hit.on("mousedown", slider.move);
		slider.hit.on("pressmove", slider.move);
		slider.hit.on("pressup", slider.move);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ui
	this.slider = new lib.Slider();
	this.slider.name = "slider";
	this.slider.setTransform(266.75,477.95);

	this.timeline.addTween(cjs.Tween.get(this.slider).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(397.5,936.4,15.100000000000023,-430.29999999999995);
// library properties:
lib.properties = {
	id: '0C2CF376B879F44C9B2F95A802E7C271',
	width: 540,
	height: 960,
	fps: 60,
	color: "#C5F0FF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/RaceCar.mp3", id:"RaceCar"}
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
an.compositions['0C2CF376B879F44C9B2F95A802E7C271'] = {
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