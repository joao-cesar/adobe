var _previousButtons = {};

class SimpleListButton
{	
	static get previousButtons(){return _previousButtons;}
	static set previousButtons(previousButtons){_previousButtons = previousButtons;}
	
	get toggled()
	{
		return this._toggled;
	}
	
	set toggled(toggled)
	{
		if (toggled)
			this.frames = [2, 2, 2];
		else
		{
			this.frames = [0, 1, 2];
			this.mc.gotoAndStop(this.frames[0]);
		}			
		
		this._toggled = toggled;
	}
	
	constructor(mc, props = null)
	{
		if (!props)
			props = {};
		
		this.mc = mc;
		this.mc.pressed = false;
		this.toggle = true;
		this.canToggleGroup = true;		
		this.toggleGroup = props["toggleGroup"] || "all";	
		this.toggled = !this.toggle;
		this.frames = [0, 1, 2];		
		
		mc.on("rollover", function(e)	{e.currentTarget.gotoAndStop(this.frames[1]);}, this);
		mc.on("rollout", function(e) {e.currentTarget.gotoAndStop(this.frames[0]);}, this);
		mc.on("mousedown", function(e) 
		{
			if (!SimpleListButton.previousButtons)
				SimpleListButton.previousButtons = {};
							
			if (this.canToggleGroup && SimpleListButton.previousButtons[this.toggleGroup])
				SimpleListButton.previousButtons[this.toggleGroup].toggled = false;
			
			SimpleListButton.previousButtons[this.toggleGroup] = this;
			
			e.currentTarget.pressed = false;
		}, this);
		
		mc.on("pressup", function(e) 
		{
			if (e.currentTarget.pressed)
				return;
			
			if (this.toggle)
				this.toggled = !this.toggled;	
			
			if (this.onMouseUp != null)
				this.onMouseUp(e);
			
			e.currentTarget.gotoAndStop(this.frames[0]);
		}, this);
		
		mc.mouseChildren = false;
	}
}