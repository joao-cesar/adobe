(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.HitButtonShape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA333").s().rr(-41,-16,82,32,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitButtonShape1, new cjs.Rectangle(-41,-16,82,32), null);


(lib.HitButtonShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6633").s().rr(-41,-16,82,32,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitButtonShape, new cjs.Rectangle(-41,-16,82,32), null);


(lib.Dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAWAVgBAcQABAdgWAUQgUAWgdgBQgcABgVgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dot, new cjs.Rectangle(-7,-7,14.1,14.1), null);


(lib.Bar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().dr(-112.5,-11,225,22);
	this.shape.setTransform(112.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bar1, new cjs.Rectangle(0,-11,225,22), null);


(lib.Bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().dr(-112.5,-11,225,22);
	this.shape.setTransform(112.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bar, new cjs.Rectangle(0,-11,225,22), null);


(lib.SampleLoader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dot 1
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},8).wait(16));

	// dot 2
	this.instance_1 = new lib.Dot();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},8).wait(8));

	// dot 3
	this.instance_2 = new lib.Dot();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(8));

	// dots
	this.instance_3 = new lib.Dot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-25,0);
	this.instance_3.alpha = 0.199;

	this.instance_4 = new lib.Dot();
	this.instance_4.parent = this;
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.Dot();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25,0);
	this.instance_5.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-7,64.1,14.1);


(lib.Meter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.top = new lib.Bar1();
	this.top.name = "top";
	this.top.parent = this;

	this.bottom = new lib.Bar();
	this.bottom.name = "bottom";
	this.bottom.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom},{t:this.top}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Meter, new cjs.Rectangle(0,-11,225,22), null);


(lib.HitButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBIIAAh+IgwAAIAAgQIBxAAIAAAQIgvAAIAAB+g");
	this.shape.setTransform(10,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBIIAAiOIASAAIAACOg");
	this.shape_1.setTransform(1.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBIIAAhEIhJAAIAABEIgTAAIAAiOIATAAIAAA6IBJAAIAAg6IATAAIAACOg");
	this.shape_2.setTransform(-8.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBAIAAhwIgqAAIAAgQIBlAAIAAAQIgrAAIAABwg");
	this.shape_3.setTransform(9,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIAQAAIAACAg");
	this.shape_4.setTransform(1.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBAIAAg8IhBAAIAAA8IgSAAIAAiAIASAAIAAA1IBBAAIAAg1IARAAIAACAg");
	this.shape_5.setTransform(-8,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).wait(1));

	// shapes
	this.instance = new lib.HitButtonShape();
	this.instance.parent = this;

	this.instance_1 = new lib.HitButtonShape1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.9,scaleY:0.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-16,82,32);


// stage content:
(lib.animate_cc_html5_meter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{win:101,lose:102});

	// timeline functions:
	this.frame_0 = function() {
		this.meterPower = 0.005;
		this.playerPower = 0.02;
		this.totalEnergy;
		this.down = false;
		this.keys = {};
		this.winCondition = 1 - this.meterPower;
		this.loseCondition = 0;
		this.winDestination = "win";
		this.loseDestination = "lose";
		this.keysListenersAdded = false;
		this.loopAdded = false;
		
		// this.keys used to raise the bar
		this.keyCodes =
		{
			space:32,
			j:    74,
			k:    75
		};
		
		// press these this.keys in sequence to raise the bar
		this.keysSequence =
		[
			this.keyCodes.j,
			this.keyCodes.k
		];
		
		this.count = 0;
		
		this.resizeMeter = function(force)
		{
			this.totalEnergy += force;
			
			if (this.totalEnergy < 0)
				this.totalEnergy = 0;
			else if (this.totalEnergy > 1)
				this.totalEnergy = 1;
		};
		
		this.loop = function(e)
		{		
			this.resizeMeter(-this.meterPower);	
			this.meter.top.scaleX = this.totalEnergy;
			
			if (this.totalEnergy >= this.winCondition)
				this.setResult(this.winDestination);
			else if (this.totalEnergy == this.loseCondition)
				this.setResult(this.loseDestination);	
		};
		
		this.hitHandler = function(e)
		{
			this.resizeMeter(this.playerPower);
		};
		
		this.keyDown = function(e)
		{
			if(this.down)
				return;
		
			this.down = true;
			
			if (e.keyCode == this.keysSequence[this.count % this.keysSequence.length])
			{
				this.resizeMeter(this.playerPower);
				this.count++;
			}		
			else
				this.count = 0;
		};
		
		this.keyUp = function(e)
		{
		    this.down = false;	
		};
		
		this.setResult = function(destination)
		{
			this.gotoAndStop(destination);
			createjs.Ticker.off("tick", loop);
			this.loopAdded = false;
		};
		
		this.startGame = function(win, lose, totalEnergy)
		{
			this.stop();
			this.meter.top.scaleX = 1;
			this.totalEnergy = totalEnergy;
			
			if (typeof(win) !== "undefined")
				this.winDestination = win;
			
			if (typeof(lose) !== "undefined")
				this.loseDestination = lose;
			
			if (!this.hitButton.hasEventListener("click"))
				this.hitButton.on("click", this.hitHandler.bind(this));
			
			if (!this.keysListenersAdded)
			{
				document.addEventListener("keydown", this.keyDown.bind(this), false);	
				document.addEventListener("keyup",   this.keyUp.bind(this),   false);
				this.keysListenersAdded = true;
			}	
			
			if (!this.loopAdded)
			{
				createjs.Ticker.on("tick", this.loop.bind(this));
				this.loopAdded = true;
			}
		};
	}
	this.frame_99 = function() {
		this.startGame(this.timeline.position + 1, "lose", 1 - this.meterPower);
	}
	this.frame_100 = function() {
		this.startGame("win", "loses", 0.75);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1).call(this.frame_100).wait(3));

	// rounds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAIBrIAAh7IAAgUIABgXIgPAPIgYAUIgWgbIBEg3IAlAAIAADVg");
	this.shape.setTransform(333.9,107.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhYBrIAAjVIBDAAQA0AAAdAcQAdAbAAAyQAAA0geAcQgeAcg4AAgAgqBFIATAAQBBAAAAhFQAAhFg8AAIgYAAg");
	this.shape_1.setTransform(308.4,107.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAlBrIhcihIgBAAQACArAAARIAABlIgoAAIAAjVIA5AAIBcCfIACAAQgDgqAAgQIAAhlIApAAIAADVg");
	this.shape_2.setTransform(284.7,107.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhABXQgXgVAAgkIAAiKIAuAAIAACDQAAAYAJAMQAKALAWAAQAWAAAKgLQAKgMAAgZIAAiCIAuAAIAACKQAAAYgLARQgLATgTAJQgVAKgagBQgpABgXgWg");
	this.shape_3.setTransform(261.1,107.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhLBSQgagdAAg1QAAg1AagcQAbgcAwAAQAyAAAaAcQAaAdAAA0QAAA1gbAdQgaAcgxAAQgwAAgbgcgAgog1QgNASAAAjQAAAkANASQAOASAaAAQA2AAAAhIQAAhHg2AAQgaAAgOASg");
	this.shape_4.setTransform(237.8,107.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAjBrIgyhSIgYAAIAABSIguAAIAAjVIA/AAQAqAAAWAQQAUAPABAhQAAATgLAPQgLAOgTAHIA/BegAgngLIAOAAQAWAAAKgHQAJgIABgPQAAgPgLgGQgJgHgXAAIgNAAg");
	this.shape_5.setTransform(217.3,107.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhKBsIAAgfIA2g2IAeghQAIgJADgJQADgIAAgJQAAgNgHgFQgHgHgLAAQgMAAgMAGQgLAGgNAKIgZgdQAQgOAKgFQAKgFANgEQAMgDAOAAQAVAAAPAIQAPAHAIANQAJAOAAAQQAAAPgFANQgFANgLAMQgLAOgcAaIgaAaIAAACIBcAAIAAAlg");
	this.shape_6.setTransform(335.5,107.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},99).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).to({state:[]},1).wait(2));

	// sample loader
	this.instance = new lib.SampleLoader();
	this.instance.parent = this;
	this.instance.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},99).wait(4));

	// result
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgdDXIAAg8IA7AAIAAA8gAgQBsIgQjjIAAhfIBBAAIAABfIgQDjg");
	this.shape_7.setTransform(406.7,199.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("ABvDXIjhlRIAAFRIg2AAIAAmtIA6AAIDhFQIAAlQIA2AAIAAGtg");
	this.shape_8.setTransform(376.4,199.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgcDXIAAmtIA4AAIAAGtg");
	this.shape_9.setTransform(346.8,199.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("ABnDXIhalGIgNgzQgGAegGAVIhbFGIg6AAIhymtIA6AAIBBEZQALAsAHAsIAUhQIBRkhIBFAAIA9DZQAXBRAKBHQAJgpANg1IBDkTIA5AAIh1Gtg");
	this.shape_10.setTransform(310,199.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhhDFQgmgUgRgnQgQgoAAhEIAAj4IA5AAIAAD4QAAA3AKAbQALAaAZAOQAaAPAkAAQA+AAAbgcQAagdAAhQIAAj4IA5AAIAAD4QAABAgPAmQgPAmglAYQgnAZg+AAQg8AAgmgWg");
	this.shape_11.setTransform(243.3,199.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AhrDBQgwgegZgyQgYgzAAg4QAAhqA5g9QA6g8BZAAQA8AAAwAcQAvAcAaAzQAYAzAABAQAABBgaAzQgaA0gxAbQgwAag4AAQg8AAgvgdgAhmiDQgsApAABgQAABOAqAtQAqAsA+AAQBAAAAqgtQApgtAAhTQAAgzgSgnQgSgngigWQgigVgqAAQg8AAgrApg");
	this.shape_12.setTransform(198.5,199.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgeDXIAAi2Iimj3IBFAAIBVCCQAXAkATAkQAUghAbgqIBUh/IBCAAIisD3IAAC2g");
	this.shape_13.setTransform(154.9,199.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_14.setTransform(394.1,212.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_15.setTransform(382.4,212.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_16.setTransform(370.8,212.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhvCWIAAkrIDYAAIAAAjIiwAAIAABcIClAAIAAAiIilAAIAABnIC3AAIAAAjg");
	this.shape_17.setTransform(351.4,199.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("Ag7CPQgcgLgPgYQgQgYAAgeIAlgDQADAWAJAPQAKAOAVAJQAUAJAZAAQAWAAASgHQARgGAJgMQAIgMAAgOQAAgOgIgLQgIgKgTgIQgMgEgpgKQgpgKgQgIQgWgMgLgQQgKgQAAgWQAAgWANgUQANgUAZgKQAZgKAeAAQAggBAZALQAaAMAOAUQANAVABAbIgmACQgCgcgSgPQgSgOgiAAQgkAAgQANQgRAOAAASQAAAQAMALQALAKAwALQAwALATAIQAaAMAMASQAMATAAAXQAAAYgNAWQgOAVgaAMQgZAMghgBQgoAAgbgMg");
	this.shape_18.setTransform(322.7,199.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AhLCHQghgVgSgjQgRgjAAgoQAAhKAogqQAogqA/AAQAqAAAhATQAiAVARAjQASAjAAAsQAAAvgTAjQgSAlgiASQgiASgnAAQgqAAghgUgAhHhbQgfAdAABDQAAA2AdAfQAeAgArAAQAtAAAdggQAdgfAAg7QAAgkgNgbQgMgbgYgPQgYgPgeAAQgpAAgeAdg");
	this.shape_19.setTransform(292.6,199.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AhdCWIAAkrIAoAAIAAEIICTAAIAAAjg");
	this.shape_20.setTransform(265.3,199.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AhDCKQgbgOgMgcQgLgbAAgwIAAitIAoAAIAACtQAAAnAHASQAHATASAKQASAKAZAAQArAAATgUQASgUAAg4IAAitIAoAAIAACtQAAAtgKAbQgKAagbARQgbARgrAAQgqAAgagPg");
	this.shape_21.setTransform(226,199.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AhLCHQghgVgSgjQgRgjAAgoQAAhKAogqQAogqA/AAQAqAAAhATQAiAVARAjQASAjAAAsQAAAvgTAjQgSAlgiASQgiASgnAAQgqAAghgUgAhHhbQgfAdAABDQAAA2AdAfQAeAgArAAQAtAAAdggQAdgfAAg7QAAgkgNgbQgMgbgYgPQgYgPgeAAQgpAAgeAdg");
	this.shape_22.setTransform(194.6,199.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgVCWIAAh/Ih0isIAxAAIA7BaQAQAaAOAZQANgXAUgeIA5hYIAvAAIh4CsIAAB/g");
	this.shape_23.setTransform(164.1,199.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},101).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

	// meter
	this.meter = new lib.Meter();
	this.meter.name = "meter";
	this.meter.parent = this;
	this.meter.setTransform(162.6,200);
	this.meter._off = true;

	this.timeline.addTween(cjs.Tween.get(this.meter).wait(99).to({_off:false},0).wait(1).to({_off:true},1).wait(2));

	// hit button
	this.hitButton = new lib.HitButton();
	this.hitButton.name = "hitButton";
	this.hitButton.parent = this;
	this.hitButton.setTransform(275,327);
	this.hitButton._off = true;
	new cjs.ButtonHelper(this.hitButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.hitButton).wait(99).to({_off:false},0).to({_off:true},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(518,393,64.1,14.1);
// library properties:
lib.properties = {
	id: '84151A5D76A57140A2B821C355725581',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['84151A5D76A57140A2B821C355725581'] = {
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