(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.FadeSoundButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3C515D").ss(2,1,1).p("AgCi7QBLBOAABtQAAAAAAAAQAABvhOBNAhHh3QAxAxAABGQAAAAAAAAQAABGgyAxAghiVQA8A+AABXQAAAAAAAAQgBBZg9A9");
	this.shape.setTransform(6.6344,0.0141,0.5625,0.5625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C515D").s().p("AARBWIAAiqIBnhgIAAFpgAh3BVIAAioIB4AAIAACog");
	this.shape_1.setTransform(-6.1766,-0.1125,0.5625,0.5625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4F86A6").ss(2,1,1).p("AgDi7QBMBOAABtQAAAAAAAAQAABvhOBNAhHh3QAxAxAABGQAAAAAAAAQgBBGgxAxAghiVQA8A+AABXQAAAAAAAAQgBBZg9A9");
	this.shape_2.setTransform(6.6125,-0.0234,0.5625,0.5625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F86A6").s().p("AARBVIAAipIBnhgIAAFpgAh3BVIAAipIB4AAIAACpg");
	this.shape_3.setTransform(-6.1984,-0.15,0.5625,0.5625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6C7A83").ss(2,1,1).p("AhUBVIBUhVIBVhUABVBVIhVhVIhUhU");
	this.shape_4.setTransform(8.125,-0.05,0.5625,0.5625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C7A83").s().p("AARBWIAAiqIBnhgIAAFpgAh3BVIAAioIB4AAIAACog");
	this.shape_5.setTransform(-6.1766,-0.1625,0.5625,0.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	// Hit
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiNCEIAAkHIEbAAIAAEHg");
	this.shape_6.setTransform(0.025,0);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-13.2,28.299999999999997,26.5);


// stage content:
(lib.animate_cc_html5_canvas_fade_sound_on_toggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.folders = 
		{
			bgm:"sounds/bgm/",
			sfx:"sounds/sfx/"
		};
		
		this.sounds =
		{
			city:  {type:"bgm",  id:"city",  file:"City_Plaza.mp3",                   volume:0.5},
			trip:  {type:"bgm",  id:"trip",  file:"Easy_Trip_Trap.mp3",               volume:0.6},
			gas:   {type:"bgm",  id:"gas",   file:"Gas_Pedal.mp3",                    volume:0.6},
			bonus: {type:"sfx",  id:"bonus", file:"190019__aiwha__hit-on-wood-3.wav", volume:0.4}
		};
		
		this.soundCount = 0;
		this.playlist = {};
		
		var folders = this.folders;
		var sounds = this.sounds;
		var soundButton = this.soundButton;
		var soundCount = this.soundCount;
		var playlist = this.playlist;
		
		this.start = function()
		{
			console.log(soundButton);
			
			createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
			createjs.Sound.alternateExtensions = ["mp3"];
			createjs.Sound.on("fileload", exportRoot.soundLoaded, exportRoot);
			
			for (var key in sounds)
				createjs.Sound.registerSound(folders[sounds[key].type] + sounds[key].file, sounds[key].id);
		};
		
		this.soundLoaded = function(e)
		{
			playlist[e.id] = createjs.Sound.play(e.id);
			playlist[e.id].volume = sounds[e.id].volume;
			playlist[e.id].stop();	
			soundCount++;	
				
			if (soundCount == exportRoot.getTotalSounds())
			{
				soundButton.on("click", exportRoot.fadeSound, null, false, {id:"gas", duration:500});
				exportRoot.playSound("gas", "bgm");
			}
		};
		
		this.playSound = function(soundName, type, loop = 0, soundToStop = "", volume = 1)
		{
			if (soundToStop)
				exportRoot.stopSound(soundToStop);
			
			playlist[sounds[soundName].id].play({interrupt:createjs.Sound.INTERRUPT_ANY, loop:loop, volume:volume});
		};
		
		this.stopSound = function(soundName)
		{
			playlist[soundName].stop();
		};
		
		this.getTotalSounds = function()
		{	
			return Object.keys(sounds).length;
		};
		
		this.fadeSound = function(e, data)
		{
			var volume;
			
			if (e.currentTarget.toggled)
			{
				exportRoot.toggleButton(e.currentTarget, {outLabel:0, overLabel:1, downLabel:2});
				volume = 1;
			}		
			else
			{
				exportRoot.toggleButton(e.currentTarget, {outLabel:2, overLabel:2, downLabel:2});
				volume = 0;
			}		
				
			e.currentTarget.toggled = !e.currentTarget.toggled;
			createjs.Tween.get(playlist[sounds[data.id].id]).to({volume:volume}, data.duration);
		}
		
		this.toggleButton = function(button, frames)
		{
			var listeners = button._listeners;
				
			if (!listeners)
				return;
			
			for (var key in listeners)
			{
				var listener = listeners[key][0];
						
				if (typeof(listener.outLabel) !== 'undefined')
					listener.outLabel = frames.outLabel;
				
				if (typeof(listener.overLabel) !== 'undefined')
					listener.overLabel = frames.overLabel;
				
				if (typeof(listener.downLabel) !== 'undefined')
					listener.downLabel = frames.downLabel;
			}
		};
		
		this.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Sound Button
	this.soundButton = new lib.FadeSoundButton();
	this.soundButton.name = "soundButton";
	this.soundButton.parent = this;
	this.soundButton.setTransform(276.1,200);
	new cjs.ButtonHelper(this.soundButton, 0, 1, 2, false, new lib.FadeSoundButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.soundButton).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(538.2,388.4,-248.20000000000005,-176.79999999999998);
// library properties:
lib.properties = {
	id: '4C7145194CAA6746BFB99907DBCF98AD',
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
an.compositions['4C7145194CAA6746BFB99907DBCF98AD'] = {
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