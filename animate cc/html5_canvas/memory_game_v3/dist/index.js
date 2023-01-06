(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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


(lib.YouWin = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("YOU WIN!!!", "normal 700 120px 'Passion One'", "#FFC300");
	this.text.textAlign = "center";
	this.text.lineHeight = 124;
	this.text.lineWidth = 731;
	this.text.parent = this;
	this.text.setTransform(0,-60.75);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.3,-62.7,734.7,125.5);


(lib.YouLose = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("YOU LOSE...", "normal 700 96px 'Passion One'", "#FF3300");
	this.text.textAlign = "center";
	this.text.lineHeight = 99;
	this.text.lineWidth = 731;
	this.text.parent = this;
	this.text.setTransform(0,-48.65);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.3,-50.6,734.7,101.2);


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
	this.text = new cjs.Text("Tap to start", "normal 700 68px 'Passion One'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 408;
	this.text.parent = this;
	this.text.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.1,-36.4,412.29999999999995,72.9);


(lib.Rec3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("A+rHXQiKAAAAiJIAAqbQAAiJCKAAMA9XAAAQCKAAAACJIAAKbQAACJiKAAg");
	this.shape.setTransform(0.05,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.1,-47.1,420.4,94.2);


(lib.Rec2 = function(mode,startPosition,loop,reversed) {
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


(lib.Rec1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Aq4FkQhkAAAAhkIAAn/QAAhkBkAAIVxAAQBkAAAABkIAAH/QAABkhkAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


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
	this.shape.graphics.f("#000000").s().p("AuwHXQiJAAAAiJIAAqbQAAiJCJAAIdgAAQCKAAAACJIAAKbQAACJiKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.2,-47.1,216.4,94.2);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.text = new cjs.Text("YOUR COOL LOGO", "normal 700 68px 'Passion One'", "#1660E3");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 681;
	this.text.parent = this;
	this.text.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.7,-36.4,685.5,72.9);


(lib.InvisibleButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape.setTransform(480,270);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


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


(lib.Faces = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// numbers
	this.text = new cjs.Text("0", "normal 400 130px 'Passion One'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 136;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(0,-67.15);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"1"},0).wait(1).to({text:"2"},0).wait(1).to({text:"3"},0).wait(1).to({text:"4"},0).wait(1).to({text:"5"},0).wait(1).to({text:"6"},0).wait(1).to({text:"7"},0).wait(1).to({text:"8"},0).wait(1).to({text:"9"},0).wait(1).to({text:"10"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-69.1,176.1,138.3);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgGCLIkZAAIAAkWIEZAAIAAiWIEmEiIkmEhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-28.9,57.6,57.9);


(lib.YouWinAnim = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// anim
	this.instance = new lib.YouWin("single",0);
	this.instance.setTransform(0,0,0.05,0.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},29,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.1,-68.7,804.3,137.5);


(lib.YouLoseAnim = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// anim
	this.instance = new lib.YouLose("single",0);
	this.instance.setTransform(0,0,0.05,0.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},29,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.1,-55.4,804.3,110.8);


(lib.YesButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("YES", "normal 700 48px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 51;
	this.tf.lineWidth = 98;
	this.tf.parent = this;
	this.tf.setTransform(0,-24.35);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:4.8,y:-26.75},0).wait(1).to({font:"normal 700 44px 'Passion One'",lineHeight:46.55},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec1("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


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

	// tapToStart
	this.instance = new lib.TapToStart("single",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59,cjs.Ease.sineInOut).wait(30).to({startPosition:0},0).to({alpha:0},60,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.1,-36.4,412.29999999999995,72.9);


(lib.PlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("PLAY", "normal 700 68px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 174;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:5,y:-36.45},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.2,-47.1,216.4,94.2);


(lib.PlayAgainButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("PLAY AGAIN", "normal 700 68px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 372;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:6.25},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec3("single",0);
	this.instance.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,x:0},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec3("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.2,-47.1,420.5,94.2);


(lib.NoButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("NO", "normal 700 48px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 51;
	this.tf.lineWidth = 98;
	this.tf.parent = this;
	this.tf.setTransform(0,-24.35);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:4.8,y:-26.75},0).wait(1).to({font:"normal 700 44px 'Passion One'",lineHeight:46.55},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec1("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


(lib.MenuScreen = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("TEMPLATE", "normal 400 72px 'Passion One'", "#1C51C5");
	this.text.textAlign = "center";
	this.text.lineHeight = 76;
	this.text.lineWidth = 312;
	this.text.parent = this;
	this.text.setTransform(480,198.05);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.text_1 = new cjs.Text("MEMORY GAME", "normal 700 93px 'Passion One'", "#1560E3");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 96;
	this.text_1.lineWidth = 638;
	this.text_1.parent = this;
	this.text_1.setTransform(480,118.95);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text_1);
	}

	this.playButton = new lib.PlayButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(480,369.65);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.PlayButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playButton},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MenuScreen, new cjs.Rectangle(159.1,117,641.9,299.8), null);


(lib.MenuButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("MENU", "normal 700 68px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 174;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:5,y:-36.45},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.2,-47.1,216.4,94.2);


(lib.LoseScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// youLose
	this.instance = new lib.YouLoseAnim();
	this.instance.setTransform(480,147.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuButton
	this.menuButton = new lib.MenuButton();
	this.menuButton.name = "menuButton";
	this.menuButton.setTransform(491.6,326.05);
	new cjs.ButtonHelper(this.menuButton, 0, 1, 2, false, new lib.MenuButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(1));

	// playButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.setTransform(480.2,445.05);
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LoseScreen, new cjs.Rectangle(270,144.8,420.4,347.4), null);


(lib.LogoScreen = function(mode,startPosition,loop,reversed) {
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
	this.frame_179 = function() {
		root.gotoAndStop("menu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// logo
	this.instance = new lib.Logo("single",0);
	this.instance.setTransform(480,270);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59,cjs.Ease.sineInOut).wait(60).to({startPosition:0},0).to({alpha:0},60,cjs.Ease.sineIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.3,233.6,685.5,72.9);


(lib.FadeButton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rec2("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.CardAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {front:1,back:30};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// numbers
	this.faces = new lib.Faces();
	this.faces.name = "faces";
	this.faces.setTransform(0,0,0.0028,1);
	this.faces.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.faces).wait(14).to({visible:true},0).to({scaleX:1},15).to({scaleX:0.0028},15).to({_off:true},1).wait(15));

	// rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("At9t9Ib7AAIAAb7I77AAg");
	this.shape.setTransform(-0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("As5t9IZzAQIAAbbI5zAQg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ar0t9IXpAgIAAa7I3pAgg");
	this.shape_2.setTransform(-0.025,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aqwt9IVhAvIAAadI1hAvg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Apst9ITZA/IAAZ9IzZA/g");
	this.shape_4.setTransform(-0.025,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aoot9IRRBPIAAZdIxRBPg");
	this.shape_5.setTransform(-0.025,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ankt9IPJBeIAAY/IvJBeg");
	this.shape_6.setTransform(-0.05,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("Amft9IM/BuIAAYfIs/Bug");
	this.shape_7.setTransform(-0.025,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("Albt9IK3B+IAAX/Iq3B+g");
	this.shape_8.setTransform(-0.05,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkXt9IIvCNIAAXhIovCNg");
	this.shape_9.setTransform(-0.05,-0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjTt9IGnCdIAAXBImnCdg");
	this.shape_10.setTransform(-0.05,-0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiPt9IEfCtIAAWhIkfCtg");
	this.shape_11.setTransform(-0.05,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhKt9ICVC9IAAWBIiVC9g");
	this.shape_12.setTransform(-0.05,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGt9IANDMIAAVjIgNDMg");
	this.shape_13.setTransform(-0.05,-0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAHt9IgNDMIAAVjIANDMg");
	this.shape_14.setTransform(-0.05,-0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhBq+ICDi/IAAb7IiDi/g");
	this.shape_15.setTransform(-0.05,-0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah8rMID5ixIAAb7Ij5ixg");
	this.shape_16.setTransform(-0.025,-0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai4raIFxijIAAb7Ilxijg");
	this.shape_17.setTransform(-0.05,-0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjzrnIHniWIAAb7InniWg");
	this.shape_18.setTransform(-0.05,-0.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("Akur1IJdiIIAAb7IpdiIg");
	this.shape_19.setTransform(-0.05,-0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlpsCILTh7IAAb7IrTh7g");
	this.shape_20.setTransform(-0.025,-0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmksQINJhtIAAb7ItJhtg");
	this.shape_21.setTransform(-0.025,-0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnfseIO/hfIAAb7Iu/hfg");
	this.shape_22.setTransform(-0.05,-0.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoasrIQ1hSIAAb7Iw1hSg");
	this.shape_23.setTransform(-0.05,-0.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApVs5ISrhEIAAb7IyrhEg");
	this.shape_24.setTransform(-0.025,-0.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqQtGIUhg3IAAb7I0hg3g");
	this.shape_25.setTransform(-0.025,-0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArLtUIWXgpIAAb7I2Xgpg");
	this.shape_26.setTransform(-0.025,-0.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsHtiIYPgbIAAb7I4Pgbg");
	this.shape_27.setTransform(-0.05,-0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AtCtvIaFgOIAAb7I6FgOg");
	this.shape_28.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},29).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// rec
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1660E3").s().p("AvgPhIAA/BIfBAAIAAfBg");
	this.shape_29.setTransform(-0.025,-0.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1660E3").s().p("AuUvgIcpARIAAefI8pARg");
	this.shape_30.setTransform(-0.025,-0.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1660E3").s().p("AtJvgIaTAjIAAd7I6TAjg");
	this.shape_31.setTransform(-0.025,-0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1660E3").s().p("Ar9vgIX7A0IAAdZI37A0g");
	this.shape_32.setTransform(-0.025,-0.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1660E3").s().p("AqxvgIVjBGIAAc1I1jBGg");
	this.shape_33.setTransform(-0.025,-0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1660E3").s().p("AplvgITLBXIAAcTIzLBXg");
	this.shape_34.setTransform(-0.025,-0.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1660E3").s().p("AoavgIQ1BpIAAbvIw1Bpg");
	this.shape_35.setTransform(-0.05,-0.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1660E3").s().p("AnOvgIOdB6IAAbNIudB6g");
	this.shape_36.setTransform(-0.025,-0.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1660E3").s().p("AmCvgIMFCLIAAarIsFCLg");
	this.shape_37.setTransform(-0.05,-0.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1660E3").s().p("Ak2vgIJtCdIAAaHIptCdg");
	this.shape_38.setTransform(-0.05,-0.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1660E3").s().p("AjqvgIHVCuIAAZlInVCug");
	this.shape_39.setTransform(-0.05,-0.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1660E3").s().p("AifvgIE/DAIAAZBIk/DAg");
	this.shape_40.setTransform(-0.05,-0.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1660E3").s().p("AhTvgICnDRIAAYfIinDRg");
	this.shape_41.setTransform(-0.05,-0.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1660E3").s().p("AgHvgIAPDjIAAX7IgPDjg");
	this.shape_42.setTransform(-0.05,-0.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#16CFE3").s().p("AgHL+IAA37IAPjjIAAfBg");
	this.shape_43.setTransform(-0.05,-0.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#16CFE3").s().p("AhOMOIAA4bICdjTIAAfBg");
	this.shape_44.setTransform(-0.05,-0.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#16CFE3").s().p("AiUMfIAA49IEpjCIAAfBg");
	this.shape_45.setTransform(-0.025,-0.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#16CFE3").s().p("AjaMvIAA5dIG1iyIAAfBg");
	this.shape_46.setTransform(-0.05,-0.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#16CFE3").s().p("AkgM/IAA59IJBiiIAAfBg");
	this.shape_47.setTransform(-0.05,-0.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#16CFE3").s().p("AlnNPIAA6dILPiSIAAfBg");
	this.shape_48.setTransform(-0.05,-0.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#16CFE3").s().p("AmtNgIAA6/INbiBIAAfBg");
	this.shape_49.setTransform(-0.025,-0.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#16CFE3").s().p("An0NwIAA7fIPphxIAAfBg");
	this.shape_50.setTransform(-0.025,-0.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#16CFE3").s().p("Ao6OAIAA7/IR1hhIAAfBg");
	this.shape_51.setTransform(-0.05,-0.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#16CFE3").s().p("AqAOQIAA8fIUBhRIAAfBg");
	this.shape_52.setTransform(-0.025,-0.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#16CFE3").s().p("ArHOgIAA8/IWPhBIAAfBg");
	this.shape_53.setTransform(-0.025,-0.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#16CFE3").s().p("AsNOxIAA9hIYbgwIAAfBg");
	this.shape_54.setTransform(-0.025,-0.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#16CFE3").s().p("AtUPBIAA+BIapggIAAfBg");
	this.shape_55.setTransform(-0.05,-0.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#16CFE3").s().p("AuaPRIAA+hIc1gQIAAfBg");
	this.shape_56.setTransform(-0.025,-0.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#16CFE3").s().p("AvgPhIAA/BIfBAAIAAfBg");
	this.shape_57.setTransform(-0.025,-0.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#16CFE3").s().p("AuavgIc1AQIAAehI81AQg");
	this.shape_58.setTransform(-0.025,-0.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#16CFE3").s().p("AtUvgIapAgIAAeBI6pAgg");
	this.shape_59.setTransform(-0.05,-0.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#16CFE3").s().p("AsNvgIYbAwIAAdhI4bAwg");
	this.shape_60.setTransform(-0.025,-0.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#16CFE3").s().p("ArHvgIWPBBIAAc/I2PBBg");
	this.shape_61.setTransform(-0.025,-0.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#16CFE3").s().p("AqAvgIUBBRIAAcfI0BBRg");
	this.shape_62.setTransform(-0.025,-0.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#16CFE3").s().p("Ao6vgIR1BhIAAb/Ix1Bhg");
	this.shape_63.setTransform(-0.05,-0.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#16CFE3").s().p("An0vgIPpBxIAAbfIvpBxg");
	this.shape_64.setTransform(-0.025,-0.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#16CFE3").s().p("AmtvgINbCBIAAa/ItbCBg");
	this.shape_65.setTransform(-0.025,-0.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#16CFE3").s().p("AlnvgILPCSIAAadIrPCSg");
	this.shape_66.setTransform(-0.05,-0.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#16CFE3").s().p("AkgvgIJBCiIAAZ9IpBCig");
	this.shape_67.setTransform(-0.05,-0.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#16CFE3").s().p("AjavgIG1CyIAAZdIm1Cyg");
	this.shape_68.setTransform(-0.05,-0.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#16CFE3").s().p("AiUvgIEpDCIAAY9IkpDCg");
	this.shape_69.setTransform(-0.025,-0.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#16CFE3").s().p("AhOvgICdDTIAAYbIidDTg");
	this.shape_70.setTransform(-0.05,-0.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#16CFE3").s().p("AgHvgIAPDjIAAX7IgPDjg");
	this.shape_71.setTransform(-0.05,-0.025);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1660E3").s().p("AgHL+IAA37IAPjjIAAfBg");
	this.shape_72.setTransform(-0.05,-0.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1660E3").s().p("AhIMNIAA4ZICRjUIAAfBg");
	this.shape_73.setTransform(-0.05,-0.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1660E3").s().p("AiLMdIAA45IEWjEIAAfBg");
	this.shape_74.setTransform(-0.05,-0.025);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1660E3").s().p("AjMMsIAA5XIGZi1IAAfBg");
	this.shape_75.setTransform(-0.05,-0.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1660E3").s().p("AkOM7IAA51IIdimIAAfBg");
	this.shape_76.setTransform(-0.025,-0.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1660E3").s().p("AlPNKIAA6TIKfiXIAAfBg");
	this.shape_77.setTransform(-0.05,-0.025);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1660E3").s().p("AmRNZIAA6xIMjiIIAAfBg");
	this.shape_78.setTransform(-0.05,-0.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1660E3").s().p("AnTNoIAA7PIOnh5IAAfBg");
	this.shape_79.setTransform(-0.025,-0.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1660E3").s().p("AoUN3IAA7tIQphqIAAfBg");
	this.shape_80.setTransform(-0.05,-0.025);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1660E3").s().p("ApWOGIAA8LISthbIAAfBg");
	this.shape_81.setTransform(-0.025,-0.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1660E3").s().p("AqYOWIAA8rIUxhLIAAfBg");
	this.shape_82.setTransform(-0.025,-0.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1660E3").s().p("ArZOlIAA9JIWzg8IAAfBg");
	this.shape_83.setTransform(-0.05,-0.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1660E3").s().p("AsbO0IAA9nIY3gtIAAfBg");
	this.shape_84.setTransform(-0.025,-0.025);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1660E3").s().p("AtdPDIAA+FIa7geIAAfBg");
	this.shape_85.setTransform(-0.025,-0.025);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1660E3").s().p("AufPSIAA+jIc/gPIAAfBg");
	this.shape_86.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-99.3,198.6,198.6);


(lib.Card = function(mode,startPosition,loop,reversed) {
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
	this.anim = new lib.CardAnim();
	this.anim.name = "anim";

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Card, new cjs.Rectangle(-99.3,-99.3,198.6,198.6), null);


(lib.ArrowButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.instance = new lib.Arrow("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-2.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-2.45},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Hit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.WinScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// youWin
	this.instance = new lib.YouWinAnim();
	this.instance.setTransform(480,147.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuButton
	this.menuButton = new lib.MenuButton();
	this.menuButton.name = "menuButton";
	this.menuButton.setTransform(491.6,326.05);
	new cjs.ButtonHelper(this.menuButton, 0, 1, 2, false, new lib.MenuButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(1));

	// playButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.setTransform(480.2,445.05);
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WinScreen, new cjs.Rectangle(270,144.2,420.4,348), null);


(lib.TapToStartScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// invisibleButton
	this.instance = new lib.InvisibleButton();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tapToStart
	this.instance_1 = new lib.TapToStartAnim();
	this.instance_1.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TapToStartScreen, new cjs.Rectangle(0,0,960,540), null);


(lib.QuitPrompt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// box
	this.noButton = new lib.NoButton();
	this.noButton.name = "noButton";
	this.noButton.setTransform(605.5,367.25);
	new cjs.ButtonHelper(this.noButton, 0, 1, 2, false, new lib.NoButton(), 3);

	this.yesButton = new lib.YesButton();
	this.yesButton.name = "yesButton";
	this.yesButton.setTransform(354.5,367.25);
	new cjs.ButtonHelper(this.yesButton, 0, 1, 2, false, new lib.YesButton(), 3);

	this.text = new cjs.Text("Are you sure you want to quit?", "normal 400 44px 'Passion One'");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 324;
	this.text.parent = this;
	this.text.setTransform(480,139.2);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpjAedQheABAAhfMAAAg59QAAhfBeABMBTGAAAQBggBAABfMAAAA59QAABfhggBg");
	this.shape.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.yesButton},{t:this.noButton}]}).wait(1));

	// fade
	this.hit = new lib.FadeButton();
	this.hit.name = "hit";
	this.hit.setTransform(480,270);
	this.hit.alpha = 0.75;
	new cjs.ButtonHelper(this.hit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QuitPrompt, new cjs.Rectangle(0,0,960,540), null);


(lib.Deck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cards
	this.instance = new lib.Card();
	this.instance.setTransform(240.65,111.5);

	this.instance_1 = new lib.Card();
	this.instance_1.setTransform(0,111.5);

	this.instance_2 = new lib.Card();
	this.instance_2.setTransform(-240.65,111.5);

	this.instance_3 = new lib.Card();
	this.instance_3.setTransform(240.6,-111.45);

	this.instance_4 = new lib.Card();
	this.instance_4.setTransform(0,-111.45);

	this.instance_5 = new lib.Card();
	this.instance_5.setTransform(-240.6,-111.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Deck, new cjs.Rectangle(-340,-210.8,680,421.6), null);


(lib.InGameScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// deck
	this.backButton = new lib.ArrowButton();
	this.backButton.name = "backButton";
	this.backButton.setTransform(45.85,34.55);
	new cjs.ButtonHelper(this.backButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeTF = new cjs.Text("00:00", "normal 400 64px 'Passion One'");
	this.timeTF.name = "timeTF";
	this.timeTF.textAlign = "center";
	this.timeTF.lineHeight = 68;
	this.timeTF.lineWidth = 254;
	this.timeTF.parent = this;
	this.timeTF.setTransform(480,1.5);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.timeTF);
	}

	this.deck = new lib.Deck();
	this.deck.name = "deck";
	this.deck.setTransform(480,299.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.deck},{t:this.timeTF},{t:this.backButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InGameScreen, new cjs.Rectangle(14.6,-0.5,805.4,510.6), null);


// stage content:
(lib.html5_canvas_memory_game_v3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {logo:1,menu:2,inGame:3,lose:4,win:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5];
	// timeline functions:
	this.frame_0 = function() {
		function tapToStartState()
		{
			window.root = exportRoot;
			document.querySelector(".lds-ripple").remove();
			document.body.style.backgroundColor =  lib.properties.color;
			createjs.Touch.enable(stage);
			fixText(0.14);
			root.stop();
			
			root.tapToStartScreen.on("click", function()
			{
				root.gotoAndStop("logo");
			}, null, true);
		}
		
		function fixText(lineHeightRatio)
		{
			const chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
			const firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
			
			if ((chrome || firefox) && createjs)
			{
				createjs.Text.prototype._drawTextLine = function(ctx, text, y)
				{
					if (this.textBaseline === "top")
						y += (this.lineHeight || this.getMeasuredLineHeight()) * lineHeightRatio;
					ctx[this.outline ? "strokeText" : "fillText"](text, 0, y, this.maxwidth || 0xFFFF);
				};
			}
		}
		
		tapToStartState();
	}
	this.frame_1 = function() {
		function logoState()
		{
			game.Sound.play("BGM0", "bgm", true, { volume: 0.02, loop: -1 });
		}
		
		logoState();
	}
	this.frame_2 = function() {
		function menuState()
		{
			root.menuScreen.playButton.on("click", function()
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				root.gotoAndStop("inGame");
			});	
		}
		
		if (!root.menuStateStarted)
		{
			menuState();
			root.menuStateStarted = true;
		}
	}
	this.frame_3 = function() {
		var memoryGame, timer;
		
		function inGameState()
		{
			memoryGame = new game.MemoryGame
			({
				cards: root.inGameScreen.deck.children,
				callbacks:
				{
					onSetup: function()
					{
						console.log("memoryGame onSetup");
					},
					onMemorize: function()
					{
						console.log("memoryGame onMemorize");
					},
					onStart: function()
					{
						console.log("memoryGame onStart");
						timer.start();
					},
					onClick: function()
					{
						console.log("memoryGame onClick");
					},
					onFlip: function()
					{
						console.log("memoryGame onFlip");
						game.Sound.play("Flip", "sfx", true, { volume: 0.2 });
					},
					onPair: function()
					{
						console.log("memoryGame onPair");
					},
					onMiss: function()
					{
						console.log("memoryGame onMiss");
						game.Sound.play("Wrong", "sfx", true, { volume: 0.5 });
					},
					onMatch: function()
					{
						console.log("memoryGame onMatch");
						game.Sound.play("Right", "sfx", true, { volume: 0.5 });
					},
					onBeforeWin: function()
					{
						console.log("memoryGame onBeforeWin");
					},
					onWin: function()
					{
						console.log("memoryGame onWin");
						
						clear();
						root.gotoAndStop("win");
					}
				}
			});
		
			timer = new game.Timer
			({
				initialTime: 90000, // time in milliseconds | 1000 ms = 1 s
				callbacks:
				{
					onStart: function()
					{
						console.log("timer onStart");
						updateText(this);
					},
					onUpdate: function()
					{
						console.log("timer onUpdate");
						updateText(this);
					},
					onFinish: function()
					{
						console.log("timer onFinish");
						
						if (!memoryGame.win)
						{
							clear();
							root.gotoAndStop("lose");
						}
					}
				}
			});
		
			updateText(timer);
		
			root.inGameScreen.backButton.clickEvent = root.inGameScreen.backButton.on("click", addPrompt);
		}
		
		function addPrompt()
		{
			game.Sound.play("Button", "sfx", true, { volume: 0.5 });
		
			root.prompt = new lib.QuitPrompt();
			root.addChild(root.prompt);
			root.prompt.clickEvent = root.prompt.on("click", onPromptClick);
		}
		
		function onPromptClick(e)
		{
			if (e.target === e.currentTarget.noButton || e.target === e.currentTarget.hit)
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				removePrompt();
			}
			else if (e.target === e.currentTarget.yesButton)
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				clear();
				root.gotoAndStop("menu");
			}
		}
		
		function removePrompt()
		{
			if (!root.prompt)
				return;
			
			root.prompt.off("click", root.prompt.clickEvent);
			root.prompt.parent.removeChild(root.prompt);
			root.prompt._off = true;
			root.prompt = null;
		}
		
		function clear()
		{
			removePrompt();
			memoryGame.destroy();
			memoryGame = null;
			timer.destroy();
			timer = null;
			root.inGameScreen.backButton.off("click", root.inGameScreen.backButton.clickEvent);
		}
		
		function updateText(timer)
		{
			var time = timer.toTimecode(timer.currentTime);
			root.inGameScreen.timeTF.text = time.minutes + ":" + time.seconds;
		}
		
		inGameState();
	}
	this.frame_4 = function() {
		function loseState()
		{
			root.loseScreen.menuButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("menu");
			});
		
			root.loseScreen.playAgainButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("inGame");
			});
		
			game.Sound.play("Lose", "bgm1", true, { volume: 0.1 });
		}
		
		if (!root.loseStateStarted)
		{
			loseState();
			root.loseStateStarted = true;
		}
	}
	this.frame_5 = function() {
		function winState()
		{
			root.winScreen.menuButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("menu");
			});
		
			root.winScreen.playAgainButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("inGame");
			});
		
			game.Sound.play("Win", "bgm1", true, { volume: 0.1 });
		}
		
		if (!root.winStateStarted)
		{
			winState();
			root.winStateStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// screens
	this.tapToStartScreen = new lib.TapToStartScreen();
	this.tapToStartScreen.name = "tapToStartScreen";

	this.instance = new lib.LogoScreen();

	this.menuScreen = new lib.MenuScreen();
	this.menuScreen.name = "menuScreen";

	this.inGameScreen = new lib.InGameScreen();
	this.inGameScreen.name = "inGameScreen";

	this.loseScreen = new lib.LoseScreen();
	this.loseScreen.name = "loseScreen";

	this.winScreen = new lib.WinScreen();
	this.winScreen.name = "winScreen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tapToStartScreen}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.menuScreen}]},1).to({state:[{t:this.inGameScreen}]},1).to({state:[{t:this.loseScreen}]},1).to({state:[{t:this.winScreen}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,269.5,342.79999999999995,240.60000000000002);
// library properties:
lib.properties = {
	id: 'FC643B0B3A4F44D9AEDF61053C8EE40A',
	width: 960,
	height: 540,
	fps: 60,
	color: "#F8F8F8",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Lose.mp3", id:"Lose"},
		{src:"sounds/Flip.mp3", id:"Flip"},
		{src:"sounds/Win.mp3", id:"Win"},
		{src:"sounds/BGM0.mp3", id:"BGM0"},
		{src:"sounds/Button.mp3", id:"Button"},
		{src:"sounds/Wrong.mp3", id:"Wrong"},
		{src:"sounds/Right.mp3", id:"Right"}
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
an.compositions['FC643B0B3A4F44D9AEDF61053C8EE40A'] = {
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