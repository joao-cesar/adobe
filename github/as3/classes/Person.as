package
{	
	public class Person
	{
		private var _firstName:String = "";
		private var _lastName:String = "";
		private static var _peopleCount:uint = 0;
		
		public function Person()
		{
			_peopleCount++;
		}
		
		public function getFirstName():String
		{
			return _firstName;
		}
		
		public function setFirstName(name:String):void
		{
			_firstName = name;
		}
		
		public function getLastName():String
		{
			return _lastName;
		}
		
		public function setLastName(name:String):void
		{
			_lastName = name;
		}
		
		public function getFullName():String
		{
			return _firstName + " " + _lastName;
		}
		
		public static function numberOfPeople():uint
		{
			return _peopleCount;
		}
	}
}