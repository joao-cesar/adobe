(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1300,328,64,72],[86,274,64,76],[152,274,64,76],[1366,328,64,72],[1432,328,64,72],[1498,347,64,72],[1564,347,64,72],[1820,0,184,267],[1630,347,61,75],[258,262,84,85],[344,262,84,85],[430,262,84,85],[1736,269,84,85],[1822,269,84,85],[1560,260,86,85],[1648,260,86,85],[1908,269,84,85],[0,274,84,85],[520,0,258,258],[780,0,258,258],[1040,0,258,258],[1300,0,258,258],[1560,0,258,258],[1300,260,258,66],[520,260,258,258],[218,349,243,10],[780,260,258,258],[1040,260,258,258],[258,0,260,260],[0,0,256,272]]}
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



(lib.CachedBmp_42 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Triangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A7A7A7").s().p("AAgBaIiyizIAAg6IElEng");
	this.shape.setTransform(14.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727272").s().p("AizBaICzizIC0Czg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A2A2A").s().p("ACUiTIAAA6IizCzIh0A6g");
	this.shape_2.setTransform(-14.725,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkmAdIBzg5IFnAAIBzA5g");
	this.shape_3.setTransform(0.025,11.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-14.7,59.1,29.5);


(lib.Stone6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_42();
	this.instance.setTransform(-16,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18,32,36);


(lib.Stone5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_41();
	this.instance.setTransform(-16,-19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-19,32,38);


(lib.Stone4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(-16,-19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-19,32,38);


(lib.Stone3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_39();
	this.instance.setTransform(-16,-17.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.9,32,36);


(lib.Stone2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_38();
	this.instance.setTransform(-16,-17.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.9,32,36);


(lib.Stone1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-16,-17.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.9,32,36);


(lib.Stone = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(-16,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18,32,36);


(lib.Spawner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(1,1,1).p("Ap/KAIT/AAIAAz/Iz/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,255,0.247)").s().p("Ap/KAIAAz/IT/AAIAAT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Spawner, new cjs.Rectangle(-65,-65,130,130), null);


(lib.Player = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.player = new regards.Player({ target: this, gamepad: new regards.Gamepad({}), keys: root.config.controls.player, tick: true });
		this.player.camera = new regards.Camera({ target: this.parent, follow: this, tick: true });
		
		this.player.callbacks.tickHandler = function(e, target)
		{
			const shape = target.target.parent["worldShape" + target.target.parent.currentFrame].staticBody;
			
			if (shape)
				target.shapeCollision(target, shape);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// head
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(-13.3,-122.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.CachedBmp_35();
	this.instance_1.setTransform(-58.5,-116.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(28,36,57,0.298)").s().p("Al7BXQAAgaAeg0QAJgQAKgMQB/g+BpgfQCRgtCQAAQBAAAAyAMQBLASAAAmQAABIkaBcQj7BThbAAQiHAAAAhHg");
	this.shape.setTransform(0.6765,10.2887,0.6753,0.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#321E16").ss(1,1,1).p("AgWARQALgGALgGQAEgFAEgDQAIgKAHgD");
	this.shape_1.setTransform(-21.7,8.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Player, new cjs.Rectangle(-58.5,-122.3,92,143.3), null);


(lib.JC1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("GAME", "normal 400 20px 'Luckiest Guy'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 60;
	this.text.alpha = 0.71764706;
	this.text.parent = this;
	this.text.setTransform(38.05,-6.3);
	if(!lib.properties.webfonts['Luckiest Guy']) {
		lib.webFontTxtInst['Luckiest Guy'] = lib.webFontTxtInst['Luckiest Guy'] || [];
		lib.webFontTxtInst['Luckiest Guy'].push(this.text);
	}

	this.text_1 = new cjs.Text("A", "normal 400 20px 'Luckiest Guy'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 21;
	this.text_1.alpha = 0.49803922;
	this.text_1.parent = this;
	this.text_1.setTransform(-57.95,-6.3);
	if(!lib.properties.webfonts['Luckiest Guy']) {
		lib.webFontTxtInst['Luckiest Guy'] = lib.webFontTxtInst['Luckiest Guy'] || [];
		lib.webFontTxtInst['Luckiest Guy'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("JC", "normal 400 42px 'Luckiest Guy'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 59;
	this.text_2.lineWidth = 58;
	this.text_2.parent = this;
	this.text_2.setTransform(-19.05,-28.35);
	if(!lib.properties.webfonts['Luckiest Guy']) {
		lib.webFontTxtInst['Luckiest Guy'] = lib.webFontTxtInst['Luckiest Guy'] || [];
		lib.webFontTxtInst['Luckiest Guy'].push(this.text_2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-30.3,140.4,60.6);


(lib.IntroBounds = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EhK/gqLMCV/AAAMAAABUXMiV/AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-271,962,542);


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
	this.shape.graphics.f("#FF0000").s().p("Ak/FAIAAp/IJ/AAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Highlight1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AuAjaIcBAAIAAG1I8BAAg");
	this.shape.setTransform(-0.05,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuADaIAAmzIcBAAIAAGzg");
	this.shape_1.setTransform(-0.05,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.7,-22.9,181.3,45.7);


(lib.Highlight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AuAjaIcBAAIAAG1I8BAAg");
	this.shape.setTransform(-0.05,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.7,-22.9,181.3,45.7);


(lib.Handle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#C81616").ss(1,1,1).p("ABOAAQAAAggXAXQgXAXggAAQgfAAgXgXQgXgXAAggQAAgfAXgXQAXgXAfAAQATAAAQAIQALAGAJAJQANAOAGARQAEALAAAMg");
	this.shape.setTransform(10.025,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A81111").ss(1,1,1).p("ACXjxQAbARAXAYQAoAnAVAvQAXA1AAA9QAAB2hUBTQhTBTh2AAQh1AAhThTQhUhTAAh2QAAh1BUhTQBThTB1AAQBVAABCAqgAEGhyQAKAhAAAlQAABahABAQhABAhbAAQhaAAhBhAQhAhAAAhaQAAhbBAhAQBBhABaAAQA2AAAsAW");
	this.shape_1.setTransform(0,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D92E2E").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgWAfAAQATAAAQAIQALAFAJAJQANANAGASQAEALAAAMQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_2.setTransform(10.025,-17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A81111").s().p("AjIDJQhUhTABh2QgBh1BUhTQBThTB1AAQBUAABDAqQgtgWg2AAQhZAAhBBAQhABAAABbQAABaBABAQBBBABZAAQBcAABAhAQBAhAAAhaQAAglgKghQAWA1AAA9QABB2hUBTQhTBTh2AAQh1AAhThTg");
	this.shape_3.setTransform(0,-0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C81616").s().p("AiaCbQhBhAAAhbQAAhaBBhAQBBhABZAAQA2AAAtAWQAaARAXAYQAoAnAVAvQAKAhAAAkQAABbhABAQhABAhbAAQhZAAhBhAgAgGi2QgXAXAAAgQAAAgAXAXQAWAXAgAAQAgAAAXgXQAWgXABggQgBgNgDgLQgGgRgNgOQgKgJgKgFQgQgIgTAAQggAAgWAWg");
	this.shape_4.setTransform(5.25,-4.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Handle, new cjs.Rectangle(-29.4,-29.4,58.9,58.8), null);


(lib.Frame4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AXCV1MguDAAAMAPNgrpIe2AAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("A3BV1MAPOgrpIe1AAMAAAArpg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.4,-140.7,296.8,281.5);


(lib.Frame3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A/3V1MAAAgrpMA/vAAAMgPNArpg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("A/3V1MAAAgrpMA/vAAAMgPNArpg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-140.7,410.1,281.5);


(lib.Frame2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3SV1MAAAgrpMAulAAAMAAAArpg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("A3SV1MAAAgrpMAulAAAMAAAArpg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.1,-140.7,300.29999999999995,281.5);


(lib.Frame1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AriR5MA62AAAMAAAgjxMhenAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AriR5MgjxgjxMBenAAAMAAAAjxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.7,-115.4,607.5,230.9);


(lib.Frame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgqDgR4MAwWAAAMAjxAjxMhUHAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("EgqDAR5MAAAgjxMAwVAAAMAjyAjxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.1,-115.4,540.3,230.9);


(lib.FloorTile8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-21.05,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21.3,42,42.5);


(lib.FloorTile7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-21.05,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21.3,42,42.5);


(lib.FloorTile6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-21.05,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21.3,42,42.5);


(lib.FloorTile5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-21.05,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21.3,42,42.5);


(lib.FloorTile4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(-21.05,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21.3,42,42.5);


(lib.FloorTile3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-21.45,-21.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-21.3,43,42.5);


(lib.FloorTile2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(-21.45,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-21.3,43,42.5);


(lib.FloorTile1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-21.05,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21.3,42,42.5);


(lib.FloorTile = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-21.05,-21.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21.3,42,42.5);


(lib.CollisionShape4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.staticBody = new regards.StaticBody({ target: this });
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ejb/FUAMAAAjcAMAoAAAAMAAAhkAIUAAAIAA0AMA8AAAAIAAUAMA8AAAAMAAAhj/MgoAAAAMAAAgoAMiMAAAAMAAAjcAMG3/AAAMAAADcAMjIAAAAMAAADH/I0AAAMAAAB4AMgn/AAAIAAUAMAn/AAAMAAAB4AgEjH/FAAMC0AAAAMAAAhQAMgoAAAAMAAAg8AMAoAAAAMAAAh4AIT/AAMAAAkD/MCMAAAAMAAAhQAMkX/AAAMAAABQAMBQAAAAMAAABkAMAoAAAAMAAACL/MhkAAAAIAA0AI0AAAIAAUAI0AAAMAAABkAMgoAAAAgEAUAiL/MC0AAAAMAAAi0AMmP/AAAMAAAC0AMB4AAAAIAA0AMhkAAAAMAAAiMAMFn/AAAMAAACMAMigAAAAg");
	this.shape.setTransform(1408,2176);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CollisionShape4, new cjs.Rectangle(0,0,2816,4352), null);


(lib.CollisionShape3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.staticBody = new regards.StaticBody({ target: this });
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EBQAAyAIAA0AMh3/AAAIAAUAMh4AAAAMAAAhP/IUAAAIAA0AMA8AAAAIAAUAMA8AAAAIAA0AMCz/AAAMAAABP/I0AAAIAAUAgEBkAAKAIAAUAIUAAAIAA0AIUAAAMAAAgn/MiMAAAAIAAUAMhj/AAAIAA0AI0AAAIAAUAI0AAAMAAAAn/MBQAAAAIAA0Ag");
	this.shape.setTransform(1024,320);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CollisionShape3, new cjs.Rectangle(0,0,2048,640), null);


(lib.CollisionShape2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.staticBody = new regards.StaticBody({ target: this });
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhF/DmAIAA0AMhkAAAAMAAAhkAIUAAAIAA0AI0AAAMAAAiz/MgoAAAAMAAAh4AMDIAAAAIAAUAMAn/AAAIAA0AMA8AAAAIAA0AMA8AAAAIAAUAMA8AAAAMAAAB4AMi0AAAAMAAAgoAMgn/AAAMAAAAoAMg8AAAAMAAACz/I0AAAIAAUAMBj/AAAMAAABkAIz/AAIAAUAgEiV/C+AMBkAAAAIAAUAIUAAAIAA0AIUAAAMAAAg8AMgoAAAAIAAUAI0AAAIAA0AMgoAAAAMAAAg8AIUAAAMAAAif/I0AAAIAA0AMBQAAAAMAAAgoAMBP/AAAMAAAAoAMCMAAAAMAAAhQAMg8AAAAIAA0AI0AAAIAAUAMg8AAAAIAAUAMhP/AAAIAA0AMhkAAAAMAAAA8AI0AAAMAAAg8AMgoAAAAMAAABQAMA8AAAAIAAUAI0AAAMAAACf/IUAAAMAAAA8AI0AAAgEht/iB/MAAAgoAMA8AAAAMAAAAoAg");
	this.shape.setTransform(1344,1472);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CollisionShape2, new cjs.Rectangle(0,0,2688,2944), null);


(lib.CollisionShape1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.staticBody = new regards.StaticBody({ target: this });
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eg7/C0AMAAAjb/Mg8AAAAMAAAg8AMAoAAAAMAAAg8AMBP/AAAMAAAA8AMAoAAAAMAAAhQAMA8AAAAMAAACgAIUAAAMAAACL/I0AAAIAAUAI0AAAMAAAAoAgEgn/CgAMBj/AAAMAAAgoAIUAAAIAA0AIUAAAMAAAhkAI0AAAMAAAif/I0AAAMAAABQAMhP/AAAMAAAg8AMgoAAAAMAAAA8AMgoAAAAIAAUAMCf/AAAIAAUAMhj/AAAg");
	this.shape.setTransform(768,1152);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CollisionShape1, new cjs.Rectangle(0,0,1536,2304), null);


(lib.CollisionShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.staticBody = new regards.StaticBody({ target: this });
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhP/BkAMAAAhQAMh4AAAAMAAAh3/MCMAAAAIAAUAMAoAAAAIAA0AMB3/AAAMAAABQAMAoAAAAIAAT/IUAAAIAAUAMAoAAAAMAAAA8AMg8AAAAIAAUAgEA8AAUAMAAAA8AMA8AAAAIAA0AMA8AAAAIAA0AMgoAAAAIAA0AI0AAAIAA0AMgoAAAAMAAAhP/MhQAAAAIAAUAMhP/AAAIAA0AMhkAAAAMAAABP/MBkAAAAMAAAgn/MBP/AAAMAAAAn/Mg7/AAAMAAABQAMBP/AAAMAAAg8AgEif/gT/MAAAgoAMA8AAAAMAAAAoAg");
	this.shape.setTransform(1280,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CollisionShape, new cjs.Rectangle(0,0,2560,1280), null);


(lib.Coin_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.coin = new regards.Collectible
		(
			{
				target: this,
				collector: this.parent.player.player,
				radius: 32,
				tick: true,
				callback: function()
				{
					this.remove();
					regards.Sound.play("Coin", "sfx", true, { volume: 0.1 });
				}
			}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AAAATIgfAfIATgoIgngVIAsAGIAHgsIAIAsIAsgGIgoAVIAUAog");
	this.shape.setTransform(7.25,-11.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAA822").s().p("AguAhQgHgFgIgGIgMgPQgOgUABgbIAAgGQABAWAMATQAGAGAGAHQAIAHAHAFQAVANAZAAQATABAQgIQAMgEALgJIAEgFQAYgXABgfIAAAGQABAlgaAZIgEADQgLAKgMAFQgQAHgTAAQgZAAgVgOg");
	this.shape_1.setTransform(0,4.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D49108").s().p("AguBDQgIgFgHgHQgHgGgFgIQgMgSgBgXIAAgGQACgNAGgLQAGgNALgLQAMgMAPgGQAQgIASAAQAkAAAaAaIAJALQAIALAEANQADAGAAAHIABAGQgCAggXAXIgFAFQgKAJgMAFQgQAHgTAAQgZAAgVgOg");
	this.shape_2.setTransform(0.025,-0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AhKAQQgegGAAgKQAAgJAegGQAggHAqAAQArAAAfAHQAfAGAAAJQAAAKgfAGQgfAHgrAAQgqAAgggHg");
	this.shape_3.setTransform(0,20.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4D942").s().p("AglAHIAygkQAQASAJAUIg/AVQgEgNgIgKg");
	this.shape_4.setTransform(10.925,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9DC38").s().p("AgWAWQgMgNgJgMIA8goIAMAPQAHAHAIAFIgnA8QgOgJgNgNg");
	this.shape_5.setTransform(-9.075,9.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE248").s().p("AgigZQAMgFAKgKIAvA2QgTARgUAJg");
	this.shape_6.setTransform(7.025,10.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE768").s().p("AgyATQAKgRAOgNQAYgYAegMIAXA1QgPAGgMAMQgKALgGANg");
	this.shape_7.setTransform(-8.625,-8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE44F").s().p("ACfBMQgCgagKgWQgJgVgQgRIgJgLQgvguhCgBQgeAAgcALQgeAMgYAYQgOAOgLAQQgSAegDAlIAAAIIgBgIQAAgmAQggQALgXAUgTQAWgWAagMQAegNAiAAQBCAAAvAvQAJAJAJALQAOATAHAXQAIAXAAAbIAAAIIgBgIg");
	this.shape_8.setTransform(0,-7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FED90D").s().p("AhVB/IAng9QAVAOAZAAQATAAAQgHIAeBCQgeANgjAAQgvAAgmgZgAA5A6IAFgEQAZgaAAgjIAAgGIgBgIQAAgHgDgGIBAgVQAKAWACAaIABAHQgDA9gsAsIgIAIgAifAAIABgHQADglASgeIA7AdQgGALgCANIAAAIIgBAGQAAAaAOAVIg9AnQgXgjgCgsgAA+hFQgagZgkAAQgSAAgQAHIgYg2QAbgKAfAAQBCAAAvAuIAJALIgzAlIgJgMg");
	this.shape_9.setTransform(0.025,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FED90D").s().p("AhwBxQgvgvAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhBAAgvgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Coin_1, new cjs.Rectangle(-16,-16.5,32,39), null);


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
	this.shape.graphics.lf(["#000000","#4F4F4F"],[0,1],-34.2,29.4,34.2,-29.3).s().p("Ak/E/QiEiEABi7QgBi6CEiFQCFiEC6AAQC7AACECEQCECFABC6QgBC7iECEQiECEi7ABQi6gBiFiEgAkJkJQhuBvAACaQAACbBuBuQBvBuCaAAQCcAABthuQBuhuAAibQAAiahuhvQhthticAAQiaAAhvBtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkIEJQhuhuAAibQAAiaBuhvQBuhtCaAAQCcAABtBtQBuBvAACaQAACbhuBuQhtBuicAAQiaAAhuhug");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-45.1,90.30000000000001,90.30000000000001);


(lib.Warp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.warp = new regards.Warp
		(
			{
				target: this,
				passenger: this.parent.player.player,
				radius: 64,
				tick: true,
				callback: function()
				{
					if (!this.target.parent)
						return;
					
					const frame = this.target.parent.currentFrame;
					
					this.target.parent.gotoAndStop(parseInt(this.target.name.replace("warp", "")));
					this.passenger.target.set({ x: this.passenger.target.parent["spawner" + frame].x, y: this.passenger.target.parent["spawner" + frame].y });
					this.passenger.camera.target.x = this.passenger.camera.seekX();
					this.passenger.camera.target.y = this.passenger.camera.seekY();
				}
			}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("Ap/KAIT/AAIAAz/Iz/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.247)").s().p("Ap/KAIAAz/IT/AAIAAT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Warp, new cjs.Rectangle(-65,-65,130,130), null);


(lib.Tile25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,129,129);


(lib.Tile24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,129,129);


(lib.Tile13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bitmap
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(0,-7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,128,136);


(lib.Tile12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bitmap
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,129,129);


(lib.Tile11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bitmap
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D3250").ss(1,1,1).p("AHgnfIu/AAIAAO/");
	this.shape.setTransform(48,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("AKAk/IAAlAIlAAAIAAFAgAFAAAIAAFAIFAAAIAAlAIAAk/AFAAAIFAAAAFAk/IAAE/Ak/FAIlAAAIAAFAIFAAAIE/AAIFAAAIFAAAIAAlAAk/FAIE/AAIFAAAIAAFAAAAFAIAAFAAk/FAIAAFA");
	this.shape_1.setTransform(64,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3250").s().p("ACgHgIk/AAIlAAAIAAu/IO/AAIAAFAIAAE/IAAFAg");
	this.shape_2.setTransform(48,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C848D").s().p("AFAKAIAAlAIAAFAIlAAAIAAlAIFAAAIFAAAIlAAAIAAlAIAAk/IFAAAIlAAAIAAlAIFAAAIAAFAIAAE/IlAAAIFAAAIAAFAIAAFAgAk/KAIAAlAIAAFAIlAAAIAAlAIFAAAIE/AAIAAFAgAKAAAg");
	this.shape_3.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-0.5,95.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,129,129);


(lib.Tile8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E414E").ss(1,1,1).p("Ak/AAIJ/AA");
	this.shape.setTransform(64,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("AFAk/IAAlAIFAAAIAAFAIlAAAIAAE/IAAFAIFAAAIAAFAIlAAAIlAAAIk/AAIlAAAIAAlAIAAlAIAAk/IAAlAIFAAAIAAFAIlAAAAKAAAIAAFAAFAAAIFAAAIAAk/Ak/AAIAAFAIlAAAAk/AAIlAAAAAAFAIk/AAIAAFAAk/k/IAAE/AFAFAIlAAAIAAFAAFAFAIAAFA");
	this.shape_1.setTransform(64,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E414E").s().p("AAAHgIk/AAIAAlAIAAk/IAAlAIJ/AAIAAFAIAAE/IAAFAg");
	this.shape_2.setTransform(64,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C848D").s().p("AFAKAIAAlAIAAFAIlAAAIAAlAIAAFAIk/AAIAAlAIlAAAIFAAAIAAFAIlAAAIAAlAIAAlAIAAk/IFAAAIlAAAIAAlAIFAAAIAAFAIAAE/IlAAAIFAAAIAAFAIE/AAIFAAAIAAlAIAAk/IFAAAIlAAAIAAlAIFAAAIAAFAIAAE/IlAAAIFAAAIAAFAIlAAAIFAAAIAAFAgAKAAAg");
	this.shape_3.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D3250").ss(1,1,1).p("AHgp/IAAFAIAAE/IAAFAIAAFAIu/AAIAAz/g");
	this.shape.setTransform(48,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("ACgk/IAAlAIk/AAACgFAIAAlAIAAk/AifFAIE/AAAifAAIE/AAAifk/IE/AAAifKAIE/AAIAAlA");
	this.shape_1.setTransform(112,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3250").s().p("AnfKAIAAz/IO/AAIAAFAIAAE/IAAFAIAAFAg");
	this.shape_2.setTransform(48,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C848D").s().p("AifKAIAAlAIAAlAIAAk/IAAlAIE/AAIAAFAIk/AAIE/AAIAAE/Ik/AAIE/AAIAAFAIk/AAIE/AAIAAFAgACgk/g");
	this.shape_3.setTransform(112,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E414E").ss(1,1,1).p("Ak/AAIJ/AA");
	this.shape.setTransform(64,128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("AKAk/IAAlAIlAAAIlAAAIk/AAIlAAAIAAFAIAAE/IAAFAIAAFAIFAAAIAAlAIlAAAAFAk/IAAlAAFAFAIAAlAIAAk/IFAAAAKAAAIAAFAAFAAAIFAAAIAAk/AFAFAIFAAAAAAk/IAAlAAk/k/IlAAAAk/k/IAAlAAk/AAIlAAAAk/FAIAAlAIAAk/AAAk/Ik/AAAFAFAIAAFAIFAAAIAAlAAFAk/IlAAA");
	this.shape_1.setTransform(64,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E414E").s().p("Ak/HgIAAlAIAAk/IAAlAIE/AAIFAAAIAAFAIAAE/IAAFAg");
	this.shape_2.setTransform(64,80);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C848D").s().p("AFAKAIAAlAIAAlAIFAAAIlAAAIAAk/IFAAAIlAAAIAAlAIFAAAIAAFAIAAE/IAAFAIlAAAIFAAAIAAFAgAp/KAIAAlAIFAAAIlAAAIAAlAIAAk/IAAlAIFAAAIAAFAIlAAAIFAAAIAAE/IlAAAIFAAAIAAFAIAAFAgAAAk/IAAlAIAAFAIk/AAIAAlAIE/AAIFAAAIAAFAgAk/k/g");
	this.shape_3.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D3250").ss(1,1,1).p("AHgCgIAAk/IAAlAIlAAAIk/AAIlAAAIAAO/IO/AAg");
	this.shape.setTransform(48,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("AFAp/IFAAAIAAFAIlAAAgAKAAAIAAFAIAAFAIlAAAAFAAAIFAAAAFAFAIFAAAAKAk/IAAE/AAAk/IAAlAIFAAAAp/k/IAAlAIFAAAAk/k/IAAlAIE/AA");
	this.shape_1.setTransform(64,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3250").s().p("AnfHgIAAu/IFAAAIE/AAIFAAAIAAFAIAAE/IAAFAg");
	this.shape_2.setTransform(48,80);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C848D").s().p("AFAKAIAAlAIAAlAIAAk/IlAAAIAAlAIAAFAIk/AAIAAlAIAAFAIlAAAIAAlAIFAAAIE/AAIFAAAIAAFAIFAAAIlAAAIAAlAIFAAAIAAFAIAAE/IlAAAIFAAAIAAFAIlAAAIFAAAIAAFAgAKAAAg");
	this.shape_3.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,129,129);


(lib.Tile3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D3250").ss(1,1,1).p("AnfnfIO/AAIAAO/");
	this.shape.setTransform(80,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("AFAFAIFAAAIAAFAIlAAAIlAAAIk/AAIlAAAIAAlAIAAlAIAAk/IAAlAIFAAAIAAFAIlAAAAk/AAIAAFAIlAAAAk/AAIlAAAAAAFAIk/AAIAAFAAk/k/IAAE/AFAFAIlAAAIAAFAAFAFAIAAFA");
	this.shape_1.setTransform(64,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C848D").s().p("AFAKAIAAlAIAAFAIlAAAIAAlAIFAAAIFAAAIAAFAgAk/KAIAAlAIAAFAIlAAAIAAlAIFAAAIlAAAIAAlAIAAk/IAAlAIFAAAIAAFAIlAAAIFAAAIAAE/IlAAAIFAAAIAAFAIE/AAIAAFAg");
	this.shape_2.setTransform(64,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D3250").s().p("ACgHgIk/AAIlAAAIAAlAIAAk/IAAlAIO/AAIAAO/g");
	this.shape_3.setTransform(80,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2D3250").ss(1,1,1).p("Ap/p/IT/AAIAAT/Iz/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D3250").s().p("Ap/KAIAAz/IT/AAIAAT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-65,130,130);


(lib.Tile1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D3250").ss(1,1,1).p("Anfp/IAAFAIAAE/IAAFAIAAFAIO/AAIAAz/g");
	this.shape.setTransform(80,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("Aifk/IAAlAIE/AAACgk/Ik/AAACgAAIk/AAACgFAIk/AAIAAlAIAAk/ACgKAIk/AAIAAlA");
	this.shape_1.setTransform(16,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3250").s().p("AnfKAIAAlAIAAlAIAAk/IAAlAIO/AAIAAT/g");
	this.shape_2.setTransform(80,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C848D").s().p("AifKAIAAlAIAAlAIAAk/IE/AAIAAE/Ik/AAIE/AAIAAFAIk/AAIE/AAIAAFAgACgk/gAifk/IAAlAIE/AAIAAFAg");
	this.shape_3.setTransform(16,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Tile0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D3250").ss(1,1,1).p("AnfHgIO/AAIAAu/");
	this.shape.setTransform(80,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("AFAk/IFAAAIAAlAIlAAAIlAAAIk/AAIlAAAIAAFAIAAE/IAAFAIAAFAIFAAAIAAlAIlAAAAFAk/IAAlAAAAk/IAAlAAk/k/IlAAAAk/k/IAAlAAk/AAIlAAAAk/FAIAAlAIAAk/AAAk/Ik/AAAFAk/IlAAA");
	this.shape_1.setTransform(64,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3250").s().p("AnfHgIAAlAIAAk/IAAlAIFAAAIE/AAIFAAAIAAO/g");
	this.shape_2.setTransform(80,80);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C848D").s().p("Ap/KAIAAlAIFAAAIAAFAgAp/FAIAAlAIAAk/IAAlAIFAAAIAAFAIlAAAIFAAAIAAE/IlAAAIFAAAIAAFAgAFAk/IAAlAIAAFAIlAAAIAAlAIFAAAIFAAAIAAFAgAk/k/IAAlAIE/AAIAAFAgAk/k/gAk/p/g");
	this.shape_3.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Stairs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E414E").ss(1,1,1).p("AnfnfIAAFAIAAE/IAAFAIO/AA");
	this.shape.setTransform(48,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0F12").ss(1,1,1).p("AKAk/IAAlAIz/AAIAAFAgAKAFAIAAlAIAAk/AFAKAIFAAAIAAlAIz/AAAKAAAIz/AA");
	this.shape_1.setTransform(64,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#717882").s().p("Ap/HgIAAlAIT/AAIAAFAgAp/ifIAAlAIT/AAIAAFAg");
	this.shape_2.setTransform(64,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444C57").s().p("AFAHgIu/AAIAAlAIT/AAIAAFAgAp/ifIAAlAIT/AAIAAFAg");
	this.shape_3.setTransform(64,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Door = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0C0F12").ss(1,1,1).p("AFAp/IFAAAIAAT/IlAAAIlAAAIk/AAIlAAAIAAz/IFAAAIAAT/AAAp/Ik/AAAFAp/IlAAAIAAT/AFAp/IAAT/");
	this.shape.setTransform(64,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#15181A").s().p("AFAKAIAAz/IAAT/IlAAAIAAz/IFAAAIFAAAIAAT/gAk/KAIAAz/IAAT/IlAAAIAAz/IFAAAIE/AAIAAT/gAAAp/g");
	this.shape_1.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Bridge1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0C0F12").ss(1,1,1).p("AKAk/IAAlAIz/AAIAAFAIAAE/IAAFAIAAFAIT/AAIAAlAIAAlAgAp/k/IT/AAAKAFAIz/AAAKAAAIz/AA");
	this.shape.setTransform(64,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#65402E").s().p("Ap/KAIAAlAIAAlAIT/AAIz/AAIAAk/IAAlAIT/AAIAAFAIz/AAIT/AAIAAE/IAAFAIz/AAIT/AAIAAFAg");
	this.shape_1.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,130);


(lib.Bridge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(3.6,121.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,129,129);


(lib.World = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.addMap = function(container)
		{
			if (container.tileMap)
				regards.Display.remove(container.tileMap);
				
			container.tileMap = regards.Display.add("TileMap" + container.currentFrame, container, 0);
			container.tileMap.tickChildren = false;
			container.tileMap.tickEnabled = false;
			container.tileMap.mouseChildren = false;
			container.tileMap.enabled = false;
			regards.Display.cacheMultiple(container.tileMap.children, 10, 10);
		};
		
		this.stop();
		this.addMap(this);
	}
	this.frame_1 = function() {
		this.addMap(this);
	}
	this.frame_2 = function() {
		this.addMap(this);
	}
	this.frame_3 = function() {
		this.addMap(this);
	}
	this.frame_4 = function() {
		this.addMap(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// warps
	this.warp1 = new lib.Warp();
	this.warp1.name = "warp1";
	this.warp1.setTransform(1152.45,259.2);

	this.warp2 = new lib.Warp();
	this.warp2.name = "warp2";
	this.warp2.setTransform(383.95,-1084.8);

	this.warp0 = new lib.Warp();
	this.warp0.name = "warp0";
	this.warp0.setTransform(-640.05,-572.8);

	this.warp3 = new lib.Warp();
	this.warp3.name = "warp3";
	this.warp3.setTransform(767.95,-1340.8);

	this.warp4 = new lib.Warp();
	this.warp4.name = "warp4";
	this.warp4.setTransform(-704.05,67.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.warp1,p:{x:1152.45,y:259.2}}]}).to({state:[{t:this.warp0},{t:this.warp2,p:{x:383.95,y:-1084.8}}]},1).to({state:[{t:this.warp3,p:{x:767.95,y:-1340.8}},{t:this.warp1,p:{x:-256.05,y:1219.2}}]},1).to({state:[{t:this.warp2,p:{x:703.95,y:323.2}},{t:this.warp4}]},1).to({state:[{t:this.warp3,p:{x:-832.05,y:131.2}}]},1).wait(1));

	// collectibles
	this.instance = new lib.Coin_1();
	this.instance.setTransform(-725.25,-139.6);

	this.instance_1 = new lib.Coin_1();
	this.instance_1.setTransform(-767.9,-139.6);

	this.instance_2 = new lib.Coin_1();
	this.instance_2.setTransform(-810.55,-139.6);

	this.instance_3 = new lib.Coin_1();
	this.instance_3.setTransform(-853.2,-139.6);

	this.instance_4 = new lib.Coin_1();
	this.instance_4.setTransform(-895.85,-139.6);

	this.instance_5 = new lib.Coin_1();
	this.instance_5.setTransform(-84.6,-394.85);

	this.instance_6 = new lib.Coin_1();
	this.instance_6.setTransform(-127.25,-394.85);

	this.instance_7 = new lib.Coin_1();
	this.instance_7.setTransform(-169.9,-394.85);

	this.instance_8 = new lib.Coin_1();
	this.instance_8.setTransform(-212.55,-394.85);

	this.instance_9 = new lib.Coin_1();
	this.instance_9.setTransform(-255.2,-394.85);

	this.instance_10 = new lib.Coin_1();
	this.instance_10.setTransform(341.8,-437.25);

	this.instance_11 = new lib.Coin_1();
	this.instance_11.setTransform(299.15,-437.25);

	this.instance_12 = new lib.Coin_1();
	this.instance_12.setTransform(256.5,-437.25);

	this.instance_13 = new lib.Coin_1();
	this.instance_13.setTransform(-42.1,330.85);

	this.instance_14 = new lib.Coin_1();
	this.instance_14.setTransform(-84.75,330.85);

	this.instance_15 = new lib.Coin_1();
	this.instance_15.setTransform(-127.4,330.85);

	this.instance_16 = new lib.Coin_1();
	this.instance_16.setTransform(725.5,373.4);

	this.instance_17 = new lib.Coin_1();
	this.instance_17.setTransform(682.85,373.4);

	this.instance_18 = new lib.Coin_1();
	this.instance_18.setTransform(597.55,373.4);

	this.instance_19 = new lib.Coin_1();
	this.instance_19.setTransform(554.9,373.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19,p:{x:554.9,y:373.4}},{t:this.instance_18,p:{x:597.55,y:373.4}},{t:this.instance_17,p:{x:682.85,y:373.4}},{t:this.instance_16,p:{x:725.5,y:373.4}},{t:this.instance_15,p:{x:-127.4,y:330.85}},{t:this.instance_14,p:{x:-84.75,y:330.85}},{t:this.instance_13,p:{x:-42.1,y:330.85}},{t:this.instance_12,p:{x:256.5,y:-437.25}},{t:this.instance_11,p:{x:299.15,y:-437.25}},{t:this.instance_10,p:{x:341.8,y:-437.25}},{t:this.instance_9,p:{x:-255.2,y:-394.85}},{t:this.instance_8,p:{x:-212.55,y:-394.85}},{t:this.instance_7,p:{x:-169.9,y:-394.85}},{t:this.instance_6,p:{x:-127.25,y:-394.85}},{t:this.instance_5,p:{x:-84.6,y:-394.85}},{t:this.instance_4,p:{x:-895.85,y:-139.6}},{t:this.instance_3,p:{x:-853.2,y:-139.6}},{t:this.instance_2,p:{x:-810.55,y:-139.6}},{t:this.instance_1,p:{x:-767.9,y:-139.6}},{t:this.instance,p:{x:-725.25,y:-139.6}}]}).to({state:[{t:this.instance_19,p:{x:384.75,y:348.4}},{t:this.instance_18,p:{x:427.4,y:348.4}},{t:this.instance_17,p:{x:384.75,y:22.85}},{t:this.instance_16,p:{x:384.75,y:65.35}},{t:this.instance_15,p:{x:-212.25,y:305.9}},{t:this.instance_14,p:{x:-169.6,y:305.9}},{t:this.instance_13,p:{x:-126.95,y:305.9}},{t:this.instance_12,p:{x:-254.9,y:-334.65}},{t:this.instance_11,p:{x:-212.25,y:-334.65}},{t:this.instance_10,p:{x:-169.6,y:-334.65}},{t:this.instance_9,p:{x:-84.7,y:-592.95}},{t:this.instance_8,p:{x:-42.05,y:-592.95}},{t:this.instance_7,p:{x:0.6,y:-592.95}},{t:this.instance_6,p:{x:43.25,y:-592.95}},{t:this.instance_5,p:{x:85.9,y:-592.95}},{t:this.instance_4,p:{x:0.6,y:560.5}},{t:this.instance_3,p:{x:43.25,y:560.5}},{t:this.instance_2,p:{x:85.9,y:560.5}},{t:this.instance_1,p:{x:128.55,y:560.5}},{t:this.instance,p:{x:171.2,y:560.5}}]},1).to({state:[{t:this.instance_19,p:{x:-683.75,y:306.05}},{t:this.instance_18,p:{x:-641.1,y:306.05}},{t:this.instance_17,p:{x:-767.4,y:-1216.95}},{t:this.instance_16,p:{x:-767.4,y:-1174.45}},{t:this.instance_15,p:{x:-1151.3,y:-976.65}},{t:this.instance_14,p:{x:-1108.65,y:-976.65}},{t:this.instance_13,p:{x:-1066,y:-976.65}},{t:this.instance_12,p:{x:-726.4,y:-119}},{t:this.instance_11,p:{x:-683.75,y:-119}},{t:this.instance_10,p:{x:-641.1,y:-119}},{t:this.instance_9,p:{x:-85.25,y:-1104}},{t:this.instance_8,p:{x:-42.6,y:-1104}},{t:this.instance_7,p:{x:0.05,y:-1104}},{t:this.instance_6,p:{x:42.7,y:-1104}},{t:this.instance_5,p:{x:85.35,y:-1104}},{t:this.instance_4,p:{x:-811.7,y:1035.2}},{t:this.instance_3,p:{x:-769.05,y:1035.2}},{t:this.instance_2,p:{x:-726.4,y:1035.2}},{t:this.instance_1,p:{x:-683.75,y:1035.2}},{t:this.instance,p:{x:-641.1,y:1035.2}}]},1).to({state:[{t:this.instance_4,p:{x:277.5,y:134.1}},{t:this.instance_3,p:{x:320.15,y:134.1}},{t:this.instance_2,p:{x:362.8,y:134.1}},{t:this.instance_1,p:{x:405.45,y:134.1}},{t:this.instance,p:{x:448.1,y:134.1}}]},1).to({state:[{t:this.instance_12,p:{x:-62.95,y:1.4}},{t:this.instance_11,p:{x:-62.95,y:43.9}},{t:this.instance_10,p:{x:-362.6,y:1011.75}},{t:this.instance_9,p:{x:-319.95,y:1011.75}},{t:this.instance_8,p:{x:-277.3,y:1011.75}},{t:this.instance_7,p:{x:-363.05,y:1525}},{t:this.instance_6,p:{x:-320.4,y:1525}},{t:this.instance_5,p:{x:-277.75,y:1525}},{t:this.instance_4,p:{x:-613.85,y:412.9}},{t:this.instance_3,p:{x:-571.2,y:412.9}},{t:this.instance_2,p:{x:-528.55,y:412.9}},{t:this.instance_1,p:{x:-485.9,y:412.9}},{t:this.instance,p:{x:-443.25,y:412.9}}]},1).wait(1));

	// player
	this.player = new lib.Player();
	this.player.name = "player";
	this.player.setTransform(-63.55,195.2);

	this.timeline.addTween(cjs.Tween.get(this.player).wait(5));

	// collision
	this.worldShape0 = new lib.CollisionShape();
	this.worldShape0.name = "worldShape0";
	this.worldShape0.setTransform(-1215.55,-708.3);
	this.worldShape0.alpha = 0.25;

	this.worldShape1 = new lib.CollisionShape1();
	this.worldShape1.name = "worldShape1";
	this.worldShape1.setTransform(-832.05,-1276.8);
	this.worldShape1.alpha = 0.25;

	this.worldShape2 = new lib.CollisionShape2();
	this.worldShape2.name = "worldShape2";
	this.worldShape2.setTransform(-1344.05,-1532.8);
	this.worldShape2.alpha = 0.25;

	this.worldShape3 = new lib.CollisionShape3();
	this.worldShape3.name = "worldShape3";
	this.worldShape3.setTransform(-1024.05,-124.8);
	this.worldShape3.alpha = 0.25;

	this.worldShape4 = new lib.CollisionShape4();
	this.worldShape4.name = "worldShape4";
	this.worldShape4.setTransform(-1408.05,-2236.8);
	this.worldShape4.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.worldShape0}]}).to({state:[{t:this.worldShape1}]},1).to({state:[{t:this.worldShape2}]},1).to({state:[{t:this.worldShape3}]},1).to({state:[{t:this.worldShape4}]},1).wait(1));

	// spawners
	this.spawner1 = new lib.Spawner();
	this.spawner1.name = "spawner1";
	this.spawner1.setTransform(1024.45,259.2);

	this.spawner2 = new lib.Spawner();
	this.spawner2.name = "spawner2";
	this.spawner2.setTransform(383.95,-956.8);

	this.spawner0 = new lib.Spawner();
	this.spawner0.name = "spawner0";
	this.spawner0.setTransform(-512.05,-572.8);

	this.spawner3 = new lib.Spawner();
	this.spawner3.name = "spawner3";
	this.spawner3.setTransform(767.95,-1212.8);

	this.spawner4 = new lib.Spawner();
	this.spawner4.name = "spawner4";
	this.spawner4.setTransform(-704.05,195.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spawner1,p:{x:1024.45,y:259.2}}]}).to({state:[{t:this.spawner0},{t:this.spawner2,p:{x:383.95,y:-956.8}}]},1).to({state:[{t:this.spawner1,p:{x:-256.05,y:1091.2}},{t:this.spawner3,p:{x:767.95,y:-1212.8}}]},1).to({state:[{t:this.spawner2,p:{x:703.95,y:195.2}},{t:this.spawner4}]},1).to({state:[{t:this.spawner3,p:{x:-832.05,y:259.2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1408,-2236.8,2816,4352);


(lib.NewGameButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.txt = new cjs.Text("NEW GAME", "normal 400 33px 'Luckiest Guy'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 47;
	this.txt.lineWidth = 159;
	this.txt.parent = this;
	this.txt.setTransform(0,-26.45);
	if(!lib.properties.webfonts['Luckiest Guy']) {
		lib.webFontTxtInst['Luckiest Guy'] = lib.webFontTxtInst['Luckiest Guy'] || [];
		lib.webFontTxtInst['Luckiest Guy'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(2).to({y:-20.9,font:"normal 400 31px 'Luckiest Guy'",color:"#201D26",lineHeight:43.8},0).to({_off:true},1).wait(1));

	// highlight
	this.instance = new lib.Highlight("synched",0,false);
	this.instance.setTransform(0,-4.9);

	this.instance_1 = new lib.Highlight1("synched",0,false);
	this.instance_1.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// hit
	this.hit = new lib.Hit("synched",0);
	this.hit.name = "hit";
	this.hit.setTransform(0,0,3.0859,1);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.7,-32,197.5,64);


(lib.JC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_299 = function() {
		root.gotoAndStop("intro");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// jc
	this.instance = new lib.JC1("synched",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59).wait(180).to({startPosition:0},0).to({alpha:0},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-30.3,140.4,60.6);


(lib.Intro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_239 = function() {
		root.gotoAndStop("menu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// frame
	this.instance = new lib.Frame("synched",0);
	this.instance.setTransform(282.3,123.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},28).wait(212));

	// frame1
	this.instance_1 = new lib.Frame1("synched",0);
	this.instance_1.setTransform(644.1,123.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({alpha:1},24).wait(188));

	// frame2
	this.instance_2 = new lib.Frame2("synched",0);
	this.instance_2.setTransform(162.25,391);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({alpha:1},24).wait(164));

	// frame3
	this.instance_3 = new lib.Frame3("synched",0);
	this.instance_3.setTransform(529.4,391);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(76).to({_off:false},0).to({alpha:1},24).wait(140));

	// frame4
	this.instance_4 = new lib.Frame4("synched",0);
	this.instance_4.setTransform(799.45,391);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({alpha:1},19).wait(121));

	// bounds
	this.instance_5 = new lib.IntroBounds("synched",0);
	this.instance_5.setTransform(480,270);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},13).wait(227));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,962,542);


(lib.InGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// world
	this.world = new lib.World();
	this.world.name = "world";

	this.timeline.addTween(cjs.Tween.get(this.world).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InGame, new cjs.Rectangle(-1215.5,-708.3,2560,1280), null);


(lib.DPad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.dPad = new regards.DPad({ target: this, tick: true });
		this.dPad.target.alpha = 0;
		
		this.dPad.callbacks.mouseDownHandler = function(e, target)
		{	
			if (target.pointerPos.x > regards.Display.iW * 0.5 || target.pointerPos.y < regards.Display.iH * 0.5)
				return;
				
			const size = regards.Display.getSize(target.target);
				
			target.target.x = regards.Calc.clamp(target.pointerPos.x, size.width * 0.5, regards.Display.iW * 0.5 - size.width * 0.5);
			target.target.y = regards.Calc.clamp(target.pointerPos.y, regards.Display.iH * 0.5 + size.height * 0.5, regards.Display.iH - size.height * 0.5);
			createjs.Tween.get(target.target).to({ alpha: 1 }, 350);
		};
		
		this.dPad.callbacks.tickHandler = function(e, target)
		{
			if (target.pointerPos.x > regards.Display.iW * 0.5 || target.pointerPos.y < regards.Display.iH * 0.5)
				return;
			
			if (target.pressed)
			{
				root.inGame.world.player.player.vX += target.deltaX;
				root.inGame.world.player.player.vY += target.deltaY;
				
				target.target.handle.x = target.deltaX;
				target.target.handle.y = target.deltaY;
			}
			else
			{
				target.target.handle.x = regards.Calc.lerp(target.target.handle.x, 0, 0.5);
				target.target.handle.y = regards.Calc.lerp(target.target.handle.y, 0, 0.5);
			}
		};
		
		this.dPad.callbacks.pressUpHandler = function(e, target)
		{
			createjs.Tween.get(target.target).to({ alpha: 0 }, 350);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// art
	this.instance = new lib.Triangle("single",0);
	this.instance.setTransform(-78.1,0,1,1,0,-90,90);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Triangle("single",0);
	this.instance_1.setTransform(78.1,0,1,1,90);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Triangle("single",0);
	this.instance_2.setTransform(0.05,78.1,1,1,0,180,0);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Triangle("single",0);
	this.instance_3.setTransform(0.05,-78.1);
	this.instance_3.alpha = 0.5;

	this.handle = new lib.Handle();
	this.handle.name = "handle";

	this.instance_4 = new lib.Circle("synched",0);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.handle},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DPad, new cjs.Rectangle(-92.8,-92.8,185.7,185.7), null);


(lib.Tile23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Stone("single",0);
	this.instance.setTransform(16,110.25,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone3("single",0);
	this.instance_1.setTransform(112,110.25,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone2("single",0);
	this.instance_2.setTransform(80,110.25,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone1("single",0);
	this.instance_3.setTransform(48,110.25,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.Stone("single",0);
	this.instance_4.setTransform(16,10.3,1,1,0,0,0,0,-0.2);

	this.instance_5 = new lib.Stone3("single",0);
	this.instance_5.setTransform(112,10.25,1,1,0,0,0,0,-0.2);

	this.instance_6 = new lib.Stone2("single",0);
	this.instance_6.setTransform(80,10.25,1,1,0,0,0,0,-0.2);

	this.instance_7 = new lib.Stone1("single",0);
	this.instance_7.setTransform(48,10.25,1,1,0,0,0,0,-0.2);

	this.instance_8 = new lib.FloorTile5("single",0);
	this.instance_8.setTransform(106.4,64);

	this.instance_9 = new lib.FloorTile4("single",0);
	this.instance_9.setTransform(64.4,64);

	this.instance_10 = new lib.FloorTile3("single",0);
	this.instance_10.setTransform(21.5,64);

	this.instance_11 = new lib.FloorTile2("single",0);
	this.instance_11.setTransform(106.5,21.35);

	this.instance_12 = new lib.FloorTile1("single",0);
	this.instance_12.setTransform(64.4,21.35);

	this.instance_13 = new lib.FloorTile("single",0);
	this.instance_13.setTransform(21.5,21.35);

	this.instance_14 = new lib.FloorTile8("single",0);
	this.instance_14.setTransform(106.4,106.65);

	this.instance_15 = new lib.FloorTile7("single",0);
	this.instance_15.setTransform(64.4,106.65);

	this.instance_16 = new lib.FloorTile6("single",0);
	this.instance_16.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.5,128.1,136);


(lib.Tile22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Stone6("single",0);
	this.instance.setTransform(111.45,107.8,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone5("single",0);
	this.instance_1.setTransform(111.45,74.95,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone4("single",0);
	this.instance_2.setTransform(111.45,42.1,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone("single",0);
	this.instance_3.setTransform(16,10.3,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.Stone3("single",0);
	this.instance_4.setTransform(112,10.25,1,1,0,0,0,0,-0.2);

	this.instance_5 = new lib.Stone2("single",0);
	this.instance_5.setTransform(80,10.25,1,1,0,0,0,0,-0.2);

	this.instance_6 = new lib.Stone1("single",0);
	this.instance_6.setTransform(48,10.25,1,1,0,0,0,0,-0.2);

	this.instance_7 = new lib.FloorTile5("single",0);
	this.instance_7.setTransform(106.4,64);

	this.instance_8 = new lib.FloorTile4("single",0);
	this.instance_8.setTransform(64.4,64);

	this.instance_9 = new lib.FloorTile3("single",0);
	this.instance_9.setTransform(21.5,64);

	this.instance_10 = new lib.FloorTile2("single",0);
	this.instance_10.setTransform(106.5,21.35);

	this.instance_11 = new lib.FloorTile1("single",0);
	this.instance_11.setTransform(64.4,21.35);

	this.instance_12 = new lib.FloorTile("single",0);
	this.instance_12.setTransform(21.5,21.35);

	this.instance_13 = new lib.FloorTile8("single",0);
	this.instance_13.setTransform(106.4,106.65);

	this.instance_14 = new lib.FloorTile7("single",0);
	this.instance_14.setTransform(64.4,106.65);

	this.instance_15 = new lib.FloorTile6("single",0);
	this.instance_15.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.5,128.1,135.4);


(lib.Tile21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.FloorTile5("single",0);
	this.instance.setTransform(106.4,64);

	this.instance_1 = new lib.FloorTile4("single",0);
	this.instance_1.setTransform(64.4,64);

	this.instance_2 = new lib.FloorTile3("single",0);
	this.instance_2.setTransform(21.5,64);

	this.instance_3 = new lib.FloorTile2("single",0);
	this.instance_3.setTransform(106.5,21.35);

	this.instance_4 = new lib.FloorTile1("single",0);
	this.instance_4.setTransform(64.4,21.35);

	this.instance_5 = new lib.FloorTile("single",0);
	this.instance_5.setTransform(21.5,21.35);

	this.instance_6 = new lib.FloorTile8("single",0);
	this.instance_6.setTransform(106.4,106.65);

	this.instance_7 = new lib.FloorTile7("single",0);
	this.instance_7.setTransform(64.4,106.65);

	this.instance_8 = new lib.FloorTile6("single",0);
	this.instance_8.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,128,127.80000000000001);


(lib.Tile20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Stone6("single",0);
	this.instance.setTransform(112,109.15,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone5("single",0);
	this.instance_1.setTransform(112,76.3,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone4("single",0);
	this.instance_2.setTransform(112,43.45,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone("single",0);
	this.instance_3.setTransform(112,11.65,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.Stone6("single",0);
	this.instance_4.setTransform(16,109.15,1,1,0,0,0,0,-0.2);

	this.instance_5 = new lib.Stone5("single",0);
	this.instance_5.setTransform(16,76.3,1,1,0,0,0,0,-0.2);

	this.instance_6 = new lib.Stone4("single",0);
	this.instance_6.setTransform(16,43.45,1,1,0,0,0,0,-0.2);

	this.instance_7 = new lib.Stone("single",0);
	this.instance_7.setTransform(16,11.65,1,1,0,0,0,0,-0.2);

	this.instance_8 = new lib.FloorTile5("single",0);
	this.instance_8.setTransform(106.4,64);

	this.instance_9 = new lib.FloorTile4("single",0);
	this.instance_9.setTransform(64.4,64);

	this.instance_10 = new lib.FloorTile3("single",0);
	this.instance_10.setTransform(21.5,64);

	this.instance_11 = new lib.FloorTile2("single",0);
	this.instance_11.setTransform(106.5,21.35);

	this.instance_12 = new lib.FloorTile1("single",0);
	this.instance_12.setTransform(64.4,21.35);

	this.instance_13 = new lib.FloorTile("single",0);
	this.instance_13.setTransform(21.5,21.35);

	this.instance_14 = new lib.FloorTile8("single",0);
	this.instance_14.setTransform(106.4,106.65);

	this.instance_15 = new lib.FloorTile7("single",0);
	this.instance_15.setTransform(64.4,106.65);

	this.instance_16 = new lib.FloorTile6("single",0);
	this.instance_16.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.1,128.1,134);


(lib.Tile19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Stone6("single",0);
	this.instance.setTransform(16,109.15,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone5("single",0);
	this.instance_1.setTransform(16,76.3,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone4("single",0);
	this.instance_2.setTransform(16,43.45,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone("single",0);
	this.instance_3.setTransform(16,11.65,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.FloorTile5("single",0);
	this.instance_4.setTransform(106.4,64);

	this.instance_5 = new lib.FloorTile4("single",0);
	this.instance_5.setTransform(64.4,64);

	this.instance_6 = new lib.FloorTile3("single",0);
	this.instance_6.setTransform(21.5,64);

	this.instance_7 = new lib.FloorTile2("single",0);
	this.instance_7.setTransform(106.5,21.35);

	this.instance_8 = new lib.FloorTile1("single",0);
	this.instance_8.setTransform(64.4,21.35);

	this.instance_9 = new lib.FloorTile("single",0);
	this.instance_9.setTransform(21.5,21.35);

	this.instance_10 = new lib.FloorTile8("single",0);
	this.instance_10.setTransform(106.4,106.65);

	this.instance_11 = new lib.FloorTile7("single",0);
	this.instance_11.setTransform(64.4,106.65);

	this.instance_12 = new lib.FloorTile6("single",0);
	this.instance_12.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.1,128.1,134);


(lib.Tile18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Stone6("single",0);
	this.instance.setTransform(16,110.3,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone5("single",0);
	this.instance_1.setTransform(16,74.95,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone4("single",0);
	this.instance_2.setTransform(16,42.1,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone("single",0);
	this.instance_3.setTransform(16,10.3,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.Stone3("single",0);
	this.instance_4.setTransform(112,110.25,1,1,0,0,0,0,-0.2);

	this.instance_5 = new lib.Stone2("single",0);
	this.instance_5.setTransform(80,110.25,1,1,0,0,0,0,-0.2);

	this.instance_6 = new lib.Stone1("single",0);
	this.instance_6.setTransform(48,110.25,1,1,0,0,0,0,-0.2);

	this.instance_7 = new lib.FloorTile5("single",0);
	this.instance_7.setTransform(106.4,64);

	this.instance_8 = new lib.FloorTile4("single",0);
	this.instance_8.setTransform(64.4,64);

	this.instance_9 = new lib.FloorTile3("single",0);
	this.instance_9.setTransform(21.5,64);

	this.instance_10 = new lib.FloorTile2("single",0);
	this.instance_10.setTransform(106.5,21.35);

	this.instance_11 = new lib.FloorTile1("single",0);
	this.instance_11.setTransform(64.4,21.35);

	this.instance_12 = new lib.FloorTile("single",0);
	this.instance_12.setTransform(21.5,21.35);

	this.instance_13 = new lib.FloorTile8("single",0);
	this.instance_13.setTransform(106.4,106.65);

	this.instance_14 = new lib.FloorTile7("single",0);
	this.instance_14.setTransform(64.4,106.65);

	this.instance_15 = new lib.FloorTile6("single",0);
	this.instance_15.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.5,128.1,136);


(lib.Tile17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Stone("single",0);
	this.instance.setTransform(16,110.25,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone3("single",0);
	this.instance_1.setTransform(112,110.25,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone2("single",0);
	this.instance_2.setTransform(80,110.25,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone1("single",0);
	this.instance_3.setTransform(48,110.25,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.FloorTile5("single",0);
	this.instance_4.setTransform(106.4,64);

	this.instance_5 = new lib.FloorTile4("single",0);
	this.instance_5.setTransform(64.4,64);

	this.instance_6 = new lib.FloorTile3("single",0);
	this.instance_6.setTransform(21.5,64);

	this.instance_7 = new lib.FloorTile2("single",0);
	this.instance_7.setTransform(106.5,21.35);

	this.instance_8 = new lib.FloorTile1("single",0);
	this.instance_8.setTransform(64.4,21.35);

	this.instance_9 = new lib.FloorTile("single",0);
	this.instance_9.setTransform(21.5,21.35);

	this.instance_10 = new lib.FloorTile8("single",0);
	this.instance_10.setTransform(106.4,106.65);

	this.instance_11 = new lib.FloorTile7("single",0);
	this.instance_11.setTransform(64.4,106.65);

	this.instance_12 = new lib.FloorTile6("single",0);
	this.instance_12.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,128.1,128.4);


(lib.Tile16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// art
	this.instance = new lib.Stone6("single",0);
	this.instance.setTransform(16,107.8,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone5("single",0);
	this.instance_1.setTransform(16,74.95,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone4("single",0);
	this.instance_2.setTransform(16,42.1,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone("single",0);
	this.instance_3.setTransform(16,10.3,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.Stone3("single",0);
	this.instance_4.setTransform(112,10.25,1,1,0,0,0,0,-0.2);

	this.instance_5 = new lib.Stone2("single",0);
	this.instance_5.setTransform(80,10.25,1,1,0,0,0,0,-0.2);

	this.instance_6 = new lib.Stone1("single",0);
	this.instance_6.setTransform(48,10.25,1,1,0,0,0,0,-0.2);

	this.instance_7 = new lib.FloorTile5("single",0);
	this.instance_7.setTransform(106.4,64);

	this.instance_8 = new lib.FloorTile4("single",0);
	this.instance_8.setTransform(64.4,64);

	this.instance_9 = new lib.FloorTile3("single",0);
	this.instance_9.setTransform(21.5,64);

	this.instance_10 = new lib.FloorTile2("single",0);
	this.instance_10.setTransform(106.5,21.35);

	this.instance_11 = new lib.FloorTile1("single",0);
	this.instance_11.setTransform(64.4,21.35);

	this.instance_12 = new lib.FloorTile("single",0);
	this.instance_12.setTransform(21.5,21.35);

	this.instance_13 = new lib.FloorTile8("single",0);
	this.instance_13.setTransform(106.4,106.65);

	this.instance_14 = new lib.FloorTile7("single",0);
	this.instance_14.setTransform(64.4,106.65);

	this.instance_15 = new lib.FloorTile6("single",0);
	this.instance_15.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.5,128.1,135.4);


(lib.Tile15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Stone("single",0);
	this.instance.setTransform(16,10.3,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone3("single",0);
	this.instance_1.setTransform(112,10.25,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone2("single",0);
	this.instance_2.setTransform(80,10.25,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone1("single",0);
	this.instance_3.setTransform(48,10.25,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.FloorTile5("single",0);
	this.instance_4.setTransform(106.4,64);

	this.instance_5 = new lib.FloorTile4("single",0);
	this.instance_5.setTransform(64.4,64);

	this.instance_6 = new lib.FloorTile3("single",0);
	this.instance_6.setTransform(21.5,64);

	this.instance_7 = new lib.FloorTile2("single",0);
	this.instance_7.setTransform(106.5,21.35);

	this.instance_8 = new lib.FloorTile1("single",0);
	this.instance_8.setTransform(64.4,21.35);

	this.instance_9 = new lib.FloorTile("single",0);
	this.instance_9.setTransform(21.5,21.35);

	this.instance_10 = new lib.FloorTile8("single",0);
	this.instance_10.setTransform(106.4,106.65);

	this.instance_11 = new lib.FloorTile7("single",0);
	this.instance_11.setTransform(64.4,106.65);

	this.instance_12 = new lib.FloorTile6("single",0);
	this.instance_12.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.5,128.1,135.4);


(lib.Tile14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Stone6("single",0);
	this.instance.setTransform(112,109.15,1,1,0,0,0,0,-0.2);

	this.instance_1 = new lib.Stone5("single",0);
	this.instance_1.setTransform(112,76.3,1,1,0,0,0,0,-0.2);

	this.instance_2 = new lib.Stone4("single",0);
	this.instance_2.setTransform(112,43.45,1,1,0,0,0,0,-0.2);

	this.instance_3 = new lib.Stone("single",0);
	this.instance_3.setTransform(112,11.65,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.FloorTile5("single",0);
	this.instance_4.setTransform(106.4,64);

	this.instance_5 = new lib.FloorTile4("single",0);
	this.instance_5.setTransform(64.4,64);

	this.instance_6 = new lib.FloorTile3("single",0);
	this.instance_6.setTransform(21.5,64);

	this.instance_7 = new lib.FloorTile2("single",0);
	this.instance_7.setTransform(106.5,21.35);

	this.instance_8 = new lib.FloorTile1("single",0);
	this.instance_8.setTransform(64.4,21.35);

	this.instance_9 = new lib.FloorTile("single",0);
	this.instance_9.setTransform(21.5,21.35);

	this.instance_10 = new lib.FloorTile8("single",0);
	this.instance_10.setTransform(106.4,106.65);

	this.instance_11 = new lib.FloorTile7("single",0);
	this.instance_11.setTransform(64.4,106.65);

	this.instance_12 = new lib.FloorTile6("single",0);
	this.instance_12.setTransform(21.5,106.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-6.1,128,134);


(lib.TileMap4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		regards.Body.grounds.push(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiles
	this.instance = new lib.Tile11("synched",0);
	this.instance.setTransform(-384,1987.25);

	this.instance_1 = new lib.Tile11("synched",0);
	this.instance_1.setTransform(-1152,1987.25);

	this.instance_2 = new lib.Tile11("synched",0);
	this.instance_2.setTransform(-1024,1987.25);

	this.instance_3 = new lib.Tile11("synched",0);
	this.instance_3.setTransform(-1280,1987.25);

	this.instance_4 = new lib.Tile11("synched",0);
	this.instance_4.setTransform(-768,1987.25);

	this.instance_5 = new lib.Tile11("synched",0);
	this.instance_5.setTransform(-640,1987.25);

	this.instance_6 = new lib.Tile11("synched",0);
	this.instance_6.setTransform(-512,1987.25);

	this.instance_7 = new lib.Tile11("synched",0);
	this.instance_7.setTransform(-896,1987.25);

	this.instance_8 = new lib.Tile11("synched",0);
	this.instance_8.setTransform(-256,1987.25);

	this.instance_9 = new lib.Tile9("synched",0);
	this.instance_9.setTransform(-384,1859.25);

	this.instance_10 = new lib.Tile9("synched",0);
	this.instance_10.setTransform(-512,1859.25);

	this.instance_11 = new lib.Tile13("synched",0);
	this.instance_11.setTransform(-256,1859.25);

	this.instance_12 = new lib.Tile9("synched",0);
	this.instance_12.setTransform(-640,1859.25);

	this.instance_13 = new lib.Tile9("synched",0);
	this.instance_13.setTransform(-768,1859.25);

	this.instance_14 = new lib.Tile9("synched",0);
	this.instance_14.setTransform(-896,1859.25);

	this.instance_15 = new lib.Tile9("synched",0);
	this.instance_15.setTransform(-1024,1859.25);

	this.instance_16 = new lib.Tile9("synched",0);
	this.instance_16.setTransform(-1152,1859.25);

	this.instance_17 = new lib.Tile3("synched",0);
	this.instance_17.setTransform(-1280,1859.25);

	this.instance_18 = new lib.Tile2("synched",0);
	this.instance_18.setTransform(-320,1795.25);

	this.instance_19 = new lib.Tile2("synched",0);
	this.instance_19.setTransform(-448,1795.25);

	this.instance_20 = new lib.Tile2("synched",0);
	this.instance_20.setTransform(-1088,1795.25);

	this.instance_21 = new lib.Tile2("synched",0);
	this.instance_21.setTransform(-576,1795.25);

	this.instance_22 = new lib.Tile2("synched",0);
	this.instance_22.setTransform(-704,1795.25);

	this.instance_23 = new lib.Tile2("synched",0);
	this.instance_23.setTransform(-832,1795.25);

	this.instance_24 = new lib.Tile2("synched",0);
	this.instance_24.setTransform(-960,1795.25);

	this.instance_25 = new lib.Stairs("synched",0);
	this.instance_25.setTransform(-256,1731.25);

	this.instance_26 = new lib.Tile1("synched",0);
	this.instance_26.setTransform(-1280,1731.25);

	this.instance_27 = new lib.Tile2("synched",0);
	this.instance_27.setTransform(-1088,1667.25);

	this.instance_28 = new lib.Tile2("synched",0);
	this.instance_28.setTransform(-576,1667.25);

	this.instance_29 = new lib.Tile2("synched",0);
	this.instance_29.setTransform(-704,1667.25);

	this.instance_30 = new lib.Tile2("synched",0);
	this.instance_30.setTransform(-832,1667.25);

	this.instance_31 = new lib.Tile2("synched",0);
	this.instance_31.setTransform(-960,1667.25);

	this.instance_32 = new lib.Stairs("synched",0);
	this.instance_32.setTransform(-256,1603.25);

	this.instance_33 = new lib.Tile11("synched",0);
	this.instance_33.setTransform(-512,1603.25);

	this.instance_34 = new lib.Tile11("synched",0);
	this.instance_34.setTransform(-384,1603.25);

	this.instance_35 = new lib.Tile1("synched",0);
	this.instance_35.setTransform(-1280,1603.25);

	this.instance_36 = new lib.Tile2("synched",0);
	this.instance_36.setTransform(-1088,1539.25);

	this.instance_37 = new lib.Tile2("synched",0);
	this.instance_37.setTransform(-576,1539.25);

	this.instance_38 = new lib.Tile2("synched",0);
	this.instance_38.setTransform(-704,1539.25);

	this.instance_39 = new lib.Tile2("synched",0);
	this.instance_39.setTransform(-832,1539.25);

	this.instance_40 = new lib.Tile2("synched",0);
	this.instance_40.setTransform(-960,1539.25);

	this.instance_41 = new lib.Tile23("synched",0);
	this.instance_41.setTransform(-384,1475.25);

	this.instance_42 = new lib.Tile18("synched",0);
	this.instance_42.setTransform(-512,1475.25);

	this.instance_43 = new lib.Tile22("synched",0);
	this.instance_43.setTransform(-256,1475.25);

	this.instance_44 = new lib.Tile1("synched",0);
	this.instance_44.setTransform(-1280,1475.25);

	this.instance_45 = new lib.Tile2("synched",0);
	this.instance_45.setTransform(-1088,1411.25);

	this.instance_46 = new lib.Tile2("synched",0);
	this.instance_46.setTransform(-576,1411.25);

	this.instance_47 = new lib.Tile2("synched",0);
	this.instance_47.setTransform(-704,1411.25);

	this.instance_48 = new lib.Tile2("synched",0);
	this.instance_48.setTransform(-832,1411.25);

	this.instance_49 = new lib.Tile2("synched",0);
	this.instance_49.setTransform(-960,1411.25);

	this.instance_50 = new lib.Tile20("synched",0);
	this.instance_50.setTransform(-512,1347.25);

	this.instance_51 = new lib.Tile1("synched",0);
	this.instance_51.setTransform(-1280,1347.25);

	this.instance_52 = new lib.Tile2("synched",0);
	this.instance_52.setTransform(-1088,1283.25);

	this.instance_53 = new lib.Tile2("synched",0);
	this.instance_53.setTransform(-576,1283.25);

	this.instance_54 = new lib.Tile2("synched",0);
	this.instance_54.setTransform(-704,1283.25);

	this.instance_55 = new lib.Tile2("synched",0);
	this.instance_55.setTransform(-832,1283.25);

	this.instance_56 = new lib.Tile2("synched",0);
	this.instance_56.setTransform(-960,1283.25);

	this.instance_57 = new lib.Tile20("synched",0);
	this.instance_57.setTransform(-512,1219.25);

	this.instance_58 = new lib.Tile1("synched",0);
	this.instance_58.setTransform(-1280,1219.25);

	this.instance_59 = new lib.Tile2("synched",0);
	this.instance_59.setTransform(-1088,1155.25);

	this.instance_60 = new lib.Tile2("synched",0);
	this.instance_60.setTransform(-576,1155.25);

	this.instance_61 = new lib.Tile2("synched",0);
	this.instance_61.setTransform(-704,1155.25);

	this.instance_62 = new lib.Tile2("synched",0);
	this.instance_62.setTransform(-832,1155.25);

	this.instance_63 = new lib.Tile2("synched",0);
	this.instance_63.setTransform(-960,1155.25);

	this.instance_64 = new lib.Tile11("synched",0);
	this.instance_64.setTransform(-384,1091.25);

	this.instance_65 = new lib.Tile11("synched",0);
	this.instance_65.setTransform(-256,1091.25);

	this.instance_66 = new lib.Tile20("synched",0);
	this.instance_66.setTransform(-512,1091.25);

	this.instance_67 = new lib.Tile1("synched",0);
	this.instance_67.setTransform(-1280,1091.25);

	this.instance_68 = new lib.Tile2("synched",0);
	this.instance_68.setTransform(-1088,1027.25);

	this.instance_69 = new lib.Tile2("synched",0);
	this.instance_69.setTransform(-576,1027.25);

	this.instance_70 = new lib.Tile2("synched",0);
	this.instance_70.setTransform(-704,1027.25);

	this.instance_71 = new lib.Tile2("synched",0);
	this.instance_71.setTransform(-832,1027.25);

	this.instance_72 = new lib.Tile2("synched",0);
	this.instance_72.setTransform(-960,1027.25);

	this.instance_73 = new lib.Tile13("synched",0);
	this.instance_73.setTransform(-256,963.25);

	this.instance_74 = new lib.Tile23("synched",0);
	this.instance_74.setTransform(-384,963.25);

	this.instance_75 = new lib.Tile16("synched",0);
	this.instance_75.setTransform(-512,963.25);

	this.instance_76 = new lib.Tile1("synched",0);
	this.instance_76.setTransform(-1280,963.25);

	this.instance_77 = new lib.Tile2("synched",0);
	this.instance_77.setTransform(-320,899.25);

	this.instance_78 = new lib.Tile2("synched",0);
	this.instance_78.setTransform(-448,899.25);

	this.instance_79 = new lib.Tile2("synched",0);
	this.instance_79.setTransform(-576,899.25);

	this.instance_80 = new lib.Tile2("synched",0);
	this.instance_80.setTransform(-704,899.25);

	this.instance_81 = new lib.Tile2("synched",0);
	this.instance_81.setTransform(-832,899.25);

	this.instance_82 = new lib.Tile2("synched",0);
	this.instance_82.setTransform(-960,899.25);

	this.instance_83 = new lib.Tile20("synched",0);
	this.instance_83.setTransform(-256,835.25);

	this.instance_84 = new lib.Tile4("synched",0);
	this.instance_84.setTransform(-1152,835.25);

	this.instance_85 = new lib.Tile0("synched",0);
	this.instance_85.setTransform(-1280,835.25);

	this.instance_86 = new lib.Tile1("synched",0);
	this.instance_86.setTransform(-1024,707.25);

	this.instance_87 = new lib.Tile2("synched",0);
	this.instance_87.setTransform(-320,771.25);

	this.instance_88 = new lib.Tile2("synched",0);
	this.instance_88.setTransform(-448,771.25);

	this.instance_89 = new lib.Tile2("synched",0);
	this.instance_89.setTransform(-576,771.25);

	this.instance_90 = new lib.Tile2("synched",0);
	this.instance_90.setTransform(-704,771.25);

	this.instance_91 = new lib.Tile2("synched",0);
	this.instance_91.setTransform(-832,771.25);

	this.instance_92 = new lib.Tile20("synched",0);
	this.instance_92.setTransform(-256,707.25);

	this.instance_93 = new lib.Tile2("synched",0);
	this.instance_93.setTransform(-320,643.25);

	this.instance_94 = new lib.Tile2("synched",0);
	this.instance_94.setTransform(-448,643.25);

	this.instance_95 = new lib.Tile2("synched",0);
	this.instance_95.setTransform(-576,643.25);

	this.instance_96 = new lib.Tile2("synched",0);
	this.instance_96.setTransform(-704,643.25);

	this.instance_97 = new lib.Tile2("synched",0);
	this.instance_97.setTransform(-832,643.25);

	this.instance_98 = new lib.Tile2("synched",0);
	this.instance_98.setTransform(-960,643.25);

	this.instance_99 = new lib.Tile20("synched",0);
	this.instance_99.setTransform(-256,579.25);

	this.instance_100 = new lib.Tile11("synched",0);
	this.instance_100.setTransform(-1152,579.25);

	this.instance_101 = new lib.Tile2("synched",0);
	this.instance_101.setTransform(-320,515.25);

	this.instance_102 = new lib.Tile2("synched",0);
	this.instance_102.setTransform(-448,515.25);

	this.instance_103 = new lib.Tile2("synched",0);
	this.instance_103.setTransform(-576,515.25);

	this.instance_104 = new lib.Tile2("synched",0);
	this.instance_104.setTransform(-704,515.25);

	this.instance_105 = new lib.Tile2("synched",0);
	this.instance_105.setTransform(-832,515.25);

	this.instance_106 = new lib.Tile2("synched",0);
	this.instance_106.setTransform(-960,515.25);

	this.instance_107 = new lib.Tile20("synched",0);
	this.instance_107.setTransform(-256,451.25);

	this.instance_108 = new lib.Tile8("synched",0);
	this.instance_108.setTransform(-1152,451.25);

	this.instance_109 = new lib.Tile2("synched",0);
	this.instance_109.setTransform(-320,387.25);

	this.instance_110 = new lib.Tile2("synched",0);
	this.instance_110.setTransform(-448,387.25);

	this.instance_111 = new lib.Tile2("synched",0);
	this.instance_111.setTransform(-576,387.25);

	this.instance_112 = new lib.Tile2("synched",0);
	this.instance_112.setTransform(-704,387.25);

	this.instance_113 = new lib.Tile2("synched",0);
	this.instance_113.setTransform(-832,387.25);

	this.instance_114 = new lib.Tile2("synched",0);
	this.instance_114.setTransform(-960,387.25);

	this.instance_115 = new lib.Tile11("synched",0);
	this.instance_115.setTransform(-128,323.25);

	this.instance_116 = new lib.Tile20("synched",0);
	this.instance_116.setTransform(-256,323.25);

	this.instance_117 = new lib.Tile20("synched",0);
	this.instance_117.setTransform(-1152,323.25);

	this.instance_118 = new lib.Tile2("synched",0);
	this.instance_118.setTransform(-320,259.25);

	this.instance_119 = new lib.Tile2("synched",0);
	this.instance_119.setTransform(-448,259.25);

	this.instance_120 = new lib.Tile2("synched",0);
	this.instance_120.setTransform(-576,259.25);

	this.instance_121 = new lib.Tile2("synched",0);
	this.instance_121.setTransform(-704,259.25);

	this.instance_122 = new lib.Tile2("synched",0);
	this.instance_122.setTransform(-832,259.25);

	this.instance_123 = new lib.Tile13("synched",0);
	this.instance_123.setTransform(-128,195.25);

	this.instance_124 = new lib.Tile16("synched",0);
	this.instance_124.setTransform(-256,195.25);

	this.instance_125 = new lib.Tile2("synched",0);
	this.instance_125.setTransform(-960,259.25);

	this.instance_126 = new lib.Tile6("synched",0);
	this.instance_126.setTransform(-1152,195.25);

	this.instance_127 = new lib.Tile11("synched",0);
	this.instance_127.setTransform(-640,67.25);

	this.instance_128 = new lib.Tile11("synched",0);
	this.instance_128.setTransform(-512,67.25);

	this.instance_129 = new lib.Tile11("synched",0);
	this.instance_129.setTransform(-1024,67.25);

	this.instance_130 = new lib.Door("synched",0);
	this.instance_130.setTransform(-896,67.25);

	this.instance_131 = new lib.Tile11("synched",0);
	this.instance_131.setTransform(-384,67.25);

	this.instance_132 = new lib.Tile11("synched",0);
	this.instance_132.setTransform(-768,67.25);

	this.instance_133 = new lib.Tile11("synched",0);
	this.instance_133.setTransform(-1152,67.25);

	this.instance_134 = new lib.Tile20("synched",0);
	this.instance_134.setTransform(-128,67.25);

	this.instance_135 = new lib.Tile23("synched",0);
	this.instance_135.setTransform(-640,-60.75);

	this.instance_136 = new lib.Tile23("synched",0);
	this.instance_136.setTransform(-512,-60.75);

	this.instance_137 = new lib.Tile23("synched",0);
	this.instance_137.setTransform(-1024,-60.75);

	this.instance_138 = new lib.Tile23("synched",0);
	this.instance_138.setTransform(-896,-60.75);

	this.instance_139 = new lib.Tile13("synched",0);
	this.instance_139.setTransform(-384,-60.75);

	this.instance_140 = new lib.Tile23("synched",0);
	this.instance_140.setTransform(-768,-60.75);

	this.instance_141 = new lib.Tile18("synched",0);
	this.instance_141.setTransform(-1152,-60.75);

	this.instance_142 = new lib.Tile20("synched",0);
	this.instance_142.setTransform(-128,-60.75);

	this.instance_143 = new lib.Tile20("synched",0);
	this.instance_143.setTransform(-384,-188.75);

	this.instance_144 = new lib.Tile20("synched",0);
	this.instance_144.setTransform(-1152,-188.75);

	this.instance_145 = new lib.Tile20("synched",0);
	this.instance_145.setTransform(-128,-188.75);

	this.instance_146 = new lib.Tile11("synched",0);
	this.instance_146.setTransform(-640,-316.75);

	this.instance_147 = new lib.Tile11("synched",0);
	this.instance_147.setTransform(-512,-316.75);

	this.instance_148 = new lib.Tile20("synched",0);
	this.instance_148.setTransform(-384,-316.75);

	this.instance_149 = new lib.Tile20("synched",0);
	this.instance_149.setTransform(-1152,-316.75);

	this.instance_150 = new lib.Tile11("synched",0);
	this.instance_150.setTransform(-1024,-316.75);

	this.instance_151 = new lib.Tile11("synched",0);
	this.instance_151.setTransform(-896,-316.75);

	this.instance_152 = new lib.Tile11("synched",0);
	this.instance_152.setTransform(-768,-316.75);

	this.instance_153 = new lib.Tile20("synched",0);
	this.instance_153.setTransform(-128,-316.75);

	this.instance_154 = new lib.Tile23("synched",0);
	this.instance_154.setTransform(-640,-444.75);

	this.instance_155 = new lib.Tile23("synched",0);
	this.instance_155.setTransform(-512,-444.75);

	this.instance_156 = new lib.Tile23("synched",0);
	this.instance_156.setTransform(-1024,-444.75);

	this.instance_157 = new lib.Tile23("synched",0);
	this.instance_157.setTransform(-896,-444.75);

	this.instance_158 = new lib.Tile22("synched",0);
	this.instance_158.setTransform(-384,-444.75);

	this.instance_159 = new lib.Tile23("synched",0);
	this.instance_159.setTransform(-768,-444.75);

	this.instance_160 = new lib.Tile16("synched",0);
	this.instance_160.setTransform(-1152,-444.75);

	this.instance_161 = new lib.Tile20("synched",0);
	this.instance_161.setTransform(-128,-444.75);

	this.instance_162 = new lib.Tile20("synched",0);
	this.instance_162.setTransform(-128,-572.75);

	this.instance_163 = new lib.Tile11("synched",0);
	this.instance_163.setTransform(-384,-700.75);

	this.instance_164 = new lib.Tile20("synched",0);
	this.instance_164.setTransform(-128,-700.75);

	this.instance_165 = new lib.Tile11("synched",0);
	this.instance_165.setTransform(-256,-700.75);

	this.instance_166 = new lib.Tile18("synched",0);
	this.instance_166.setTransform(-384,-828.75);

	this.instance_167 = new lib.Tile17("synched",0);
	this.instance_167.setTransform(-256,-828.75);

	this.instance_168 = new lib.Tile14("synched",0);
	this.instance_168.setTransform(-128,-828.75);

	this.instance_169 = new lib.Tile19("synched",0);
	this.instance_169.setTransform(-384,-956.75);

	this.instance_170 = new lib.Tile21("synched",0);
	this.instance_170.setTransform(-256,-956.75);

	this.instance_171 = new lib.Tile14("synched",0);
	this.instance_171.setTransform(-128,-956.75);

	this.instance_172 = new lib.Tile11("synched",0);
	this.instance_172.setTransform(768,-956.75);

	this.instance_173 = new lib.Tile11("synched",0);
	this.instance_173.setTransform(896,-956.75);

	this.instance_174 = new lib.Tile11("synched",0);
	this.instance_174.setTransform(1024,-956.75);

	this.instance_175 = new lib.Tile11("synched",0);
	this.instance_175.setTransform(384,-956.75);

	this.instance_176 = new lib.Tile11("synched",0);
	this.instance_176.setTransform(512,-956.75);

	this.instance_177 = new lib.Tile11("synched",0);
	this.instance_177.setTransform(640,-956.75);

	this.instance_178 = new lib.Tile11("synched",0);
	this.instance_178.setTransform(128,-956.75);

	this.instance_179 = new lib.Tile11("synched",0);
	this.instance_179.setTransform(256,-956.75);

	this.instance_180 = new lib.Tile11("synched",0);
	this.instance_180.setTransform(-768,-956.75);

	this.instance_181 = new lib.Tile11("synched",0);
	this.instance_181.setTransform(-640,-956.75);

	this.instance_182 = new lib.Tile11("synched",0);
	this.instance_182.setTransform(-1152,-956.75);

	this.instance_183 = new lib.Tile11("synched",0);
	this.instance_183.setTransform(-1024,-956.75);

	this.instance_184 = new lib.Tile11("synched",0);
	this.instance_184.setTransform(1152,-956.75);

	this.instance_185 = new lib.Tile11("synched",0);
	this.instance_185.setTransform(-896,-956.75);

	this.instance_186 = new lib.Tile11("synched",0);
	this.instance_186.setTransform(-1280,-956.75);

	this.instance_187 = new lib.Tile19("synched",0);
	this.instance_187.setTransform(-384,-1084.75);

	this.instance_188 = new lib.Tile21("synched",0);
	this.instance_188.setTransform(-256,-1084.75);

	this.instance_189 = new lib.Tile14("synched",0);
	this.instance_189.setTransform(-128,-1084.75);

	this.instance_190 = new lib.Tile23("synched",0);
	this.instance_190.setTransform(768,-1084.75);

	this.instance_191 = new lib.Tile23("synched",0);
	this.instance_191.setTransform(896,-1084.75);

	this.instance_192 = new lib.Tile23("synched",0);
	this.instance_192.setTransform(1024,-1084.75);

	this.instance_193 = new lib.Tile23("synched",0);
	this.instance_193.setTransform(384,-1084.75);

	this.instance_194 = new lib.Tile23("synched",0);
	this.instance_194.setTransform(512,-1084.75);

	this.instance_195 = new lib.Tile23("synched",0);
	this.instance_195.setTransform(640,-1084.75);

	this.instance_196 = new lib.Tile25("synched",0);
	this.instance_196.setTransform(128,-1084.75);

	this.instance_197 = new lib.Tile23("synched",0);
	this.instance_197.setTransform(256,-1084.75);

	this.instance_198 = new lib.Tile23("synched",0);
	this.instance_198.setTransform(-768,-1084.75);

	this.instance_199 = new lib.Tile24("synched",0);
	this.instance_199.setTransform(-640,-1084.75);

	this.instance_200 = new lib.Tile23("synched",0);
	this.instance_200.setTransform(-1152,-1084.75);

	this.instance_201 = new lib.Tile23("synched",0);
	this.instance_201.setTransform(-1024,-1084.75);

	this.instance_202 = new lib.Tile13("synched",0);
	this.instance_202.setTransform(1152,-1084.75);

	this.instance_203 = new lib.Tile23("synched",0);
	this.instance_203.setTransform(-896,-1084.75);

	this.instance_204 = new lib.Tile18("synched",0);
	this.instance_204.setTransform(-1280,-1084.75);

	this.instance_205 = new lib.Tile19("synched",0);
	this.instance_205.setTransform(-384,-1212.75);

	this.instance_206 = new lib.Tile21("synched",0);
	this.instance_206.setTransform(-256,-1212.75);

	this.instance_207 = new lib.Tile14("synched",0);
	this.instance_207.setTransform(-128,-1212.75);

	this.instance_208 = new lib.Tile20("synched",0);
	this.instance_208.setTransform(1152,-1212.75);

	this.instance_209 = new lib.Tile20("synched",0);
	this.instance_209.setTransform(-1280,-1212.75);

	this.instance_210 = new lib.Tile11("synched",0);
	this.instance_210.setTransform(384,-1340.75);

	this.instance_211 = new lib.Tile11("synched",0);
	this.instance_211.setTransform(512,-1340.75);

	this.instance_212 = new lib.Tile11("synched",0);
	this.instance_212.setTransform(640,-1340.75);

	this.instance_213 = new lib.Tile11("synched",0);
	this.instance_213.setTransform(0,-1340.75);

	this.instance_214 = new lib.Tile11("synched",0);
	this.instance_214.setTransform(128,-1340.75);

	this.instance_215 = new lib.Tile11("synched",0);
	this.instance_215.setTransform(256,-1340.75);

	this.instance_216 = new lib.Tile11("synched",0);
	this.instance_216.setTransform(768,-1340.75);

	this.instance_217 = new lib.Tile11("synched",0);
	this.instance_217.setTransform(-512,-1340.75);

	this.instance_218 = new lib.Tile19("synched",0);
	this.instance_218.setTransform(-384,-1340.75);

	this.instance_219 = new lib.Tile21("synched",0);
	this.instance_219.setTransform(-256,-1340.75);

	this.instance_220 = new lib.Tile11("synched",0);
	this.instance_220.setTransform(-896,-1340.75);

	this.instance_221 = new lib.Tile11("synched",0);
	this.instance_221.setTransform(-768,-1340.75);

	this.instance_222 = new lib.Tile11("synched",0);
	this.instance_222.setTransform(-640,-1340.75);

	this.instance_223 = new lib.Tile14("synched",0);
	this.instance_223.setTransform(-128,-1340.75);

	this.instance_224 = new lib.Tile20("synched",0);
	this.instance_224.setTransform(1152,-1340.75);

	this.instance_225 = new lib.Tile20("synched",0);
	this.instance_225.setTransform(-1280,-1340.75);

	this.instance_226 = new lib.Tile17("synched",0);
	this.instance_226.setTransform(640,-1468.75);

	this.instance_227 = new lib.Tile17("synched",0);
	this.instance_227.setTransform(512,-1468.75);

	this.instance_228 = new lib.Tile17("synched",0);
	this.instance_228.setTransform(384,-1468.75);

	this.instance_229 = new lib.Tile17("synched",0);
	this.instance_229.setTransform(256,-1468.75);

	this.instance_230 = new lib.Tile13("synched",0);
	this.instance_230.setTransform(768,-1468.75);

	this.instance_231 = new lib.Tile17("synched",0);
	this.instance_231.setTransform(128,-1468.75);

	this.instance_232 = new lib.Tile17("synched",0);
	this.instance_232.setTransform(0,-1468.75);

	this.instance_233 = new lib.Tile21("synched",0);
	this.instance_233.setTransform(-256,-1468.75);

	this.instance_234 = new lib.Tile21("synched",0);
	this.instance_234.setTransform(-384,-1468.75);

	this.instance_235 = new lib.Tile17("synched",0);
	this.instance_235.setTransform(-512,-1468.75);

	this.instance_236 = new lib.Tile17("synched",0);
	this.instance_236.setTransform(-640,-1468.75);

	this.instance_237 = new lib.Tile21("synched",0);
	this.instance_237.setTransform(-128,-1468.75);

	this.instance_238 = new lib.Tile17("synched",0);
	this.instance_238.setTransform(-768,-1468.75);

	this.instance_239 = new lib.Tile18("synched",0);
	this.instance_239.setTransform(-896,-1468.75);

	this.instance_240 = new lib.Tile20("synched",0);
	this.instance_240.setTransform(1152,-1468.75);

	this.instance_241 = new lib.Tile20("synched",0);
	this.instance_241.setTransform(-1280,-1468.75);

	this.instance_242 = new lib.Tile21("synched",0);
	this.instance_242.setTransform(640,-1596.75);

	this.instance_243 = new lib.Tile21("synched",0);
	this.instance_243.setTransform(512,-1596.75);

	this.instance_244 = new lib.Tile21("synched",0);
	this.instance_244.setTransform(384,-1596.75);

	this.instance_245 = new lib.Tile21("synched",0);
	this.instance_245.setTransform(256,-1596.75);

	this.instance_246 = new lib.Tile14("synched",0);
	this.instance_246.setTransform(768,-1596.75);

	this.instance_247 = new lib.Tile21("synched",0);
	this.instance_247.setTransform(128,-1596.75);

	this.instance_248 = new lib.Tile21("synched",0);
	this.instance_248.setTransform(0,-1596.75);

	this.instance_249 = new lib.Tile21("synched",0);
	this.instance_249.setTransform(-256,-1596.75);

	this.instance_250 = new lib.Tile21("synched",0);
	this.instance_250.setTransform(-384,-1596.75);

	this.instance_251 = new lib.Tile21("synched",0);
	this.instance_251.setTransform(-512,-1596.75);

	this.instance_252 = new lib.Tile21("synched",0);
	this.instance_252.setTransform(-640,-1596.75);

	this.instance_253 = new lib.Tile21("synched",0);
	this.instance_253.setTransform(-128,-1596.75);

	this.instance_254 = new lib.Tile21("synched",0);
	this.instance_254.setTransform(-768,-1596.75);

	this.instance_255 = new lib.Tile19("synched",0);
	this.instance_255.setTransform(-896,-1596.75);

	this.instance_256 = new lib.Tile20("synched",0);
	this.instance_256.setTransform(1152,-1596.75);

	this.instance_257 = new lib.Tile20("synched",0);
	this.instance_257.setTransform(-1280,-1596.75);

	this.instance_258 = new lib.Tile21("synched",0);
	this.instance_258.setTransform(640,-1724.75);

	this.instance_259 = new lib.Tile21("synched",0);
	this.instance_259.setTransform(512,-1724.75);

	this.instance_260 = new lib.Tile21("synched",0);
	this.instance_260.setTransform(384,-1724.75);

	this.instance_261 = new lib.Tile21("synched",0);
	this.instance_261.setTransform(0,-1724.75);

	this.instance_262 = new lib.Tile21("synched",0);
	this.instance_262.setTransform(256,-1724.75);

	this.instance_263 = new lib.Tile14("synched",0);
	this.instance_263.setTransform(768,-1724.75);

	this.instance_264 = new lib.Tile21("synched",0);
	this.instance_264.setTransform(128,-1724.75);

	this.instance_265 = new lib.Tile21("synched",0);
	this.instance_265.setTransform(-256,-1724.75);

	this.instance_266 = new lib.Tile21("synched",0);
	this.instance_266.setTransform(-384,-1724.75);

	this.instance_267 = new lib.Tile21("synched",0);
	this.instance_267.setTransform(-512,-1724.75);

	this.instance_268 = new lib.Tile19("synched",0);
	this.instance_268.setTransform(-896,-1724.75);

	this.instance_269 = new lib.Tile21("synched",0);
	this.instance_269.setTransform(-640,-1724.75);

	this.instance_270 = new lib.Tile21("synched",0);
	this.instance_270.setTransform(-128,-1724.75);

	this.instance_271 = new lib.Tile21("synched",0);
	this.instance_271.setTransform(-768,-1724.75);

	this.instance_272 = new lib.Tile20("synched",0);
	this.instance_272.setTransform(1152,-1724.75);

	this.instance_273 = new lib.Tile20("synched",0);
	this.instance_273.setTransform(-1280,-1724.75);

	this.instance_274 = new lib.Tile22("synched",0);
	this.instance_274.setTransform(768,-1852.75);

	this.instance_275 = new lib.Tile15("synched",0);
	this.instance_275.setTransform(640,-1852.75);

	this.instance_276 = new lib.Tile15("synched",0);
	this.instance_276.setTransform(384,-1852.75);

	this.instance_277 = new lib.Tile15("synched",0);
	this.instance_277.setTransform(512,-1852.75);

	this.instance_278 = new lib.Tile15("synched",0);
	this.instance_278.setTransform(0,-1852.75);

	this.instance_279 = new lib.Tile15("synched",0);
	this.instance_279.setTransform(128,-1852.75);

	this.instance_280 = new lib.Tile15("synched",0);
	this.instance_280.setTransform(256,-1852.75);

	this.instance_281 = new lib.Tile15("synched",0);
	this.instance_281.setTransform(-128,-1852.75);

	this.instance_282 = new lib.Tile15("synched",0);
	this.instance_282.setTransform(-256,-1852.75);

	this.instance_283 = new lib.Tile15("synched",0);
	this.instance_283.setTransform(-512,-1852.75);

	this.instance_284 = new lib.Tile15("synched",0);
	this.instance_284.setTransform(-384,-1852.75);

	this.instance_285 = new lib.Tile16("synched",0);
	this.instance_285.setTransform(-896,-1852.75);

	this.instance_286 = new lib.Tile15("synched",0);
	this.instance_286.setTransform(-768,-1852.75);

	this.instance_287 = new lib.Tile15("synched",0);
	this.instance_287.setTransform(-640,-1852.75);

	this.instance_288 = new lib.Tile20("synched",0);
	this.instance_288.setTransform(1152,-1852.75);

	this.instance_289 = new lib.Tile20("synched",0);
	this.instance_289.setTransform(-1280,-1852.75);

	this.instance_290 = new lib.Tile11("synched",0);
	this.instance_290.setTransform(1024,-1980.75);

	this.instance_291 = new lib.Tile11("synched",0);
	this.instance_291.setTransform(896,-1980.75);

	this.instance_292 = new lib.Tile11("synched",0);
	this.instance_292.setTransform(768,-1980.75);

	this.instance_293 = new lib.Tile11("synched",0);
	this.instance_293.setTransform(640,-1980.75);

	this.instance_294 = new lib.Tile11("synched",0);
	this.instance_294.setTransform(256,-1980.75);

	this.instance_295 = new lib.Tile11("synched",0);
	this.instance_295.setTransform(384,-1980.75);

	this.instance_296 = new lib.Tile11("synched",0);
	this.instance_296.setTransform(512,-1980.75);

	this.instance_297 = new lib.Tile11("synched",0);
	this.instance_297.setTransform(-128,-1980.75);

	this.instance_298 = new lib.Tile11("synched",0);
	this.instance_298.setTransform(0,-1980.75);

	this.instance_299 = new lib.Tile11("synched",0);
	this.instance_299.setTransform(128,-1980.75);

	this.instance_300 = new lib.Tile20("synched",0);
	this.instance_300.setTransform(1152,-1980.75);

	this.instance_301 = new lib.Tile11("synched",0);
	this.instance_301.setTransform(-256,-1980.75);

	this.instance_302 = new lib.Tile11("synched",0);
	this.instance_302.setTransform(-384,-1980.75);

	this.instance_303 = new lib.Tile11("synched",0);
	this.instance_303.setTransform(-768,-1980.75);

	this.instance_304 = new lib.Tile11("synched",0);
	this.instance_304.setTransform(-640,-1980.75);

	this.instance_305 = new lib.Tile11("synched",0);
	this.instance_305.setTransform(-512,-1980.75);

	this.instance_306 = new lib.Tile20("synched",0);
	this.instance_306.setTransform(-1280,-1980.75);

	this.instance_307 = new lib.Tile11("synched",0);
	this.instance_307.setTransform(-1152,-1980.75);

	this.instance_308 = new lib.Tile11("synched",0);
	this.instance_308.setTransform(-1024,-1980.75);

	this.instance_309 = new lib.Tile11("synched",0);
	this.instance_309.setTransform(-896,-1980.75);

	this.instance_310 = new lib.Tile23("synched",0);
	this.instance_310.setTransform(1024,-2108.75);

	this.instance_311 = new lib.Tile23("synched",0);
	this.instance_311.setTransform(896,-2108.75);

	this.instance_312 = new lib.Tile23("synched",0);
	this.instance_312.setTransform(768,-2108.75);

	this.instance_313 = new lib.Tile23("synched",0);
	this.instance_313.setTransform(640,-2108.75);

	this.instance_314 = new lib.Tile23("synched",0);
	this.instance_314.setTransform(256,-2108.75);

	this.instance_315 = new lib.Tile23("synched",0);
	this.instance_315.setTransform(384,-2108.75);

	this.instance_316 = new lib.Tile23("synched",0);
	this.instance_316.setTransform(512,-2108.75);

	this.instance_317 = new lib.Tile23("synched",0);
	this.instance_317.setTransform(-128,-2108.75);

	this.instance_318 = new lib.Tile23("synched",0);
	this.instance_318.setTransform(0,-2108.75);

	this.instance_319 = new lib.Tile23("synched",0);
	this.instance_319.setTransform(128,-2108.75);

	this.instance_320 = new lib.Tile23("synched",0);
	this.instance_320.setTransform(-256,-2108.75);

	this.instance_321 = new lib.Tile23("synched",0);
	this.instance_321.setTransform(-384,-2108.75);

	this.instance_322 = new lib.Tile23("synched",0);
	this.instance_322.setTransform(-768,-2108.75);

	this.instance_323 = new lib.Tile23("synched",0);
	this.instance_323.setTransform(-640,-2108.75);

	this.instance_324 = new lib.Tile23("synched",0);
	this.instance_324.setTransform(-512,-2108.75);

	this.instance_325 = new lib.Tile23("synched",0);
	this.instance_325.setTransform(-1152,-2108.75);

	this.instance_326 = new lib.Tile23("synched",0);
	this.instance_326.setTransform(-1024,-2108.75);

	this.instance_327 = new lib.Tile22("synched",0);
	this.instance_327.setTransform(1152,-2108.75);

	this.instance_328 = new lib.Tile23("synched",0);
	this.instance_328.setTransform(-896,-2108.75);

	this.instance_329 = new lib.Tile16("synched",0);
	this.instance_329.setTransform(-1280,-2108.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_329},{t:this.instance_328},{t:this.instance_327},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.instance_319},{t:this.instance_318},{t:this.instance_317},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.instance_311},{t:this.instance_310},{t:this.instance_309},{t:this.instance_308},{t:this.instance_307},{t:this.instance_306},{t:this.instance_305},{t:this.instance_304},{t:this.instance_303},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TileMap4, new cjs.Rectangle(-1281,-2116.2,2562,4232.5), null);


(lib.TileMap3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		regards.Body.grounds.push(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiles
	this.instance = new lib.Tile11("synched",0);
	this.instance.setTransform(-896,387.25);

	this.instance_1 = new lib.Tile11("synched",0);
	this.instance_1.setTransform(-768,387.25);

	this.instance_2 = new lib.Tile11("synched",0);
	this.instance_2.setTransform(-640,387.25);

	this.instance_3 = new lib.Tile11("synched",0);
	this.instance_3.setTransform(-512,387.25);

	this.instance_4 = new lib.Tile11("synched",0);
	this.instance_4.setTransform(768,259.25);

	this.instance_5 = new lib.Tile11("synched",0);
	this.instance_5.setTransform(384,259.25);

	this.instance_6 = new lib.Tile11("synched",0);
	this.instance_6.setTransform(512,259.25);

	this.instance_7 = new lib.Tile11("synched",0);
	this.instance_7.setTransform(640,259.25);

	this.instance_8 = new lib.Tile11("synched",0);
	this.instance_8.setTransform(0,259.25);

	this.instance_9 = new lib.Tile11("synched",0);
	this.instance_9.setTransform(128,259.25);

	this.instance_10 = new lib.Tile11("synched",0);
	this.instance_10.setTransform(256,259.25);

	this.instance_11 = new lib.Tile11("synched",0);
	this.instance_11.setTransform(-384,259.25);

	this.instance_12 = new lib.Tile11("synched",0);
	this.instance_12.setTransform(-256,259.25);

	this.instance_13 = new lib.Tile11("synched",0);
	this.instance_13.setTransform(-128,259.25);

	this.instance_14 = new lib.Tile17("synched",0);
	this.instance_14.setTransform(-640,259.25);

	this.instance_15 = new lib.Tile13("synched",0);
	this.instance_15.setTransform(-512,259.25);

	this.instance_16 = new lib.Tile17("synched",0);
	this.instance_16.setTransform(-768,259.25);

	this.instance_17 = new lib.Tile18("synched",0);
	this.instance_17.setTransform(-896,259.25);

	this.instance_18 = new lib.Tile13("synched",0);
	this.instance_18.setTransform(768,131.25);

	this.instance_19 = new lib.Tile21("synched",0);
	this.instance_19.setTransform(640,131.25);

	this.instance_20 = new lib.Tile17("synched",0);
	this.instance_20.setTransform(512,131.25);

	this.instance_21 = new lib.Tile17("synched",0);
	this.instance_21.setTransform(384,131.25);

	this.instance_22 = new lib.Tile17("synched",0);
	this.instance_22.setTransform(256,131.25);

	this.instance_23 = new lib.Tile17("synched",0);
	this.instance_23.setTransform(128,131.25);

	this.instance_24 = new lib.Tile17("synched",0);
	this.instance_24.setTransform(0,131.25);

	this.instance_25 = new lib.Tile17("synched",0);
	this.instance_25.setTransform(-128,131.25);

	this.instance_26 = new lib.Tile17("synched",0);
	this.instance_26.setTransform(-256,131.25);

	this.instance_27 = new lib.Tile17("synched",0);
	this.instance_27.setTransform(-384,131.25);

	this.instance_28 = new lib.Tile21("synched",0);
	this.instance_28.setTransform(-512,131.25);

	this.instance_29 = new lib.Tile21("synched",0);
	this.instance_29.setTransform(-640,131.25);

	this.instance_30 = new lib.Tile21("synched",0);
	this.instance_30.setTransform(-768,131.25);

	this.instance_31 = new lib.Tile19("synched",0);
	this.instance_31.setTransform(-896,131.25);

	this.instance_32 = new lib.Tile12("synched",0);
	this.instance_32.setTransform(-256,3.25);

	this.instance_33 = new lib.Tile12("synched",0);
	this.instance_33.setTransform(-384,3.25);

	this.instance_34 = new lib.Tile12("synched",0);
	this.instance_34.setTransform(-640,3.25);

	this.instance_35 = new lib.Door("synched",0);
	this.instance_35.setTransform(-768,3.25);

	this.instance_36 = new lib.Tile12("synched",0);
	this.instance_36.setTransform(-896,3.25);

	this.instance_37 = new lib.Tile12("synched",0);
	this.instance_37.setTransform(-512,3.25);

	this.instance_38 = new lib.Tile12("synched",0);
	this.instance_38.setTransform(-128,3.25);

	this.instance_39 = new lib.Tile22("synched",0);
	this.instance_39.setTransform(768,3.25);

	this.instance_40 = new lib.Tile15("synched",0);
	this.instance_40.setTransform(640,3.25);

	this.instance_41 = new lib.Tile15("synched",0);
	this.instance_41.setTransform(512,3.25);

	this.instance_42 = new lib.Tile15("synched",0);
	this.instance_42.setTransform(384,3.25);

	this.instance_43 = new lib.Tile15("synched",0);
	this.instance_43.setTransform(256,3.25);

	this.instance_44 = new lib.Tile15("synched",0);
	this.instance_44.setTransform(0,3.25);

	this.instance_45 = new lib.Tile15("synched",0);
	this.instance_45.setTransform(128,3.25);

	this.instance_46 = new lib.Tile17("synched",0);
	this.instance_46.setTransform(-256,-124.75);

	this.instance_47 = new lib.Tile17("synched",0);
	this.instance_47.setTransform(-384,-124.75);

	this.instance_48 = new lib.Tile17("synched",0);
	this.instance_48.setTransform(-512,-124.75);

	this.instance_49 = new lib.Tile17("synched",0);
	this.instance_49.setTransform(-640,-124.75);

	this.instance_50 = new lib.Tile13("synched",0);
	this.instance_50.setTransform(-128,-124.75);

	this.instance_51 = new lib.Tile17("synched",0);
	this.instance_51.setTransform(-768,-124.75);

	this.instance_52 = new lib.Tile18("synched",0);
	this.instance_52.setTransform(-896,-124.75);

	this.instance_53 = new lib.Tile21("synched",0);
	this.instance_53.setTransform(-256,-252.75);

	this.instance_54 = new lib.Tile21("synched",0);
	this.instance_54.setTransform(-384,-252.75);

	this.instance_55 = new lib.Tile21("synched",0);
	this.instance_55.setTransform(-512,-252.75);

	this.instance_56 = new lib.Tile21("synched",0);
	this.instance_56.setTransform(-640,-252.75);

	this.instance_57 = new lib.Tile21("synched",0);
	this.instance_57.setTransform(-768,-252.75);

	this.instance_58 = new lib.Tile14("synched",0);
	this.instance_58.setTransform(-128,-252.75);

	this.instance_59 = new lib.Tile19("synched",0);
	this.instance_59.setTransform(-896,-252.75);

	this.instance_60 = new lib.Tile21("synched",0);
	this.instance_60.setTransform(-384,-380.75);

	this.instance_61 = new lib.Tile21("synched",0);
	this.instance_61.setTransform(-512,-380.75);

	this.instance_62 = new lib.Tile21("synched",0);
	this.instance_62.setTransform(-256,-380.75);

	this.instance_63 = new lib.Tile21("synched",0);
	this.instance_63.setTransform(-640,-380.75);

	this.instance_64 = new lib.Tile14("synched",0);
	this.instance_64.setTransform(-128,-380.75);

	this.instance_65 = new lib.Tile21("synched",0);
	this.instance_65.setTransform(-768,-380.75);

	this.instance_66 = new lib.Tile19("synched",0);
	this.instance_66.setTransform(-896,-380.75);

	this.instance_67 = new lib.Tile15("synched",0);
	this.instance_67.setTransform(-256,-508.75);

	this.instance_68 = new lib.Tile15("synched",0);
	this.instance_68.setTransform(-384,-508.75);

	this.instance_69 = new lib.Tile15("synched",0);
	this.instance_69.setTransform(-512,-508.75);

	this.instance_70 = new lib.Tile15("synched",0);
	this.instance_70.setTransform(-640,-508.75);

	this.instance_71 = new lib.Tile22("synched",0);
	this.instance_71.setTransform(-128,-508.75);

	this.instance_72 = new lib.Tile16("synched",0);
	this.instance_72.setTransform(-896,-508.75);

	this.instance_73 = new lib.Tile15("synched",0);
	this.instance_73.setTransform(-768,-508.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TileMap3, new cjs.Rectangle(-897,-516.2,1794,1032.5), null);


(lib.TileMap2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		regards.Body.grounds.push(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiles
	this.instance = new lib.Tile11("synched",0);
	this.instance.setTransform(-320,1155.25);

	this.instance_1 = new lib.Tile11("synched",0);
	this.instance_1.setTransform(-576,1155.25);

	this.instance_2 = new lib.Tile11("synched",0);
	this.instance_2.setTransform(-448,1155.25);

	this.instance_3 = new lib.Tile11("synched",0);
	this.instance_3.setTransform(-960,1155.25);

	this.instance_4 = new lib.Tile11("synched",0);
	this.instance_4.setTransform(-832,1155.25);

	this.instance_5 = new lib.Tile11("synched",0);
	this.instance_5.setTransform(-704,1155.25);

	this.instance_6 = new lib.Tile11("synched",0);
	this.instance_6.setTransform(-192,1155.25);

	this.instance_7 = new lib.Tile21("synched",0);
	this.instance_7.setTransform(-320,1027.25);

	this.instance_8 = new lib.Tile17("synched",0);
	this.instance_8.setTransform(-448,1027.25);

	this.instance_9 = new lib.Tile17("synched",0);
	this.instance_9.setTransform(-576,1027.25);

	this.instance_10 = new lib.Tile17("synched",0);
	this.instance_10.setTransform(-704,1027.25);

	this.instance_11 = new lib.Tile13("synched",0);
	this.instance_11.setTransform(-192,1027.25);

	this.instance_12 = new lib.Tile17("synched",0);
	this.instance_12.setTransform(-832,1027.25);

	this.instance_13 = new lib.Tile18("synched",0);
	this.instance_13.setTransform(-960,1027.25);

	this.instance_14 = new lib.Tile21("synched",0);
	this.instance_14.setTransform(-320,899.25);

	this.instance_15 = new lib.Tile21("synched",0);
	this.instance_15.setTransform(-704,899.25);

	this.instance_16 = new lib.Tile15("synched",0);
	this.instance_16.setTransform(-448,899.25);

	this.instance_17 = new lib.Tile21("synched",0);
	this.instance_17.setTransform(-576,899.25);

	this.instance_18 = new lib.Tile14("synched",0);
	this.instance_18.setTransform(-192,899.25);

	this.instance_19 = new lib.Tile21("synched",0);
	this.instance_19.setTransform(-832,899.25);

	this.instance_20 = new lib.Tile19("synched",0);
	this.instance_20.setTransform(-960,899.25);

	this.instance_21 = new lib.Tile15("synched",0);
	this.instance_21.setTransform(-704,771.25);

	this.instance_22 = new lib.Tile21("synched",0);
	this.instance_22.setTransform(-832,771.25);

	this.instance_23 = new lib.Tile22("synched",0);
	this.instance_23.setTransform(-192,771.25);

	this.instance_24 = new lib.Tile16("synched",0);
	this.instance_24.setTransform(-320,771.25);

	this.instance_25 = new lib.Tile22("synched",0);
	this.instance_25.setTransform(-576,771.25);

	this.instance_26 = new lib.Tile16("synched",0);
	this.instance_26.setTransform(-960,771.25);

	this.instance_27 = new lib.Bridge1("synched",0);
	this.instance_27.setTransform(-832,643.25);

	this.instance_28 = new lib.Bridge1("synched",0);
	this.instance_28.setTransform(-832,515.25);

	this.instance_29 = new lib.Bridge1("synched",0);
	this.instance_29.setTransform(-832,387.25);

	this.instance_30 = new lib.Tile11("synched",0);
	this.instance_30.setTransform(-704,387.25);

	this.instance_31 = new lib.Tile11("synched",0);
	this.instance_31.setTransform(-960,387.25);

	this.instance_32 = new lib.Tile21("synched",0);
	this.instance_32.setTransform(-832,259.25);

	this.instance_33 = new lib.Tile18("synched",0);
	this.instance_33.setTransform(-960,259.25);

	this.instance_34 = new lib.Tile13("synched",0);
	this.instance_34.setTransform(-704,259.25);

	this.instance_35 = new lib.Tile21("synched",0);
	this.instance_35.setTransform(-832,131.25);

	this.instance_36 = new lib.Tile14("synched",0);
	this.instance_36.setTransform(-704,131.25);

	this.instance_37 = new lib.Tile19("synched",0);
	this.instance_37.setTransform(-960,131.25);

	this.instance_38 = new lib.Tile21("synched",0);
	this.instance_38.setTransform(-832,3.25);

	this.instance_39 = new lib.Tile14("synched",0);
	this.instance_39.setTransform(-704,3.25);

	this.instance_40 = new lib.Tile19("synched",0);
	this.instance_40.setTransform(-960,3.25);

	this.instance_41 = new lib.Tile21("synched",0);
	this.instance_41.setTransform(-832,-124.75);

	this.instance_42 = new lib.Tile14("synched",0);
	this.instance_42.setTransform(-704,-124.75);

	this.instance_43 = new lib.Tile19("synched",0);
	this.instance_43.setTransform(-960,-124.75);

	this.instance_44 = new lib.Tile21("synched",0);
	this.instance_44.setTransform(-832,-252.75);

	this.instance_45 = new lib.Tile14("synched",0);
	this.instance_45.setTransform(-704,-252.75);

	this.instance_46 = new lib.Tile19("synched",0);
	this.instance_46.setTransform(-960,-252.75);

	this.instance_47 = new lib.Tile21("synched",0);
	this.instance_47.setTransform(-832,-380.75);

	this.instance_48 = new lib.Tile14("synched",0);
	this.instance_48.setTransform(-704,-380.75);

	this.instance_49 = new lib.Tile19("synched",0);
	this.instance_49.setTransform(-960,-380.75);

	this.instance_50 = new lib.Tile21("synched",0);
	this.instance_50.setTransform(-832,-508.75);

	this.instance_51 = new lib.Tile14("synched",0);
	this.instance_51.setTransform(-704,-508.75);

	this.instance_52 = new lib.Tile19("synched",0);
	this.instance_52.setTransform(-960,-508.75);

	this.instance_53 = new lib.Tile16("synched",0);
	this.instance_53.setTransform(-960,-636.75);

	this.instance_54 = new lib.Tile21("synched",0);
	this.instance_54.setTransform(-832,-636.75);

	this.instance_55 = new lib.Tile22("synched",0);
	this.instance_55.setTransform(-704,-636.75);

	this.instance_56 = new lib.Bridge1("synched",0);
	this.instance_56.setTransform(-832,-764.75);

	this.instance_57 = new lib.Tile11("synched",0);
	this.instance_57.setTransform(704,-764.75);

	this.instance_58 = new lib.Tile11("synched",0);
	this.instance_58.setTransform(832,-764.75);

	this.instance_59 = new lib.Tile11("synched",0);
	this.instance_59.setTransform(960,-764.75);

	this.instance_60 = new lib.Tile11("synched",0);
	this.instance_60.setTransform(320,-764.75);

	this.instance_61 = new lib.Tile11("synched",0);
	this.instance_61.setTransform(448,-764.75);

	this.instance_62 = new lib.Tile11("synched",0);
	this.instance_62.setTransform(576,-764.75);

	this.instance_63 = new lib.Tile11("synched",0);
	this.instance_63.setTransform(1088,-764.75);

	this.instance_64 = new lib.Tile11("synched",0);
	this.instance_64.setTransform(-704,-764.75);

	this.instance_65 = new lib.Tile11("synched",0);
	this.instance_65.setTransform(-576,-764.75);

	this.instance_66 = new lib.Tile11("synched",0);
	this.instance_66.setTransform(-320,-764.75);

	this.instance_67 = new lib.Tile11("synched",0);
	this.instance_67.setTransform(-448,-764.75);

	this.instance_68 = new lib.Tile11("synched",0);
	this.instance_68.setTransform(-832,-764.75);

	this.instance_69 = new lib.Tile11("synched",0);
	this.instance_69.setTransform(-1088,-764.75);

	this.instance_70 = new lib.Tile11("synched",0);
	this.instance_70.setTransform(-1216,-764.75);

	this.instance_71 = new lib.Bridge("synched",0);
	this.instance_71.setTransform(-960,-892.75);

	this.instance_72 = new lib.Tile17("synched",0);
	this.instance_72.setTransform(960,-892.75);

	this.instance_73 = new lib.Tile17("synched",0);
	this.instance_73.setTransform(832,-892.75);

	this.instance_74 = new lib.Tile17("synched",0);
	this.instance_74.setTransform(704,-892.75);

	this.instance_75 = new lib.Tile17("synched",0);
	this.instance_75.setTransform(576,-892.75);

	this.instance_76 = new lib.Tile13("synched",0);
	this.instance_76.setTransform(1088,-892.75);

	this.instance_77 = new lib.Tile17("synched",0);
	this.instance_77.setTransform(448,-892.75);

	this.instance_78 = new lib.Tile18("synched",0);
	this.instance_78.setTransform(320,-892.75);

	this.instance_79 = new lib.Tile23("synched",0);
	this.instance_79.setTransform(-704,-892.75);

	this.instance_80 = new lib.Tile23("synched",0);
	this.instance_80.setTransform(-576,-892.75);

	this.instance_81 = new lib.Tile13("synched",0);
	this.instance_81.setTransform(-320,-892.75);

	this.instance_82 = new lib.Tile23("synched",0);
	this.instance_82.setTransform(-448,-892.75);

	this.instance_83 = new lib.Tile21("synched",0);
	this.instance_83.setTransform(-832,-892.75);

	this.instance_84 = new lib.Tile17("synched",0);
	this.instance_84.setTransform(-1088,-892.75);

	this.instance_85 = new lib.Tile18("synched",0);
	this.instance_85.setTransform(-1216,-892.75);

	this.instance_86 = new lib.Tile21("synched",0);
	this.instance_86.setTransform(960,-1020.75);

	this.instance_87 = new lib.Tile21("synched",0);
	this.instance_87.setTransform(832,-1020.75);

	this.instance_88 = new lib.Tile21("synched",0);
	this.instance_88.setTransform(704,-1020.75);

	this.instance_89 = new lib.Tile21("synched",0);
	this.instance_89.setTransform(576,-1020.75);

	this.instance_90 = new lib.Tile14("synched",0);
	this.instance_90.setTransform(1088,-1020.75);

	this.instance_91 = new lib.Tile21("synched",0);
	this.instance_91.setTransform(448,-1020.75);

	this.instance_92 = new lib.Tile19("synched",0);
	this.instance_92.setTransform(320,-1020.75);

	this.instance_93 = new lib.Tile11("synched",0);
	this.instance_93.setTransform(192,-1020.75);

	this.instance_94 = new lib.Tile11("synched",0);
	this.instance_94.setTransform(64,-1020.75);

	this.instance_95 = new lib.Tile11("synched",0);
	this.instance_95.setTransform(-64,-1020.75);

	this.instance_96 = new lib.Tile11("synched",0);
	this.instance_96.setTransform(-192,-1020.75);

	this.instance_97 = new lib.Tile20("synched",0);
	this.instance_97.setTransform(-320,-1020.75);

	this.instance_98 = new lib.Tile20("synched",0);
	this.instance_98.setTransform(-832,-1020.75);

	this.instance_99 = new lib.Tile14("synched",0);
	this.instance_99.setTransform(-1088,-1020.75);

	this.instance_100 = new lib.Tile19("synched",0);
	this.instance_100.setTransform(-1216,-1020.75);

	this.instance_101 = new lib.Tile21("synched",0);
	this.instance_101.setTransform(960,-1148.75);

	this.instance_102 = new lib.Tile21("synched",0);
	this.instance_102.setTransform(832,-1148.75);

	this.instance_103 = new lib.Tile21("synched",0);
	this.instance_103.setTransform(704,-1148.75);

	this.instance_104 = new lib.Tile21("synched",0);
	this.instance_104.setTransform(320,-1148.75);

	this.instance_105 = new lib.Tile21("synched",0);
	this.instance_105.setTransform(576,-1148.75);

	this.instance_106 = new lib.Tile14("synched",0);
	this.instance_106.setTransform(1088,-1148.75);

	this.instance_107 = new lib.Tile21("synched",0);
	this.instance_107.setTransform(448,-1148.75);

	this.instance_108 = new lib.Tile23("synched",0);
	this.instance_108.setTransform(192,-1148.75);

	this.instance_109 = new lib.Tile23("synched",0);
	this.instance_109.setTransform(64,-1148.75);

	this.instance_110 = new lib.Tile23("synched",0);
	this.instance_110.setTransform(-64,-1148.75);

	this.instance_111 = new lib.Tile23("synched",0);
	this.instance_111.setTransform(-192,-1148.75);

	this.instance_112 = new lib.Tile19("synched",0);
	this.instance_112.setTransform(-320,-1148.75);

	this.instance_113 = new lib.Tile20("synched",0);
	this.instance_113.setTransform(-832,-1148.75);

	this.instance_114 = new lib.Tile11("synched",0);
	this.instance_114.setTransform(-704,-1148.75);

	this.instance_115 = new lib.Tile11("synched",0);
	this.instance_115.setTransform(-576,-1148.75);

	this.instance_116 = new lib.Tile11("synched",0);
	this.instance_116.setTransform(-448,-1148.75);

	this.instance_117 = new lib.Tile14("synched",0);
	this.instance_117.setTransform(-1088,-1148.75);

	this.instance_118 = new lib.Tile19("synched",0);
	this.instance_118.setTransform(-1216,-1148.75);

	this.instance_119 = new lib.Tile22("synched",0);
	this.instance_119.setTransform(1088,-1276.75);

	this.instance_120 = new lib.Tile15("synched",0);
	this.instance_120.setTransform(960,-1276.75);

	this.instance_121 = new lib.Tile21("synched",0);
	this.instance_121.setTransform(704,-1276.75);

	this.instance_122 = new lib.Tile15("synched",0);
	this.instance_122.setTransform(832,-1276.75);

	this.instance_123 = new lib.Tile16("synched",0);
	this.instance_123.setTransform(320,-1276.75);

	this.instance_124 = new lib.Tile15("synched",0);
	this.instance_124.setTransform(448,-1276.75);

	this.instance_125 = new lib.Tile15("synched",0);
	this.instance_125.setTransform(576,-1276.75);

	this.instance_126 = new lib.Tile23("synched",0);
	this.instance_126.setTransform(-704,-1276.75);

	this.instance_127 = new lib.Tile23("synched",0);
	this.instance_127.setTransform(-576,-1276.75);

	this.instance_128 = new lib.Tile22("synched",0);
	this.instance_128.setTransform(-320,-1276.75);

	this.instance_129 = new lib.Tile23("synched",0);
	this.instance_129.setTransform(-448,-1276.75);

	this.instance_130 = new lib.Tile16("synched",0);
	this.instance_130.setTransform(-832,-1276.75);

	this.instance_131 = new lib.Tile22("synched",0);
	this.instance_131.setTransform(-1088,-1276.75);

	this.instance_132 = new lib.Tile16("synched",0);
	this.instance_132.setTransform(-1216,-1276.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TileMap2, new cjs.Rectangle(-1217,-1284.2,2434,2568.5), null);


(lib.TileMap1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		regards.Body.grounds.push(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiles
	this.instance = new lib.Tile11("synched",0);
	this.instance.setTransform(-192,899.25);

	this.instance_1 = new lib.Tile11("synched",0);
	this.instance_1.setTransform(-64,899.25);

	this.instance_2 = new lib.Tile11("synched",0);
	this.instance_2.setTransform(192,899.25);

	this.instance_3 = new lib.Tile11("synched",0);
	this.instance_3.setTransform(64,899.25);

	this.instance_4 = new lib.Tile11("synched",0);
	this.instance_4.setTransform(-320,899.25);

	this.instance_5 = new lib.Tile13("synched",0);
	this.instance_5.setTransform(192,771.25);

	this.instance_6 = new lib.Tile17("synched",0);
	this.instance_6.setTransform(-192,771.25);

	this.instance_7 = new lib.Tile17("synched",0);
	this.instance_7.setTransform(-64,771.25);

	this.instance_8 = new lib.Tile17("synched",0);
	this.instance_8.setTransform(64,771.25);

	this.instance_9 = new lib.Tile18("synched",0);
	this.instance_9.setTransform(-320,771.25);

	this.instance_10 = new lib.Tile21("synched",0);
	this.instance_10.setTransform(-64,643.25);

	this.instance_11 = new lib.Tile14("synched",0);
	this.instance_11.setTransform(192,643.25);

	this.instance_12 = new lib.Tile21("synched",0);
	this.instance_12.setTransform(64,643.25);

	this.instance_13 = new lib.Tile21("synched",0);
	this.instance_13.setTransform(-192,643.25);

	this.instance_14 = new lib.Tile11("synched",0);
	this.instance_14.setTransform(320,643.25);

	this.instance_15 = new lib.Tile19("synched",0);
	this.instance_15.setTransform(-320,643.25);

	this.instance_16 = new lib.Tile11("synched",0);
	this.instance_16.setTransform(448,515.25);

	this.instance_17 = new lib.Tile21("synched",0);
	this.instance_17.setTransform(-64,515.25);

	this.instance_18 = new lib.Tile21("synched",0);
	this.instance_18.setTransform(192,515.25);

	this.instance_19 = new lib.Tile21("synched",0);
	this.instance_19.setTransform(64,515.25);

	this.instance_20 = new lib.Tile21("synched",0);
	this.instance_20.setTransform(-192,515.25);

	this.instance_21 = new lib.Tile13("synched",0);
	this.instance_21.setTransform(320,515.25);

	this.instance_22 = new lib.Tile19("synched",0);
	this.instance_22.setTransform(-320,515.25);

	this.instance_23 = new lib.Tile13("synched",0);
	this.instance_23.setTransform(448,387.25);

	this.instance_24 = new lib.Tile21("synched",0);
	this.instance_24.setTransform(-192,387.25);

	this.instance_25 = new lib.Tile21("synched",0);
	this.instance_25.setTransform(-64,387.25);

	this.instance_26 = new lib.Tile21("synched",0);
	this.instance_26.setTransform(64,387.25);

	this.instance_27 = new lib.Tile21("synched",0);
	this.instance_27.setTransform(192,387.25);

	this.instance_28 = new lib.Tile21("synched",0);
	this.instance_28.setTransform(320,387.25);

	this.instance_29 = new lib.Tile19("synched",0);
	this.instance_29.setTransform(-320,387.25);

	this.instance_30 = new lib.Tile14("synched",0);
	this.instance_30.setTransform(448,259.25);

	this.instance_31 = new lib.Tile21("synched",0);
	this.instance_31.setTransform(320,259.25);

	this.instance_32 = new lib.Tile21("synched",0);
	this.instance_32.setTransform(-192,259.25);

	this.instance_33 = new lib.Tile19("synched",0);
	this.instance_33.setTransform(-320,259.25);

	this.instance_34 = new lib.Tile10("synched",0);
	this.instance_34.setTransform(192,259.25);

	this.instance_35 = new lib.Tile9("synched",0);
	this.instance_35.setTransform(64,259.25);

	this.instance_36 = new lib.Tile3("synched",0);
	this.instance_36.setTransform(-64,259.25);

	this.instance_37 = new lib.Tile11("synched",0);
	this.instance_37.setTransform(-576,131.25);

	this.instance_38 = new lib.Tile8("synched",0);
	this.instance_38.setTransform(64,131.25);

	this.instance_39 = new lib.Tile14("synched",0);
	this.instance_39.setTransform(448,131.25);

	this.instance_40 = new lib.Tile21("synched",0);
	this.instance_40.setTransform(320,131.25);

	this.instance_41 = new lib.Tile21("synched",0);
	this.instance_41.setTransform(-192,131.25);

	this.instance_42 = new lib.Tile19("synched",0);
	this.instance_42.setTransform(-320,131.25);

	this.instance_43 = new lib.Tile7("synched",0);
	this.instance_43.setTransform(192,131.25);

	this.instance_44 = new lib.Tile1("synched",0);
	this.instance_44.setTransform(-64,131.25);

	this.instance_45 = new lib.Tile8("synched",0);
	this.instance_45.setTransform(-576,3.25);

	this.instance_46 = new lib.Tile6("synched",0);
	this.instance_46.setTransform(64,3.25);

	this.instance_47 = new lib.Tile21("synched",0);
	this.instance_47.setTransform(320,3.25);

	this.instance_48 = new lib.Tile21("synched",0);
	this.instance_48.setTransform(-192,3.25);

	this.instance_49 = new lib.Tile19("synched",0);
	this.instance_49.setTransform(-320,3.25);

	this.instance_50 = new lib.Tile14("synched",0);
	this.instance_50.setTransform(448,3.25);

	this.instance_51 = new lib.Tile7("synched",0);
	this.instance_51.setTransform(192,3.25);

	this.instance_52 = new lib.Tile1("synched",0);
	this.instance_52.setTransform(-64,3.25);

	this.instance_53 = new lib.Tile6("synched",0);
	this.instance_53.setTransform(-576,-124.75);

	this.instance_54 = new lib.Tile22("synched",0);
	this.instance_54.setTransform(448,-124.75);

	this.instance_55 = new lib.Tile21("synched",0);
	this.instance_55.setTransform(320,-124.75);

	this.instance_56 = new lib.Tile21("synched",0);
	this.instance_56.setTransform(-192,-124.75);

	this.instance_57 = new lib.Tile19("synched",0);
	this.instance_57.setTransform(-320,-124.75);

	this.instance_58 = new lib.Tile5("synched",0);
	this.instance_58.setTransform(192,-124.75);

	this.instance_59 = new lib.Tile4("synched",0);
	this.instance_59.setTransform(64,-124.75);

	this.instance_60 = new lib.Tile0("synched",0);
	this.instance_60.setTransform(-64,-124.75);

	this.instance_61 = new lib.Tile14("synched",0);
	this.instance_61.setTransform(320,-252.75);

	this.instance_62 = new lib.Tile21("synched",0);
	this.instance_62.setTransform(192,-252.75);

	this.instance_63 = new lib.Tile21("synched",0);
	this.instance_63.setTransform(64,-252.75);

	this.instance_64 = new lib.Tile21("synched",0);
	this.instance_64.setTransform(-64,-252.75);

	this.instance_65 = new lib.Tile21("synched",0);
	this.instance_65.setTransform(-192,-252.75);

	this.instance_66 = new lib.Tile19("synched",0);
	this.instance_66.setTransform(-320,-252.75);

	this.instance_67 = new lib.Tile15("synched",0);
	this.instance_67.setTransform(192,-380.75);

	this.instance_68 = new lib.Tile15("synched",0);
	this.instance_68.setTransform(64,-380.75);

	this.instance_69 = new lib.Tile15("synched",0);
	this.instance_69.setTransform(-64,-380.75);

	this.instance_70 = new lib.Tile15("synched",0);
	this.instance_70.setTransform(-192,-380.75);

	this.instance_71 = new lib.Tile16("synched",0);
	this.instance_71.setTransform(-320,-380.75);

	this.instance_72 = new lib.Stairs("synched",0);
	this.instance_72.setTransform(320,-380.75);

	this.instance_73 = new lib.Tile11("synched",0);
	this.instance_73.setTransform(-320,-508.75);

	this.instance_74 = new lib.Tile11("synched",0);
	this.instance_74.setTransform(-192,-508.75);

	this.instance_75 = new lib.Tile11("synched",0);
	this.instance_75.setTransform(-448,-508.75);

	this.instance_76 = new lib.Tile11("synched",0);
	this.instance_76.setTransform(-64,-508.75);

	this.instance_77 = new lib.Tile11("synched",0);
	this.instance_77.setTransform(64,-508.75);

	this.instance_78 = new lib.Tile11("synched",0);
	this.instance_78.setTransform(192,-508.75);

	this.instance_79 = new lib.Stairs("synched",0);
	this.instance_79.setTransform(320,-508.75);

	this.instance_80 = new lib.Bridge("synched",0);
	this.instance_80.setTransform(-576,-636.75);

	this.instance_81 = new lib.Tile17("synched",0);
	this.instance_81.setTransform(-320,-636.75);

	this.instance_82 = new lib.Tile17("synched",0);
	this.instance_82.setTransform(-448,-636.75);

	this.instance_83 = new lib.Tile23("synched",0);
	this.instance_83.setTransform(-192,-636.75);

	this.instance_84 = new lib.Tile14("synched",0);
	this.instance_84.setTransform(320,-636.75);

	this.instance_85 = new lib.Tile23("synched",0);
	this.instance_85.setTransform(-64,-636.75);

	this.instance_86 = new lib.Tile23("synched",0);
	this.instance_86.setTransform(64,-636.75);

	this.instance_87 = new lib.Tile23("synched",0);
	this.instance_87.setTransform(192,-636.75);

	this.instance_88 = new lib.Tile14("synched",0);
	this.instance_88.setTransform(-320,-764.75);

	this.instance_89 = new lib.Tile19("synched",0);
	this.instance_89.setTransform(-448,-764.75);

	this.instance_90 = new lib.Tile20("synched",0);
	this.instance_90.setTransform(320,-764.75);

	this.instance_91 = new lib.Tile14("synched",0);
	this.instance_91.setTransform(-320,-892.75);

	this.instance_92 = new lib.Tile19("synched",0);
	this.instance_92.setTransform(-448,-892.75);

	this.instance_93 = new lib.Tile20("synched",0);
	this.instance_93.setTransform(320,-892.75);

	this.instance_94 = new lib.Tile20("synched",0);
	this.instance_94.setTransform(320,-1020.75);

	this.instance_95 = new lib.Tile22("synched",0);
	this.instance_95.setTransform(-320,-1020.75);

	this.instance_96 = new lib.Tile16("synched",0);
	this.instance_96.setTransform(-448,-1020.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TileMap1, new cjs.Rectangle(-577,-1028.2,1154,2056.5), null);


(lib.TileMap0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		regards.Body.grounds.push(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiles
	this.instance = new lib.Tile17("synched",0);
	this.instance.setTransform(-191.5,323.25);

	this.instance_1 = new lib.Tile18("synched",0);
	this.instance_1.setTransform(-319.5,323.25);

	this.instance_2 = new lib.Tile17("synched",0);
	this.instance_2.setTransform(-63.5,323.25);

	this.instance_3 = new lib.Tile13("synched",0);
	this.instance_3.setTransform(64.5,323.25);

	this.instance_4 = new lib.Tile18("synched",0);
	this.instance_4.setTransform(448.5,323.25);

	this.instance_5 = new lib.Tile17("synched",0);
	this.instance_5.setTransform(576.5,323.25);

	this.instance_6 = new lib.Tile13("synched",0);
	this.instance_6.setTransform(704.5,323.25);

	this.instance_7 = new lib.Tile11("synched",0);
	this.instance_7.setTransform(832.5,323.25);

	this.instance_8 = new lib.Tile19("synched",0);
	this.instance_8.setTransform(-319.5,195.25);

	this.instance_9 = new lib.Tile21("synched",0);
	this.instance_9.setTransform(-63.5,195.25);

	this.instance_10 = new lib.Tile14("synched",0);
	this.instance_10.setTransform(64.5,195.25);

	this.instance_11 = new lib.Tile21("synched",0);
	this.instance_11.setTransform(-191.5,195.25);

	this.instance_12 = new lib.Tile21("synched",0);
	this.instance_12.setTransform(704.5,195.25);

	this.instance_13 = new lib.Tile21("synched",0);
	this.instance_13.setTransform(576.5,195.25);

	this.instance_14 = new lib.Tile19("synched",0);
	this.instance_14.setTransform(448.5,195.25);

	this.instance_15 = new lib.Bridge("synched",0);
	this.instance_15.setTransform(960.5,195.25);

	this.instance_16 = new lib.Tile17("synched",0);
	this.instance_16.setTransform(832.5,195.25);

	this.instance_17 = new lib.Tile19("synched",0);
	this.instance_17.setTransform(-319.5,67.25);

	this.instance_18 = new lib.Tile11("synched",0);
	this.instance_18.setTransform(192.5,67.25);

	this.instance_19 = new lib.Tile21("synched",0);
	this.instance_19.setTransform(-63.5,67.25);

	this.instance_20 = new lib.Tile14("synched",0);
	this.instance_20.setTransform(64.5,67.25);

	this.instance_21 = new lib.Tile21("synched",0);
	this.instance_21.setTransform(-191.5,67.25);

	this.instance_22 = new lib.Tile21("synched",0);
	this.instance_22.setTransform(704.5,67.25);

	this.instance_23 = new lib.Tile21("synched",0);
	this.instance_23.setTransform(576.5,67.25);

	this.instance_24 = new lib.Tile19("synched",0);
	this.instance_24.setTransform(448.5,67.25);

	this.instance_25 = new lib.Tile22("synched",0);
	this.instance_25.setTransform(832.5,67.25);

	this.instance_26 = new lib.Tile11("synched",0);
	this.instance_26.setTransform(320.5,67.25);

	this.instance_27 = new lib.Tile17("synched",0);
	this.instance_27.setTransform(192.5,-60.75);

	this.instance_28 = new lib.Tile17("synched",0);
	this.instance_28.setTransform(320.5,-60.75);

	this.instance_29 = new lib.Tile21("synched",0);
	this.instance_29.setTransform(448.5,-60.75);

	this.instance_30 = new lib.Tile15("synched",0);
	this.instance_30.setTransform(576.5,-60.75);

	this.instance_31 = new lib.Tile22("synched",0);
	this.instance_31.setTransform(704.5,-60.75);

	this.instance_32 = new lib.Tile16("synched",0);
	this.instance_32.setTransform(-319.5,-60.75);

	this.instance_33 = new lib.Tile15("synched",0);
	this.instance_33.setTransform(-191.5,-60.75);

	this.instance_34 = new lib.Tile15("synched",0);
	this.instance_34.setTransform(-63.5,-60.75);

	this.instance_35 = new lib.Tile21("synched",0);
	this.instance_35.setTransform(64.5,-60.75);

	this.instance_36 = new lib.Tile23("synched",0);
	this.instance_36.setTransform(-959.5,-188.75);

	this.instance_37 = new lib.Tile23("synched",0);
	this.instance_37.setTransform(-831.5,-188.75);

	this.instance_38 = new lib.Tile13("synched",0);
	this.instance_38.setTransform(-575.5,-188.75);

	this.instance_39 = new lib.Tile23("synched",0);
	this.instance_39.setTransform(-703.5,-188.75);

	this.instance_40 = new lib.Tile18("synched",0);
	this.instance_40.setTransform(-1087.5,-188.75);

	this.instance_41 = new lib.Tile14("synched",0);
	this.instance_41.setTransform(448.5,-188.75);

	this.instance_42 = new lib.Tile21("synched",0);
	this.instance_42.setTransform(320.5,-188.75);

	this.instance_43 = new lib.Tile21("synched",0);
	this.instance_43.setTransform(192.5,-188.75);

	this.instance_44 = new lib.Tile19("synched",0);
	this.instance_44.setTransform(64.5,-188.75);

	this.instance_45 = new lib.Tile11("synched",0);
	this.instance_45.setTransform(-63.5,-316.75);

	this.instance_46 = new lib.Tile11("synched",0);
	this.instance_46.setTransform(-191.5,-316.75);

	this.instance_47 = new lib.Tile11("synched",0);
	this.instance_47.setTransform(-319.5,-316.75);

	this.instance_48 = new lib.Tile11("synched",0);
	this.instance_48.setTransform(-447.5,-316.75);

	this.instance_49 = new lib.Tile20("synched",0);
	this.instance_49.setTransform(-575.5,-316.75);

	this.instance_50 = new lib.Tile20("synched",0);
	this.instance_50.setTransform(-1087.5,-316.75);

	this.instance_51 = new lib.Tile21("synched",0);
	this.instance_51.setTransform(320.5,-316.75);

	this.instance_52 = new lib.Tile21("synched",0);
	this.instance_52.setTransform(192.5,-316.75);

	this.instance_53 = new lib.Tile19("synched",0);
	this.instance_53.setTransform(64.5,-316.75);

	this.instance_54 = new lib.Tile14("synched",0);
	this.instance_54.setTransform(448.5,-316.75);

	this.instance_55 = new lib.Tile19("synched",0);
	this.instance_55.setTransform(-575.5,-444.75);

	this.instance_56 = new lib.Tile21("synched",0);
	this.instance_56.setTransform(64.5,-444.75);

	this.instance_57 = new lib.Tile23("synched",0);
	this.instance_57.setTransform(-63.5,-444.75);

	this.instance_58 = new lib.Tile23("synched",0);
	this.instance_58.setTransform(-191.5,-444.75);

	this.instance_59 = new lib.Tile23("synched",0);
	this.instance_59.setTransform(-319.5,-444.75);

	this.instance_60 = new lib.Tile23("synched",0);
	this.instance_60.setTransform(-447.5,-444.75);

	this.instance_61 = new lib.Tile20("synched",0);
	this.instance_61.setTransform(-1087.5,-444.75);

	this.instance_62 = new lib.Tile11("synched",0);
	this.instance_62.setTransform(-959.5,-444.75);

	this.instance_63 = new lib.Tile11("synched",0);
	this.instance_63.setTransform(-831.5,-444.75);

	this.instance_64 = new lib.Tile11("synched",0);
	this.instance_64.setTransform(-703.5,-444.75);

	this.instance_65 = new lib.Tile21("synched",0);
	this.instance_65.setTransform(320.5,-444.75);

	this.instance_66 = new lib.Tile21("synched",0);
	this.instance_66.setTransform(192.5,-444.75);

	this.instance_67 = new lib.Tile14("synched",0);
	this.instance_67.setTransform(448.5,-444.75);

	this.instance_68 = new lib.Tile23("synched",0);
	this.instance_68.setTransform(-959.5,-572.75);

	this.instance_69 = new lib.Tile23("synched",0);
	this.instance_69.setTransform(-831.5,-572.75);

	this.instance_70 = new lib.Tile22("synched",0);
	this.instance_70.setTransform(-575.5,-572.75);

	this.instance_71 = new lib.Tile23("synched",0);
	this.instance_71.setTransform(-703.5,-572.75);

	this.instance_72 = new lib.Tile16("synched",0);
	this.instance_72.setTransform(-1087.5,-572.75);

	this.instance_73 = new lib.Tile16("synched",0);
	this.instance_73.setTransform(64.5,-572.75);

	this.instance_74 = new lib.Tile15("synched",0);
	this.instance_74.setTransform(192.5,-572.75);

	this.instance_75 = new lib.Tile15("synched",0);
	this.instance_75.setTransform(320.5,-572.75);

	this.instance_76 = new lib.Tile22("synched",0);
	this.instance_76.setTransform(448.5,-572.75);

	this.instance_77 = new lib.Tile11("synched",0);
	this.instance_77.setTransform(-959.5,-60.75);

	this.instance_78 = new lib.Tile11("synched",0);
	this.instance_78.setTransform(-831.5,-60.75);

	this.instance_79 = new lib.Tile11("synched",0);
	this.instance_79.setTransform(-575.5,-60.75);

	this.instance_80 = new lib.Tile11("synched",0);
	this.instance_80.setTransform(-703.5,-60.75);

	this.instance_81 = new lib.Tile11("synched",0);
	this.instance_81.setTransform(-1087.5,-60.75);

	this.instance_82 = new lib.Tile11("synched",0);
	this.instance_82.setTransform(-319.5,451.25);

	this.instance_83 = new lib.Tile11("synched",0);
	this.instance_83.setTransform(-191.5,451.25);

	this.instance_84 = new lib.Tile11("synched",0);
	this.instance_84.setTransform(-63.5,451.25);

	this.instance_85 = new lib.Tile11("synched",0);
	this.instance_85.setTransform(704.5,451.25);

	this.instance_86 = new lib.Tile11("synched",0);
	this.instance_86.setTransform(64.5,451.25);

	this.instance_87 = new lib.Tile11("synched",0);
	this.instance_87.setTransform(448.5,451.25);

	this.instance_88 = new lib.Tile11("synched",0);
	this.instance_88.setTransform(576.5,451.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TileMap0, new cjs.Rectangle(-1088.5,-580.2,2177.5,1160.5), null);


// stage content:
(lib.not_so_dungeon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {company:0,intro:1,menu:2,inGame:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		root = this;
		
		root.config =
		{
			controls:
			{
				player:
				{
					left:  "ArrowLeft",
					right: "ArrowRight",
					up:    "ArrowUp",
					down:  "ArrowDown",
				}
			}
		};
		
		root.main = () =>
		{
			document.querySelector(".progress").remove();
			anim_container.style.display = "initial";
			document.body.style.backgroundColor = lib.properties.color;
			root.stop();
			regards.setup({ lib, root, showFPS: true });
			//root.gotoAndStop("menu");
			
			document.addEventListener("visibilitychange", e =>
			{
			  if (document.visibilityState === "visible")
			  {
				  console.log("tab is active");
				  createjs.Sound.muted = false;
				  regards.root.framerate = lib.properties.fps;
			  }
			  else
			  {
				  console.log("tab is inactive");
				  createjs.Sound.muted = true;
				  regards.root.framerate = 0;
			  }		
			});
		};
		
		root.resizeHandler = e =>
		{
			regards.UI.pos(root.jc, 0.5, 0.5);
			regards.UI.autoScale(root.jc);
			regards.UI.clamp(root.jc, [ "scaleX", "scaleY" ], 1);
		};
		
		root.main();
	}
	this.frame_1 = function() {
		root.main = () =>
		{
			regards.resizeHandler();
		};
		
		root.resizeHandler = e =>
		{
			regards.UI.fit(root.intro);
			regards.UI.pos(root.intro, 0.5, 0.5);
			regards.UI.offset(root.intro, -0.5, -0.5);
		};
		
		root.main();
	}
	this.frame_2 = function() {
		root.main = () =>
		{
			regards.resizeHandler();
		};
		
		root.mouseDownHandler = e =>
		{
			if (e.target === root.startButton)
				root.gotoAndStop("inGame");
		};
		
		root.resizeHandler = e =>
		{
			regards.UI.autoScale(root.startButton);
			regards.UI.clamp(root.startButton, [ "scaleX", "scaleY" ], 1);
			regards.UI.pos(root.startButton, 0.5, 0.5);
		};
		
		root.main();
	}
	this.frame_3 = function() {
		root.main = () =>
		{
			regards.changeBackgroundColor("black", "black", "black");
			regards.resizeHandler();
			regards.Sound.play("Track0", "bgm", true, { volume: 0.05, loop: -1 });
		};
		
		root.resizeHandler = e =>
		{
			regards.UI.fitViewPort(root.inGame, "InGame");
			regards.UI.autoScale(root.dPad);
			regards.UI.clamp(root.dPad, [ "scaleX", "scaleY" ], 1);
			regards.UI.pos(root.inGame, 0.5, 0.5);
		};
		
		root.main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// views
	this.jc = new lib.JC();
	this.jc.name = "jc";
	this.jc.setTransform(480,270);

	this.intro = new lib.Intro();
	this.intro.name = "intro";

	this.startButton = new lib.NewGameButton();
	this.startButton.name = "startButton";
	this.startButton.setTransform(480,274.2);
	new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.NewGameButton(), 3);

	this.dPad = new lib.DPad();
	this.dPad.name = "dPad";
	this.dPad.setTransform(112.85,427.15);

	this.inGame = new lib.InGame();
	this.inGame.name = "inGame";
	this.inGame.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jc}]}).to({state:[{t:this.intro}]},1).to({state:[{t:this.startButton}]},1).to({state:[{t:this.inGame},{t:this.dPad}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-255.5,-168.3,2080,1010);
// library properties:
lib.properties = {
	id: '41F9A218C3BC4D4EA655CB0DC51F4EEE',
	width: 960,
	height: 540,
	fps: 60,
	color: "#1F1F1F",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_1.png?1636048997415", id:"index_atlas_1"},
		{src:"sounds/Track0.mp3?1636048997735", id:"Track0"},
		{src:"sounds/Coin.mp3?1636048997735", id:"Coin"}
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
an.compositions['41F9A218C3BC4D4EA655CB0DC51F4EEE'] = {
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