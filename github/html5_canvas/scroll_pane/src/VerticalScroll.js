var _scrolls;

class VerticalScroll
{
	static get scrolls(){return _scrolls;}
	static set scrolls(scrolls){_scrolls = scrolls;}
    
	constructor(container, props = null)
	{
		if (!props)
			props = {};
			
		this.container = container;
		this.content = props["content"] || container["content"];
		this.scrollArea = props["scrollArea"] || container["scrollArea"];
		this.button = props["button"] || container["button"];
		this.button.mouseChildren = props["buttonMouseChildren"] || false;
		this.bar = props["bar"] || container["bar"];
		this.bar.mouseChildren = props["barMouseChildren"] || false;		
		
		this.wheelMultiplierY = props["wheelMultiplierY"] || 200;
		this.frictionY = props["frictionY"] || 0.9;
		this.boundsFrictionY = props["boundsFrictionY"] || 0.75;
		this.dragToleranceY = props["dragToleranceY"] || 10;
		this.contentOverDelay = props["contentOverDelay"] || 200;
		
		this.speedY = 0;		
		this.cursorHovering = false;
		this.currentDragTarget = this.content;
		this.onMobile = Utils.isMobile();
		
		this.container.on("mousedown", this.mouseDownHandler, this);
		
		if (this.onMobile)
		{
			createjs.Touch.enable(stage);
			this.button.visible = false;
			this.bar.visible = false;	
		}			
		else
		{
			stage.enableMouseOver();
			this.container.on("mouseover", this.mouseOverHandler, this);
			this.container.on("mouseout", this.mouseOutHandler, this);
		}		
		
		if (!VerticalScroll.scrolls || VerticalScroll.scrolls.length == 0)
		{
			VerticalScroll.scrolls = [];
			
			createjs.Ticker.on("tick", this.tickHandler);
			stage.on("stagemouseup", this.stageMouseUpHandler);
			
			if (this.onMobile == false)
			{
				canvas.addEventListener('mousewheel', this.mouseWheelHandler);
				canvas.addEventListener('DOMMouseScroll', this.mouseWheelHandler);
			}
		}
		
		if (VerticalScroll.scrolls.indexOf(this) == -1)
			VerticalScroll.scrolls.push(this);
	}
	
	dispose(index = -1, removeContainer = false)
	{
		if (removeContainer)
			this.container.parent(this.container);
		
		if (index === -1)
			index = VerticalScroll.scrolls.indexOf(this);
		
		VerticalScroll.scrolls.splice(index, 1);
		
		if (VerticalScroll.scrolls.length === 0)
		{
			this.deleteListeners();
			VerticalScroll.scrolls = null;
		}
	}
	
	deleteListeners()
	{
		createjs.Ticker.off("tick", this.tickHandler);
		stage.off("stagemouseup", this.stageMouseUpHandler);
		
		if (this.onMobile == false)
		{
			canvas.removeEventListener('mousewheel', this.mouseWheelHandler);
			canvas.removeEventListener('DOMMouseScroll', this.mouseWheelHandler);
		}
		
		VerticalScroll.scrolls = null;
	}
	
	mouseDownHandler(e)
	{
		this.currentDragTarget = e.target;
		this.pressedY = stage.mouseY;
		this.startDragY = this.pressedY;
		this.pressed = true;
	}
	
	mouseOverHandler(e)
	{
		var that = this;
		var event = e;
		
		clearTimeout(this.mouseOverTimeout);
		
		this.mouseOverTimeout = setTimeout(function()
		{
			if (event.target == that.content || event.target.parent == that.content)
				that.currentDragTarget = that.content;
		}, this.contentOverDelay);
			
		this.cursorHovering = true;
	}
	
	mouseOutHandler(e)
	{		
		this.cursorHovering = false;
	}
	
	tickHandler(e)
	{
		if (!VerticalScroll.scrolls || VerticalScroll.scrolls.length === 0)
			return;
			
		var scroll;
		var scrollAreaHeight;
		var contentHeight;
		var barHeight;
		var buttonHeight;
				
		for (var i = 0, total = VerticalScroll.scrolls.length; i < total; i++)
		{
			scroll = VerticalScroll.scrolls[i];
			
			if (!scroll)
			{
				VerticalScroll.scrolls.splice(i, 1);
				
				if (VerticalScroll.scrolls.length === 0)
					scroll.dispose();
				
				continue;
			}
			
			scrollAreaHeight = scroll.scrollArea.getBounds().height;
			contentHeight = scroll.content.getBounds().height;
			
			if (scroll.onMobile == false)
			{
				barHeight = scroll.bar.getBounds().height;
				buttonHeight = scroll.button.getBounds().height;
			}			
						
			if (contentHeight <= scrollAreaHeight)
			{
				if (scroll.props && scroll.props.callBacks && scroll.props.callBacks.smallContent)
					scroll.callBacks.deactivatedState();
				else
				{
					scroll.bar.visible = false;
					scroll.button.visible = false;					
				}
				
				continue;
			}
			else
			{
				if (scroll.props && scroll.props.callBacks && scroll.props.callBacks.smallContent)
					scroll.callBacks.activeState();
				else
				{
					if (scroll.onMobile == false)
					{
						scroll.bar.visible = true;
						scroll.button.visible = true;
					}
				}
			}
			
			if (scroll.onMobile == false)
				scroll.button.scaleY = scrollAreaHeight / contentHeight;
			
			if (scroll.pressed)
			{
				scroll.speedY = stage.mouseY - scroll.pressedY;
				scroll.dragDistanceY = Math.abs(stage.mouseY - scroll.startDragY);				
				
				if (scroll.dragDistanceY > scroll.dragToleranceY)
					scroll.currentDragTarget.pressed = true;
			}
			
			scroll.pressedY = stage.mouseY;			
			scroll.speedY *= scroll.frictionY;
			
			if (scroll.currentDragTarget == scroll.content || scroll.currentDragTarget.parent == scroll.content)
			{
				scroll.content.y += scroll.speedY;
				
				if (!scroll.pressed)
				{
					if (scroll.content.y > 0)
						scroll.content.y = Utils.lerp(scroll.content.y, 0, scroll.boundsFrictionY);
					else if (scroll.content.y < scrollAreaHeight - contentHeight)
						scroll.content.y = Utils.lerp(scroll.content.y, scrollAreaHeight - contentHeight, scroll.boundsFrictionY);						
				}
				
				if (scroll.onMobile == false)
				{
					scroll.button.y = -barHeight * (scroll.content.y / contentHeight);
				
					if (scroll.button.y < 0)
						scroll.button.y = 0;				
					else if (scroll.content.y < scrollAreaHeight - contentHeight)
						scroll.button.y = barHeight - buttonHeight * scroll.button.scaleY;
				}				
				
			}
			else if (scroll.onMobile == false && scroll.currentDragTarget == scroll.button)
			{
				scroll.button.y += scroll.speedY;
				scroll.button.y = Utils.clamp(scroll.button.y, 0, barHeight - buttonHeight * scroll.button.scaleY);
				scroll.content.y = -contentHeight * (scroll.button.y / barHeight);
			}
		}
	
	}	
	
	stageMouseUpHandler(e)
	{
		if (!VerticalScroll.scrolls || VerticalScroll.scrolls.length === 0)
			return;
		
		var scroll;
		
		for (var i = 0, total = VerticalScroll.scrolls.length; i < total; i++)
		{
			scroll = VerticalScroll.scrolls[i];
			
			if (!scroll)
				continue;
			
			setTimeout(function(){scroll.currentDragTarget.pressed = false;}, 0);
			scroll.pressed = false;
		}
	}
	
	mouseWheelHandler(e)
	{
		if (!VerticalScroll.scrolls || VerticalScroll.scrolls.length === 0)
			return;
		
		var delta;
		var scroll;
		
		e.preventDefault();		

		if (e == window.event)
			delta = -10 / window.event.wheelDeltaY;
		else
			delta = e.detail / 30;
		
		for (var i = 0, total = VerticalScroll.scrolls.length; i < total; i++)
		{
			scroll = VerticalScroll.scrolls[i];
			
			if (!scroll)
				continue;			
			
			if (scroll.cursorHovering)
				scroll.speedY -= delta * scroll.wheelMultiplierY;
		}
	}	
	
}