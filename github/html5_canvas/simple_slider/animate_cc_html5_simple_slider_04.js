(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.SliderButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwCZIAwkxIAxExg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-15.2,9.7,30.5);


(lib.Highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(86,197,215,0.498)").s().p("EgnDADSIAAmjMBOHAAAIAAGjg");
	this.shape.setTransform(250,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,42);


(lib.SliderBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(500));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnDADSIAAmjMBOHAAAIAAGjg");
	mask.setTransform(250,21);

	// Highlight
	this.instance = new lib.Highlight("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-500,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},499).wait(1));

	// Regions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D516D").s().p("AurDSIAAmjIdXAAIAAGjg");
	this.shape.setTransform(94,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#878787").s().p("AheDSIAAmjIC+AAIAAGjg");
	this.shape_1.setTransform(249,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BAD8E1").s().p("AkADSIAAmjIIBAAIAAGjg");
	this.shape_2.setTransform(213.725,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F08360").s().p("AtMDSIAAmjIaZAAIAAGjg");
	this.shape_3.setTransform(343.025,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B4631").s().p("AlqDSIAAmjILVAAIAAGjg");
	this.shape_4.setTransform(463.75,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,42);


// stage content:
(lib.animate_cc_html5_simple_slider_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button.on("mousedown", function(e)
		{
			e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x;
		}.bind(this));
		
		this.button.on("pressmove", function(e)
		{
			e.target.x = this.clamp((e.stageX / stage.scaleX) - e.target.offsetX, this.bar.x, this.bar.x + this.bar.nominalBounds.width);	
			this.setProportion();
		}.bind(this));
		
		this.setProportion = function()
		{
			var prop = (this.button.x - this.bar.x) / this.bar.nominalBounds.width;
			
			this.txt.x = this.button.x;
			this.txt.text = Math.round(prop * 100) + "%";
			this.bar.gotoAndStop(Math.floor(this.bar.timeline.duration * prop));
		}.bind(this);
		
		this.clamp = function(value, min, max)
		{
			if (value < min)
				return min;
			else if (value > max)
				return max;
			else
				return value;
		}
		
		setTimeout(this.setProportion, 0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Bar
	this.txt = new cjs.Text("38%", "14px 'Arial'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 18;
	this.txt.lineWidth = 38;
	this.txt.parent = this;
	this.txt.setTransform(192.7,189.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5D5B").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAKgKAOAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAoAAQgCgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape.setTransform(83.8,154.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5D5B").s().p("AASAlIAAgrQgBgHgBgEQgCgEgDgCQgEgCgFAAQgGAAgGAEQgGAGAAANIAAAnIgMAAIAAhHIALAAIAAAKQAIgMAOAAQAGAAAGACQAGACACAEQADAEABAFIAAANIAAArg");
	this.shape_1.setTransform(76,154.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E5D5B").s().p("AgYAtQgLgHgGgMQgGgLAAgOQAAgYANgOQAOgOAUAAQAOAAALAHQALAHAGALQAGAMAAAOQAAAQgGAMQgGAMgMAGQgLAGgNAAQgNAAgLgHgAgXgeQgKAKAAAWQAAASAJAKQAKALAOAAQAPAAAKgLQAJgKAAgUQAAgLgEgJQgEgJgIgFQgIgFgKAAQgNAAgKAJg");
	this.shape_2.setTransform(66.725,153.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E5D5B").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_3.setTransform(55.775,153.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E5D5B").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAJgKAOAAQAPAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAEgDAEgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgBgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_4.setTransform(50.3,154.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E5D5B").s().p("AgTAoIAAAJIgMAAIAAhjIANAAIAAAkQAIgKALAAQAGAAAGADQAGACAFAFQADAFACAHQACAGAAAIQAAATgJAKQgJAKgNAAQgLAAgIgLgAgNgHQgGAHAAAMQAAANADAGQAHAKAJAAQAHAAAGgHQAGgHAAgOQAAgNgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_5.setTransform(42.7,153.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E5D5B").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_6.setTransform(34.7,154.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E5D5B").s().p("AgeAyIAAhjIANAAIAABXIAwAAIAAAMg");
	this.shape_7.setTransform(27.225,153.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E5D5B").s().p("AARAuQgGgHAAgNQAAgLAGgIQAEgHALAAQAKAAAFAHQAHAGAAANQAAANgHAHQgFAHgKAAQgJAAgGgHgAAZAMQgDAEgBALQABAKADAEQADADAFAAQAEAAADgDQADgEAAgLQAAgKgDgEQgDgEgEAAQgFAAgDAEgAggA1IA3hpIAKAAIg2BpgAgvgFQgGgHAAgOQAAgLAGgHQAFgIAKAAQAKAAAGAHQAGAHAAANQAAANgGAGQgHAGgJAAQgJAAgGgFgAgngnQgDAEAAAKQAAAKADAEQADAEAEAAQAFAAADgEQAEgEAAgLQAAgJgEgEQgDgEgFAAQgEAAgDAEg");
	this.shape_8.setTransform(523.4,254.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E5D5B").s().p("AgWApQgJgMAAgdQgBgQAEgLQADgLAIgGQAHgGAKAAQAIAAAGADQAGADAEAHQAEAGADAIQACAJAAAOQgBASgDAKQgEAMgHAGQgHAFgLAAQgNAAgJgKgAgMghQgHAKAAAXQAAAZAGAIQAGAIAHAAQAIAAAHgIQAFgJAAgYQAAgXgFgJQgHgIgIAAQgIAAgEAHg");
	this.shape_9.setTransform(513.25,254.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E5D5B").s().p("AgWApQgKgMABgdQAAgQADgLQAEgLAHgGQAHgGAKAAQAIAAAGADQAGADAEAHQAEAGADAIQABAJAAAOQABASgEAKQgDAMgIAGQgHAFgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgJAAgYQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape_10.setTransform(505.45,254.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E5D5B").s().p("AAGAyIAAhNQgEAEgGAEQgIAFgGACIAAgMQALgFAHgHQAHgHAEgGIAHAAIAABjg");
	this.shape_11.setTransform(497.15,254.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5E5D5B").s().p("AARAuQgGgHAAgNQAAgLAFgIQAFgHALAAQAKAAAFAHQAHAGAAANQAAANgHAHQgFAHgKAAQgJAAgGgHgAAZAMQgDAEAAALQAAAKADAEQADADAFAAQAEAAADgDQADgEAAgLQAAgKgDgEQgDgEgEAAQgFAAgDAEgAgfA1IA2hpIAKAAIg2BpgAgvgFQgGgHAAgOQAAgLAGgHQAFgIAKAAQAJAAAHAHQAGAHAAANQAAANgGAGQgHAGgIAAQgKAAgGgFgAgngnQgDAEAAAKQAAAKADAEQADAEAFAAQAEAAADgEQAEgEAAgLQgBgJgDgEQgDgEgEAAQgFAAgDAEg");
	this.shape_12.setTransform(290.4,254.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5E5D5B").s().p("AgWApQgJgMAAgdQgBgQAEgLQADgLAIgGQAHgGAKAAQAIAAAGADQAGADAEAHQAEAGADAIQABAJABAOQgBASgDAKQgEAMgHAGQgHAFgLAAQgNAAgJgKgAgMghQgHAKAAAXQAAAZAGAIQAGAIAHAAQAJAAAFgIQAGgJAAgYQAAgXgGgJQgFgIgJAAQgIAAgEAHg");
	this.shape_13.setTransform(280.25,254.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E5D5B").s().p("AgXArQgIgIgBgMIAMgCQACAKAFAFQAFAEAIAAQAIAAAGgGQAGgHAAgLQAAgLgGgFQgGgGgIAAQgGAAgFADQgFADgDADIgLgCIAJgyIAxAAIAAAMIgnAAIgFAbQAJgHAJAAQANAAAJAJQAJAIAAAPQAAANgIAKQgKAMgPAAQgOAAgJgHg");
	this.shape_14.setTransform(272.525,254.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E5D5B").s().p("AARAuQgGgHAAgNQAAgLAGgIQAEgHALAAQAKAAAFAHQAHAGAAANQAAANgHAHQgFAHgKAAQgJAAgGgHgAAZAMQgDAEAAALQAAAKADAEQADADAFAAQAEAAADgDQADgEAAgLQAAgKgDgEQgDgEgEAAQgFAAgDAEgAgfA1IA2hpIAKAAIg2BpgAgvgFQgGgHAAgOQAAgLAGgHQAFgIAKAAQAJAAAHAHQAGAHAAANQAAANgGAGQgHAGgIAAQgKAAgGgFgAgngnQgDAEAAAKQAAAKADAEQADAEAFAAQAEAAADgEQAEgEAAgLQgBgJgDgEQgDgEgEAAQgFAAgDAEg");
	this.shape_15.setTransform(37.05,254.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5E5D5B").s().p("AgWApQgJgMAAgdQgBgQAEgLQADgLAIgGQAHgGAKAAQAIAAAGADQAGADAEAHQAEAGADAIQACAJgBAOQAAASgDAKQgEAMgHAGQgHAFgLAAQgNAAgJgKgAgMghQgHAKAAAXQAAAZAGAIQAGAIAHAAQAJAAAGgIQAFgJAAgYQAAgXgFgJQgGgIgJAAQgIAAgEAHg");
	this.shape_16.setTransform(26.9,254.2);

	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(192.7,224.45);
	new cjs.ButtonHelper(this.button, 0, 1, 2);

	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	this.bar.parent = this;
	this.bar.setTransform(19.8,179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.button},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.2,343.5,736.9000000000001,-79.39999999999998);
// library properties:
lib.properties = {
	id: '4B93EBDA609CD5499832C33DCA53321E',
	width: 550,
	height: 400,
	fps: 60,
	color: "#E4E0DB",
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
an.compositions['4B93EBDA609CD5499832C33DCA53321E'] = {
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