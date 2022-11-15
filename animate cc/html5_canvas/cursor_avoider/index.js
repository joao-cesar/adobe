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



(lib.RightWing = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AErC/IgtgTIgigPQhNgegigIQg6gPhVgBQAJAPg8hDQgigogqgVQgfgRgugLQAMg1gkgsQgagig/gnQB1gHBoASQBbAOB+ArQAPBGBTBdQAlApAgAXQAtAhAkgHQAIgCAJgGQgYAyAVA4QgPgFgjgPg");
	this.shape.setTransform(0,-0.013);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-21.1,70.30000000000001,42.2);


(lib.ParticlesContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.LeftWing = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F1F1F").s().p("AleBnQAIAHAJACQAqAIA4gwQAYgUAbgeQBThdAQhGQB9grBbgOQBogSB0AHIgFAEIgCABQgkAXgWAUQgOANgIAMQgOAQgGARQgHARAAASIAAAOIACAOIAAABQgWAFgSAHQgTAHgPAIIgCABQgUALgUAPQgTAPgSAUQglAqgKAKIgDAAIgDAAIgFAAQgyABgpAGQgYAEgVAFIgfAJIgOAFQgbAJgmAPIgRAIQhYAmgZAIIgCACQAVg5gVg0g");
	this.shape.setTransform(0,-0.013);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-21.2,70.2,42.4);


(lib.BatAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F1F1F").s().p("AAOCbQgCgBAAgEIAAgDIgDgNIgDgGQgDgEgDAAIgBAAQggAEgSAAIgDAAIAAjXIADAAIAEAAQATACAKAHIALgiQASgjAlgHQAYgFg6B+IAJAWQAGALAHAGQAVA0gVA5QgDAEgEAOQgFATgGADIgCAAIgCAAg");
	this.shape.setTransform(5.8012,15.9655);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWCbQgHgCgFgUQgFgTgEgBQgVg5AXgyQAIgGAGgLQAHgMACgLQgOgfgLgfQgYg+AQADQAlAHARAjQAJATACAPIAKgDQAMgEAMgDIAKABIgEAAIAADYIgGAAIgwgEQgIgDgFALIgDAQQAAAIgEAAIgCgBg");
	this.shape_1.setTransform(-5.1491,16.0014);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(28));

	// leftWing
	this.instance = new lib.LeftWing("single",0);
	this.instance.setTransform(9.45,27.5,1,1,0,0,0,-35.1,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.9983,x:9.5,y:27.55},13,cjs.Ease.sineInOut).to({rotation:0,x:9.45,y:27.5},14,cjs.Ease.sineInOut).wait(1));

	// rightWing
	this.instance_1 = new lib.RightWing("single",0);
	this.instance_1.setTransform(-9.45,27.3,1,1,0,0,0,35,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:34.9,rotation:14.9983,x:-9.55,y:27.4},13,cjs.Ease.sineInOut).to({regX:35,rotation:0,x:-9.45,y:27.3},14,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-31.5,159.3,63.1);


(lib.Bat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// anim
	this.instance = new lib.BatAnim("synched",0);
	this.instance.setTransform(0,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-8.3664,startPosition:1},0).wait(1).to({y:-8.4795,startPosition:2},0).wait(1).to({y:-8.6426,startPosition:3},0).wait(1).to({y:-8.8588,startPosition:4},0).wait(1).to({y:-9.131,startPosition:5},0).wait(1).to({y:-9.4618,startPosition:6},0).wait(1).to({y:-9.8526,startPosition:7},0).wait(1).to({y:-10.3036,startPosition:8},0).wait(1).to({y:-10.813,startPosition:9},0).wait(1).to({y:-11.3764,startPosition:10},0).wait(1).to({y:-11.9863,startPosition:11},0).wait(1).to({y:-12.632,startPosition:12},0).wait(1).to({y:-13.3,startPosition:13},0).wait(1).to({y:-12.6983,startPosition:14},0).wait(1).to({y:-12.1049,startPosition:15},0).wait(1).to({y:-11.5335,startPosition:16},0).wait(1).to({y:-10.9957,startPosition:17},0).wait(1).to({y:-10.5002,startPosition:18},0).wait(1).to({y:-10.0533,startPosition:19},0).wait(1).to({y:-9.6582,startPosition:20},0).wait(1).to({y:-9.3162,startPosition:21},0).wait(1).to({y:-9.027,startPosition:22},0).wait(1).to({y:-8.7891,startPosition:23},0).wait(1).to({y:-8.6001,startPosition:24},0).wait(1).to({y:-8.4574,startPosition:25},0).wait(1).to({y:-8.3584,startPosition:26},0).wait(1).to({y:-8.3,startPosition:27},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-44.8,159.3,68.1);


// stage content:
(lib.html5_canvas_cursor_avoider = function(mode,startPosition,loop,reversed) {
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
		var MAX_PARTICLES = 15;
		var magnet = 500;
		var target;
		var forceX = 0;
		var forceY = 0;
		var forceDivider = 4;
		var particlesContainer = root.particlesContainer;
		
		function main()
		{
			root.stop();
			spawnMultiple(MAX_PARTICLES, lib.Bat);
			setParticles();
			createjs.Ticker.timingMode = createjs.Ticker.RAF;
			createjs.Ticker.on("tick", enterFrameHandler);
		}
		
		function spawnMultiple(total, ParticleLinkage)
		{
			var i;
			
			for (i = total - 1; i > -1; i--)
				spawnParticle(particlesContainer, ParticleLinkage);
		}
		
		function spawnParticle(container, ParticleLinkage)
		{
			var particle = new ParticleLinkage();
			var width = particle.nominalBounds.width;
			var height = particle.nominalBounds.height;
			
			particle.x = randomRange(width * 0.5, lib.properties.width - width * 0.5);
			particle.y = randomRange(height * 0.5, lib.properties.height * 0.5 - height * 0.5);
			particle.scale = randomRange(0.25, 1);
			particle.rotation = randomRange(-45, 45);
			container.addChild(particle);
		}
		
		function setParticles()
		{
			var i;
			
			for (i = particlesContainer.numChildren - 1; i > -1; i--)
			{
				var child = particlesContainer.children[i];
				
				child.initialX = child.x;
				child.initialY = child.y;
				child.gotoAndPlay(Math.floor(randomRange(1, child.totalFrames - 1)));
			}
		}
		
		function enterFrameHandler()
		{	
			var i;
			
			for (i = particlesContainer.numChildren - 1; i > -1; i--)
			{
				var target = particlesContainer.children[i];
				var distanceX = stage.mouseX / stage.scaleX - target.x;
				var distanceY = stage.mouseY / stage.scaleY - target.y;
				var distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
				var powerX = target.x - (distanceX / distance) * magnet / distance;
				var powerY = target.y - (distanceY / distance) * magnet / distance;
				
				forceX = (forceX + (target.initialX - target.x) * 0.5) / forceDivider;
				forceY = (forceY + (target.initialY - target.y) * 0.5) / forceDivider;
				target.x = powerX + forceX;
				target.y = powerY + forceY;
			}
		}
		
		function randomRange(min, max)
		{
			return min + Math.random() * (max - min);
		}
		
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// copyright
	this.text = new cjs.Text("Bat designed by macrovector / Freepik", "18px 'Helvetica'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 331;
	this.text.parent = this;
	this.text.setTransform(480,499.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// particlesContainer
	this.particlesContainer = new lib.ParticlesContainer();
	this.particlesContainer.name = "particlesContainer";

	this.timeline.addTween(cjs.Tween.get(this.particlesContainer).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(792.7,767.6,-145.4000000000001,-245.30000000000007);
// library properties:
lib.properties = {
	id: '0E5A80107AB8479DB51CE5D189880AC2',
	width: 960,
	height: 540,
	fps: 60,
	color: "#6666FF",
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
an.compositions['0E5A80107AB8479DB51CE5D189880AC2'] = {
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