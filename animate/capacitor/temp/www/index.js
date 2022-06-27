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


(lib.TriangleSlot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AncHmQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACQADACACAEQABAEgCADIgZAyIgCAEQgCAEgEACIgDAAIgEgBgAmxHkQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABIg8AAQgEAAgDgDgAGdHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAElHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgACtHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAA1HnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAhCHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAACADQADACAAAFIAAAAQAAAEgDADQgCACgEABgAi6HnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAkyHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAHSHCQgEgBgCgEIgag2QgCgEABgEQABgDAEgCIAAAAQAEgCAEABQAEABACAEIAaA2QACAEgBAEQgCAEgDACIgBAAIgEABIgDgBgAmmF6QgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAGcFXQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIAAAAIgFABIgDAAgAlwEOQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAFmDrQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAk6CiIAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAEwB/QgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAkEA2IAAAAQgEgCgBgEQgCgEACgEIAbg1QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA1QgCAEgEACIgDAAIgEgBgAD6ATQgEgCgBgEIgbg1QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA1QABAEgBAEQgBAEgEACIgEABIgEAAgAjOg1IAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgADEhYQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAiYihIAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgACOjEQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAhikNIAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgABYkwQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAgsl5IAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAAimcQgEgCgBgEIgbg1IAAgBQgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAg");
	this.shape.setTransform(-0.703,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AiBHaIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgYAAIAYgxQACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg1QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIALgWIAaA1QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA1QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBADACAEIAaA2QACAEAEABQAEACAEgCIAAAAIANAbIgEAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgnAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAg");
	this.shape_1.setTransform(0.5625,0.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TriangleSlot, new cjs.Rectangle(-49,-48.4,97,97.4), null);


(lib.Triangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnfHgIHgu/IHfO/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#933BD9").ss(2,1,1).p("AnfHgIHgu/IHfO/g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#933BD9").s().p("AABnfIHfO/Iu/AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AAAnfIHgO/Iu/AAg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49.5,107.5,107.5);


(lib.StarSlot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AEdHlIg0gdQgEgCgBgEQgBgEACgDIAAgBQACgDAEgBQAEgBADACIA1AdQADACACAEQABADgCAEIAAAAQgCAEgEABIgDABIgFgCgAkhHbQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCIA0gdQADgCAEABQAEABACAEIAAAAQACAEgBADQgBAEgEACIg0AdIgEACIgDgBgAk8HWIAAAAQgEAAgDgEQgCgDABgEIALg7QAAgEAEgDQADgCAEABIABAAQAEABACADQACADgBAEIgLA7QAAAEgEADQgCABgDAAIgCAAgAEjHBQgEgCgBgEIgMg7QgBgFADgDQACgDAEgBIABAAQADgBAEACQADADABAEIAMA7QABAEgDADQgCADgEABIgBAAIgBAAQgDAAgCgBgAC1GrIg1gdQgEgCgBgEQgBgEACgDIAAgBQACgDAEgBQAEgBADACIA1AdQAEACABAEQABAEgCADIAAAAQgCAEgEABIgDABIgEgCgAi4GhQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCIA0gdQADgCAEABQAEABACAEIABAAQABAEgBADQgBAEgEACIg0AdIgEACIgDgBgABMFxIg1gdQgEgCgBgEQgBgEACgDIAAgBQACgDAEgBQAEgBADACIA1AdQAEACABAEQABAEgCADIAAAAQgCAEgEABIgDABIgEgCgAhPFnQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCIA1gdQADgCAEABQAEABACAEIAAAAQACAEgBADQgBAEgEACIg1AdIgEACIgDgBgAklFhIgBgBQgFgBgCgDQgCgDABgEIAMg7QABgEADgDQADgCAEABIABAAQAEABACADQACADgBAFIgMA7QgBAEgDACQgDACgDAAIAAAAgAELFLQgDgCgBgEIgMg7QgBgFADgDQACgDAEgBIABAAQAEgBACACQAEADABAEIAMA7QABAEgDADQgCADgEABIgCABQgDAAgDgCgAkPDqIgBAAQgEgBgCgDQgCgDABgEIAMg7QABgEADgDQADgCAEABIABAAQAEABACADQACADgBAFIgMA7QgBAEgDACQgCABgDAAIgCAAgAD0DVQgDgDgBgEIgLg7QgBgEADgDQACgEAEAAIABAAQADgBAEACQADADABAEIALA7QABAEgDADQgCADgEABIAAAAIgCABQgDAAgDgCgAkVB7IgsgpQgDgDgBgEQAAgEADgDQADgDAEAAQAEgBADADIAsApQADADAAAEQABAEgDADIAAABQgDACgEABIgBAAQgDAAgDgDgAEQBvQgEgBgDgCQgDgEAAgEQAAgEADgDIArgpQADgDAEAAQAEAAADADIABABQACADAAADQAAAEgDADIgrAqQgDADgEAAIAAAAgAltApIgsgpQgDgCgBgEQAAgEADgDIABAAQACgDAEAAQAEgBADADIAsAoQADADABAEQAAAEgDADQgDADgEABIgBAAQgDAAgDgDgAFnAcQgEAAgCgCIgBgBQgDgDAAgEQAAgEADgDIAsgoQADgDAEAAQAEAAADADIABABQACADAAADQAAAEgDADIgsAoQgDADgEAAIAAAAgAnFgoIgsgpQgDgDAAgEQAAgEADgDQADgDAEAAQAEgBADADIArApQADADABAEQAAAEgDADIAAAAQgDADgEABIgBAAQgDAAgDgDgAG/g1QgEAAgDgDIAAAAQgDgDAAgEQAAgEADgDIAsgpIAAAAQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgsApQgDADgEAAIAAAAgAnohpQgDgDgBgDIAAgBQAAgEACgDQADgDAEgBIA8gHQAEAAADACQAEADAAAEQAAAEgCADQgDAEgEAAIg8AHIgBAAQgDAAgDgCgAG6hqIg7gHQgEAAgDgEQgCgDAAgEQAAgEAEgDQADgCAEAAIA7AHQAEABADADQACADAAAEIAAABQgBADgDADQgDACgDAAIgBAAgAlwh3QgDgDgBgEIAAAAQAAgEACgDQADgDAEgBIA8gIQAEAAADACQADADABAEQABAEgDADQgDADgEABIg8AIIgBAAQgDAAgDgCgAFEh5Ig7gHQgEAAgDgEQgCgDAAgEIAAAAQAAgEAEgDQADgCAEAAIA7AHQAEABADADQACADAAAEIAAABQgBAEgDACQgDACgDAAIgBAAgAj4iGQgDgDgBgEIAAAAQAAgEACgDQADgDAEgBIA8gIQAEAAADACQADADABAEQABAEgDADQgDADgEABIg8AIIgBAAQgDAAgDgCgADOiIIg8gHQgEAAgCgEQgDgDABgEQAAgEACgCIABgBQAEgCAEAAIA7AHQAEABADADQACADAAAEIAAABQgBAEgDACQgDACgDAAIgBAAgAiUiuQgEgCgCgDQgBgEACgEIAZg2QACgEAEgBQAEgCAEACQAEACABAEQABADgCAEIgZA2QgCAEgDACIgEAAIgEgBgAB0jDQgEgCgBgEIgag2QgCgDABgEQABgEAEgCIAAAAQAEgCAEACQAEABACAEIAaA2QABADgBAEQgBAEgEACIgBAAIgDABIgEAAgAhgkaIgBAAQgDgCgCgDQgBgEABgEIAag3QABgDAEgCQAEgBADACIABAAQADABACAEQABAEgBAEIgaA2QgBAEgEABIgDABIgEgBgABBkwQgEgBgCgEIgag2QgBgEABgEQABgEAEgBIABgBQADgBAEABQAEACABADIAbA2QABAEgBAEQgBAEgEACIgBAAIgEABIgDgBgAgumGIAAgBQgDgCgCgDQgBgEACgEIAYg3QACgDAEgCQAEgBAEACIAAAAIAAAAIAAgBIgDgHQgCgEABgEQABgEAEgBQAEgCAEABQADACACADIAYA2QACAEgBAEQgBAEgEACIAAAAQgEABgEgBQgEgBgCgEIgPgjIgBACIgYA3QgCADgEACIgDAAIgFAAg");
	this.shape.setTransform(0.8,-0.3553);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AE6HXQABgDgBgEQgBgEgEgCIg0gdQgEgCgEACQgDABgCADIgjgTQACgEgBgEQgCgEgDgCIg1gdQgEgCgEACQgDABgCADIgjgTQACgEgBgEQgCgEgDgCIg1gdQgEgCgEACQgDABgCADIgbgPIgHAFIAAgBQgCgDgEgBQgEgCgEACIg1AdQgDACgBAEQgCAEACAEIABAAIgkAUIAAgBQgCgDgEgBQgEgCgEACIg0AdQgDACgBAEQgCAEACAEIABAAIgkAUIAAgBQgCgDgEgBQgEgCgEACIg0AdQgDACgBAEQgCAEACAEIABAAIgYANIADgNQAEABADgDQADgCABgEIALg7QABgEgDgEQgCgDgDAAIAHgoQAEAAADgCQADgCABgEIAMg7QABgEgDgDQgCgEgEgBIAIgnQADAAAEgCQADgCABgEIAMg7QABgEgDgDQgCgEgEgBIAAAAIAEgWIgMgLIAAAAQADgDAAgEQAAgEgDgDIgsgpQgDgDgEAAQgEAAgDADIgegbQADgDAAgEQAAgEgDgDIgsgoQgDgDgEAAQgEAAgDADIgdgbQACgDAAgEQAAgEgDgDIgsgpQgDgDgEAAQgEAAgDADIgOgNIAUgDQAAAEADACQAEADAEAAIA8gHQAEgBACgDQADgDAAgFIAogFIAAABQAAAEAEADQADACAEAAIA8gIQAEgBADgDQACgEAAgEIAogFIAAABQAAAEAEADQADACAEAAIA8gIQAEgBADgDQACgEAAgEIAOgBIAJgVQAEABAEgBQAEgBACgEIAZg2QACgEgBgEQgCgEgEgBIARglIABABQAEABAEgBQADgBACgEIAZg3QACgDgCgEQgBgEgEgCIARgkIABAAQAEACAEgCQADgBACgEIAYg3IABgCIAQAjQACAEAEACQAEABADgCIABAAIAQAkIAAAAQgEACgBAEQgCAEACADIAaA2QACAEAEACQAEABADgCIARAkIAAABQgEABgBAEQgCAEACAEIAaA2QACAEAEABQAEABADgBIARAkQgCACgBADQAAAFACADQADADAEABIA7AHQAFAAADgDQADgCAAgDIAoAFQgBAEADADQACADAEABIA7AHQAFAAADgDQADgCABgDIAnAEQgBAFADADQACADAEABIA7AHQAFAAADgDQADgCABgEIAeAEIgrAoQgDADAAAEQAAAEACADIABABIgeAbIAAAAQgDgDgEAAQgEAAgDACIgsAoQgDADAAAEQAAAEACADIABABIgdAcIgBgBQgDgDgEAAQgEAAgDACIgrAqQgDADAAAEQAAAEACADIgbAaIAAACIAAAAQgEABgDADQgCAEABAEIALA7QABAEADACQADADAEgBIABAAIAIAnIgBAAQgEABgDAEQgCADABAEIAMA7QABAEADACQAEADAEgBIAHAnIAAAAQgEABgDAEQgCADABAEIAMA7QABAEADACQADADAEgBIAHAhgAABnZIABAAIAAABIgBgBg");
	this.shape_1.setTransform(-0.6625,0.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StarSlot, new cjs.Rectangle(-50.5,-49,101.4,97.3), null);


(lib.Star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AABnfICXFCIFhAsIkEDzIBDFeIk3isIk4CsIBDleIkEjzIFigsg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#933BD9").ss(2,1,1).p("AABnfICXFCIFhAsIkEDzIBDFeIk3isIk4CsIBDleIkEjzIFigsg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#933BD9").s().p("AABE0Ik3CsIBCleIkEjyIFigtICXlCICWFCIFiAtIkEDyIBDFeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AAAE0Ik2CsIBCleIkEjzIFigsICWlCICXFCIFiAsIkEDzIBDFeg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-49.5,112.5,107.5);


(lib.SquareSlot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AGkHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAEsHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAC0HqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAA8HqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAg7HqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAizHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAkrHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAmjHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnmHnQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZGrQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmFvQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZEzQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmD3QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZC7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmB/QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZBDQgDgDAAgEIAAg8QAAgDADgDQADgDAEAAQAEAAADADQADADAAADIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmAHQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAHZg0QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmhwQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZisQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmjoQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZkkQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmlgQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZmcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFonVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgADwnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAB4nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAAAnVQgDAAgDgDQgDgDAAgEQAAgEADgDQADgDADAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAh3nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAjvnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAlnnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnfnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AFyHgQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg7AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg7QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADADAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAADIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoIg8AAQgEAAgDADQgDADAAAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SquareSlot, new cjs.Rectangle(-49,-49,98,98), null);


(lib.Square = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnfnfIO/AAIAAO/Iu/AAg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#933BD9").ss(2,1,1).p("AnfnfIO/AAIAAO/Iu/AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#933BD9").s().p("AnfHgIAAu/IO/AAIAAO/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49,107,107);


(lib.RoundedSquareSlot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("ABlHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAgSHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAiKHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAjGHpQgggBgegIQgDgBgCgDQgDgEABgEIAAAAQACgEADgCQAEgCADABQAcAHAeABQAEABADADQADADgBAEQAAAEgDADQgDADgDAAIgBgBgADYHmQgDgDgBgEIAAgBQAAgDACgEQADgDAEgBQAegDAbgJQAEgCADACQAEACABADIABABQABAEgCADQgCAEgEACQgdAJgfAEIgCABQgDAAgDgCgAk+HKQgagOgZgTQgEgDAAgEQAAgEACgDQADgEAEAAQAEAAADACQAXATAZANQAEACABAEQACADgCADIAAABQgCAEgEABIgDABIgFgCgAFMHAQgEgBgCgEIAAAAQgCgDABgEQABgEADgCQAYgPAWgVQADgDAEABQAEAAADADQADADAAAEQAAAEgDADQgXAVgaARQgDABgCAAIgDAAgAmXGCQgEgBgDgDQgVgYgPgZQgCgEABgEQABgEAEgCIAAAAQAEgCADABQAFABACAEQAOAYATAWQADADgBAEQAAAEgDADIAAAAQgDADgEAAIAAAAgAGiFsIgBAAQgDgDgBgDQAAgFACgDQASgYALgaQACgDAEgCQAEgBADABIABABQADABACAEQABAEgBADQgNAdgTAZQgCADgEABIgBAAQgEAAgCgCgAnWEaQgDgCgCgEQgJgegEggQAAgEADgDQACgEAEAAIABAAQAEAAADACQADADAAAEQADAeAKAcQABAEgCAEQgCADgEABIAAAAIgDABIgFgBgAHWECQgEgBgCgDQgCgEABgEQAGgbABgeQAAgEADgDQADgDAEAAIAAAAQAEAAADADQADADAAAEQgBAggHAeQgBAEgDACQgDACgCAAIgDgBgAnmCgQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZCIQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmAoQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAHZAQQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAnmhPQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZhnQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnfjEIAAAAQgEAAgDgDQgCgDAAgEQADggAIgdQABgEAEgCQADgCAEACQAEABACADQACAEgBAEQgIAbgCAdQAAAEgEADQgCADgEAAIgBgBgAHWjfQgDgCgBgEQgFgdgKgbQgBgDABgEQACgEAEgBIAAAAQAEgCADACQAEACACAEQALAcAFAfQAAAEgCADQgCAEgEAAIgBAAIgBAAQgDAAgDgCgAnCk2QgDgCgBgEQgCgEACgEQAPgaAUgZQACgDAEAAQAFAAADACQADADABAEQAAAEgDAEQgTAWgNAZQgCADgEACIgDAAIgFgBgAGulMQgEgBgCgDQgPgYgVgVQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADQAWAXARAZQACADgBAEQgBAFgDACQgDABgCAAIgDAAgAlxmSQgEAAgDgDIAAgBQgCgDAAgEQAAgEAEgDQAYgUAagOQAEgCAEABQAEACACADQACAEgBAEQgCAEgDACQgZANgXATQgCACgEAAIgBAAgAFZmiQgYgRgcgMQgDgBgCgEQgBgEABgEIAAAAQACgEAEgBQAEgCAEACQAcAMAaATQAEACAAAEQABAEgDAEQgCADgEABIgCAAQgDAAgCgCgAkNnLQgDgCgBgEIAAAAQgBgEACgEQACgEAEgBQAegIAggCQAEAAADACQAEADAAAEIAAABQAAADgDAEQgCADgEAAQgfACgcAIIgCAAIgGgBgADunQQgcgFgeAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAQAgAAAeAGQAEAAACAEQADADgBAEIAAABQgBADgDADQgDABgDAAIgCAAgAA8nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAg7nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAiznVQgEAAgDgDQgDgDAAgEIAAAAQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(0.0002,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("ACrHgQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg7AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgfAAIgJAAQABgEgDgDQgDgDgEgBQgegBgbgHQgEgBgEACQgDACgCAEQgTgGgSgJQACgDgCgDQgBgEgDgCQgagNgXgTQgDgCgEAAQgEAAgDAEIgUgTIgJgJQADgDAAgEQABgEgDgDQgTgWgOgYQgCgEgFgBQgDgBgEACQgJgSgHgTQAEgBACgDQACgEgBgEQgKgcgDgeQAAgEgDgDQgDgCgEAAIgBgXIAAgRQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg7QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgXIAAgRQAEABAEgDQADgDAAgEQACgdAIgbQABgEgCgEQgCgDgEgBQAGgTAJgSQAEACAEgBQAEgCACgDQANgZATgWQADgEAAgEQgBgEgDgDIAOgPIAPgOQADADAEAAQAEAAADgCQAXgTAZgNQADgCACgEQABgEgCgEQASgJATgGQABAEADACQAEACAEgBQAcgIAfgCQAEAAACgDQADgEAAgDIAEgBQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA7AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAQAeAAAcAFQAEABAEgCQADgDABgDQAUAEASAHQgBAEABAEQACAEAEABQAbAMAYARQADACAEAAQAEgBACgDQAQALAOAOQgDADAAAEQAAAEADADQAVAVAPAYQACADAEABQAFABADgCQALARAIATQgEABgCAEQgBAEABADQAKAbAFAdQABAEADACQAEADADgBQADAUAAAVQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA7QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEQgBAegGAbQgBAEACAEQACADAEABQgFATgHATIgBgBQgDgBgEABQgEACgCADQgLAagSAYQgCADAAAFQABADADADQgLAOgOAOIgDADQgDgDgEAAQgEgBgDADQgWAVgYAPQgDACgBAEQgBAEACADQgRAKgTAHQgBgDgEgCQgDgCgEACQgbAJgeADQgEABgDADQgCAEABADQgQACgRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RoundedSquareSlot, new cjs.Rectangle(-49,-49,98,98), null);


(lib.RoundedSquare = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiznfIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAIlnAAQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#933BD9").ss(2,1,1).p("AiznfIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAIlnAAQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#933BD9").s().p("AizHgQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AizHgQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49.5,107.5,107.5);


(lib.RestoreIcon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAEC/IgEgDIgBgFIgDgyIABgFIADgEIAFgCIAZgBQAtgDAhghQAkgjAAgyQAAgygkgkIgCgCQgggfgsgDIAAAAIgIAAQgxAAgkAkIAAABIgGAGIAvANQAEABACADQACAEgBAEQgBAEgEACIhwBAQgEACgEgBQgEgBgCgEIhBhwQgCgDABgEQABgEAEgCQADgCAEABIA6APQAMgTASgRIAAAAQA3g4BPgBIAKAAIABAAIABAAQBIAFA0A0QA4A4AABPQAABPg4A3IgBABQgzA0hIAEIgZABIgBABIgEgCgACgCAIAAABIABgCg");
	this.shape.setTransform(-0.006,0.0014);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-19.2,42.7,38.5);


(lib.CircleSlot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgTHqQgEgBgDgDQgCgDAAgEIAAAAQAAgEADgDQADgDAEABIASAAIAmgBQAEgBADADQADADABAEQAAAEgDADQgCADgEABQgUABgUAAIAAAAIgTAAgAhPHkQgegFgdgIQgEgBgCgEQgCgDABgEQABgEADgCQAEgCAEABQAcAIAdAEQAEABACADQADADgBAEQAAAFgEACQgDACgDAAIgBAAgABdHfQgEgCAAgEIAAAAQgBgEACgEQACgDAEgBQAdgGAbgJQAEgBAEACQAEABABAEIAAAAQACAEgCAEQgCAEgEABQgdAKgeAGIgCAAQgDAAgCgCgAjEHCQgcgMgbgQQgDgCgBgEQgBgEACgEIABAAQACgDAEgBQADgBAEACQAZAPAbAMQAEABABAEQACAEgCAEQgCAEgEABIgDABIgEgBgADQG6QgEgBgCgEIAAAAQgCgEACgEQABgEAEgBQAagNAYgRQAEgCAEABQAEABACADIAAAAQACADAAAEQgBAEgEADQgZARgbAOIgFABIgDgBgAktGDQgWgTgWgVQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAVAVAWARQADADAAAEQABAEgDADIAAAAQgDAEgEAAIgBAAQgDAAgDgCgAE2F4QgFAAgCgDQgDgEAAgEQABgEADgDIAcgaIAAgBIAKgJQADgDAEAAQAEgBAEADQADADAAAEQAAAEgDADIgLAMIAAgBIgdAcQgDACgEAAIAAAAgAl7ExQgEAAgDgDQgSgYgQgaQgCgDAAgEQABgEAEgCQAEgDAEABQAEABACAEQAPAYASAXQADAEgBAEQAAAEgDACQgDADgEAAIgBgBgAF/EiIAAgBQgDgCgBgEQAAgEACgDQASgYAOgaQACgDAEgBQAEgCAEACQADACABAEQABAEgBAEQgPAagTAZQgCAEgEABIgCAAQgDAAgDgCgAm7DMQgEgCgBgDQgNgcgJgeQgBgEACgEQACgDAEgBQAEgCAEACQADACABAEQAJAcAMAbQABAEgBAEQgBAEgEACIAAAAIgEAAIgEAAgAG8C6QgEgCgBgDQgCgEACgEQAKgcAHgcQABgEADgCQAEgDAEABIAAAAQAEABACAEQACADAAAEQgIAfgLAcQgBAEgEACIgEABIgEgBgAnfBXQgEgCAAgEQgFgegBgeQAAgEADgDQADgDAEAAIAAAAQAEgBADADQADADAAAEQABAeAFAcQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAHbBFIAAAAQgEAAgDgDQgCgEAAgEQAEgcAAgeIAAAAIgBgVQAAgFADgDQADgDAEAAQAEAAADADQADACAAAFIABAWIAAAAQAAAfgEAeQAAAEgDACQgDADgEAAIgBgBgAnegfIAAAAQgFAAgDgDQgCgEAAgEQADgeAGgeQABgEADgCQAEgDAEABQAEABACAEQACADAAAEQgGAcgDAeQAAAEgDADQgDACgDAAIgBAAgAHThKQgDgCAAgFQgFgegJgcQgBgEABgEQACgDAEgBQAEgCAEACQAEACABAEQAJAeAFAgQABADgDAEQgCADgEABIgCAAQgDAAgDgCgAnJiUQgEgBgCgEQgCgEACgEQAJgdAOgcQACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADQgNAbgJAcQgCAEgDACIgFABIgDgBgAGyi9QgEgBgBgEQgNgbgPgZQgCgDABgEQAAgEAEgCIAAgBQAEgCAEABQAEABACAEQAQAaANAbQACAEgCAEQgBAEgEABIgEACIgEgBgAmWkAQgDgCgBgFQgBgEADgDQAQgaAVgXQADgEAEAAQAEAAADADIABAAQACACABAEQAAAEgDADQgUAYgQAYQgCADgEABIgCAAQgDAAgDgBgAF1kiQgEgBgDgDQgQgUgSgSIgGgGQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADIAGAGQATATARAUQACADAAAFQgBADgDADIAAAAQgDADgDAAIgBAAgAlBlaQgEgBgDgCIAAgBQgDgDAAgEQAAgEAEgDQAWgVAZgRQADgDAFABQAEABACADIAAABQACADAAAEQgBAEgEACQgXARgWAUQgDADgEAAIAAAAgAEbl3QgYgTgZgOQgEgDgBgEQgBgDACgEIAAAAQACgEAEgBQAEgBAEADQAaAPAZATQADACABAEQAAAEgCADIgBABQgCADgEABIgBAAQgEAAgCgCgAjimgQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCQAbgPAdgKQAEgCADACQAEACABAEIAAAAQACADgCAEQgBAEgEABQgcALgZANIgFABIgDAAgAC0mzQgagLgdgHQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABQAeAIAcAMQAEABACAEQABAEgBAEIAAAAQgCAEgEABIgEABIgEgBgAh1nLQgEgCAAgDIAAgBQgBgEACgDQACgEAEgBQAegGAggEQAEAAADADQAEACAAAEQABAFgDADQgDADgEABQgfACgcAHIgDAAQgDAAgCgCgABDnQQgdgEgegBQgEAAgDgDQgBgDAAgEIAAAAQAAgEACgDQADgDAEAAQAfAAAeAFQAEAAACAEQADADgBAEQAAAEgEADQgCACgEAAIgBAAg");
	this.shape.setTransform(0.0248,-0.0002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AhDHcQABgEgDgEQgCgDgFgBQgcgEgcgIQgEgBgEACQgDACgBAEQgUgGgSgIQABgDgBgEQgCgEgEgCQgagMgZgPQgEgCgEABQgEABgCADQgRgKgQgNQACgDAAgEQAAgEgEgCQgVgSgVgVQgDgDgEAAQgEAAgDADIgbgdQAEgDAAgEQAAgEgCgDQgSgXgQgZQgCgDgEgBQgEgBgDACQgKgRgJgSIABAAQADgCACgEQABgEgCgDQgMgbgIgcQgBgEgEgCQgDgCgEABQgFgTgEgUQAEgBACgDQADgEgBgEQgEgcgBgdQAAgFgDgCQgDgDgEAAIAAAAIAAgLIABgfQADABAEgDQADgDAAgEQACgdAGgdQABgEgCgDQgCgEgFAAQAFgUAGgTQAEACADgCQAEgCACgEQAJgcANgaQACgEgCgEQgBgEgDgBQAJgSALgRQADACAFAAQAEgBACgEQAQgYAUgXQADgDAAgEQgBgEgDgDIASgTIALgKQADADADAAQAFAAADgDQAWgUAXgQQAEgDAAgEQABgEgCgDQARgLARgKQACADAEABQAEACADgCQAagOAcgKQADgCACgEQACgDgCgEQATgGATgFQABAEAEACQADACAEgBQAdgGAfgDQAEgBADgDQACgDAAgEIAogCQAAAEACADQADADAEAAQAeABAdAEQAEAAADgCQADgDABgEQAUADAUAFQgBAEACADQACAEAEABQAcAHAbAMQAEABAEgBQADgCACgEQATAJASAKQgCADABAEQABAEADACQAZAPAYASQAEACAEAAQAEgBACgDIAeAaQgDACAAAEQAAAEADADIAGAGQASATAQATQACADAEABQAFAAADgCIAAgBQANARALARIAAAAQgEACgBAEQgBAEADAEQAPAZANAaQABAEAEABQAEACAEgCQAIATAGATQgEABgCAEQgCADACAEQAIAdAFAeQABAEADACQAEADAEgBQACAUABAUQgEABgCADQgDADAAAEIAAAVIAAABQAAAdgDAdQAAAEACADQADADAEABIAAAAQgDAUgEAUIAAAAQgEgBgEACQgDACgBAEQgHAdgLAbQgBAEABAEQACAEAEABQgIATgKASQgDgCgEABQgEABgCAEQgOAZgSAYQgDADABAEQABAEADADQgNAQgOAPQgDgCgEAAQgEAAgDADIgKAKIAAAAIgcAbQgEADAAAEQAAAEADADQgQANgQALQgDgDgEgBQgEgBgDADQgZAQgaANQgDACgCAEQgBADACAEQgSAJgTAGQgBgDgEgCQgEgCgEABQgbAKgdAGQgEAAgCAEQgCADAAAEQgTADgVACQAAgEgDgDQgDgCgEAAIgmABIgSAAQgEAAgDACQgDADAAAEIAAABQgVgBgTgDg");
	this.shape_1.setTransform(-0.05,-0.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleSlot, new cjs.Rectangle(-48.9,-49,97.9,98), null);


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

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AHgAAQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHQAAjGCMiNQCNiMDGAAQDHAACNCMQCMCNAADGg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#933BD9").ss(2,1,1).p("AHgAAQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHQAAjGCMiNQCNiMDGAAQDHAACNCMQCMCNAADGg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#933BD9").s().p("AlSFTQiNiNAAjGQAAjGCNiNQCMiMDGAAQDHAACMCMQCNCNAADGQAADGiNCNQiMCNjHAAQjGAAiMiNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AlSFTQiNiNAAjGQAAjGCNiNQCMiMDGAAQDHAACMCMQCNCNAADGQAADGiNCNQiMCNjHAAQjGAAiMiNg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49.5,107.5,107.5);


(lib.Slots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slots
	this.star = new lib.StarSlot();
	this.star.name = "star";
	this.star.setTransform(773.6,370);

	this.roundedSquare = new lib.RoundedSquareSlot();
	this.roundedSquare.name = "roundedSquare";
	this.roundedSquare.setTransform(624.3,370);

	this.triangle = new lib.TriangleSlot();
	this.triangle.name = "triangle";
	this.triangle.setTransform(477.5,370);

	this.circle = new lib.CircleSlot();
	this.circle.name = "circle";
	this.circle.setTransform(330.7,370);

	this.square = new lib.SquareSlot();
	this.square.name = "square";
	this.square.setTransform(183.9,370);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.square},{t:this.circle},{t:this.triangle},{t:this.roundedSquare},{t:this.star}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(134.9,321,689.6,98), null);


(lib.Restart = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.RestoreIcon("single",0);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({rotation:-15},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AjkDlIAAnJIHJAAIAAHJg");
	this.shape.setTransform(-0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-22.9,46.2,45.9);


(lib.Pieces = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pieces
	this.star = new lib.Star();
	this.star.name = "star";
	this.star.setTransform(760.7,154.5);
	new cjs.ButtonHelper(this.star, 0, 1, 2);

	this.circle = new lib.Circle();
	this.circle.name = "circle";
	this.circle.setTransform(617.85,201.5);
	new cjs.ButtonHelper(this.circle, 0, 1, 2);

	this.square = new lib.Square();
	this.square.name = "square";
	this.square.setTransform(477.5,154.5);
	new cjs.ButtonHelper(this.square, 0, 1, 2);

	this.triangle = new lib.Triangle();
	this.triangle.name = "triangle";
	this.triangle.setTransform(337.15,201.5);
	new cjs.ButtonHelper(this.triangle, 0, 1, 2);

	this.roundedSquare = new lib.RoundedSquare();
	this.roundedSquare.name = "roundedSquare";
	this.roundedSquare.setTransform(196.8,154.5);
	new cjs.ButtonHelper(this.roundedSquare, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.roundedSquare},{t:this.triangle},{t:this.square},{t:this.circle},{t:this.star}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(138.8,105,673.9000000000001,154.5), null);


// stage content:
(lib.drag_and_drop_game = function(mode,startPosition,loop,reversed) {
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
		var pieces = root.pieces;
		var slots = root.slots;
		var restart = root.restart;
		var winMessage = root.winMessage;
		var positions = [];
		
		root.setup = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			root.drawStart = stage.on("drawstart", root.start, null, true);
		};
		
		root.start = function(e)
		{
			stage.off("drawstart", root.drawStart);
			winMessage.originalY = winMessage.y;
			
			pieces.children.forEach(function(child, index)
			{
				positions[index] = {x:child.x, y:child.y};
			});
			
			slots.children.forEach(function(child, index)
			{
				child.mouseChildren = false;
			});
		
			root.restartHandler(null);	
			restart.on("click", root.restartHandler);
			pieces.on("mousedown", root.mouseDownHandler);	
		};
		
		root.restartHandler = function(e)
		{
			pieces.count = 0;
			winMessage.text = "";
			root.shuffle();
		};
		
		root.mouseDownHandler = function(e)
		{
			e.currentTarget.setChildIndex(e.target, e.currentTarget.children.length - 1);
			e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x;
			e.target.offsetY = (e.stageY / stage.scaleY) - e.target.y;
			pieces.target = e.target;
			root.stageMouseMove = stage.on("stagemousemove", root.stageMouseMoveHandler);
			root.stageMouseUp = stage.on("stagemouseup", root.stageMouseUpHandler);
		};
		
		root.stageMouseMoveHandler = function(e)
		{
			if (pieces.target)
			{
				pieces.target.x = (e.stageX / stage.scaleX) - pieces.target.offsetX;
				pieces.target.y = (e.stageY / stage.scaleY) - pieces.target.offsetY;
			}	
		};
		
		root.stageMouseUpHandler = function(e)
		{
			stage.off("stagemousemove", root.stageMouseMove);
			stage.off("stagemouseup", root.stageMouseUp);
			
			if (pieces.target)
			{
				root.check();
				pieces.target = null;
			}	
		};
		
		root.shuffle = function()
		{	
			positions.sort(function(a, b)
			{
				return 0.5 - Math.random();
			});
			
			pieces.children.forEach(function(child, index)
			{
				child.originalX = positions[index].x;
				child.originalY = positions[index].y;		
				child.mouseEnabled = true;		
				createjs.Tween.get(child).to({x:child.originalX, y:child.originalY}, 350, createjs.Ease.backInOut);
			});
		};
		
		root.check = function()
		{
			var spot = slots.getObjectUnderPoint(pieces.target.x, pieces.target.y);
			
			if (!spot)
			{
				root.onMiss();
				return;
			}
			
			root.slot = spot.parent;
				
			if (root.slot)
			{		
				if (pieces.target.name === root.slot.name)
				{
					root.onMatch();
					
					if (pieces.count === pieces.children.length)
						root.onWin();
				}
				else
					root.onMiss();
				
				root.slot = null;
			}
			else
				root.onMiss();
		};
		
		root.onMatch = function()
		{	
			pieces.target.mouseEnabled = false;
			pieces.count++;
			createjs.Tween.get(pieces.target).to({x:root.slot.x, y:root.slot.y}, 350, createjs.Ease.backInOut);
		};
		
		root.onWin = function()
		{
			winMessage.text = "YOU WIN!";
			winMessage.alpha = 0;
			winMessage.y = winMessage.originalY + 60;
			createjs.Tween.get(winMessage).to({alpha:1, y:winMessage.originalY}, 500, createjs.Ease.backInOut);
		};
		
		root.onMiss = function()
		{	
			createjs.Tween.get(pieces.target).to({x:pieces.target.originalX, y:pieces.target.originalY}, 350, createjs.Ease.backInOut);
		};
		
		root.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// restartButton
	this.restart = new lib.Restart();
	this.restart.name = "restart";
	this.restart.setTransform(915.85,37.3);
	new cjs.ButtonHelper(this.restart, 0, 1, 2, false, new lib.Restart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(1));

	// pieces
	this.pieces = new lib.Pieces();
	this.pieces.name = "pieces";

	this.timeline.addTween(cjs.Tween.get(this.pieces).wait(1));

	// div
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.098)").ss(1,1,1).p("EhGdAAAMCM7AAA");
	this.shape.setTransform(480.025,270);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// slots
	this.slots = new lib.Slots();
	this.slots.name = "slots";

	this.timeline.addTween(cjs.Tween.get(this.slots).wait(1));

	// win
	this.winMessage = new cjs.Text("", "96px 'Helvetica'", "#FFFFFF");
	this.winMessage.name = "winMessage";
	this.winMessage.textAlign = "center";
	this.winMessage.lineHeight = 110;
	this.winMessage.lineWidth = 931;
	this.winMessage.parent = this;
	this.winMessage.setTransform(480,134.25);

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(492.8,287.4,454.49999999999994,131.60000000000002);
// library properties:
lib.properties = {
	id: 'DCCA5A04F9E9EB49A3DF1304FD62D849',
	width: 960,
	height: 540,
	fps: 60,
	color: "#67209F",
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
an.compositions['DCCA5A04F9E9EB49A3DF1304FD62D849'] = {
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