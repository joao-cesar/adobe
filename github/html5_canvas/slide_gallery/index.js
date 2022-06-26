(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,846,1104],[848,0,846,1104]]},
		{name:"index_atlas_2", frames: [[0,0,846,1104],[848,0,846,1104]]},
		{name:"index_atlas_3", frames: [[848,0,600,1297],[0,0,846,1104]]},
		{name:"index_atlas_4", frames: [[602,852,479,88],[602,942,479,88],[1083,910,129,50],[1083,852,142,56],[0,0,600,1296],[1083,962,214,8],[602,0,850,850],[602,1032,380,50],[602,1084,514,18]]}
];


// symbols:



(lib.CachedBmp_160 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.StockSnap_6Y5SVWDPHG = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.StockSnap_CCKYDDOYQ9 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.StockSnap_MKUHAQYWBH = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.StockSnap_VCPGJ91Q7K = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.StockSnap_YBCT75UMOY = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
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


(lib.OrdernButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-35.4,-13.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-32.25,-12.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// rec
	this.instance_2 = new lib.CachedBmp_161();
	this.instance_2.setTransform(-119.8,-22,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_160();
	this.instance_3.setTransform(-119.8,-22,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.8,-22,239.5,44);


(lib.Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hit, new cjs.Rectangle(0,0,300,648), null);


(lib.Page4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.StockSnap_YBCT75UMOY();
	this.instance.setTransform(6.4,136,0.3404,0.3404);

	this.instance_1 = new lib.Hit();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Page4, new cjs.Rectangle(0,0,300,648), null);


(lib.Page3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.StockSnap_6Y5SVWDPHG();
	this.instance.setTransform(5.95,136,0.3404,0.3404);

	this.instance_1 = new lib.Hit();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Page3, new cjs.Rectangle(0,0,300,648), null);


(lib.Page2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.StockSnap_CCKYDDOYQ9();
	this.instance.setTransform(5,136,0.3404,0.3404);

	this.instance_1 = new lib.Hit();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Page2, new cjs.Rectangle(0,0,300,648), null);


(lib.Page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.StockSnap_MKUHAQYWBH();
	this.instance.setTransform(5.75,136,0.3404,0.3404);

	this.instance_1 = new lib.Hit();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Page1, new cjs.Rectangle(0,0,300,648), null);


(lib.Page = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.StockSnap_VCPGJ91Q7K();
	this.instance.setTransform(5.75,136,0.3404,0.3404);

	this.instance_1 = new lib.Hit();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Page, new cjs.Rectangle(0,0,300,648), null);


(lib.Pages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thumbs
	this.instance = new lib.Page4();
	this.instance.setTransform(1199.8,0);

	this.instance_1 = new lib.Page3();
	this.instance_1.setTransform(899.85,0);

	this.instance_2 = new lib.Page2();
	this.instance_2.setTransform(599.9,0);

	this.instance_3 = new lib.Page1();
	this.instance_3.setTransform(299.95,0);

	this.instance_4 = new lib.Page();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pages, new cjs.Rectangle(0,0,1499.8,648), null);


// stage content:
(lib.adobe_animate_cc_html5_canvas_slide_gallery = function(mode,startPosition,loop) {
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
		var pages;
		
		root.start = function()
		{
			createjs.Touch.enable(true);
			stage.mouseMoveOutside = true;
			
			pages = root.pages;
			pages.dragTolerance = 1;
			pages.index = 0;
			pages.transitionDelay = 350;
			pages.transitionEase = createjs.Ease.quintOut;
			pages.on("mousedown", root.mouseDownHandler);
			createjs.Ticker.on("tick", root.tickHandler);
			stage.off("drawstart", root.drawStart);
		}
		
		root.mouseDownHandler = function(e)
		{
			e.currentTarget.pressedX = e.currentTarget.x;
			e.currentTarget.pressed = true;
			e.currentTarget.offsetX = (e.stageX / stage.scaleX) - e.currentTarget.x;
			root.stageMouseUp = stage.on("stagemouseup", root.stageMouseUpHandler);
		};
		
		root.tickHandler = function(e)
		{
			var width = canvas.width / stage.scaleX;
			
			if (pages.pressed)
			{
				pages.dragDistance = pages.x - pages.pressedX;
				pages.x = (stage.mouseX / stage.scaleX) - pages.offsetX;
			}
				
			pages.index = root.clamp(Math.round(pages.x / width), -((pages.nominalBounds.width / width) - 1), 0);
		};
		
		root.stageMouseUpHandler = function(e)
		{	
			if (pages.pressed && Math.abs(pages.dragDistance) > pages.dragTolerance && pages.previousIndex === pages.index)
			{
				var width = canvas.width / stage.scaleX;
				
				if (pages.dragDistance > 0)
					pages.index++;
				else
					pages.index--;
				
				pages.index = root.clamp(pages.index, -((pages.nominalBounds.width / width) - 1), 0);
			}
			
			createjs.Tween.get(pages).to({x:pages.index * (canvas.width / stage.scaleX)}, pages.transitionDelay, pages.transitionEase);
			pages.previousIndex = pages.index;
			pages.pressed = false;
			stage.off("stagemouseup", root.stageMouseUp);
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		};
		
		root.drawStart = stage.on("drawstart", root.start, root, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// statusBar
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(28.75,15.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// title
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(55.05,80.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// orderButton
	this.instance_2 = new lib.OrdernButton();
	this.instance_2.setTransform(150,555.75);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.OrdernButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// gallery
	this.pages = new lib.Pages();
	this.pages.name = "pages";

	this.timeline.addTween(cjs.Tween.get(this.pages).wait(1));

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgTCAyoQgxAAgygWQgzgYgmgpQgpgrgXg5QgZg6AAhEMAAAhbpQAAhBAVg2QAXg5AognQAqgqA5gWQA7gWBIAAIErAAQAQAAALAKQAJAJAAARQAABSAtA3QAyA+BcAAIUmAAQBdAAAxg+QAtg2AAhTQAAgRAJgJQALgKARAAIEsAAQBHAAA7AWQA5AXApApQAqAoAVA4QAWA3AABAMAAABbpQAABCgZA8QgXA4goAsQgoAogxAZQgzAWgxAAg");
	mask.setTransform(150,324);

	// circle
	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(-62.45,-114,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// iPhoneX
	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(96.1,637.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(-0.1,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.9,323.5,1349.8999999999999,324.5);
// library properties:
lib.properties = {
	id: '8DF2A82C56FDDA47914AF46A9D51C38C',
	width: 300,
	height: 648,
	fps: 60,
	color: "#171717",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png", id:"index_atlas_4"}
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
an.compositions['8DF2A82C56FDDA47914AF46A9D51C38C'] = {
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