(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_", frames: [[144,36,90,2],[144,28,108,2],[144,32,108,2],[115,28,27,27],[0,0,113,101],[115,0,111,26]]}
];


// symbols:



(lib.CachedBmp_17 = function() {
	this.initialize(ss["adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Separator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-45,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-1,90,2);


(lib.ButtonHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-55.45,-13.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-13.1,111,26);


(lib.WalletsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("Wallets", "13px 'Arial'", "#3D65EB");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 46;
	this.text.parent = this;
	this.text.setTransform(0,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#7893EC"},0).wait(1).to({color:"#C0CDF9"},0).to({_off:true},1).wait(1));

	// hit
	this.instance = new lib.ButtonHit("single",0);
	this.instance.setTransform(0,0,0.4464,0.7034);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-9.2,49.5,18.5);


(lib.FeaturesButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("FEATURES", "20px 'Arial'", "#3D65EB");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 107;
	this.text.parent = this;
	this.text.setTransform(0,-11.15);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#7893EC"},0).wait(1).to({color:"#C0CDF9"},0).to({_off:true},1).wait(1));

	// hit
	this.instance = new lib.ButtonHit("single",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-13.1,111,26.299999999999997);


(lib.CopyTradingButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("Copy Trading", "13px 'Arial'", "#3D65EB");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(0,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#7893EC"},0).wait(1).to({color:"#C0CDF9"},0).to({_off:true},1).wait(1));

	// hit
	this.instance = new lib.ButtonHit("single",0);
	this.instance.setTransform(0,0,0.7466,0.7034);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-9.2,82.9,18.5);


(lib.BasicTradingButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("Basic Trading", "13px 'Arial'", "#3D65EB");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(0,-7.25);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#7893EC"},0).wait(1).to({color:"#C0CDF9"},0).to({_off:true},1).wait(1));

	// hit
	this.instance = new lib.ButtonHit("single",0);
	this.instance.setTransform(0,0,0.7749,0.7034);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-9.2,86,18.5);


(lib.AspectButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("ASPECT", "20px 'Arial'", "#3D65EB");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 107;
	this.text.parent = this;
	this.text.setTransform(0,-11.15);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#7893EC"},0).wait(1).to({color:"#C0CDF9"},0).to({_off:true},1).wait(1));

	// hit
	this.instance = new lib.ButtonHit("single",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-13.1,111,26.299999999999997);


(lib.DropdownMenu1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.makeDropDown(this, function(e, dropDown)
		{
			if (e.target.name === "copy")
			{
				console.log("copy");
				dropDown.close();
			}
			else if (e.target.name === "basic")
			{
				console.log("basic");
				dropDown.close();
			}
			else if (e.target.name === "wallets")
			{
				console.log("wallets");
				dropDown.close();
			}
		}, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// list
	this.wallets = new lib.WalletsButton();
	this.wallets.name = "wallets";
	this.wallets.setTransform(0,121.15);
	new cjs.ButtonHelper(this.wallets, 0, 1, 2, false, new lib.WalletsButton(), 3);

	this.basic = new lib.BasicTradingButton();
	this.basic.name = "basic";
	this.basic.setTransform(0,94.85);
	new cjs.ButtonHelper(this.basic, 0, 1, 2, false, new lib.BasicTradingButton(), 3);

	this.copy = new lib.CopyTradingButton();
	this.copy.name = "copy";
	this.copy.setTransform(0,68.55);
	new cjs.ButtonHelper(this.copy, 0, 1, 2, false, new lib.CopyTradingButton(), 3);

	this.instance = new lib.Separator("single",0);
	this.instance.setTransform(0,108);

	this.instance_1 = new lib.Separator("single",0);
	this.instance_1.setTransform(0,81.7);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(-56.25,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.copy},{t:this.basic},{t:this.wallets}]},1).wait(1));

	// main
	this.features = new lib.AspectButton();
	this.features.name = "features";
	this.features.setTransform(0,23.6);
	new cjs.ButtonHelper(this.features, 0, 1, 2, false, new lib.AspectButton(), 3);

	this.instance_3 = new lib.CachedBmp_16();
	this.instance_3.setTransform(-53.75,1.3);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(-13.45,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.features}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-36.8,113,177.7);


(lib.DropdownMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.makeDropDown(this, function(e, dropDown)
		{
			if (e.target.name === "copy")
			{
				console.log("copy");
				dropDown.close();
			}
			else if (e.target.name === "basic")
			{
				console.log("basic");
				dropDown.close();
			}
			else if (e.target.name === "wallets")
			{
				console.log("wallets");
				dropDown.close();
			}
		}, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// list
	this.wallets = new lib.WalletsButton();
	this.wallets.name = "wallets";
	this.wallets.setTransform(0,121.15);
	new cjs.ButtonHelper(this.wallets, 0, 1, 2, false, new lib.WalletsButton(), 3);

	this.basic = new lib.BasicTradingButton();
	this.basic.name = "basic";
	this.basic.setTransform(0,94.85);
	new cjs.ButtonHelper(this.basic, 0, 1, 2, false, new lib.BasicTradingButton(), 3);

	this.copy = new lib.CopyTradingButton();
	this.copy.name = "copy";
	this.copy.setTransform(0,68.55);
	new cjs.ButtonHelper(this.copy, 0, 1, 2, false, new lib.CopyTradingButton(), 3);

	this.instance = new lib.Separator("single",0);
	this.instance.setTransform(0,108);

	this.instance_1 = new lib.Separator("single",0);
	this.instance_1.setTransform(0,81.7);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(-56.25,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.copy},{t:this.basic},{t:this.wallets}]},1).wait(1));

	// main
	this.features = new lib.FeaturesButton();
	this.features.name = "features";
	this.features.setTransform(0,23.6);
	new cjs.ButtonHelper(this.features, 0, 1, 2, false, new lib.FeaturesButton(), 3);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(-53.75,1.3);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(-13.45,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.features}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-36.8,113,177.7);


// stage content:
(lib.adobe_animate_cc_html5_canvas_simple_dropdown_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.makeDropDown = function(dropDown, callBack, useHit)
		{
			if (!dropDown.started)
			{
				dropDown.addHit = function()
				{
					exportRoot.dropDownHit = new createjs.Shape();
					exportRoot.dropDownHit.graphics.beginFill("rgba(0,0,0,0.01)");
					exportRoot.dropDownHit.graphics.drawRect(0, 0, canvas.width, canvas.height);
					exportRoot.dropDownHit.graphics.endFill();
					exportRoot.addChildAt(exportRoot.dropDownHit, 0);
					
					exportRoot.dropDownHit.on("mousedown", function(e)
					{
						dropDown.closeAll();
					});
				};
				
				dropDown.open = function()
				{
					dropDown.toggled = true;
					dropDown.gotoAndStop(1);
				};
				
				dropDown.close = function()
				{
					dropDown.toggled = false;
					dropDown.gotoAndStop(0);
				};
				
				dropDown.closeAllOthers = function(e)
				{
					for (var i = exportRoot.dropDowns.length - 1; i >= 0; i--)
						if (exportRoot.dropDowns[i] !== e.currentTarget)
							exportRoot.dropDowns[i].close();
				};
				
				dropDown.closeAll = function(e)
				{
					for (var i = exportRoot.dropDowns.length - 1; i >= 0; i--)
						exportRoot.dropDowns[i].close();
				};
				
				dropDown.register = function()
				{
					if (!exportRoot.dropDowns)
						exportRoot.dropDowns = [];
					
					if (exportRoot.dropDowns.indexOf(dropDown) === -1)
						exportRoot.dropDowns.push(dropDown);
				};
				
				dropDown.on("mousedown", function(e)
				{
					dropDown.closeAllOthers(e);
					
					if (e.currentTarget.currentFrame === 0)
						e.currentTarget.open();
					else
						e.currentTarget.close();
					
					if (callBack !== null)
						callBack(e, e.currentTarget);		
				});
				
				if (useHit && !exportRoot.dropDownHit)
					dropDown.addHit();
				
				if (!exportRoot.dropDownEsc)
				{
					window.addEventListener("keydown", function(e)
					{
						if (e.keyCode === 27)
							dropDown.closeAll();
					});
					
					exportRoot.dropDownEsc = true;
				}
				
				dropDown.register();
				dropDown.stop();
				dropDown.toggled = false;				
				dropDown.started = true;
			}
		};
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dropdowns
	this.dropDown3 = new lib.DropdownMenu1();
	this.dropDown3.name = "dropDown3";
	this.dropDown3.setTransform(472.25,305.3);

	this.dropDown2 = new lib.DropdownMenu1();
	this.dropDown2.name = "dropDown2";
	this.dropDown2.setTransform(167.75,305.3);

	this.dropDown1 = new lib.DropdownMenu();
	this.dropDown1.name = "dropDown1";
	this.dropDown1.setTransform(472.25,79.7);

	this.dropDown = new lib.DropdownMenu();
	this.dropDown.name = "dropDown";
	this.dropDown.setTransform(167.75,79.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dropDown},{t:this.dropDown1},{t:this.dropDown2},{t:this.dropDown3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(432.3,282.9,95.40000000000003,59.200000000000045);
// library properties:
lib.properties = {
	id: 'F0F86B20B3B2AA4AA40AFBCC837E5245',
	width: 640,
	height: 480,
	fps: 60,
	color: "#252525",
	opacity: 1.00,
	manifest: [
		{src:"images/adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_.png?1584068121332", id:"adobe_animate_cc_html5_canvas_simple_dropdown_menu_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['F0F86B20B3B2AA4AA40AFBCC837E5245'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;