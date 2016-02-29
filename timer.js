$( document ).ready(function() {
    answersOntoButtons(i);
    
});
//questions and answers
// all the stuff for populating the other stuff
//===============================================
var i = 0;
var trivia = [ 
{"question": "What was Harry Houdini's real name?", "realAnswer": "Erich Weiss", "fakeAnswer1": "Robert Houdin", "fakeAnswer2":"Neville Maskylne", "fakeAnswer3":"Magic Mike"},
{"question": "Rabbits engage in coprophagy, what is that?", "realAnswer": "Eating their own droppings", "fakeAnswer1": "Mating in large groups", "fakeAnswer2":"Mating multiple times ","fakeAnswer3": "Eating grasses and vegetables"},
{"question": "Jerry Garcia was missing what finger?", "realAnswer": "Right middle finger", "fakeAnswer1":"Left index finger", "fakeAnswer2":"Right pinkie finger","fakeAnswer3": "Left middle finger"},
{"question": "Where is New Belgium Brewing Company located?", "realAnswer": "Fort Collins, Colorado", "fakeAnswer1": "New Belgium, Brussels", "fakeAnswer2":"Golden, CO","fakeAnswer3": "Highgate, VT"},
{"question": "What country of Africa has largest population?", "realAnswer": "Nigeria", "fakeAnswer1": "Kenya", "fakeAnswer2":"Egypt","fakeAnswer3":"Libya"},
{"question": "Who said -- Do or do not there is no try?", "realAnswer": "Yoda", "fakeAnswer1": "Yogi Berra", "fakeAnswer2":"Robert Schuller","fakeAnswer3": "Matlock"},
{"question": "In the film, Thelma and Louise, who co-starred with Geena Davis?", "realAnswer": "Susan Sarandon", "fakeAnswer1": "Bea Arthur", "fakeAnswer2":"Betty White","fakeAnswer3": "Meryl Streep"},
{"question": "If you mixed rum, simple syrup, lime juice and selter with some mint leaves you'd have what?", "realAnswer": "A mojito", "fakeAnswer1": "A Cuba Libre", "fakeAnswer2":"A Manhattan","fakeAnswer3": "A Cosmopolitan"},
{"question": "In darts getting three bull's eyes in a turn is called what?", "realAnswer": "A hat trick", "fakeAnswer1": "Darn lucky", "fakeAnswer2":"Three in a bed","fakeAnswer3": "A Low Ton"},
{"question": "What was the Beatles' first single in 1962?", "realAnswer": "Love Me Do", "fakeAnswer1": "Help!", "fakeAnswer2":"I Saw Her Standing There","fakeAnswer3": "I Am the Walrus"},
{"question": "What country was Vincent VanGogh from?", "realAnswer": "The Netherlands", "fakeAnswer1": "France","fakeAnswer2": "Germany","fakeAnswer3": "Austria"},
{"question": "What is the most widely eaten fish in the world?", "realAnswer": "Herring", "fakeAnswer1": "Trout","fakeAnswer2": "Salmon","fakeAnswer3": "Tilapia"}];
//=========================================================
// this is the syntax that works! 
//  var questionForDisplay = trivia[i].question;
//==========================================================


var answersOntoButtons = function(num) {

// Proper syntax on object lookup 
// is working******************************
 var questionForDisplay = trivia[num].question;
 var answerForDisplay = trivia[num].realAnswer;
 var fakeAnswer1ForDisplay = trivia[num].fakeAnswer1;
 var fakeAnswer2ForDisplay = trivia[num].fakeAnswer2;
 var fakeAnswer3ForDisplay = trivia[num].fakeAnswer3;

 //deliver real question to a random button and fake answers to the other three
var randomSpot = Math.floor((Math.random() * 4) + 1);
 //console.log(randomSpot);
//populate buttons with answers
 $("#question").text(questionForDisplay);

switch(randomSpot) {
    case 1:
        $("#butt1").text(answerForDisplay);
        $("#butt2").text(fakeAnswer1ForDisplay);
        $("#butt3").text(fakeAnswer2ForDisplay);
        $("#butt4").text(fakeAnswer3ForDisplay);
        break;
    case 2:
        $("#butt1").text(fakeAnswer1ForDisplay);
        $("#butt2").text(answerForDisplay);
        $("#butt3").text(fakeAnswer2ForDisplay);
        $("#butt4").text(fakeAnswer3ForDisplay);
        break;
    case 4:
        $("#butt1").text(fakeAnswer1ForDisplay);
        $("#butt2").text(fakeAnswer2ForDisplay);
        $("#butt3").text(answerForDisplay);
        $("#butt4").text(fakeAnswer3ForDisplay);
         break;
    case 3:
        $("#butt1").text(fakeAnswer1ForDisplay);
        $("#butt2").text(fakeAnswer2ForDisplay);
        $("#butt3").text(fakeAnswer3ForDisplay);
        $("#butt4").text(answerForDisplay);
        break;
}  //end switch

//==========================================================

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
    //=============================
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
    //==================================
    this.Stop = function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
    };

};

var index = 30;
var obj = new Timer();
obj.Interval = 1000;
obj.Tick = timer_tick;
obj.Start();
//==================
function timer_tick()
{
    index  = index - 1;
    document.getElementById("timerOut").innerHTML = "You have "+index+" seconds remaining to select your answer";
    //$("#butt1").text("Hello world!");
    if (index <= 0) {
        obj.Stop();
        document.getElementById("timerOut").innerHTML = '<p> Time is up! </p>';
        i++;
        index = 30;
        answersOntoButtons(i);  

        obj.Start();
        
    }
}
}



//main process
//================================================================


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
