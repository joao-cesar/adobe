(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[618,266,119,39],[250,266,121,39],[0,266,123,39],[125,266,123,39],[373,266,121,39],[496,266,120,39],[0,0,1477,264]]}
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



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.SliderCircle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#16A6E2").s().p("AhUBWQgkgkAAgyQAAgxAkgjQAjgkAxAAQAyAAAkAkQAjAjAAAxQAAAygjAkQgkAjgyAAQgxAAgjgjg");
	this.shape.setTransform(-0.0039,-0.0068);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-12.1,24.2,24.2);


(lib.SliderBar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1eAAMAq9AAA");
	this.shape.setTransform(137.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#16A6E2").ss(1.3,1,1).p("A1eAAMAq9AAA");
	this.shape_1.setTransform(137.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// hit
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("A1eDwIAAnfMAq9AAAIAAHfg");
	this.shape_2.setTransform(137.5,0);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-24,277,48);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiCBBICCiBICDCBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-6.5,26.1,13);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// circles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUBWQgkgkAAgyQAAgxAkgjQAjgkAxAAQAyAAAkAkQAjAjAAAxQAAAygjAkQgkAjgyAAQgxAAgjgjg");
	this.shape.setTransform(0.0375,0.0125,0.75,0.75);

	this.instance = new lib.SliderCircle("synched",0);
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:0.75,scaleY:0.75}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-12.1,24.2,24.2);


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

	// button
	this.button = new lib.SliderButton();
	this.button.name = "button";

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// bar
	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	new cjs.ButtonHelper(this.bar, 0, 1, 2, false, new lib.SliderBar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slider, new cjs.Rectangle(-9,-9,285,18.1), null);


(lib.Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {labelA:0,labelB:59,labelC:119,labelD:179,labelE:239,labelF:299};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360));

	// arrow
	this.instance = new lib.Arrow("single",0);
	this.instance.setTransform(-375.45,114.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:-244.4},0).wait(60).to({x:-5.7},0).wait(60).to({x:140.1},0).wait(60).to({x:291.45},0).wait(60).to({x:361.6},0).wait(61));

	// stuff
	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(328.6,-99.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(255.85,-99.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(108.65,-99.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(-38.2,-99.8,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(-269.8,-99.8,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(-400.4,-99.8,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_1();
	this.instance_7.setTransform(-376.05,-31.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400.4,-99.8,788.5,220.5);


// stage content:
(lib.adobe_animate_html5_canvas_labels_slider = function(mode,startPosition,loop,reversed) {
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
		var targetAnim = root.anim;
		var labels, slider, slider1;
		
		root.main = function()
		{
			setup();
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			root.stop();
			labels = targetAnim.labels.map(function(label){ return label.label; });
			slider = new root.Slider(root.slider0.button, root.slider0.bar);
			slider1 = new root.Slider(root.slider1.button, root.slider1.bar);
			
			slider.callBacks.mouseDownHandler = function(e, target)
			{
				target.button.gotoAndStop(2);
				root.update(target, slider1);
			};
			
			slider1.callBacks.mouseDownHandler = function(e, target)
			{
				target.button.gotoAndStop(2);
				root.update(target, slider);
			};
			
			slider.callBacks.rollOverHandler = slider1.callBacks.rollOverHandler = function(e, target)
			{
				if (!target.pressed)
					target.button.gotoAndStop(1);
			};
			
			slider.callBacks.rollOutHandler = slider1.callBacks.rollOutHandler = function(e, target)
			{
				if (!target.pressed)
					target.button.gotoAndStop(0);
			};
			
			slider.callBacks.pressMoveHandler = function(e, target)
			{
				root.update(target, slider1);
			};
			
			slider1.callBacks.pressMoveHandler = function(e, target)
			{
				root.update(target, slider);
			};
			
			slider.callBacks.pressUpHandler = slider1.callBacks.pressUpHandler = function(e, target)
			{
				target.button.gotoAndStop(1);
			};
			
			root.update(slider, slider1);
		};
		
		root.update = function(current, other)
		{
			targetAnim.gotoAndStop(labels[Math.floor(current.ratio * labels.length)]);
			other.positionPointerFromRatio(current.ratio);
			root.ratioText0.text = "RATIO: " + slider.ratio.toFixed(2);
			root.ratioText1.text = "RATIO: " + slider1.ratio.toFixed(2);
		};
		
		if (!root.started)
		{
			root.main();
			root.started = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// sliders
	this.slider1 = new lib.Slider();
	this.slider1.name = "slider1";
	this.slider1.setTransform(548.15,401.6);

	this.slider0 = new lib.Slider();
	this.slider0.name = "slider0";
	this.slider0.setTransform(158.05,401.6);

	this.ratioText1 = new cjs.Text("RATIO: 0", "bold 14px 'Arial'", "#FFFFFF");
	this.ratioText1.name = "ratioText1";
	this.ratioText1.textAlign = "center";
	this.ratioText1.lineHeight = 18;
	this.ratioText1.lineWidth = 89;
	this.ratioText1.parent = this;
	this.ratioText1.setTransform(681.1,443.6);

	this.ratioText0 = new cjs.Text("RATIO: 0", "bold 14px 'Arial'", "#FFFFFF");
	this.ratioText0.name = "ratioText0";
	this.ratioText0.textAlign = "center";
	this.ratioText0.lineHeight = 18;
	this.ratioText0.lineWidth = 89;
	this.ratioText0.parent = this;
	this.ratioText0.setTransform(291,443.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ratioText0},{t:this.ratioText1},{t:this.slider0},{t:this.slider1}]}).wait(1));

	// anim
	this.anim = new lib.Anim();
	this.anim.name = "anim";
	this.anim.setTransform(485.75,178.95,1,1,0,0,0,-0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(565.7,348.9,308.5,112.30000000000001);
// library properties:
lib.properties = {
	id: '0C2CF376B879F44C9B2F95A802E7C271',
	width: 960,
	height: 540,
	fps: 60,
	color: "#1C2D39",
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;