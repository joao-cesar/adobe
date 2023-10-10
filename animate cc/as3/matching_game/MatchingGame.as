package
{
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.utils.getDefinitionByName;
	import flash.utils.getQualifiedClassName;
	import flash.utils.setTimeout;
	
	public class MatchingGame extends Sprite
	{
		public var cols:uint = 5;
		public var rows:uint = 4;
		public var gapX:int = 10;
		public var gapY:int = 10;
		public var cardPrefix:String = "CardFace";
		public var checkPairDelay:uint = 1000;
		public var resumePlayingDelay:uint = 250;
		public var callbacks:Object;
		
		public function get cards():Vector.<Card>{ return _cards; };
		public function get selectedPair():Vector.<Card>{ return _selectedPair; };
		public function get matchCount():uint{ return _matchCount; };
	
		private var _cards:Vector.<Card>;
		private var _selectedPair:Vector.<Card>;
		private var _matchCount:uint = 0;
		private var _checkPairTimeout:uint;
		private var _continueTimeout:uint;
				
		public function MatchingGame()
		{
			_createCards();
			_setCards();
			_randomizeCards();
			_setBoard();
			_addInteraction();
		}
	
		private function _createCards():void
		{
			var i:int;
			var total:int = cols * rows;
			
			_cards = new Vector.<Card>();
			
			for (i = 0; i < total; i++)
				_cards.push(new Card());
		}
	
		private function _setCards():void
		{
			var i:int;
			var total:int = _cards.length;
			
			for (i = 0; i < total; i++)
			{
				var card:Card = _cards[i];
				var CardFace:Class = getDefinitionByName(cardPrefix + uint(i * 0.5)) as Class;
				
				card.stop();
				card.mouseChildren = false;
				card.face = new CardFace();
				card.face.visible = false;
				card.anim.addChild(card.face);
			}
		}
	
		private function _randomizeCards():void
		{
			_cards.sort(function(a:Card, b:Card):Number
			{
				return 0.5 - Math.random();
			});
		}
	
		private function _setBoard():void
		{
			var i:int;
			var j:int;
			var count:uint = 0;
			
			for (i = 0; i < rows; i++)
			{
				for (j = 0; j < cols; j++)
				{
					var card:Card = _cards[count];
					
					card.x = card.width * 0.5 + j * (card.width + gapX);
					card.y = card.height * 0.5 + i * (card.height + gapY);
					addChild(card);
					count++;
				}
			}
		}
	
		private function _addInteraction():void
		{
			_selectedPair = new Vector.<Card>();
			callbacks = {};
			addEventListener(MouseEvent.CLICK, _revealCard);
		}
	
		private function _revealCard(e:MouseEvent):void
		{
			if (!(e.target is Card))
				return;
			
			e.target.mouseEnabled = false;
			e.target.play();
			_selectedPair.push(e.target);
			
			if (_selectedPair.length == 2)
			{
				e.currentTarget.mouseChildren = false;
				_checkPairTimeout = setTimeout(_checkPair, checkPairDelay);
			}
		}
	
		private function _checkPair():void
		{
			if (getQualifiedClassName(_selectedPair[0].face) == getQualifiedClassName(_selectedPair[1].face))
				_matchCount++;
			else
			{
				_selectedPair[0].play();
				_selectedPair[0].mouseEnabled = true;
				_selectedPair[1].play();
				_selectedPair[1].mouseEnabled = true;
			}
		
			_selectedPair.splice(0, _selectedPair.length);
			_continueTimeout = setTimeout(_resumePlaying, resumePlayingDelay);
		}
	
		private function _resumePlaying():void
		{			
			if (_matchCount == _cards.length * 0.5 && callbacks.onWin != undefined)
				callbacks.onWin();
			else
				mouseChildren = true;
		}
	}
}