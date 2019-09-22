import { React, Component } from 'react';

class AnimateCC extends Component
{
    componentDidMount()
    {
        var canvas = ReactDOM.findDOMNode(this.refs.canvas);
        this.stage = new createjs.Stage(canvas);
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        this.stage.addChild(circle);
        this.stage.update();
       }
     
       render() {
        return (
          <canvas ref="canvas" width="500" height="300"></canvas>
        );
       }
}

export default AnimateCC;