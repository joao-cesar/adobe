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


(lib.Map = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape.setTransform(-222.05,232.1,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1.setTransform(-232.15,232.1,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_2.setTransform(-242.25,232.1,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_3.setTransform(-242.25,222,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_4.setTransform(-252.3,222,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_5.setTransform(-242.25,211.9,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_6.setTransform(-252.3,211.9,2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_7.setTransform(-262.4,211.9,2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_8.setTransform(423.8,201.8,2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_9.setTransform(413.7,201.8,2,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_10.setTransform(-242.25,201.8,2,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_11.setTransform(-252.3,201.8,2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_12.setTransform(-262.4,201.8,2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_13.setTransform(433.9,191.7,2,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_14.setTransform(363.3,191.7,2,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_15.setTransform(-242.25,191.7,2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_16.setTransform(-252.3,191.7,2,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_17.setTransform(-262.4,191.7,2,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_18.setTransform(454.1,181.6,2,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_19.setTransform(444,181.6,2,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_20.setTransform(363.3,181.6,2,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_21.setTransform(-242.25,181.6,2,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_22.setTransform(-252.3,181.6,2,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_23.setTransform(-262.4,181.6,2,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_24.setTransform(464.2,171.5,2,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_25.setTransform(373.4,171.5,2,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_26.setTransform(363.3,171.5,2,2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_27.setTransform(-222.05,171.5,2,2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_28.setTransform(-232.15,171.5,2,2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_29.setTransform(-242.25,171.5,2,2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_30.setTransform(-252.3,171.5,2,2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_31.setTransform(-262.4,171.5,2,2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_32.setTransform(-272.5,171.5,2,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_33.setTransform(393.55,161.4,2,2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_34.setTransform(383.45,161.4,2,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_35.setTransform(373.4,161.4,2,2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_36.setTransform(363.3,161.4,2,2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_37.setTransform(353.2,161.4,2,2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_38.setTransform(302.7,161.4,2,2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_39.setTransform(292.6,161.4,2,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_40.setTransform(20.15,161.4,2,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_41.setTransform(10.05,161.4,2,2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_42.setTransform(-0.05,161.4,2,2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_43.setTransform(-222.05,161.4,2,2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_44.setTransform(-232.15,161.4,2,2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_45.setTransform(-242.25,161.4,2,2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_46.setTransform(-252.3,161.4,2,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_47.setTransform(-262.4,161.4,2,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_48.setTransform(-272.5,161.4,2,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_49.setTransform(393.55,151.35,2,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_50.setTransform(383.45,151.35,2,2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_51.setTransform(373.4,151.35,2,2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_52.setTransform(363.3,151.35,2,2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_53.setTransform(353.2,151.35,2,2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_54.setTransform(343.1,151.35,2,2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_55.setTransform(333,151.35,2,2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_56.setTransform(322.9,151.35,2,2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_57.setTransform(312.8,151.35,2,2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_58.setTransform(302.7,151.35,2,2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_59.setTransform(292.6,151.35,2,2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_60.setTransform(30.25,151.35,2,2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_61.setTransform(20.15,151.35,2,2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_62.setTransform(10.05,151.35,2,2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_63.setTransform(-0.05,151.35,2,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_64.setTransform(-211.95,151.35,2,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_65.setTransform(-222.05,151.35,2,2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_66.setTransform(-232.15,151.35,2,2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_67.setTransform(-242.25,151.35,2,2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_68.setTransform(-252.3,151.35,2,2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_69.setTransform(-262.4,151.35,2,2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_70.setTransform(-272.5,151.35,2,2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_71.setTransform(403.65,141.25,2,2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_72.setTransform(393.55,141.25,2,2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_73.setTransform(383.45,141.25,2,2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_74.setTransform(373.4,141.25,2,2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_75.setTransform(363.3,141.25,2,2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_76.setTransform(353.2,141.25,2,2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_77.setTransform(343.1,141.25,2,2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_78.setTransform(333,141.25,2,2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_79.setTransform(322.9,141.25,2,2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_80.setTransform(312.8,141.25,2,2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_81.setTransform(302.7,141.25,2,2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_82.setTransform(292.6,141.25,2,2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_83.setTransform(40.3,141.25,2,2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_84.setTransform(30.25,141.25,2,2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_85.setTransform(20.15,141.25,2,2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_86.setTransform(10.05,141.25,2,2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_87.setTransform(-0.05,141.25,2,2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_88.setTransform(-201.9,141.25,2,2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_89.setTransform(-211.95,141.25,2,2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_90.setTransform(-222.05,141.25,2,2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_91.setTransform(-232.15,141.25,2,2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_92.setTransform(-242.25,141.25,2,2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_93.setTransform(-252.3,141.25,2,2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_94.setTransform(-262.4,141.25,2,2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_95.setTransform(-272.5,141.25,2,2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_96.setTransform(403.65,131.15,2,2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_97.setTransform(393.55,131.15,2,2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_98.setTransform(383.45,131.15,2,2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_99.setTransform(373.4,131.15,2,2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_100.setTransform(363.3,131.15,2,2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_101.setTransform(353.2,131.15,2,2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_102.setTransform(343.1,131.15,2,2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_103.setTransform(333,131.15,2,2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_104.setTransform(322.9,131.15,2,2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_105.setTransform(312.8,131.15,2,2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_106.setTransform(302.7,131.15,2,2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_107.setTransform(292.6,131.15,2,2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_108.setTransform(80.7,131.15,2,2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_109.setTransform(40.3,131.15,2,2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_110.setTransform(30.25,131.15,2,2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_111.setTransform(20.15,131.15,2,2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_112.setTransform(10.05,131.15,2,2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_113.setTransform(-0.05,131.15,2,2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_114.setTransform(-10.1,131.15,2,2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_115.setTransform(-201.9,131.15,2,2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_116.setTransform(-211.95,131.15,2,2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_117.setTransform(-222.05,131.15,2,2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_118.setTransform(-232.15,131.15,2,2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_119.setTransform(-242.25,131.15,2,2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_120.setTransform(-252.3,131.15,2,2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_121.setTransform(-262.4,131.15,2,2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_122.setTransform(-272.5,131.15,2,2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_123.setTransform(403.65,121.05,2,2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_124.setTransform(393.55,121.05,2,2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_125.setTransform(383.45,121.05,2,2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_126.setTransform(373.4,121.05,2,2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_127.setTransform(363.3,121.05,2,2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_128.setTransform(353.2,121.05,2,2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_129.setTransform(343.1,121.05,2,2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_130.setTransform(333,121.05,2,2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_131.setTransform(322.9,121.05,2,2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_132.setTransform(312.8,121.05,2,2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_133.setTransform(302.7,121.05,2,2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_134.setTransform(292.6,121.05,2,2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_135.setTransform(90.8,121.05,2,2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_136.setTransform(80.7,121.05,2,2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_137.setTransform(50.4,121.05,2,2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_138.setTransform(40.3,121.05,2,2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_139.setTransform(30.25,121.05,2,2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_140.setTransform(20.15,121.05,2,2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_141.setTransform(10.05,121.05,2,2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_142.setTransform(-0.05,121.05,2,2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_143.setTransform(-10.1,121.05,2,2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_144.setTransform(-191.8,121.05,2,2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_145.setTransform(-201.9,121.05,2,2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_146.setTransform(-211.95,121.05,2,2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_147.setTransform(-222.05,121.05,2,2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_148.setTransform(-232.15,121.05,2,2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_149.setTransform(-242.25,121.05,2,2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_150.setTransform(-252.3,121.05,2,2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_151.setTransform(-262.4,121.05,2,2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_152.setTransform(-272.5,121.05,2,2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_153.setTransform(403.65,111,2,2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_154.setTransform(393.55,111,2,2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_155.setTransform(383.45,111,2,2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_156.setTransform(373.4,111,2,2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_157.setTransform(363.3,111,2,2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_158.setTransform(353.2,111,2,2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_159.setTransform(343.1,111,2,2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_160.setTransform(333,111,2,2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_161.setTransform(322.9,111,2,2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_162.setTransform(312.8,111,2,2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_163.setTransform(90.8,111,2,2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_164.setTransform(80.7,111,2,2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_165.setTransform(50.4,111,2,2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_166.setTransform(40.3,111,2,2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_167.setTransform(30.25,111,2,2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_168.setTransform(20.15,111,2,2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_169.setTransform(10.05,111,2,2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_170.setTransform(-0.05,111,2,2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_171.setTransform(-10.1,111,2,2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_172.setTransform(-181.7,111,2,2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_173.setTransform(-191.8,111,2,2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_174.setTransform(-201.9,111,2,2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_175.setTransform(-211.95,111,2,2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_176.setTransform(-222.05,111,2,2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_177.setTransform(-232.15,111,2,2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_178.setTransform(-242.25,111,2,2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_179.setTransform(-252.3,111,2,2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_180.setTransform(-262.4,111,2,2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_181.setTransform(-272.5,111,2,2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_182.setTransform(393.55,100.9,2,2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_183.setTransform(383.45,100.9,2,2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_184.setTransform(373.4,100.9,2,2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_185.setTransform(363.3,100.9,2,2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_186.setTransform(353.2,100.9,2,2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_187.setTransform(343.1,100.9,2,2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_188.setTransform(333,100.9,2,2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_189.setTransform(322.9,100.9,2,2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_190.setTransform(90.8,100.9,2,2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_191.setTransform(80.7,100.9,2,2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_192.setTransform(60.5,100.9,2,2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_193.setTransform(50.4,100.9,2,2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_194.setTransform(40.3,100.9,2,2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_195.setTransform(30.25,100.9,2,2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_196.setTransform(20.15,100.9,2,2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_197.setTransform(10.05,100.9,2,2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_198.setTransform(-0.05,100.9,2,2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_199.setTransform(-10.1,100.9,2,2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_200.setTransform(-20.2,100.9,2,2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_201.setTransform(-181.7,100.9,2,2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_202.setTransform(-191.8,100.9,2,2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_203.setTransform(-201.9,100.9,2,2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_204.setTransform(-211.95,100.9,2,2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_205.setTransform(-222.05,100.9,2,2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_206.setTransform(-232.15,100.9,2,2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_207.setTransform(-242.25,100.9,2,2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_208.setTransform(-252.3,100.9,2,2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_209.setTransform(-262.4,100.9,2,2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_210.setTransform(-272.5,100.9,2,2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_211.setTransform(393.55,90.8,2,2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_212.setTransform(363.3,90.8,2,2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_213.setTransform(353.2,90.8,2,2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_214.setTransform(343.1,90.8,2,2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_215.setTransform(333,90.8,2,2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_216.setTransform(90.8,90.8,2,2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_217.setTransform(60.5,90.8,2,2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_218.setTransform(50.4,90.8,2,2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_219.setTransform(40.3,90.8,2,2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_220.setTransform(30.25,90.8,2,2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_221.setTransform(20.15,90.8,2,2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_222.setTransform(10.05,90.8,2,2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_223.setTransform(-0.05,90.8,2,2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_224.setTransform(-10.1,90.8,2,2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_225.setTransform(-20.2,90.8,2,2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_226.setTransform(-181.7,90.8,2,2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_227.setTransform(-191.8,90.8,2,2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_228.setTransform(-201.9,90.8,2,2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_229.setTransform(-211.95,90.8,2,2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_230.setTransform(-222.05,90.8,2,2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_231.setTransform(-232.15,90.8,2,2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_232.setTransform(-242.25,90.8,2,2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_233.setTransform(-252.3,90.8,2,2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_234.setTransform(-262.4,90.8,2,2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_235.setTransform(-272.5,90.8,2,2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_236.setTransform(-282.6,90.8,2,2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_237.setTransform(-292.7,90.8,2,2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_238.setTransform(60.5,80.7,2,2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_239.setTransform(50.4,80.7,2,2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_240.setTransform(40.3,80.7,2,2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_241.setTransform(30.25,80.7,2,2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_242.setTransform(20.15,80.7,2,2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_243.setTransform(10.05,80.7,2,2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_244.setTransform(-0.05,80.7,2,2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_245.setTransform(-10.1,80.7,2,2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_246.setTransform(-20.2,80.7,2,2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_247.setTransform(-171.6,80.7,2,2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_248.setTransform(-181.7,80.7,2,2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_249.setTransform(-191.8,80.7,2,2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_250.setTransform(-201.9,80.7,2,2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_251.setTransform(-211.95,80.7,2,2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_252.setTransform(-222.05,80.7,2,2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_253.setTransform(-232.15,80.7,2,2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_254.setTransform(-242.25,80.7,2,2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_255.setTransform(-252.3,80.7,2,2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_256.setTransform(-262.4,80.7,2,2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_257.setTransform(-272.5,80.7,2,2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_258.setTransform(-282.6,80.7,2,2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_259.setTransform(-292.7,80.7,2,2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_260.setTransform(413.7,70.6,2,2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_261.setTransform(403.65,70.6,2,2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_262.setTransform(383.45,70.6,2,2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_263.setTransform(343.1,70.6,2,2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_264.setTransform(333,70.6,2,2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_265.setTransform(322.9,70.6,2,2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_266.setTransform(312.8,70.6,2,2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_267.setTransform(302.7,70.6,2,2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_268.setTransform(60.5,70.6,2,2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_269.setTransform(50.4,70.6,2,2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_270.setTransform(40.3,70.6,2,2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_271.setTransform(30.25,70.6,2,2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_272.setTransform(20.15,70.6,2,2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_273.setTransform(10.05,70.6,2,2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_274.setTransform(-0.05,70.6,2,2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_275.setTransform(-10.1,70.6,2,2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_276.setTransform(-20.2,70.6,2,2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_277.setTransform(-171.6,70.6,2,2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_278.setTransform(-181.7,70.6,2,2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_279.setTransform(-191.8,70.6,2,2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_280.setTransform(-201.9,70.6,2,2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_281.setTransform(-211.95,70.6,2,2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_282.setTransform(-222.05,70.6,2,2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_283.setTransform(-232.15,70.6,2,2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_284.setTransform(-242.25,70.6,2,2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_285.setTransform(-252.3,70.6,2,2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_286.setTransform(-262.4,70.6,2,2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_287.setTransform(-272.5,70.6,2,2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_288.setTransform(-282.6,70.6,2,2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_289.setTransform(-292.7,70.6,2,2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_290.setTransform(-302.8,70.6,2,2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_291.setTransform(433.9,60.5,2,2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_292.setTransform(413.7,60.5,2,2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_293.setTransform(403.65,60.5,2,2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_294.setTransform(393.55,60.5,2,2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_295.setTransform(383.45,60.5,2,2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_296.setTransform(363.3,60.5,2,2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_297.setTransform(292.6,60.5,2,2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_298.setTransform(282.55,60.5,2,2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_299.setTransform(272.45,60.5,2,2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_300.setTransform(60.5,60.5,2,2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_301.setTransform(50.4,60.5,2,2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_302.setTransform(40.3,60.5,2,2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_303.setTransform(30.25,60.5,2,2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_304.setTransform(20.15,60.5,2,2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_305.setTransform(10.05,60.5,2,2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_306.setTransform(-0.05,60.5,2,2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_307.setTransform(-10.1,60.5,2,2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_308.setTransform(-20.2,60.5,2,2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_309.setTransform(-171.6,60.5,2,2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_310.setTransform(-181.7,60.5,2,2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_311.setTransform(-191.8,60.5,2,2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_312.setTransform(-201.9,60.5,2,2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_313.setTransform(-211.95,60.5,2,2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_314.setTransform(-222.05,60.5,2,2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_315.setTransform(-232.15,60.5,2,2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_316.setTransform(-242.25,60.5,2,2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_317.setTransform(-252.3,60.5,2,2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_318.setTransform(-262.4,60.5,2,2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_319.setTransform(-272.5,60.5,2,2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_320.setTransform(-282.6,60.5,2,2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_321.setTransform(-292.7,60.5,2,2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_322.setTransform(-302.8,60.5,2,2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_323.setTransform(423.8,50.4,2,2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_324.setTransform(393.55,50.4,2,2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_325.setTransform(383.45,50.4,2,2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_326.setTransform(373.4,50.4,2,2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_327.setTransform(363.3,50.4,2,2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_328.setTransform(353.2,50.4,2,2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_329.setTransform(343.1,50.4,2,2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_330.setTransform(322.9,50.4,2,2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_331.setTransform(302.7,50.4,2,2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_332.setTransform(292.6,50.4,2,2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_333.setTransform(282.55,50.4,2,2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_334.setTransform(272.45,50.4,2,2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_335.setTransform(262.35,50.4,2,2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_336.setTransform(70.6,50.4,2,2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_337.setTransform(60.5,50.4,2,2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_338.setTransform(50.4,50.4,2,2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_339.setTransform(40.3,50.4,2,2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_340.setTransform(30.25,50.4,2,2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_341.setTransform(20.15,50.4,2,2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_342.setTransform(10.05,50.4,2,2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_343.setTransform(-0.05,50.4,2,2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_344.setTransform(-10.1,50.4,2,2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_345.setTransform(-20.2,50.4,2,2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_346.setTransform(-181.7,50.4,2,2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_347.setTransform(-191.8,50.4,2,2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_348.setTransform(-201.9,50.4,2,2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_349.setTransform(-211.95,50.4,2,2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_350.setTransform(-222.05,50.4,2,2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_351.setTransform(-232.15,50.4,2,2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_352.setTransform(-242.25,50.4,2,2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_353.setTransform(-252.3,50.4,2,2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_354.setTransform(-262.4,50.4,2,2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_355.setTransform(-272.5,50.4,2,2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_356.setTransform(-282.6,50.4,2,2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_357.setTransform(-292.7,50.4,2,2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_358.setTransform(-302.8,50.4,2,2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_359.setTransform(353.2,40.3,2,2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_360.setTransform(343.1,40.3,2,2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_361.setTransform(333,40.3,2,2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_362.setTransform(322.9,40.3,2,2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_363.setTransform(312.8,40.3,2,2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_364.setTransform(302.7,40.3,2,2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_365.setTransform(292.6,40.3,2,2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_366.setTransform(272.45,40.3,2,2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_367.setTransform(262.35,40.3,2,2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_368.setTransform(80.7,40.3,2,2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_369.setTransform(70.6,40.3,2,2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_370.setTransform(60.5,40.3,2,2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_371.setTransform(50.4,40.3,2,2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_372.setTransform(40.3,40.3,2,2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_373.setTransform(30.25,40.3,2,2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_374.setTransform(20.15,40.3,2,2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_375.setTransform(10.05,40.3,2,2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_376.setTransform(-0.05,40.3,2,2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_377.setTransform(-10.1,40.3,2,2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_378.setTransform(-20.2,40.3,2,2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_379.setTransform(-211.95,40.3,2,2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_380.setTransform(-222.05,40.3,2,2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_381.setTransform(-232.15,40.3,2,2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_382.setTransform(-242.25,40.3,2,2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_383.setTransform(-252.3,40.3,2,2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_384.setTransform(-262.4,40.3,2,2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_385.setTransform(-272.5,40.3,2,2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_386.setTransform(-282.6,40.3,2,2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_387.setTransform(-292.7,40.3,2,2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_388.setTransform(-302.8,40.3,2,2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_389.setTransform(312.8,30.25,2,2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_390.setTransform(302.7,30.25,2,2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_391.setTransform(292.6,30.25,2,2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_392.setTransform(262.35,30.25,2,2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_393.setTransform(252.25,30.25,2,2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_394.setTransform(80.7,30.25,2,2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_395.setTransform(70.6,30.25,2,2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_396.setTransform(60.5,30.25,2,2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_397.setTransform(50.4,30.25,2,2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_398.setTransform(40.3,30.25,2,2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_399.setTransform(30.25,30.25,2,2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_400.setTransform(20.15,30.25,2,2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_401.setTransform(10.05,30.25,2,2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_402.setTransform(-0.05,30.25,2,2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_403.setTransform(-10.1,30.25,2,2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_404.setTransform(-20.2,30.25,2,2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_405.setTransform(-30.3,30.25,2,2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_406.setTransform(-222.05,30.25,2,2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_407.setTransform(-232.15,30.25,2,2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_408.setTransform(-242.25,30.25,2,2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_409.setTransform(-252.3,30.25,2,2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_410.setTransform(-262.4,30.25,2,2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_411.setTransform(-272.5,30.25,2,2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_412.setTransform(-282.6,30.25,2,2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_413.setTransform(-292.7,30.25,2,2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_414.setTransform(-302.8,30.25,2,2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_415.setTransform(312.8,20.15,2,2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_416.setTransform(262.35,20.15,2,2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_417.setTransform(252.25,20.15,2,2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_418.setTransform(90.8,20.15,2,2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_419.setTransform(80.7,20.15,2,2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_420.setTransform(70.6,20.15,2,2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_421.setTransform(60.5,20.15,2,2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_422.setTransform(50.4,20.15,2,2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_423.setTransform(40.3,20.15,2,2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_424.setTransform(30.25,20.15,2,2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_425.setTransform(20.15,20.15,2,2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_426.setTransform(10.05,20.15,2,2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_427.setTransform(-0.05,20.15,2,2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_428.setTransform(-10.1,20.15,2,2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_429.setTransform(-20.2,20.15,2,2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_430.setTransform(-30.3,20.15,2,2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_431.setTransform(-40.4,20.15,2,2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_432.setTransform(-70.7,20.15,2,2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_433.setTransform(-80.8,20.15,2,2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_434.setTransform(-90.85,20.15,2,2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_435.setTransform(-232.15,20.15,2,2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_436.setTransform(-242.25,20.15,2,2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_437.setTransform(-252.3,20.15,2,2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_438.setTransform(-262.4,20.15,2,2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_439.setTransform(-272.5,20.15,2,2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_440.setTransform(-282.6,20.15,2,2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_441.setTransform(-292.7,20.15,2,2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_442.setTransform(333,10.05,2,2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_443.setTransform(312.8,10.05,2,2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_444.setTransform(252.25,10.05,2,2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_445.setTransform(191.7,10.05,2,2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_446.setTransform(181.6,10.05,2,2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_447.setTransform(100.9,10.05,2,2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_448.setTransform(90.8,10.05,2,2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_449.setTransform(80.7,10.05,2,2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_450.setTransform(70.6,10.05,2,2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_451.setTransform(60.5,10.05,2,2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_452.setTransform(50.4,10.05,2,2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_453.setTransform(40.3,10.05,2,2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_454.setTransform(30.25,10.05,2,2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_455.setTransform(20.15,10.05,2,2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_456.setTransform(10.05,10.05,2,2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_457.setTransform(-0.05,10.05,2,2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_458.setTransform(-10.1,10.05,2,2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_459.setTransform(-20.2,10.05,2,2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_460.setTransform(-30.3,10.05,2,2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_461.setTransform(-40.4,10.05,2,2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_462.setTransform(-50.5,10.05,2,2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_463.setTransform(-60.6,10.05,2,2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_464.setTransform(-70.7,10.05,2,2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_465.setTransform(-80.8,10.05,2,2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_466.setTransform(-90.85,10.05,2,2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_467.setTransform(-252.3,10.05,2,2);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_468.setTransform(-262.4,10.05,2,2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_469.setTransform(-272.5,10.05,2,2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_470.setTransform(-282.6,10.05,2,2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_471.setTransform(-292.7,10.05,2,2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_472.setTransform(-302.8,10.05,2,2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_473.setTransform(-312.9,10.05,2,2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_474.setTransform(333,-0.05,2,2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_475.setTransform(322.9,-0.05,2,2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_476.setTransform(282.55,-0.05,2,2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_477.setTransform(272.45,-0.05,2,2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_478.setTransform(252.25,-0.05,2,2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_479.setTransform(191.7,-0.05,2,2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_480.setTransform(181.6,-0.05,2,2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_481.setTransform(100.9,-0.05,2,2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_482.setTransform(90.8,-0.05,2,2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_483.setTransform(80.7,-0.05,2,2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_484.setTransform(70.6,-0.05,2,2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_485.setTransform(60.5,-0.05,2,2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_486.setTransform(50.4,-0.05,2,2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_487.setTransform(40.3,-0.05,2,2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_488.setTransform(30.25,-0.05,2,2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_489.setTransform(20.15,-0.05,2,2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_490.setTransform(10.05,-0.05,2,2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_491.setTransform(-0.05,-0.05,2,2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_492.setTransform(-10.1,-0.05,2,2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_493.setTransform(-20.2,-0.05,2,2);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_494.setTransform(-30.3,-0.05,2,2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_495.setTransform(-40.4,-0.05,2,2);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_496.setTransform(-50.5,-0.05,2,2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_497.setTransform(-60.6,-0.05,2,2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_498.setTransform(-70.7,-0.05,2,2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_499.setTransform(-80.8,-0.05,2,2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_500.setTransform(-90.85,-0.05,2,2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_501.setTransform(-100.95,-0.05,2,2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_502.setTransform(-282.6,-0.05,2,2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_503.setTransform(-323,-0.05,2,2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_504.setTransform(322.9,-10.1,2,2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_505.setTransform(282.55,-10.1,2,2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_506.setTransform(272.45,-10.1,2,2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_507.setTransform(262.35,-10.1,2,2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_508.setTransform(252.25,-10.1,2,2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_509.setTransform(191.7,-10.1,2,2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_510.setTransform(181.6,-10.1,2,2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_511.setTransform(90.8,-10.1,2,2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_512.setTransform(80.7,-10.1,2,2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_513.setTransform(70.6,-10.1,2,2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_514.setTransform(60.5,-10.1,2,2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_515.setTransform(50.4,-10.1,2,2);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_516.setTransform(40.3,-10.1,2,2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_517.setTransform(30.25,-10.1,2,2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_518.setTransform(20.15,-10.1,2,2);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_519.setTransform(10.05,-10.1,2,2);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_520.setTransform(-0.05,-10.1,2,2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_521.setTransform(-10.1,-10.1,2,2);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_522.setTransform(-20.2,-10.1,2,2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_523.setTransform(-30.3,-10.1,2,2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_524.setTransform(-40.4,-10.1,2,2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_525.setTransform(-50.5,-10.1,2,2);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_526.setTransform(-60.6,-10.1,2,2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_527.setTransform(-70.7,-10.1,2,2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_528.setTransform(-80.8,-10.1,2,2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_529.setTransform(-90.85,-10.1,2,2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_530.setTransform(-100.95,-10.1,2,2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_531.setTransform(-323,-10.1,2,2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_532.setTransform(-333.1,-10.1,2,2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_533.setTransform(-343.15,-10.1,2,2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_534.setTransform(322.9,-20.2,2,2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_535.setTransform(272.45,-20.2,2,2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_536.setTransform(262.35,-20.2,2,2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_537.setTransform(252.25,-20.2,2,2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_538.setTransform(242.2,-20.2,2,2);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_539.setTransform(191.7,-20.2,2,2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_540.setTransform(181.6,-20.2,2,2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_541.setTransform(171.5,-20.2,2,2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_542.setTransform(111,-20.2,2,2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_543.setTransform(100.9,-20.2,2,2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_544.setTransform(90.8,-20.2,2,2);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_545.setTransform(80.7,-20.2,2,2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_546.setTransform(60.5,-20.2,2,2);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_547.setTransform(50.4,-20.2,2,2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_548.setTransform(40.3,-20.2,2,2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_549.setTransform(30.25,-20.2,2,2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_550.setTransform(20.15,-20.2,2,2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_551.setTransform(10.05,-20.2,2,2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_552.setTransform(-0.05,-20.2,2,2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_553.setTransform(-10.1,-20.2,2,2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_554.setTransform(-20.2,-20.2,2,2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_555.setTransform(-30.3,-20.2,2,2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_556.setTransform(-40.4,-20.2,2,2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_557.setTransform(-50.5,-20.2,2,2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_558.setTransform(-60.6,-20.2,2,2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_559.setTransform(-70.7,-20.2,2,2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_560.setTransform(-80.8,-20.2,2,2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_561.setTransform(-90.85,-20.2,2,2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_562.setTransform(-100.95,-20.2,2,2);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_563.setTransform(-333.1,-20.2,2,2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_564.setTransform(-343.15,-20.2,2,2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_565.setTransform(-353.25,-20.2,2,2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_566.setTransform(-363.35,-20.2,2,2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_567.setTransform(-373.45,-20.2,2,2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_568.setTransform(282.55,-30.3,2,2);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_569.setTransform(272.45,-30.3,2,2);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_570.setTransform(262.35,-30.3,2,2);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_571.setTransform(252.25,-30.3,2,2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_572.setTransform(242.2,-30.3,2,2);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_573.setTransform(232.1,-30.3,2,2);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_574.setTransform(201.8,-30.3,2,2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_575.setTransform(191.7,-30.3,2,2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_576.setTransform(181.6,-30.3,2,2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_577.setTransform(171.5,-30.3,2,2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_578.setTransform(121.1,-30.3,2,2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_579.setTransform(111,-30.3,2,2);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_580.setTransform(100.9,-30.3,2,2);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_581.setTransform(90.8,-30.3,2,2);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_582.setTransform(80.7,-30.3,2,2);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_583.setTransform(70.6,-30.3,2,2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_584.setTransform(50.4,-30.3,2,2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_585.setTransform(40.3,-30.3,2,2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_586.setTransform(30.25,-30.3,2,2);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_587.setTransform(20.15,-30.3,2,2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_588.setTransform(10.05,-30.3,2,2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_589.setTransform(-0.05,-30.3,2,2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_590.setTransform(-10.1,-30.3,2,2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_591.setTransform(-20.2,-30.3,2,2);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_592.setTransform(-30.3,-30.3,2,2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_593.setTransform(-40.4,-30.3,2,2);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_594.setTransform(-50.5,-30.3,2,2);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_595.setTransform(-60.6,-30.3,2,2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_596.setTransform(-70.7,-30.3,2,2);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_597.setTransform(-80.8,-30.3,2,2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_598.setTransform(-90.85,-30.3,2,2);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_599.setTransform(-100.95,-30.3,2,2);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_600.setTransform(-272.5,-30.3,2,2);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_601.setTransform(-282.6,-30.3,2,2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_602.setTransform(-292.7,-30.3,2,2);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_603.setTransform(-333.1,-30.3,2,2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_604.setTransform(-353.25,-30.3,2,2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_605.setTransform(-363.35,-30.3,2,2);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_606.setTransform(-373.45,-30.3,2,2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_607.setTransform(-383.5,-30.3,2,2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_608.setTransform(292.6,-40.4,2,2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_609.setTransform(282.55,-40.4,2,2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_610.setTransform(272.45,-40.4,2,2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_611.setTransform(262.35,-40.4,2,2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_612.setTransform(252.25,-40.4,2,2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_613.setTransform(242.2,-40.4,2,2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_614.setTransform(232.1,-40.4,2,2);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_615.setTransform(222,-40.4,2,2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_616.setTransform(211.9,-40.4,2,2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_617.setTransform(201.8,-40.4,2,2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_618.setTransform(191.7,-40.4,2,2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_619.setTransform(181.6,-40.4,2,2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_620.setTransform(171.5,-40.4,2,2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_621.setTransform(161.45,-40.4,2,2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_622.setTransform(121.1,-40.4,2,2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_623.setTransform(111,-40.4,2,2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_624.setTransform(100.9,-40.4,2,2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_625.setTransform(90.8,-40.4,2,2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_626.setTransform(80.7,-40.4,2,2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_627.setTransform(70.6,-40.4,2,2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_628.setTransform(50.4,-40.4,2,2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_629.setTransform(40.3,-40.4,2,2);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_630.setTransform(30.25,-40.4,2,2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_631.setTransform(20.15,-40.4,2,2);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_632.setTransform(10.05,-40.4,2,2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_633.setTransform(-0.05,-40.4,2,2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_634.setTransform(-10.1,-40.4,2,2);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_635.setTransform(-20.2,-40.4,2,2);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_636.setTransform(-30.3,-40.4,2,2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_637.setTransform(-40.4,-40.4,2,2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_638.setTransform(-50.5,-40.4,2,2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_639.setTransform(-60.6,-40.4,2,2);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_640.setTransform(-70.7,-40.4,2,2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_641.setTransform(-80.8,-40.4,2,2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_642.setTransform(-90.85,-40.4,2,2);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_643.setTransform(-100.95,-40.4,2,2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_644.setTransform(-302.8,-40.4,2,2);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_645.setTransform(-312.9,-40.4,2,2);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_646.setTransform(-363.35,-40.4,2,2);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_647.setTransform(-373.45,-40.4,2,2);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_648.setTransform(-383.5,-40.4,2,2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_649.setTransform(-393.6,-40.4,2,2);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_650.setTransform(302.7,-50.5,2,2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_651.setTransform(292.6,-50.5,2,2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_652.setTransform(282.55,-50.5,2,2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_653.setTransform(272.45,-50.5,2,2);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_654.setTransform(262.35,-50.5,2,2);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_655.setTransform(252.25,-50.5,2,2);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_656.setTransform(242.2,-50.5,2,2);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_657.setTransform(232.1,-50.5,2,2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_658.setTransform(222,-50.5,2,2);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_659.setTransform(211.9,-50.5,2,2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_660.setTransform(201.8,-50.5,2,2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_661.setTransform(191.7,-50.5,2,2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_662.setTransform(181.6,-50.5,2,2);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_663.setTransform(171.5,-50.5,2,2);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_664.setTransform(161.45,-50.5,2,2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_665.setTransform(151.35,-50.5,2,2);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_666.setTransform(90.8,-50.5,2,2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_667.setTransform(80.7,-50.5,2,2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_668.setTransform(70.6,-50.5,2,2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_669.setTransform(60.5,-50.5,2,2);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_670.setTransform(40.3,-50.5,2,2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_671.setTransform(30.25,-50.5,2,2);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_672.setTransform(20.15,-50.5,2,2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_673.setTransform(10.05,-50.5,2,2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_674.setTransform(-0.05,-50.5,2,2);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_675.setTransform(-10.1,-50.5,2,2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_676.setTransform(-20.2,-50.5,2,2);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_677.setTransform(-30.3,-50.5,2,2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_678.setTransform(-40.4,-50.5,2,2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_679.setTransform(-50.5,-50.5,2,2);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_680.setTransform(-60.6,-50.5,2,2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_681.setTransform(-70.7,-50.5,2,2);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_682.setTransform(-80.8,-50.5,2,2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_683.setTransform(-90.85,-50.5,2,2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_684.setTransform(-100.95,-50.5,2,2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_685.setTransform(-302.8,-50.5,2,2);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_686.setTransform(-353.25,-50.5,2,2);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_687.setTransform(-363.35,-50.5,2,2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_688.setTransform(-373.45,-50.5,2,2);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_689.setTransform(-383.5,-50.5,2,2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_690.setTransform(-393.6,-50.5,2,2);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_691.setTransform(312.8,-60.6,2,2);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_692.setTransform(302.7,-60.6,2,2);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_693.setTransform(292.6,-60.6,2,2);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_694.setTransform(282.55,-60.6,2,2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_695.setTransform(272.45,-60.6,2,2);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_696.setTransform(262.35,-60.6,2,2);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_697.setTransform(252.25,-60.6,2,2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_698.setTransform(242.2,-60.6,2,2);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_699.setTransform(232.1,-60.6,2,2);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_700.setTransform(222,-60.6,2,2);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_701.setTransform(211.9,-60.6,2,2);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_702.setTransform(201.8,-60.6,2,2);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_703.setTransform(191.7,-60.6,2,2);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_704.setTransform(181.6,-60.6,2,2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_705.setTransform(171.5,-60.6,2,2);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_706.setTransform(161.45,-60.6,2,2);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_707.setTransform(151.35,-60.6,2,2);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_708.setTransform(141.25,-60.6,2,2);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_709.setTransform(131.15,-60.6,2,2);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_710.setTransform(121.1,-60.6,2,2);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_711.setTransform(90.8,-60.6,2,2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_712.setTransform(80.7,-60.6,2,2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_713.setTransform(70.6,-60.6,2,2);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_714.setTransform(60.5,-60.6,2,2);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_715.setTransform(40.3,-60.6,2,2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_716.setTransform(30.25,-60.6,2,2);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_717.setTransform(20.15,-60.6,2,2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_718.setTransform(10.05,-60.6,2,2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_719.setTransform(-0.05,-60.6,2,2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_720.setTransform(-10.1,-60.6,2,2);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_721.setTransform(-20.2,-60.6,2,2);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_722.setTransform(-30.3,-60.6,2,2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_723.setTransform(-40.4,-60.6,2,2);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_724.setTransform(-50.5,-60.6,2,2);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_725.setTransform(-60.6,-60.6,2,2);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_726.setTransform(-70.7,-60.6,2,2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_727.setTransform(-80.8,-60.6,2,2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_728.setTransform(-90.85,-60.6,2,2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_729.setTransform(-302.8,-60.6,2,2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_730.setTransform(-353.25,-60.6,2,2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_731.setTransform(-363.35,-60.6,2,2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_732.setTransform(-373.45,-60.6,2,2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_733.setTransform(-383.5,-60.6,2,2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_734.setTransform(-393.6,-60.6,2,2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_735.setTransform(-403.7,-60.6,2,2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_736.setTransform(312.8,-70.7,2,2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_737.setTransform(302.7,-70.7,2,2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_738.setTransform(292.6,-70.7,2,2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_739.setTransform(282.55,-70.7,2,2);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_740.setTransform(272.45,-70.7,2,2);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_741.setTransform(262.35,-70.7,2,2);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_742.setTransform(252.25,-70.7,2,2);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_743.setTransform(242.2,-70.7,2,2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_744.setTransform(232.1,-70.7,2,2);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_745.setTransform(222,-70.7,2,2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_746.setTransform(211.9,-70.7,2,2);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_747.setTransform(201.8,-70.7,2,2);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_748.setTransform(191.7,-70.7,2,2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_749.setTransform(181.6,-70.7,2,2);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_750.setTransform(171.5,-70.7,2,2);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_751.setTransform(161.45,-70.7,2,2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_752.setTransform(151.35,-70.7,2,2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_753.setTransform(141.25,-70.7,2,2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_754.setTransform(131.15,-70.7,2,2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_755.setTransform(121.1,-70.7,2,2);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_756.setTransform(111,-70.7,2,2);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_757.setTransform(100.9,-70.7,2,2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_758.setTransform(90.8,-70.7,2,2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_759.setTransform(80.7,-70.7,2,2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_760.setTransform(70.6,-70.7,2,2);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_761.setTransform(60.5,-70.7,2,2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_762.setTransform(50.4,-70.7,2,2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_763.setTransform(40.3,-70.7,2,2);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_764.setTransform(30.25,-70.7,2,2);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_765.setTransform(20.15,-70.7,2,2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_766.setTransform(10.05,-70.7,2,2);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_767.setTransform(-0.05,-70.7,2,2);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_768.setTransform(-10.1,-70.7,2,2);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_769.setTransform(-20.2,-70.7,2,2);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_770.setTransform(-30.3,-70.7,2,2);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_771.setTransform(-40.4,-70.7,2,2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_772.setTransform(-50.5,-70.7,2,2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_773.setTransform(-60.6,-70.7,2,2);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_774.setTransform(-70.7,-70.7,2,2);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_775.setTransform(-80.8,-70.7,2,2);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_776.setTransform(-302.8,-70.7,2,2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_777.setTransform(-312.9,-70.7,2,2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_778.setTransform(-323,-70.7,2,2);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_779.setTransform(-333.1,-70.7,2,2);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_780.setTransform(-343.15,-70.7,2,2);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_781.setTransform(-353.25,-70.7,2,2);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_782.setTransform(-363.35,-70.7,2,2);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_783.setTransform(-373.45,-70.7,2,2);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_784.setTransform(-383.5,-70.7,2,2);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_785.setTransform(-393.6,-70.7,2,2);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_786.setTransform(-403.7,-70.7,2,2);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_787.setTransform(343.1,-80.8,2,2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_788.setTransform(333,-80.8,2,2);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_789.setTransform(302.7,-80.8,2,2);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_790.setTransform(292.6,-80.8,2,2);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_791.setTransform(282.55,-80.8,2,2);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_792.setTransform(272.45,-80.8,2,2);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_793.setTransform(262.35,-80.8,2,2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_794.setTransform(252.25,-80.8,2,2);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_795.setTransform(242.2,-80.8,2,2);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_796.setTransform(232.1,-80.8,2,2);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_797.setTransform(222,-80.8,2,2);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_798.setTransform(211.9,-80.8,2,2);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_799.setTransform(201.8,-80.8,2,2);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_800.setTransform(191.7,-80.8,2,2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_801.setTransform(181.6,-80.8,2,2);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_802.setTransform(171.5,-80.8,2,2);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_803.setTransform(161.45,-80.8,2,2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_804.setTransform(151.35,-80.8,2,2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_805.setTransform(141.25,-80.8,2,2);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_806.setTransform(131.15,-80.8,2,2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_807.setTransform(121.1,-80.8,2,2);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_808.setTransform(111,-80.8,2,2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_809.setTransform(100.9,-80.8,2,2);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_810.setTransform(90.8,-80.8,2,2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_811.setTransform(80.7,-80.8,2,2);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_812.setTransform(70.6,-80.8,2,2);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_813.setTransform(60.5,-80.8,2,2);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_814.setTransform(50.4,-80.8,2,2);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_815.setTransform(-20.2,-80.8,2,2);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_816.setTransform(-30.3,-80.8,2,2);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_817.setTransform(-40.4,-80.8,2,2);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_818.setTransform(-50.5,-80.8,2,2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_819.setTransform(-60.6,-80.8,2,2);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_820.setTransform(-70.7,-80.8,2,2);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_821.setTransform(-292.7,-80.8,2,2);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_822.setTransform(-302.8,-80.8,2,2);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_823.setTransform(-312.9,-80.8,2,2);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_824.setTransform(-323,-80.8,2,2);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_825.setTransform(-333.1,-80.8,2,2);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_826.setTransform(-343.15,-80.8,2,2);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_827.setTransform(-353.25,-80.8,2,2);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_828.setTransform(-363.35,-80.8,2,2);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_829.setTransform(-373.45,-80.8,2,2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_830.setTransform(-383.5,-80.8,2,2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_831.setTransform(-393.6,-80.8,2,2);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_832.setTransform(-403.7,-80.8,2,2);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_833.setTransform(353.2,-90.85,2,2);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_834.setTransform(322.9,-90.85,2,2);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_835.setTransform(302.7,-90.85,2,2);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_836.setTransform(292.6,-90.85,2,2);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_837.setTransform(282.55,-90.85,2,2);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_838.setTransform(272.45,-90.85,2,2);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_839.setTransform(262.35,-90.85,2,2);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_840.setTransform(252.25,-90.85,2,2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_841.setTransform(242.2,-90.85,2,2);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_842.setTransform(232.1,-90.85,2,2);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_843.setTransform(222,-90.85,2,2);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_844.setTransform(211.9,-90.85,2,2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_845.setTransform(201.8,-90.85,2,2);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_846.setTransform(191.7,-90.85,2,2);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_847.setTransform(181.6,-90.85,2,2);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_848.setTransform(171.5,-90.85,2,2);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_849.setTransform(161.45,-90.85,2,2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_850.setTransform(151.35,-90.85,2,2);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_851.setTransform(141.25,-90.85,2,2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_852.setTransform(131.15,-90.85,2,2);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_853.setTransform(121.1,-90.85,2,2);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_854.setTransform(111,-90.85,2,2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_855.setTransform(100.9,-90.85,2,2);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_856.setTransform(90.8,-90.85,2,2);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_857.setTransform(80.7,-90.85,2,2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_858.setTransform(70.6,-90.85,2,2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_859.setTransform(60.5,-90.85,2,2);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_860.setTransform(50.4,-90.85,2,2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_861.setTransform(40.3,-90.85,2,2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_862.setTransform(30.25,-90.85,2,2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_863.setTransform(-30.3,-90.85,2,2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_864.setTransform(-40.4,-90.85,2,2);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_865.setTransform(-50.5,-90.85,2,2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_866.setTransform(-60.6,-90.85,2,2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_867.setTransform(-70.7,-90.85,2,2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_868.setTransform(-282.6,-90.85,2,2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_869.setTransform(-292.7,-90.85,2,2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_870.setTransform(-302.8,-90.85,2,2);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_871.setTransform(-312.9,-90.85,2,2);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_872.setTransform(-323,-90.85,2,2);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_873.setTransform(-333.1,-90.85,2,2);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_874.setTransform(-343.15,-90.85,2,2);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_875.setTransform(-353.25,-90.85,2,2);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_876.setTransform(-363.35,-90.85,2,2);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_877.setTransform(-373.45,-90.85,2,2);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_878.setTransform(-383.5,-90.85,2,2);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_879.setTransform(-393.6,-90.85,2,2);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_880.setTransform(-403.7,-90.85,2,2);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_881.setTransform(-413.8,-90.85,2,2);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_882.setTransform(353.2,-100.95,2,2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_883.setTransform(312.8,-100.95,2,2);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_884.setTransform(302.7,-100.95,2,2);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_885.setTransform(292.6,-100.95,2,2);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_886.setTransform(282.55,-100.95,2,2);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_887.setTransform(272.45,-100.95,2,2);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_888.setTransform(262.35,-100.95,2,2);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_889.setTransform(252.25,-100.95,2,2);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_890.setTransform(242.2,-100.95,2,2);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_891.setTransform(232.1,-100.95,2,2);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_892.setTransform(222,-100.95,2,2);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_893.setTransform(211.9,-100.95,2,2);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_894.setTransform(201.8,-100.95,2,2);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_895.setTransform(191.7,-100.95,2,2);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_896.setTransform(181.6,-100.95,2,2);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_897.setTransform(171.5,-100.95,2,2);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_898.setTransform(161.45,-100.95,2,2);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_899.setTransform(151.35,-100.95,2,2);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_900.setTransform(141.25,-100.95,2,2);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_901.setTransform(131.15,-100.95,2,2);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_902.setTransform(121.1,-100.95,2,2);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_903.setTransform(111,-100.95,2,2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_904.setTransform(80.7,-100.95,2,2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_905.setTransform(70.6,-100.95,2,2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_906.setTransform(60.5,-100.95,2,2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_907.setTransform(50.4,-100.95,2,2);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_908.setTransform(40.3,-100.95,2,2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_909.setTransform(30.25,-100.95,2,2);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_910.setTransform(10.05,-100.95,2,2);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_911.setTransform(-60.6,-100.95,2,2);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_912.setTransform(-70.7,-100.95,2,2);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_913.setTransform(-80.8,-100.95,2,2);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_914.setTransform(-272.5,-100.95,2,2);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_915.setTransform(-282.6,-100.95,2,2);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_916.setTransform(-292.7,-100.95,2,2);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_917.setTransform(-302.8,-100.95,2,2);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_918.setTransform(-312.9,-100.95,2,2);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_919.setTransform(-323,-100.95,2,2);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_920.setTransform(-333.1,-100.95,2,2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_921.setTransform(-343.15,-100.95,2,2);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_922.setTransform(-353.25,-100.95,2,2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_923.setTransform(-363.35,-100.95,2,2);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_924.setTransform(-373.45,-100.95,2,2);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_925.setTransform(-383.5,-100.95,2,2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_926.setTransform(-393.6,-100.95,2,2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_927.setTransform(-403.7,-100.95,2,2);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_928.setTransform(-413.8,-100.95,2,2);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_929.setTransform(353.2,-111.05,2,2);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_930.setTransform(312.8,-111.05,2,2);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_931.setTransform(302.7,-111.05,2,2);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_932.setTransform(292.6,-111.05,2,2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_933.setTransform(282.55,-111.05,2,2);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_934.setTransform(272.45,-111.05,2,2);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_935.setTransform(262.35,-111.05,2,2);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_936.setTransform(252.25,-111.05,2,2);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_937.setTransform(242.2,-111.05,2,2);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_938.setTransform(232.1,-111.05,2,2);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_939.setTransform(222,-111.05,2,2);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_940.setTransform(211.9,-111.05,2,2);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_941.setTransform(201.8,-111.05,2,2);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_942.setTransform(191.7,-111.05,2,2);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_943.setTransform(181.6,-111.05,2,2);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_944.setTransform(171.5,-111.05,2,2);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_945.setTransform(161.45,-111.05,2,2);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_946.setTransform(151.35,-111.05,2,2);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_947.setTransform(141.25,-111.05,2,2);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_948.setTransform(131.15,-111.05,2,2);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_949.setTransform(121.1,-111.05,2,2);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_950.setTransform(111,-111.05,2,2);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_951.setTransform(100.9,-111.05,2,2);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_952.setTransform(80.7,-111.05,2,2);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_953.setTransform(70.6,-111.05,2,2);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_954.setTransform(20.15,-111.05,2,2);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_955.setTransform(10.05,-111.05,2,2);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_956.setTransform(-0.05,-111.05,2,2);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_957.setTransform(-10.1,-111.05,2,2);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_958.setTransform(-50.5,-111.05,2,2);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_959.setTransform(-60.6,-111.05,2,2);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_960.setTransform(-70.7,-111.05,2,2);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_961.setTransform(-80.8,-111.05,2,2);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_962.setTransform(-262.4,-111.05,2,2);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_963.setTransform(-272.5,-111.05,2,2);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_964.setTransform(-282.6,-111.05,2,2);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_965.setTransform(-292.7,-111.05,2,2);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_966.setTransform(-302.8,-111.05,2,2);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_967.setTransform(-312.9,-111.05,2,2);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_968.setTransform(-323,-111.05,2,2);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_969.setTransform(-333.1,-111.05,2,2);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_970.setTransform(-343.15,-111.05,2,2);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_971.setTransform(-353.25,-111.05,2,2);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_972.setTransform(-363.35,-111.05,2,2);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_973.setTransform(-373.45,-111.05,2,2);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_974.setTransform(-383.5,-111.05,2,2);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_975.setTransform(-393.6,-111.05,2,2);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_976.setTransform(-403.7,-111.05,2,2);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_977.setTransform(-413.8,-111.05,2,2);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_978.setTransform(353.2,-121.15,2,2);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_979.setTransform(343.1,-121.15,2,2);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_980.setTransform(322.9,-121.15,2,2);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_981.setTransform(312.8,-121.15,2,2);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_982.setTransform(302.7,-121.15,2,2);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_983.setTransform(292.6,-121.15,2,2);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_984.setTransform(282.55,-121.15,2,2);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_985.setTransform(272.45,-121.15,2,2);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_986.setTransform(262.35,-121.15,2,2);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_987.setTransform(252.25,-121.15,2,2);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_988.setTransform(242.2,-121.15,2,2);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_989.setTransform(232.1,-121.15,2,2);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_990.setTransform(222,-121.15,2,2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_991.setTransform(211.9,-121.15,2,2);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_992.setTransform(201.8,-121.15,2,2);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_993.setTransform(191.7,-121.15,2,2);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_994.setTransform(181.6,-121.15,2,2);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_995.setTransform(171.5,-121.15,2,2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_996.setTransform(161.45,-121.15,2,2);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_997.setTransform(151.35,-121.15,2,2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_998.setTransform(141.25,-121.15,2,2);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_999.setTransform(131.15,-121.15,2,2);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1000.setTransform(121.1,-121.15,2,2);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1001.setTransform(111,-121.15,2,2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1002.setTransform(100.9,-121.15,2,2);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1003.setTransform(70.6,-121.15,2,2);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1004.setTransform(60.5,-121.15,2,2);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1005.setTransform(20.15,-121.15,2,2);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1006.setTransform(10.05,-121.15,2,2);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1007.setTransform(-0.05,-121.15,2,2);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1008.setTransform(-10.1,-121.15,2,2);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1009.setTransform(-20.2,-121.15,2,2);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1010.setTransform(-30.3,-121.15,2,2);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1011.setTransform(-40.4,-121.15,2,2);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1012.setTransform(-50.5,-121.15,2,2);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1013.setTransform(-232.15,-121.15,2,2);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1014.setTransform(-242.25,-121.15,2,2);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1015.setTransform(-252.3,-121.15,2,2);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1016.setTransform(-262.4,-121.15,2,2);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1017.setTransform(-272.5,-121.15,2,2);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1018.setTransform(-282.6,-121.15,2,2);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1019.setTransform(-292.7,-121.15,2,2);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1020.setTransform(-302.8,-121.15,2,2);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1021.setTransform(-312.9,-121.15,2,2);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1022.setTransform(-323,-121.15,2,2);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1023.setTransform(-333.1,-121.15,2,2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1024.setTransform(-343.15,-121.15,2,2);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1025.setTransform(-353.25,-121.15,2,2);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1026.setTransform(-363.35,-121.15,2,2);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1027.setTransform(-373.45,-121.15,2,2);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1028.setTransform(-383.5,-121.15,2,2);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1029.setTransform(-393.6,-121.15,2,2);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1030.setTransform(-403.7,-121.15,2,2);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1031.setTransform(343.1,-131.2,2,2);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1032.setTransform(333,-131.2,2,2);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1033.setTransform(322.9,-131.2,2,2);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1034.setTransform(312.8,-131.2,2,2);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1035.setTransform(302.7,-131.2,2,2);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1036.setTransform(292.6,-131.2,2,2);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1037.setTransform(282.55,-131.2,2,2);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1038.setTransform(272.45,-131.2,2,2);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1039.setTransform(262.35,-131.2,2,2);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1040.setTransform(252.25,-131.2,2,2);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1041.setTransform(242.2,-131.2,2,2);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1042.setTransform(232.1,-131.2,2,2);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1043.setTransform(222,-131.2,2,2);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1044.setTransform(211.9,-131.2,2,2);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1045.setTransform(201.8,-131.2,2,2);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1046.setTransform(191.7,-131.2,2,2);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1047.setTransform(181.6,-131.2,2,2);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1048.setTransform(171.5,-131.2,2,2);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1049.setTransform(161.45,-131.2,2,2);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1050.setTransform(151.35,-131.2,2,2);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1051.setTransform(141.25,-131.2,2,2);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1052.setTransform(131.15,-131.2,2,2);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1053.setTransform(121.1,-131.2,2,2);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1054.setTransform(111,-131.2,2,2);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1055.setTransform(100.9,-131.2,2,2);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1056.setTransform(90.8,-131.2,2,2);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1057.setTransform(80.7,-131.2,2,2);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1058.setTransform(70.6,-131.2,2,2);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1059.setTransform(60.5,-131.2,2,2);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1060.setTransform(50.4,-131.2,2,2);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1061.setTransform(40.3,-131.2,2,2);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1062.setTransform(30.25,-131.2,2,2);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1063.setTransform(20.15,-131.2,2,2);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1064.setTransform(10.05,-131.2,2,2);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1065.setTransform(-0.05,-131.2,2,2);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1066.setTransform(-10.1,-131.2,2,2);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1067.setTransform(-20.2,-131.2,2,2);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1068.setTransform(-30.3,-131.2,2,2);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1069.setTransform(-40.4,-131.2,2,2);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1070.setTransform(-50.5,-131.2,2,2);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1071.setTransform(-60.6,-131.2,2,2);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1072.setTransform(-201.9,-131.2,2,2);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1073.setTransform(-211.95,-131.2,2,2);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1074.setTransform(-232.15,-131.2,2,2);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1075.setTransform(-242.25,-131.2,2,2);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1076.setTransform(-252.3,-131.2,2,2);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1077.setTransform(-262.4,-131.2,2,2);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1078.setTransform(-272.5,-131.2,2,2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1079.setTransform(-282.6,-131.2,2,2);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1080.setTransform(-292.7,-131.2,2,2);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1081.setTransform(-302.8,-131.2,2,2);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1082.setTransform(-312.9,-131.2,2,2);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1083.setTransform(-323,-131.2,2,2);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1084.setTransform(-333.1,-131.2,2,2);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1085.setTransform(-343.15,-131.2,2,2);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1086.setTransform(-353.25,-131.2,2,2);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1087.setTransform(-363.35,-131.2,2,2);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1088.setTransform(-373.45,-131.2,2,2);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1089.setTransform(-383.5,-131.2,2,2);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1090.setTransform(-393.6,-131.2,2,2);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1091.setTransform(-403.7,-131.2,2,2);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1092.setTransform(333,-141.3,2,2);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1093.setTransform(322.9,-141.3,2,2);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1094.setTransform(312.8,-141.3,2,2);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1095.setTransform(302.7,-141.3,2,2);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1096.setTransform(292.6,-141.3,2,2);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1097.setTransform(282.55,-141.3,2,2);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1098.setTransform(272.45,-141.3,2,2);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1099.setTransform(262.35,-141.3,2,2);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1100.setTransform(252.25,-141.3,2,2);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1101.setTransform(242.2,-141.3,2,2);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1102.setTransform(232.1,-141.3,2,2);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1103.setTransform(222,-141.3,2,2);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1104.setTransform(211.9,-141.3,2,2);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1105.setTransform(201.8,-141.3,2,2);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1106.setTransform(191.7,-141.3,2,2);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1107.setTransform(181.6,-141.3,2,2);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1108.setTransform(171.5,-141.3,2,2);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1109.setTransform(161.45,-141.3,2,2);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1110.setTransform(151.35,-141.3,2,2);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1111.setTransform(141.25,-141.3,2,2);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1112.setTransform(131.15,-141.3,2,2);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1113.setTransform(121.1,-141.3,2,2);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1114.setTransform(111,-141.3,2,2);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1115.setTransform(100.9,-141.3,2,2);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1116.setTransform(90.8,-141.3,2,2);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1117.setTransform(80.7,-141.3,2,2);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1118.setTransform(70.6,-141.3,2,2);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1119.setTransform(60.5,-141.3,2,2);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1120.setTransform(50.4,-141.3,2,2);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1121.setTransform(40.3,-141.3,2,2);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1122.setTransform(30.25,-141.3,2,2);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1123.setTransform(20.15,-141.3,2,2);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1124.setTransform(10.05,-141.3,2,2);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1125.setTransform(-0.05,-141.3,2,2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1126.setTransform(-10.1,-141.3,2,2);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1127.setTransform(-20.2,-141.3,2,2);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1128.setTransform(-30.3,-141.3,2,2);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1129.setTransform(-40.4,-141.3,2,2);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1130.setTransform(-50.5,-141.3,2,2);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1131.setTransform(-60.6,-141.3,2,2);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1132.setTransform(-80.8,-141.3,2,2);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1133.setTransform(-201.9,-141.3,2,2);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1134.setTransform(-211.95,-141.3,2,2);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1135.setTransform(-222.05,-141.3,2,2);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1136.setTransform(-232.15,-141.3,2,2);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1137.setTransform(-242.25,-141.3,2,2);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1138.setTransform(-252.3,-141.3,2,2);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1139.setTransform(-262.4,-141.3,2,2);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1140.setTransform(-272.5,-141.3,2,2);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1141.setTransform(-282.6,-141.3,2,2);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1142.setTransform(-292.7,-141.3,2,2);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1143.setTransform(-302.8,-141.3,2,2);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1144.setTransform(-312.9,-141.3,2,2);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1145.setTransform(-323,-141.3,2,2);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1146.setTransform(-333.1,-141.3,2,2);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1147.setTransform(-343.15,-141.3,2,2);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1148.setTransform(-353.25,-141.3,2,2);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1149.setTransform(-363.35,-141.3,2,2);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1150.setTransform(-373.45,-141.3,2,2);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1151.setTransform(-383.5,-141.3,2,2);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1152.setTransform(-393.6,-141.3,2,2);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1153.setTransform(-403.7,-141.3,2,2);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1154.setTransform(373.4,-151.4,2,2);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1155.setTransform(363.3,-151.4,2,2);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1156.setTransform(322.9,-151.4,2,2);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1157.setTransform(312.8,-151.4,2,2);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1158.setTransform(302.7,-151.4,2,2);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1159.setTransform(292.6,-151.4,2,2);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1160.setTransform(282.55,-151.4,2,2);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1161.setTransform(272.45,-151.4,2,2);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1162.setTransform(262.35,-151.4,2,2);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1163.setTransform(252.25,-151.4,2,2);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1164.setTransform(242.2,-151.4,2,2);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1165.setTransform(232.1,-151.4,2,2);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1166.setTransform(222,-151.4,2,2);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1167.setTransform(211.9,-151.4,2,2);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1168.setTransform(201.8,-151.4,2,2);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1169.setTransform(191.7,-151.4,2,2);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1170.setTransform(181.6,-151.4,2,2);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1171.setTransform(171.5,-151.4,2,2);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1172.setTransform(161.45,-151.4,2,2);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1173.setTransform(151.35,-151.4,2,2);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1174.setTransform(141.25,-151.4,2,2);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1175.setTransform(131.15,-151.4,2,2);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1176.setTransform(121.1,-151.4,2,2);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1177.setTransform(111,-151.4,2,2);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1178.setTransform(100.9,-151.4,2,2);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1179.setTransform(90.8,-151.4,2,2);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1180.setTransform(80.7,-151.4,2,2);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1181.setTransform(70.6,-151.4,2,2);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1182.setTransform(60.5,-151.4,2,2);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1183.setTransform(50.4,-151.4,2,2);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1184.setTransform(40.3,-151.4,2,2);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1185.setTransform(30.25,-151.4,2,2);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1186.setTransform(20.15,-151.4,2,2);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1187.setTransform(10.05,-151.4,2,2);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1188.setTransform(-0.05,-151.4,2,2);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1189.setTransform(-10.1,-151.4,2,2);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1190.setTransform(-20.2,-151.4,2,2);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1191.setTransform(-30.3,-151.4,2,2);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1192.setTransform(-60.6,-151.4,2,2);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1193.setTransform(-70.7,-151.4,2,2);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1194.setTransform(-80.8,-151.4,2,2);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1195.setTransform(-201.9,-151.4,2,2);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1196.setTransform(-211.95,-151.4,2,2);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1197.setTransform(-222.05,-151.4,2,2);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1198.setTransform(-232.15,-151.4,2,2);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1199.setTransform(-242.25,-151.4,2,2);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1200.setTransform(-252.3,-151.4,2,2);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1201.setTransform(-262.4,-151.4,2,2);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1202.setTransform(-272.5,-151.4,2,2);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1203.setTransform(-282.6,-151.4,2,2);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1204.setTransform(-292.7,-151.4,2,2);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1205.setTransform(-302.8,-151.4,2,2);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1206.setTransform(-312.9,-151.4,2,2);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1207.setTransform(-323,-151.4,2,2);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1208.setTransform(-333.1,-151.4,2,2);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1209.setTransform(-343.15,-151.4,2,2);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1210.setTransform(-353.25,-151.4,2,2);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1211.setTransform(-363.35,-151.4,2,2);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1212.setTransform(-373.45,-151.4,2,2);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1213.setTransform(-383.5,-151.4,2,2);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1214.setTransform(-393.6,-151.4,2,2);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1215.setTransform(-403.7,-151.4,2,2);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1216.setTransform(363.3,-161.5,2,2);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1217.setTransform(353.2,-161.5,2,2);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1218.setTransform(302.7,-161.5,2,2);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1219.setTransform(292.6,-161.5,2,2);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1220.setTransform(282.55,-161.5,2,2);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1221.setTransform(272.45,-161.5,2,2);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1222.setTransform(262.35,-161.5,2,2);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1223.setTransform(252.25,-161.5,2,2);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1224.setTransform(242.2,-161.5,2,2);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1225.setTransform(232.1,-161.5,2,2);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1226.setTransform(222,-161.5,2,2);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1227.setTransform(211.9,-161.5,2,2);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1228.setTransform(201.8,-161.5,2,2);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1229.setTransform(191.7,-161.5,2,2);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1230.setTransform(181.6,-161.5,2,2);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1231.setTransform(171.5,-161.5,2,2);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1232.setTransform(161.45,-161.5,2,2);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1233.setTransform(151.35,-161.5,2,2);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1234.setTransform(141.25,-161.5,2,2);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1235.setTransform(131.15,-161.5,2,2);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1236.setTransform(121.1,-161.5,2,2);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1237.setTransform(111,-161.5,2,2);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1238.setTransform(100.9,-161.5,2,2);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1239.setTransform(90.8,-161.5,2,2);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1240.setTransform(80.7,-161.5,2,2);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1241.setTransform(70.6,-161.5,2,2);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1242.setTransform(60.5,-161.5,2,2);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1243.setTransform(50.4,-161.5,2,2);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1244.setTransform(40.3,-161.5,2,2);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1245.setTransform(30.25,-161.5,2,2);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1246.setTransform(20.15,-161.5,2,2);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1247.setTransform(10.05,-161.5,2,2);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1248.setTransform(-10.1,-161.5,2,2);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1249.setTransform(-20.2,-161.5,2,2);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1250.setTransform(-60.6,-161.5,2,2);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1251.setTransform(-70.7,-161.5,2,2);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1252.setTransform(-211.95,-161.5,2,2);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1253.setTransform(-222.05,-161.5,2,2);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1254.setTransform(-232.15,-161.5,2,2);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1255.setTransform(-242.25,-161.5,2,2);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1256.setTransform(-292.7,-161.5,2,2);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1257.setTransform(-302.8,-161.5,2,2);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1258.setTransform(-312.9,-161.5,2,2);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1259.setTransform(-323,-161.5,2,2);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1260.setTransform(-333.1,-161.5,2,2);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1261.setTransform(-343.15,-161.5,2,2);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1262.setTransform(-353.25,-161.5,2,2);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1263.setTransform(-363.35,-161.5,2,2);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1264.setTransform(-373.45,-161.5,2,2);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1265.setTransform(-383.5,-161.5,2,2);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1266.setTransform(-393.6,-161.5,2,2);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_1267.setTransform(-403.7,-161.5,2,2);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#999999").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1268.setTransform(-444.1,-161.5,2,2);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1269.setTransform(-454.15,-161.5,2,2);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#999999").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1270.setTransform(-464.15,-161.5,2,2);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1271.setTransform(373.4,-171.6,2,2);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1272.setTransform(363.3,-171.6,2,2);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1273.setTransform(353.2,-171.6,2,2);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1274.setTransform(333,-171.6,2,2);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1275.setTransform(322.9,-171.6,2,2);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1276.setTransform(312.8,-171.6,2,2);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1277.setTransform(302.7,-171.6,2,2);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1278.setTransform(292.6,-171.6,2,2);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1279.setTransform(282.55,-171.6,2,2);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1280.setTransform(272.45,-171.6,2,2);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1281.setTransform(262.35,-171.6,2,2);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1282.setTransform(252.25,-171.6,2,2);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1283.setTransform(242.2,-171.6,2,2);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1284.setTransform(232.1,-171.6,2,2);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1285.setTransform(222,-171.6,2,2);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1286.setTransform(211.9,-171.6,2,2);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1287.setTransform(201.8,-171.6,2,2);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1288.setTransform(191.7,-171.6,2,2);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1289.setTransform(181.6,-171.6,2,2);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1290.setTransform(171.5,-171.6,2,2);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1291.setTransform(161.45,-171.6,2,2);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1292.setTransform(151.35,-171.6,2,2);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1293.setTransform(141.25,-171.6,2,2);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1294.setTransform(131.15,-171.6,2,2);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1295.setTransform(121.1,-171.6,2,2);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1296.setTransform(111,-171.6,2,2);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1297.setTransform(100.9,-171.6,2,2);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1298.setTransform(90.8,-171.6,2,2);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1299.setTransform(80.7,-171.6,2,2);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1300.setTransform(70.6,-171.6,2,2);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1301.setTransform(60.5,-171.6,2,2);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1302.setTransform(50.4,-171.6,2,2);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1303.setTransform(40.3,-171.6,2,2);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1304.setTransform(30.25,-171.6,2,2);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1305.setTransform(20.15,-171.6,2,2);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1306.setTransform(10.05,-171.6,2,2);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1307.setTransform(-10.1,-171.6,2,2);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1308.setTransform(-20.2,-171.6,2,2);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1309.setTransform(-30.3,-171.6,2,2);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1310.setTransform(-222.05,-171.6,2,2);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1311.setTransform(-232.15,-171.6,2,2);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1312.setTransform(-242.25,-171.6,2,2);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1313.setTransform(-292.7,-171.6,2,2);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1314.setTransform(-302.8,-171.6,2,2);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1315.setTransform(-312.9,-171.6,2,2);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1316.setTransform(-323,-171.6,2,2);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1317.setTransform(-333.1,-171.6,2,2);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1318.setTransform(-343.15,-171.6,2,2);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1319.setTransform(-353.25,-171.6,2,2);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1320.setTransform(-363.35,-171.6,2,2);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1321.setTransform(-373.45,-171.6,2,2);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1322.setTransform(-383.5,-171.6,2,2);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1323.setTransform(-393.6,-171.6,2,2);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1324.setTransform(-403.7,-171.6,2,2);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1325.setTransform(-413.8,-171.6,2,2);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1326.setTransform(-423.9,-171.6,2,2);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1327.setTransform(-434,-171.6,2,2);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1328.setTransform(-444.1,-171.6,2,2);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1329.setTransform(-454.15,-171.6,2,2);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1330.setTransform(-464.15,-171.6,2,2);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1331.setTransform(383.45,-181.7,2,2);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1332.setTransform(373.4,-181.7,2,2);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1333.setTransform(363.3,-181.7,2,2);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1334.setTransform(353.2,-181.7,2,2);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1335.setTransform(343.1,-181.7,2,2);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1336.setTransform(333,-181.7,2,2);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1337.setTransform(322.9,-181.7,2,2);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1338.setTransform(312.8,-181.7,2,2);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1339.setTransform(302.7,-181.7,2,2);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1340.setTransform(292.6,-181.7,2,2);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1341.setTransform(282.55,-181.7,2,2);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1342.setTransform(272.45,-181.7,2,2);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1343.setTransform(262.35,-181.7,2,2);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1344.setTransform(252.25,-181.7,2,2);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1345.setTransform(242.2,-181.7,2,2);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1346.setTransform(232.1,-181.7,2,2);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1347.setTransform(222,-181.7,2,2);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1348.setTransform(211.9,-181.7,2,2);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1349.setTransform(201.8,-181.7,2,2);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1350.setTransform(191.7,-181.7,2,2);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1351.setTransform(181.6,-181.7,2,2);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1352.setTransform(171.5,-181.7,2,2);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1353.setTransform(161.45,-181.7,2,2);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1354.setTransform(151.35,-181.7,2,2);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1355.setTransform(141.25,-181.7,2,2);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1356.setTransform(131.15,-181.7,2,2);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1357.setTransform(121.1,-181.7,2,2);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1358.setTransform(111,-181.7,2,2);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1359.setTransform(100.9,-181.7,2,2);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1360.setTransform(90.8,-181.7,2,2);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1361.setTransform(80.7,-181.7,2,2);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1362.setTransform(70.6,-181.7,2,2);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1363.setTransform(60.5,-181.7,2,2);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1364.setTransform(50.4,-181.7,2,2);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1365.setTransform(40.3,-181.7,2,2);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1366.setTransform(30.25,-181.7,2,2);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1367.setTransform(20.15,-181.7,2,2);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1368.setTransform(10.05,-181.7,2,2);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1369.setTransform(-10.1,-181.7,2,2);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1370.setTransform(-20.2,-181.7,2,2);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1371.setTransform(-30.3,-181.7,2,2);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1372.setTransform(-90.85,-181.7,2,2);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1373.setTransform(-100.95,-181.7,2,2);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1374.setTransform(-151.4,-181.7,2,2);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1375.setTransform(-161.5,-181.7,2,2);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1376.setTransform(-211.95,-181.7,2,2);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1377.setTransform(-222.05,-181.7,2,2);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1378.setTransform(-232.15,-181.7,2,2);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1379.setTransform(-272.5,-181.7,2,2);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1380.setTransform(-282.6,-181.7,2,2);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1381.setTransform(-292.7,-181.7,2,2);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1382.setTransform(-302.8,-181.7,2,2);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1383.setTransform(-312.9,-181.7,2,2);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1384.setTransform(-323,-181.7,2,2);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1385.setTransform(-333.1,-181.7,2,2);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1386.setTransform(-343.15,-181.7,2,2);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1387.setTransform(-353.25,-181.7,2,2);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1388.setTransform(-363.35,-181.7,2,2);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1389.setTransform(-373.45,-181.7,2,2);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1390.setTransform(-383.5,-181.7,2,2);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1391.setTransform(-393.6,-181.7,2,2);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1392.setTransform(-403.7,-181.7,2,2);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1393.setTransform(-413.8,-181.7,2,2);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1394.setTransform(-423.9,-181.7,2,2);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1395.setTransform(-434,-181.7,2,2);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1396.setTransform(-444.1,-181.7,2,2);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1397.setTransform(-454.15,-181.7,2,2);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1398.setTransform(-464.15,-181.7,2,2);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1399.setTransform(393.55,-191.8,2,2);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1400.setTransform(383.45,-191.8,2,2);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1401.setTransform(373.4,-191.8,2,2);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1402.setTransform(363.3,-191.8,2,2);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1403.setTransform(353.2,-191.8,2,2);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1404.setTransform(343.1,-191.8,2,2);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1405.setTransform(333,-191.8,2,2);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1406.setTransform(322.9,-191.8,2,2);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1407.setTransform(312.8,-191.8,2,2);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1408.setTransform(302.7,-191.8,2,2);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1409.setTransform(292.6,-191.8,2,2);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1410.setTransform(282.55,-191.8,2,2);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1411.setTransform(272.45,-191.8,2,2);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1412.setTransform(262.35,-191.8,2,2);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1413.setTransform(252.25,-191.8,2,2);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1414.setTransform(242.2,-191.8,2,2);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1415.setTransform(232.1,-191.8,2,2);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1416.setTransform(222,-191.8,2,2);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1417.setTransform(211.9,-191.8,2,2);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1418.setTransform(201.8,-191.8,2,2);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1419.setTransform(191.7,-191.8,2,2);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1420.setTransform(181.6,-191.8,2,2);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1421.setTransform(171.5,-191.8,2,2);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1422.setTransform(161.45,-191.8,2,2);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1423.setTransform(151.35,-191.8,2,2);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1424.setTransform(141.25,-191.8,2,2);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1425.setTransform(131.15,-191.8,2,2);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1426.setTransform(121.1,-191.8,2,2);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1427.setTransform(111,-191.8,2,2);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1428.setTransform(100.9,-191.8,2,2);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1429.setTransform(90.8,-191.8,2,2);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1430.setTransform(80.7,-191.8,2,2);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1431.setTransform(70.6,-191.8,2,2);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1432.setTransform(60.5,-191.8,2,2);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1433.setTransform(50.4,-191.8,2,2);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1434.setTransform(40.3,-191.8,2,2);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1435.setTransform(30.25,-191.8,2,2);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1436.setTransform(20.15,-191.8,2,2);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1437.setTransform(10.05,-191.8,2,2);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1438.setTransform(-0.05,-191.8,2,2);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1439.setTransform(-10.1,-191.8,2,2);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1440.setTransform(-20.2,-191.8,2,2);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1441.setTransform(-80.8,-191.8,2,2);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1442.setTransform(-90.85,-191.8,2,2);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1443.setTransform(-100.95,-191.8,2,2);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1444.setTransform(-131.2,-191.8,2,2);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1445.setTransform(-141.3,-191.8,2,2);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1446.setTransform(-151.4,-191.8,2,2);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1447.setTransform(-161.5,-191.8,2,2);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1448.setTransform(-171.6,-191.8,2,2);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1449.setTransform(-201.9,-191.8,2,2);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1450.setTransform(-211.95,-191.8,2,2);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1451.setTransform(-222.05,-191.8,2,2);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1452.setTransform(-262.4,-191.8,2,2);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1453.setTransform(-272.5,-191.8,2,2);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1454.setTransform(-282.6,-191.8,2,2);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1455.setTransform(-292.7,-191.8,2,2);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1456.setTransform(-302.8,-191.8,2,2);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1457.setTransform(-312.9,-191.8,2,2);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1458.setTransform(-323,-191.8,2,2);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1459.setTransform(-333.1,-191.8,2,2);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1460.setTransform(-343.15,-191.8,2,2);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1461.setTransform(-353.25,-191.8,2,2);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1462.setTransform(-363.35,-191.8,2,2);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1463.setTransform(-373.45,-191.8,2,2);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1464.setTransform(-383.5,-191.8,2,2);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1465.setTransform(-393.6,-191.8,2,2);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1466.setTransform(-403.7,-191.8,2,2);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1467.setTransform(-413.8,-191.8,2,2);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1468.setTransform(-423.9,-191.8,2,2);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1469.setTransform(-434,-191.8,2,2);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1470.setTransform(-444.1,-191.8,2,2);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1471.setTransform(373.4,-201.9,2,2);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1472.setTransform(363.3,-201.9,2,2);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1473.setTransform(353.2,-201.9,2,2);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1474.setTransform(343.1,-201.9,2,2);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1475.setTransform(333,-201.9,2,2);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1476.setTransform(322.9,-201.9,2,2);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1477.setTransform(312.8,-201.9,2,2);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1478.setTransform(302.7,-201.9,2,2);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1479.setTransform(292.6,-201.9,2,2);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1480.setTransform(282.55,-201.9,2,2);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1481.setTransform(272.45,-201.9,2,2);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1482.setTransform(262.35,-201.9,2,2);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1483.setTransform(252.25,-201.9,2,2);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1484.setTransform(242.2,-201.9,2,2);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1485.setTransform(232.1,-201.9,2,2);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1486.setTransform(222,-201.9,2,2);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1487.setTransform(211.9,-201.9,2,2);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1488.setTransform(201.8,-201.9,2,2);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1489.setTransform(191.7,-201.9,2,2);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1490.setTransform(181.6,-201.9,2,2);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1491.setTransform(171.5,-201.9,2,2);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1492.setTransform(161.45,-201.9,2,2);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1493.setTransform(151.35,-201.9,2,2);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1494.setTransform(141.25,-201.9,2,2);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1495.setTransform(131.15,-201.9,2,2);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1496.setTransform(121.1,-201.9,2,2);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1497.setTransform(111,-201.9,2,2);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1498.setTransform(100.9,-201.9,2,2);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1499.setTransform(90.8,-201.9,2,2);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1500.setTransform(30.25,-201.9,2,2);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1501.setTransform(20.15,-201.9,2,2);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1502.setTransform(10.05,-201.9,2,2);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1503.setTransform(-0.05,-201.9,2,2);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1504.setTransform(-10.1,-201.9,2,2);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1505.setTransform(-100.95,-201.9,2,2);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1506.setTransform(-111.05,-201.9,2,2);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1507.setTransform(-121.15,-201.9,2,2);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1508.setTransform(-131.2,-201.9,2,2);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1509.setTransform(-141.3,-201.9,2,2);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1510.setTransform(-151.4,-201.9,2,2);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1511.setTransform(-161.5,-201.9,2,2);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1512.setTransform(-211.95,-201.9,2,2);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1513.setTransform(-222.05,-201.9,2,2);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1514.setTransform(-232.15,-201.9,2,2);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1515.setTransform(-242.25,-201.9,2,2);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1516.setTransform(-252.3,-201.9,2,2);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1517.setTransform(-262.4,-201.9,2,2);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1518.setTransform(-272.5,-201.9,2,2);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1519.setTransform(-282.6,-201.9,2,2);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1520.setTransform(-292.7,-201.9,2,2);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1521.setTransform(-302.8,-201.9,2,2);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1522.setTransform(-312.9,-201.9,2,2);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1523.setTransform(-323,-201.9,2,2);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1524.setTransform(-333.1,-201.9,2,2);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1525.setTransform(-343.15,-201.9,2,2);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1526.setTransform(-353.25,-201.9,2,2);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1527.setTransform(-363.35,-201.9,2,2);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1528.setTransform(-373.45,-201.9,2,2);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1529.setTransform(-383.5,-201.9,2,2);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1530.setTransform(-393.6,-201.9,2,2);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1531.setTransform(-403.7,-201.9,2,2);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1532.setTransform(-413.8,-201.9,2,2);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1533.setTransform(-423.9,-201.9,2,2);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1534.setTransform(282.55,-212,2,2);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1535.setTransform(272.45,-212,2,2);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1536.setTransform(262.35,-212,2,2);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1537.setTransform(252.25,-212,2,2);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1538.setTransform(232.1,-212,2,2);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1539.setTransform(222,-212,2,2);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1540.setTransform(211.9,-212,2,2);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1541.setTransform(201.8,-212,2,2);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1542.setTransform(191.7,-212,2,2);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1543.setTransform(181.6,-212,2,2);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1544.setTransform(171.5,-212,2,2);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1545.setTransform(161.45,-212,2,2);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1546.setTransform(151.35,-212,2,2);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1547.setTransform(141.25,-212,2,2);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1548.setTransform(131.15,-212,2,2);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1549.setTransform(111,-212,2,2);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1550.setTransform(80.7,-212,2,2);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1551.setTransform(70.6,-212,2,2);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1552.setTransform(-100.95,-212,2,2);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1553.setTransform(-111.05,-212,2,2);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1554.setTransform(-121.15,-212,2,2);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1555.setTransform(-131.2,-212,2,2);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1556.setTransform(-141.3,-212,2,2);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1557.setTransform(-151.4,-212,2,2);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1558.setTransform(-161.5,-212,2,2);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1559.setTransform(-222.05,-212,2,2);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1560.setTransform(-232.15,-212,2,2);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1561.setTransform(-242.25,-212,2,2);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1562.setTransform(-252.3,-212,2,2);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1563.setTransform(-262.4,-212,2,2);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1564.setTransform(-272.5,-212,2,2);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1565.setTransform(-282.6,-212,2,2);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1566.setTransform(-292.7,-212,2,2);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1567.setTransform(-302.8,-212,2,2);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1568.setTransform(-312.9,-212,2,2);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1569.setTransform(-323,-212,2,2);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1570.setTransform(242.2,-222.05,2,2);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1571.setTransform(191.7,-222.05,2,2);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1572.setTransform(181.6,-222.05,2,2);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1573.setTransform(171.5,-222.05,2,2);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1574.setTransform(161.45,-222.05,2,2);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1575.setTransform(151.35,-222.05,2,2);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1576.setTransform(90.8,-222.05,2,2);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1577.setTransform(80.7,-222.05,2,2);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1578.setTransform(-0.05,-222.05,2,2);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1579.setTransform(-10.1,-222.05,2,2);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1580.setTransform(-90.85,-222.05,2,2);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1581.setTransform(-100.95,-222.05,2,2);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1582.setTransform(-111.05,-222.05,2,2);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1583.setTransform(-121.15,-222.05,2,2);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1584.setTransform(-131.2,-222.05,2,2);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1585.setTransform(-141.3,-222.05,2,2);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1586.setTransform(-151.4,-222.05,2,2);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1587.setTransform(-161.5,-222.05,2,2);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1588.setTransform(-171.6,-222.05,2,2);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1589.setTransform(-181.7,-222.05,2,2);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1590.setTransform(-222.05,-222.05,2,2);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1591.setTransform(-232.15,-222.05,2,2);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1592.setTransform(-242.25,-222.05,2,2);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1593.setTransform(-252.3,-222.05,2,2);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1594.setTransform(-262.4,-222.05,2,2);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1595.setTransform(-272.5,-222.05,2,2);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1596.setTransform(-282.6,-222.05,2,2);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1597.setTransform(-292.7,-222.05,2,2);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1598.setTransform(-302.8,-222.05,2,2);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1599.setTransform(151.35,-232.15,2,2);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1600.setTransform(141.25,-232.15,2,2);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1601.setTransform(70.6,-232.15,2,2);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1602.setTransform(60.5,-232.15,2,2);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1603.setTransform(50.4,-232.15,2,2);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1604.setTransform(10.05,-232.15,2,2);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1605.setTransform(-0.05,-232.15,2,2);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1606.setTransform(-10.1,-232.15,2,2);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1607.setTransform(-20.2,-232.15,2,2);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1608.setTransform(-70.7,-232.15,2,2);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1609.setTransform(-80.8,-232.15,2,2);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1610.setTransform(-90.85,-232.15,2,2);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1611.setTransform(-100.95,-232.15,2,2);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1612.setTransform(-111.05,-232.15,2,2);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1613.setTransform(-121.15,-232.15,2,2);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1614.setTransform(-131.2,-232.15,2,2);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1615.setTransform(-141.3,-232.15,2,2);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1616.setTransform(-151.4,-232.15,2,2);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1617.setTransform(-161.5,-232.15,2,2);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1618.setTransform(-171.6,-232.15,2,2);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1619.setTransform(-181.7,-232.15,2,2);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1620.setTransform(-191.8,-232.15,2,2);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#999999").s().p("AgNANQgFgFAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1621.setTransform(-201.9,-232.15,2,2);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1622.setTransform(-211.95,-232.15,2,2);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1623.setTransform(-222.05,-232.15,2,2);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#999999").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_1624.setTransform(-232.15,-232.15,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Map, new cjs.Rectangle(-467.9,-235.9,935.9,471.8), null);


// stage content:
(lib.html5_canvas_dots_animation = function(mode,startPosition,loop,reversed) {
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
		var map = root.map;
		var i, child;
		
		for (i = map.numChildren - 1; i > -1; i--)
		{
			child = map.children[i];
			child.startY = child.y;
			child.y = child.startY - lib.properties.height - Math.random() * 200;
			child.alpha = Math.random() * 0.2;
			
			createjs.Tween
			.get(child)
			.wait(500)
			.to({ y: child.startY, alpha: 1 }, 2000 + Math.random() * 10000, createjs.Ease.sineOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// map
	this.map = new lib.Map();
	this.map.name = "map";
	this.map.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(492.1,304.1,455.9,201.79999999999995);
// library properties:
lib.properties = {
	id: 'C7B552870D384C5FBA444B4752ED9975',
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
an.compositions['C7B552870D384C5FBA444B4752ED9975'] = {
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