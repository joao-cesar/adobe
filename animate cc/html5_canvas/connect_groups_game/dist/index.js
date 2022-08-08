(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"index_atlas_2", frames: [[0,0,1920,1080]]}
];


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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
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


(lib.winMessage = function(mode,startPosition,loop,reversed) {
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
	this.tf = new cjs.Text("YOU WIN!", "19px 'Helvetica'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 25;
	this.tf.lineWidth = 114;
	this.tf.parent = this;
	this.tf.setTransform(0,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.winMessage, new cjs.Rectangle(-58.8,-13.7,117.69999999999999,27.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Aifk/IE/FAIk/E/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Rec6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-480,-270,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-488.55,-265.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.5,-270,968.5,544.3);


(lib.Rec4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#31CCD4").s().p("AjvFAQhQAAAAhQIAAnfQAAhQBQAAIHfAAQBQAAAABQIAAHfQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec4, new cjs.Rectangle(-32,-32,64,64), null);


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
	this.shape.graphics.f("#D43142").s().p("AjvFAQhQAAAAhQIAAnfQAAhQBQAAIHfAAQBQAAAABQIAAHfQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec3, new cjs.Rectangle(-32,-32,64,64), null);


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
	this.shape.graphics.f("#31D471").s().p("AjvFAQhQAAAAhQIAAnfQAAhQBQAAIHfAAQBQAAAABQIAAHfQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec2, new cjs.Rectangle(-32,-32,64,64), null);


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
	this.shape.graphics.f("#5131D4").s().p("AjvFAQhQAAAAhQIAAnfQAAhQBQAAIHfAAQBQAAAABQIAAHfQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec1, new cjs.Rectangle(-32,-32,64,64), null);


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
	this.shape.graphics.f("#319BD4").s().p("AjvFAQhQAAAAhQIAAnfQAAhQBQAAIHfAAQBQAAAABQIAAHfQAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rec, new cjs.Rectangle(-32,-32,64,64), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgzC/IgDAAQhOAAg5g4Qg4g4AAhPIAAAAQABhOA3g4IAAgBQA5g3BOAAIADAAIABAAQBLABA3A3IAOAPIACACIANASIABACIAGAMIAAAAQAMAWAFAaIACAHIBvAAIiPCPIiPiPIBnAAQgEgMgFgMIgFgHIABABIgKgPIgJgKQghgigxgBIAAAAIgDAAQgxAAgkAjIAAAAQgkAkAAAxIAAAAQABAyAjAkQAkAjAxAAIADAAIAjAAIAABGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.1,49.1,38.2);


(lib.NavButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// triangle
	this.instance = new lib.Triangle("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlnFoIAArPILPAAIAALPg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,72,72);


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
	this.instance = new lib.Arrow("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:14.9985},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai0C1QhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpQAABqhLBLQhLBLhqAAQhpAAhLhLg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,51.2,51.2);


(lib.Board6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// restartButton
	this.restartButton = new lib.ArrowButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(256.35,-231.5);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(1));

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(-222.1,-226.1);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// pieces
	this.rec3 = new lib.Rec3();
	this.rec3.name = "rec3";
	this.rec3.setTransform(208.75,-74.5,1,1,0,0,0,0.1,-0.1);

	this.rec1 = new lib.Rec2();
	this.rec1.name = "rec1";
	this.rec1.setTransform(88.4,-146.5,1,1,0,0,0,0.1,-0.1);

	this.rec2 = new lib.Rec1();
	this.rec2.name = "rec2";
	this.rec2.setTransform(-82.5,-74.5,1,1,0,0,0,-0.1,-0.1);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(-214.9,-146.5,1,1,0,0,0,-0.1,-0.1);

	this.rec7 = new lib.Rec3();
	this.rec7.name = "rec7";
	this.rec7.setTransform(208.75,146.5,1,1,0,0,0,0.1,0.1);

	this.rec5 = new lib.Rec2();
	this.rec5.name = "rec5";
	this.rec5.setTransform(88.4,74.5,1,1,0,0,0,0.1,0.1);

	this.rec6 = new lib.Rec1();
	this.rec6.name = "rec6";
	this.rec6.setTransform(-88.45,146.5,1,1,0,0,0,-0.1,0.1);

	this.rec4 = new lib.Rec();
	this.rec4.name = "rec4";
	this.rec4.setTransform(-208.8,74.5,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec4},{t:this.rec6},{t:this.rec5},{t:this.rec7},{t:this.rec0},{t:this.rec2},{t:this.rec1},{t:this.rec3}]}).wait(1));

	// background
	this.instance = new lib.Rec6("single",0);
	this.instance.setTransform(149.8,109.75,0.2733,0.338,0,0,0,0.2,0);

	this.instance_1 = new lib.Rec6("single",0);
	this.instance_1.setTransform(-147.4,109.75,0.2733,0.338,0,0,0,0.2,0);

	this.instance_2 = new lib.Rec6("single",0);
	this.instance_2.setTransform(149.8,-111.15,0.2733,0.338,0,0,0,0.2,0);

	this.instance_3 = new lib.Rec6("single",0);
	this.instance_3.setTransform(-147.4,-111.15,0.2733,0.338,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board6, new cjs.Rectangle(-280.9,-251,561.8,453.4), null);


(lib.Board5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// restartButton
	this.restartButton = new lib.ArrowButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(81.45,-187.1);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(1));

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(-45.55,-181.7);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// pieces
	this.rec1 = new lib.Rec1();
	this.rec1.name = "rec1";
	this.rec1.setTransform(47.45,-99.45);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(-47.5,-99.45);

	this.rec2 = new lib.Rec();
	this.rec2.name = "rec2";
	this.rec2.setTransform(0,99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec2},{t:this.rec0},{t:this.rec1}]}).wait(1));

	// background
	this.instance = new lib.Rec6("single",0);
	this.instance.setTransform(0.9,-1.25,0.2155,0.5806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board5, new cjs.Rectangle(-104.4,-206.6,210.4,364.6), null);


(lib.Board4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// restartButton
	this.restartButton = new lib.ArrowButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(212.45,-181.55);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(1));

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(-179.65,-176.15);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// pieces
	this.rec4 = new lib.Rec4();
	this.rec4.name = "rec4";
	this.rec4.setTransform(189.9,-99.45);

	this.rec7 = new lib.Rec4();
	this.rec7.name = "rec7";
	this.rec7.setTransform(189.9,99.4);

	this.rec3 = new lib.Rec3();
	this.rec3.name = "rec3";
	this.rec3.setTransform(94.95,-99.45);

	this.rec2 = new lib.Rec2();
	this.rec2.name = "rec2";
	this.rec2.setTransform(0,-99.45);

	this.rec1 = new lib.Rec1();
	this.rec1.name = "rec1";
	this.rec1.setTransform(-94.95,-99.45);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(-189.9,-99.45);

	this.rec6 = new lib.Rec2();
	this.rec6.name = "rec6";
	this.rec6.setTransform(0,99.4);

	this.rec5 = new lib.Rec();
	this.rec5.name = "rec5";
	this.rec5.setTransform(-189.9,99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec5},{t:this.rec6},{t:this.rec0},{t:this.rec1},{t:this.rec2},{t:this.rec3},{t:this.rec7},{t:this.rec4}]}).wait(1));

	// background
	this.instance = new lib.Rec6("single",0);
	this.instance.setTransform(1.4,-1.55,0.5096,0.5589,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board4, new cjs.Rectangle(-247.6,-201.1,493.6,352.9), null);


(lib.Board3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// restartButton
	this.restartButton = new lib.ArrowButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(81.45,-187.1);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(1));

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(-45.55,-181.7);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// pieces
	this.rec1 = new lib.Rec1();
	this.rec1.name = "rec1";
	this.rec1.setTransform(47.45,-99.45);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(-47.5,-99.45);

	this.rec3 = new lib.Rec1();
	this.rec3.name = "rec3";
	this.rec3.setTransform(47.45,99.4);

	this.rec2 = new lib.Rec();
	this.rec2.name = "rec2";
	this.rec2.setTransform(-47.5,99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec2},{t:this.rec3},{t:this.rec0},{t:this.rec1}]}).wait(1));

	// background
	this.instance = new lib.Rec6("single",0);
	this.instance.setTransform(0.9,-1.25,0.2155,0.5806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board3, new cjs.Rectangle(-104.4,-206.6,210.4,364.6), null);


(lib.Board2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// restartButton
	this.restartButton = new lib.ArrowButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(130.7,-89.15);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(1));

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(-97.35,-83.75);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// pieces
	this.rec1 = new lib.Rec();
	this.rec1.name = "rec1";
	this.rec1.setTransform(99.4,-0.05);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(-99.45,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec0},{t:this.rec1}]}).wait(1));

	// background
	this.instance = new lib.Rec6("single",0);
	this.instance.setTransform(0.9,-1.25,0.3215,0.2178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board2, new cjs.Rectangle(-156.2,-108.7,311.5,167.2), null);


(lib.Board1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// restartButton
	this.restartButton = new lib.ArrowButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(137.75,-227.9);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(1));

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(-99.7,-222.5);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// pieces
	this.rec7 = new lib.Rec3();
	this.rec7.name = "rec7";
	this.rec7.setTransform(99.45,142.45);

	this.rec6 = new lib.Rec2();
	this.rec6.name = "rec6";
	this.rec6.setTransform(99.45,47.5);

	this.rec5 = new lib.Rec1();
	this.rec5.name = "rec5";
	this.rec5.setTransform(99.45,-47.45);

	this.rec4 = new lib.Rec();
	this.rec4.name = "rec4";
	this.rec4.setTransform(99.45,-142.4);

	this.rec3 = new lib.Rec3();
	this.rec3.name = "rec3";
	this.rec3.setTransform(-99.4,142.45);

	this.rec2 = new lib.Rec2();
	this.rec2.name = "rec2";
	this.rec2.setTransform(-99.4,47.5);

	this.rec1 = new lib.Rec1();
	this.rec1.name = "rec1";
	this.rec1.setTransform(-99.4,-47.45);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(-99.4,-142.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec0},{t:this.rec1},{t:this.rec2},{t:this.rec3},{t:this.rec4},{t:this.rec5},{t:this.rec6},{t:this.rec7}]}).wait(1));

	// background
	this.instance = new lib.Rec6("single",0);
	this.instance.setTransform(0,0,0.3246,0.7363);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board1, new cjs.Rectangle(-158.5,-247.4,320.8,449.4), null);


(lib.Board = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// restartButton
	this.restartButton = new lib.ArrowButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(124.2,-185.85);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restartButton).wait(1));

	// winMessage
	this.winMessage = new lib.winMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.setTransform(-92.55,-180.45);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	// pieces
	this.rec2 = new lib.Rec2();
	this.rec2.name = "rec2";
	this.rec2.setTransform(94.95,-99.45);

	this.rec1 = new lib.Rec1();
	this.rec1.name = "rec1";
	this.rec1.setTransform(0,-99.45);

	this.rec0 = new lib.Rec();
	this.rec0.name = "rec0";
	this.rec0.setTransform(-94.95,-99.45);

	this.rec5 = new lib.Rec2();
	this.rec5.name = "rec5";
	this.rec5.setTransform(94.95,99.4);

	this.rec4 = new lib.Rec1();
	this.rec4.name = "rec4";
	this.rec4.setTransform(0,99.4);

	this.rec3 = new lib.Rec();
	this.rec3.name = "rec3";
	this.rec3.setTransform(-94.95,99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rec3},{t:this.rec4},{t:this.rec5},{t:this.rec0},{t:this.rec1},{t:this.rec2}]}).wait(1));

	// background
	this.instance = new lib.Rec6("single",0);
	this.instance.setTransform(0,0,0.3099,0.5806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board, new cjs.Rectangle(-151.4,-205.4,300.20000000000005,364.70000000000005), null);


// stage content:
(lib.html5_canvas_connect_groups_game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		var main = function()
		{
			window.root = exportRoot;
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			root.score = 0;
			root.stop();
			
			root.strokeStyle =
			{
				color: "#000000",
				thickness: 5,
				caps: "round",
				joints: 0,
				miterLimit: 10,
				ignoreScale: false
			};
			
			// onSetup, onReady, onMouseDown, onPressMove, onPressUp, onDrawingLine, onMiss
			// onHit, onWin, onMiss, onShuffle, onBeforeDestroy, onAfterDestroy
			root.callbacks =
			{
				onReady: function()
				{
					// use the this keyword to access the current game. E.g.: this.id = "something else"
					root["board" + this.id].winMessage.visible = false;
				},
				onWin: function()
				{
					root["board" + this.id].winMessage.visible = true;
					root.setScore(1);
				}
			};
		
			root.connectGroupsGame0 = new window.games.ConnectGroupsGame
			({
				id: 0,
				groups:
				[
					[ root.board0.rec0, root.board0.rec1, root.board0.rec2 ],
					[ root.board0.rec3, root.board0.rec4, root.board0.rec5 ]
				],
				shuffleable: true,
				strokeStyle: root.strokeStyle,
				callbacks: root.callbacks
			});
		
			root.connectGroupsGame1 = new window.games.ConnectGroupsGame
			({
				id: 1,
				groups:
				[
					[ root.board1.rec0, root.board1.rec1, root.board1.rec2, root.board1.rec3 ],
					[ root.board1.rec4, root.board1.rec5, root.board1.rec6, root.board1.rec7 ]
				],
				shuffleable: true,
				strokeStyle: root.strokeStyle,
				callbacks: root.callbacks
			});
		
			root.navigate = function(e)
			{
				if (e.target.name === "prevButton")
					root.gotoAndStop(root.currentFrame - 1);
				else if (e.target.name === "nextButton")
					root.gotoAndStop(root.currentFrame + 1);
				else if (e.target.name === "restartButton")
				{
					var suffix = e.target.parent.name.replace("board", "");
					var game = root["connectGroupsGame" + suffix];
					
					if (Object.keys(game).length > 0)
						game.restart(true);
				}
			};
		
			root.setScore = function(offset)
			{
				root.score += offset;
				root.scoreTF.text = "SCORE: " + root.score;
			}
			
			root.on("click", root.navigate);
		};
		
		if (!this.frame0Started)
		{
			main();
			this.frame0Started = true;
		}
	}
	this.frame_1 = function() {
		var main = function()
		{
			root.connectGroupsGame2 = new window.games.ConnectGroupsGame
			({
				id: 2,
				groups:
				[
					[ root.board2.rec0 ],
					[ root.board2.rec1 ]
				],
				shuffleable: true,
				strokeStyle: root.strokeStyle,
				callbacks: root.callbacks
			});
		
			root.connectGroupsGame3 = new window.games.ConnectGroupsGame
			({
				id: 3,
				groups:
				[
					[ root.board3.rec0, root.board3.rec1 ],
					[ root.board3.rec2, root.board3.rec3 ]
				],
				shuffleable: true,
				strokeStyle: root.strokeStyle,
				callbacks: root.callbacks
			});
		};
		
		if (!root.frame1started)
		{
			main();
			root.frame1started = true;
		}
	}
	this.frame_2 = function() {
		var main = function()
		{
			root.connectGroupsGame4 = new window.games.ConnectGroupsGame
			({
				id: 4,
				groups:
				[
					[ root.board4.rec0, root.board4.rec1, root.board4.rec2, root.board4.rec3, root.board4.rec4 ],
					[ root.board4.rec5, null, root.board4.rec6, null, root.board4.rec7 ]
				],
				shuffleable: true,
				strokeStyle: root.strokeStyle,
				callbacks: root.callbacks
			});
		
			root.connectGroupsGame5 = new window.games.ConnectGroupsGame
			({
				id: 5,
				groups:
				[
					[ root.board5.rec0, root.board5.rec1 ],
					[ root.board5.rec2 ]
				],
				shuffleable: true,
				strokeStyle: root.strokeStyle,
				callbacks: root.callbacks
			});
		};
		
		if (!root.frame2started)
		{
			main();
			root.frame2started = true;
		}
	}
	this.frame_3 = function() {
		var main = function()
		{
			root.connectGroupsGame6 = new window.games.ConnectGroupsGame
			({
				id: 6,
				groups:
				[
					[ root.board6.rec0, root.board6.rec1, root.board6.rec2, root.board6.rec3 ],
					[ root.board6.rec4, root.board6.rec5, root.board6.rec6, root.board6.rec7 ]
				],
				shuffleable: true,
				strokeStyle: root.strokeStyle,
				callbacks: root.callbacks
			});
		};
		
		if (!root.frame3started)
		{
			main();
			root.frame3started = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// score
	this.scoreTF = new cjs.Text("SCORE: 0", "30px 'Helvetica'", "#FFFFFF");
	this.scoreTF.name = "scoreTF";
	this.scoreTF.textAlign = "center";
	this.scoreTF.lineHeight = 36;
	this.scoreTF.lineWidth = 287;
	this.scoreTF.parent = this;
	this.scoreTF.setTransform(480,9.75);

	this.timeline.addTween(cjs.Tween.get(this.scoreTF).wait(4));

	// prevButton
	this.prevButton = new lib.NavButton();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(45.3,270,1,1,0,0,180);
	this.prevButton._off = true;
	new cjs.ButtonHelper(this.prevButton, 0, 1, 2, false, new lib.NavButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.prevButton).wait(1).to({_off:false},0).wait(3));

	// nextButton
	this.nextButton = new lib.NavButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(914.75,270);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 2, false, new lib.NavButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nextButton).to({_off:true},3).wait(1));

	// boards
	this.board1 = new lib.Board1();
	this.board1.name = "board1";
	this.board1.setTransform(668.2,292.55);

	this.board0 = new lib.Board();
	this.board0.name = "board0";
	this.board0.setTransform(280.9,292.85);

	this.board2 = new lib.Board2();
	this.board2.name = "board2";
	this.board2.setTransform(335.3,294.1);

	this.board3 = new lib.Board3();
	this.board3.name = "board3";
	this.board3.setTransform(674.95,294.1);

	this.board4 = new lib.Board4();
	this.board4.name = "board4";
	this.board4.setTransform(335.55,294.45);

	this.board5 = new lib.Board5();
	this.board5.name = "board5";
	this.board5.setTransform(765.95,294.1);

	this.board6 = new lib.Board6();
	this.board6.name = "board6";
	this.board6.setTransform(480.05,294.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.board0},{t:this.board1}]}).to({state:[{t:this.board3},{t:this.board2}]},1).to({state:[{t:this.board5},{t:this.board4}]},1).to({state:[{t:this.board6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(509.3,277.8,421.49999999999994,218.8);
// library properties:
lib.properties = {
	id: '9C3DF53D8BA647D5B735E70E92D187F4',
	width: 960,
	height: 540,
	fps: 60,
	color: "#6633CC",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"}
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
an.compositions['9C3DF53D8BA647D5B735E70E92D187F4'] = {
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