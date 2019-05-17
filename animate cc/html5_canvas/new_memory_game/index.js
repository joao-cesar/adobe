(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,327,617,325],[1718,1299,120,120],[1718,1171,132,126],[1852,1180,132,126],[1816,754,156,156],[1450,1171,132,132],[1584,1171,132,132],[619,327,180,180],[338,1323,168,134],[0,654,607,207],[0,0,805,325],[1559,264,477,325],[807,0,964,262],[619,560,590,250],[807,264,750,294],[0,1153,480,168],[0,1323,336,168],[1773,0,243,243],[1986,1180,60,60],[1840,1308,120,120],[1867,1046,132,132],[482,1153,96,144],[1816,591,161,161],[1867,912,132,132],[1769,912,96,192],[1526,591,288,288],[0,863,288,288],[609,812,288,288],[899,812,288,288],[290,863,288,288],[580,1102,288,288],[1189,875,288,288],[870,1102,288,288],[1160,1165,288,288],[1479,881,288,288],[1211,560,313,313]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_283 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_284 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_285 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_286 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_290 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_39 = function() {
	this.initialize(img.CachedTexturedBitmap_39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,240);


(lib.CachedTexturedBitmap_478 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_830 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_831 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_832 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_833 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_834 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_835 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_839 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_840 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_841 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_842 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_843 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_844 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_845 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_846 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_847 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_848 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_849 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_850 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_851 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_852 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_853 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_854 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_855 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_856 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(35);
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


(lib.WinMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("YOU WIN!", "normal 700 56px 'Open Sans'", "#EAEAD1");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.lineWidth = 317;
	this.text.parent = this;
	this.text.setTransform(0,-35.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.instance = new lib.CachedTexturedBitmap_39();
	this.instance.parent = this;
	this.instance.setTransform(-359.95,-39.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.WinMessage, new cjs.Rectangle(-359.9,-39.9,720,82.9), null);


(lib.Recs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// recs
	this.instance = new lib.CachedTexturedBitmap_846();
	this.instance.parent = this;
	this.instance.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_1 = new lib.CachedTexturedBitmap_847();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_2 = new lib.CachedTexturedBitmap_848();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_3 = new lib.CachedTexturedBitmap_849();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_4 = new lib.CachedTexturedBitmap_850();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_5 = new lib.CachedTexturedBitmap_851();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_6 = new lib.CachedTexturedBitmap_852();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_7 = new lib.CachedTexturedBitmap_853();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_8 = new lib.CachedTexturedBitmap_854();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.instance_9 = new lib.CachedTexturedBitmap_855();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-47.95,-47.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-47.9,96,96);


(lib.Icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// icons
	this.instance = new lib.CachedTexturedBitmap_839();
	this.instance.parent = this;
	this.instance.setTransform(8.9,9.2,0.3333,0.3333);

	this.instance_1 = new lib.CachedTexturedBitmap_839();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28.95,9.2,0.3333,0.3333);

	this.instance_2 = new lib.CachedTexturedBitmap_839();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.9,-29.25,0.3333,0.3333);

	this.instance_3 = new lib.CachedTexturedBitmap_839();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28.95,-29.25,0.3333,0.3333);

	this.instance_4 = new lib.CachedTexturedBitmap_835();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-40.45,-40.45,0.3333,0.3333);

	this.instance_5 = new lib.CachedTexturedBitmap_840();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-19.95,-19.95,0.3333,0.3333);

	this.instance_6 = new lib.CachedTexturedBitmap_20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-19.95,-19.95,0.3333,0.3333);

	this.instance_7 = new lib.CachedTexturedBitmap_841();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-21.95,-21.95,0.3333,0.3333);

	this.instance_8 = new lib.CachedTexturedBitmap_22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-21.95,-20.9,0.3333,0.3333);

	this.instance_9 = new lib.CachedTexturedBitmap_23();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-21.95,-20.85,0.3333,0.3333);

	this.instance_10 = new lib.CachedTexturedBitmap_842();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-15.95,-23.95,0.3333,0.3333);

	this.instance_11 = new lib.CachedTexturedBitmap_843();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-26.8,-26.8,0.3333,0.3333);

	this.instance_12 = new lib.CachedTexturedBitmap_844();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-21.95,-21.95,0.3333,0.3333);

	this.instance_13 = new lib.CachedTexturedBitmap_845();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-15.95,-31.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-40.4,81,81);


(lib.Highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_856();
	this.instance.parent = this;
	this.instance.setTransform(-52.1,-52.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Highlight, new cjs.Rectangle(-52.1,-52.1,104.4,104.4), null);


(lib.FullScreenTip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Press to go fullscreen", "normal 700 22px 'Open Sans'", "#989479");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 243;
	this.text.parent = this;
	this.text.setTransform(116.05,-22.85);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.instance = new lib.CachedTexturedBitmap_478();
	this.instance.parent = this;
	this.instance.setTransform(-71.35,-34.35,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FullScreenTip, new cjs.Rectangle(-129,-34.3,260,69), null);


(lib.ButtonRec1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_834();
	this.instance.parent = this;
	this.instance.setTransform(-55.95,-27.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonRec1, new cjs.Rectangle(-55.9,-27.9,112,56), null);


(lib.ButtonRec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_833();
	this.instance.parent = this;
	this.instance.setTransform(-79.95,-27.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonRec, new cjs.Rectangle(-79.9,-27.9,160,56), null);


(lib.Arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_290();
	this.instance.parent = this;
	this.instance.setTransform(-27.95,-22.35,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(-27.9,-22.3,56,44.6), null);


(lib.Super = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_10();
	this.instance.parent = this;
	this.instance.setTransform(-106.3,-54.15,0.3333,0.3333);

	this.instance_1 = new lib.CachedTexturedBitmap_832();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-125,-51.65,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-54.1,250,108.30000000000001);


(lib.New = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(-83.4,-54.15,0.3333,0.3333);

	this.instance_1 = new lib.CachedTexturedBitmap_831();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-98.25,-41.05,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-54.1,196.60000000000002,108.30000000000001);


(lib.Memory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(-128.2,-54.15,0.3333,0.3333);

	this.instance_1 = new lib.CachedTexturedBitmap_830();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-160.6,-44.05,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.6,-54.1,321.4,108.30000000000001);


(lib.FullScreenButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icons
	this.instance = new lib.CachedTexturedBitmap_284();
	this.instance.parent = this;
	this.instance.setTransform(-21.95,-21.95,0.3333,0.3333);

	this.instance_1 = new lib.CachedTexturedBitmap_285();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.95,-21.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// hit
	this.instance_2 = new lib.CachedTexturedBitmap_286();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.95,-29.95,0.3333,0.3333);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,60,60);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// memory
	this.instance = new lib.Memory("single",0);
	this.instance.parent = this;
	this.instance.setTransform(232.6,79.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({x:37.6,alpha:1},16,cjs.Ease.backOut).wait(1));

	// new
	this.instance_1 = new lib.New("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-294.95,-2.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({x:-99,alpha:1},12,cjs.Ease.backOut).wait(20));

	// super
	this.instance_2 = new lib.Super("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.8,-79.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-148,alpha:1},11,cjs.Ease.backOut).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.2,-133.9,786.5999999999999,267.9);


(lib.StartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("START", "normal 600 22px 'Open Sans'", "#BBBB91");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 70;
	this.text.parent = this;
	this.text.setTransform(0,-14.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#EAEAD1"},0).wait(1).to({color:"#F5F5EC"},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-27.9,112,56);


(lib.PlayAgainButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("PLAY AGAIN", "normal 600 22px 'Open Sans'", "#BBBB91");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(0,-14.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#EAEAD1"},0).wait(1).to({color:"#F3F3EC"},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-27.9,160,56);


(lib.Card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.icon = new lib.Icons();
	this.icon.name = "icon";
	this.icon.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// rec
	this.rec = new lib.Recs();
	this.rec.name = "rec";
	this.rec.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.rec).wait(1));

	// highlight
	this.highlight = new lib.Highlight();
	this.highlight.name = "highlight";
	this.highlight.parent = this;
	this.highlight.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.highlight).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-52.1,104.4,104.4);


(lib.BackButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.CachedTexturedBitmap_283();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25.95,-25.95,0.3333,0.3333);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-25.9,56,52);


(lib.Cards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.card17 = new lib.Card();
	this.card17.name = "card17";
	this.card17.parent = this;
	this.card17.setTransform(608,272);

	this.card16 = new lib.Card();
	this.card16.name = "card16";
	this.card16.parent = this;
	this.card16.setTransform(496,272);

	this.card15 = new lib.Card();
	this.card15.name = "card15";
	this.card15.parent = this;
	this.card15.setTransform(384,272);

	this.card14 = new lib.Card();
	this.card14.name = "card14";
	this.card14.parent = this;
	this.card14.setTransform(272,272);

	this.card13 = new lib.Card();
	this.card13.name = "card13";
	this.card13.parent = this;
	this.card13.setTransform(160,272);

	this.card12 = new lib.Card();
	this.card12.name = "card12";
	this.card12.parent = this;
	this.card12.setTransform(48,272);

	this.card11 = new lib.Card();
	this.card11.name = "card11";
	this.card11.parent = this;
	this.card11.setTransform(608,160);

	this.card10 = new lib.Card();
	this.card10.name = "card10";
	this.card10.parent = this;
	this.card10.setTransform(496,160);

	this.card9 = new lib.Card();
	this.card9.name = "card9";
	this.card9.parent = this;
	this.card9.setTransform(384,160);

	this.card8 = new lib.Card();
	this.card8.name = "card8";
	this.card8.parent = this;
	this.card8.setTransform(272,160);

	this.card7 = new lib.Card();
	this.card7.name = "card7";
	this.card7.parent = this;
	this.card7.setTransform(160,160);

	this.card6 = new lib.Card();
	this.card6.name = "card6";
	this.card6.parent = this;
	this.card6.setTransform(48,160);

	this.card5 = new lib.Card();
	this.card5.name = "card5";
	this.card5.parent = this;
	this.card5.setTransform(608,48);

	this.card4 = new lib.Card();
	this.card4.name = "card4";
	this.card4.parent = this;
	this.card4.setTransform(496,48);

	this.card3 = new lib.Card();
	this.card3.name = "card3";
	this.card3.parent = this;
	this.card3.setTransform(384,48);

	this.card2 = new lib.Card();
	this.card2.name = "card2";
	this.card2.parent = this;
	this.card2.setTransform(272,48);

	this.card1 = new lib.Card();
	this.card1.name = "card1";
	this.card1.parent = this;
	this.card1.setTransform(160,48);

	this.card0 = new lib.Card();
	this.card0.name = "card0";
	this.card0.parent = this;
	this.card0.setTransform(48,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card0},{t:this.card1},{t:this.card2},{t:this.card3},{t:this.card4},{t:this.card5},{t:this.card6},{t:this.card7},{t:this.card8},{t:this.card9},{t:this.card10},{t:this.card11},{t:this.card12},{t:this.card13},{t:this.card14},{t:this.card15},{t:this.card16},{t:this.card17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cards, new cjs.Rectangle(-4.1,-4.1,664.4,328.40000000000003), null);


// stage content:
(lib.new_memory_game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,game:1});

	// timeline functions:
	this.frame_0 = function() {
		config = 
		{
			general:
			{
				timeoutRatio:1,
				mouseOverFrequency:50
			},
			texts:
			{
				lineHeight:0.14,
				movesText:"MOVES: "
			},
			win:
			{
				enterDuration:350,
				exitDuration:175,
				enterEase:createjs.Ease.backOut,
				exitEase:createjs.Ease.sineIn
			},
			cards:
			{
				ratioX:0.5,
				ratioY:0.16,
				enterWait:50,
				enterDuration:350,
				enterEase:createjs.Ease.sineOut,
				spinWait:350,
				spinDuration:350,
				spinEase:createjs.Ease.sineInOut,
				memorizeWait:5000
			},
			sounds:
			{
				bgm:
				{
					volume:0.2,
					main:"BGM"
				},
				sfx:
				{
					button:"ButtonSFX",
					correct:"CorrectSFX",
					wrong:"WrongSFX",
					win:"WinSFX",
					card:"CardSFX"
				}
			},
			startButton:
			{
				tweenWait:1000,
				tweenDuration:350,
				ease:createjs.Ease.backOut
			},
			backButton:
			{
				tweenDuration:350,
				ease:createjs.Ease.backOut
			},
			fullScreenButton:
			{
				wait:1300,
				tweenDuration:350,
				ease:createjs.Ease.backOut
			}
			,
			fullScreenTip:
			{
				wait:1600,
				tweenDuration:350,
				ease:createjs.Ease.backOut
			}
		};
		
		root = this;
		
		const startButton = root.startButton;
		const fullScreenButton = root.fullScreenButton;
		const fullScreenTip = root.fullScreenTip;
		
		root.setUp = () =>
		{
			stage.off("drawstart", root.drawStart);
			root.drawStart = null;
			
			if (!root.started)
			{
				createjs.Touch.enable(stage);
				stage.enableMouseOver(config.general.mouseOverFrequency);
				stage.preventSelection = false;
				root.fixText(config.texts.lineHeight);
				document.body.style.backgroundColor = "#EAEAD1";
				fullScreenTip.visible = true;
				fullScreenTip.scaleX = fullScreenTip.scaleY = 0;
				createjs.Tween.get(fullScreenTip).wait(config.fullScreenTip.wait).to({scaleX:1, scaleY:1}, config.fullScreenTip.tweenDuration, config.fullScreenTip.ease);
				fullScreenButton.toggled = false;
				fullScreenButton.on("mousedown", root.toggleFullScreen);
				document.addEventListener("fullscreenchange", root.checkFullScreenExit);
				document.addEventListener("mozfullscreenchange", root.checkFullScreenExit); /* Firefox */
				document.addEventListener("webkitfullscreenchange", root.checkFullScreenExit); /* Chrome, Safari and Opera */
				document.addEventListener("msfullscreenchange", root.checkFullScreenExit); /* IE / Edge */
				createjs.Sound.play(config.sounds.bgm.main, createjs.Sound.INTERRUPT_NONE, 0, 0, -1, config.sounds.bgm.volume);
				root.started = true;
			}
			
			root.stop();
			
			startButton.scaleX = startButton.scaleY = 0;
			createjs.Tween.get(startButton).wait(config.startButton.tweenWait).to({scaleX:1, scaleY:1}, config.startButton.tweenDuration, config.startButton.ease);
			
			fullScreenButton.visible = true;
			fullScreenButton.scaleX = fullScreenButton.scaleY = 0;
			createjs.Tween.get(fullScreenButton).wait(config.fullScreenButton.wait).to({scaleX:1, scaleY:1}, config.fullScreenButton.tweenDuration, config.fullScreenButton.ease);
			
			startButton.mouseDown = startButton.on("mousedown", root.start);
		};
		
		root.start = () =>
		{
			fullScreenButton.visible = true;
			fullScreenButton.scaleX = fullScreenButton.scaleY = 1;
			fullScreenTip.visible = false;
			startButton.off("mousedown", startButton.mouseDown);
			createjs.Tween.removeAllTweens();
			root.gotoAndStop("game");
		};
		
		root.checkFullScreenExit = e =>
		{
			if (fullScreenButton.toggled)
				root.toggleButton(fullScreenButton, {outLabel:0, overLabel:1, downLabel:2});				
			else
				root.toggleButton(fullScreenButton, {outLabel:2, overLabel:2, downLabel:2});
			
			fullScreenButton.toggled = !fullScreenButton.toggled;
		};
		
		root.toggleFullScreen = e =>
		{
			if (fullScreenTip)
				fullScreenTip.visible = false;
			
			if (fullScreenButton.toggled)
				root.exitFullScreen();				
			else
				root.requestFullScreen();
		};
		
		root.requestFullScreen = () =>
		{
			var elem = document.documentElement;
				
			if (elem.requestFullscreen)
				elem.requestFullscreen();
			else if (elem.mozRequestFullScreen) /* Firefox */
				elem.mozRequestFullScreen();
			else if (elem.webkitRequestFullscreen) /* Chrome, Safari and Opera */
				elem.webkitRequestFullscreen();
			else if (elem.msRequestFullscreen) /* IE/Edge */
				elem.msRequestFullscreen();
		};
		
		root.exitFullScreen = () =>
		{
			if (document.exitFullscreen)
				document.exitFullscreen();
			else if (document.mozCancelFullScreen) /* Firefox */
				document.mozCancelFullScreen();
			else if (document.webkitExitFullscreen) /* Chrome, Safari and Opera */
				document.webkitExitFullscreen();
			else if (document.msExitFullscreen) /* IE/Edge */
				document.msExitFullscreen();
		};
		
		root.toggleButton = function(button, frames)
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
			
			button.gotoAndStop(frames.outLabel);
		};
		
		root.fixText = lineHeightRatio =>
		{
			var chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
			var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		
			if ((chrome || firefox) && createjs)
			{
				createjs.Text.prototype._drawTextLine = function(ctx, text, y)
				{
					if (this.textBaseline === "top")
					{
						var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
						y += lineHeight * lineHeightRatio; // 0.14
					}
		
					if (this.outline)
						ctx.strokeText(text, 0, y, this.maxWidth || 0xFFFF);
					else
						ctx.fillText(text, 0, y, this.maxWidth || 0xFFFF);
				};
			}
		};
		
		root.drawStart = stage.on("drawstart", root.setUp, null, true);
	}
	this.frame_1 = function() {
		const movesText = root.movesText;
		const backButton = root.backButton;
		const playAgainButton = root.playAgainButton;
		const startButton = root.startButton1;
		const winMessage = root.winMessage;
		
		let cards;
		
		root.setup = () =>
		{	
			backButton.mouseDown = backButton.on("mousedown", e =>
			{
				backButton.off("mousedown", backButton.mouseDown);
				root.backToStart();
			});
			
			if (root.cards)
				cards = root.cards;
			
			root.drawStart = stage.on("drawstart", root.start, null, true);
		};
		
		root.start = () =>
		{
			stage.off("drawstart", root.drawStart);
			root.drawStart = null;
			
			root.removeCards();
			root.addCards();
			stage.update();
			
			winMessage.visible = false;
			playAgainButton.visible = false;
			startButton.visible = false;
			
			cards.mouseOver = e =>
			{
				e.target.highlight.visible = true;
			};
		
			cards.mouseOut = e =>
			{
				e.target.highlight.visible = false;
			};
		
			cards.mouseDown = e =>
			{	
				cards.card = e.target;
				cards.card.highlight.visible = false;
				cards.deactivate();
				cards.spin(cards.card, {scaleX:-1, wait:0, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
				createjs.Sound.play(config.sounds.sfx.card, createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 1);
				
				cards.tweenTimeout = setTimeout(() =>
				{
					clearInterval(cards.tweenTimeout);
					cards.spinComplete();
				}, cards.tweenDuration * cards.timeoutRatio);
			};
		
			cards.addListeners = () =>
			{
				cards.cardsMouseOver = cards.on("mouseover", cards.mouseOver);
				cards.cardsMouseOut = cards.on("mouseout", cards.mouseOut);
				cards.cardsMouseDown = cards.on("mousedown", cards.mouseDown);
			};
		
			cards.activate = () =>
			{
				cards.addListeners();
			};
		
			cards.deactivate = () =>
			{
				cards.off("mouseover", cards.cardsMouseOver);
				cards.off("mouseout", cards.cardsMouseOut);
				cards.off("mousedown", cards.cardsMouseDown);
				
				cards.cardsMouseOver = null;
				cards.cardsMouseOut = null;
				cards.cardsMouseDown = null;
			};
		
			cards.spin = (card, params, changeCallBack = null, completeCallBack = null) =>
			{	
				if (changeCallBack === null)
					changeCallBack = () => {};
					
				if (completeCallBack === null)
					completeCallBack = () => {};
					
				createjs.Tween.get(card).wait(params.wait).to({scaleX:params.scaleX}, params.duration, params.ease).addEventListener("change", cards.tween);
			};
		
			cards.tween = e =>
			{
				cards.card = e.target._target;
				
				const icon = cards.card.icon;
				const rec = cards.card.rec;
					
				if (cards.card.scaleX <= -0.5)
				{
					const frame = cards.card.face + 1;
					
					icon.scaleX = -1;
					rec.scaleX = -1;
					
					if (icon.currentFrame !== frame)
						icon.gotoAndStop(frame);
					
					if (rec.currentFrame !== frame)
						rec.gotoAndStop(frame);
				}
				else
				{
					icon.scaleX = 1;
					rec.scaleX = 1;
					
					if (icon.currentFrame !== 0)
						icon.gotoAndStop(0);
					
					if (rec.currentFrame !== 0)
						rec.gotoAndStop(0);
				}
			};
		
			cards.spinComplete = () =>
			{
				cards.count++;
				cards.updateMoves();
					
				if (cards.count % 2 === 0)
				{
					if (cards.prevCard !== cards.card && cards.prevCard.face === cards.card.face)
					{
						createjs.Tween.get(cards.prevCard).to({scaleX:0, scaleY:0}, cards.tweenDuration, cards.ease);
						createjs.Tween.get(cards.card).to({scaleX:0, scaleY:0}, cards.tweenDuration, cards.ease).call(() =>
						{
							cards.removeChild(cards.prevCard);
							cards.removeChild(cards.card);
						});
						
						createjs.Sound.play(config.sounds.sfx.correct, createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 1);
					}
					else
					{
						cards.spin(cards.prevCard, {scaleX:1, wait:cards.tweenWait, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
						cards.spin(cards.card, {scaleX:1, wait:cards.tweenWait, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
						createjs.Sound.play(config.sounds.sfx.wrong, createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 1);
					}
					
					cards.restoreTimeout = setTimeout(() =>
					{
						clearInterval(cards.restoreTimeout);
						cards.restore();
						cards.checkIfWin();
					}, (cards.tweenWait + cards.tweenDuration) * cards.timeoutRatio);
				}
				else
				{
					cards.restore();
					cards.checkIfWin();
				}
					
			};
		
			cards.restore = () =>
			{
				cards.activate();
					
				if (cards.prevCard && cards.count % 2 === 0)
				{	
					cards.prevCard = null;
					cards.card = null;
				}
				else
					cards.prevCard = cards.card;
			};
		
			cards.updateMoves = () =>
			{
				movesText.text = config.texts.movesText + cards.count;
			};
		
			cards.checkIfWin = () =>
			{
				if (cards.children.length === 0)
				{
					cards.deactivate();
					
					winMessage.visible = true;
					winMessage.scaleY = 0;
					createjs.Tween.get(winMessage).to({scaleY:1}, cards.winDuration, cards.winEase);
					
					playAgainButton.visible = true;
					playAgainButton.scaleX = playAgainButton.scaleY = 0;
					createjs.Tween.get(playAgainButton).wait(cards.winDuration).to({scaleX:1, scaleY:1}, cards.winDuration, cards.winEase);
					
					startButton.visible = true;
					startButton.scaleX = startButton.scaleY = 0;
					createjs.Tween.get(startButton).wait(cards.winDuration * 2).to({scaleX:1, scaleY:1}, cards.winDuration, cards.winEase);
					
					playAgainButton.mouseDown = playAgainButton.on("mousedown", cards.playAgain);
					
					startButton.mouseDown = startButton.on("mousedown", e =>
					{
						startButton.off("mousedown", startButton.mouseDown);
						root.backToStart();
					});
					
					createjs.Sound.play(config.sounds.sfx.win, createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 1);
				}		
			};
		
			cards.playAgain = e =>
			{
				playAgainButton.off("mousedown", playAgainButton.mouseDown);
				
				createjs.Tween.get(winMessage).to({scaleY:0}, cards.winExitDuration, cards.winExitEase);		
				createjs.Tween.get(playAgainButton).to({scaleX:0, scaleY:0}, cards.winExitDuration, cards.winDimissEase);
				createjs.Tween.get(startButton).to({scaleX:0, scaleY:0}, cards.winExitDuration, cards.winDimissEase);
				
				cards.dimissWinTimeout = setTimeout(() =>
				{
					clearInterval(cards.dimissWinTimeout);
					
					winMessage.visible = false;
					playAgainButton.visible = false;
					startButton.visible = false;
					root.removeCards();			
					root.addCards();			
					root.drawStart = stage.on("drawstart", root.start, null, true);
					
				}, cards.winExitDuration * cards.timeoutRatio);
				
				createjs.Sound.play(config.sounds.sfx.button, createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 1);
			};
			
			cards.count = 0;
			cards.updateMoves();
			cards.winDuration = config.win.enterDuration;
			cards.winExitDuration = config.win.exitDuration;
			cards.winEase = config.win.enterEase;
			cards.winExitEase = config.win.exitEase;
			cards.enterTweenWait = config.cards.enterWait;
			cards.enterTweenDuration = config.cards.enterDuration;
			cards.memorizeWait = config.cards.memorizeWait;
			cards.enterTweenEase = config.cards.enterEase;
			cards.tweenWait = config.cards.spinWait;
			cards.tweenDuration = config.cards.spinDuration;
			cards.timeoutRatio = config.general.timeoutRatio;
			cards.ease = config.cards.spinEase;
			cards.x = ((canvas.width / stage.scaleX) - cards.nominalBounds.width) * config.cards.ratioX;
			cards.y = (canvas.height / stage.scaleY) * config.cards.ratioY;
			cards.randomInitialPos = {x:Math.round(Math.random() * canvas.width), y:Math.round(Math.random() * canvas.height)};
			cards.tickChildren = false;
			cards.sortChildren((a, b) => {return 0.5 - Math.random();});
			
			cards.children.forEach((card, index) =>
			{
				card.face = Math.floor(index * 0.5);
				card.scaleX = -1;
				card.icon.scaleX = -1;
				card.rec.scaleX = -1;
				card.icon.gotoAndStop(card.face + 1);
				card.rec.gotoAndStop(card.face + 1);
				card.mouseChildren = false;
				card.initialPos = {x:card.x, y:card.y};
				card.x = cards.randomInitialPos.x;
				card.y = cards.randomInitialPos.y;
				card.alpha = 0;
				createjs.Tween.get(card).wait(index * cards.enterTweenWait).to({alpha:1, x:card.initialPos.x, y:card.initialPos.y}, cards.enterTweenDuration, cards.enterTweenEase);		
			});
			
			cards.memorizeTimeout = setTimeout(() =>
			{
				clearInterval(cards.memorizeTimeout);
				
				cards.children.forEach(card =>
				{
					cards.spin(card, {scaleX:1, wait:0, duration:cards.tweenDuration, ease:cards.ease}, cards.tween);
				});
				
				cards.startTimeout = setTimeout(() =>
				{
					clearInterval(cards.startTimeout);
					cards.addListeners();
				}, cards.tweenDuration * cards.timeoutRatio);
				
			}, cards.memorizeWait * cards.timeoutRatio);
			
			backButton.scaleX = backButton.scaleY = 0;
			createjs.Tween.get(backButton).to({scaleX:1, scaleY:1}, config.backButton.tweenDuration, config.backButton.ease);
		};
		
		root.clearAllTimeouts = () =>
		{
			if (cards)
			{
				clearTimeout(cards.tweenTimeout);
				clearTimeout(cards.restoreTimeout);
				clearTimeout(cards.dimissWinTimeout);
				clearTimeout(cards.memorizeTimeout);
				clearTimeout(cards.startTimeout);
				clearTimeout(cards.tweenTimeout);
				clearTimeout(cards.dimissWinTimeout);
			}	
		};
		
		root.backToStart = e =>
		{
			createjs.Tween.removeAllTweens();
			root.clearAllTimeouts();
			root.removeCards();
			root.gotoAndStop("start");
		};
		
		root.removeCards = () =>
		{
			root.removeChild(cards);
			cards = null;
		};
		
		root.addCards = () =>
		{
			cards = new lib.Cards();
			root.addChild(cards);
		};
		
		root.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// fullscreenTip
	this.fullScreenTip = new lib.FullScreenTip();
	this.fullScreenTip.name = "fullScreenTip";
	this.fullScreenTip.parent = this;
	this.fullScreenTip.setTransform(571.4,92.85);
	this.fullScreenTip.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.fullScreenTip).to({_off:true},1).wait(1));

	// fullScreenButton
	this.fullScreenButton = new lib.FullScreenButton();
	this.fullScreenButton.name = "fullScreenButton";
	this.fullScreenButton.parent = this;
	this.fullScreenButton.setTransform(680,30);
	new cjs.ButtonHelper(this.fullScreenButton, 0, 1, 2, false, new lib.FullScreenButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fullScreenButton).wait(2));

	// restartButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.parent = this;
	this.playAgainButton.setTransform(360,253);
	this.playAgainButton._off = true;
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1).to({_off:false},0).wait(1));

	// backButton
	this.backButton = new lib.BackButton();
	this.backButton.name = "backButton";
	this.backButton.parent = this;
	this.backButton.setTransform(48,32.4);
	this.backButton._off = true;
	new cjs.ButtonHelper(this.backButton, 0, 1, 2, false, new lib.BackButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backButton).wait(1).to({_off:false},0).wait(1));

	// startButton
	this.startButton = new lib.StartButton();
	this.startButton.name = "startButton";
	this.startButton.parent = this;
	this.startButton.setTransform(360,349);
	new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.StartButton(), 3);

	this.startButton1 = new lib.StartButton();
	this.startButton1.name = "startButton1";
	this.startButton1.parent = this;
	this.startButton1.setTransform(361.3,321.6);
	new cjs.ButtonHelper(this.startButton1, 0, 1, 2, false, new lib.StartButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startButton}]}).to({state:[{t:this.startButton1}]},1).wait(1));

	// win
	this.winMessage = new lib.WinMessage();
	this.winMessage.name = "winMessage";
	this.winMessage.parent = this;
	this.winMessage.setTransform(360,143.5);
	this.winMessage._off = true;

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1).to({_off:false},0).wait(1));

	// moves
	this.movesText = new cjs.Text("MOVES: 0", "normal 700 26px 'Open Sans'", "#5B562E");
	this.movesText.name = "movesText";
	this.movesText.textAlign = "center";
	this.movesText.lineHeight = 37;
	this.movesText.lineWidth = 301;
	this.movesText.parent = this;
	this.movesText.setTransform(360,14.95);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.movesText);
	}
	this.movesText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movesText).wait(1).to({_off:false},0).wait(1));

	// cards
	this.cards = new lib.Cards();
	this.cards.name = "cards";
	this.cards.parent = this;
	this.cards.setTransform(32,64);
	this.cards._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cards).wait(1).to({_off:false},0).wait(1));

	// title
	this.instance = new lib.Title();
	this.instance.parent = this;
	this.instance.setTransform(400,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360.1,210.6,360,177.70000000000002);
// library properties:
lib.properties = {
	id: 'D1AE1FD25370974DBECEAB7BBAC614B2',
	width: 720,
	height: 405,
	fps: 60,
	color: "#EAEAD1",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedTexturedBitmap_39.png", id:"CachedTexturedBitmap_39"},
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"sounds/ButtonSFX.mp3", id:"ButtonSFX"},
		{src:"sounds/WrongSFX.mp3", id:"WrongSFX"},
		{src:"sounds/CorrectSFX.mp3", id:"CorrectSFX"},
		{src:"sounds/WinSFX.mp3", id:"WinSFX"},
		{src:"sounds/CardSFX.mp3", id:"CardSFX"},
		{src:"sounds/BGM.mp3", id:"BGM"}
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
an.compositions['D1AE1FD25370974DBECEAB7BBAC614B2'] = {
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