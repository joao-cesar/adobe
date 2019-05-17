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


(lib.LoaderCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LoaderCircle, new cjs.Rectangle(-3.6,-3.6,7.2,7.2), null);


(lib.FingerHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.FingerHit, new cjs.Rectangle(-20,-20,40,40), null);


(lib.StopButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhYBZIAAixICxAAIAACxg");
	this.shape.setTransform(0,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhYBZIAAixICxAAIAACxg");
	this.shape_1.setTransform(0,0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhUBVIAAipICpAAIAACpg");
	this.shape_2.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Hit
	this.instance = new lib.FingerHit();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhziXIDnCXIjnCYg");
	this.shape.setTransform(0.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhziXIDnCXIjnCYg");
	this.shape_1.setTransform(0.05,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhtiQIDbCQIjbCRg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Hit
	this.instance = new lib.FingerHit();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.NextSongButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ABXBCIAAhAIAAhDIAVAAIAACDgAgKACIAAg/IBhA/IhhBAgAhrg9IBhA/IhhBAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABXBCIAAhAIAAhDIAVAAIAACDgAgKACIAAg/IBhA/IhhBAgAhrg9IBhA/IhhBAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABSA+IAAg8IAAg/IAVAAIAAB7gAgJACIAAg8IBbA8IhbA8gAhmg6IBdA8IhdA8g");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Hit
	this.instance = new lib.FingerHit();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.LoopButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1.5,1,1).p("Ah8g3QABgjAjAAICyAAQAjAAAAAjAB9A3QAAAkgjAAIiyAAQgkAAAAgk");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AB8A4Ig2AAIA2g2IA3A2gAiyg3IA2AAIA2AAIg2A2g");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("Ah8g3QABgjAjAAICyAAQAjAAAAAjAB9A3QAAAkgjAAIiyAAQgkAAAAgk");
	this.shape_2.setTransform(0,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AB8A4Ig2AAIA2g2IA3A2gAiyg3IA2AAIA2AAIg2A2g");
	this.shape_3.setTransform(0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("Ah1g1QAAggAhAAICpAAQAhAAAAAhAB2A1QAAAhghAAIipAAQghAAAAgh");
	this.shape_4.setTransform(0,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AB2A1IgzAAIAzgzIA0AzgAipg0IA0AAIAzAAIg0Azg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	// Hit
	this.instance = new lib.FingerHit();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.Loader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Circle
	this.instance = new lib.LoaderCircle();
	this.instance.parent = this;
	this.instance.setTransform(-12.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({x:0},0).wait(20).to({x:12.9},0).wait(20));

	// Circles
	this.instance_1 = new lib.LoaderCircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.9,0);
	this.instance_1.alpha = 0.1484;

	this.instance_2 = new lib.LoaderCircle();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0.1484;

	this.instance_3 = new lib.LoaderCircle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.9,0);
	this.instance_3.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-3.6,33,7.2);


// stage content:
(lib.animate_cc_html5_canvas_jukebox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var myRoot = this;
		
		var queue;
		
		var loopButton;
		var previousButton;
		var playButton;
		var stopButton;
		var nextButton;
		var loaderAnim;
		var sourceText;
		
		var canLoop = true;
		var loopButtonEnabledAlpha = 1;
		var loopButtonDisabledAlpha = 0.2;
		var currentSongIndex = 0;
		var previousSongIndex = currentSongIndex;
		var sources = 
		[
			"https://upload.wikimedia.org/wikipedia/commons/6/65/Star_Spangled_Banner_instrumental.ogg",
			"https://upload.wikimedia.org/wikipedia/commons/0/0d/Hino-Nacional-Brasil-instrumental-mec.ogg",
			"https://upload.wikimedia.org/wikipedia/commons/a/a3/Kimi_ga_Yo_instrumental.ogg"
		];
		
		function start()
		{
			createjs.Touch.enable(stage);
			
			loaderAnim = myRoot.loaderAnim;
			sourceText = myRoot.sourceText;
			
			loopButton = myRoot.loopButton;
			previousButton = myRoot.previousButton;
			playButton = myRoot.playButton;
			stopButton = myRoot.stopButton;
			nextButton = myRoot.nextButton;	
				
			loopButton.visible = false;
			previousButton.visible = false;
			playButton.visible = false;
			stopButton.visible = false;
			nextButton.visible = false;
			
			setLoopButton();
			
			queue = new createjs.LoadQueue();
			queue.installPlugin(createjs.Sound);
			queue.addEventListener("complete", handleComplete);
		
			queue.loadManifest
			(
				[
					{
						src: sources[0],
						id: "sound1"
					},
					{
						src: sources[1],
						id: "sound2"
					},
					{
						src: sources[2],
						id: "sound3"
					}
				]
			);	
		}
		
		function handleComplete(event)
		{
			myRoot.removeChild(loaderAnim);
			
			myRoot.playlist = [];
			myRoot.playlist[0] = createjs.Sound.createInstance("sound1");
			myRoot.playlist[1] = createjs.Sound.createInstance("sound2");
			myRoot.playlist[2] = createjs.Sound.createInstance("sound3");
			
			loopButton.on("click", function(e)
			{
				canLoop = !canLoop;
				setLoopButton();
			});
			
			previousButton.on("click", function(e)
			{
				changeSong(-1);
				setEndListener();
			});
			
			playButton.on("click", function(e)
			{
				playSong(currentSongIndex);
				setSourceText("source: " + sources[currentSongIndex]);
				e.currentTarget.visible = false;
				stopButton.visible = true;
			});
			
			stopButton.on("click", function(e)
			{
				stopSong(currentSongIndex);
				setSourceText("");
				e.currentTarget.visible = false;
				playButton.visible = true;
			});
			
			nextButton.on("click", function(e)
			{
				changeSong(1);
				setEndListener();
			});
			
			playSong(currentSongIndex);
			setSourceText("source: " + sources[currentSongIndex]);
			setEndListener();
			
			loopButton.alpha = 0;
			loopButton.y += 50;
			loopButton.visible = true;
			
			previousButton.alpha = 0;
			previousButton.y += 50;
			previousButton.visible = true;
			
			stopButton.alpha = 0;
			stopButton.y += 50;
			stopButton.visible = true;
			
			nextButton.alpha = 0;
			nextButton.y += 50;
			nextButton.visible = true;
			
			createjs.Tween.get(loopButton).wait(0).to({alpha:1, y:loopButton.y - 50}, 350, createjs.Ease.cubicOut);
			createjs.Tween.get(previousButton).wait(100).to({alpha:1, y:previousButton.y - 50}, 350, createjs.Ease.cubicOut);
			createjs.Tween.get(stopButton).wait(200).to({alpha:1, y:stopButton.y - 50}, 350, createjs.Ease.cubicOut);
			createjs.Tween.get(nextButton).wait(300).to({alpha:1, y:nextButton.y - 50}, 350, createjs.Ease.cubicOut);
		}
		
		function setEndListener()
		{
			myRoot.playlist[previousSongIndex].off("complete", songCompletedHandler);
			myRoot.playlist[currentSongIndex].on("complete", songCompletedHandler);
		}
		
		function songCompletedHandler(e)
		{
			e.currentTarget.off("complete", songCompletedHandler);
			
			if (!canLoop && currentSongIndex === myRoot.playlist.length - 1)
			{
				stopButton.visible = false;
				playButton.visible = true;
				setSourceText("");
				return;
			}		
			
			changeSong(1);
			setEndListener();
		}
		
		function stopSong(index)
		{
			myRoot.playlist[index].stop();
		}
		
		function playSong(index)
		{
			myRoot.playlist[index].play();
		}
		
		function changeSong(offset)
		{
			stopButton.visible = true;
			playButton.visible = false;
			stopSong(previousSongIndex);
			currentSongIndex += offset;
			currentSongIndex = loopClamp(currentSongIndex, 0, myRoot.playlist.length - 1);
			previousSongIndex = currentSongIndex;		
			playSong(currentSongIndex);
			setSourceText("source: " + sources[currentSongIndex]);
		}
		
		function setLoopButton()
		{
			loopButton.alpha = canLoop ? loopButtonEnabledAlpha : loopButtonDisabledAlpha;
		}
		
		function setSourceText(string)
		{
			sourceText.text = string;
		}
		
		function loopClamp(value, min, max)
		{
			if (value < min)
				return max;
			else if (value > max)
				return min;
			else
				return value;
		}
		
		start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Loader Animation
	this.loaderAnim = new lib.Loader();
	this.loaderAnim.name = "loaderAnim";
	this.loaderAnim.parent = this;
	this.loaderAnim.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.loaderAnim).wait(1));

	// Source Text
	this.sourceText = new cjs.Text("", "11px 'Arial'", "#666666");
	this.sourceText.name = "sourceText";
	this.sourceText.textAlign = "center";
	this.sourceText.lineHeight = 14;
	this.sourceText.lineWidth = 546;
	this.sourceText.parent = this;
	this.sourceText.setTransform(275,280.95);

	this.timeline.addTween(cjs.Tween.get(this.sourceText).wait(1));

	// Loop Button
	this.loopButton = new lib.LoopButton();
	this.loopButton.name = "loopButton";
	this.loopButton.parent = this;
	this.loopButton.setTransform(167,368);
	new cjs.ButtonHelper(this.loopButton, 0, 1, 2, false, new lib.LoopButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.loopButton).wait(1));

	// Previous Button
	this.previousButton = new lib.NextSongButton();
	this.previousButton.name = "previousButton";
	this.previousButton.parent = this;
	this.previousButton.setTransform(244.7,368,1,1,0,0,180);
	new cjs.ButtonHelper(this.previousButton, 0, 1, 2, false, new lib.NextSongButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previousButton).wait(1));

	// Play Button
	this.playButton = new lib.PlayButton();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(317.35,368);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.PlayButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(1));

	// Stop Button
	this.stopButton = new lib.StopButton();
	this.stopButton.name = "stopButton";
	this.stopButton.parent = this;
	this.stopButton.setTransform(317.4,367.95);
	new cjs.ButtonHelper(this.stopButton, 0, 1, 2, false, new lib.StopButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.stopButton).wait(1));

	// Next Button
	this.nextButton = new lib.NextSongButton();
	this.nextButton.name = "nextButton";
	this.nextButton.parent = this;
	this.nextButton.setTransform(390.05,368);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 2, false, new lib.NextSongButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nextButton).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,396.4,275,-13.099999999999966);
// library properties:
lib.properties = {
	id: '14FEE7E11A4FA440950B090E7C2E6CB9',
	width: 550,
	height: 400,
	fps: 60,
	color: "#F8F8F8",
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
an.compositions['14FEE7E11A4FA440950B090E7C2E6CB9'] = {
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