(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,839,304]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_153 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yoyo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BE652A").ss(5,1,1).p("AknsHQgEBMAFBaQojH6NuFsQlZFYIKCgQgvgQgmgmQhAhAAAhbQAAhbBAhBQBBhABbAAQBbAABABAQBBBBAABbQAABbhBBAQhABBhbAAQgQAAgPgCQgOgCgOgEQgGgCgGgBAEPG3IAiBIIBPAKIg6A2IAPBOIhGgmIhFAmIAPhOIg6g2IBPgKg");
	this.shape.setTransform(-176.178,-4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// sun
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BE652A").ss(5,1,1).p("AB9i3IBYg9AgHjVIAKibAB9AHQAAA3gnAnQgmAng3AAQg2AAgognQgngnAAg3QAAg2AngnQAognA2AAQA3AAAmAnQAnAnAAA2gAB9CcIBYBIAgcDzIgPB+ADagXICqAAAiDinIg4guAjugIIiVAAAisCrIguA5");
	this.shape_1.setTransform(169.8,45.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// letters
	this.instance = new lib.CachedBmp_153();
	this.instance.setTransform(-192.95,-75.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.1,-84.7,455.7,169.4);


(lib.TapToStart = function(mode,startPosition,loop,reversed) {
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
	this.txt = new cjs.Text("TAP TO START", "normal 400 45px 'Passion One'", "#D3793E");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 48;
	this.txt.lineWidth = 301;
	this.txt.parent = this;
	this.txt.setTransform(0,-24);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-26,305.1,52.1);


(lib.TapToStartAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tap
	this.instance = new lib.TapToStart("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},59).to({alpha:1},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-26,305.1,52.1);


// stage content:
(lib.funny_day = function(mode,startPosition,loop,reversed) {
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
		window.root = this;
		
		root.main = () =>
		{
			document.querySelector(".progress").remove();
			anim_container.style.display = "initial";
			document.body.style.backgroundColor = lib.properties.color;
			animate.setup({ lib, root });
			root.stop();
			root.resizeHandler();
			window.addEventListener("resize", root.resizeHandler);
				
			document.addEventListener("visibilitychange", e =>
			{
			  if (document.visibilityState === "visible")
			  {
				  createjs.Sound.muted = false;
				  animate.root.framerate = animate.lib.properties.fps;
			  }
			  else
			  {
				  createjs.Sound.muted = true;
				  animate.root.framerate = 0;
			  }		
			});
		};
		
		root.resizeHandler = () =>
		{
			animate.Display.resizeHandler();
			
			animate.UI.autoScale(root.title);
			animate.UI.clamp(root.title, [ "scale" ], 0.5, 1);
			animate.UI.posX(root.title, 0.5);
			animate.UI.posY(root.title, 0.4);
			
			animate.UI.autoScale(root.tapToStart);
			animate.UI.clamp(root.tapToStart, [ "scale" ], 0.5, 1);
			animate.UI.posX(root.tapToStart, 0.5);
			animate.UI.posY(root.tapToStart, 0.66);
			
			/*regards.UI.pos(root.jc, 0.5, 0.5);
			regards.UI.autoScale(root.jc);
			regards.UI.clamp(root.jc, [ "scaleX", "scaleY" ], 1);*/
		};
		
		if (!root.started)
		{
			root.main();
			root.started = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// screens
	this.tapToStart = new lib.TapToStartAnim();
	this.tapToStart.name = "tapToStart";
	this.tapToStart.setTransform(270,634.65);

	this.title = new lib.Title("synched",0);
	this.title.name = "title";
	this.title.setTransform(270,381.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.tapToStart}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BE652A").ss(1,1,1).p("AFhAAQAACHhoBgQhnBhiSAAQiRAAhohhQhnhgAAiHQAAiGBnhgQBohhCRAAQCSAABnBhQBoBgAACGg");
	this.shape.setTransform(319.6,872);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bear
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BE652A").ss(1,1,1).p("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");
	this.shape_1.setTransform(442.85,899.9875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6E564").s().p("AgwAtQgVgSAAgbQAAgaAVgSQAUgTAcAAQAdAAAUATQAVASAAAaQAAAbgVASQgUATgdAAQgcAAgUgTg");
	this.shape_2.setTransform(447.45,764.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE652A").s().p("AABECIgBABQhZgShZgxQgDgPAAgQIAAgGQAAgUAEgSQADgNAEgLQAHgSALgSQAJgNANgNQAzgyBIAAIAIAAIAAABIAIgBQBJAAAzAyQAMANAKANQAMASAGASQAFALACANQAEASAAAUIAAAGQgBAQgDAPQhYAxhZASIgCgBgAgBAWQgVATAAAaQAAAbAVASQATAUAdgBQAdABAUgUQAVgSAAgbQAAgagVgTQgUgTgdAAQgdAAgTATgADwg1IgGgHIgHgMQgRggAAguQAAguARghQANgXAPgGQgSAYAAAiQAAAiATAZQAOARASAFQgCAIgEAIIAAAAQgGALgHABQgIgBgHgLQgEgLgDgMQAAgEgEgCQgDgDgFABQgDAAgDAEQgCADAAAFQADAPAHANQANAYATgBQASABANgYIAAAAQAFgLADgMQAJgCAHgDQgDAcgMAWIgGAMIgGAHQgdgCgcACgAkmg1IAAAAIgFgHIgHgMQgRggAAguQAAguARghQAMgXAQgGQgSAYAAAiQAAAiASAZQAOARARAFQgBAIgDAIIAAAAQgHALgIABQgHgBgGgLQgFgLgDgMQgBgEgDgCQgDgDgEABQgEAAgDAEQgCADABAFQADAPAGANQANAYASgBQAUABAMgYIABAAQAEgLADgMQAJgCAIgDQgEAcgLAWIgIAMIgFAHIgBAAQgbgCgdACg");
	this.shape_3.setTransform(442.75,757.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(310.9,776.9,256.4,337.9);
// library properties:
lib.properties = {
	id: '87EE7A3A52DF49E496BA3932FD23C6D5',
	width: 540,
	height: 960,
	fps: 60,
	color: "#F6E564",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_1.png?1652292113708", id:"index_atlas_1"}
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
an.compositions['87EE7A3A52DF49E496BA3932FD23C6D5'] = {
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