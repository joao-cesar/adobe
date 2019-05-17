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


(lib.SquareButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AjHjHIGPAAIAAGPImPAAg");
	this.shape_1.setTransform(0,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("Ai/i9IF/AAIAAF7Il/AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai/C+IAAl7IF/AAIAAF7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_4.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,42.5,42.5);


(lib.Size20Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");
	this.shape.setTransform(0.55,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhKhJQhIhJAAhoQAAhnBIhKQBKhIBnAAQBoAABJBIQBJBKAABng");
	this.shape_1.setTransform(0.55,0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADuAAQAABjhGBFQhFBGhjAAQhiAAhGhGQhFhFAAhjQAAhiBFhGQBGhFBiAAQBjAABFBFQBGBGAABig");
	this.shape_2.setTransform(0.55,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AinCnQhFhFgBhiQABhhBFhGQBGhFBhgBQBiABBFBFQBGBGAABhQAABihGBFQhFBGhiAAQhhAAhGhGg");
	this.shape_3.setTransform(0.55,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,28,28,0.898)").s().p("AixCwQhIhJAAhnQAAhnBIhKQBKhIBnAAQBnAABJBIQBKBKAABnQAABnhKBJQhJBKhnAAQhnAAhKhKg");
	this.shape_4.setTransform(0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-25.4,52,52);


(lib.Size3Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgtgsQgrgrAAg/QAAg9ArgtQAtgrA9AAQA/AAArArQAsAtAAA9g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ACPAAQAAA7gqAqQgqAqg7AAQg6AAgqgqQgqgqAAg7QAAg6AqgqQAqgqA6AAQA7AAAqAqQAqAqAAA6g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhkBlQgpgqAAg7QAAg6ApgqQAqgpA6AAQA7AAAqApQApAqAAA6QAAA7gpAqQgqApg7AAQg6AAgqgpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,28,28,0.898)").s().p("AhqBqQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9QAAA+gsAsQgsAsg+AAQg9AAgtgsg");
	this.shape_4.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32.5,32.5);


(lib.Size1Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AAyAAQAAAVgOAPQgPAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAOAPAAAUg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAhQgOgOgBgTQABgSAOgOQAOgOASgBQATABAOAOQAOAOABASQgBATgOAOQgOAOgTABQgSgBgOgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,28,28,0.898)").s().p("AgiAkQgPgPAAgVQAAgTAPgPQAPgPATAAQAVAAAPAPQAOAPAAATQAAAVgOAPQgPAOgVAAQgTAAgPgOg");
	this.shape_4.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


(lib.RoundButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiMCMQg6g6AAhSQAAhRA6g7QA7g6BRAAQBSAAA6A6QA7A7AABRQAABSg7A6Qg6A7hSAAQhRAAg7g7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADHAAQAABTg7A5Qg5A7hTAAQhSAAg6g7Qg6g5AAhTQAAhSA6g6QA6g6BSAAQBTAAA5A6QA7A6AABSg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AC9AAQAABOg4A3Qg3A4hOAAQhOAAg3g4Qg3g3AAhOQAAhOA3g3QA3g3BOAAQBOAAA3A3QA4A3AABOg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiFCFQg2g3AAhOQAAhOA2g3QA3g2BOAAQBOAAA3A2QA3A3AABOQAABOg3A3Qg3A3hOAAQhOAAg3g3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,28,28,0.898)").s().p("AiMCLQg5g5AAhSQAAhSA5g6QA7g6BRABQBSgBA5A6QA7A6ABBSQgBBSg7A5Qg5A8hSAAQhRAAg7g8g");
	this.shape_4.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-20.8,41.7,42.7);


(lib.ResetButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtBgQgognAAg5QAAg4AogoQAogoA5AAQA3AAAoAoIACACIAAAAQANANAIAPIACADIAqgJIgqAwIg8gZIAigIQgHgKgIgJIgCgCQgggggtAAQgvAAggAgQggAhAAAtQAAAuAgAgQAgAhAvAAQAmAAAdgYIAlAAIgJAJIAAAAQgoApg3AAQg5AAgogpg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({scaleX:0.95,scaleY:0.95,x:-0.0012,y:-0.02},0).wait(1));

	// Shapes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiMCMQg6g6AAhSQAAhRA6g7QA7g6BRAAQBSAAA6A6QA7A7AABRQAABSg7A6Qg6A7hSAAQhRAAg7g7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADHAAQAABTg7A5Qg5A7hTAAQhSAAg6g7Qg6g5AAhTQAAhSA6g6QA6g6BSAAQBTAAA5A6QA7A6AABSg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AC9AAQAABOg4A3Qg3A4hOAAQhOAAg3g4Qg3g3AAhOQAAhOA3g3QA3g3BOAAQBOAAA3A3QA4A3AABOg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiFCFQg2g3AAhOQAAhOA2g3QA3g2BOAAQBOAAA3A2QA3A3AABOQAABOg3A3Qg3A3hOAAQhOAAg3g3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Shadows
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(30,28,28,0.898)").s().p("AiMCLQg5g5AAhSQAAhRA5g7QA7g5BRAAQBSAAA5A5QA7A7ABBRQgBBSg7A5Qg5A7hSABQhRgBg7g7g");
	this.shape_5.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-20.8,41.7,41.7);


(lib.RedButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AioCoQhGhFAAhjQAAhiBGhGQBGhGBiAAQBjAABFBGQBGBGABBiQgBBjhGBFQhFBGhjABQhigBhGhGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADvAAQAABjhGBGQhGBGhjAAQhiAAhGhGQhGhGAAhjQAAhiBGhGQBGhGBiAAQBjAABGBGQBGBGAABig");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADjAAQAABehDBCQhCBDheAAQhdAAhDhDQhChCAAheQAAhdBChDQBDhCBdAAQBeAABCBCQBDBDAABdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AifCgQhDhCAAheQAAhdBDhCQBChDBdAAQBeAABCBDQBDBCAABdQAABehDBCQhCBDheAAQhdAAhChDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,28,28,0.898)").s().p("AioCoQhGhFAAhjQAAhiBGhGQBGhGBiAAQBjAABFBGQBGBGABBiQgBBjhGBFQhFBGhjABQhigBhGhGg");
	this.shape_4.setTransform(1.9,2.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-24.8,50.6,51.5);


(lib.Highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858585").s().p("AkSExIAAg+IAUAAIAAApIAqAAIAAAVgADVExIAAgVIApAAIAAgqIAVAAIAAA/gAD+jyIAAgqIgpAAIAAgUIA+AAIAAA+gAkSjyIAAg+IA+AAIAAAVIgqAAIAAApg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Highlight, new cjs.Rectangle(-27.5,-30.5,55.1,61.1), null);


(lib.GreenButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AioCoQhGhFAAhjQAAhiBGhGQBGhGBiAAQBjAABFBGQBGBGABBiQgBBjhGBFQhFBGhjABQhigBhGhGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADvAAQAABjhGBGQhGBGhjAAQhiAAhGhGQhGhGAAhjQAAhiBGhGQBGhGBiAAQBjAABGBGQBGBGAABig");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADjAAQAABehDBCQhCBDheAAQhdAAhDhDQhChCAAheQAAhdBChDQBDhCBdAAQBeAABCBCQBDBDAABdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AifCgQhDhCAAheQAAhdBDhCQBChDBdAAQBeAABCBDQBDBCAABdQAABehDBCQhCBDheAAQhdAAhChDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,28,28,0.898)").s().p("AioCoQhGhFAAhjQAAhiBGhGQBGhGBiAAQBjAABFBGQBGBGABBiQgBBjhGBFQhFBGhjABQhigBhGhGg");
	this.shape_4.setTransform(1.9,2.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-24.8,50.6,51.5);


(lib.EraserButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-22.1,-15.35,44.2,30.7);
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#CCCCCC").ss(2,1,1).dr(-22.1,-15.35,44.2,30.7);
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:-0.025,y:0.025}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.95,scaleY:0.95,x:-0.0237,y:0.0237}}]},1).wait(1));

	// Shadows
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(28,23,23,0.349)").s().dr(-22.1,-15.35,44.2,30.7);
	this.shape_2.setTransform(1.475,2.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-16.3,46.7,33.7);


(lib.ButtButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXDEIAAmHIAvAAIAAGHg");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AgXjDIAvAAIAAGHIgvAAg");
	this.shape_1.setTransform(0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AgWi5IAtAAIAAFzIgtAAg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWC6IAAlzIAtAAIAAFzg");
	this.shape_3.setTransform(0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhlDEIAAmHIDLAAIAAGHg");
	this.shape_4.setTransform(0.1,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Shadows
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.349)").s().p("AgXDEIAAmHIAvAAIAAGHg");
	this.shape_5.setTransform(1.025,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-20.6,20.3,41.2);


(lib.Board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.BlueButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AioCoQhGhFAAhjQAAhiBGhGQBGhGBiAAQBjAABFBGQBGBGABBiQgBBjhGBFQhFBGhjABQhigBhGhGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADvAAQAABjhGBGQhGBGhjAAQhiAAhGhGQhGhGAAhjQAAhiBGhGQBGhGBiAAQBjAABGBGQBGBGAABig");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("ADjAAQAABehDBCQhCBDheAAQhdAAhDhDQhChCAAheQAAhdBChDQBDhCBdAAQBeAABCBCQBDBDAABdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AifCgQhDhCAAheQAAhdBDhCQBChDBdAAQBeAABCBDQBDBCAABdQAABehDBCQhCBDheAAQhdAAhChDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Shadows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,28,28,0.898)").s().p("AioCoQhGhFAAhjQAAhiBGhGQBGhGBiAAQBjAABFBGQBGBGABBiQgBBjhGBFQhFBGhjABQhigBhGhGg");
	this.shape_4.setTransform(1.9,2.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-24.8,50.6,51.5);


(lib.PaintingApp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var app = this;
		
		app.config = 
		{
			color:"#FF0000",
			size: 20,	
			shape:"round"
		};
		
		app.shape = null;
		app.oldX = null,
		app.oldY = null,
		app.pressed = false;
		app.erase = false;
		
		app.start = function()
		{
			createjs.Touch.enable(stage, false, true);
			stage.preventSelection = false;
			stage.enableDOMEvents(true);
			app.reset();
			
			app.on("mousedown", function(e)
			{
				target = e.target;		
				
				if (target == app.redButton)
				{
					app.config.color = "#FF0000";
					app.erase = false;
					app.colorHighlight.x = target.x
				}			
				else if (target == app.greenButton)
				{
					app.config.color = "#00FF00";
					app.erase = false;
					app.colorHighlight.x = target.x
				}			
				else if (target == app.blueButton)
				{
					app.config.color = "#0000FF";
					app.erase = false;
					app.colorHighlight.x = target.x
				}			
				else if (target == app.eraseButton)
				{
					app.erase = true;
					app.colorHighlight.x = target.x
				}			
				else if (target == app.size1Button)
				{
					app.config.size = 1;
					app.sizeHighlight.x = target.x;
				}			
				else if (target == app.size3Button)
				{
					app.config.size = 3;
					app.sizeHighlight.x = target.x;
				}			
				else if (target == app.size20Button)
				{
					app.config.size = 20;
					app.sizeHighlight.x = target.x;
				}			
				else if (target == app.buttButton)
				{
					app.config.shape = "butt";
					app.shapeHighlight.x = target.x;
				}			
				else if (target == app.squareButton)
				{
					app.config.shape = "square";
					app.shapeHighlight.x = target.x;
				}			
				else if (target == app.roundButton)
				{
					app.config.shape = "round";
					app.shapeHighlight.x = target.x;
				}
				else if (target == app.resetButton)
				{
					app.reset();
				}
				
			});
		
			stage.on("stagemousedown", function(e)
			{
				app.oldX = e.stageX / stage.scaleX;
				app.oldY = e.stageY / stage.scaleY;
				
				app.pressed = true;		
			});
		
			stage.on("stagemouseup", function(e)
			{
				app.pressed = false;
			});
		
			stage.on("stagemousemove", function(e)
			{
				var responsiveX = e.stageX / stage.scaleX;
				var responsiveY = e.stageY / stage.scaleY;
				
				if (app.pressed && app.oldX)
					app.shape.graphics.beginStroke(app.config.color).setStrokeStyle(app.config.size, app.config.shape).moveTo(app.oldX, app.oldY).lineTo(responsiveX, responsiveY);
				
				app.oldX = responsiveX;
				app.oldY = responsiveY;
				
				app.board.updateCache(app.erase ? "destination-out" : "source-over");
				app.shape.graphics.clear();
			});
		};
		
		app.reset = function()
		{
			if (app.board.children.length > 0)
				app.board.removeChildAt(0);
			
			app.board.cache(0, 0, app.nominalBounds.width, app.nominalBounds.height);
			app.shape = new createjs.Shape();
			app.board.addChild(app.shape);
		};
		
		app.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.buttButton = new lib.ButtButton();
	this.buttButton.name = "buttButton";
	this.buttButton.parent = this;
	this.buttButton.setTransform(769.6,490.95);
	new cjs.ButtonHelper(this.buttButton, 0, 1, 2, false, new lib.ButtButton(), 3);

	this.squareButton = new lib.SquareButton();
	this.squareButton.name = "squareButton";
	this.squareButton.parent = this;
	this.squareButton.setTransform(713.8,490.75);
	new cjs.ButtonHelper(this.squareButton, 0, 1, 2);

	this.roundButton = new lib.RoundButton();
	this.roundButton.name = "roundButton";
	this.roundButton.parent = this;
	this.roundButton.setTransform(641,490.95);
	new cjs.ButtonHelper(this.roundButton, 0, 1, 2);

	this.size1Button = new lib.Size1Button();
	this.size1Button.name = "size1Button";
	this.size1Button.parent = this;
	this.size1Button.setTransform(556.45,490.7);
	new cjs.ButtonHelper(this.size1Button, 0, 1, 2);

	this.size3Button = new lib.Size3Button();
	this.size3Button.name = "size3Button";
	this.size3Button.parent = this;
	this.size3Button.setTransform(503.65,490.7);
	new cjs.ButtonHelper(this.size3Button, 0, 1, 2);

	this.size20Button = new lib.Size20Button();
	this.size20Button.name = "size20Button";
	this.size20Button.parent = this;
	this.size20Button.setTransform(431.4,490.95);
	new cjs.ButtonHelper(this.size20Button, 0, 1, 2);

	this.eraseButton = new lib.EraserButton();
	this.eraseButton.name = "eraseButton";
	this.eraseButton.parent = this;
	this.eraseButton.setTransform(337.3,490.45);
	new cjs.ButtonHelper(this.eraseButton, 0, 1, 2);

	this.blueButton = new lib.BlueButton();
	this.blueButton.name = "blueButton";
	this.blueButton.parent = this;
	this.blueButton.setTransform(264.85,490.05);
	new cjs.ButtonHelper(this.blueButton, 0, 1, 2);

	this.greenButton = new lib.GreenButton();
	this.greenButton.name = "greenButton";
	this.greenButton.parent = this;
	this.greenButton.setTransform(190.65,490.05);
	new cjs.ButtonHelper(this.greenButton, 0, 1, 2);

	this.redButton = new lib.RedButton();
	this.redButton.name = "redButton";
	this.redButton.parent = this;
	this.redButton.setTransform(116.45,490.05);
	new cjs.ButtonHelper(this.redButton, 0, 1, 2);

	this.resetButton = new lib.ResetButton();
	this.resetButton.name = "resetButton";
	this.resetButton.parent = this;
	this.resetButton.setTransform(850.4,490.55);
	new cjs.ButtonHelper(this.resetButton, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,28,28,0.349)").s().rr(-0.5,-33.25,1,66.5,0.5);
	this.shape.setTransform(804.325,491.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(35,28,28,0.349)").s().rr(-0.5,-33.25,1,66.5,0.5);
	this.shape_1.setTransform(596.675,491.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(35,28,28,0.349)").s().rr(-0.5,-33.25,1,66.5,0.5);
	this.shape_2.setTransform(382.675,491.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.resetButton},{t:this.redButton},{t:this.greenButton},{t:this.blueButton},{t:this.eraseButton},{t:this.size20Button},{t:this.size3Button},{t:this.size1Button},{t:this.roundButton},{t:this.squareButton},{t:this.buttButton}]}).wait(1));

	// Highlights
	this.shapeHighlight = new lib.Highlight();
	this.shapeHighlight.name = "shapeHighlight";
	this.shapeHighlight.parent = this;
	this.shapeHighlight.setTransform(641.2,491.45);

	this.sizeHighlight = new lib.Highlight();
	this.sizeHighlight.name = "sizeHighlight";
	this.sizeHighlight.parent = this;
	this.sizeHighlight.setTransform(431.75,491.45);

	this.colorHighlight = new lib.Highlight();
	this.colorHighlight.name = "colorHighlight";
	this.colorHighlight.parent = this;
	this.colorHighlight.setTransform(116.55,491.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.colorHighlight},{t:this.sizeHighlight},{t:this.shapeHighlight}]}).wait(1));

	// Palette
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E7E7").s().rr(-412,-39.5,824,79,8);
	this.shape_3.setTransform(480.025,491.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(28,23,23,0.349)").s().rr(-412,-39.5,824,79,8);
	this.shape_4.setTransform(482.725,494.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Board
	this.board = new lib.Board();
	this.board.name = "board";
	this.board.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.board).wait(1));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEE").ss(1,2,1).p("EhK/gqLMCV/AAAMAAABUXMiV/AAAg");
	this.shape_5.setTransform(480,270);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape_6.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PaintingApp, new cjs.Rectangle(-1,-1,962,542), null);


// stage content:
(lib.animate_cc_html5_painting_app_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Painting App
	this.instance = new lib.PaintingApp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479.4,269.4,481.30000000000007,271.30000000000007);
// library properties:
lib.properties = {
	id: '76720FBF6ED0E24992E5C3D1C684D749',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
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
an.compositions['76720FBF6ED0E24992E5C3D1C684D749'] = {
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