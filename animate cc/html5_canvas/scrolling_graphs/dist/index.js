(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1538,482]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
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


(lib.ShapeContainer = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AmUCMIAAkXIMpAAIAAEXg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-13.9,80.9,27.9);


(lib.Lines = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lines, new cjs.Rectangle(-0.5,-0.5,769,241), null);


(lib.Dot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0099FF").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dot, new cjs.Rectangle(-6,-6,12,12), null);


(lib.Border = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnFi0IOLAAIAAFpIuLAAg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-19.1,92.69999999999999,38.2);


(lib.RestartButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.instance = new lib.Border("single",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// txt
	this.txt = new cjs.Text("RESTART", "bold 13px 'Arial'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 17;
	this.txt.lineWidth = 66;
	this.txt.parent = this;
	this.txt.setTransform(0,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(2).to({y:-6.3,font:"bold 11px 'Arial'",lineHeight:14.55,lineWidth:56},0).to({_off:true},1).wait(1));

	// rec
	this.instance_1 = new lib.Rec("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_2 = new lib.Rec("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-19.1,92.69999999999999,38.2);


(lib.Dots3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Dot();
	this.instance.setTransform(-356.35,120.1);

	this.instance_1 = new lib.Dot();
	this.instance_1.setTransform(-308.85,61);

	this.instance_2 = new lib.Dot();
	this.instance_2.setTransform(-261.35,83.7);

	this.instance_3 = new lib.Dot();
	this.instance_3.setTransform(-213.85,176);

	this.instance_4 = new lib.Dot();
	this.instance_4.setTransform(-166.35,36.85);

	this.instance_5 = new lib.Dot();
	this.instance_5.setTransform(-118.85,176);

	this.instance_6 = new lib.Dot();
	this.instance_6.setTransform(-71.35,206);

	this.instance_7 = new lib.Dot();
	this.instance_7.setTransform(-23.85,144.45);

	this.instance_8 = new lib.Dot();
	this.instance_8.setTransform(23.65,95.7);

	this.instance_9 = new lib.Dot();
	this.instance_9.setTransform(71.15,158);

	this.instance_10 = new lib.Dot();
	this.instance_10.setTransform(118.65,61);

	this.instance_11 = new lib.Dot();
	this.instance_11.setTransform(166.15,156.45);

	this.instance_12 = new lib.Dot();
	this.instance_12.setTransform(213.65,71.7);

	this.instance_13 = new lib.Dot();
	this.instance_13.setTransform(261.15,36.85);

	this.instance_14 = new lib.Dot();
	this.instance_14.setTransform(308.65,170);

	this.instance_15 = new lib.Dot();
	this.instance_15.setTransform(356.15,144.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dots3, new cjs.Rectangle(-362.3,30.9,724.5,181.1), null);


(lib.Dots2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Dot();
	this.instance.setTransform(-369,113);

	this.instance_1 = new lib.Dot();
	this.instance_1.setTransform(-321.35,164);

	this.instance_2 = new lib.Dot();
	this.instance_2.setTransform(-273.7,113);

	this.instance_3 = new lib.Dot();
	this.instance_3.setTransform(-226.05,46);

	this.instance_4 = new lib.Dot();
	this.instance_4.setTransform(-178.4,113);

	this.instance_5 = new lib.Dot();
	this.instance_5.setTransform(-130.75,182);

	this.instance_6 = new lib.Dot();
	this.instance_6.setTransform(-83.1,152);

	this.instance_7 = new lib.Dot();
	this.instance_7.setTransform(-35.45,137);

	this.instance_8 = new lib.Dot();
	this.instance_8.setTransform(12.2,78);

	this.instance_9 = new lib.Dot();
	this.instance_9.setTransform(59.85,200);

	this.instance_10 = new lib.Dot();
	this.instance_10.setTransform(107.5,164);

	this.instance_11 = new lib.Dot();
	this.instance_11.setTransform(155.15,50);

	this.instance_12 = new lib.Dot();
	this.instance_12.setTransform(202.8,194);

	this.instance_13 = new lib.Dot();
	this.instance_13.setTransform(250.45,78);

	this.instance_14 = new lib.Dot();
	this.instance_14.setTransform(298.1,58);

	this.instance_15 = new lib.Dot();
	this.instance_15.setTransform(345.75,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dots2, new cjs.Rectangle(-375,40,726.8,166), null);


(lib.Dots1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Dot();
	this.instance.setTransform(-356.35,120.1);

	this.instance_1 = new lib.Dot();
	this.instance_1.setTransform(-308.15,61);

	this.instance_2 = new lib.Dot();
	this.instance_2.setTransform(-259.95,83.7);

	this.instance_3 = new lib.Dot();
	this.instance_3.setTransform(-211.75,176);

	this.instance_4 = new lib.Dot();
	this.instance_4.setTransform(-163.55,36.85);

	this.instance_5 = new lib.Dot();
	this.instance_5.setTransform(-115.35,176);

	this.instance_6 = new lib.Dot();
	this.instance_6.setTransform(-67.15,206);

	this.instance_7 = new lib.Dot();
	this.instance_7.setTransform(-18.95,194);

	this.instance_8 = new lib.Dot();
	this.instance_8.setTransform(29.25,36.85);

	this.instance_9 = new lib.Dot();
	this.instance_9.setTransform(77.45,206);

	this.instance_10 = new lib.Dot();
	this.instance_10.setTransform(125.65,100);

	this.instance_11 = new lib.Dot();
	this.instance_11.setTransform(173.85,78);

	this.instance_12 = new lib.Dot();
	this.instance_12.setTransform(222.05,144.45);

	this.instance_13 = new lib.Dot();
	this.instance_13.setTransform(270.25,144.45);

	this.instance_14 = new lib.Dot();
	this.instance_14.setTransform(318.45,170);

	this.instance_15 = new lib.Dot();
	this.instance_15.setTransform(366.65,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dots1, new cjs.Rectangle(-362.3,30.9,735,181.1), null);


(lib.Dots0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Dot();
	this.instance.setTransform(-369,113);

	this.instance_1 = new lib.Dot();
	this.instance_1.setTransform(-321.35,58);

	this.instance_2 = new lib.Dot();
	this.instance_2.setTransform(-273.7,164);

	this.instance_3 = new lib.Dot();
	this.instance_3.setTransform(-226.05,164);

	this.instance_4 = new lib.Dot();
	this.instance_4.setTransform(-178.4,66);

	this.instance_5 = new lib.Dot();
	this.instance_5.setTransform(-130.75,80);

	this.instance_6 = new lib.Dot();
	this.instance_6.setTransform(-83.1,206);

	this.instance_7 = new lib.Dot();
	this.instance_7.setTransform(-35.45,137);

	this.instance_8 = new lib.Dot();
	this.instance_8.setTransform(12.2,78);

	this.instance_9 = new lib.Dot();
	this.instance_9.setTransform(59.85,137);

	this.instance_10 = new lib.Dot();
	this.instance_10.setTransform(107.5,188);

	this.instance_11 = new lib.Dot();
	this.instance_11.setTransform(155.15,50);

	this.instance_12 = new lib.Dot();
	this.instance_12.setTransform(202.8,100);

	this.instance_13 = new lib.Dot();
	this.instance_13.setTransform(250.45,125);

	this.instance_14 = new lib.Dot();
	this.instance_14.setTransform(298.1,58);

	this.instance_15 = new lib.Dot();
	this.instance_15.setTransform(345.75,194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dots0, new cjs.Rectangle(-375,44,726.8,168), null);


(lib.Graph3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AeAS6Mg7/AAAQgEAAgDgDQgDgDAAgEMAAAglfQAAgEADgDQADgDAEAAMA7/AAAQAEAAADADQADADAAAEMAAAAlfQAAAEgDADQgDADgEAAIAAAAg");
	mask.setTransform(192,120);

	// shapeContainer
	this.shapeContainer = new lib.ShapeContainer();
	this.shapeContainer.name = "shapeContainer";

	var maskedShapeInstanceList = [this.shapeContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shapeContainer).wait(1));

	// dots
	this.dots = new lib.Dots3();
	this.dots.name = "dots";

	var maskedShapeInstanceList = [this.dots];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dots).wait(1));

	// lines
	this.lines = new lib.Lines();
	this.lines.name = "lines";
	this.lines.setTransform(-384,0);

	var maskedShapeInstanceList = [this.lines];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Graph3, new cjs.Rectangle(-1,-0.5,385.5,241), null);


(lib.Graph2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AeAS6Mg7/AAAQgEAAgDgDQgDgDAAgEMAAAglfQAAgEADgDQADgDAEAAMA7/AAAQAEAAADADQADADAAAEMAAAAlfQAAAEgDADQgDADgEAAIAAAAg");
	mask.setTransform(192,120);

	// shapeContainer
	this.shapeContainer = new lib.ShapeContainer();
	this.shapeContainer.name = "shapeContainer";

	var maskedShapeInstanceList = [this.shapeContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shapeContainer).wait(1));

	// dots
	this.dots = new lib.Dots2();
	this.dots.name = "dots";

	var maskedShapeInstanceList = [this.dots];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dots).wait(1));

	// lines
	this.lines = new lib.Lines();
	this.lines.name = "lines";
	this.lines.setTransform(-384,0);

	var maskedShapeInstanceList = [this.lines];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Graph2, new cjs.Rectangle(-1,-0.5,385.5,241), null);


(lib.Graph1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AeAS6Mg7/AAAQgEAAgDgDQgDgDAAgEMAAAglfQAAgEADgDQADgDAEAAMA7/AAAQAEAAADADQADADAAAEMAAAAlfQAAAEgDADQgDADgEAAIAAAAg");
	mask.setTransform(192,120);

	// shapeContainer
	this.shapeContainer = new lib.ShapeContainer();
	this.shapeContainer.name = "shapeContainer";

	var maskedShapeInstanceList = [this.shapeContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shapeContainer).wait(1));

	// dots
	this.dots = new lib.Dots1();
	this.dots.name = "dots";

	var maskedShapeInstanceList = [this.dots];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dots).wait(1));

	// lines
	this.lines = new lib.Lines();
	this.lines.name = "lines";
	this.lines.setTransform(-384,0);

	var maskedShapeInstanceList = [this.lines];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Graph1, new cjs.Rectangle(-1,-0.5,385.5,241), null);


(lib.Graph0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AeAS6Mg7/AAAQgEAAgDgDQgDgDAAgEMAAAglfQAAgEADgDQADgDAEAAMA7/AAAQAEAAADADQADADAAAEMAAAAlfQAAAEgDADQgDADgEAAIAAAAg");
	mask.setTransform(192,120);

	// shapeContainer
	this.shapeContainer = new lib.ShapeContainer();
	this.shapeContainer.name = "shapeContainer";

	var maskedShapeInstanceList = [this.shapeContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shapeContainer).wait(1));

	// dots
	this.dots = new lib.Dots0();
	this.dots.name = "dots";

	var maskedShapeInstanceList = [this.dots];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dots).wait(1));

	// lines
	this.lines = new lib.Lines();
	this.lines.name = "lines";
	this.lines.setTransform(-384,0);

	var maskedShapeInstanceList = [this.lines];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Graph0, new cjs.Rectangle(-1,-0.5,385.5,241), null);


// stage content:
(lib.adobe_animate_html5_canvas_scrolling_graphs = function(mode,startPosition,loop,reversed) {
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
		var targets = [ root.graph0, root.graph1, root.graph2, root.graph3 ];
		
		function main()
		{
			anim();
			
			root.restart.on("click", function()
			{
				clear();	
				anim();
			});
		};
		
		function anim()
		{
			var target;
			
			for (target of targets)
			{
				var point;
				
				target.points = target.dots.children.map(function(dot){ return { x: dot.x, y: dot.y }; });
				target.tween = createjs.Tween.get(target.points[0]);
				
				for (point of target.points)
					target.tween.to(point, 500);
				
				target.shape = new createjs.Shape();
				target.shape.color = '#' + (Math.random().toString(16) + "000000").substring(2,8);
				target.shape.pos = { x: target.points[0].x, y: target.points[0].y };
				target.shape.lastX = target.shape.pos.x;
				target.shapeContainer.addChild(target.shape);
				target.tween.on("change", changeHandler, null, false, { target: target, width: target.nominalBounds.width });
			}
		}
		
		function changeHandler(e, data)
		{
			plotGraph(data.target.shape, e.target.target.x, e.target.target.y);
			moveGraph(data.target, data.width);
		};
		
		function plotGraph(shape, x, y)
		{
			shape.graphics.beginStroke(shape.color);
			shape.graphics.moveTo(shape.pos.x, shape.pos.y);
			shape.pos.x = x;
			shape.pos.y = y;
			shape.graphics.lineTo(shape.pos.x, shape.pos.y);
			shape.graphics.endStroke();
		}
		
		function moveGraph(target, rangeX)
		{		
			if (target.shape.pos.x >= target.points[target.points.length - 1].x + rangeX * 0.5 && target.shape.pos.x <= rangeX * 0.5)
			{
				target.shape.x += target.shape.lastX - target.shape.pos.x;
				target.dots.x = target.shape.x;
			}
			
			target.shape.lastX = target.shape.pos.x;
		}
		
		function clear()
		{
			var target;
			
			for (target of targets)
			{
				target.tween.removeAllEventListeners();
				createjs.Tween.removeTweens(target);
				target.shapeContainer.removeChildAt(0);
				target.dots.x = 0;
			}
		}
		
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// restartButton
	this.restart = new lib.RestartButton();
	this.restart.name = "restart";
	this.restart.setTransform(896.6,258.05);
	new cjs.ButtonHelper(this.restart, 0, 1, 2, false, new lib.RestartButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(1));

	// graphs
	this.graph3 = new lib.Graph3();
	this.graph3.name = "graph3";
	this.graph3.setTransform(443.2,286.5);

	this.graph2 = new lib.Graph2();
	this.graph2.name = "graph2";
	this.graph2.setTransform(23.95,286.5);

	this.graph1 = new lib.Graph1();
	this.graph1.name = "graph1";
	this.graph1.setTransform(443.45,13.5);

	this.graph0 = new lib.Graph0();
	this.graph0.name = "graph0";
	this.graph0.setTransform(24.2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.graph0},{t:this.graph1},{t:this.graph2},{t:this.graph3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,282.5,823.5,245);
// library properties:
lib.properties = {
	id: '475FA0FC0668014EB8482F34B4CA49E9',
	width: 960,
	height: 540,
	fps: 60,
	color: "#F4F4F4",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['475FA0FC0668014EB8482F34B4CA49E9'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;