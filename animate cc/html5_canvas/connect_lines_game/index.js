(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1388,0,250,196],[0,0,692,692],[694,0,692,692],[1640,0,250,196],[1926,0,30,30],[1892,0,32,32],[1388,394,225,82],[1388,198,248,194],[1638,198,236,186],[1638,386,228,178]]}
];


// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
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


(lib.SadFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_13
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-124.95,-124.9,0.3613,0.3613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.9,-124.9,250,250);


(lib.HappyFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_13
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-124.95,-124.9,0.3613,0.3613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.9,-124.9,250,250);


(lib.DotHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-7.5,-7.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,15,15);


(lib.ButtonRec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-56.1,-20.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-20.6,112.5,41);


(lib.BoxHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-62,-48.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-48.5,124,97);


(lib.YellowBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-62.5,-49,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.BoxHit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-49,125,98);


(lib.SadFaceAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// anim
	this.instance = new lib.SadFace("synched",0);
	this.instance.setTransform(-28.8,-86.6,0.05,0.05,0,0,0,-1,-1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:0,regY:0,scaleX:1.384,scaleY:1.3838,x:-29.4,y:-87.2},9,cjs.Ease.backOut).wait(42).to({startPosition:0},0).to({regX:-1,regY:-1,scaleX:0.05,scaleY:0.05,x:-28.8,y:-86.6},6,cjs.Ease.sineOut).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.2,-275,378.9,378.9);


(lib.ResetButton1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("RESET 1", "20px 'Arial'", "#333333");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(0,-11.15);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1).to({color:"#FF3300"},0).wait(1).to({y:-10.05,font:"18px 'Arial'",lineHeight:22.1},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-20.6,112.5,41);


(lib.ResetButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("RESET", "20px 'Arial'", "#333333");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(0,-11.15);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1).to({color:"#FF3300"},0).wait(1).to({y:-10.05,font:"18px 'Arial'",lineHeight:22.1},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.ButtonRec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.95,scaleY:0.95},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.ButtonRec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-20.6,112.5,41);


(lib.HappyFaceAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// anim
	this.instance = new lib.HappyFace("synched",0);
	this.instance.setTransform(-28.8,-86.6,0.05,0.05,0,0,0,-1,-1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:0,regY:0,scaleX:1.384,scaleY:1.3838,x:-29.4,y:-87.2},9,cjs.Ease.backOut).wait(42).to({startPosition:0},0).to({regX:-1,regY:-1,scaleX:0.05,scaleY:0.05,x:-28.8,y:-86.6},6,cjs.Ease.sineOut).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.2,-275,378.9,378.9);


(lib.GreenBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-62.5,-49,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.BoxHit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-49,125,98);


(lib.Dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-8,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.DotHit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


(lib.BlueBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-59,-46.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.BoxHit("single",0);
	this.instance_1.setTransform(0,0,0.9435,0.9485);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-46.5,118,93);


(lib.BlackBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-57,-44.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// hit
	this.instance_1 = new lib.BoxHit("single",0);
	this.instance_1.setTransform(0,0,0.9116,0.9074);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-44.5,114,89);


(lib.Board2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stuff
	this.instance = new lib.BlackBox();
	this.instance.setTransform(852.85,555.25);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.BlackBox(), 3);

	this.box0 = new lib.GreenBox();
	this.box0.name = "box0";
	this.box0.setTransform(639.15,555.25);
	new cjs.ButtonHelper(this.box0, 0, 1, 2, false, new lib.GreenBox(), 3);

	this.dot3 = new lib.Dot();
	this.dot3.name = "dot3";
	this.dot3.setTransform(757.45,555.25);
	new cjs.ButtonHelper(this.dot3, 0, 1, 2, false, new lib.Dot(), 3);

	this.box1 = new lib.BlueBox();
	this.box1.name = "box1";
	this.box1.setTransform(641.15,429.35);
	new cjs.ButtonHelper(this.box1, 0, 1, 2, false, new lib.BlueBox(), 3);

	this.instance_1 = new lib.YellowBox();
	this.instance_1.setTransform(852.85,429.35);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.YellowBox(), 3);

	this.dot2 = new lib.Dot();
	this.dot2.name = "dot2";
	this.dot2.setTransform(757.45,429.35);
	new cjs.ButtonHelper(this.dot2, 0, 1, 2, false, new lib.Dot(), 3);

	this.box2 = new lib.YellowBox();
	this.box2.name = "box2";
	this.box2.setTransform(639.15,303.45);
	new cjs.ButtonHelper(this.box2, 0, 1, 2, false, new lib.YellowBox(), 3);

	this.instance_2 = new lib.BlueBox();
	this.instance_2.setTransform(852.85,303.45);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.BlueBox(), 3);

	this.dot1 = new lib.Dot();
	this.dot1.name = "dot1";
	this.dot1.setTransform(757.45,303.45);
	new cjs.ButtonHelper(this.dot1, 0, 1, 2, false, new lib.Dot(), 3);

	this.instance_3 = new lib.GreenBox();
	this.instance_3.setTransform(852.85,177.55);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.GreenBox(), 3);

	this.box3 = new lib.BlackBox();
	this.box3.name = "box3";
	this.box3.setTransform(639.15,177.55);
	new cjs.ButtonHelper(this.box3, 0, 1, 2, false, new lib.BlackBox(), 3);

	this.dot0 = new lib.Dot();
	this.dot0.name = "dot0";
	this.dot0.setTransform(757.45,177.55);
	new cjs.ButtonHelper(this.dot0, 0, 1, 2, false, new lib.Dot(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot0},{t:this.box3},{t:this.instance_3},{t:this.dot1},{t:this.instance_2},{t:this.box2},{t:this.dot2},{t:this.instance_1},{t:this.box1},{t:this.dot3},{t:this.box0},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board2, new cjs.Rectangle(576.7,128.6,338.69999999999993,475.69999999999993), null);


(lib.Board1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stuff
	this.instance = new lib.BlackBox();
	this.instance.setTransform(326.45,505.05);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.BlackBox(), 3);

	this.box1 = new lib.GreenBox();
	this.box1.name = "box1";
	this.box1.setTransform(112.75,505.05);
	new cjs.ButtonHelper(this.box1, 0, 1, 2, false, new lib.GreenBox(), 3);

	this.dot2 = new lib.Dot();
	this.dot2.name = "dot2";
	this.dot2.setTransform(231.05,505.05);
	new cjs.ButtonHelper(this.dot2, 0, 1, 2, false, new lib.Dot(), 3);

	this.instance_1 = new lib.GreenBox();
	this.instance_1.setTransform(326.45,347.65);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.GreenBox(), 3);

	this.box2 = new lib.BlackBox();
	this.box2.name = "box2";
	this.box2.setTransform(112.75,347.65);
	new cjs.ButtonHelper(this.box2, 0, 1, 2, false, new lib.BlackBox(), 3);

	this.dot1 = new lib.Dot();
	this.dot1.name = "dot1";
	this.dot1.setTransform(231.05,347.65);
	new cjs.ButtonHelper(this.dot1, 0, 1, 2, false, new lib.Dot(), 3);

	this.instance_2 = new lib.BlueBox();
	this.instance_2.setTransform(326.45,192.75);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.BlueBox(), 3);

	this.dot0 = new lib.Dot();
	this.dot0.name = "dot0";
	this.dot0.setTransform(231.05,192.75);
	new cjs.ButtonHelper(this.dot0, 0, 1, 2, false, new lib.Dot(), 3);

	this.box0 = new lib.BlueBox();
	this.box0.name = "box0";
	this.box0.setTransform(114.75,192.75);
	new cjs.ButtonHelper(this.box0, 0, 1, 2, false, new lib.BlueBox(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box0},{t:this.dot0},{t:this.instance_2},{t:this.dot1},{t:this.box2},{t:this.instance_1},{t:this.dot2},{t:this.box1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board1, new cjs.Rectangle(50.3,146.3,338.7,407.8), null);


(lib.Board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stuff
	this.instance = new lib.BlueBox();
	this.instance.setTransform(684.85,442.65);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.BlueBox(), 3);

	this.instance_1 = new lib.BlackBox();
	this.instance_1.setTransform(684.85,320);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.BlackBox(), 3);

	this.instance_2 = new lib.GreenBox();
	this.instance_2.setTransform(684.85,197.35);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.GreenBox(), 3);

	this.box0 = new lib.GreenBox();
	this.box0.name = "box0";
	this.box0.setTransform(275.15,442.65);
	new cjs.ButtonHelper(this.box0, 0, 1, 2, false, new lib.GreenBox(), 3);

	this.dot2 = new lib.Dot();
	this.dot2.name = "dot2";
	this.dot2.setTransform(544.65,442.05);
	new cjs.ButtonHelper(this.dot2, 0, 1, 2, false, new lib.Dot(), 3);

	this.dot0 = new lib.Dot();
	this.dot0.name = "dot0";
	this.dot0.setTransform(544.65,196.75);
	new cjs.ButtonHelper(this.dot0, 0, 1, 2, false, new lib.Dot(), 3);

	this.box2 = new lib.BlueBox();
	this.box2.name = "box2";
	this.box2.setTransform(275.15,320);
	new cjs.ButtonHelper(this.box2, 0, 1, 2, false, new lib.BlueBox(), 3);

	this.box1 = new lib.BlackBox();
	this.box1.name = "box1";
	this.box1.setTransform(275.15,197.35);
	new cjs.ButtonHelper(this.box1, 0, 1, 2, false, new lib.BlackBox(), 3);

	this.dot1 = new lib.Dot();
	this.dot1.name = "dot1";
	this.dot1.setTransform(544.65,319.4);
	new cjs.ButtonHelper(this.dot1, 0, 1, 2, false, new lib.Dot(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot1},{t:this.box1},{t:this.box2},{t:this.dot0},{t:this.dot2},{t:this.box0},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Board, new cjs.Rectangle(212.7,148.4,534.7,343.29999999999995), null);


// stage content:
(lib.adobe_animate_htmo5_canvas_connect_lines_game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var board = root.board;
		var happy = root.happy;
		var sad = root.sad;
		var resetButton = root.resetButton;
		var game;
		
		if (!root.frame0Started)
		{		
			root.stop();
			stage.mouseMoveOutside = true;
			createjs.Touch.enable(stage);
			
			root.ConnectLinesGame = function(props)
			{
				this.board = props.board;
				this.startPrefix = props.startPrefix;
				this.endPrefix = props.endPrefix;
				this.totalDots = props.totalDots;
				this.strokeStyle = props.strokeStyle;
				this.callbacks = props.callbacks;
				this.reset(true);
			};
		
			root.ConnectLinesGame.prototype.mouseDownHandler = function(e)
			{		
				if (this.board.contains(e.target) && e.target.name && e.target.name.indexOf(this.startPrefix) === 0 && !e.target.done)
				{		
					this.dots.unshift(e.target);
					this.beginLine(e.target.x, e.target.y);
					this.drawing = true;
				}
			};
		
			root.ConnectLinesGame.prototype.pressMoveHandler = function(e)
			{
				var mouse = this.getMouse();
				
				if (this.drawing)
					this.drawLine(mouse.x, mouse.y);		
			};
			
			root.ConnectLinesGame.prototype.pressUpHandler = function(e)
			{
				if (this.board.contains(e.target))
				{			
					var mouse = this.getMouse();
					var target = this.board.getObjectsUnderPoint(mouse.x, mouse.y, 1)[1];
						
					if (target && target.name && target.name.indexOf(this.endPrefix) === 0 && target.name.replace(this.endPrefix, "") === this.dots[0].name.replace(this.startPrefix, ""))
						this.onConnect(target);
					else
						this.onMiss();
					
					this.drawing = false;
				}
			};
		
			root.ConnectLinesGame.prototype.onConnect = function(target)
			{	
				this.drawLine(target.x, target.y);
				this.dots[0].done = true;
				this.connectionsCount++;
				
				if (this.callbacks.onConnect !== null)
					this.callbacks.onConnect();
						
				if (this.connectionsCount === this.totalDots)
				{
					this.removeEvents();
					this.win = true;
					
					if (this.callbacks.onWin !== null)
						this.callbacks.onWin();
				}
			};
		
			root.ConnectLinesGame.prototype.onMiss = function()
			{
				if (this.drawing)
				{
					this.removeLine(0);
					this.dots.splice(0, 1);
					
					if (this.callbacks.onMiss !== null)
						this.callbacks.onMiss();
				}
			};
		
			root.ConnectLinesGame.prototype.beginLine = function(x, y)
			{	
				this.prevX = x;
				this.prevY = y;
				this.lines.unshift(new createjs.Shape());	
				this.board.addChild(this.lines[0]);
			};
		
			root.ConnectLinesGame.prototype.drawLine = function(x, y)
			{	
				this.lines[0].graphics.clear();
				this.lines[0].graphics.setStrokeStyle(this.strokeStyle.thickness);
				this.lines[0].graphics.beginStroke(this.strokeStyle.color);
				this.lines[0].graphics.moveTo(this.prevX, this.prevY);
				this.lines[0].graphics.lineTo(x, y);
				this.lines[0].graphics.endStroke();
			};
		
			root.ConnectLinesGame.prototype.getMouse = function()
			{
				return { x: stage.mouseX / stage.scaleX, y: stage.mouseY / stage.scaleY};
			};
		
			root.ConnectLinesGame.prototype.removeLine = function(index)
			{
				this.board.removeChild(this.lines[index]);
				this.lines[index]._off = true; // this is needed if you're using Animate 20.0.2
				this.lines.splice(index, 1);
			};
		
			root.ConnectLinesGame.prototype.addEvents = function(index)
			{
				this.mouseDown = this.board.on("mousedown", this.mouseDownHandler, this);
				this.pressMove = this.board.on("pressmove", this.pressMoveHandler, this);
				this.pressUp = exportRoot.on("pressup", this.pressUpHandler, this);
			};
		
			root.ConnectLinesGame.prototype.removeEvents = function(index)
			{
				this.board.off("mousedown", this.mouseDown);
				this.board.off("pressmove", this.pressMove);
				exportRoot.off("pressup", this.pressUp);
			};
		
			root.ConnectLinesGame.prototype.reset = function(add)
			{
				var i;
				
				if (this.lines && this.lines.length > 0)
					for (i = this.lines.length - 1; i >= 0; i--)
						this.removeLine(i);
				
				if (this.dots && this.dots.length > 0)
					for (i = this.dots.length - 1; i >= 0; i--)
						this.dots[i].done = false;
						
				this.lines = [];
				this.dots = [];
				this.drawing = false;
				this.win = false;
				this.connectionsCount = 0;
				this.removeEvents();
						
				if (add)
					this.addEvents();
				
				if (this.callbacks.onReset !== null)
					this.callbacks.onReset();
			};
			
			resetButton.on("click", function(e)
			{
				game.reset(true);
			});
			
			root.frame0Started = true;
		}
		
		root.playSound = function(linkage, type, stopPrevious, props)
		{	
			if (!props)
				props = {};
				
			if (stopPrevious && this[type])
				this[type].stop();
				
			this[type] = createjs.Sound.play(linkage, props);
		};
		
		root.start = function()
		{
			game = new root.ConnectLinesGame(
			{
				board: board,
				startPrefix: "dot",
				endPrefix: "box",
				totalDots: 3,
				connectionsCount: 0,
				strokeStyle: { color: "#39393B", thickness: 5 },
				callbacks:
				{
					onConnect: function()
					{
						root.playSound("Good", "sfx", true); // "Good" is the sound's linkage name in the Library
						happy.gotoAndPlay(1);
					},
					onMiss: function()
					{
						root.playSound("Bad", "sfx", true);
						sad.gotoAndPlay(1);
					},
					onWin: function()
					{
						game.reset(false);
						root.gotoAndStop(1);
					},
					onReset: function()
					{
						happy.gotoAndStop(0);
						sad.gotoAndStop(0);
					}
				}		
			});
		};
		
		root.start();
	}
	this.frame_1 = function() {
		var root = this;
		var board1 = root.board1;
		var board2 = root.board2;
		var happy = root.happy1;
		var sad = root.sad1;
		var resetButton1 = root.resetButton1;
		var resetButton2 = root.resetButton2;
		var game1;
		var game2;
		
		root.start = function()
		{
			game1 = new root.ConnectLinesGame(
			{
				board: board1,
				startPrefix: "dot",
				endPrefix: "box",
				totalDots: 3,
				connectionsCount: 0,
				strokeStyle: { color: "#ffcc33", thickness: 2 },
				callbacks:
				{
					onConnect: function()
					{
						root.playSound("Good", "sfx", true); // "Good" is the sound's linkage name in the Library
						happy.gotoAndPlay(1);
					},
					onMiss: function()
					{
						root.playSound("Bad", "sfx", true);
						sad.gotoAndPlay(1);
					},
					onWin: function()
					{
						board1.alpha = 0.5;
						
						if (game1.win && game2.win)
						{
							game1.reset(false);
							game2.reset(false);					
							root.gotoAndStop(0);
						}					
					},
					onReset: function()
					{
						board1.alpha = 1;
						happy.gotoAndStop(0);
						sad.gotoAndStop(0);
					}
				}		
			});
			
			game2 = new root.ConnectLinesGame(
			{
				board: board2,
				startPrefix: "dot",
				endPrefix: "box",
				totalDots: 4,
				connectionsCount: 0,
				strokeStyle: { color: "#ff3333", thickness: 8 },
				callbacks:
				{
					onConnect: function()
					{
						root.playSound("Good", "sfx", true); // "Good" is the sound's linkage name in the Library
						happy.gotoAndPlay(1);
					},
					onMiss: function()
					{
						root.playSound("Bad", "sfx", true);
						sad.gotoAndPlay(1);
					},
					onWin: function()
					{
						board2.alpha = 0.5;
						
						if (game1.win && game2.win)
						{
							game1.reset(false);
							game2.reset(false);					
							root.gotoAndStop(0);
						}
					},
					onReset: function()
					{
						board2.alpha = 1;
						happy.gotoAndStop(0);
						sad.gotoAndStop(0);
					}
				}
			});
			
			if (!root.frame1Started)
			{		
				resetButton1.on("click", function(e)
				{
					game1.reset(true);
				});
				
				resetButton2.on("click", function(e)
				{
					game2.reset(true);
				});
				
				root.frame1Started = true;
			}
		};
		
		root.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// reset
	this.resetButton = new lib.ResetButton();
	this.resetButton.name = "resetButton";
	this.resetButton.setTransform(857.15,44.45);
	new cjs.ButtonHelper(this.resetButton, 0, 1, 2, false, new lib.ResetButton(), 3);

	this.resetButton2 = new lib.ResetButton1();
	this.resetButton2.name = "resetButton2";
	this.resetButton2.setTransform(742.8,44.45);
	new cjs.ButtonHelper(this.resetButton2, 0, 1, 2, false, new lib.ResetButton1(), 3);

	this.resetButton1 = new lib.ResetButton();
	this.resetButton1.name = "resetButton1";
	this.resetButton1.setTransform(260.55,44.45);
	new cjs.ButtonHelper(this.resetButton1, 0, 1, 2, false, new lib.ResetButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.resetButton}]}).to({state:[{t:this.resetButton1},{t:this.resetButton2}]},1).wait(1));

	// sad
	this.happy = new lib.HappyFaceAnim();
	this.happy.name = "happy";
	this.happy.setTransform(486.95,80.05,0.1901,0.1896,0,0,0,0.3,-0.3);

	this.sad = new lib.SadFaceAnim();
	this.sad.name = "sad";
	this.sad.setTransform(473.15,559.9,0.1901,0.1896,0,0,0,0.3,-0.3);

	this.happy1 = new lib.HappyFaceAnim();
	this.happy1.name = "happy1";
	this.happy1.setTransform(486.95,80.05,0.1901,0.1896,0,0,0,0.3,-0.3);

	this.sad1 = new lib.SadFaceAnim();
	this.sad1.name = "sad1";
	this.sad1.setTransform(473.15,559.9,0.1901,0.1896,0,0,0,0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sad},{t:this.happy}]}).to({state:[{t:this.sad1},{t:this.happy1}]},1).wait(1));

	// board
	this.board = new lib.Board();
	this.board.name = "board";

	this.board2 = new lib.Board2();
	this.board2.name = "board2";

	this.board1 = new lib.Board1();
	this.board1.name = "board1";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.board}]}).to({state:[{t:this.board1},{t:this.board2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(530.3,343.9,385.1,260.4);
// library properties:
lib.properties = {
	id: '49C8550336B0EC47A7CE03BCEAE0C25D',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"sounds/Bad.mp3", id:"Bad"},
		{src:"sounds/Good.mp3", id:"Good"}
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
an.compositions['49C8550336B0EC47A7CE03BCEAE0C25D'] = {
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