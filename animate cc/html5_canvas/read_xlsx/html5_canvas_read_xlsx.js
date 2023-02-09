(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.TextField4 = function(mode,startPosition,loop,reversed) {
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
	this.tf = new cjs.Text("Text Field 4", "23px 'Helvetica'", "#FFFF00");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 21;
	this.tf.lineWidth = 160;
	this.tf.parent = this;
	this.tf.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextField4, new cjs.Rectangle(-82,-16.9,164.1,33.8), null);


(lib.TextField3 = function(mode,startPosition,loop,reversed) {
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
	this.tf = new cjs.Text("Text Field 3", "23px 'Helvetica'", "#0000FF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 21;
	this.tf.lineWidth = 145;
	this.tf.parent = this;
	this.tf.setTransform(0,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextField3, new cjs.Rectangle(-74.7,-14.8,149.5,30), null);


(lib.TextField2 = function(mode,startPosition,loop,reversed) {
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
	this.tf = new cjs.Text("Text Field 2", "23px 'Helvetica'", "#FF0000");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 21;
	this.tf.lineWidth = 197;
	this.tf.parent = this;
	this.tf.setTransform(0,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextField2, new cjs.Rectangle(-100.3,-14.8,200.6,30), null);


(lib.TextField1 = function(mode,startPosition,loop,reversed) {
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
	this.tf = new cjs.Text("Text Field 1", "23px 'Helvetica'", "#00FF00");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 21;
	this.tf.lineWidth = 197;
	this.tf.parent = this;
	this.tf.setTransform(0,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextField1, new cjs.Rectangle(-100.3,-14.8,200.6,30), null);


(lib.TextField = function(mode,startPosition,loop,reversed) {
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
	this.tf = new cjs.Text("Text Field 0", "23px 'Helvetica'");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 21;
	this.tf.lineWidth = 197;
	this.tf.parent = this;
	this.tf.setTransform(0,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextField, new cjs.Rectangle(-100.3,-14.8,200.6,30), null);


// stage content:
(lib.html5_canvas_read_xlsx = function(mode,startPosition,loop,reversed) {
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
		// The SheeJS library is included in the 'Include' section to the left
		// https://cdn.sheetjs.com/xlsx-0.19.2/package/dist/xlsx.full.min.js
		
		var xlsxFileName = "test.xlsx";
		var sheetName = "Sheet1"; // you can get this name from the console.log(workbook) call below
		var rows = [ "1", "2" ];
		var targetTextFieldsContainers;
		
		function main()
		{
			root.stop();
			targetTextFieldsContainers = [ root.tf0, root.tf1, root.tf2, root.tf3, root.tf4 ];
			readXLSX(xlsxFileName, onXLSXLoaded, { sheetName: sheetName, rows: rows });
		}
		
		function readXLSX(src, callback, props)
		{
			var req = new XMLHttpRequest();
			var textFields = [];
			var texts = [];
			var data = [];
			var i;
		
			req.open("GET", src, true);
			req.responseType = "arraybuffer";
		
			req.onload = function(e)
			{
				var workbook = XLSX.read(req.response);
				var worksheet = workbook.Sheets[props.sheetName];
				var key;
				
				console.log(workbook);
				console.log(worksheet);
		
				for (key in worksheet)
				{
					if (key.indexOf(props.rows[0]) > -1)
						textFields.push(worksheet[key].h);
		
					if (key.indexOf(props.rows[1]) > -1)
						texts.push(worksheet[key].h);
				}
		
				for (i = 0; i < textFields.length; i++)
					data[i] = { tf: textFields[i], text: texts[i] };
		
				callback(data);
			};
		
			req.send();
		}
		
		function onXLSXLoaded(data)
		{
			console.log(data);
			
			data.forEach(function(item)
			{
				if (targetTextFieldsContainers.indexOf(root[item.tf]) > -1)
					root[item.tf].tf.text = item.text;
			});
		
			stackTextFields(targetTextFieldsContainers);
		}
		
		function stackTextFields(targets)
		{
			targets.forEach(function(tf, index, array)
			{
				var currentHeightOffset = tf.tf.getMeasuredHeight() * 0.5;
				
				tf.tf.y = -currentHeightOffset;
				
				if (index > 0)
				{
					var previousTF = array[index - 1];
					tf.y = previousTF.y + previousTF.tf.getMeasuredHeight() * 0.5 + currentHeightOffset;
				}
			});
		}
		
		if (!this.looped)
		{
			window.root = this;
			main();
			root.looped = 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// textFields
	this.tf4 = new lib.TextField4();
	this.tf4.name = "tf4";
	this.tf4.setTransform(208.45,197.5);

	this.tf3 = new lib.TextField3();
	this.tf3.name = "tf3";
	this.tf3.setTransform(85.25,165.75);

	this.tf2 = new lib.TextField2();
	this.tf2.name = "tf2";
	this.tf2.setTransform(124.05,136.1);

	this.tf1 = new lib.TextField1();
	this.tf1.name = "tf1";
	this.tf1.setTransform(171.85,90.85);

	this.tf0 = new lib.TextField();
	this.tf0.name = "tf0";
	this.tf0.setTransform(124.05,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tf0},{t:this.tf1},{t:this.tf2},{t:this.tf3},{t:this.tf4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160.6,343.4,130.00000000000003,-128.99999999999997);
// library properties:
lib.properties = {
	id: '1989831BC0F7F241B6F323E8102F137E',
	width: 300,
	height: 600,
	fps: 24,
	color: "#F9F9F9",
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
an.compositions['1989831BC0F7F241B6F323E8102F137E'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;