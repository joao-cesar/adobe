(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,130,958],[286,0,6,956],[278,0,6,956],[262,0,6,956],[270,0,6,956],[132,0,128,128],[132,130,128,128],[132,260,128,128]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(img.CachedTexturedBitmap_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2456,1914);// helper functions:

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


(lib.Viewer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Texts
	this.text = new cjs.Text("0", "72px 'Arial'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 82;
	this.text.lineWidth = 40;
	this.text.parent = this;
	this.text.setTransform(306.7,198.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1).to({text:"2"},0).wait(1).to({text:"3",lineWidth:41},0).wait(1).to({text:"4",lineWidth:40},0).wait(1).to({text:"5"},0).wait(1).to({text:"6"},0).wait(1).to({text:"7"},0).wait(1).to({text:"8"},0).wait(1).to({text:"9"},0).wait(1).to({y:196.75,text:"10",lineWidth:90},0).wait(1).to({text:"11"},0).wait(1).to({text:"12"},0).wait(1).to({text:"13"},0).wait(1).to({text:"14"},0).wait(1).to({text:"15"},0).wait(1).to({text:"16"},0).wait(1).to({text:"17"},0).wait(1).to({text:"18"},0).wait(1).to({text:"19"},0).wait(1));

	// Bounds
	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.25,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.2,614,478.5);


(lib.Thumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();stop
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Text
	this.txt = new cjs.Text("1", "40px 'Arial'", "#999999");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 47;
	this.txt.lineWidth = 60;
	this.txt.parent = this;
	this.txt.setTransform(32,9.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1).to({color:"#5B5B5B"},0).wait(1).to({color:"#FFFFFF"},0).wait(1));

	// Rec
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.ScrollContent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ScrollButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,478);


(lib.ScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollBar, new cjs.Rectangle(0,0,3,478), null);


(lib.ScrollArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollArea, new cjs.Rectangle(-0.5,-0.5,65,479), null);


(lib.ThumbContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Scroll Button
	this.button = new lib.ScrollButton();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(67.55,0);
	new cjs.ButtonHelper(this.button, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Scroll Bar
	this.bar = new lib.ScrollBar();
	this.bar.name = "bar";
	this.bar.parent = this;
	this.bar.setTransform(67.55,0);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgE/AlWMAAAhKrIJ/AAMAAABKrg");
	mask.setTransform(32,239);

	// Content
	this.content = new lib.ScrollContent();
	this.content.name = "content";
	this.content.parent = this;

	var maskedShapeInstanceList = [this.content];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1));

	// Bounds
	this.scrollArea = new lib.ScrollArea();
	this.scrollArea.name = "scrollArea";
	this.scrollArea.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.scrollArea).wait(1));

}).prototype = getMCSymbolPrototype(lib.ThumbContainer, new cjs.Rectangle(-0.5,-0.5,71.1,479), null);


// stage content:
(lib.animate_cc_html5_scroll_pane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var list = this.list;
		var listContainer = list.content;
		var verticalList;
		var scroll;
		
		var list1 = this.list1;
		var listContainer1 = list1.content;
		var verticalList1;
		var scroll1;
		
		var viewer = this.viewer;
		
		stage.mouseMoveOutside = true;
		
		verticalList = new VerticalList(lib, listContainer, viewer.timeline.duration, "Thumb", 8, function(thumb, index)
		{
			var button = new SimpleListButton(thumb, {toggleGroup:"group0"});
			button.mc.txt.text = String(index);
			
			button.onMouseUp = function(e)
			{
				viewer.gotoAndStop(e.currentTarget.parent.getChildIndex(e.currentTarget));
			};
		});
		
		verticalList1 = new VerticalList(lib, listContainer1, Math.round(viewer.timeline.duration * 0.5), "Thumb", 8, function(thumb, index)
		{
			var button = new SimpleListButton(thumb, {toggleGroup:"group1"});
			button.mc.txt.text = String(index);
			
			button.onMouseUp = function(e)
			{
				viewer.gotoAndStop(e.currentTarget.parent.getChildIndex(e.currentTarget));
			};
		});
		
		scroll = new VerticalScroll(list);
		scroll1 = new VerticalScroll(list1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// List
	this.list1 = new lib.ThumbContainer();
	this.list1.name = "list1";
	this.list1.parent = this;
	this.list1.setTransform(804.4,31);

	this.list = new lib.ThumbContainer();
	this.list.name = "list";
	this.list.parent = this;
	this.list.setTransform(85.1,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.list},{t:this.list1}]}).wait(1));

	// Viewer
	this.viewer = new lib.Viewer();
	this.viewer.name = "viewer";
	this.viewer.parent = this;
	this.viewer.setTransform(173.3,31);

	this.timeline.addTween(cjs.Tween.get(this.viewer).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(564.6,300.5,310.4,209);
// library properties:
lib.properties = {
	id: '2B47E351D2EA1A4CB92427494E38439E',
	width: 960,
	height: 540,
	fps: 120,
	color: "#F6F6F6",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_9.png?1549671121290", id:"CachedTexturedBitmap_9"},
		{src:"images/index_atlas_.png?1549671121278", id:"index_atlas_"}
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
an.compositions['2B47E351D2EA1A4CB92427494E38439E'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;