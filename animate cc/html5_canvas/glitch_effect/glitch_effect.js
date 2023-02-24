(function () {
	"use strict";
	
	var p;

	function RectangularDisplacementFilter(density, scale)
	{
		this.Filter_constructor();
		
		p.density = density !== undefined ? density : 1;
		p.scale = scale !== undefined ? scale : 1;
	}

	function drawRec(imageData, scale)
	{
		var data = imageData.data;
		var length = data.length;
		var width = imageData.width;
		var lastIndex = imageData.data.length - 4;
		var firstIndex = Math.floor(Math.random() * lastIndex);
		firstIndex = firstIndex - firstIndex % 4;
		var secondIndex = firstIndex + Math.ceil(Math.random() * (lastIndex - firstIndex) * scale);
		secondIndex = secondIndex - secondIndex % 4;
		var firstColumn = getColumn(firstIndex, width);
		var secondColumn = getColumn(secondIndex, width);
		var i, columnsGap, column;
				
		if (firstColumn > secondColumn)
			return;
		
		columnsGap = secondColumn - firstColumn;
		columnsGap = columnsGap - columnsGap % 4;
		
		for (i = firstIndex; i <= secondIndex; i += 4)
		{
			column = getColumn(i, width);
			
			if (column >= firstColumn && column <= secondColumn)
			{				
				data[i] = data[Math.min(i + columnsGap, length - 1)];
				data[i + 1] = data[Math.min(i + 1 + columnsGap, length - 1)];
				data[i + 2] = data[Math.min(i + 2 + columnsGap, length - 1)];
				data[i + 3] = data[Math.min(i + 3 + columnsGap, length - 1)];
			}
		}
	
		return data;
	}

	function getRow(index, width)
	{
		return Math.floor(index * 0.25 / width);
	}

	function getColumn(index, width)
	{
		return index * 0.25 - width * getRow(index, width);
	}

	p = createjs.extend(RectangularDisplacementFilter, createjs.Filter);

	p.toString = function ()
	{
		return "[RectangularDisplacementFilter]";
	};

	p.clone = function ()
	{
		return new RectangularDisplacementFilter(this.density, this.scale);
	};

	p._applyFilter = function(imageData)
	{
		var data = imageData.data;
		var length = data.length;
		var i, j, modifiedData;
		
		for (i = 0; i < this.density; i++)
		{
			modifiedData = drawRec(imageData, this.scale);
			
			if (!modifiedData)
				continue;
			
			for (j = 0; j < length; j++)
			{
				data[j] = modifiedData[j];	
			}
		}

		return true;
	};

	createjs.RectangularDisplacementFilter = createjs.promote(RectangularDisplacementFilter, "Filter");
}());

(function () {
	"use strict";
	
	var p;

	function ScanlinesFilter(gap, r, g, b, alpha)
	{
		this.Filter_constructor();
		
		p.gap = gap !== undefined ? gap : 4;
		p.r = r !== undefined ? r : 255;
		p.g = g !== undefined ? g : 255;
		p.b = b !== undefined ? b : 255;
		p.alpha = alpha !== undefined ? alpha : 255;
	}

	function getRow(index, width)
	{
		return Math.floor(index * 0.25 / width);
	}

	p = createjs.extend(ScanlinesFilter, createjs.Filter);

	p.toString = function ()
	{
		return "[ScanlinesFilter]";
	};

	p.clone = function ()
	{
		return new ScanlinesFilter(this.gap, this.r, this.g, this.b, this.alpha);
	};

	p._applyFilter = function(imageData)
	{
		var data = imageData.data;
		var length = data.length;
		var width = imageData.width;
		var i;
		
		for (i = 0; i < length; i += 4)
		{
			if (getRow(i, width) % this.gap === 0)
			{
				data[i] = this.r;
				data[i + 1] = this.g;
				data[i + 2] = this.b;
				data[i + 3] = this.alpha;
			}
		}

		return true;
	};

	createjs.ScanlinesFilter = createjs.promote(ScanlinesFilter, "Filter");
}());

(function () {
	"use strict";
	
	var p;

	function ChromaticAberrationFilter(iterations, intensity, phase)
	{
		this.Filter_constructor();
		
		p.iterations = iterations !== undefined ? iterations : 1;
		p.intensity = intensity !== undefined ? intensity : 5;
		p.phase = phase !== undefined ? phase : 1;
	}

	p = createjs.extend(ChromaticAberrationFilter, createjs.Filter);

	p.toString = function ()
	{
		return "[ChromaticAberrationFilter]";
	};

	p.clone = function ()
	{
		return new ChromaticAberrationFilter(this.iterations, this.intensity, this.phase);
	};

	p._applyFilter = function(imageData)
	{
		var data = imageData.data;
		var length = data.length;
		var i, j;

		for (i = 0; i < this.iterations; i++)
		{
			for (j = this.phase % 4; j < length; j += 4)
				data[j] = data[j + 4 * this.intensity];
		}

		return true;
	};

	createjs.ChromaticAberrationFilter = createjs.promote(ChromaticAberrationFilter, "Filter");
}());

(function () {
	"use strict";
	
	function Calc()
	{
		
	}
	
	Calc.randomFloat = function(min, max)
	{
		return min + Math.random() * (max - min);
	};

	Calc.randomInt = function(min, max)
	{
		return Math.round(min + Math.random() * (max - min));
	};
	
	if (!window.jc)
		window.jc = {};
	
	jc.Calc = Calc;
}());

(function () {
	"use strict";
	
	function GlitchEffect(props)
	{
		this.target = props.target;
		this.scanlinesProps = props.scanlinesProps || function(){ return { offsetY: 2, r: 255, g: 255, b: 255, alpha: 20 }; };
		this.displacementProps = props.displacementProps || function(){ return { density: jc.Calc.randomInt(1, 32), scale: jc.Calc.randomFloat(0.1, 0.2) }; };
		this.chromaticProps = props.chromaticProps || function(){ return { iterations: jc.Calc.randomInt(1, 2), intensity: jc.Calc.randomInt(0, 10), phase: jc.Calc.randomInt(0, 2) }; };
		this.fxDelay = props.fxDelay !== undefined ? props.fxDelay : { min: 0, max: 500 };
		this.idleDelay = props.idleDelay !== undefined ? props.idleDelay : { min: 300, max: 700 };
		this.fxToIdleChance = props.fxToIdleChance !== undefined ? props.fxToIdleChance : 0.7;
		this._delay = jc.Calc.randomInt(this.fxDelay.min, this.fxDelay.max);
		this._acc = 0;
		this.createEffect();
		this.start();
	}

	GlitchEffect.prototype.onTick = function(e)
	{
		if (this._acc >= this._delay)
		{
			if (Math.random() < this.fxToIdleChance)
			{
				this.createEffect();
				this._delay = jc.Calc.randomInt(this.fxDelay.min, this.fxDelay.max);
			}
			else
			{
				this.removeEffect();
				this._delay = jc.Calc.randomInt(this.idleDelay.min, this.idleDelay.max);
			}
			
			this._acc = 0;
		}

		this._acc += e.delta;
	};

    GlitchEffect.prototype.start = function()
	{
        this.tickEvent = createjs.Ticker.on("tick", this.onTick, this);
    };

    GlitchEffect.prototype.pause = function()
	{
        createjs.Ticker.off("tick", this.tickEvent);
    };

    GlitchEffect.prototype.createEffect = function()
	{
		var bounds;
		var sProps = this.scanlinesProps();
		var dProps = this.displacementProps();
        var cProps = this.chromaticProps();
        var scaleX, scaleY;
		
		this.target.filters =
		[
			new createjs.ScanlinesFilter(sProps.offsetY, sProps.r, sProps.g, sProps.b, sProps.alpha),
			new createjs.RectangularDisplacementFilter(dProps.density, dProps.scale),
			new createjs.ChromaticAberrationFilter(cProps.iterations, cProps.intensity, cProps.phase)
		];
		
		bounds = this.target.nominalBounds || this.target.getBounds();
        scaleX = this.target.scaleX * this.target.stage.scaleX;
        scaleY = this.target.scaleY * this.target.stage.scaleY;
        this.target.cache(0, 0, bounds.width * this.target.scaleX, bounds.height * this.target.scaleY, Math.max(scaleX, scaleY));
	};

	GlitchEffect.prototype.removeEffect = function()
	{
		this.target.filters = [];
		this.target.uncache();
	};

    GlitchEffect.prototype.destroy = function()
	{
        this.removeEffect();
        createjs.Ticker.off("tick", this.tickEvent);

		delete this.target;
		delete this.scanlinesProps;
		delete this.displacementProps;
		delete this.chromaticProps;
		delete this.fxDelay;
		delete this.idleDelay;
		delete this.fxToIdleChance;
        delete this.tickEvent;
        delete this._delay;
		delete this._acc;
	};

	if (!window.jc)
		window.jc = {};
	
	if (!jc.fx)
		jc.fx = {};
	
	jc.fx.GlitchEffect = GlitchEffect;
}());