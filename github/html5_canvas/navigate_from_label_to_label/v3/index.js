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
	this.shape.graphics.f("#00FFFF").s().p("AlRqjIKjKjIqjKkg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-67.6,67.6,135.3);


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
	this.shape.graphics.f("#000000").s().p("AhjjGIDHDGIjHDHg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-19.8,19.9,39.7);


(lib.Star = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("AAAG9Ik8ArIg5k7IiLkfIEaiYIDmjdIDnDdIEaCYIiLEfIg5E7g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-48.8,102.69999999999999,97.69999999999999);


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
	this.shape.graphics.f("#00FF00").s().p("AncHdIAAu5IO5AAIAAO5g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-47.6,95.30000000000001,95.30000000000001);


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
	this.shape.graphics.f("#FF0000").s().p("AlXFYQiOiPAAjJQAAjJCOiOQCOiODJAAQDJAACPCOQCOCOAADJQAADJiOCPQiPCOjJAAQjJAAiOiOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-48.6,97.2,97.2);


(lib.NavigationButton = function(mode,startPosition,loop,reversed) {
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
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-19.8,19.9,39.7);


(lib.Container = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {rec:0,circle:17,triangle:26,star:36};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.autoReset = false;
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(9).call(this.frame_25).wait(10).call(this.frame_35).wait(7).call(this.frame_42).wait(1));

	// prev
	this.prevButton = new lib.NavigationButton();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(27.95,219.85,1,1,0,0,180);
	this.prevButton._off = true;
	new cjs.ButtonHelper(this.prevButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.prevButton).wait(17).to({_off:false},0).wait(26));

	// next
	this.nextButton = new lib.NavigationButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(522.1,219.85);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.nextButton).to({_off:true},36).wait(7));

	// shapes
	this.instance = new lib.Rec("single",0);
	this.instance.setTransform(111.65,200);

	this.instance_1 = new lib.Circle("single",0);
	this.instance_1.setTransform(275,48.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Triangle1("single",0);
	this.instance_2.setTransform(452.2,199.95,1,1,180);
	this.instance_2._off = true;

	this.instance_3 = new lib.Star("single",0);
	this.instance_3.setTransform(115.3,200);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:438.3},16,cjs.Ease.quintInOut).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({y:351.4},8,cjs.Ease.circInOut).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({x:97.8},9,cjs.Ease.quartInOut).to({_off:true,rotation:0,x:115.3,y:200},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},1).to({x:434.65},6,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,0,514.1,400);


// stage content:
(lib.adobe_animate_html5_canvas_navigate_from_label_to_label_v3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7];
	// timeline functions:
	this.frame_0 = function() {
		root = this;
		
		root.framesTarget = root;
		root.prevFrameButtonName = "prev"; // set the name of the previous button to control de main timeline here
		root.nextFrameButtonName = "next"; // set the name of the next button to control de main timeline here
		
		root.labelsTarget = root.container; // put the instance name of the Movie Clip to be controlled here
		root.prevLabelButtonName = "prevButton"; // set the name of the previous button to navigate from label to label here
		root.nextLabelButtonName = "nextButton"; // set the name of the next button to navigate from label to label here
		root.labelsIndex = 0;
		
		root.start = function()
		{
			root.gotoPrevLabel = function(e)
			{
				root.labelsIndex = root.clamp(--root.labelsIndex, 0, root.labelsTarget.labels.length - 1);
				root.labelsTarget.gotoAndPlay(root.labelsTarget.labels[root.labelsIndex].position);
			};
		
			root.gotoNextLabel = function(e)
			{
				root.labelsIndex = root.clamp(++root.labelsIndex, 0, root.labelsTarget.labels.length - 1);
				root.labelsTarget.gotoAndPlay(root.labelsTarget.labels[root.labelsIndex].position);
			};
			
			root.gotoPrevFrame = function(e)
			{
				root.gotoAndStop(root.currentFrame - 1);
			};
			
			root.gotoNextFrame = function(e)
			{
				root.gotoAndStop(root.currentFrame + 1);
			};
		
			root.on("click", function(e)
			{
				if (e.target.name === root.prevFrameButtonName)
					root.gotoPrevFrame();
				else if (e.target.name === root.nextFrameButtonName)
					root.gotoNextFrame();
				else if (e.target.name === root.prevLabelButtonName)
					root.gotoNextLabel();
				else if (e.target.name === root.nextLabelButtonName)
					root.gotoNextLabel();
			});
		
			root.stop();
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		};
		
		if (!root.frame0Started)
		{
			root.start();
			root.frame0Started = true;
		}
	}
	this.frame_1 = function() {
		root.labelsTarget = root.container1;
		root.labelsIndex = 0;
	}
	this.frame_2 = function() {
		root.labelsTarget = root.container2;
		root.labelsIndex = 0;
	}
	this.frame_3 = function() {
		root.labelsTarget = root.container3;
		root.labelsIndex = 0;
	}
	this.frame_4 = function() {
		root.labelsTarget = root.container4;
		root.labelsIndex = 0;
	}
	this.frame_5 = function() {
		root.labelsTarget = root.container5;
		root.labelsIndex = 0;
	}
	this.frame_6 = function() {
		root.labelsTarget = root.container6;
		root.labelsIndex = 0;
	}
	this.frame_7 = function() {
		root.labelsTarget = root.container7;
		root.labelsIndex = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// prev
	this.prev = new lib.NavigationButton();
	this.prev.name = "prev";
	this.prev.setTransform(27.95,370,1,1,0,0,180);
	this.prev.alpha = 0.5;
	this.prev._off = true;
	new cjs.ButtonHelper(this.prev, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.prev).wait(1).to({_off:false},0).wait(7));

	// next
	this.next = new lib.NavigationButton();
	this.next.name = "next";
	this.next.setTransform(522.1,370);
	this.next.alpha = 0.5;
	new cjs.ButtonHelper(this.next, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.next).to({_off:true},7).wait(1));

	// texts
	this.text = new cjs.Text("0", "21px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(275,14.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1).to({text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({text:"5"},0).wait(1).to({text:"6"},0).wait(1).to({text:"7"},0).wait(1));

	// containers
	this.container = new lib.Container();
	this.container.name = "container";

	this.container1 = new lib.Container();
	this.container1.name = "container1";

	this.container2 = new lib.Container();
	this.container2.name = "container2";

	this.container3 = new lib.Container();
	this.container3.name = "container3";

	this.container4 = new lib.Container();
	this.container4.name = "container4";

	this.container5 = new lib.Container();
	this.container5.name = "container5";

	this.container6 = new lib.Container();
	this.container6.name = "container6";

	this.container7 = new lib.Container();
	this.container7.name = "container7";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.container}]}).to({state:[{t:this.container1}]},1).to({state:[{t:this.container2}]},1).to({state:[{t:this.container3}]},1).to({state:[{t:this.container4}]},1).to({state:[{t:this.container5}]},1).to({state:[{t:this.container6}]},1).to({state:[{t:this.container7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(293,212.8,239.10000000000002,177.09999999999997);
// library properties:
lib.properties = {
	id: 'F28B7B34D13AB644BD08FED29479558B',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
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
an.compositions['F28B7B34D13AB644BD08FED29479558B'] = {
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