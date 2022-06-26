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


(lib.Thumb = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnfHgIAAu/IO/AAIAAO/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Thumb, new cjs.Rectangle(-48,-48,96,96), null);


(lib.Container = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// stage content:
(lib.image_grid = function(mode,startPosition,loop,reversed) {
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
		var root = this;
		var container = root.container;
		var offsetX = 10;
		var offsetY = 10;
		var columns = 6;
		var imagePrefix = "image";
		var queue;
		
		var manifest =
		[
			{id: "image0", src:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"},
			{id: "image1", src:"https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"},
			{id: "image2", src:"https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg"},
			{id: "image3", src:"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"},
			{id: "image4", src:"https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"},
			{id: "image5", src:"https://cdn.pixabay.com/photo/2021/08/28/19/13/wheat-field-6581723__480.jpg"},
			{id: "image6", src:"https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg"},
			{id: "image7", src:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__480.jpg"},
			{id: "image8", src:"https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg"},
			{id: "image9", src:"https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__480.png"},
			{id: "image10", src:"https://cdn.pixabay.com/photo/2021/07/19/22/07/mountains-6479150__480.jpg"},
			{id: "image11", src:"https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149__480.jpg"},
			{id: "image12", src:"https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__480.jpg"},
			{id: "image13", src:"https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769__480.jpg"},
			{id: "image14", src:"https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__480.jpg"},
			{id: "image15", src:"https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945__480.jpg"},
			{id: "image16", src:"https://cdn.pixabay.com/photo/2021/08/18/19/02/trees-6556336__480.jpg"},
			{id: "image17", src:"https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715__480.jpg"},
			{id: "image18", src:"https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926__480.jpg"},
			{id: "image19", src:"https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004__480.jpg"},
			{id: "image20", src:"https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476__480.jpg"},
			{id: "image21", src:"https://cdn.pixabay.com/photo/2014/07/16/05/18/beach-394503__480.jpg"},
			{id: "image22", src:"https://cdn.pixabay.com/photo/2017/06/23/17/46/desert-2435404__480.jpg"},
			{id: "image23", src:"https://cdn.pixabay.com/photo/2021/08/23/08/28/path-6567149__480.jpg"}
		];
		
		function main()
		{
			document.body.style.backgroundColor = lib.properties.color;
			generateGrid();
			queue = new createjs.LoadQueue();
			queue.on("complete", loadComplete, root);
			queue.loadManifest(manifest);
		}
		
		function loadComplete()
		{
			placeImages();
		}
		
		function generateGrid()
		{
			var i, thumb, thumbBounds, containerBounds;
			var total = manifest.length;
			
			for (i = 0; i < total; i++)
			{
				thumb = new lib.Thumb();
				thumbBounds = thumb.nominalBounds;
				thumb.x = thumbBounds.width * 0.5 + (i % columns) * (thumbBounds.width + offsetX);
				thumb.y = thumbBounds.height * 0.5 + Math.floor(i / columns) * (thumbBounds.height + offsetY);
				root.container.addChild(thumb);
			}
			
			containerBounds = container.getBounds();
			container.x = (lib.properties.width - (thumb.x + thumbBounds.width * 0.5)) * 0.5;
			container.y = (lib.properties.height - (thumb.y + thumbBounds.height * 0.5)) * 0.5;
		}
		
		function placeImages()
		{
			var i, thumb, thumbBounds, image, bmp, bmpBounds;
			var total = manifest.length;
			
			for (i = 0; i < total; i++)
			{
				thumb = container.children[i];
				thumbBounds = thumb.nominalBounds;
				image = queue.getResult(imagePrefix + i);
				bmp = new createjs.Bitmap(image);
				bmpBounds = bmp.getBounds();
				
				if (bmpBounds.width > bmpBounds.height)
					bmp.scale = thumbBounds.width / bmpBounds.width;
				else
					bmp.scale = thumbBounds.height / bmpBounds.height;
				
				bmp.x = -bmpBounds.width * 0.5 * bmp.scale;
				bmp.y = -bmpBounds.height * 0.5 * bmp.scale;
				thumb.addChild(bmp);
			}
		}
		
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// container
	this.container = new lib.Container();
	this.container.name = "container";

	this.timeline.addTween(cjs.Tween.get(this.container).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'EFEDC924ACDF4CA48057833C7C371AAF',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFCC33",
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
an.compositions['EFEDC924ACDF4CA48057833C7C371AAF'] = {
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