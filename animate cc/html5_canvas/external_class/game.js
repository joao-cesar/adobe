class Game
{
    constructor(root, lib)
    {
        this.root = root;
        this.stage = this.root.stage;
        this.lib = lib;
        this.init();
    }
    
    init()
    {
        this.root.gobutt.on('click', function()
        {
               this.root.lightAndSwitch.gotoAndPlay("on");
        }, this);
    }
}