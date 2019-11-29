(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,384,1080],[386,0,384,1080],[772,0,194,1082]]}
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
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
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


(lib.Text1 = function(mode,startPosition,loop) {
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
		this.txt.text = this.parent.parent.name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.txt = new cjs.Text("HOME", "normal 300 32px 'Open Sans'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 44;
	this.txt.lineWidth = 136;
	this.txt.parent = this;
	this.txt.setTransform(0,-21.05);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text1, new cjs.Rectangle(-69.9,-23,139.9,46.1), null);


(lib.Text = function(mode,startPosition,loop) {
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
		this.txt.text = this.parent.parent.name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.txt = new cjs.Text("HOME", "normal 300 32px 'Open Sans'", "#0E0E0E");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 44;
	this.txt.lineWidth = 136;
	this.txt.parent = this;
	this.txt.setTransform(0,-21.05);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text, new cjs.Rectangle(-69.9,-23,139.9,46.1), null);


(lib.Mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-96,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-270,192,540);


(lib.Half = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-48.5,-270.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-270.5,97,541);


(lib.UpAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (!this.started)
		{
			this.gotoAndStop(29);
			this.started = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// text
	this.instance = new lib.Text();
	this.instance.setTransform(0,0,1,1,-90);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20,alpha:1},29,cjs.Ease.backInOut).wait(1));

	// text
	this.instance_1 = new lib.Text1();
	this.instance_1.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:20,alpha:0},29,cjs.Ease.backInOut).wait(1));

	// left
	this.instance_2 = new lib.Half("single",0);
	this.instance_2.setTransform(-144,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-48},29,cjs.Ease.backInOut).wait(1));

	// right
	this.instance_3 = new lib.Half("synched",0);
	this.instance_3.setTransform(144,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:48},29,cjs.Ease.backInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.1,-270.5,404.2,541);


(lib.HoverAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// text
	this.instance = new lib.Text();
	this.instance.setTransform(0,20,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:0},29,cjs.Ease.backInOut).wait(1));

	// text
	this.instance_1 = new lib.Text1();
	this.instance_1.setTransform(0,20,1,1,-90);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0,alpha:1},29,cjs.Ease.backInOut).wait(1));

	// left
	this.instance_2 = new lib.Half("single",0);
	this.instance_2.setTransform(-48,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-144},29,cjs.Ease.backInOut).wait(1));

	// right
	this.instance_3 = new lib.Half("synched",0);
	this.instance_3.setTransform(48,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:144},29,cjs.Ease.backInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.1,-270.5,404.2,541);


(lib.Thumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgO/gqLId/AAMAAABUXI9/AAg");

	// anim
	this.instance = new lib.UpAnim();

	this.instance_1 = new lib.HoverAnim();

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// rec
	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-96,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},3).wait(1));

	// hit
	this.instance_3 = new lib.Mask("single",0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-270,192,540);


// stage content:
(lib.adobe_animate_html5_canvas_contractible_menu = function(mode,startPosition,loop) {
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
		this.home.name = "HOME";
		this.about.name = "ABOUT";
		this.works.name = "WORKS";
		this.shop.name = "SHOP";
		this.contact.name = "CONTACT";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// thumbs
	this.contact = new lib.Thumb();
	this.contact.setTransform(864,270);
	new cjs.ButtonHelper(this.contact, 0, 1, 2, false, new lib.Thumb(), 3);

	this.shop = new lib.Thumb();
	this.shop.setTransform(672,270);
	new cjs.ButtonHelper(this.shop, 0, 1, 2, false, new lib.Thumb(), 3);

	this.works = new lib.Thumb();
	this.works.setTransform(480,270);
	new cjs.ButtonHelper(this.works, 0, 1, 2, false, new lib.Thumb(), 3);

	this.about = new lib.Thumb();
	this.about.setTransform(288,270);
	new cjs.ButtonHelper(this.about, 0, 1, 2, false, new lib.Thumb(), 3);

	this.home = new lib.Thumb();
	this.home.setTransform(96,270);
	new cjs.ButtonHelper(this.home, 0, 1, 2, false, new lib.Thumb(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.about},{t:this.works},{t:this.shop},{t:this.contact}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(383.5,269.5,673,271);
// library properties:
lib.properties = {
	id: 'FD0F03E429AED643A3A70965C81FBAB9',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png?1574988998202", id:"index_atlas_"}
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
an.compositions['FD0F03E429AED643A3A70965C81FBAB9'] = {
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