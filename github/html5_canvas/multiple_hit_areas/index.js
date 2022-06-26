(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1168,800],[0,802,249,57],[251,802,249,57],[0,861,90,94],[502,802,96,101],[92,861,90,94]]}
];


// symbols:



(lib.bestfriendsboysdating1231230 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_25 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_27 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
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


(lib.PersonRec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_27();
	this.instance.parent = this;
	this.instance.setTransform(-24.05,-25.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-25.2,48,50.5);


(lib.ButtonRec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// states
	this.instance = new lib.CachedTexturedBitmap_17();
	this.instance.parent = this;
	this.instance.setTransform(-62.2,-14.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.2,-14.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-14.1,124.5,28.5);


(lib.ButtonHit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rec
	this.instance = new lib.CachedTexturedBitmap_28();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-23.45,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-23.4,45,47);


(lib.ButtonHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_25();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-23.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-23.4,45,47);


(lib.PersonInfo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt = new cjs.Text("", "12px 'Arial'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 15;
	this.txt.lineWidth = 43;
	this.txt.parent = this;
	this.txt.setTransform(0.1,-40.05);

	this.instance = new lib.PersonRec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PersonInfo1, new cjs.Rectangle(-24,-42,48,67.3), null);


(lib.PersonInfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PersonRec("single",0);
	this.instance.parent = this;
	this.instance.setTransform(23.6,24.7);

	this.txt = new cjs.Text("", "12px 'Arial'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 15;
	this.txt.lineWidth = 43;
	this.txt.parent = this;
	this.txt.setTransform(23.5,-15.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PersonInfo, new cjs.Rectangle(-0.4,-17.3,48,67.3), null);


(lib.MovieClipApproach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("MOVIE CLIP APPROACH", "9px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(0,-5.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(1).to({y:-5.55,font:"8px 'Arial'",lineHeight:10.9},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec("single",0);
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-14.1,124.5,28.5);


(lib.Hits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hits
	this.instance = new lib.ButtonHit1();
	this.instance.parent = this;
	this.instance.setTransform(332.3,123.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ButtonHit1(), 3);

	this.instance_1 = new lib.ButtonHit1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(238.45,115.45);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.ButtonHit1(), 3);

	this.instance_2 = new lib.ButtonHit1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171.3,115.45);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.ButtonHit1(), 3);

	this.instance_3 = new lib.ButtonHit1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.85,100.55);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.ButtonHit1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hits, new cjs.Rectangle(74.5,77.1,280.4,70.1), null);


(lib.ButtonApproach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("BUTTON APPROACH", "9px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(0,-5.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(1).to({font:"8px 'Arial'",lineHeight:10.9},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec("single",0);
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-14.1,124.5,28.5);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// highlight
	this.person = new lib.PersonInfo();
	this.person.name = "person";
	this.person.parent = this;
	this.person.setTransform(179.05,17.65,1,1,0,0,0,0,0.3);
	this.person._off = true;

	this.timeline.addTween(cjs.Tween.get(this.person).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// photo
	this.instance = new lib.bestfriendsboysdating1231230();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.347,0.347);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.ButtonHit("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(332.3,123.6);

	this.instance_2 = new lib.ButtonHit("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(238.45,115.45);

	this.instance_3 = new lib.ButtonHit("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(171.3,115.45);

	this.instance_4 = new lib.ButtonHit("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(96.85,100.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,405.3,277.6);


(lib.MovieClipButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// highlight
	this.person = new lib.PersonInfo1();
	this.person.name = "person";
	this.person.parent = this;
	this.person.setTransform(202.65,42.35,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.person).wait(1));

	// hit
	this.hits = new lib.Hits();
	this.hits.name = "hits";
	this.hits.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.hits).wait(1));

	// photo
	this.instance = new lib.bestfriendsboysdating1231230();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.347,0.347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MovieClipButton, new cjs.Rectangle(0,0,405.3,277.6), null);


// stage content:
(lib.animate_cc_html5_canvas_multiple_hit_areas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var photo = root.photo0;
		
		root.start = function(e)
		{	
			root.setInfo = function(index)
			{
				var info = root.infos[index];
				
				photo.person.x = info.area[0].x;
				photo.person.y = info.area[0].y;
				photo.person.txt.text = info.name;
				photo.person.visible = true;
			};
			
			root.infos =
			[
				{
					name:"TOM",
					area:[{x:73, y:75}, {x:130, y:125}],
					callback:root.setInfo
				},
				{
					name:"SUE",
					area:[{x:147, y:89}, {x:194, y:138}],
					callback:root.setInfo
				},
				{
					name:"JOSH",
					area:[{x:214, y:90}, {x:262, y:139}],
					callback:root.setInfo
				},
				{
					name:"LILLY",
					area:[{x:308, y:98}, {x:356, y:148}],
					callback:root.setInfo
				}
			];
				
			root.reset = function()
			{
				photo.person.visible = false;
			};
			
			photo.on("rollover", function(e)
			{
				var point = e.currentTarget.globalToLocal(stage.mouseX, stage.mouseY);
				
				root.infos.some(function(info, index)
				{
					var minX = info.area[0].x;
					var maxX = info.area[1].x;
					var minY = info.area[0].y;
					var maxY = info.area[1].y;
								
					if (point.x >= minX && point.x <= maxX && point.y >= minY && point.y <= maxY)
					{
						info.callback(index);
						return true;
					}
				});
			});
		
			photo.on("rollout", function(e)
			{
				root.reset();
			});
			
			root.button.on("click", function(e){root.gotoAndStop(0);});
			root.movieClip.on("click", function(e){root.gotoAndStop(1);});
			
			stage.off("drawstart", root.drawStart);
			root.reset();
		};
		
		if (!root.frame0started)
		{
			root.frame0started = true;
			root.stop();
			root.drawStart = stage.on("drawstart", root.start, null, true);
		}
	}
	this.frame_1 = function() {
		var root = this;
		var photo = root.photo1;
		
		if (!root.frame1Started)
		{
			root.frame1Started = true;
			photo.person.visible = false;
				
			photo.hits.on("mouseover", function(e)
			{
				photo.person.x = e.target.x;
				photo.person.y = e.target.y;
				photo.person.visible = true;
				photo.person.txt.text = root.infos[e.currentTarget.getChildIndex(e.target)].name;
			});
			
			photo.hits.on("mouseout", function(e)
			{
				photo.person.visible = false;
			});
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.movieClip = new lib.MovieClipApproach();
	this.movieClip.name = "movieClip";
	this.movieClip.parent = this;
	this.movieClip.setTransform(365.75,345.1);
	this.movieClip.alpha = 0.25;
	new cjs.ButtonHelper(this.movieClip, 0, 1, 2, false, new lib.MovieClipApproach(), 3);

	this.button = new lib.ButtonApproach();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(204.2,345.1);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.ButtonApproach(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button,p:{alpha:1}},{t:this.movieClip,p:{alpha:0.25}}]}).to({state:[{t:this.button,p:{alpha:0.25}},{t:this.movieClip,p:{alpha:1}}]},1).wait(1));

	// photos
	this.photo0 = new lib.Button();
	this.photo0.name = "photo0";
	this.photo0.parent = this;
	this.photo0.setTransform(72.35,40.8);
	new cjs.ButtonHelper(this.photo0, 0, 1, 2, false, new lib.Button(), 3);

	this.photo1 = new lib.MovieClipButton();
	this.photo1.name = "photo1";
	this.photo1.parent = this;
	this.photo1.setTransform(72.35,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.photo0}]}).to({state:[{t:this.photo1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(347.4,240.8,130.3,118.69999999999999);
// library properties:
lib.properties = {
	id: '4D04759AC9C5074CAC5B6459FB9ABE3E',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1565785607370", id:"index_atlas_"}
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
an.compositions['4D04759AC9C5074CAC5B6459FB9ABE3E'] = {
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