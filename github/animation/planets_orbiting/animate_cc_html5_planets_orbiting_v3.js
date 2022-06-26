(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animate_cc_html5_planets_orbiting_v3_atlas_1", frames: [[0,0,124,61]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animate_cc_html5_planets_orbiting_v3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



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
	this.shape.graphics.rf(["#F3C719","#BE9A0C"],[0,1],0,0,0,0,0,53.1).s().p("Al1F1QiZibAAjaQAAjaCZibQCbiZDaAAQDaAACbCZQCaCbAADaQAADaiaCbQibCajaAAQjaAAibiag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,-52.7,105.5,105.5);


(lib.PlanetShape1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#21A1EF").s().p("AjoDpQhhhgAAiJQAAiIBhhgQBghhCIAAQCJAABgBhQBhBgAACIQAACJhhBgQhgBhiJAAQiIAAhghhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Map = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-62.1,-30.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-30.4,124,61);


(lib.Maps = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Map("synched",0);
	this.instance.setTransform(95.15,0);

	this.instance_1 = new lib.Map("synched",0);
	this.instance_1.setTransform(-32,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.1,-30.4,251.2,61);


(lib.Planet1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// volume
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.137)","rgba(0,0,0,0.22)"],[0,1],0,0,0,0,0,33.4).s().p("AjoDpQhhhgAAiJQAAiIBhhgQBghhCIAAQCJAABgBhQBhBgAACIQAACJhhBgQhgBhiJAAQiIAAhghhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjoDpQhhhgAAiJQAAiIBhhgQBghhCIAAQCJAABgBhQBhBgAACIQAACJhhBgQhgBhiJAAQiIAAhghhg");

	// map
	this.instance = new lib.Maps("single",0);
	this.instance.setTransform(-95.15,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32},29).wait(1));

	// circle
	this.instance_1 = new lib.PlanetShape1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Planets = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// planet2
	this.instance = new lib.Planet1("synched",0);
	this.instance.setTransform(-99.3,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(268).to({startPosition:28},0).to({_off:true},1).wait(1));

	// planet4
	this.instance_1 = new lib.Planet1("synched",0);
	this.instance_1.setTransform(0,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(268).to({startPosition:28},0).to({_off:true},1).wait(1));

	// planet6
	this.instance_2 = new lib.Planet1("synched",0);
	this.instance_2.setTransform(99.3,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(268).to({startPosition:28},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.3,-33,264.6,66);


// stage content:
(lib.animate_cc_html5_planets_orbiting_v3 = function(mode,startPosition,loop,reversed) {
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
		document.body.style.backgroundColor = lib.properties.color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(270));

	// planets
	this.instance = new lib.Planets("synched",0);
	this.instance.setTransform(400,400,1,1,0,0,0,-218.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},269).wait(1));

	// orbits
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").ss(2,1,1).p("AyjABQAAnrFclcQFclcHrAAQHrAAFcFcQFcFcAAHrQAAHslcFcQlcFcnrAAQnrAAlclcQlclcAAnsgEgiEAABQAAuGJ/p/QJ/p/OGAAQOHAAJ/J/QJ/J/AAOGQAAOHp/J+Qp/J/uHAAQuGAAp/p/Qp/p+AAuHgEgxlAAAQAA0hOiuiQOiuiUhAAQUiAAOiOiQOhOiAAUhQAAUiuhOiQuiOi0iAAQ0hAAuiuiQuiuiAA0ig");
	this.shape.setTransform(400.05,399.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// star
	this.instance_1 = new lib.Star("synched",0);
	this.instance_1.setTransform(400,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(449.6,449.6,300.79999999999995,300.79999999999995);
// library properties:
lib.properties = {
	id: '3D26AEB580EFC24F9B3A9FD36B457CCD',
	width: 800,
	height: 800,
	fps: 30,
	color: "#131313",
	opacity: 1.00,
	manifest: [
		{src:"images/animate_cc_html5_planets_orbiting_v3_atlas_1.png", id:"animate_cc_html5_planets_orbiting_v3_atlas_1"}
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
an.compositions['3D26AEB580EFC24F9B3A9FD36B457CCD'] = {
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