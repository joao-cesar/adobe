(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,577,401],[0,403,83,58],[85,403,83,58]]}
];


// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ButtonHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-19.85,-13.75,0.0688,0.0688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-13.7,39.7,27.6);


(lib.ArrowOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-20.8,-14.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-14.5,41.5,29);


(lib.Arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-20.8,-14.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-14.5,41.5,29);


(lib.PressToStartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("PRESS TO START", "bold 28px 'Arial'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 33;
	this.txt.lineWidth = 284;
	this.txt.parent = this;
	this.txt.setTransform(-0.05,-15.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1).to({color:"#FF3300"},0).wait(1).to({y:-14,font:"bold 25px 'Arial'",lineHeight:29.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance = new lib.ButtonHit("synched",0);
	this.instance.setTransform(0,-0.4,7.2702,1.258,0,0,0,0,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.3,-17.6,288.5,35.3);


(lib.NavigationButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.Arrow("single",0);

	this.instance_1 = new lib.ArrowOver("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.9,scaleY:0.9}}]},1).to({state:[]},1).wait(1));

	// hit
	this.instance_2 = new lib.ButtonHit("synched",0);
	this.instance_2.setTransform(0,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-14.5,41.5,29);


// stage content:
(lib.adobe_animate_cc_html5_canvas_narrated_story = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.playSound = function(linkage, type, stopPrevious, props)
		{	
			if (!props)
				props = {};
				
			if (stopPrevious && root[type])
				root[type].stop();
				
			root[type] = createjs.Sound.play(linkage, props);
		};
		
		root.on("click", function(e)
		{
			if (e.target.name === "prev")
				root.gotoAndStop(root.currentFrame - 1);
			else if (e.target.name === "next")
				root.gotoAndStop(root.currentFrame + 1);
			else if (e.target.name == "pressToStart")
				root.gotoAndStop(1);
		});
		
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) // chrome requires a initial user interaction to play audio
			root.stop();
		else
			root.gotoAndStop(1);
	}
	this.frame_1 = function() {
		this.playSound("Voice0", "voice", true);
		
		if (!this.frame1Started)
		{
			this.playSound("BGM", "bgm", false, { volume: 0.2, loop: -1 });
			this.frame1Started = true;
		}
	}
	this.frame_2 = function() {
		this.playSound("Voice1", "voice", true);
	}
	this.frame_3 = function() {
		this.playSound("Voice2", "voice", true);
	}
	this.frame_4 = function() {
		this.playSound("Voice3", "voice", true);
	}
	this.frame_5 = function() {
		this.playSound("Voice4", "voice", true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// pressToStart
	this.pressToStart = new lib.PressToStartButton();
	this.pressToStart.name = "pressToStart";
	this.pressToStart.setTransform(480,270);
	new cjs.ButtonHelper(this.pressToStart, 0, 1, 2, false, new lib.PressToStartButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pressToStart).to({_off:true},1).wait(5));

	// prevButton
	this.prev = new lib.NavigationButton();
	this.prev.name = "prev";
	this.prev.setTransform(49.35,511.2,1,1,0,0,180);
	this.prev._off = true;
	new cjs.ButtonHelper(this.prev, 0, 1, 2, false, new lib.NavigationButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.prev).wait(2).to({_off:false},0).wait(4));

	// nextButton
	this.next = new lib.NavigationButton();
	this.next.name = "next";
	this.next.setTransform(118.35,511.2);
	this.next._off = true;
	new cjs.ButtonHelper(this.next, 0, 1, 2, false, new lib.NavigationButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next).wait(1).to({_off:false},0).to({_off:true},4).wait(1));

	// pageNumber
	this.text = new cjs.Text("1", "bold 24px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 29;
	this.text.lineWidth = 17;
	this.text.parent = this;
	this.text.setTransform(946.5,499.65);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1).to({text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({text:"5"},0).wait(1));

	// texts
	this.text_1 = new cjs.Text("LOREM IPSUM", "bold 36px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 350;
	this.text_1.parent = this;
	this.text_1.setTransform(480,249.9);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({_off:false},0).wait(1).to({y:207.65,text:"Dolor sit amet, consectetur adipiscing elit"},0).wait(1).to({y:228.75,text:"Integer et auctor nisi."},0).wait(1).to({y:207.65,text:"In eleifend viverra risus, a dictum turpis egestas eu."},0).wait(1).to({y:228.75,text:"Suspendisse ut suscipit mauris."},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(508.7,475.7,439.8,52.80000000000001);
// library properties:
lib.properties = {
	id: 'D1EAA242C3AF2F488720C543A0CB44E5',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"sounds/Voice1.mp3", id:"Voice1"},
		{src:"sounds/Voice3.mp3", id:"Voice3"},
		{src:"sounds/Voice2.mp3", id:"Voice2"},
		{src:"sounds/Voice0.mp3", id:"Voice0"},
		{src:"sounds/BGM.mp3", id:"BGM"},
		{src:"sounds/Voice4.mp3", id:"Voice4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['D1EAA242C3AF2F488720C543A0CB44E5'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;