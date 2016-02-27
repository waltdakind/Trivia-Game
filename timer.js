// questions and answers
var trivia = [ {question: "What was Harry Houdini's real name?, realAnswer: "Erich Weiss, fakeAnswers: "Robert Houdin", "Neville Maskylne", "Magic Mike"},
{question: "Rabbits engage in coprophagy, what is that?, realAnswer: "Eating their own droppings, fakeAnswers: "Mating in large groups", "Mating multiple times ", "Eating grasses and vegetables"},
{question: "Jerry Garcia was missing what finger?, realAnswer: "Right middle finger, fakeAnswers: "Left index finger", "Right pinkie finger", "Left middle finger"},
{question: "Where is New Belgium Brewing Company located?, realAnswer: "Fort Collins, Colorado, fakeAnswers: "New Belgium, Brussels", "Golden, CO", "Highgate, VT"},
{question: "What country of Africa has largest population?, realAnswer: "Nigeria, fakeAnswers: "Kenya", "Egypt", "Libya"},
{question: "Who said -- Do or do not there is no try?, realAnswer: "Yoda, fakeAnswers: "Yogi Berra", "Robert Schuller", "Matlock"},
{question: "In the film, Thelma and Louise, who co-starred with Geena Davis?, realAnswer: "Susan Sarandon, fakeAnswers: "Bea Arthur", "Betty White", "Meryl Streep"},
{question: "If you mixed rum, simple syrup, lime juice and selter with some mint leaves you'd have what?, realAnswer: "A mojito, fakeAnswers: "A Cuba Libre", "A Manhattan", "A Cosmopolitan"},
{question: "In darts getting three bull's eyes in a turn is called what?, realAnswer: "A hat trick, fakeAnswers: "Darn lucky", "Three in a bed", "A Low Ton"},
{question: "What was the Beatles' first single in 1962?, realAnswer: "Love Me Do, fakeAnswers: "Help!", "I Saw Her Standing There", "I Am the Walrus"},
{question: "What country was Vincent VanGogh from?, realAnswer: "The Netherlands, fakeAnswers: "France", "Germany", "Austria"},
{question: "What is the most widely eaten fish in the world?, realAnswer: "Herring, fakeAnswers: "Trout", "Salmon", "Tilapia"}]




// Declaring class "Timer"
var Timer = function() {        
    // Property: Frequency of elapse event of the timer in millisecond
    this.Interval = 1000;
    
    // Property: Whether the timer is enabled or not
    this.Enable = new Boolean(false);
    
    // Event: Timer tick
    this.Tick;
    
    // Member variable: Hold interval id of the timer
    var timerId = 0;
    
    // Member variable: Hold instance of this class
    var thisObject;
    
    // Function: Start the timer
    this.Start = function()
    {
        this.Enable = new Boolean(true);

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval(
            function()
            {
                thisObject.Tick(); 
            }, thisObject.Interval);
        }
    };
    
    // Function: Stops the timer
    this.Stop = function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
    };

};

var index = 31;
var obj = new Timer();
obj.Interval = 1000;
obj.Tick = timer_tick;
obj.Start();

function timer_tick()
{
	index  = index - .5;
	document.getElementById("timerOut").innerHTML = "You have "+index+" seconds remaining to select your answer";
	
	if (index <= 0) {
		obj.Stop();
		document.getElementById("timerOut").innerHTML = '<p> Time is up! </p>';
	}
}


obj.Start();

// function CountDown (secs, elem) {
// var element = document.getElementById(elem);
// element.innerHTML = "You have "+secs+" seconds remaining to select your answer";
// var timer = setTimeout('CountDown('+secs+', "'+elem+'")',1000);
// if(secs < 1) {
// // 	clearTimeout(timer);
// 	element.innerHTML = '<p> Times is up! </p>';
// 	//load next question
// }
// secs--;
// };
// CountDown(30, "timerOut");
