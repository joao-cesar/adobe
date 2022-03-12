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


(lib.Ref = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,0,0,0.298)").ss(4,1,1).p("EC98COdMAAAkc5Ml73AAAMAAAEc5g");
	this.shape.setTransform(1215.6,911.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,2435.2,1827.4);


(lib.InvisibleButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap/KAIAAz/IT/AAIAAT/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-64,128,128);


(lib.Grid = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,255,255,0.298)").ss(4,1,1).p("EAAAiOcMBe+AAAMAAABe+Mhe+AAAMAAABe9Mhe9AAAMAAAhe9MAAAhe+MBe9AAAMAAABe+Mhe9AAAEBe+AvfMhe+AAAMAAABe+EBe+gveMAAABe9MAAABe+Mhe+AAAEhe9AvfMAAABe+MBe9AAA");
	this.shape.setTransform(607.8,911.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,1219.6,1827.4);


(lib.Circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIDIQhThTAAh1QAAh1BThTQBThTB1AAQB1AABTBTQBUBTAAB1QAAB1hUBTQhTBUh1AAQh1AAhThUgAiJiFIAAABQg4A3AABNIAAABQAABOA4A4QA3A3BOAAIAIAAIAAhLIgIAAQguAAgigiQghghAAgvIAAgBQAAguAhghQAighAuAAIAIAAQAqADAeAeQAiAhAAAuIg3AAIBYBZIBYhZIguAAQAAhNg4g3IAAgBQg0gzhJgDIgIAAQhOAAg3A2g");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-28.3,56.8,56.7);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(6,2,0,3).p("AkBlcIHtFcIntFdg");
	this.shape.setTransform(0.5,0.8,1,1,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-40.6,58.9,81.30000000000001);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
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
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-271,962,542);


(lib.Scene_1_ref = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ref
	this.ref = new lib.Ref("synched",0);
	this.ref.name = "ref";
	this.ref.setTransform(0.1,0,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.ref).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_ref, null, null);


(lib.ResetZoomButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// circles
	this.instance = new lib.Circle("single",0);
	this.instance.setTransform(0.05,0);
	this.instance.alpha = 0.75;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjIDIQhThTAAh1QAAh1BThTQBThTB1AAQB1AABTBTQBUBTAAB1QAAB1hUBTQhTBUh1AAQh1AAhThUg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.75,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{alpha:1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{alpha:1,scaleX:0.9,scaleY:0.9}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-28.3,56.8,56.7);


(lib.Content1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spots
	this.spot11 = new lib.InvisibleButton();
	this.spot11.name = "spot11";
	this.spot11.setTransform(911.7,1519.5);
	new cjs.ButtonHelper(this.spot11, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot10 = new lib.InvisibleButton();
	this.spot10.name = "spot10";
	this.spot10.setTransform(303.9,1519.5);
	new cjs.ButtonHelper(this.spot10, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot7 = new lib.InvisibleButton();
	this.spot7.name = "spot7";
	this.spot7.setTransform(911.7,911.7);
	new cjs.ButtonHelper(this.spot7, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot6 = new lib.InvisibleButton();
	this.spot6.name = "spot6";
	this.spot6.setTransform(303.9,911.7);
	new cjs.ButtonHelper(this.spot6, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot3 = new lib.InvisibleButton();
	this.spot3.name = "spot3";
	this.spot3.setTransform(911.7,303.9);
	new cjs.ButtonHelper(this.spot3, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot2 = new lib.InvisibleButton();
	this.spot2.name = "spot2";
	this.spot2.setTransform(303.9,303.9);
	new cjs.ButtonHelper(this.spot2, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spot2},{t:this.spot3},{t:this.spot6},{t:this.spot7},{t:this.spot10},{t:this.spot11}]}).wait(1));

	// numbers
	this.text = new cjs.Text("12", "96px 'Helvetica'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 105;
	this.text.lineWidth = 107;
	this.text.alpha = 0.49803922;
	this.text.parent = this;
	this.text.setTransform(911.7,1465.6);

	this.text_1 = new cjs.Text("11", "96px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 105;
	this.text_1.lineWidth = 107;
	this.text_1.alpha = 0.49803922;
	this.text_1.parent = this;
	this.text_1.setTransform(303.9,1465.6);

	this.text_2 = new cjs.Text("8", "96px 'Helvetica'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 105;
	this.text_2.lineWidth = 60;
	this.text_2.alpha = 0.49803922;
	this.text_2.parent = this;
	this.text_2.setTransform(911.7,857.8);

	this.text_3 = new cjs.Text("7", "96px 'Helvetica'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 105;
	this.text_3.lineWidth = 60;
	this.text_3.alpha = 0.49803922;
	this.text_3.parent = this;
	this.text_3.setTransform(303.9,857.8);

	this.text_4 = new cjs.Text("4", "96px 'Helvetica'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 105;
	this.text_4.lineWidth = 60;
	this.text_4.alpha = 0.49803922;
	this.text_4.parent = this;
	this.text_4.setTransform(911.7,250);

	this.text_5 = new cjs.Text("3", "96px 'Helvetica'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 105;
	this.text_5.lineWidth = 60;
	this.text_5.alpha = 0.49803922;
	this.text_5.parent = this;
	this.text_5.setTransform(303.9,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// grid
	this.instance = new lib.Grid("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Content1, new cjs.Rectangle(-2,-2,1219.6,1827.4), null);


(lib.Content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spots
	this.spot9 = new lib.InvisibleButton();
	this.spot9.name = "spot9";
	this.spot9.setTransform(911.7,1519.5);
	new cjs.ButtonHelper(this.spot9, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot8 = new lib.InvisibleButton();
	this.spot8.name = "spot8";
	this.spot8.setTransform(303.9,1519.5);
	new cjs.ButtonHelper(this.spot8, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot5 = new lib.InvisibleButton();
	this.spot5.name = "spot5";
	this.spot5.setTransform(911.7,911.7);
	new cjs.ButtonHelper(this.spot5, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot4 = new lib.InvisibleButton();
	this.spot4.name = "spot4";
	this.spot4.setTransform(303.9,911.7);
	new cjs.ButtonHelper(this.spot4, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot1 = new lib.InvisibleButton();
	this.spot1.name = "spot1";
	this.spot1.setTransform(911.7,303.9);
	new cjs.ButtonHelper(this.spot1, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.spot0 = new lib.InvisibleButton();
	this.spot0.name = "spot0";
	this.spot0.setTransform(303.9,303.9);
	new cjs.ButtonHelper(this.spot0, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spot0},{t:this.spot1},{t:this.spot4},{t:this.spot5},{t:this.spot8},{t:this.spot9}]}).wait(1));

	// numbers
	this.text = new cjs.Text("10", "96px 'Helvetica'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 105;
	this.text.lineWidth = 107;
	this.text.alpha = 0.49803922;
	this.text.parent = this;
	this.text.setTransform(911.7,1465.6);

	this.text_1 = new cjs.Text("9", "96px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 105;
	this.text_1.lineWidth = 60;
	this.text_1.alpha = 0.49803922;
	this.text_1.parent = this;
	this.text_1.setTransform(303.9,1465.6);

	this.text_2 = new cjs.Text("6", "96px 'Helvetica'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 105;
	this.text_2.lineWidth = 60;
	this.text_2.alpha = 0.49803922;
	this.text_2.parent = this;
	this.text_2.setTransform(911.7,857.8);

	this.text_3 = new cjs.Text("5", "96px 'Helvetica'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 105;
	this.text_3.lineWidth = 60;
	this.text_3.alpha = 0.49803922;
	this.text_3.parent = this;
	this.text_3.setTransform(303.9,857.8);

	this.text_4 = new cjs.Text("2", "96px 'Helvetica'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 105;
	this.text_4.lineWidth = 60;
	this.text_4.alpha = 0.49803922;
	this.text_4.parent = this;
	this.text_4.setTransform(911.7,250);

	this.text_5 = new cjs.Text("1", "96px 'Helvetica'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 105;
	this.text_5.lineWidth = 60;
	this.text_5.alpha = 0.49803922;
	this.text_5.parent = this;
	this.text_5.setTransform(303.9,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// grid
	this.instance = new lib.Grid("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Content, new cjs.Rectangle(-2,-2,1219.6,1827.4), null);


(lib.ArrowButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// triangles
	this.instance = new lib.Arrow("single",0);
	this.instance.alpha = 0.75;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkfmWII/GWIo/GXg");
	this.shape.setTransform(1.125,0.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.75,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{alpha:1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{alpha:1,scaleX:0.9,scaleY:0.9}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-40.6,58.9,81.30000000000001);


(lib.Scene_1_content1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// content1
	this.content1 = new lib.Content1();
	this.content1.name = "content1";
	this.content1.setTransform(1215.6,0);

	this.timeline.addTween(cjs.Tween.get(this.content1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_content1, null, null);


(lib.Scene_1_content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// content
	this.content = new lib.Content();
	this.content.name = "content";

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_content, null, null);


(lib.Scene_1_buttons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons
	this.resetZoomButton = new lib.ResetZoomButton();
	this.resetZoomButton.name = "resetZoomButton";
	this.resetZoomButton.setTransform(908.65,38.4);
	new cjs.ButtonHelper(this.resetZoomButton, 0, 1, 2, false, new lib.ResetZoomButton(), 3);

	this.upButton = new lib.ArrowButton();
	this.upButton.name = "upButton";
	this.upButton.setTransform(480,34.75,1,1,-90);
	new cjs.ButtonHelper(this.upButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.downButton = new lib.ArrowButton();
	this.downButton.name = "downButton";
	this.downButton.setTransform(480.05,505.25,1,1,90);
	new cjs.ButtonHelper(this.downButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.leftButton = new lib.ArrowButton();
	this.leftButton.name = "leftButton";
	this.leftButton.setTransform(34.75,270.05,1,1,180);
	new cjs.ButtonHelper(this.leftButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.rightButton = new lib.ArrowButton();
	this.rightButton.name = "rightButton";
	this.rightButton.setTransform(925.25,270);
	new cjs.ButtonHelper(this.rightButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rightButton},{t:this.leftButton},{t:this.downButton},{t:this.upButton},{t:this.resetZoomButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


// stage content:
(lib.html5_canvas_camera_controls = function(mode,startPosition,loop,reversed) {
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
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.rightButton = this.buttons.rightButton;
		this.leftButton = this.buttons.leftButton;
		this.downButton = this.buttons.downButton;
		this.upButton = this.buttons.upButton;
		this.resetZoomButton = this.buttons.resetZoomButton;
		if(this.ref.parent == undefined || this.ref.parent == this)
		this.ref = this.ref.ref;
		if(this.content.parent == undefined || this.content.parent == this)
		this.content = this.content.content;
		if(this.content1.parent == undefined || this.content1.parent == this)
		this.content1 = this.content1.content1;
		var root = this;
		var offset = 10; // amount of pixels the camera will move when the arrows are pressed
		var clickZoom = 2; // zoom factor for when the buttons are clicked / tapped
		var buttonPrefix = "Button"; // prefix name for the arrow buttons
		var spotPrefix = "spot"; // prefix name for the buttons/spots in the contents
		var leftButton, rightButton, upButton, downButton, ref, content, content1, resetZoomButton, cam, width, height;
		
		function main()
		{
			leftButton = root.leftButton;
			rightButton = root.rightButton;
			upButton = root.upButton;
			downButton = root.downButton;
			// both the ref and content instances must have their registration and transformation points in the origin (0, 0)
			ref = root.ref; // this is the reference area for the camera. The instance can be repositioned and resized
			content = root.content; // the contents here are just suggestions. They can be modified
			content1 = root.content1;
			resetZoomButton = root.resetZoomButton;
			cam = AdobeAn.VirtualCamera.getCamera(root);
			
			width = lib.properties.width;
			height = lib.properties.height;
			
			ref.visible = false;
			
			leftButton.on("mousedown", onMouseDownArrows);
			rightButton.on("mousedown", onMouseDownArrows);
			upButton.on("mousedown", onMouseDownArrows);
			downButton.on("mousedown", onMouseDownArrows);
			
			leftButton.on("pressup", onPressUpArrows);
			rightButton.on("pressup", onPressUpArrows);
			upButton.on("pressup", onPressUpArrows);
			downButton.on("pressup", onPressUpArrows);
			
			content.on("click", onClickContent);
			content1.on("click", onClickContent);
			
			resetZoomButton.on("click", onResetZoom);
			
			createjs.Ticker.on("tick", onTick);
		}
		
		function onMouseDownArrows(e)
		{
			root[e.currentTarget.name.replace(buttonPrefix, "")] = true;
		}
		
		function onPressUpArrows(e)
		{
			delete root[e.currentTarget.name.replace(buttonPrefix, "")];
		}
		
		function onClickContent(e)
		{
			if (!e.target.name || e.target.name.indexOf(spotPrefix) != 0)
				return;
			
			var posX, posY, edges;
			
			cam.setZoom(clickZoom * 100);
			posX = -e.target.x + width * 0.5 - e.currentTarget.x;
			posY = -e.target.y + height * 0.5 - e.currentTarget.y;
			edges = getEdges();
			cam.setPosition(clamp(edges.minX, posX, edges.maxX), clamp(edges.minY, posY, edges.maxY), 0);
		}
		
		function onResetZoom()
		{
			var pos, edges;
			
			cam.resetZoom();
			pos = cam.getPosition();
			edges = getEdges();
			cam.setPosition(clamp(edges.minX, pos.x, edges.maxX), clamp(edges.minY, pos.y, edges.maxY), 0);
		}
		
		function onTick()
		{
			if (root.left)
				move(offset, 0);
			else if (root.right)
				move(-offset, 0);
			else if (root.up)
				move(0, offset);
			else if (root.down)
				move(0, -offset);	
		}
		
		function move(offsetX, offsetY)
		{
			var pos = cam.getPosition();
			var edges = getEdges();
			
			cam.setPosition(clamp(edges.minX, pos.x + offsetX, edges.maxX), clamp(edges.minY, pos.y + offsetY, edges.maxY), 0);
		}
		
		function getEdges()
		{
			var bounds = getRefBounds();
			var zoom = getZoom();
			var minX = -ref.x + ((-bounds.width + width) / zoom) + (((width * zoom - width) / zoom)) * 0.5;
			var maxX = -ref.x + ((width / zoom) * 0.5) * (zoom - 1);
			var minY = -ref.y + ((-bounds.height + height) / zoom) + (((height * zoom - height) / zoom)) * 0.5;
			var maxY = -ref.y + ((height / zoom) * 0.5) * (zoom - 1);
			
			return { minX: minX, maxX: maxX, minY: minY, maxY: maxY };
		}
		
		function getRefBounds()
		{
			var bounds = ref.nominalBounds;
			var zoom = getZoom();
			
			return { width: bounds.width * ref.scaleX * zoom, height: bounds.height * ref.scaleY * zoom };
		}
		
		function getZoom()
		{
			return cam.getZoom() * 0.01;
		}
		
		function clamp(min, value, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
			
			return value;
		}
		
		main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(482,271.85,1,1,0,0,0,1.6,2.1);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.setTransform(480,270,1,1,0,0,0,480,270);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 1
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(1));

	// ref_obj_
	this.ref = new lib.Scene_1_ref();
	this.ref.name = "ref";
	this.ref.setTransform(1215.6,911.75,1,1,0,0,0,1216,911.5);
	this.ref.depth = 0;
	this.ref.isAttachedToCamera = 0
	this.ref.isAttachedToMask = 0
	this.ref.layerDepth = 0
	this.ref.layerIndex = 1
	this.ref.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ref).wait(1));

	// content_obj_
	this.content = new lib.Scene_1_content();
	this.content.name = "content";
	this.content.setTransform(607.8,911.75,1,1,0,0,0,608.2,911.5);
	this.content.depth = 0;
	this.content.isAttachedToCamera = 0
	this.content.isAttachedToMask = 0
	this.content.layerDepth = 0
	this.content.layerIndex = 2
	this.content.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1));

	// content1_obj_
	this.content1 = new lib.Scene_1_content1();
	this.content1.name = "content1";
	this.content1.setTransform(1823.4,911.75,1,1,0,0,0,1823.8,911.5);
	this.content1.depth = 0;
	this.content1.isAttachedToCamera = 0
	this.content1.isAttachedToMask = 0
	this.content1.layerDepth = 0
	this.content1.layerIndex = 3
	this.content1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.content1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478,268,1955.1999999999998,1557.4);
// library properties:
lib.properties = {
	id: 'BF9D0A17B4AD734E837E9BDDD1640759',
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
an.compositions['BF9D0A17B4AD734E837E9BDDD1640759'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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