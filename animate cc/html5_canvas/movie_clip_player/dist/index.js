(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,26,36]]}
];


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



(lib.CachedBmp_32 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.Rec = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ak/FAIAAp/IJ/AAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.VerticalBars = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-6.45,-9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-9,13,18);


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
	this.shape.graphics.f("#000000").s().p("Ag7hZIB3BZIh3Bag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-9,12,18);


(lib.PlayHeadCircle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.9,13.9);


(lib.ButtonHit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AhtBuIAAjbIDbAAIAADbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.BarRec = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("EhK/AAUIAAgnMCV/AAAIAAAng");
	this.shape.setTransform(480,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,4);


(lib.PlayHead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// circles
	this.instance = new lib.PlayHeadCircle("single",0);
	this.instance.setTransform(3.5,3.5,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1},0).to({_off:true},2).wait(1));

	// hit
	this.instance_1 = new lib.ButtonHit("synched",0);
	this.instance_1.setTransform(3.5,3.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,22,22);


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

	// triangle
	this.instance = new lib.Triangle("single",0);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.ButtonHit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


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

	// triangle
	this.instance = new lib.VerticalBars("single",0);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.ButtonHit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.BarButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bar
	this.instance = new lib.BarRec("single",0);
	this.instance.setTransform(0,-0.05,1,0.5002,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.BarRec("single",0);
	this.instance_1.setTransform(0,-17.95,1,10.0038);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17.9,960,40);


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
	this.instance_1.setTransform(0.05,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.PauseButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-9,13,18);


(lib.MovieClipPlayer = function(mode,startPosition,loop,reversed) {
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
	this.playPause = new lib.PlayPause();
	this.playPause.name = "playPause";
	this.playPause.setTransform(28.55,626);

	this.timeline.addTween(cjs.Tween.get(this.playPause).wait(1));

	// playHead
	this.playHead = new lib.PlayHead();
	this.playHead.name = "playHead";
	this.playHead.setTransform(0,604.1);
	new cjs.ButtonHelper(this.playHead, 0, 1, 2, false, new lib.PlayHead(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playHead).wait(1));

	// bar
	this.bar = new lib.BarButton();
	this.bar.name = "bar";
	this.bar.setTransform(0,606.55);
	new cjs.ButtonHelper(this.bar, 0, 1, 2, false, new lib.BarButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MovieClipPlayer, new cjs.Rectangle(-3.4,600.7,963.4,34.299999999999955), null);


// stage content:
(lib.adobe_animate_html5_canvas_movie_clip_player = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var player;
		
		root.start = function()
		{
			document.body.style.backgroundColor = "black";
			player = new root.MovieClipPlayer( { player: root.player, target: this } ); // target is the Movie Clip instance you want to control
		};
		
		if (!root.frame0Started)
		{
			root.MovieClipPlayer = function(props)
			{
				this.player = props.player;
				this.target = props.target;
				this.start();
			};
			
			root.MovieClipPlayer.prototype.start = function()
			{
				if (this.isMobile())
					createjs.Touch.enable(this.player.stage);
				
				this.player.stage.mouseMoveOutside = true;
				this.mouseDown = this.player.on("mousedown", this.mouseDownHandler, this);
				this.pressUp = this.player.stage.on("pressup", this.pressUpHandler, this);
				this.tick = createjs.Ticker.on("tick", this.tickHandler, this);
			}
			
			root.MovieClipPlayer.prototype.mouseDownHandler = function(e)
			{
				if (this.player.contains(e.target))
				{
					if (e.target === this.player.bar || e.target === this.player.playHead)
					{
						this.paused = this.target.paused;
						this.dragging = true;
					}				
					else if (e.target === this.player.playPause || this.player.playPause.contains(e.target))
					{
						if (this.target.paused)
							this.target.play();
						else
							this.target.stop();
					}
				}		
			};
			
			root.MovieClipPlayer.prototype.tickHandler = function(e)
			{
				this.mousePos = this.player.globalToLocal(this.player.stage.mouseX, this.player.stage.mouseY);
				this.ratioX = this.mousePos.x / this.player.bar.nominalBounds.width;
				
				if (this.dragging)
					this.target.gotoAndStop(Math.floor(this.target.totalFrames * this.ratioX));
				
				this.player.playHead.x = (this.target.currentFrame / this.target.totalFrames) * this.player.bar.nominalBounds.width;
				this.player.playPause.gotoAndStop(this.target.paused ? 0 : 1);
			};
			
			root.MovieClipPlayer.prototype.pressUpHandler = function(e)
			{
				this.dragging = false;
				
				if (!this.paused)
					this.target.play();
			};
			
			root.MovieClipPlayer.prototype.isMobile = function()
			{
				return createjs.BrowserDetect.isWindowPhone || createjs.BrowserDetect.isIOS  || createjs.BrowserDetect.isAndroid  || createjs.BrowserDetect.isBlackberry;
			};
			
			root.start();
			root.frame0Started = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360));

	// player
	this.player = new lib.MovieClipPlayer();
	this.player.name = "player";

	this.timeline.addTween(cjs.Tween.get(this.player).wait(360));

	// anim
	this.instance = new lib.Rec("synched",0);
	this.instance.setTransform(32,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:928},359).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,608,480,27);
// library properties:
lib.properties = {
	id: '49C8550336B0EC47A7CE03BCEAE0C25D',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['49C8550336B0EC47A7CE03BCEAE0C25D'] = {
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