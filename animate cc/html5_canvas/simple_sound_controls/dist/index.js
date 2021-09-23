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
	this.shape.graphics.f("#FFFFFF").s().p("AhqiAIDVCAIjVCBg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-12.9,21.5,25.8);


(lib.Square = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah1B2IAAjrIDrAAIAADrg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-11.7,23.5,23.5);


(lib.PauseIcon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAfBqIAAjTIBqAAIAADTgAiIBqIAAjTIBqAAIAADTg");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-10.6,27.5,21.2);


(lib.StopButton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Square("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjvDwIAAnfIHfAAIAAHfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48,48);


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
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjvDwIAAnfIHfAAIAAHfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48,48);


(lib.PauseButton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PauseIcon("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjvDwIAAnfIHfAAIAAHfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48,48);


(lib.PlayPause = function(mode,startPosition,loop,reversed) {
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

	// buttons
	this.instance = new lib.PlayButton();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.PlayButton(), 3);

	this.instance_1 = new lib.PauseButton();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.PauseButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-12.9,27.5,25.8);


(lib.AudioPlayer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// playPause
	this.playPauseButton = new lib.PlayPause();
	this.playPauseButton.name = "playPauseButton";
	this.playPauseButton.setTransform(-36.2,0);

	this.timeline.addTween(cjs.Tween.get(this.playPauseButton).wait(1));

	// stopButton
	this.stopButton = new lib.StopButton();
	this.stopButton.name = "stopButton";
	this.stopButton.setTransform(33.25,0);
	new cjs.ButtonHelper(this.stopButton, 0, 1, 2, false, new lib.StopButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stopButton).wait(1));

	// rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AtXFSIAAqjIavAAIAAKjg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AudioPlayer, new cjs.Rectangle(-85.5,-33.7,171.1,67.5), null);


// stage content:
(lib.adobe_animate_html5_canvas_simple_sound_controls = function(mode,startPosition,loop,reversed) {
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
		window.root = this;
		
		root.AudioPlayer = function(props)
		{
			this.target = props.target;
			this.soundLinkage = props.soundLinkage;
			this.playProps = props.playProps;
			this.target.on("click", this.onClick, this);
		};
		
		root.AudioPlayer.prototype.onClick = function(e)
		{	
			if (this.target.playPauseButton.contains(e.target))
				this.toggle();
			else if (this.target.stopButton.contains(e.target))
				this.stop();
		};
		
		root.AudioPlayer.prototype.toggle = function()
		{
			this.target.playPauseButton.gotoAndStop(this.target.playPauseButton.currentFrame + 1);
				
			if (this.target.playPauseButton.currentFrame === 0)
			{
				if (this.sound)
					this.sound.paused = true;
			}
			else
			{
				if (this.sound)
					this.sound.paused = false;
				else
					this.sound = createjs.Sound.play(this.soundLinkage, this.playProps);
			}
		};
		
		root.AudioPlayer.prototype.stop = function()
		{
			if (this.sound)
			{
				this.sound.stop();
				this.sound = null;
				this.target.playPauseButton.gotoAndStop(0);
			}
		};
		
		root.main = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			
			root.audioPlayer0 = new root.AudioPlayer({ target: root.player0, soundLinkage: "Song0", playProps: { volume: 0.1 } });
			root.audioPlayer1 = new root.AudioPlayer({ target: root.player1, soundLinkage: "Song1" });
			root.audioPlayer2 = new root.AudioPlayer({ target: root.player2, soundLinkage: "Song2" });
		};
		
		root.main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// players
	this.player2 = new lib.AudioPlayer();
	this.player2.name = "player2";
	this.player2.setTransform(776.5,270);

	this.player1 = new lib.AudioPlayer();
	this.player1.name = "player1";
	this.player1.setTransform(480,270);

	this.player0 = new lib.AudioPlayer();
	this.player0.name = "player0";
	this.player0.setTransform(183.5,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player0},{t:this.player1},{t:this.player2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(578,506.3,284.1,-202.5);
// library properties:
lib.properties = {
	id: '904C7453302F423FB5D7AE24A5D51382',
	width: 960,
	height: 540,
	fps: 60,
	color: "#0C0C0C",
	opacity: 1.00,
	manifest: [
		{src:"sounds/Song0.mp3", id:"Song0"},
		{src:"sounds/Song1.mp3", id:"Song1"},
		{src:"sounds/Song2.mp3", id:"Song2"}
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
an.compositions['904C7453302F423FB5D7AE24A5D51382'] = {
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