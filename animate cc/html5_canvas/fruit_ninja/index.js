(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,75,62,32],[64,75,30,30],[0,0,97,73]]}
];


// symbols:



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
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


(lib.Stain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-48.35,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-36.6,97,73);


(lib.Half = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_10();
	this.instance.parent = this;
	this.instance.setTransform(-31,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Half, new cjs.Rectangle(-31,-16,62,32), null);


(lib.Container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(-25.05,-25.05,1.6957,1.6957);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50.8,50.8);


(lib.Fruit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rec
	this.half1 = new lib.Half();
	this.half1.name = "half1";
	this.half1.parent = this;
	this.half1.setTransform(0,15);

	this.half0 = new lib.Half();
	this.half0.name = "half0";
	this.half0.parent = this;
	this.half0.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.half0},{t:this.half1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fruit, new cjs.Rectangle(-31,-31,62,62), null);


(lib.Explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// bubble0
	this.instance = new lib.Bubble("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-15.55,19.85,0.5476,0.5476,0,0,0,-0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:0.4,regY:0.4,scaleX:0.5477,scaleY:0.5477,x:-18.55,y:20.95,alpha:0.96},0).wait(1).to({x:-21.7,y:21.95,alpha:0.92},0).wait(1).to({x:-24.7,y:23,alpha:0.88},0).wait(1).to({x:-27.5,y:24.1,alpha:0.84},0).wait(1).to({x:-30.15,y:25.3,alpha:0.8},0).wait(1).to({x:-32.6,y:26.55,alpha:0.76},0).wait(1).to({x:-34.95,y:27.9,alpha:0.72},0).wait(1).to({x:-37.1,y:29.3,alpha:0.68},0).wait(1).to({x:-39.1,y:30.75,alpha:0.64},0).wait(1).to({x:-40.9,y:32.3,alpha:0.6},0).wait(1).to({x:-42.6,y:33.9,alpha:0.56},0).wait(1).to({x:-44.1,y:35.55,alpha:0.52},0).wait(1).to({x:-45.45,y:37.3,alpha:0.48},0).wait(1).to({x:-46.6,y:39.1,alpha:0.44},0).wait(1).to({x:-47.65,y:40.95,alpha:0.4},0).wait(1).to({x:-48.5,y:42.9,alpha:0.36},0).wait(1).to({x:-49.2,y:44.95,alpha:0.32},0).wait(1).to({x:-49.7,y:47,alpha:0.28},0).wait(1).to({x:-50.1,y:49.15,alpha:0.24},0).wait(1).to({x:-50.3,y:51.4,alpha:0.2},0).wait(1).to({x:-50.35,y:53.7,alpha:0.16},0).wait(1).to({x:-50.2,y:56.05,alpha:0.12},0).wait(1).to({x:-49.95,y:58.45,alpha:0.08},0).wait(1).to({x:-49.5,y:60.95,alpha:0.04},0).wait(1).to({x:-48.85,y:63.55,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bubble1
	this.instance_1 = new lib.Bubble("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.6,16.45,0.4102,0.4102);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:0.4,regY:0.4,scaleX:0.4103,scaleY:0.4103,x:7.55,y:15.85,alpha:0.96},0).wait(1).to({x:11.3,y:15.3,alpha:0.92},0).wait(1).to({x:14.95,y:14.9,alpha:0.88},0).wait(1).to({x:18.55,y:14.65,alpha:0.84},0).wait(1).to({x:22,y:14.55,alpha:0.8},0).wait(1).to({x:25.4,y:14.6,alpha:0.76},0).wait(1).to({x:28.7,y:14.8,alpha:0.72},0).wait(1).to({x:31.9,y:15.15,alpha:0.68},0).wait(1).to({x:35,y:15.65,alpha:0.64},0).wait(1).to({x:38.05,y:16.3,alpha:0.6},0).wait(1).to({x:41,y:17.1,alpha:0.56},0).wait(1).to({x:43.85,y:18.05,alpha:0.52},0).wait(1).to({x:46.6,y:19.15,alpha:0.48},0).wait(1).to({x:49.3,y:20.4,alpha:0.44},0).wait(1).to({x:51.85,y:21.75,alpha:0.4},0).wait(1).to({x:54.35,y:23.3,alpha:0.36},0).wait(1).to({x:56.8,y:25,alpha:0.32},0).wait(1).to({x:59.1,y:26.85,alpha:0.28},0).wait(1).to({x:61.35,y:28.85,alpha:0.24},0).wait(1).to({x:63.5,y:31,alpha:0.2},0).wait(1).to({x:65.55,y:33.3,alpha:0.16},0).wait(1).to({x:67.5,y:35.75,alpha:0.12},0).wait(1).to({x:69.4,y:38.35,alpha:0.08},0).wait(1).to({x:71.15,y:41.1,alpha:0.04},0).wait(1).to({x:72.9,y:44.05,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bubble2
	this.instance_2 = new lib.Bubble("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10.5,5.8,0.4872,0.4872);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:0.4,regY:0.4,x:11.5,y:2.8,alpha:0.96},0).wait(1).to({x:12.45,y:-0.25,alpha:0.92},0).wait(1).to({x:13.5,y:-3.25,alpha:0.88},0).wait(1).to({x:14.65,y:-6.15,alpha:0.84},0).wait(1).to({x:15.95,y:-8.95,alpha:0.8},0).wait(1).to({x:17.3,y:-11.65,alpha:0.76},0).wait(1).to({x:18.8,y:-14.25,alpha:0.72},0).wait(1).to({x:20.35,y:-16.75,alpha:0.68},0).wait(1).to({x:22.05,y:-19.15,alpha:0.64},0).wait(1).to({x:23.85,y:-21.45,alpha:0.6},0).wait(1).to({x:25.75,y:-23.6,alpha:0.56},0).wait(1).to({x:27.75,y:-25.7,alpha:0.52},0).wait(1).to({x:29.85,y:-27.7,alpha:0.48},0).wait(1).to({x:32.1,y:-29.6,alpha:0.44},0).wait(1).to({x:34.4,y:-31.4,alpha:0.4},0).wait(1).to({x:36.85,y:-33.1,alpha:0.36},0).wait(1).to({x:39.35,y:-34.7,alpha:0.32},0).wait(1).to({x:42,y:-36.2,alpha:0.28},0).wait(1).to({x:44.75,y:-37.6,alpha:0.24},0).wait(1).to({x:47.65,y:-38.9,alpha:0.2},0).wait(1).to({x:50.6,y:-40.1,alpha:0.16},0).wait(1).to({x:53.65,y:-41.2,alpha:0.12},0).wait(1).to({x:56.85,y:-42.15,alpha:0.08},0).wait(1).to({x:60.15,y:-43.05,alpha:0.04},0).wait(1).to({x:63.55,y:-43.9,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bubble3
	this.instance_3 = new lib.Bubble("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17.6,5.05,0.3718,0.3718);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:0.4,regY:0.4,x:-21.75,y:4,alpha:0.96},0).wait(1).to({x:-25.95,y:3,alpha:0.92},0).wait(1).to({x:-30.05,y:2.2,alpha:0.88},0).wait(1).to({x:-34,y:1.5,alpha:0.84},0).wait(1).to({x:-37.8,y:1.05,alpha:0.8},0).wait(1).to({x:-41.5,y:0.7,alpha:0.76},0).wait(1).to({x:-45.05,y:0.55,alpha:0.72},0).wait(1).to({x:-48.5,y:0.6,alpha:0.68},0).wait(1).to({x:-51.8,y:0.75,alpha:0.64},0).wait(1).to({x:-54.95,y:1.15,alpha:0.6},0).wait(1).to({x:-58,y:1.65,alpha:0.56},0).wait(1).to({x:-60.95,y:2.35,alpha:0.52},0).wait(1).to({x:-63.7,y:3.25,alpha:0.48},0).wait(1).to({x:-66.35,y:4.25,alpha:0.44},0).wait(1).to({x:-68.9,y:5.5,alpha:0.4},0).wait(1).to({x:-71.3,y:6.85,alpha:0.36},0).wait(1).to({x:-73.55,y:8.4,alpha:0.32},0).wait(1).to({x:-75.7,y:10.15,alpha:0.28},0).wait(1).to({x:-77.7,y:12,alpha:0.24},0).wait(1).to({x:-79.6,y:14.05,alpha:0.2},0).wait(1).to({x:-81.35,y:16.3,alpha:0.16},0).wait(1).to({x:-83,y:18.7,alpha:0.12},0).wait(1).to({x:-84.45,y:21.25,alpha:0.08},0).wait(1).to({x:-85.85,y:24,alpha:0.04},0).wait(1).to({x:-87.1,y:26.95,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bubble4
	this.instance_4 = new lib.Bubble("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.05,-8.05,0.3208,0.3208);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regX:0.4,regY:0.4,x:6.65,y:-10.8,alpha:0.96},0).wait(1).to({x:5.3,y:-13.65,alpha:0.92},0).wait(1).to({x:4.1,y:-16.45,alpha:0.88},0).wait(1).to({x:3.1,y:-19.2,alpha:0.84},0).wait(1).to({x:2.25,y:-21.85,alpha:0.8},0).wait(1).to({x:1.6,y:-24.5,alpha:0.76},0).wait(1).to({x:1.15,y:-27.1,alpha:0.72},0).wait(1).to({x:0.85,y:-29.6,alpha:0.68},0).wait(1).to({x:0.75,y:-32.1,alpha:0.64},0).wait(1).to({x:0.8,y:-34.5,alpha:0.6},0).wait(1).to({x:1.05,y:-36.85,alpha:0.56},0).wait(1).to({x:1.45,y:-39.15,alpha:0.52},0).wait(1).to({x:2.05,y:-41.45,alpha:0.48},0).wait(1).to({x:2.8,y:-43.6,alpha:0.44},0).wait(1).to({x:3.75,y:-45.75,alpha:0.4},0).wait(1).to({x:4.9,y:-47.85,alpha:0.36},0).wait(1).to({x:6.2,y:-49.9,alpha:0.32},0).wait(1).to({x:7.65,y:-51.9,alpha:0.28},0).wait(1).to({x:9.3,y:-53.8,alpha:0.24},0).wait(1).to({x:11.15,y:-55.7,alpha:0.2},0).wait(1).to({x:13.15,y:-57.5,alpha:0.16},0).wait(1).to({x:15.35,y:-59.25,alpha:0.12},0).wait(1).to({x:17.7,y:-60.95,alpha:0.08},0).wait(1).to({x:20.25,y:-62.6,alpha:0.04},0).wait(1).to({x:23,y:-64.25,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bubble5
	this.instance_5 = new lib.Bubble("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.55,-8.65,0.5897,0.5897);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1).to({regX:0.4,regY:0.4,x:-16.85,y:-12,alpha:0.96},0).wait(1).to({x:-17.6,y:-15.45,alpha:0.92},0).wait(1).to({x:-18.45,y:-18.75,alpha:0.88},0).wait(1).to({x:-19.4,y:-21.85,alpha:0.84},0).wait(1).to({x:-20.5,y:-24.85,alpha:0.8},0).wait(1).to({x:-21.75,y:-27.65,alpha:0.76},0).wait(1).to({x:-23.15,y:-30.3,alpha:0.72},0).wait(1).to({x:-24.65,y:-32.85,alpha:0.68},0).wait(1).to({x:-26.25,y:-35.15,alpha:0.64},0).wait(1).to({x:-28,y:-37.35,alpha:0.6},0).wait(1).to({x:-29.9,y:-39.4,alpha:0.56},0).wait(1).to({x:-31.95,y:-41.3,alpha:0.52},0).wait(1).to({x:-34.1,y:-43,alpha:0.48},0).wait(1).to({x:-36.35,y:-44.55,alpha:0.44},0).wait(1).to({x:-38.8,y:-45.95,alpha:0.4},0).wait(1).to({x:-41.35,y:-47.2,alpha:0.36},0).wait(1).to({x:-44,y:-48.3,alpha:0.32},0).wait(1).to({x:-46.8,y:-49.25,alpha:0.28},0).wait(1).to({x:-49.75,y:-50,alpha:0.24},0).wait(1).to({x:-52.8,y:-50.65,alpha:0.2},0).wait(1).to({x:-56,y:-51.1,alpha:0.16},0).wait(1).to({x:-59.35,y:-51.4,alpha:0.12},0).wait(1).to({x:-62.8,y:-51.55,alpha:0.08},0).wait(1).to({x:-66.4,alpha:0.04},0).wait(1).to({x:-70.15,y:-51.4,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// stain
	this.instance_6 = new lib.Stain("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.05,-0.75);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.1992},6).to({startPosition:0},97).to({alpha:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-72.3,179.8,149.7);


// stage content:
(lib.animate_cc_html5_canvas_fruit_ninja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var fruits = [];
		var particles = [];
		var container = root.container;
		
		root.randomRange = function(min, max)
		{
			return Math.random() * (max - min + 1) + min;
		};
		
		root.lerp = function(start, end, ratio)
		{
			return (1 - ratio) * start + ratio * end;
		};
		
		// particle prototypes
		function Particle(color, radius, index, scaleRatio)
		{
			createjs.Shape.call(this, new createjs.Graphics().beginFill(color).drawCircle(0, 0, radius));
			this.ratio = index + 1;
			this.alpha = 1 / this.ratio;
			this.scaleX = this.scaleY = 1 / this.ratio * scaleRatio;
		};
		
		Particle.prototype = Object.create(createjs.Shape.prototype);
		Particle.prototype.constructor = Particle;
		
		Particle.prototype.move = function()
		{
			this.x = root.lerp(this.x, stage.mouseX / stage.scaleX, 1 / this.ratio);
			this.y = root.lerp(this.y, stage.mouseY / stage.scaleY, 1 / this.ratio);
			this.alpha -= 0.1;
		};
		
		Particle.prototype.reset = function()
		{
			for (var i = particles.length - 1; i >= 0; i--)
				particles[i].alpha = 1;
		};
		
		// fruits prototypes
		lib.Fruit.prototype.getReady = function()
		{
			this.hit = false;
			this.x = root.randomRange(this.nominalBounds.width * 0.5, canvas.width / stage.scaleX - this.nominalBounds.width * 0.5);
			this.y = this.parent.spawnY + this.nominalBounds.height * 0.5;
			this.vY = 0;
			this.forceY = root.randomRange(30, 40);
			this.frictionY = 0.95;
			this.rotationSpeed = root.randomRange(-10, 10);
			
			this.half0.x = 0;
			this.half0.y = -15;
			this.half0.rotation = 0;
			this.half0.vX = 0;
			this.half0.forceX = 0;
			this.half0.frictionX = 0;
			this.half0.rotationSpeed = 0;
			
			this.half1.x = 0;
			this.half1.y = 15;
			this.half1.rotation = 0;
			this.half1.vX = 0;
			this.half1.forceX = 0;
			this.half1.frictionX = 0;
			this.half1.rotationSpeed = 0;
		};
		
		lib.Fruit.prototype.launch = function()
		{
			this.offscreen = false;
			this.visible = true;
			this.vY -= this.forceY;
		};
		
		lib.Fruit.prototype.spawn = function()
		{
			setTimeout(function(scope)
			{
				scope.getReady();
				scope.launch();
			}, root.randomRange(this.parent.minDelay, this.parent.maxDelay), this);
		};
		
		lib.Half.prototype.moveX = function()
		{
			this.vX *= this.frictionX;
			
			if (!isNaN(this.vX) && this.vX !== undefined)
				this.x += this.vX;
		};
		
		lib.Fruit.prototype.moveY = function()
		{
			this.vY += this.parent.gravity;
			this.vY *= this.frictionY;
			this.y += this.vY;
		};
		
		lib.Fruit.prototype.checkCollision = function(explosionLinkage)
		{
			var point = this.globalToLocal(this.stage.mouseX, this.stage.mouseY);
					
			if (!this.hit && this.stage.mouseInBounds && this.hitTest(point.x, point.y))
			{		
				var explosion = new lib[explosionLinkage]();
				explosion.x = this.x;
				explosion.y = this.y;
				container.addChild(explosion);
				
				this.hit = true;
				this.rotationSpeed = 0;
				
				this.half0.vX += root.randomRange(-10, -30);
				this.half0.forceX = root.randomRange(40, 60);
				this.half0.frictionX = 0.85;
				this.half0.rotationSpeed = root.randomRange(-15, 15);
				
				this.half1.vX += root.randomRange(10, 30);
				this.half1.forceX = root.randomRange(40, 60);
				this.half1.frictionX = 0.85;
				this.half1.rotationSpeed = root.randomRange(-15, 15);
			}
		};
		
		lib.Fruit.prototype.checkIfOffscreen = function()
		{
			if (!this.offscreen && this.y > this.stage.canvas.height / stage.scaleY + this.nominalBounds.height * 0.5)
			{
				this.offscreen = true;
				this.spawn();
			}
		};
		
		lib.Fruit.prototype.anim = function()
		{
			this.moveY();
			this.half0.moveX();
			this.half1.moveX();
			
			if (!isNaN(this.rotationSpeed) && this.rotationSpeed !== undefined)
				this.rotation += this.rotationSpeed;
				
			if (!isNaN(this.half0.rotationSpeed) && this.half0.rotationSpeed !== undefined)
				this.half0.rotation += this.half0.rotationSpeed;
			
			if (!isNaN(this.half1.rotationSpeed) && this.half1.rotationSpeed !== undefined)
				this.half1.rotation += this.half1.rotationSpeed;
		};
		
		// start
		root.start = function()
		{
			document.body.style.backgroundColor = "#222";
			root.totalParticles = 10;
			container.totalFruits = 5;
			container.gravity = 0.5;
			container.minDelay = 3000;
			container.maxDelay = 6000;
			container.spawnY = canvas.height / stage.scaleY;
			root.createParticles();
			root.createFruits();
			createjs.Ticker.on("tick", root.tickHandler);
			stage.on("stagemousemove", root.stageMouseMoveHandler);
		};
		
		root.createParticles = function()
		{
			for (var i = 0; i < root.totalParticles; i++)
			{
				var particle = new Particle("#fff", 8, i, 0.75);
				root.addChild(particle);
				particles[i] = particle;
			}
		};
		
		root.createFruits = function()
		{
			for (var i = 0; i < container.totalFruits; i++)
			{
				var fruit = new lib.Fruit();
				fruit.hit = true;
				container.addChild(fruit);
				fruit.visible = false;
				fruit.spawn();
				fruits[i] = fruit;
			}
		};
		
		root.tickHandler = function(e)
		{
			var i;
			
			for (i = 0, total = fruits.length; i < total; i++)
			{
				var fruit = fruits[i];		
				fruit.anim();		
				fruit.checkCollision("Explosion");		
				fruit.checkIfOffscreen();		
			}
			
			for (i = 0, total = particles.length; i < total; i++)
				particles[i].move();
		};
		
		root.stageMouseMoveHandler = function(e)
		{
			for (var i = particles.length - 1; i >= 0; i--)
				particles[i].reset();
		};
		
		root.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// container
	this.container = new lib.Container();
	this.container.name = "container";
	this.container.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.container).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'EBC1315F7162AB458DBFFB89710A858F',
	width: 720,
	height: 405,
	fps: 60,
	color: "#151515",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['EBC1315F7162AB458DBFFB89710A858F'] = {
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