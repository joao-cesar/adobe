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
	this.shape.graphics.f("#000000").s().p("AixljIFjFjIljFkg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-35.6,35.7,71.30000000000001);


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
	this.shape.graphics.f("#000000").s().p("Ar6DOIAAmbIX1AAIAAGbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-20.6,152.6,41.2);


(lib.Line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(8,2,1).p("ArUAAIWpAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-4,152.9,8);


(lib.NavButton = function(mode,startPosition,loop,reversed) {
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
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-35.6,35.7,71.30000000000001);


(lib.HomeButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("HOME", "21px 'Helvetica'", "#999999");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 26;
	this.tf.lineWidth = 121;
	this.tf.parent = this;
	this.tf.setTransform(0,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({color:"#FFFFFF"},0).wait(1).to({y:-10.05,font:"18px 'Helvetica'",lineHeight:22.75},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-20.6,152.6,41.2);


(lib.ContactButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("CONTACT", "21px 'Helvetica'", "#999999");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 26;
	this.tf.lineWidth = 121;
	this.tf.parent = this;
	this.tf.setTransform(0,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({color:"#FFFFFF"},0).wait(1).to({y:-10.05,font:"18px 'Helvetica'",lineHeight:22.75},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-20.6,152.6,41.2);


(lib.BioButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("BIO", "21px 'Helvetica'", "#999999");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 26;
	this.tf.lineWidth = 121;
	this.tf.parent = this;
	this.tf.setTransform(0,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({color:"#FFFFFF"},0).wait(1).to({y:-10.05,font:"18px 'Helvetica'",lineHeight:22.75},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-20.6,152.6,41.2);


// stage content:
(lib.html5_canvas_labels_navigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {home:0,bio:1,contact:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var labels = root.labels;
		
		function main()
		{
			root.stop();
			root.labelIndex = 0;
			root.home_btn.on("click", navigate);
			root.bio_btn.on("click", navigate);
			root.contact_btn.on("click", navigate);
			root.previous_btn.on("click", navigate, null, false, { offset: -1 });
			root.next_btn.on("click", navigate, null, false, { offset: 1 });
		}
		
		function navigate(e, data)
		{
			if (data)
			{
				root.labelIndex = clamp(0, root.labelIndex + data.offset, labels.length - 1);
				root.gotoAndStop(labels[root.labelIndex].position);
			}
			else
			{
				var label = e.currentTarget.name.split("_")[0];
				root.labelIndex = labels.indexOf(labels.find(function(obj){ return obj.label === label; }));
				root.gotoAndStop(label);
			}
		}
		
		function clamp(min, value, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		}
		
		if (!this.started)
		{
			main();
			this.started = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// nav
	this.previous_btn = new lib.NavButton();
	this.previous_btn.name = "previous_btn";
	this.previous_btn.setTransform(64.6,421.55,1,1,0,0,180);
	new cjs.ButtonHelper(this.previous_btn, 0, 1, 2);

	this.next_btn = new lib.NavButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(895.4,421.55);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2);

	this.home_btn = new lib.HomeButton();
	this.home_btn.name = "home_btn";
	this.home_btn.setTransform(217.6,60.05);
	new cjs.ButtonHelper(this.home_btn, 0, 1, 2, false, new lib.HomeButton(), 3);

	this.bio_btn = new lib.BioButton();
	this.bio_btn.name = "bio_btn";
	this.bio_btn.setTransform(480,60.05);
	new cjs.ButtonHelper(this.bio_btn, 0, 1, 2, false, new lib.BioButton(), 3);

	this.contact_btn = new lib.ContactButton();
	this.contact_btn.name = "contact_btn";
	this.contact_btn.setTransform(742.4,60.05);
	new cjs.ButtonHelper(this.contact_btn, 0, 1, 2, false, new lib.ContactButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.contact_btn},{t:this.bio_btn},{t:this.home_btn},{t:this.next_btn},{t:this.previous_btn}]}).wait(3));

	// screens
	this.instance = new lib.Line("single",0);
	this.instance.setTransform(217.65,98.2);

	this.text = new cjs.Text("HOME", "60px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 382;
	this.text.parent = this;
	this.text.setTransform(480,236.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"HOME"}},{t:this.instance,p:{x:217.65}}]}).to({state:[{t:this.text,p:{text:"BIO"}},{t:this.instance,p:{x:480}}]},1).to({state:[{t:this.text,p:{text:"CONTACT"}},{t:this.instance,p:{x:742.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(526.8,309.5,386.5,147.7);
// library properties:
lib.properties = {
	id: '8F7718DD0D7A4741B4243F360061C8D1',
	width: 960,
	height: 540,
	fps: 60,
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
an.compositions['8F7718DD0D7A4741B4243F360061C8D1'] = {
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