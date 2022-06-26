package player.states
{
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.display.DisplayObjectContainer;
	import flash.display.Sprite;
	import flash.display.MovieClip;
	import flash.media.ID3Info;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import flash.media.Sound;
	import flash.text.TextFieldAutoSize;
	
	import mf.system.MiniState;
	import mf.system.MiniFileSystem;	
	import mf.display.MiniButton;	
	import mf.display.MiniSprite;
	import mf.display.MiniText;
	import mf.display.Mini9Slice;
	import mf.display.Mini3Slice;
	import mf.display.MiniList;
	import mf.display.MiniScroll;
	import mf.display.MiniToggleGroup;
	import mf.media.MiniPlayer;
	import mf.system.MiniUtils;
	
	import net.hires.debug.Stats;
	
	import player.data.Settings;
	import player.media.CustomSound;
	import player.ui.Row;
	
	public class MainState extends MiniState
	{
		private var _container:DisplayObjectContainer;
		private var _background:MiniSprite;
		private var _browseButton:MiniButton;
		private var _currentIndex:uint = 0;
		private var _currentTimeText:MiniText;
		private var _directoryPlaylist:Array = [];
		private var _div:MiniSprite;
		private var _extra:MiniSprite;
		private var _facebookButton:MiniButton;
		private var _fileSystem:MiniFileSystem
		private var _headers:MiniSprite;
		private var _instagramButton:MiniButton;
		private var _nextButton:MiniButton;
		private var _nineSlice:Mini9Slice;
		private var _pauseButton:MiniButton;
		private var _playButton:MiniButton;
		private var _playback:MiniSprite
		private var _prevButton:MiniButton;
		private var _rows:MiniList;
		private var _scroll:MiniScroll;
		private var _seek:MiniSprite;
		private var _seekBar:MiniSprite;
		private var _sliderBarMask:Mini3Slice;
		private var _seekButton:MiniButton;
		private var _shuffleButton:MiniButton;
		private var _slider:Sprite;
		private var _sliderBar:Sprite;
		private var _sliderBarProgress:MiniSprite;
		private var _sliderBarTotal:Mini3Slice;		
		private var _social:MiniSprite;
		private var _songArtist:MiniText;
		private var _songCoverArt:MiniSprite;
		private var _songTitle:MiniText;
		private var _songsList:MiniToggleGroup;
		private var _songsListRec:MiniSprite;
		private var _songsMask:MiniSprite;
		private var _stopButton:MiniButton;
		private var _totalTimeText:MiniText;
		private var _volume:MiniSprite;
		private var _youTubeButton:MiniButton;
		private var _nextFunction:Function;
		private var _songsAvailable:Boolean = false;
		private var _volumeButton:MiniButton;
		private var _volumeBar:Sprite;
		private var _volumeMeter:MovieClip;
		private var _fix1:MiniSprite;
				
		public function MainState()
		{			
		}
		
		override public function enter(container:DisplayObjectContainer):void
		{
			//addChild(new Stats());
			
			_background =        container['background'];			
			_browseButton =      container['browseButton'];			
			_currentTimeText =   container['seek']['currentTimeText'];
			_currentTimeText =   container['seek']['currentTimeText'];
			_div =               container['div'];
			_extra =             container['extra'];
			_facebookButton =    container['social']['facebookButton'];
			_headers =           container['headers'];
			_instagramButton =   container['social']['instagramButton'];
			_nextButton =        container['playback']['nextButton'];
			_nineSlice =   	     container['songCover']['mk'];			
			_pauseButton =       container['playback']['pauseButton'];
			_playButton =        container['playback']['playButton'];
			_playback =          container['playback'];
			_prevButton =        container['playback']['prevButton'];
			_rows =   	         container['list']['content'];
			_scroll =   	     container['list'];
			_seek =              container['seek'];
			_seekBar =           container['seek']['rec'];
			_seekButton =        container['seek']['slider']['button'];
			_shuffleButton =     container['extra']['shuffleButton'];
			_slider =            container['seek']['slider'];
			_sliderBar =         container['seek']['slider']['bar'];
			//_sliderBarMask =   container['seek']['slider']['bar']['mk'];
			_sliderBarProgress = container['seek']['slider']['bar']['progress'];
			_sliderBarTotal =    container['seek']['slider']['bar']['total'];
			_fix1 =              container['seek']['slider']['fix1'];
			_social =            container['social'];
			_songArtist =        container['songInfo']['artist'];
			_songCoverArt =      container['songCover']['art'];
			_songTitle =         container['songInfo']['title'];
			_songsList =         container['list']['content']['rows'];
			_songsListRec =      container['list']['content']['rec'];
			_songsMask =         container['list']['mk'];
			_stopButton =        container['playback']['stopButton'];
			_totalTimeText =     container['seek']['totalTimeText'];
			_totalTimeText =     container['seek']['totalTimeText'];
			_volume =            container['volume'];
			_volumeButton =      container['volume']['button'];
			_volumeBar =         container['volume']['bar'];
			_volumeMeter =       container['volume']['meter'];
			_youTubeButton =     container['social']['youTubeButton'];			
			_container =         container;
			
			_playButton.onClick = function(button:MiniButton):void
			{
				if (!_songsAvailable)
					return;
				
				MiniPlayer.loadAndPlay(_directoryPlaylist[_currentIndex].path);
				button.visible = false;
				_pauseButton.visible = true;
				
				if (_songsList.current != _songsList.getChildAt(_currentIndex) as MiniButton)
					_songsList.current = _songsList.getChildAt(_currentIndex) as MiniButton;
				
				_updateSongInfo();
			};
			
			_pauseButton.onClick = function(button:MiniButton):void
			{
				if (!_songsAvailable)
					return;
				
				MiniPlayer.pause();
				button.visible = false;
				_playButton.visible = true;				
			};
			
			_stopButton.onClick = function(button:MiniButton):void
			{
				if (!_songsAvailable)
					return;
				
				_seekButton.x = 0;
				_sliderBarProgress.width = 0;
				
				MiniPlayer.stop();
				_playButton.visible = true;
				_pauseButton.visible = false;
			};
			
			_prevButton.onClick = function(button:MiniButton):void
			{	
				if (!_songsAvailable)
					return;
				
				if (_currentIndex > 0)
				{
					_currentIndex--;
					MiniPlayer.channelPosition = 0;
					MiniPlayer.loadAndPlay(_directoryPlaylist[_currentIndex].path);
					_playButton.visible = false;
					_pauseButton.visible = true;
					
					_songsList.current = _songsList.getChildAt(_currentIndex) as Row;
					
					_updateSongInfo();
				}	
			};
			
			_nextButton.onClick = _nextFunction = function(button:MiniButton):void
			{	
				if (!_songsAvailable)
					return;
				
				if (_currentIndex < _songsList.numChildren - 1)
				{
					_currentIndex++;
					MiniPlayer.channelPosition = 0;
					MiniPlayer.loadAndPlay(_directoryPlaylist[_currentIndex].path);
					_playButton.visible = false;
					_pauseButton.visible = true;
					
					_songsList.current = _songsList.getChildAt(_currentIndex) as Row;
					
					_updateSongInfo();
				}
				else
				{
					_rowClick(_songsList.getChildAt(0) as MiniButton);
					_songsList.current = _songsList.getChildAt(0) as MiniButton;
				}					
			};
			
			_seekButton.onMouseDown = function(button:MiniButton):void
			{	
				if (!_songsAvailable)
					return;
				
				MiniPlayer.seeking = true;	
			};
			
			_volumeButton.onMouseDown = function(button:MiniButton):void
			{	
				if (!_songsAvailable)
					return;
				
				MiniPlayer.changingVolume = true;	
			};
			
			_browseButton.onClick = function(button:MiniButton):void
			{
				_fileSystem.browse();
			};
			
			resize(null);
			
			_songArtist.txt.autoSize = TextFieldAutoSize.LEFT;
			_songTitle.txt.autoSize = TextFieldAutoSize.LEFT;
			
			_shuffleButton.togglable = true;
			_youTubeButton.onClick =   function():void{navigateToURL(new URLRequest("https://www.youtube.com"));};
			_instagramButton.onClick = function():void{navigateToURL(new URLRequest("https://www.instagram.com"));};
			_facebookButton.onClick =  function():void{navigateToURL(new URLRequest("https://www.facebook.com"));};
			
			_volumeBar.addEventListener(MouseEvent.MOUSE_DOWN, _mouseHandler);
			_sliderBar.addEventListener(MouseEvent.MOUSE_DOWN, _mouseHandler);
			
			_fileSystem = new MiniFileSystem();
			addChild(_fileSystem);
			
			_loadDirectory(_fileSystem.listDir(""));
			
			stage.addEventListener(Event.SELECT, _selectHandler);
		}
		
		private function _selectHandler(e:Event):void
		{
			_loadDirectory(_fileSystem.files);
		}
		
		private function _loadDirectory(array:Array):void
		{
			_directoryPlaylist = _resetPlaylist(_songsList, array);
			
			if (_directoryPlaylist.length == 0)
				return;
			
			MiniPlayer.loadAndPlay(_directoryPlaylist[_currentIndex].path);
			MiniPlayer.stop();
			
			resize(null);
		}
		
		private function _mouseHandler(e:MouseEvent):void
		{
			if (e.currentTarget == _sliderBar)
				MiniPlayer.seeking = true;
			else if (e.currentTarget == _volumeBar)
				MiniPlayer.changingVolume = true;
		}
			
		private function _updateSongInfo():void
		{
			var row:Row = _songsList.getChildAt(_currentIndex) as Row;
			
			if (!row)
				return;
			
			_songArtist.txt.text = row.frames.artist.txt.text;
			_songTitle.txt.text = row.frames.title.txt.text;
		}
		
		private function _rowClick(button:MiniButton):void
		{
			_currentIndex = _songsList.getChildIndex(button);
			MiniPlayer.channelPosition = 0;
			MiniPlayer.loadAndPlay(_directoryPlaylist[_currentIndex].path);
			_playButton.visible = false;
			_pauseButton.visible = true;
			
			_updateSongInfo();
		}
		
		private function _resetPlaylist(container:DisplayObjectContainer, dirList:Array):Array
		{
			var count:int = 0;
			var extension:String;
			var array:Array = [];
			
			_songsAvailable = false;
			MiniPlayer.clear();
			_currentTimeText.txt.text = "00:00";
			_totalTimeText.txt.text = "00:00";
			_songArtist.txt.text = "ARTIST";
			_songTitle.txt.text = "Title";
			_seekButton.x = 0;
			_volumeButton.x = _volumeBar.width;
			_volumeMeter.gotoAndStop(_volumeMeter.totalFrames);
			_sliderBarProgress.width = 0;
			
			while (container.numChildren > 0)
				container.removeChildAt(0);
			
			for (var i:int = 0, total:int = dirList.length; i < total; i++)
			{
				extension = dirList[i].extension;
				
				if (extension == "mp3" || extension == "wav")
				{
					var completeHandler:Function;					
					var id3Handler:Function;					
					var songName:String = dirList[i].name.replace("." + extension, "");
					
					var row:Row = new Row();
					row.y = count * row.height;
					row.onClick = _rowClick;
					container.addChild(row);
					
					row.frames.title.txt.autoSize = TextFieldAutoSize.LEFT;
					row.frames.artist.txt.autoSize = TextFieldAutoSize.LEFT;
					row.frames.album.txt.autoSize = TextFieldAutoSize.LEFT;
					row.frames.duration.txt.autoSize = TextFieldAutoSize.RIGHT;
					
					array[count] = {name:songName, path:dirList[i].nativePath};
					
					var sound:CustomSound = new CustomSound();
					sound.props.target = row;
					sound.props.songName = songName;
					sound.load(new URLRequest(dirList[i].nativePath));
					
					sound.addEventListener(Event.COMPLETE, completeHandler = function(e:Event):void
					{
						var r:Row = e.currentTarget.props.target as Row;
						r.frames.duration.txt.text = String(MiniUtils.timecode(e.currentTarget.length).minutes + ":" + MiniUtils.timecode(e.currentTarget.length).seconds);
						
						e.currentTarget.removeEventListener(e.type, arguments.callee);
						
						resize(null);
					});
					
					sound.addEventListener(Event.ID3, id3Handler = function(e:Event):void
					{
						var id3:ID3Info = e.currentTarget.id3;
						var r:Row = e.currentTarget.props.target as Row;
						var songName:String;
						
						if (id3.songName)
							songName = id3.songName;
						else
							songName = e.currentTarget.props.songName;
						
						r.frames.title.txt.text = songName;
						
						if (id3.artist)
							r.frames.artist.txt.text = id3.artist;
						
						if (id3.album)
							r.frames.album.txt.text = id3.album;
						
						_updateSongInfo();
						resize(null);
						
						e.currentTarget.removeEventListener(e.type, arguments.callee);						
					});
					
					count++;
					
					_songsAvailable = true;
				}
			}
			
			return array;
		}
		
		override public function exit():void
		{
			
		}
		
		override public function loop(e:Event, delta:Number):void
		{			
			if (!_songsAvailable)
				return;
			
			var current:Number;
			var total:Number = MiniPlayer.sChannel ? MiniPlayer.sound.length : 0;;
			
			if (MiniPlayer.seeking)
			{
				if (_seekButton.x != Infinity)
				{
					_seekButton.x = Number(MiniUtils.clamp(_slider.mouseX, 0, _sliderBarTotal.width));
					_sliderBarProgress.width = _seekButton.x;
				}
				
				MiniPlayer.channelPosition = (_seekButton.x / _sliderBarTotal.width) * MiniPlayer.sound.length;
				
				current = MiniPlayer.channelPosition;
				
				_updatedTimeTexts(current, total);
			}
			else
			{
				if (MiniPlayer.playing)
				{
					current = MiniPlayer.sChannel.position;
					
					if ((current / total) * _sliderBarTotal.width != Infinity)
					{
						_seekButton.x = Number((current / total) * _sliderBarTotal.width);
						_sliderBarProgress.width = _seekButton.x;
					}
					
					if (current > 0 && current == total)
						_nextFunction(null);						
				}
				else
					current = MiniPlayer.channelPosition;			
				
				_updatedTimeTexts(current, total);
			}
			
			if (MiniPlayer.changingVolume)
			{
				var posX:Number = MiniUtils.clamp(_volume.mouseX, 0, _volumeBar.width);
				
				_volumeButton.x = posX;				
				MiniPlayer.volume = _volumeButton.x / _volumeBar.width;
				MiniPlayer.changeVolume();
				_volumeMeter.gotoAndStop(Math.ceil((_volume.mouseX / _volumeBar.width) * _volumeMeter.totalFrames));
			}
			
			_scroll.loop(e, delta);
			_songsListRec.height = _songsList.height;
		}
		
		private function _updatedTimeTexts(current:Number, total:Number):void
		{
			_currentTimeText.txt.text = String(MiniUtils.timecode(current).minutes + ":" + MiniUtils.timecode(current).seconds);
			_totalTimeText.txt.text = String(MiniUtils.timecode(total).minutes + ":" + MiniUtils.timecode(total).seconds);
		}
		
		override public function stageMouse(e:MouseEvent):void
		{
			if (e.type == MouseEvent.MOUSE_UP)
			{
				if (MiniPlayer.seeking && MiniPlayer.playing)
					MiniPlayer.play();
				
				MiniPlayer.seeking = false;
				MiniPlayer.changingVolume = false;
			}
			
			if (e.type == MouseEvent.MOUSE_WHEEL)
			{
				_scroll.stageMouse(e);
			}
		}
		
		override public function resize(e:Event):void
		{
			_social.responsive.anchor.top();
			_social.responsive.anchor.right();
			_browseButton.responsive.anchor.top();
			_browseButton.responsive.anchor.right();
			_seek.responsive.anchor.bottom();
			//_sliderBarProgress.responsive.fit.fullWidth();
			_sliderBarTotal.responsive.fit.fullWidth();
			_totalTimeText.responsive.anchor.right();
			_fix1.responsive.anchor.right();
			_seekBar.responsive.fit.fullWidth();
			_extra.responsive.anchor.bottom();
			_playback.responsive.anchor.halfWidth();
			_playback.responsive.anchor.bottom();
			_volume.responsive.anchor.right();
			_volume.responsive.anchor.bottom();
			_background.responsive.fit.fullWidth();
			_background.responsive.anchor.bottom();
			_songsListRec.responsive.fit.fullWidth(-(Settings.STAGE_WIDTH - _songsListRec.startProps.width));
			_songCoverArt.responsive.scale.proportionalWidth();
			_nineSlice.responsive.fit.fullArea();
			_rows.responsive.group.spaceHorizontally();
			_scroll.responsive.fit.scroll();
			_div.responsive.fit.fullWidth(-(Settings.STAGE_WIDTH - _songsListRec.startProps.width));
			
			var totalWidth:Number = (stage.stageWidth - (Settings.STAGE_WIDTH - _songsList.startProps.width)) * 0.95;
			
			_headers.title.responsive.anchor.left(10);
			_headers.artist.x = totalWidth * 0.33;
			_headers.album.x = totalWidth * 0.66;
			_headers.duration.responsive.anchor.right(-10);
			_headers.protection.responsive.fit.fullWidth(-(Settings.STAGE_WIDTH - _songsList.startProps.width));
			
			_songsMask.responsive.fit.fullWidth(-(Settings.STAGE_WIDTH - _songsListRec.startProps.width));
			_songsMask.responsive.fit.fullHeight(-(Settings.STAGE_HEIGHT - _songsListRec.startProps.height));
		}
	}
}