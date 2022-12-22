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


(lib.Slot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AGDHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAELHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgACTHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAAbHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAhcHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAjUHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAlMHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnEHUQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAHdG6QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnqGzQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHdFCQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnqE7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHdDKQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnqDDQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHdBSQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnqBLQgDgDAAgEIAAg8QAAgEADgDQADgCAEAAQAEAAADACQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHdglQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnqgsQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHdidQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnqikQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHdkVQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnqkcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHdmNQgDgDAAgEIAAgrIgFgDQgDgDAAgEQAAgEADgDQADgDAEAAIAIAAQAEAAADADQADADAAAEIAAA1QAAAEgDADQgDADgEAAQgEAAgDgDgAnqmUQgDgDAAgEIAAguQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgyAAIAAAkQAAAEgDADQgDADgEAAQgEAAgDgDgAFkm/QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgADsm/QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAB0m/QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAgDm/QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAh7m/QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAjzm/QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAlrm/QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slot, new cjs.Rectangle(-49.3,-46.7,98.69999999999999,93.5), null);


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
	this.shape.graphics.f("#FF0000").s().p("Al8F9IAAr5IL5AAIAAL5g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-38,76.1,76.1);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhADtIgDAAQhhAAhGhGQhFhFAAhiIAAAAQAAhhBEhFIABgBQBGhFBhAAIADAAIABAAQBeACBFBEQAIAIAJALIACABQAJAMAHAMIABABIAJAQIAAgBQAOAbAHAhIABAIICJAAIiwCxIixixIB/AAQgFgPgGgOIgGgJIABABIgNgSIgKgMQgqgrg9gBIAAAAIgDAAQg+AAgsAsIAAAAQgsAsAAA9IAAAAQAAA+AsAsQAsAsA+AAIADAAIAsAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-23.7,60.9,47.4);


(lib.Bin = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.InvisibleButton();
	this.instance.setTransform(-0.05,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("ABNjcICVAAIAABUIgcAAImNAAIgaAAIAAhUICUAAIAAhUICaAAIAABUIiaAAAhNEAIgSk2ADGiIIgzG5IkmAAIg0m5AAAEAIAAk2ABLEAIAUk2");
	this.shape.setTransform(0.05,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81C014").s().p("AiSExIg0m4IGMAAIg0G4gABLD/IAUk1gAAAD/IAAk1gAhND/IgSk1gADGiHImMAAIgbAAIAAhUICUAAIAAhVICaAAIAABVIiaAAICaAAICUAAIAABUg");
	this.shape_1.setTransform(0.05,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bin, new cjs.Rectangle(-38.1,-38,76.1,76.1), null);


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

	// arrow
	this.instance = new lib.Arrow("single",0);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:14.9988},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkaEbQh1h2AAilQAAikB1h2QB2h1CkAAQClAAB2B1QB1B2AACkQAAClh1B2Qh2B1ilAAQikAAh2h1g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-39.9,79.9,79.9);


// stage content:
(lib.htm5_canvas_drag_and_drop_on_letters = function(mode,startPosition,loop,reversed) {
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
		// the TextBoxes and DragAndDrop classes are located in the globa script section (left sections)
		
		var callbacks =
		{
			onMouseDown: function()
			{
				this.target.mouseEnabled = false;
			},
			onPressUp: function()
			{
				var box = this.currentBoundingBox;
				
				this.target.mouseEnabled = true;
				
				if (box && box.correct !== undefined)
				{
					drawBoundingBox(box);
					
					this.target.x = box.x + box.getBounds().width * 0.5;
					this.target.y = box.y - this.target.nominalBounds.height * 0.5;
					
					box.tf.dragAndDrop.destroy();
					box.tf.textBoxes.destroy();
					
					box = null;
				}
				else
				{
					this.target.x = this.target.initialX;
					this.target.y = this.target.initialY;
				}
			}
		};
		
		function main()
		{
			var resetTarget0 = { tf: root.tf0, bin: root.bin0, correct: 1, slot: root.slot0 };
			var resetTarget1 = { tf: root.tf1, bin: root.bin1, correct: 0, slot: root.slot1 };
			var resetTarget2 = { tf: root.tf2, bin: root.bin2, correct: 2, slot: root.slot2 };
		
			setup();
			setGame(root.tf0, root.bin0, 1, root.slot0);
			setGame(root.tf1, root.bin1, 0, root.slot1);
			setGame(root.tf2, root.bin2, 2, root.slot2);
			root.resetButton0.on("click", onReset, null, false, resetTarget0);
			root.resetButton1.on("click", onReset, null, false, resetTarget1);
			root.resetButton2.on("click", onReset, null, false, resetTarget2);
			root.resetAllButton.on("click", onResetAll, null, false, { targets: [ resetTarget0, resetTarget1, resetTarget2 ] });
		}
		
		function setup()
		{
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			stage.enableMouseOver(50);
			stage.mouseMoveOutside = true;
			root.stop();
		}
		
		function setGame(tf, bin, correct, slot)
		{
			tf.textBoxes = new ui.TextBoxes(tf);
			tf.boundingBoxes[correct].correct = true;
			
			tf.boundingBoxes.forEach(function(boundingBox)
			{
				boundingBox.mouseOverListener = boundingBox.on("mouseover", onMouseOver);
				boundingBox.mouseOutListener = boundingBox.on("mouseout", onMouseOut);
			});
		
			tf.dragAndDrop = new ui.DragAndDrop(bin, callbacks);
			bin.initialX = slot.x;
			bin.initialY = slot.y;
		}
		
		function onMouseOver(e)
		{
			e.currentTarget.alpha = 1;
			e.currentTarget.tf.dragAndDrop.currentBoundingBox = e.currentTarget;
		}
		
		function onMouseOut(e)
		{
			e.currentTarget.alpha = 0.2;
			e.currentTarget.tf.dragAndDrop.currentBoundingBox = null;
		}
		
		function drawBoundingBox(box)
		{
			box.tf.winBox = new createjs.Shape();
			box.tf.winBox.graphics.beginFill("rgba(255,255,255,0.5)");
			box.tf.winBox.graphics.beginStroke("white");
			box.tf.winBox.graphics.setStrokeStyle(2);
			box.tf.winBox.graphics.drawRect(0, 0, box.getBounds().width, box.getBounds().height);
			box.tf.winBox.graphics.endFill();
			box.tf.winBox.graphics.endStroke();
			box.tf.winBox.x = box.x;
			box.tf.winBox.y = box.y;
			box.tf.parent.addChild(box.tf.winBox);
		}
		
		function onReset(e, data)
		{
			if (data.tf.dragAndDrop.target)
				data.tf.dragAndDrop.destroy();
			
			if (data.tf.textBoxes.target)
				data.tf.textBoxes.destroy();
			
			root.addChild(data.bin);
			data.bin.x = data.slot.x;
			data.bin.y = data.slot.y;
			
			if (data.tf.winBox && data.tf.winBox.parent)
			{
				data.tf.winBox.parent.removeChild(data.tf.winBox);
				data.tf.winBox._off = true;
			}
			
			setGame(data.tf, data.bin, data.correct, data.slot);
		}
		
		function onResetAll(e, data)
		{
			data.targets.forEach(function(target){ onReset(null, target); });
		}
		
		if (!this.frame0started)
		{
			window.root = this;
			main();
			this.frame0started = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// gui
	this.text = new cjs.Text("2", "37px 'Helvetica'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 100;
	this.text.alpha = 0.49803922;
	this.text.parent = this;
	this.text.setTransform(1164.1,975.95);

	this.text_1 = new cjs.Text("0", "37px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 44;
	this.text_1.lineWidth = 100;
	this.text_1.alpha = 0.49803922;
	this.text_1.parent = this;
	this.text_1.setTransform(859.7,975.95);

	this.text_2 = new cjs.Text("1", "37px 'Helvetica'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 44;
	this.text_2.lineWidth = 100;
	this.text_2.alpha = 0.49803922;
	this.text_2.parent = this;
	this.text_2.setTransform(555.3,975.95);

	this.slot2 = new lib.Slot();
	this.slot2.name = "slot2";
	this.slot2.setTransform(1264.45,1019.7);

	this.slot1 = new lib.Slot();
	this.slot1.name = "slot1";
	this.slot1.setTransform(960.05,1019.7);

	this.resetAllButton = new lib.ArrowButton();
	this.resetAllButton.name = "resetAllButton";
	this.resetAllButton.setTransform(1798.8,60.9);
	new cjs.ButtonHelper(this.resetAllButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.resetButton2 = new lib.ArrowButton();
	this.resetButton2.name = "resetButton2";
	this.resetButton2.setTransform(109.3,826.7);
	new cjs.ButtonHelper(this.resetButton2, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.resetButton1 = new lib.ArrowButton();
	this.resetButton1.name = "resetButton1";
	this.resetButton1.setTransform(109.3,453.85);
	new cjs.ButtonHelper(this.resetButton1, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.resetButton0 = new lib.ArrowButton();
	this.resetButton0.name = "resetButton0";
	this.resetButton0.setTransform(109.3,149.4);
	new cjs.ButtonHelper(this.resetButton0, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.bin2 = new lib.Bin();
	this.bin2.name = "bin2";
	this.bin2.setTransform(1264.45,1019.7);

	this.bin1 = new lib.Bin();
	this.bin1.name = "bin1";
	this.bin1.setTransform(960.05,1019.7);

	this.bin0 = new lib.Bin();
	this.bin0.name = "bin0";
	this.bin0.setTransform(655.65,1019.7);

	this.tf2 = new cjs.Text("Praesent sed lectus augue.", "120px 'Helvetica'", "#FFFFFF");
	this.tf2.name = "tf2";
	this.tf2.textAlign = "right";
	this.tf2.lineHeight = 137;
	this.tf2.lineWidth = 1367;
	this.tf2.parent = this;
	this.tf2.setTransform(1643.55,690.9);

	this.tf1 = new cjs.Text("Dolor sit amet, consectetur", "120px 'Helvetica'", "#FFFFFF");
	this.tf1.name = "tf1";
	this.tf1.textAlign = "center";
	this.tf1.lineHeight = 137;
	this.tf1.lineWidth = 1122;
	this.tf1.parent = this;
	this.tf1.setTransform(960,318.05);

	this.tf0 = new cjs.Text("Lorem ipsum", "120px 'Helvetica'", "#FFFFFF");
	this.tf0.name = "tf0";
	this.tf0.lineHeight = 137;
	this.tf0.lineWidth = 798;
	this.tf0.parent = this;
	this.tf0.setTransform(561.2,82);

	this.slot0 = new lib.Slot();
	this.slot0.name = "slot0";
	this.slot0.setTransform(655.65,1019.7);

	this.text_3 = new cjs.Text("2", "60px 'Helvetica'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 70;
	this.text_3.lineWidth = 100;
	this.text_3.alpha = 0.49803922;
	this.text_3.parent = this;
	this.text_3.setTransform(745.65,829.8);

	this.text_4 = new cjs.Text("0", "60px 'Helvetica'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 70;
	this.text_4.lineWidth = 100;
	this.text_4.alpha = 0.49803922;
	this.text_4.parent = this;
	this.text_4.setTransform(616.05,462.25);

	this.text_5 = new cjs.Text("1", "60px 'Helvetica'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 70;
	this.text_5.lineWidth = 100;
	this.text_5.alpha = 0.49803922;
	this.text_5.parent = this;
	this.text_5.setTransform(659.3,220.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.slot0},{t:this.tf0},{t:this.tf1},{t:this.tf2},{t:this.bin0},{t:this.bin1},{t:this.bin2},{t:this.resetButton0},{t:this.resetButton1},{t:this.resetButton2},{t:this.resetAllButton},{t:this.slot1},{t:this.slot2},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1038.9,576.7,790.3999999999999,489.79999999999995);
// library properties:
lib.properties = {
	id: 'FCD42E0A6709F1409591BD432AA625B1',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#81C014",
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
an.compositions['FCD42E0A6709F1409591BD432AA625B1'] = {
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