(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"keep_button_state_atlas_1", frames: [[0,230,156,28],[0,0,158,228]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["keep_button_state_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["keep_button_state_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Weight = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-39,49.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-39.5,-64,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-64,79,127.4);


(lib.Rec2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AnrkAIPWAAIAAIBIvWAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnqEBIAAoBIPVAAIAAIBg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-27.1,101.30000000000001,54.3);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AnrkAIPWAAIAAIBIvWAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0B12F").s().p("AnqEBIAAoBIPVAAIAAIBg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-27.1,101.30000000000001,54.3);


(lib.Bar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AvWAuIAAhbIetAAIAABbg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-4.6,196.5,9.3);


(lib.Button3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {up:0,down:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("btn3", "22px 'Helvetica'");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 30;
	this.tf.parent = this;
	this.tf.setTransform(0,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(2));

	// rec
	this.instance = new lib.Rec("single",0);

	this.instance_1 = new lib.Rec2("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-27.1,101.30000000000001,54.3);


(lib.Button2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"up":0,"down":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("btn2", "22px 'Helvetica'");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 30;
	this.tf.parent = this;
	this.tf.setTransform(0,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(2));

	// rec
	this.instance = new lib.Rec("single",0);

	this.instance_1 = new lib.Rec2("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-27.1,101.30000000000001,54.3);


(lib.Button1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"up":0,"down":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("btn1", "22px 'Helvetica'");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 30;
	this.tf.parent = this;
	this.tf.setTransform(0,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(2));

	// rec
	this.instance = new lib.Rec("single",0);

	this.instance_1 = new lib.Rec2("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-27.1,101.30000000000001,54.3);


(lib.Balance = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {left:0,middle:29,right:59};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// horizontalBar
	this.instance = new lib.Bar("single",0);
	this.instance.setTransform(-2.8,-80.25,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:-2.15,y:-82.9},29,cjs.Ease.none).to({rotation:15,x:-1.35,y:-81.35},30,cjs.Ease.none).wait(1));

	// leftWeight
	this.instance_1 = new lib.Weight("synched",0);
	this.instance_1.setTransform(-92.65,-56.8,1,1,0,0,0,-0.1,-63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,regY:-63.5,x:-94.95,y:-83.4},29,cjs.Ease.none).to({regY:-63.6,x:-90.8,y:-105.9},30,cjs.Ease.none).wait(1));

	// rightWeight
	this.instance_2 = new lib.Weight("synched",0);
	this.instance_2.setTransform(90.8,-105.9,1,1,0,0,0,0,-63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-63.5,x:94.95,y:-83.4},29,cjs.Ease.none).to({regX:0.1,regY:-63.6,x:92.65,y:-56.8},30,cjs.Ease.none).wait(1));

	// verticalBar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhrRXMAAAgitIDXAAMAAAAitg");
	this.shape.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.4,-111.2,268.9,222.3);


// stage content:
(lib.keep_button_state = function(mode,startPosition,loop,reversed) {
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
		var currentButton;
		
		function main()
		{
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			stage.enableMouseOver();
			
			setup();
		
			root.balance.gotoAndStop("middle");
		
			root.btn1.stop();
			root.btn1.mouseChildren = false;
			root.btn1.cursor = "pointer";
			root.btn1.on("click", animateBalance, null, false, { label: "left" });
		
			root.btn2.stop();
			root.btn2.mouseChildren = false;
			root.btn2.cursor = "pointer";
			root.btn2.on("click", animateBalance, null, false, { label: "middle" });
		
			root.btn3.stop();
			root.btn3.mouseChildren = false;
			root.btn3.cursor = "pointer";
			root.btn3.on("click", animateBalance, null, false, { label: "right" });
		
			currentButton = root.btn2;
			root.btn2.gotoAndStop("down");
		}
		
		function setup()
		{
			// makes any MovieClip instance capable of playing from the current frame to another one in any direction
			createjs.MovieClip.prototype.playUntil = function(positionOrLabel, ease)
			{
				var duration;
				var to = this.timeline.resolve(positionOrLabel);
				
				this.tweenFrame = this.timeline.position;
				
				if (this.tweenFrame == null)
					return;
		
				duration = Math.abs(((to - this.tweenFrame) / lib.properties.fps) * 1000);
				
				createjs.Tween.get(this, { override: true }).to({ tweenFrame: to }, duration, ease).addEventListener("change", function(e)
				{
					var target = e.currentTarget.target;
					
					target.gotoAndStop(Math.round(target.tweenFrame));
					
					if (target.tweenFrame === to)
						e.currentTarget.removeAllEventListeners("change");			
				});
			};
		}
		
		function animateBalance(e, data)
		{
			if (currentButton)
				currentButton.gotoAndStop("up");
		
			currentButton = e.currentTarget;
			currentButton.gotoAndStop("down");
			root.balance.playUntil(data.label, createjs.Ease.cubicInOut);
		}
		
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// balance
	this.balance = new lib.Balance();
	this.balance.name = "balance";
	this.balance.setTransform(480.85,194);

	this.timeline.addTween(cjs.Tween.get(this.balance).wait(1));

	// buttons
	this.btn3 = new lib.Button3();
	this.btn3.name = "btn3";
	this.btn3.setTransform(631.6,388.4);

	this.btn2 = new lib.Button2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(480,388.4);

	this.btn1 = new lib.Button1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(328.4,388.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(757.8,352.9,-75.5,62.700000000000045);
// library properties:
lib.properties = {
	id: 'C5EB233C73C64881871471268F4ED710',
	width: 960,
	height: 540,
	fps: 60,
	color: "#EEB441",
	opacity: 1.00,
	manifest: [
		{src:"images/keep_button_state_atlas_1.png", id:"keep_button_state_atlas_1"}
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
an.compositions['C5EB233C73C64881871471268F4ED710'] = {
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