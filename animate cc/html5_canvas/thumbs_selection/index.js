(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1167,1322,236,236],[0,0,1920,1320],[1405,1322,224,224],[0,1322,323,347],[325,1322,840,83]]}
];


// symbols:



(lib.CachedBmp_14 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
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


(lib.Stripes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,660);


(lib.Rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-56,-56,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec, new cjs.Rectangle(-56,-56,112,112), null);


(lib.Preview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt = new cjs.Text("b", "120px 'invanders from space'", "#333333");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 113;
	this.txt.parent = this;
	this.txt.setTransform(6.9,-55.6);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-80.6,-86.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Preview, new cjs.Rectangle(-80.6,-86.7,161.6,173.5), null);


(lib.Thumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// highlight
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-59,-59,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// icon
	this.txt = new cjs.Text("b", "66px 'invanders from space'", "#333333");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 63;
	this.txt.lineWidth = 86;
	this.txt.parent = this;
	this.txt.setTransform(3.45,-33.35);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(2));

	// rec
	this.instance_1 = new lib.Rec();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-59,118,118);


(lib.Stripes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anim
	this.instance = new lib.Stripes1("single",0);
	this.instance.setTransform(480,330,1,1,0,0,0,480,330);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:210},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-120,960,780);


(lib.Thumbs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thumbs
	this.instance = new lib.Thumb();
	this.instance.setTransform(580.6,318.4);

	this.instance_1 = new lib.Thumb();
	this.instance_1.setTransform(449.45,318.4);

	this.instance_2 = new lib.Thumb();
	this.instance_2.setTransform(318.3,318.4);

	this.instance_3 = new lib.Thumb();
	this.instance_3.setTransform(187.15,318.4);

	this.instance_4 = new lib.Thumb();
	this.instance_4.setTransform(56,318.4);

	this.instance_5 = new lib.Thumb();
	this.instance_5.setTransform(580.6,187.15);

	this.instance_6 = new lib.Thumb();
	this.instance_6.setTransform(449.45,187.15);

	this.instance_7 = new lib.Thumb();
	this.instance_7.setTransform(318.3,187.15);

	this.instance_8 = new lib.Thumb();
	this.instance_8.setTransform(187.15,187.15);

	this.instance_9 = new lib.Thumb();
	this.instance_9.setTransform(56,187.15);

	this.instance_10 = new lib.Thumb();
	this.instance_10.setTransform(580.6,56);

	this.instance_11 = new lib.Thumb();
	this.instance_11.setTransform(449.45,56);

	this.instance_12 = new lib.Thumb();
	this.instance_12.setTransform(318.3,56);

	this.instance_13 = new lib.Thumb();
	this.instance_13.setTransform(187.15,56);

	this.instance_14 = new lib.Thumb();
	this.instance_14.setTransform(56,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Thumbs, new cjs.Rectangle(0,0,636.6,374.4), null);


// stage content:
(lib.adobe_animation_html5_canvas_item_selection = function(mode,startPosition,loop) {
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
		const root = this;
		
		root.animDelay = 350;
		root.thumbs.xIndex = 0;
		root.thumbs.yIndex = 0;
		root.thumbs.columns = 5;
		root.thumbs.rows = 3;
		root.thumbs.colors =
		[
			"#fff",
			"#333"
		];
		
		root.start = () =>
		{
			document.body.style.backgroundColor = lib.properties.color;
			root.title.y -= 5;
			
			root.thumbs.children.forEach((child, index, array) =>
			{
				child.avatar = 66 + (index % 10) * 2;
				child.color = root.thumbs.colors[ index % root.thumbs.colors.length];
				child.txt.text = String.fromCharCode(child.avatar);
				child.txt.color = child.color;
			});
			
			root.select();
			root.count = 0;
			root.animate();
			setInterval(root.animate, root.animDelay);
			window.addEventListener("keydown", root.keyDownHandler);
			stage.off("drawstart", root.drawStart);
		};
		
		root.select = () =>
		{
			root.thumbs.xIndex = root.clamp(root.thumbs.xIndex, 0, root.thumbs.columns - 1);
			root.thumbs.yIndex = root.clamp(root.thumbs.yIndex, 0, (root.thumbs.rows - 1) * root.thumbs.columns);
			
			if (root.thumbs.selected)
			{
				root.thumbs.selected.txt.text = String.fromCharCode(root.thumbs.selected.avatar);
				root.thumbs.selected.gotoAndStop(0);
			}
			
			root.thumbs.selected = root.thumbs.children[root.thumbs.xIndex + root.thumbs.yIndex];
			root.thumbs.selected.gotoAndStop(1);
			root.preview.txt.text = String.fromCharCode(root.thumbs.selected.avatar);
			root.preview.txt.color = root.thumbs.selected.color;
			root.animate();
		};
		
		root.animate = () =>
		{
			const frame = String.fromCharCode(root.thumbs.selected.avatar + (root.count % 2));
			
			root.preview.txt.text = frame;
			root.thumbs.selected.txt.text = frame;
			root.count++;
		};
		
		root.keyDownHandler = e =>
		{
			if (e.keyCode === 37)
				root.thumbs.xIndex--;
			else if (e.keyCode === 39)
				root.thumbs.xIndex++;
			else if (e.keyCode === 38)
				root.thumbs.yIndex -= root.thumbs.columns;
			else if (e.keyCode === 40)
				root.thumbs.yIndex += root.thumbs.columns;
			
			if (e.keyCode >= 37 && e.keyCode <= 40)
				root.select();
		};
		
		root.clamp = (value, min, max) =>
		{
			if (value < min)
				return max;
			
			if (value > max)
				return min;
			
			return value;
		};
		
		root.drawStart = stage.on("drawstart", root.start, null, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ui
	this.title = new cjs.Text("ALIEN SELECTION", "36px 'VCR OSD Mono'", "#FFFFFF");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 37;
	this.title.lineWidth = 416;
	this.title.parent = this;
	this.title.setTransform(480,45.35);

	this.thumbs = new lib.Thumbs();
	this.thumbs.setTransform(53.1,126.8);

	this.preview = new lib.Preview();
	this.preview.setTransform(826.3,314);

	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(270,43.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.preview},{t:this.thumbs},{t:this.title}]}).wait(1));

	// background
	this.instance_1 = new lib.Stripes();
	this.instance_1.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,480,390);
// library properties:
lib.properties = {
	id: '4A4BF3AB971D0D4DB8B915A5661B9629',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1574536749605", id:"index_atlas_"}
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
an.compositions['4A4BF3AB971D0D4DB8B915A5661B9629'] = {
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