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


(lib.Seconds = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#B31212").ss(2,1,1).p("AAA8dMAAAA47");
	this.shape.setTransform(0,-182.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Seconds, new cjs.Rectangle(-1,-365.3,2,366.3), null);


(lib.Minutes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AAA5mMAAAAzN");
	this.shape.setTransform(0,-163.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Minutes, new cjs.Rectangle(-2,-329.8,4,331.8), null);


(lib.Hours = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AAB0uMgABApd");
	this.shape.setTransform(0,-132.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hours, new cjs.Rectangle(-4,-269.3,8.1,273.3), null);


(lib.Circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgwYAwYQ0D0CAA8WQAA8WUD0DQUD0CcVAAQcXAAUCUCQUDUDAAcWQAAcW0DUCQ0CUE8XAAQ8VAA0D0Eg");
	this.shape.setTransform(0.0044,0.0029,0.9703,0.9703);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-425,-425,850,850);


(lib.AnalogClock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hours
	this.hours = new lib.Hours();
	this.hours.name = "hours";
	this.hours.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.hours).wait(1));

	// minutes
	this.minutes = new lib.Minutes();
	this.minutes.name = "minutes";
	this.minutes.setTransform(0.15,0.05);

	this.timeline.addTween(cjs.Tween.get(this.minutes).wait(1));

	// seconds
	this.seconds = new lib.Seconds();
	this.seconds.name = "seconds";
	this.seconds.setTransform(0.1,0.05);

	this.timeline.addTween(cjs.Tween.get(this.seconds).wait(1));

	// numbers
	this.text = new cjs.Text("11", "bold 58px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 68;
	this.text.parent = this;
	this.text.setTransform(-187.8,-352.9);

	this.text_1 = new cjs.Text("5", "bold 58px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 67;
	this.text_1.lineWidth = 35;
	this.text_1.parent = this;
	this.text_1.setTransform(187.85,297.9);

	this.text_2 = new cjs.Text("8", "bold 58px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 67;
	this.text_2.lineWidth = 34;
	this.text_2.parent = this;
	this.text_2.setTransform(-325.3,160.35);

	this.text_3 = new cjs.Text("2", "bold 58px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 67;
	this.text_3.lineWidth = 38;
	this.text_3.parent = this;
	this.text_3.setTransform(325.4,-215.35);

	this.text_4 = new cjs.Text("10", "bold 58px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 67;
	this.text_4.lineWidth = 67;
	this.text_4.parent = this;
	this.text_4.setTransform(-325.4,-215.3);

	this.text_5 = new cjs.Text("4", "bold 58px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 67;
	this.text_5.lineWidth = 35;
	this.text_5.parent = this;
	this.text_5.setTransform(325.35,160.4);

	this.text_6 = new cjs.Text("7", "bold 58px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 67;
	this.text_6.lineWidth = 37;
	this.text_6.parent = this;
	this.text_6.setTransform(-187.85,297.9);

	this.text_7 = new cjs.Text("1", "bold 58px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 67;
	this.text_7.lineWidth = 35;
	this.text_7.parent = this;
	this.text_7.setTransform(187.8,-352.85);

	this.text_8 = new cjs.Text("9", "bold 58px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 67;
	this.text_8.lineWidth = 37;
	this.text_8.parent = this;
	this.text_8.setTransform(-375.75,-27.45);

	this.text_9 = new cjs.Text("3", "bold 58px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 67;
	this.text_9.lineWidth = 37;
	this.text_9.parent = this;
	this.text_9.setTransform(375.75,-27.45);

	this.text_10 = new cjs.Text("6", "bold 58px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 67;
	this.text_10.lineWidth = 36;
	this.text_10.parent = this;
	this.text_10.setTransform(0,348.3);

	this.text_11 = new cjs.Text("12", "bold 58px 'Arial'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 67;
	this.text_11.lineWidth = 69;
	this.text_11.parent = this;
	this.text_11.setTransform(0,-403.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// circle
	this.instance = new lib.Circle("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AnalogClock, new cjs.Rectangle(-425,-425,850,850), null);


// stage content:
(lib.adobe_animate_html5_canvas_analog_clock = function(mode,startPosition,loop,reversed) {
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
		
		root.main = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			root.stop();
			root.analogClock = new root.AnalogClock(root.clock.seconds, root.clock.minutes, root.clock.hours);
		};
		
		root.AnalogClock = function(secondsHand, minutesHand, hoursHand, stop)
		{
			this.secondsHand = secondsHand;
			this.minutesHand = minutesHand;
			this.hoursHand = hoursHand;
			
			if (!stop)
				this.start();
		};
		
		root.AnalogClock.prototype.start = function()
		{
			this.update();
			this.stop();
			this.interval = setInterval(this.update.bind(this), 1000);
		};
		
		root.AnalogClock.prototype.stop = function()
		{
			clearInterval(this.interval);
		};
		
		root.AnalogClock.prototype.update = function()
		{
			var now = new Date();
			
		    // seconds
			this.second = now.getSeconds();
		    this.second = (this.second * Math.PI / 30);
			this.secondsHand.rotation = this.second * 180 / Math.PI;
			
			// minutes
			this.minute = now.getMinutes();
		    this.minute = (this.minute * Math.PI / 30) + (this.second * Math.PI / (30 * 60));
			this.minutesHand.rotation = this.minute * 180 / Math.PI;
			
			// hours
			this.hour = now.getHours();
		    this.hour = this.hour % 12;
		    this.hour = (this.hour * Math.PI / 6) + (this.minute * Math.PI / (6 * 60)) + (this.second * Math.PI / (360 * 60));
			this.hoursHand.rotation = this.hour * 180 / Math.PI;
		};
		
		root.main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clock
	this.clock = new lib.AnalogClock();
	this.clock.name = "clock";
	this.clock.setTransform(480.1,480.2,1,1,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(535,535,370,370);
// library properties:
lib.properties = {
	id: '5B680F7644E62A44AEA57EA7CAEBD4D1',
	width: 960,
	height: 960,
	fps: 60,
	color: "#141414",
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
an.compositions['5B680F7644E62A44AEA57EA7CAEBD4D1'] = {
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