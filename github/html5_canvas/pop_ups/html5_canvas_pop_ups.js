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



(lib.X = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AB8B8Ih8h8IB9h7Ah7B8IB7h8Ih8h7");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-14.4,28.9,28.8);


(lib.PopUpRec = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#B1B1B1").ss(1,1,1).p("EgkBgUQMBIDAAAMAAAAohMhIDAAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgkBAURMAAAgohMBIDAAAMAAAAohg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.5,-130.6,463.1,261.29999999999995);


(lib.Hit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


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
	this.shape.graphics.f().s("#8DDCF6").ss(5,1,1).p("AFZAAQAACPhlBlQhlBliPAAQiOAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCOAAQCPAABlBlQBlBlAACOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5DB8D7").s().p("AjzD0QhkhlgBiPQABiOBkhlQBlhkCOgBQCPABBlBkQBkBlABCOQgBCPhkBlQhlBkiPABQiOgBhlhkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,73.9,73.9);


(lib.PersonButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// circles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DB8D7").s().p("AjzD0QhkhlgBiPQABiOBkhlQBlhkCOgBQCPABBlBkQBkBlABCOQgBCPhkBlQhlBkiPABQiOgBhlhkg");

	this.instance = new lib.Circle("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.9,scaleY:0.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,73.9,73.9);


(lib.CloseButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// x
	this.instance = new lib.X("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjBDCQhRhQAAhyQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D10B0B").s().p("AjBDCQhRhQAAhyQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D10B0B").s().p("AiuCvQhJhIAAhnQAAhmBJhIQBIhJBmAAQBnAABIBJQBJBIAABmQAABnhJBIQhIBJhnAAQhmAAhIhJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.PopUps = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {person0:1,person1:2,person2:3,person3:4,person4:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// close
	this.closeButton = new lib.CloseButton();
	this.closeButton.name = "closeButton";
	this.closeButton.setTransform(612.4,133.05);
	this.closeButton._off = true;
	new cjs.ButtonHelper(this.closeButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1).to({_off:false},0).wait(1).to({x:887.05,y:91.45},0).wait(1).to({x:812.65,y:128.15},0).wait(1).to({x:614.55,y:84.05},0).wait(1).to({x:710.35,y:115.65},0).wait(1));

	// textFields
	this.text = new cjs.Text("Pop-Up 0", "43px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 219;
	this.text.parent = this;
	this.text.setTransform(381.85,238.1);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1).to({x:656.5,y:196.5,text:"Pop-Up 1"},0).wait(1).to({x:582.1,y:233.2,text:"Pop-Up 2"},0).wait(1).to({x:384,y:189.1,text:"Pop-Up 3"},0).wait(1).to({x:479.8,y:220.7,text:"Pop-Up 4"},0).wait(1));

	// recs
	this.instance = new lib.PopUpRec("single",0);
	this.instance.setTransform(381.85,262.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:656.5,y:221.1},0).wait(1).to({x:582.1,y:257.8},0).wait(1).to({x:384,y:213.7},0).wait(1).to({x:479.8,y:245.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,914.6,393.4);


// stage content:
(lib.html5_canvas_pop_ups = function(mode,startPosition,loop,reversed) {
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
		
		root.callPopUp = function(e)
		{
			root.popUps.gotoAndStop(e.target.name);
		};
		
		root.dismissPopUp = function(e)
		{
			if (e.target.name === "closeButton" || e.target.name === "hit")
				root.popUps.gotoAndStop(0);
		};
		
		root.person0.on("click", root.callPopUp);
		root.person1.on("click", root.callPopUp);
		root.person2.on("click", root.callPopUp);
		root.person3.on("click", root.callPopUp);
		root.person4.on("click", root.callPopUp);
		root.popUps.on("click", root.dismissPopUp);
		root.hit.on("click", root.dismissPopUp);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// popUps
	this.popUps = new lib.PopUps();
	this.popUps.name = "popUps";

	this.timeline.addTween(cjs.Tween.get(this.popUps).wait(1));

	// spots
	this.person4 = new lib.PersonButton();
	this.person4.name = "person4";
	this.person4.setTransform(244.8,378.55);
	new cjs.ButtonHelper(this.person4, 0, 1, 2);

	this.person3 = new lib.PersonButton();
	this.person3.name = "person3";
	this.person3.setTransform(612.3,346.1);
	new cjs.ButtonHelper(this.person3, 0, 1, 2);

	this.person2 = new lib.PersonButton();
	this.person2.name = "person2";
	this.person2.setTransform(883.1,129.8);
	new cjs.ButtonHelper(this.person2, 0, 1, 2);

	this.person1 = new lib.PersonButton();
	this.person1.name = "person1";
	this.person1.setTransform(425.55,91.6);
	new cjs.ButtonHelper(this.person1, 0, 1, 2);

	this.person0 = new lib.PersonButton();
	this.person0.name = "person0";
	this.person0.setTransform(144.1,129.8);
	new cjs.ButtonHelper(this.person0, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.person0},{t:this.person1},{t:this.person2},{t:this.person3},{t:this.person4}]}).wait(1));

	// hit
	this.hit = new lib.Hit();
	this.hit.name = "hit";
	this.hit.setTransform(480,270);
	new cjs.ButtonHelper(this.hit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,480,270);
// library properties:
lib.properties = {
	id: '79E68CD183E240F486EECDDC962A7CD4',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FBFBFB",
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
an.compositions['79E68CD183E240F486EECDDC962A7CD4'] = {
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