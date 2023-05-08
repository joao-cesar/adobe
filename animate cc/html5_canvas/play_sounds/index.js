(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,362,214],[0,216,362,214]]}
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
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



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
	this.shape.graphics.f("#000000").s().p("AlfELIAAoVIK/AAIAAIVg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-26.7,70.30000000000001,53.5);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah1jsIDrDsIjrDtg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-23.6,23.6,47.3);


(lib.SoundButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-26.7,70.30000000000001,53.5);


// stage content:
(lib.htm5_canvas_play_sounds = function(mode,startPosition,loop,reversed) {
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
		function main()
		{
			if (!root.frame0Started)
			{
				root.stop();
				root.loop = false;
				root.currentAudio = undefined;
				root.yourButton0.on("click", playAudio, null, false, { libLinkage: "YourSound0", props: { volume: 0.1 } });
				root.yourButton1.on("click", playAudio, null, false, { libLinkage: "YourSound1", props: { volume: 0.2 } });
				root.yourButton2.on("click", playAudio, null, false, { libLinkage: "YourSound2", props: { volume: 0.1 } });
				root.yourButton3.on("click", playAudio, null, false, { libLinkage: "YourSound3", props: { volume: 0.3 } });
				root.yourButton4.on("click", playAudio, null, false, { libLinkage: "YourSound4", props: { volume: 0.1 } });
				root.yourButton5.on("click", playAudio, null, false, { libLinkage: "YourSound5", props: { volume: 0.4 } });
				root.on("click", navigate);
				root.frame0Started = true;
			}
		}
		
		function playAudio(e, data)
		{
			stopAudio();
			root.currentAudio = createjs.Sound.play(data.libLinkage, data.props);
		}
		
		function stopAudio()
		{
			if (root.currentAudio)
			{
				root.currentAudio.stop();
				root.currentAudio = null;
			}
		}
		
		function navigate(e)
		{
			if (e.target.name === "prevButton")
			{
				stopAudio()
				root.gotoAndStop(root.currentFrame - 1);
			}
			else if (e.target.name === "nextButton")
			{
				stopAudio()
				root.gotoAndStop(root.currentFrame + 1);
			}
		}
		
		window.root = this;
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// credits
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(279.95,11,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(89.15,11,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

	// prev
	this.prevButton = new lib.NavButton();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(22.8,233,1,1,0,0,180);
	this.prevButton._off = true;
	new cjs.ButtonHelper(this.prevButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.prevButton).wait(1).to({_off:false},0).wait(2));

	// next
	this.nextButton = new lib.NavButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(527.25,233);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.nextButton).to({_off:true},2).wait(1));

	// soundButtons
	this.text = new cjs.Text("SOUND 1", "8px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 46;
	this.text.parent = this;
	this.text.setTransform(369.15,379.05);

	this.text_1 = new cjs.Text("SOUND 0", "8px 'Helvetica'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 46;
	this.text_1.parent = this;
	this.text_1.setTransform(180.9,379.05);

	this.yourButton1 = new lib.SoundButton();
	this.yourButton1.name = "yourButton1";
	this.yourButton1.setTransform(369.15,342.35);
	new cjs.ButtonHelper(this.yourButton1, 0, 1, 2);

	this.yourButton0 = new lib.SoundButton();
	this.yourButton0.name = "yourButton0";
	this.yourButton0.setTransform(180.9,342.35);
	new cjs.ButtonHelper(this.yourButton0, 0, 1, 2);

	this.text_2 = new cjs.Text("SOUND 2", "8px 'Helvetica'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 46;
	this.text_2.parent = this;
	this.text_2.setTransform(118.15,379.05);

	this.yourButton4 = new lib.SoundButton();
	this.yourButton4.name = "yourButton4";
	this.yourButton4.setTransform(431.85,342.35);
	new cjs.ButtonHelper(this.yourButton4, 0, 1, 2);

	this.yourButton3 = new lib.SoundButton();
	this.yourButton3.name = "yourButton3";
	this.yourButton3.setTransform(275,342.35);
	new cjs.ButtonHelper(this.yourButton3, 0, 1, 2);

	this.yourButton2 = new lib.SoundButton();
	this.yourButton2.name = "yourButton2";
	this.yourButton2.setTransform(118.15,342.35);
	new cjs.ButtonHelper(this.yourButton2, 0, 1, 2);

	this.yourButton5 = new lib.SoundButton();
	this.yourButton5.name = "yourButton5";
	this.yourButton5.setTransform(275,342.35);
	new cjs.ButtonHelper(this.yourButton5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.yourButton0},{t:this.yourButton1},{t:this.text_1,p:{x:180.9,text:"SOUND 0"}},{t:this.text,p:{x:369.15,text:"SOUND 1"}}]}).to({state:[{t:this.yourButton2},{t:this.yourButton3},{t:this.yourButton4},{t:this.text_2},{t:this.text_1,p:{x:275,text:"SOUND 3"}},{t:this.text,p:{x:431.85,text:"SOUND 4"}}]},1).to({state:[{t:this.yourButton5},{t:this.text,p:{x:275,text:"SOUND 5"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(286,211,253.10000000000002,181.2);
// library properties:
lib.properties = {
	id: '503EDD65FF3148F2AAEC4C6508C05D81',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"sounds/YourSound4.mp3", id:"YourSound4"},
		{src:"sounds/YourSound3.mp3", id:"YourSound3"},
		{src:"sounds/YourSound5.mp3", id:"YourSound5"},
		{src:"sounds/YourSound1.mp3", id:"YourSound1"},
		{src:"sounds/YourSound2.mp3", id:"YourSound2"},
		{src:"sounds/YourSound0.mp3", id:"YourSound0"}
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
an.compositions['503EDD65FF3148F2AAEC4C6508C05D81'] = {
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