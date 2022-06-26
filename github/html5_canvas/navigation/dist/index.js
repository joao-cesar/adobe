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



(lib.Triangle1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFCC00").s().p("AiAjWIEBEBIkBCsg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-21.5,25.700000000000003,43);


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
	this.shape.graphics.f("#000000").s().p("AiAjWIEBEBIkBCsg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-21.5,25.700000000000003,43);


(lib.Button = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Triangle("synched",0);

	this.instance_1 = new lib.Triangle1("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.9,scaleY:0.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-21.5,25.700000000000003,43);


// stage content:
(lib.adobe_animate_html5_canvas_navigation = function(mode,startPosition,loop,reversed) {
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
		root = this;
		root.targetTimeline = root;
		root.targetTimeline.loop = true;
		
		root.main = function()
		{
			root.targetTimeline.stop();
			root.targetTimeline.on("click", root.clickHandler);
		};
		
		root.clickHandler = function(e)
		{
			switch(e.target.name)
			{
				case "prev":
					root.moveTimeline(-1);
					break;
				case "prev2X":
					root.moveTimeline(-2);
					break;
				case "next":
					root.moveTimeline(1);
					break;
				case "next2X":
					root.moveTimeline(2);
					break;
			}
		};
		
		root.moveTimeline = function(offset)
		{
			var frame = root.targetTimeline.currentFrame + offset;
			var total = root.targetTimeline.totalFrames;
			
			if (root.targetTimeline.loop)
			{
				if (frame < 0)
					frame = total + frame;
			}
			else
				frame = root.clamp(frame, 0, total - 1);
			
			root.targetTimeline.gotoAndStop(frame);
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		};
		
		if (!root.hasStarted)
		{
			root.main();
			root.hasStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// numbers
	this.text = new cjs.Text("0", "96px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 109;
	this.text.lineWidth = 120;
	this.text.parent = this;
	this.text.setTransform(480,216.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1).to({text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({text:"5"},0).wait(1).to({text:"6"},0).wait(1).to({text:"7"},0).wait(1).to({text:"8"},0).wait(1).to({text:"9"},0).wait(1).to({text:"10"},0).wait(1).to({text:"11"},0).wait(1).to({text:"12"},0).wait(1).to({text:"13"},0).wait(1).to({text:"14"},0).wait(1).to({text:"15"},0).wait(1));

	// buttons
	this.text_1 = new cjs.Text("-1", "25px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 33;
	this.text_1.parent = this;
	this.text_1.setTransform(155,500.25);

	this.prev = new lib.Button();
	this.prev.name = "prev";
	this.prev.setTransform(155,464.5,1,1,0,0,180);
	new cjs.ButtonHelper(this.prev, 0, 1, 2);

	this.text_2 = new cjs.Text("-2", "25px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 30;
	this.text_2.lineWidth = 33;
	this.text_2.parent = this;
	this.text_2.setTransform(81,499.25);

	this.prev2X = new lib.Button();
	this.prev2X.name = "prev2X";
	this.prev2X.setTransform(81,463.5,1,1,0,0,180);
	new cjs.ButtonHelper(this.prev2X, 0, 1, 2);

	this.text_3 = new cjs.Text("+2", "25px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 30;
	this.text_3.lineWidth = 33;
	this.text_3.parent = this;
	this.text_3.setTransform(879,499.25);

	this.next2X = new lib.Button();
	this.next2X.name = "next2X";
	this.next2X.setTransform(879,463.5);
	new cjs.ButtonHelper(this.next2X, 0, 1, 2);

	this.text_4 = new cjs.Text("+1", "25px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 30;
	this.text_4.lineWidth = 33;
	this.text_4.parent = this;
	this.text_4.setTransform(805,498.25);

	this.next = new lib.Button();
	this.next.name = "next";
	this.next.setTransform(805,462.5);
	new cjs.ButtonHelper(this.next, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next},{t:this.text_4},{t:this.next2X},{t:this.text_3},{t:this.prev2X},{t:this.text_2},{t:this.prev},{t:this.text_1}]}).wait(16));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(542.7,484.4,354.69999999999993,45.80000000000007);
// library properties:
lib.properties = {
	id: '8CAC1DDC2C94254297DBE0AD87C3E23D',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FAFAFA",
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
an.compositions['8CAC1DDC2C94254297DBE0AD87C3E23D'] = {
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