(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1379,0,48,48],[802,0,575,600],[0,0,800,600]]}
];


// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._575pxPortion_of_Pattern_of_Jali_from_Humayuns_Tombsvg = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Japanese_Wave_Patternsvg = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Pattern1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("LIB", "256px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 288;
	this.text.lineWidth = 490;
	this.text.parent = this;
	this.text.setTransform(0,-143);

	this.instance = new lib._575pxPortion_of_Pattern_of_Jali_from_Humayuns_Tombsvg();
	this.instance.setTransform(-287.5,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pattern1, new cjs.Rectangle(-287.5,-300,575,600), null);


(lib.Pattern0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("LIB", "256px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 288;
	this.text.lineWidth = 490;
	this.text.parent = this;
	this.text.setTransform(0,-143);

	this.instance = new lib.Japanese_Wave_Patternsvg();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pattern0, new cjs.Rectangle(-400,-300,800,600), null);


(lib.BoxContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjvDwIAAnfIHfAAIAAHfg");

	// container
	this.container = new lib.BoxContainer();
	this.container.name = "container";

	var maskedShapeInstanceList = [this.container];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.container).wait(1));

	// shape
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Box, new cjs.Rectangle(-24,-24,48,48), null);


// stage content:
(lib.adobe_animate_cc_html5_canvas_span_boxes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
		
		var urls =
		[
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Japanese_Wave_Pattern.svg/800px-Japanese_Wave_Pattern.svg.png",
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Portion_of_Pattern_of_Jali_from_Humayun%27s_Tomb.svg/575px-Portion_of_Pattern_of_Jali_from_Humayun%27s_Tomb.svg.png",
			"./Japanese_Wave_Pattern.svg.png",
			"./575px-Portion_of_Pattern_of_Jali_from_Humayun's_Tomb.svg.png"
		];
		
		var linkages =
		[
			"Pattern0",
			"Pattern1",
		];
		
		var index;
		var linkageIndex;
		var tempBox;
		var rows;
		var columns;
		var loader;
		var manifest;
		var linkage = "Box";
		var delay = 50;
		var idPrefix = "image";
		
		function start()
		{
			root.stop();
			tempBox = new lib[linkage]();
			rows = Math.floor(canvas.height / tempBox.nominalBounds.height);
			columns = Math.floor(canvas.width / tempBox.nominalBounds.width);
			tempBox = null;
			index = 0;
			linkageIndex = 0;
			
			manifest = new Array(rows * columns).fill(null).map(function(image, index)
			{
				return {src: urls[index % urls.length], id: idPrefix + index};
			});
			
			loader = new createjs.LoadQueue(false);
			loader.addEventListener("complete", completeHandler);
			loader.loadManifest(manifest, true);
		};
		
		function completeHandler(e)
		{
			loader.removeEventListener("complete", completeHandler);
			
			root.interval = setInterval(function()
			{
				var instance = new lib[linkage]();
				var instanceWidth = instance.nominalBounds.width;
				var instanceHeight = instance.nominalBounds.height;
				var bitmap;
				var bitmapBounds;
				
				instance.x = instanceWidth * 0.5 + (index % columns) * instanceWidth;
				instance.y = instanceHeight * 0.5 + Math.floor(index / columns) * instanceHeight;
				root.addChild(instance);
				
				if (index <= rows * columns - 1)
				{
					linkageIndex++;
					index++;
				}			
				else
				{
					console.log(index);
					clearInterval(root.interval);
					root.removeAllChildren();
					setTimeout(start, delay);
				}
				
				bitmap = index % (urls.length + 1) > 0 ? new createjs.Bitmap(loader.getResult(idPrefix + (index % manifest.length))) : new lib[linkages[linkageIndex % linkages.length]];
				bitmapBounds = bitmap.getBounds();
				
				if (bitmapBounds.width < bitmapBounds.height)
					setWidth(bitmap, instanceWidth);
				else
					setHeight(bitmap, instanceHeight);
				
				if (!bitmap.nominalBounds)
				{
					bitmap.x = -bitmapBounds.width * 0.5 * bitmap.scaleX;	
					bitmap.y = -bitmapBounds.height * 0.5 * bitmap.scaleY;
				}
				
				instance.container.addChild(bitmap);
			}, delay);
		};
		
		function setWidth(target, width)
		{
			target.scaleX = width / target.getBounds().width;
			target.scaleY = target.scaleX;
		};
		
		function setHeight(target, height)
		{
			target.scaleY = height / target.getBounds().height;
			target.scaleX= target.scaleY;
		};
		
		start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '3231D9D015593B459080CB7E5571D234',
	width: 480,
	height: 480,
	fps: 60,
	color: "#F1F1F1",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['3231D9D015593B459080CB7E5571D234'] = {
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