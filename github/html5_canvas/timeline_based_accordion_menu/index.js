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


(lib.ChildText = function(mode,startPosition,loop) {
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
		this.stop();
		this.parent.parent.parent.parent.setChild(this, this.parent.parent.getChildIndex(this.parent) - 1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.txt = new cjs.Text("Inner Item", "9px 'Arial'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 68;
	this.txt.parent = this;
	this.txt.setTransform(-34,-5.05);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ChildText, new cjs.Rectangle(-36,-7,72,14), null);


(lib.AnimateIcon = function(mode,startPosition,loop) {
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
		this.stop();
		this.parent.parent.parent.parent.setIcon(this, this.parent.parent.parent.parent.getChildIndex(this.parent.parent.parent));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// icons
	this.txt = new cjs.Text("AN", "bold 6px 'Arial'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 9;
	this.txt.lineWidth = 9;
	this.txt.parent = this;
	this.txt.setTransform(0,-3.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22313D").s().p("AgkA/QgaAAAAgaIAAhJQAAgaAaAAIBJAAQAaAAAAAaIAABJQAAAagaAAg");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AnimateIcon, new cjs.Rectangle(-6.3,-6.3,12.6,12.6), null);


(lib.AccordionRowText = function(mode,startPosition,loop) {
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
		this.stop();
		this.parent.parent.parent.parent.setText(this, this.parent.parent.parent.parent.getChildIndex(this.parent.parent.parent));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.txt = new cjs.Text("Tool", "9px 'Arial'", "#22313D");
	this.txt.name = "txt";
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 123;
	this.txt.parent = this;
	this.txt.setTransform(-34,-5.05);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AccordionRowText, new cjs.Rectangle(-36,-7,127,14), null);


(lib.AccordionRec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// recs
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663399").ss(1,1,1,3,true).p("APAAAI9/AA");
	this.shape.setTransform(0,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au/CMIAAkXId/AAIAAEXg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.149)").ss(1,1,1,3,true).p("APAAAI9/AA");
	this.shape_2.setTransform(0,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.2)").ss(1,1,1,3,true).p("APAAAI9/AA");
	this.shape_3.setTransform(0,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.098)").s().p("Au/CMIAAkXId/AAIAAEXg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.247)").ss(1,1,1,3,true).p("APAAAI9/AA");
	this.shape_5.setTransform(0,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.247)").s().p("Au/CMIAAkXId/AAIAAEXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-14,194,29);


(lib.AccordionLeftMargin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#384B59").s().p("AgICMIAAkXIARAAIAAEXg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-14,1.8,28);


(lib.AccordionRow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.ChildText();
	this.instance.setTransform(-24,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// rec
	this.instance_1 = new lib.AccordionRec("single",3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).to({_off:true},1).wait(1));

	// hit
	this.instance_2 = new lib.AccordionRec("single",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-14,194,29);


(lib.AccordionHoverAnimReverse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (!this.started)
		{
			this.gotoAndStop(14);
			this.started = true;
		}
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// margin
	this.instance = new lib.AccordionLeftMargin("single",0);
	this.instance.setTransform(-55.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-55.1092,alpha:0.9953},0).wait(1).to({x:-55.1375,alpha:0.9809},0).wait(1).to({x:-55.1854,alpha:0.9566},0).wait(1).to({x:-55.2535,alpha:0.9219},0).wait(1).to({x:-55.3422,alpha:0.8767},0).wait(1).to({x:-55.4516,alpha:0.821},0).wait(1).to({x:-55.5815,alpha:0.755},0).wait(1).to({x:-55.7308,alpha:0.6789},0).wait(1).to({x:-55.898,alpha:0.5939},0).wait(1).to({x:-56.0802,alpha:0.5012},0).wait(1).to({x:-56.2732,alpha:0.4029},0).wait(1).to({x:-56.4713,alpha:0.3021},0).wait(1).to({x:-56.6667,alpha:0.2027},0).wait(1).to({x:-56.85,alpha:0.1094},0).wait(1));

	// icon
	this.instance_1 = new lib.AnimateIcon();
	this.instance_1.setTransform(-37.9,-0.4,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:0.8984},14,cjs.Ease.sineIn).wait(1));

	// txt
	this.instance_2 = new lib.AccordionRowText();
	this.instance_2.setTransform(20,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0,alpha:0.75},14,cjs.Ease.sineIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-14,168.7,28);


(lib.AccordionHoverAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// margin
	this.instance = new lib.AccordionLeftMargin("single",0);
	this.instance.setTransform(-56.65,0);
	this.instance.alpha = 0.1133;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:-56.4592,alpha:0.2224},0).wait(1).to({x:-56.2659,alpha:0.333},0).wait(1).to({x:-56.0738,alpha:0.4429},0).wait(1).to({x:-55.888,alpha:0.5492},0).wait(1).to({x:-55.7144,alpha:0.6485},0).wait(1).to({x:-55.5587,alpha:0.7376},0).wait(1).to({x:-55.4252,alpha:0.814},0).wait(1).to({x:-55.3162,alpha:0.8763},0).wait(1).to({x:-55.2317,alpha:0.9247},0).wait(1).to({x:-55.1703,alpha:0.9598},0).wait(1).to({x:-55.1296,alpha:0.9831},0).wait(1).to({x:-55.107,alpha:0.996},0).wait(1).to({x:-55.1,alpha:1},0).wait(1));

	// icon
	this.instance_1 = new lib.AnimateIcon();
	this.instance_1.setTransform(-37.9,-0.4);
	this.instance_1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2,scaleY:1.2,alpha:1},14,cjs.Ease.sineOut).wait(1));

	// txt
	this.instance_2 = new lib.AccordionRowText();
	this.instance_2.setTransform(20,0);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-2.5,alpha:1},14,cjs.Ease.sineOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-14,168.5,28);


(lib.AccordionContent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// items
	this.instance = new lib.AccordionRow1();
	this.instance.setTransform(0,42);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.AccordionRow1(), 3);

	this.instance_1 = new lib.AccordionRow1();
	this.instance_1.setTransform(0,14);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.AccordionRow1(), 3);

	this.instance_2 = new lib.AccordionRow1();
	this.instance_2.setTransform(0,-14);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.AccordionRow1(), 3);

	this.instance_3 = new lib.AccordionRow1();
	this.instance_3.setTransform(0,-42);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.AccordionRow1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22313D").s().p("Au/IwIAAxfId/AAIAARfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-56,194,113);


(lib.AccordionRow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anim
	this.instance = new lib.AccordionHoverAnimReverse();
	this.instance.setTransform(-40,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663399").ss(1,1,1,3,true).p("APAAAI9/AA");
	this.shape.setTransform(0,14);

	this.instance_1 = new lib.AccordionHoverAnim();
	this.instance_1.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// rec
	this.instance_2 = new lib.AccordionRec("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},3).wait(1));

	// hit
	this.instance_3 = new lib.AccordionRec("single",0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-14,194,29);


(lib.RowAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// row
	this.row = new lib.AccordionRow();
	this.row.name = "row";
	this.row.setTransform(0,-0.05);
	new cjs.ButtonHelper(this.row, 0, 1, 2, false, new lib.AccordionRow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.row).to({y:111.95},14,cjs.Ease.sineInOut).to({y:-0.05},15,cjs.Ease.sineInOut).wait(1));

	// contentMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au/HqIAAxfId/AAIAARfg");
	var mask_graphics_1 = new cjs.Graphics().p("Au/HxIAAxfId/AAIAARfg");
	var mask_graphics_2 = new cjs.Graphics().p("Au/IFIAAxfId/AAIAARfg");
	var mask_graphics_3 = new cjs.Graphics().p("Au/InIAAxfId/AAIAARfg");
	var mask_graphics_4 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_5 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_6 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_7 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_8 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_9 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_10 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_11 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_12 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_13 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_14 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_15 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_16 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_17 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_18 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_19 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_20 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_21 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_22 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_23 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_24 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_25 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_26 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_27 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_28 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_29 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-63.025}).wait(1).to({graphics:mask_graphics_1,x:0,y:-62.323}).wait(1).to({graphics:mask_graphics_2,x:0,y:-60.2521}).wait(1).to({graphics:mask_graphics_3,x:0,y:-56.9163}).wait(1).to({graphics:mask_graphics_4,x:0,y:-48.9654}).wait(1).to({graphics:mask_graphics_5,x:0,y:-38.3475}).wait(1).to({graphics:mask_graphics_6,x:0,y:-26.5112}).wait(1).to({graphics:mask_graphics_7,x:0,y:-14.05}).wait(1).to({graphics:mask_graphics_8,x:0,y:-1.5888}).wait(1).to({graphics:mask_graphics_9,x:0,y:10.2475}).wait(1).to({graphics:mask_graphics_10,x:0,y:20.8654}).wait(1).to({graphics:mask_graphics_11,x:0,y:29.7326}).wait(1).to({graphics:mask_graphics_12,x:0,y:36.4043}).wait(1).to({graphics:mask_graphics_13,x:0,y:40.546}).wait(1).to({graphics:mask_graphics_14,x:0,y:41.95}).wait(1).to({graphics:mask_graphics_15,x:0,y:41.0322}).wait(1).to({graphics:mask_graphics_16,x:0,y:38.3189}).wait(1).to({graphics:mask_graphics_17,x:0,y:33.9287}).wait(1).to({graphics:mask_graphics_18,x:0,y:28.0535}).wait(1).to({graphics:mask_graphics_19,x:0,y:20.95}).wait(1).to({graphics:mask_graphics_20,x:0,y:12.9287}).wait(1).to({graphics:mask_graphics_21,x:0,y:4.3402}).wait(1).to({graphics:mask_graphics_22,x:0,y:-4.4402}).wait(1).to({graphics:mask_graphics_23,x:0,y:-13.0287}).wait(1).to({graphics:mask_graphics_24,x:0,y:-21.05}).wait(1).to({graphics:mask_graphics_25,x:0,y:-28.1535}).wait(1).to({graphics:mask_graphics_26,x:0,y:-34.0287}).wait(1).to({graphics:mask_graphics_27,x:0,y:-38.4189}).wait(1).to({graphics:mask_graphics_28,x:0,y:-41.1322}).wait(1).to({graphics:mask_graphics_29,x:0,y:-42.05}).wait(1));

	// content
	this.instance = new lib.AccordionContent("single",0);
	this.instance.setTransform(0,41.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-14,194,141);


(lib.LastRowAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// row
	this.row = new lib.AccordionRow();
	this.row.name = "row";
	this.row.setTransform(0,-0.05);
	new cjs.ButtonHelper(this.row, 0, 1, 2, false, new lib.AccordionRow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.row).wait(30));

	// contentMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_1 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_2 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_3 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_4 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_5 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_6 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_7 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_8 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_9 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_10 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_11 = new cjs.Graphics().p("Au/I5IAAxfId/AAIAARfg");
	var mask_graphics_12 = new cjs.Graphics().p("Au/JaIAAxfId/AAIAARfg");
	var mask_graphics_13 = new cjs.Graphics().p("Au/JvIAAxfId/AAIAARfg");
	var mask_graphics_14 = new cjs.Graphics().p("Au/J2IAAxfId/AAIAARfg");
	var mask_graphics_15 = new cjs.Graphics().p("Au/JwIAAxfId/AAIAARfg");
	var mask_graphics_16 = new cjs.Graphics().p("Au/JeIAAxfId/AAIAARfg");
	var mask_graphics_17 = new cjs.Graphics().p("Au/JAIAAxfId/AAIAARfg");
	var mask_graphics_18 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_19 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_20 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_21 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_22 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_23 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_24 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_25 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_26 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_27 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_28 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");
	var mask_graphics_29 = new cjs.Graphics().p("Au/IwIAAxfId/AAIAARfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-42.05}).wait(1).to({graphics:mask_graphics_1,x:0,y:-40.646}).wait(1).to({graphics:mask_graphics_2,x:0,y:-36.5043}).wait(1).to({graphics:mask_graphics_3,x:0,y:-29.8326}).wait(1).to({graphics:mask_graphics_4,x:0,y:-20.9654}).wait(1).to({graphics:mask_graphics_5,x:0,y:-10.3475}).wait(1).to({graphics:mask_graphics_6,x:0,y:1.4888}).wait(1).to({graphics:mask_graphics_7,x:0,y:13.95}).wait(1).to({graphics:mask_graphics_8,x:0,y:26.4112}).wait(1).to({graphics:mask_graphics_9,x:0,y:38.2475}).wait(1).to({graphics:mask_graphics_10,x:0,y:48.8654}).wait(1).to({graphics:mask_graphics_11,x:0,y:56.8663}).wait(1).to({graphics:mask_graphics_12,x:0,y:60.2021}).wait(1).to({graphics:mask_graphics_13,x:0,y:62.273}).wait(1).to({graphics:mask_graphics_14,x:0,y:62.975}).wait(1).to({graphics:mask_graphics_15,x:0,y:62.3631}).wait(1).to({graphics:mask_graphics_16,x:0,y:60.5543}).wait(1).to({graphics:mask_graphics_17,x:0,y:57.6275}).wait(1).to({graphics:mask_graphics_18,x:0,y:51.4213}).wait(1).to({graphics:mask_graphics_19,x:0,y:41.95}).wait(1).to({graphics:mask_graphics_20,x:0,y:31.255}).wait(1).to({graphics:mask_graphics_21,x:0,y:19.8036}).wait(1).to({graphics:mask_graphics_22,x:0,y:8.0964}).wait(1).to({graphics:mask_graphics_23,x:0,y:-3.355}).wait(1).to({graphics:mask_graphics_24,x:0,y:-14.05}).wait(1).to({graphics:mask_graphics_25,x:0,y:-23.5213}).wait(1).to({graphics:mask_graphics_26,x:0,y:-31.355}).wait(1).to({graphics:mask_graphics_27,x:0,y:-37.2085}).wait(1).to({graphics:mask_graphics_28,x:0,y:-40.8263}).wait(1).to({graphics:mask_graphics_29,x:0,y:-42.05}).wait(1));

	// content
	this.instance = new lib.AccordionContent("single",0);
	this.instance.setTransform(0,69.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-14,194,140);


(lib.Accordion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{in1:1,out1:15,in2:30,out2:45,in3:60,out3:75,in4:90,out4:105,in5:120,out5:135,in6:150,out6:165,in7:180,out7:195,in8:210,out8:225});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.buttonPrefix = "row";
		root.inPrefix = "in";
		root.outPrefix = "out";
		
		root.data =
		[
		    {
				parent:"Animate",
				icon:"An",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			},
			{
				parent:"Photoshop",
				icon:"Ps",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			},
			{
				parent:"XD",
				icon:"Xd",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			},
			{
				parent:"After Effects",
				icon:"Ae",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			},
			{
				parent:"Illustrator",
				icon:"Ai",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			},
			{
				parent:"Premiere",
				icon:"Pr",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			},
			{
				parent:"Media Encoder",
				icon:"Me",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			},
			{
				parent:"Dimension",
				icon:"Dn",
				children:
				[
					"Docs",
					"Tutorials",
					"Samples",
					"Forums"
				]
			}
		];
			
		root.start = function()
		{
			root.stop();
			root.toggled = false;
			root.canPress = true;
			root.data.reverse();
		
			root.on("click", function(e)
			{
				if (!root.canPress)
					return;
				
				var target = e.target;
				
				if (e.target && target.name && target.name.indexOf(root.buttonPrefix) === 0)
				{
					root.canPress = false;
					
					if (root.toggled)
						root.gotoAndPlay(root.outPrefix + root.position);
					else
					{
						root.position = root.numChildren - root.getChildIndex(target.parent);
						root.gotoAndPlay(root.inPrefix + root.position);
					}
					
					root.toggled = !root.toggled;
				}
			});
		};
		
		root.check = function()
		{
			root.stop();
			root.canPress = true;
		};
		
		root.setIcon = function(target, index)
		{
			target.txt.text = root.data[index].icon;
		};
		
		root.setText = function(target, index)
		{
			root.itemIndex = index;
			target.txt.text = root.data[index].parent;
		};
		
		root.setChild = function(target, index)
		{	
			target.txt.text = root.data[root.itemIndex].children[index];
		};
		
		if (!root.started)
		{
			root.start();	
			root.started = true;
		}
	}
	this.frame_14 = function() {
		this.check();
	}
	this.frame_29 = function() {
		this.check();
	}
	this.frame_44 = function() {
		this.check();
	}
	this.frame_59 = function() {
		this.check();
	}
	this.frame_74 = function() {
		this.check();
	}
	this.frame_89 = function() {
		this.check();
	}
	this.frame_104 = function() {
		this.check();
	}
	this.frame_119 = function() {
		this.check();
	}
	this.frame_134 = function() {
		this.check();
	}
	this.frame_149 = function() {
		this.check();
	}
	this.frame_164 = function() {
		this.check();
	}
	this.frame_179 = function() {
		this.check();
	}
	this.frame_194 = function() {
		this.check();
	}
	this.frame_209 = function() {
		this.check();
	}
	this.frame_224 = function() {
		this.check();
	}
	this.frame_240 = function() {
		this.check();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(15).call(this.frame_44).wait(15).call(this.frame_59).wait(15).call(this.frame_74).wait(15).call(this.frame_89).wait(15).call(this.frame_104).wait(15).call(this.frame_119).wait(15).call(this.frame_134).wait(15).call(this.frame_149).wait(15).call(this.frame_164).wait(15).call(this.frame_179).wait(15).call(this.frame_194).wait(15).call(this.frame_209).wait(15).call(this.frame_224).wait(16).call(this.frame_240).wait(1));

	// row0
	this.instance = new lib.RowAnim("single",0);
	this.instance.setTransform(96,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(241));

	// row1
	this.instance_1 = new lib.RowAnim("synched",0);
	this.instance_1.setTransform(96,42.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({mode:"single",startPosition:29},0).wait(211));

	// row2
	this.instance_2 = new lib.RowAnim("synched",0);
	this.instance_2.setTransform(96,70.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({mode:"single",startPosition:29},0).wait(181));

	// row3
	this.instance_3 = new lib.RowAnim("synched",0);
	this.instance_3.setTransform(96,98.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({mode:"single"},0).wait(151));

	// row4
	this.instance_4 = new lib.RowAnim("synched",0);
	this.instance_4.setTransform(96,126.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({mode:"single"},0).wait(121));

	// row5
	this.instance_5 = new lib.RowAnim("synched",0);
	this.instance_5.setTransform(96,154.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({mode:"single",startPosition:29},0).wait(91));

	// row6
	this.instance_6 = new lib.RowAnim("synched",0);
	this.instance_6.setTransform(96,182.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({mode:"single",startPosition:29},0).wait(61));

	// row7
	this.instance_7 = new lib.RowAnim("synched",0);
	this.instance_7.setTransform(96,210.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(210).to({mode:"single",startPosition:29},0).wait(31));

	// lastRow
	this.instance_8 = new lib.LastRowAnim("synched",0);
	this.instance_8.setTransform(96,210);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(210).to({_off:false},0).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,194,337);


// stage content:
(lib.adobe_animate_cc_html5_canvas_timeline_based_accordion_menu = function(mode,startPosition,loop) {
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
		document.body.style.backgroundColor = lib.properties.color;
		createjs.Touch.enable(stage);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// accordion
	this.instance = new lib.Accordion();
	this.instance.setTransform(16,24.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.125)").s().p("Au/RvQgGAAgFgFQgEgEAAgGMAAAgi/QAAgGAEgFQAFgEAGAAId/AAQAGAAAFAEQAEAFAAAGMAAAAi/QAAAGgEAEQgFAFgGAAgAvIxoQgDAEAAAFMAAAAi/QAAAFADAEQAEADAFABId/AAQAFgBAEgDQADgEABgFMAAAgi/QgBgFgDgEQgEgDgFAAI9/AAQgFAAgEADg");
	this.shape.setTransform(112.0289,137.6,0.99,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.082)").s().p("Au/RxQgHAAgFgFQgFgFgBgHMAAAgi/QABgHAFgFQAFgFAHgBId/AAQAHABAFAFQAFAFABAHMAAAAi/QgBAHgFAFQgFAFgHAAgAvKxqQgEAFAAAGMAAAAi/QAAAGAEAEQAFAFAGAAId/AAQAGAAAFgFQAEgEAAgGMAAAgi/QAAgGgEgFQgFgEgGAAI9/AAQgGAAgFAEg");
	this.shape_1.setTransform(112.0289,137.6,0.99,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.039)").s().p("APAR0I9/AAQgIAAgGgGQgGgGAAgIMAAAgi/QAAgIAGgGQAGgGAIAAId/AAQAIAAAGAGQAGAGAAAIMAAAAi/QAAAIgGAGQgGAGgIAAIAAAAgAvLxrQgFAFgBAHMAAAAi/QABAHAFAFQAFAFAHAAId/AAQAHAAAFgFQAFgFABgHMAAAgi/QgBgHgFgFQgFgFgHgBI9/AAQgHABgFAFg");
	this.shape_2.setTransform(112.0289,137.6,0.99,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.169)").s().p("Au/RtQgFgBgEgDQgDgEAAgFMAAAgi/QAAgFADgEQAEgDAFAAId/AAQAFAAAEADQADAEABAFMAAAAi/QgBAFgDAEQgEADgFABgAvGxmQgDADAAAEMAAAAi/QAAAEADADQADADAEAAId/AAQAEAAADgDQADgDAAgEMAAAgi/QAAgEgDgDQgDgDgEAAI9/AAQgEAAgDADg");
	this.shape_3.setTransform(112.0289,137.6,0.99,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.208)").s().p("Au/RqQgEAAgDgDQgDgDAAgEMAAAgi/QAAgEADgDQADgDAEAAId/AAQAEAAADADQADADAAAEMAAAAi/QAAAEgDADQgDADgEAAgAvExkQgCACgBADMAAAAi/QABADACACQACACADAAId/AAQADAAACgCQACgCAAgDMAAAgi/QAAgDgCgCQgCgCgDAAI9/AAQgDAAgCACg");
	this.shape_4.setTransform(112.0289,137.6,0.99,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.251)").s().p("Au/RnQgDAAgCgCQgCgCgBgDMAAAgi/QABgDACgCQACgCADAAId/AAQADAAACACQACACAAADMAAAAi/QAAADgCACQgCACgDAAgAvCxjQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABMAAAAi/QAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAId/AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBMAAAgi/QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAI9/AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAg");
	this.shape_5.setTransform(112.0289,137.6,0.99,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.294)").s().p("Au/RlQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBMAAAgi/QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAId/AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABMAAAAi/QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAvBxhIgBACMAAAAi/IABACIACABId/AAIACgBIABgCMAAAgi/IgBgCIgCgBI9/AAIgCABg");
	this.shape_6.setTransform(112.0289,137.6,0.99,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.337)").s().p("Au/RjIgCgBIgBgCMAAAgi/IABgCIACgBId/AAIACABIABACMAAAAi/IgBACIgCABg");
	this.shape_7.setTransform(112.0289,137.6,0.99,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127,104,82.1,228.10000000000002);
// library properties:
lib.properties = {
	id: '53A17DEF082C6341848CA3012F0767E1',
	width: 224,
	height: 384,
	fps: 60,
	color: "#663399",
	opacity: 1.00,
	manifest: [],
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
an.compositions['53A17DEF082C6341848CA3012F0767E1'] = {
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