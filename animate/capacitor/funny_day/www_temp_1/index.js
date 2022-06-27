(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1219,749],[1221,0,153,369],[1221,437,12,321],[1221,371,128,64]]}
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



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.iso_tile = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F3F3F3").s().p("AnyCEIL6l8IDrB1Ir7F8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-24.9,99.8,49.9);
p.frameBounds = [rect];


(lib.Pattern = function(mode,startPosition,loop,reversed) {
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
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_1"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.594,0,0,0.594,-38,-19)).s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg")
	}.bind(this);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-480,-270,960,540);
p.frameBounds = [rect];


(lib.Hole = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#4A8515","#000000","#000000"],[0.012,1,1],0.1,-5.4,0.1,5.4).s().p("AhgAdQgbgMgJgRQAJgQAbgNQAogUA4AAQA5AAAoAUQAaANAKAQQgKARgaAMQgoAVg5AAQg4AAgogVg");
	this.shape.setTransform(0,1.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A8515").s().p("ABhAOQgogSg5gBQg4ABgoASQgbANgJARQgFgJAAgKQAAgbApgVQAogUA4AAQA5AAAoAUQApAVAAAbQAAAKgFAJQgKgRgagNg");
	this.shape_1.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hole, rect = new cjs.Rectangle(-13.8,-6.9,27.6,13.8), [rect]);


(lib.Flag = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,-154.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-3,-157.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Flag, rect = new cjs.Rectangle(-3,-157.2,79.5,187.5), [rect]);


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
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1,3,true).p("AMgAAQAAFMjqDqQjqDqlMAAQlLAAjqjqQjqjqAAlMQAAlLDqjqQDqjqFLAAQFMAADqDqQDqDqAAFLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-83,166,166);
p.frameBounds = [rect];


(lib.BallPattern = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAFBUQABgEADgEQADgDAFAAQAFAAADADQAEAEAAAEIAAACQgLADgLABQgBgDgBgDgAgbBWIAAgCQAAgEAEgEQADgDAFAAQAEAAADADQAEAEAAAEQAAADgBADQgMgBgKgDgAgyBKIACAAQAEAAADADIACAEIgLgHgAArBNQADgDAEAAIABAAIgKAGIACgDgAAqA6QgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEAEgFgBQgEABgEgEgAAJA6QgDgEgBgFQABgEADgEQADgDAFAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDAEgFgBQgFABgDgEgAgXA6QgEgEAAgFQAAgEAEgEQADgDAFAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDAEgEgBQgFABgDgEgAg5A6QgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDAEgFgBQgFABgEgEgAhQAoQADABACACQADADAAAEIAAADIgIgNgABKAyQAAgEADgDIADgCIgGAKIAAgBgAAIAZQgDgEAAgFQAAgFADgEQAFgEAEAAQAGAAAEAEQADAEABAFQgBAFgDAEQgEAEgGAAQgEAAgFgEgAgYAZQgFgEAAgFQAAgFAFgEQADgEAGAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEAEgFAAQgGAAgDgEgAAqAYQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEgAg5AYQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDAEgFAAQgFAAgEgEgABNAXQgDgDAAgEQAAgEADgDQADgDAFAAQACAAADABQgBAKgDAJIgBAAQgFAAgDgDgAhVAaQgDgIgBgJQADgDAEAAQAFAAACADQADADAAAEQAAAEgDADQgCADgFAAIgDAAgAAIgHQgDgFAAgFQAAgFADgEQAFgEAEAAQAGAAAEAEQADAEABAFQgBAFgDAFQgEADgGAAQgEAAgFgDgAgYgHQgFgFAAgFQAAgFAFgEQADgEAGAAQAFAAAEAEQADAEAAAFQAAAFgDAFQgEADgFAAQgGAAgDgDgAAqgJQgDgDAAgGQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAGgDADQgEADgFABQgEgBgEgDgAg5gJQgDgDAAgGQAAgEADgDQAEgEAFAAQAFAAADAEQADADAAAEQAAAGgDADQgDADgFABQgFgBgEgDgABNgKQgDgDAAgFQAAgEADgCQADgEAFAAIABAAQADAKAAAJQgCACgCAAQgFAAgDgDgAhZgKQACgJACgIIADgBQAFAAACAEQADACAAAEQAAAFgDADQgCADgFAAQgEAAgDgDgAAqgrQgDgEAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDgAAJgrQgDgEgBgFQABgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDgAgXgrQgEgEAAgFQAAgFAEgDQADgEAFAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDADgEAAQgFAAgDgDgAg5grQgDgEAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFQAAAFgDAEQgDADgFAAQgFAAgEgDgAhIg1IAAABQAAAEgDADIgDADIAGgLgABNgtQgCgCgBgDIAEAHIgBgCgAAKhNQgDgDAAgFIABgEQAKABAJADQAAAFgDADQgCACgFAAQgEAAgDgCgAgWhNQgDgDgBgFIAAAAQAKgDAKgBIABAEQAAAFgDADQgDACgEAAQgEAAgDgCgAgwhLIAJgFIgCADQgDACgEAAgAArhNIgBgBIAHADQgDAAgDgCg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BallPattern, rect = new cjs.Rectangle(-9,-8.9,18,18), [rect]);


(lib.ArrowShape = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAvB5IlbAAIAAjzIFbAAIAAjRID+FLIj+FMg");
	this.shape.setTransform(30.075,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-33.2,60.2,66.4);
p.frameBounds = [rect];


(lib.Track = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(150.3,160);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("AgbZlIJRkpIDrB1Is8GfgA5mQrIDrh2IKzFZIjrB2gARpQiInIjkIDrh1IKzFZgEgvnAFqIHWAAIIfEQIjrB1gAkGFqIHVAAIHSDpIjrB2gAK1hzIMgmQIDrB1IsgGQgEAi9gN3IFViqIHWAAIpAEggAoSt/IMDmCIDrB1IsDGCgAWN5kIkJCEIjrh1IH0j6IMYGMIjrB2g");
	this.shape.setTransform(304.775,187.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81111").s().p("AuzUHIDrh2IKtFXIAADrgAI2S/IIzkaIHWAAIseGPgEgjdAJyIDrh1IJ3E7IjrB2gAG2JMIDrh2IDrB2IjrB1gAkGDtIO7ndIDrB2IrRFngEgvnADtIPsn1IDrB1IsBGAgAXVqAILol0IDrB2IroFzgA0AqFILul3IDrB1IruF3gEAoSgSeIpYksIDrh2INDGigADx1+IKolUIDrB1IqoFUg");
	this.shape_1.setTransform(304.775,199.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Track, rect = new cjs.Rectangle(0,0,609.6,374.4), [rect]);


(lib.Ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AhKA1QANALAbgKQAbgKAZgbQAZgaAJgcQAIgbgLgMIAAAAQAaAbAAAlQAAAkgaAbQgbAagkAAQgjAAgZgYg");
	this.shape.setTransform(1.975,1.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pattern
	this.pattern = new lib.BallPattern();
	this.pattern.name = "pattern";
	this.pattern.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

	// circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3F3").s().p("Ag7BDIgBgBIgDgCQgagbAAglQAAgkAagbQAbgaAkAAQAjAAAZAXIAEADIAAAAQAaAbAAAkQAAAlgaAbQgbAaglAAQgiAAgZgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// groundShadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("Ag1A8IgBgBIgBgCQgYgXAAgiQAAghAYgWQAWgZAhAAQAfABAXAUIACADIABABQAXAWABAhQgBAigXAXQgXAYgiAAQgfgBgWgUg");
	this.shape_2.setTransform(3,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ball, rect = new cjs.Rectangle(-9,-9,20.1,21.1), [rect]);


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
	this.arrow = new lib.ArrowShape("synched",0);
	this.arrow.name = "arrow";
	this.arrow.setTransform(0,0,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow, rect = new cjs.Rectangle(0,-16.6,60.2,33.2), [rect]);


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

	// ball
	this.ball = new lib.Ball();
	this.ball.name = "ball";
	this.ball.setTransform(-105.7,68.05);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// Flag
	this.instance = new lib.Flag();
	this.instance.setTransform(151.65,-68.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hole
	this.hole = new lib.Hole();
	this.hole.name = "hole";
	this.hole.setTransform(151.65,-68.35);

	this.timeline.addTween(cjs.Tween.get(this.hole).wait(1));

	// track
	this.track = new lib.Track();
	this.track.name = "track";
	this.track.setTransform(-307.25,-155.3);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(-302.25,-148.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.track}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InGame, rect = new cjs.Rectangle(-307.2,-225.6,614.5,451.3), [rect]);


(lib.DragCircle = function(mode,startPosition,loop,reversed) {
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
	this.arrow = new lib.Arrow();
	this.arrow.name = "arrow";

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(60));

	// circle1
	this.instance = new lib.Circle("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2,scaleY:2,alpha:0},59).wait(1));

	// circle
	this.instance_1 = new lib.Circle("single",0);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-83,166,166);
p.frameBounds = [rect, new cjs.Rectangle(-84.3,-84.3,168.7,168.7), new cjs.Rectangle(-85.7,-85.7,171.4,171.4), new cjs.Rectangle(-87,-87,174.1,174.1), new cjs.Rectangle(-88.4,-88.4,176.8,176.8), new cjs.Rectangle(-89.8,-89.8,179.6,179.6), new cjs.Rectangle(-91.1,-91.1,182.3,182.3), new cjs.Rectangle(-92.5,-92.5,185,185), new cjs.Rectangle(-93.8,-93.8,187.7,187.7), new cjs.Rectangle(-95.2,-95.2,190.4,190.4), new cjs.Rectangle(-96.5,-96.5,193.1,193.1), new cjs.Rectangle(-97.9,-97.9,195.8,195.8), new cjs.Rectangle(-99.2,-99.2,198.5,198.5), new cjs.Rectangle(-100.6,-100.6,201.3,201.3), new cjs.Rectangle(-102,-102,204,204), new cjs.Rectangle(-103.3,-103.3,206.7,206.7), new cjs.Rectangle(-104.7,-104.7,209.4,209.4), new cjs.Rectangle(-106,-106,212.1,212.1), new cjs.Rectangle(-107.4,-107.4,214.8,214.8), new cjs.Rectangle(-108.7,-108.7,217.5,217.5), new cjs.Rectangle(-110.1,-110.1,220.2,220.2), new cjs.Rectangle(-111.4,-111.4,222.9,222.9), new cjs.Rectangle(-112.8,-112.8,225.7,225.7), new cjs.Rectangle(-114.2,-114.2,228.4,228.4), new cjs.Rectangle(-115.5,-115.5,231.1,231.1), new cjs.Rectangle(-116.9,-116.9,233.8,233.8), new cjs.Rectangle(-118.2,-118.2,236.5,236.5), new cjs.Rectangle(-119.6,-119.6,239.2,239.2), new cjs.Rectangle(-120.9,-120.9,241.9,241.9), new cjs.Rectangle(-122.3,-122.3,244.6,244.6), new cjs.Rectangle(-123.7,-123.7,247.4,247.4), new cjs.Rectangle(-125,-125,250.1,250.1), new cjs.Rectangle(-126.4,-126.4,252.8,252.8), new cjs.Rectangle(-127.7,-127.7,255.5,255.5), new cjs.Rectangle(-129.1,-129.1,258.2,258.2), new cjs.Rectangle(-130.4,-130.4,260.9,260.9), new cjs.Rectangle(-131.8,-131.8,263.6,263.6), new cjs.Rectangle(-133.1,-133.1,266.3,266.3), new cjs.Rectangle(-134.5,-134.5,269.1,269.1), new cjs.Rectangle(-135.9,-135.9,271.8,271.8), new cjs.Rectangle(-137.2,-137.2,274.5,274.5), new cjs.Rectangle(-138.6,-138.6,277.2,277.2), new cjs.Rectangle(-139.9,-139.9,279.9,279.9), new cjs.Rectangle(-141.3,-141.3,282.6,282.6), new cjs.Rectangle(-142.6,-142.6,285.3,285.3), new cjs.Rectangle(-144,-144,288,288), new cjs.Rectangle(-145.3,-145.3,290.7,290.7), new cjs.Rectangle(-146.7,-146.7,293.5,293.5), new cjs.Rectangle(-148.1,-148.1,296.2,296.2), new cjs.Rectangle(-149.4,-149.4,298.9,298.9), new cjs.Rectangle(-150.8,-150.8,301.6,301.6), new cjs.Rectangle(-152.1,-152.1,304.3,304.3), new cjs.Rectangle(-153.5,-153.5,307,307), new cjs.Rectangle(-154.8,-154.8,309.7,309.7), new cjs.Rectangle(-156.2,-156.2,312.4,312.4), new cjs.Rectangle(-157.6,-157.6,315.2,315.2), new cjs.Rectangle(-158.9,-158.9,317.9,317.9), new cjs.Rectangle(-160.3,-160.3,320.6,320.6), new cjs.Rectangle(-161.6,-161.6,323.3,323.3), new cjs.Rectangle(-163,-163,326,326)];


// stage content:
(lib.adobe_animate_html5_canvas_mini_golf = function(mode,startPosition,loop,reversed) {
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
		var game, width, height, ball, track;
		
		var calc =
		{
			distanceBetweenTwoPoints: function(x1, y1, x2, y2)
			{
				var dx = x1 - x2;
				var dy = y1 - y2;
		
				return Math.sqrt(dx * dx + dy * dy);
			},
			angleBetweenTwoPoints: function(x1, y1, x2, y2)
			{
				return Math.atan2(y2 - y1, x2 - x1);
			},
			clamp: function(value, min, max)
			{
				if (value < min) return min;
				if (value > max) return max;
				return value;
			},
			TO_DEGREES: 180 / Math.PI
		};
		
		var game =
		{
			getPointerPos: function(target)
			{
				return target.globalToLocal(stage.mouseX, stage.mouseY);
			},
			shapeCollision: function(body1, body2)
			{
				var point = body1.localToLocal(0, 0, body2);
				var angle = calc.angleBetweenTwoPoints(body1.prevX, body1.prevY, body1.x, body1.y);
				var hit = false;
		
				while (body2.hitTest(point.x, point.y))
				{
					hit = true;
					body1.x = body1.x - 0.5 * Math.cos(angle);
					body1.y = body1.y - 0.5 * Math.sin(angle);
					point = body1.localToLocal(0, 0, body2);
				}
				
				if (hit)
					ball.angle += Math.PI * 0.5;
			}
		};
		
		root.main = function()
		{
			/*anim_container.style.backgroundColor = "transparent";
			canvas.style.backgroundColor = "transparent";
			document.body.style.backgroundColor = lib.properties.color;
			document.body.style.backgroundImage = "url(tile.svg)";*/
			document.body.style.backgroundColor = lib.properties.color;
			stage.mouseMoveOutside = true;
			width = lib.properties.width;
			height = lib.properties.height;
			game.world = root;
			game.world.friction = 0.95;
			ball = root.inGame.ball;
			ball.releasedX = ball.x;
			ball.releasedY = ball.y;
			ball.speedX = 0;
			ball.speedY = 0;
			ball.maxSpeedX = 30;
			ball.maxSpeedY = 30;
			ball.angle = 0;
			ball.rotationRatio = 10;
			ball.forceRatio = 0.1;
			ball.maxForce = 20;
			track = root.inGame.track;
			root.stop();
			
			ball.on("mousedown", function(e)
			{
				var target = e.currentTarget;
				var point = game.getPointerPos(target.parent);
				
				target.offsetX = point.x - target.x;
				target.offsetY = point.y - target.y;
				target.pressedX = point.x;
				target.pressedY = point.y;
				target.downX = point.x;
				target.downY = point.y;
				target.staticX = target.x;
				target.staticY = target.y;
				target.pressed = true;
				
				target.dragCircle = new lib.DragCircle();
				target.dragCircle.x = target.x;
				target.dragCircle.y = target.y;
				target.dragCircle.scaleY = 0.5;
				target.dragCircle.mouseEnabled = false;
				target.parent.addChild(target.dragCircle);
			});
				
			root.on("tick", function(e)
			{				
				if (ball.pressed)
				{
					var point = game.getPointerPos(ball.parent);
					
					ball.force = Math.min(calc.distanceBetweenTwoPoints(point.x, point.y, ball.downX, ball.downY) * ball.forceRatio, ball.maxForce);
					ball.angle = calc.angleBetweenTwoPoints(point.x, point.y, ball.staticX, ball.staticY);
					
					ball.dragCircle.arrow.arrow.rotation = ball.angle * calc.TO_DEGREES;
					ball.dragCircle.arrow.arrow.scaleX = (ball.force / ball.forceRatio) / ball.dragCircle.arrow.arrow.nominalBounds.width;
				}
				
				ball.speedX *= game.world.friction;
				ball.speedY *= game.world.friction;		
				ball.speedX = calc.clamp(ball.speedX, -ball.maxSpeedX, ball.maxSpeedX);
				ball.speedY = calc.clamp(ball.speedY, -ball.maxSpeedY, ball.maxSpeedY);
				ball.x += ball.speedX * Math.cos(ball.angle);
				ball.y += ball.speedY * 0.5 * Math.sin(ball.angle);
				
				if (!ball.pressed)
					ball.pattern.rotation += (ball.speedX + ball.speedY) * ball.rotationRatio;
				
				game.shapeCollision(ball, track);
				ball.prevX = ball.x;
				ball.prevY = ball.y;
				
				/*if (ball.pressed)
				{			
					if (distance > radius)
						ball.x = ball.downX - radius * Math.cos(ball.angle);
					
					if (distance > radius * 0.5)
						ball.y = ball.downY - radius * 0.5 * Math.sin(ball.angle);
				}
				else
					ball.pattern.rotation += (ball.speedX + ball.speedY) * ball.rotationRatio;
				
				game.shapeCollision(ball, track);
				ball.prevX = ball.x;
				ball.prevY = ball.y;*/
			});
			
			root.on("pressup", function(e)
			{
				if (ball.pressed)
				{
					ball.parent.removeChild(ball.dragCircle);
					ball.speedX = ball.force;
					ball.speedY = ball.force;
				}			
				
				ball.pressed = false;		
			});
		};
		
		root.main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// inGame
	this.inGame = new lib.InGame();
	this.inGame.name = "inGame";
	this.inGame.setTransform(482.5,273.25);

	this.timeline.addTween(cjs.Tween.get(this.inGame).wait(1));

	// pattern
	this.instance = new lib.Pattern("single",0);
	this.instance.setTransform(480,270);
	this.instance.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(480,270,960,540);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '05D3929BD27B7F41B1D7829F9DB98267',
	width: 960,
	height: 540,
	fps: 60,
	color: "#7BCF32",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1616464622209", id:"index_atlas_1"}
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
an.compositions['05D3929BD27B7F41B1D7829F9DB98267'] = {
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