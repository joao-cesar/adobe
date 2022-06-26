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



(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// anim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al2F3QibicAAjbQAAjbCbiaQCcicDaAAQDcAACaCcQCcCaAADbQAADbicCcQiaCbjcAAQjaAAicibg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6FBFF").s().p("AmBGCQigigAAjiQAAjhCgigQCgigDhAAQDiAACgCgQCgCgAADhQAADiigCgQigCgjiAAQjhAAigigg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF8FF").s().p("AmNGOQikilgBjpQABjoCkilQClilDoAAQDpAAClClQClClAADoQAADpilClQilCkjpABQjogBilikg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5F4FF").s().p("AmZGaQipirAAjvQAAjvCpipQCriqDuAAQDwAACpCqQCqCpAADvQAADviqCrQipCpjwAAQjuAAiripg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DCF0FF").s().p("AmkGlQiuivAAj2QAAj1CuiuQCvivD1AAQD2AACuCvQCvCuAAD1QAAD2ivCvQiuCuj2AAQj1AAiviug");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3EDFF").s().p("AmwGwQiyizAAj9QAAj8CyizQC0izD8AAQD9AACzCzQCzCzAAD8QAAD9izCzQizCzj9AAQj8AAi0izg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CAE9FF").s().p("Am7G8Qi3i4AAkEQAAkDC3i4QC4i3EDAAQEDAAC5C3QC3C4AAEDQAAEEi3C4Qi5C3kDAAQkDAAi4i3g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C1E5FF").s().p("AnGHHQi9i8AAkLQAAkKC9i8QC8i9EKAAQELAAC8C9QC9C8gBEKQABELi9C8Qi8C9kLgBQkKABi8i9g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B9E1FF").s().p("AnRHSQjCjBAAkRQAAkRDCjAQDBjBEQgBQERABDBDBQDBDAABERQgBERjBDBQjBDCkRAAQkQAAjBjCg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B0DEFF").s().p("AndHeQjGjGAAkYQAAkXDGjGQDGjGEXAAQEYAADGDGQDGDGAAEXQAAEYjGDGQjGDGkYAAQkXAAjGjGg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7DAFF").s().p("AnpHqQjKjMAAkeQAAkdDKjLQDMjLEdAAQEeAADLDLQDLDLAAEdQAAEejLDMQjLDKkeAAQkdAAjMjKg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9ED6FF").s().p("An0H1QjPjQAAklQAAklDPjOQDQjREkABQEmgBDODRQDRDOgBElQABEljRDQQjODPkmAAQkkAAjQjPg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#95D3FF").s().p("An/IAQjVjUAAksQAAkrDVjUQDUjVErAAQEsAADUDVQDVDUgBErQABEsjVDUQjUDUksAAQkrAAjUjUg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8DCFFF").s().p("AoLIMQjYjZgBkzQABkyDYjZQDZjZEyAAQEzAADZDZQDZDZAAEyQAAEzjZDZQjZDYkzABQkygBjZjYg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#84CBFF").s().p("AoXIXQjdjdAAk6QAAk4DdjeQDejeE5AAQE5AADeDeQDeDeAAE4QAAE6jeDdQjeDek5AAQk5AAjejeg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7BC8FF").s().p("AoiIiQjijiAAlAQAAk/DijiQDijjFAAAQFAAADiDjQDjDiAAE/QAAFAjjDiQjiDjlAAAQlAAAjijjg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#72C4FF").s().p("AouIuQjnjnABlHQgBlGDnjnQDojnFGAAQFHAADnDnQDnDnAAFGQAAFHjnDnQjnDnlHAAQlGAAjojng");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6AC0FF").s().p("Ao5I6QjsjsAAlOQAAlNDsjsQDsjrFNgBQFNABDtDrQDrDsAAFNQAAFOjrDsQjtDrlNAAQlNAAjsjrg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#61BDFF").s().p("ApEJFQjxjxAAlUQAAlTDxjxQDxjwFTgBQFUABDxDwQDwDxABFTQgBFUjwDxQjxDwlUABQlTgBjxjwg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58B9FF").s().p("ApQJQQj1j0AAlcQAAlbD1j0QD1j2FbAAQFbAAD1D2QD2D0AAFbQAAFcj2D0Qj1D2lbAAQlbAAj1j2g");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4FB5FF").s().p("ApcJcQj5j6AAliQAAlhD5j6QD7j6FhAAQFiAAD6D6QD6D6AAFhQAAFij6D6Qj6D6liAAQlhAAj7j6g");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#46B2FF").s().p("ApnJoQj+j/AAlpQAAloD+j/QD/j/FoABQFpgBD/D/QD/D/gBFoQABFpj/D/Qj/D/lpgBQloABj/j/g");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3EAEFF").s().p("ApyJzQkEkEAAlvQAAluEEkDQEEkEFugBQFvABEDEEQEEEDABFuQgBFvkEEEQkDEElvAAQluAAkEkEg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#35AAFF").s().p("Ap9J+QkJkIAAl2QAAl1EJkIQEIkJF1AAQF2AAEIEJQEJEIAAF1QAAF2kJEIQkIEJl2AAQl1AAkIkJg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2CA6FF").s().p("AqJKKQkNkNAAl9QAAl8ENkNQENkNF8AAQF8AAEOENQENENAAF8QAAF9kNENQkOENl8AAQl8AAkNkNg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#23A3FF").s().p("AqVKVQkRkRAAmEQAAmDERkRQESkSGDAAQGDAAESESQESERAAGDQAAGEkSERQkSESmDAAQmDAAkSkSg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1A9FFF").s().p("AqgKgQkWkVAAmLQAAmKEWkVQEXkYGJABQGKgBEWEYQEYEVgBGKQABGLkYEVQkWEYmKgBQmJABkXkYg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#129BFF").s().p("AqsKsQkbkbAAmRQAAmQEbkbQEckcGQAAQGRAAEbEcQEbEbABGQQgBGRkbEbQkbEbmRABQmQgBkckbg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0998FF").s().p("Aq3K4QkgkgAAmYQAAmXEgkgQEgkgGXAAQGXAAEhEgQEgEgAAGXQAAGYkgEgQkhEgmXAAQmXAAkgkgg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0094FF").s().p("ArCLDQklkkAAmfQAAmeElkkQElklGdAAQGeAAElElQElEkAAGeQAAGfklEkQklElmeAAQmdAAklklg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


// stage content:
(lib.adobe_animate_html5_canvas_hover_tween = function(mode,startPosition,loop,reversed) {
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
		
		root.main = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			stage.enableMouseOver();
			root.button.mouseChildren = false;
			root.button.on("mouseover", function(e){ root.hoverTween(e.currentTarget, e.currentTarget.totalFrames -1) });
			root.button.on("mouseout", function(e){ root.hoverTween(e.currentTarget, 0) });
		};
		
		root.hoverTween = function(target, destination, ease)
		{
			var duration = (Math.abs(destination - target.currentFrame) / lib.properties.fps) * 1000;
			
			target.frame = target.currentFrame;
				
			createjs.Tween.get(target, { override: true }).to({ frame: destination }, duration, ease).on("change", function(e)
			{
				var target = e.currentTarget.target;		
				target.gotoAndStop(Math.round(target.frame));
			});
		};
		
		root.main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mcButton
	this.button = new lib.Button();
	this.button.name = "button";
	this.button.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(907,487,-374,-164);
// library properties:
lib.properties = {
	id: '3E39C44378F81D4C9D0592D14A80AD3D',
	width: 960,
	height: 540,
	fps: 60,
	color: "#1F1F1F",
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
an.compositions['3E39C44378F81D4C9D0592D14A80AD3D'] = {
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