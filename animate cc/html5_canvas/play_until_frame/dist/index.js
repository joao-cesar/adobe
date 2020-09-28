(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.Rec1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFCC00").s().p("AhKBLIAAiVICVAAIAACVg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.4,14.9,14.9);


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
	this.shape.graphics.f("#FFCC00").s().p("AlxBzIAAjlILjAAIAADlg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-11.5,73.9,23);


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

	// recs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AlxBzIAAjlILjAAIAADlg");
	this.shape.setTransform(0.025,0);

	this.instance = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.9,scaleY:0.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-11.5,73.9,23);


(lib.ButtonsLabels = function(mode,startPosition,loop,reversed) {
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
	this.fourth = new lib.Button();
	this.fourth.name = "fourth";
	this.fourth.setTransform(418.85,11.5);
	new cjs.ButtonHelper(this.fourth, 0, 1, 2);

	this.third = new lib.Button();
	this.third.name = "third";
	this.third.setTransform(291.55,11.5);
	new cjs.ButtonHelper(this.third, 0, 1, 2);

	this.second = new lib.Button();
	this.second.name = "second";
	this.second.setTransform(164.25,11.5);
	new cjs.ButtonHelper(this.second, 0, 1, 2);

	this.first = new lib.Button();
	this.first.name = "first";
	this.first.setTransform(36.95,11.5);
	new cjs.ButtonHelper(this.first, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.first},{t:this.second},{t:this.third},{t:this.fourth}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonsLabels, new cjs.Rectangle(0,0,455.9,23), null);


(lib.Buttons = function(mode,startPosition,loop,reversed) {
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
	this.button71 = new lib.Button();
	this.button71.name = "button71";
	this.button71.setTransform(418.85,11.5);
	new cjs.ButtonHelper(this.button71, 0, 1, 2);

	this.button47 = new lib.Button();
	this.button47.name = "button47";
	this.button47.setTransform(291.55,11.5);
	new cjs.ButtonHelper(this.button47, 0, 1, 2);

	this.button23 = new lib.Button();
	this.button23.name = "button23";
	this.button23.setTransform(164.25,11.5);
	new cjs.ButtonHelper(this.button23, 0, 1, 2);

	this.button0 = new lib.Button();
	this.button0.name = "button0";
	this.button0.setTransform(36.95,11.5);
	new cjs.ButtonHelper(this.button0, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button0},{t:this.button23},{t:this.button47},{t:this.button71}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Buttons, new cjs.Rectangle(0,0,455.9,23), null);


// stage content:
(lib.adobe_animate_html5_canvas_play_until_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {first:0,second:23,third:47,fourth:71};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		if (!this.frame0Started)
		{
			// This will add a goUntil method to any Movie Clip instance
			createjs.MovieClip.prototype.goUntil = function(positionOrLabel)
			{
				var duration;
				var to = this.timeline.resolve(positionOrLabel);
				
				this.tweenFrame = this.timeline.position;
				
				if (this.tweenFrame == null)
					return;
		
				duration = Math.abs(((to - this.tweenFrame) / lib.properties.fps) * 1000);
				
				createjs.Tween.get(this, { override: true }).to({ tweenFrame: to }, duration).addEventListener("change", function(e)
				{
					var target = e.currentTarget.target;
					
					target.gotoAndStop(Math.round(target.tweenFrame));
					
					if (target.tweenFrame === to)
						e.currentTarget.removeAllEventListeners("change");			
				});
			};
		
			createjs.Touch.enable(stage);
			root.stop();
		
			root.buttons.on("click", function(e)
			{
				root.goUntil(parseInt(e.target.name.replace("button", "")));
			});
		
			root.buttonsLabels.on("click", function(e)
			{
				root.goUntil(e.target.name);
			});
			
			this.frame0Started = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// progress
	this.instance = new lib.Rec1("single",0);
	this.instance.setTransform(84.05,174.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:211.35},23,cjs.Ease.none).to({x:338.65},24,cjs.Ease.none).to({x:465.95},24,cjs.Ease.none).wait(1));

	// buttons
	this.text = new cjs.Text("fourth", "14px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.parent = this;
	this.text.setTransform(465.95,293.55);

	this.text_1 = new cjs.Text("third", "14px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.parent = this;
	this.text_1.setTransform(338.65,293.55);

	this.text_2 = new cjs.Text("second", "14px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.parent = this;
	this.text_2.setTransform(211.35,293.55);

	this.text_3 = new cjs.Text("first", "14px 'Arial'", "#333333");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.parent = this;
	this.text_3.setTransform(84.05,293.55);

	this.buttonsLabels = new lib.ButtonsLabels();
	this.buttonsLabels.name = "buttonsLabels";
	this.buttonsLabels.setTransform(47.1,260.4);

	this.buttons = new lib.Buttons();
	this.buttons.name = "buttons";
	this.buttons.setTransform(47.1,201.5);

	this.text_4 = new cjs.Text("71", "14px 'Arial'", "#333333");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.parent = this;
	this.text_4.setTransform(465.95,230.2);

	this.text_5 = new cjs.Text("47", "14px 'Arial'", "#333333");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.parent = this;
	this.text_5.setTransform(338.65,230.2);

	this.text_6 = new cjs.Text("23", "14px 'Arial'", "#333333");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.parent = this;
	this.text_6.setTransform(211.35,230.2);

	this.text_7 = new cjs.Text("0", "14px 'Arial'", "#333333");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 13;
	this.text_7.parent = this;
	this.text_7.setTransform(84.05,230.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.buttons},{t:this.buttonsLabels},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(72));

	// texts
	this.text_8 = new cjs.Text("0", "14px 'Arial'", "#333333");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 100;
	this.text_8.parent = this;
	this.text_8.setTransform(275,115.2);

	this.timeline.addTween(cjs.Tween.get(this.text_8).wait(23).to({text:"23"},0).wait(24).to({text:"47"},0).wait(24).to({text:"71"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(322.1,313.2,180.89999999999998,-2);
// library properties:
lib.properties = {
	id: '7EF86A8E9F1DA64F8F51B24570FA80E4',
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
an.compositions['7EF86A8E9F1DA64F8F51B24570FA80E4'] = {
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