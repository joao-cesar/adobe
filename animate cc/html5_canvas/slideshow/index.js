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


(lib.Rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EhK/gqLMCV/AAAMAAABUXMiV/AAAg");
	this.shape.setTransform(480,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape_1.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,962,542);


(lib.NavigationButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBUIjOAAIAAimIDOAAIAAhGICZCYIiZCZg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-15.3,36.1,30.700000000000003);


(lib.Slide4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifEkQg7g0gJhXIBZgHQAKBAAkAhQAjAhAzAAQA8AAAqguQAqguAAhMQAAhIgogpQgpgqhBAAQgoAAghATQghASgTAdIhPgLIBDlgIFUAAIAABRIkRAAIglC5QA+grBDAAQBaAAA+A+QA+A9AABiQAABeg3BEQhCBThxAAQheAAg7g1g");
	this.shape.setTransform(480.025,269.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Slide4, new cjs.Rectangle(-1,-1,962,542), null);


(lib.Slide3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA9FXIAAikIkqAAIAAhOIE5m7IBFAAIAAG7IBdAAIAABOIhdAAIAACkgAiaBlIDXAAIAAk0g");
	this.shape.setTransform(478.225,268.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Slide3, new cjs.Rectangle(-1,-1,962,542), null);


(lib.Slide2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicEqQg7g2gJhXIBUgLQAOBIAkAgQAjAfAyAAQA6AAApgpQAqgpAAg9QAAg6gnglQglgng7AAQgXABgkAIIAJhJIAOABQA1AAArgcQArgbAAg8QABgtgggfQgfgegxAAQgxAAghAeQghAfgJA+IhUgPQAPhUA2gvQA3gvBSAAQA3AAAvAZQAwAXAZAqQAZApAAAwQAAAsgYAlQgXAkgwAWQA+AOAhAsQAiAsAABCQAABahCA/QhCA+hiAAQhbAAg8g1g");
	this.shape.setTransform(479.8,269.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Slide2, new cjs.Rectangle(-1,-1,962,542), null);


(lib.Slide1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiFZQgBgeALgdQARguAmgtQAmgtBJg7QBvhbAng2QAng1AAgwQAAgygjgjQgkgig6AAQg8AAgkAlQglAkgBBBIhWgJQAJhhA6gzQA6gzBhAAQBjAAA5A3QA6A2AABSQAAApgRAoQgRAngnAsQgnAshbBNQhLBAgVAWQgWAXgOAXIFQAAIAABRg");
	this.shape.setTransform(478.8708,268.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Slide1, new cjs.Rectangle(-1,-1,962,542), null);


(lib.Slide0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArFZIAAoYQgfAcgxAdQgxAdgoAPIAAhRQBHgiA2gvQA0gvAVgtIA2AAIAAKxg");
	this.shape.setTransform(476.35,268.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Slide0, new cjs.Rectangle(-1,-1,962,542), null);


// stage content:
(lib.animate_cc_html5_canvas_slideshow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{slide0:0,slide1:29,slide2:59,slide3:89,slide4:119});

	// timeline functions:
	this.frame_0 = function() {
		var tl = this;
		var nextButton = tl.nextButton;
		var prevButton = tl.prevButton;
		
		tl.frame = tl.currentFrame;
		tl.counter = 0;
		tl.totalSlides = Object.keys(tl.timeline._labels).length;
		
		tl.start = function()
		{
			tl.stop();
		
			if (!tl.started)
			{
				tl.frame = tl.currentFrame;
				tl.transitionDuration = 500;
				tl.transitionEase = createjs.Ease.sineInOut;
				
				nextButton.on("click", tl.nextSlide);
				prevButton.on("click", tl.prevSlide);
				
				tl.started = true;
			}
		};
		
		tl.nextSlide = function(e)
		{
			tl.counter = Math.min(++tl.counter, tl.totalSlides - 1);
			tl.navigate(tl.timeline._labels["slide" + tl.counter], tl.transitionDuration, tl.transitionEase);
		};
		
		tl.prevSlide = function(e)
		{
			tl.counter = Math.max(--tl.counter, 0);
			tl.navigate(tl.timeline._labels["slide" + tl.counter], tl.transitionDuration, tl.transitionEase);
		};
		
		tl.navigate = function(destination, duration, ease)
		{
			createjs.Tween
				.get(tl)
				.to({frame:destination}, duration, ease)
				.addEventListener("change", tl.changeHandler);
		};
		
		tl.changeHandler = function(e)
		{
			tl.gotoAndStop(Math.ceil(tl.frame));
		};
		
		tl.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// navigation
	this.prevButton = new lib.NavigationButton();
	this.prevButton.name = "prevButton";
	this.prevButton.parent = this;
	this.prevButton.setTransform(855.15,505.35,1,1,0,0,180);
	new cjs.ButtonHelper(this.prevButton, 0, 1, 1);

	this.nextButton = new lib.NavigationButton();
	this.nextButton.name = "nextButton";
	this.nextButton.parent = this;
	this.nextButton.setTransform(909.15,505.35);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextButton},{t:this.prevButton}]}).wait(120));

	// slide4
	this.instance = new lib.Slide4();
	this.instance.parent = this;
	this.instance.setTransform(960,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({x:0},30,cjs.Ease.none).wait(1));

	// slide3
	this.instance_1 = new lib.Slide3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({x:0},30,cjs.Ease.none).to({x:-960},30,cjs.Ease.none).wait(1));

	// slide2
	this.instance_2 = new lib.Slide2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:0},30,cjs.Ease.none).to({x:-960},30,cjs.Ease.none).to({_off:true},1).wait(30));

	// slide1
	this.instance_3 = new lib.Slide1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:0},29,cjs.Ease.none).to({x:-960},30,cjs.Ease.none).to({_off:true},1).wait(60));

	// slide0
	this.instance_4 = new lib.Slide0();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-960},29,cjs.Ease.none).to({_off:true},1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480.5,269,2401,272);
// library properties:
lib.properties = {
	id: '9805ACA12C03DE4C9EA2CF95CA7AB807',
	width: 960,
	height: 540,
	fps: 60,
	color: "#CCCCCC",
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
an.compositions['9805ACA12C03DE4C9EA2CF95CA7AB807'] = {
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