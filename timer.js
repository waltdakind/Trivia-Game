$( document ).ready(function() {
    answersOntoButtons(i);
    listenToButtons(i);
    myCounter.start();

    
});
//VARIABLES

//questions and answers
// all the stuff for populating the other stuff
//===============================================
var i = 0;
var round = 1;

//new round start function
var newRound = function() {
    round++;
    i++;
    console.log('the function was called');
    answersOntoButtons(i);
    listenToButtons(i);
    myCounter.start();
}


var myCounter = new Countdown({  
    seconds:30,  // number of seconds to count down
    onUpdateStatus: function(sec){$('#timerOut').text(sec + ' seconds remaining');}, // callback for each second
    onCounterEnd: function(){
     $('#timerOut').text('Time is up!');
     newRound;

 }//final action

});


function Countdown(options) {
  var timer,
  instance = this,
  seconds = options.seconds || 10,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    updateStatus(seconds);
    if (seconds === 0) {
      counterEnd();
      instance.stop();
    }
    seconds--;
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    seconds = options.seconds;
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}

//stop receiving click events once question is answered
//call this after first choice is clicked, reset binding at start of next round
var unbindAllButtons = function() {
        console.log('click unbinder called');
        $("#butt1").unbind("click");
        $("#butt2").unbind("click");
        $("#butt3").unbind("click");
        $("#butt4").unbind("click"); 

}

//ran out of time
var ranOutOfTime = function() {

    if(round<=10) {newRound; }
    else{$('#timerOut').text('Game over!');}
}




var trivia = [ 
{"question": "What was Harry Houdini's real name?", "realAnswer": "Erich Weiss", "fakeAnswer1": "Robert Houdin", "fakeAnswer2":"Neville Maskylne", "fakeAnswer3":"Magic Mike", "answeredCorrectly":false},
{"question": "Rabbits engage in coprophagy, what is that?", "realAnswer": "Eating their own droppings", "fakeAnswer1": "Mating in large groups", "fakeAnswer2":"Mating multiple times ","fakeAnswer3": "Eating grasses and vegetables", "answeredCorrectly":false},
{"question": "Jerry Garcia was missing what finger?", "realAnswer": "Right middle finger", "fakeAnswer1":"Left index finger", "fakeAnswer2":"Right pinkie finger","fakeAnswer3": "Left middle finger", "answeredCorrectly":false},
{"question": "Where is New Belgium Brewing Company located?", "realAnswer": "Fort Collins, Colorado", "fakeAnswer1": "New Belgium, Brussels", "fakeAnswer2":"Golden, CO","fakeAnswer3": "Highgate, VT", "answeredCorrectly":false},
{"question": "What country of Africa has largest population?", "realAnswer": "Nigeria", "fakeAnswer1": "Kenya", "fakeAnswer2":"Egypt","fakeAnswer3":"Libya", "answeredCorrectly":false},
{"question": "Who said -- Do or do not there is no try?", "realAnswer": "Yoda", "fakeAnswer1": "Yogi Berra", "fakeAnswer2":"Robert Schuller","fakeAnswer3": "Matlock", "answeredCorrectly":false},
{"question": "In the film, Thelma and Louise, who co-starred with Geena Davis?", "realAnswer": "Susan Sarandon", "fakeAnswer1": "Bea Arthur", "fakeAnswer2":"Betty White","fakeAnswer3": "Meryl Streep", "answeredCorrectly":false},
{"question": "If you mixed rum, simple syrup, lime juice and selter with some mint leaves you'd have what?", "realAnswer": "A mojito", "fakeAnswer1": "A Cuba Libre", "fakeAnswer2":"A Manhattan","fakeAnswer3": "A Cosmopolitan", "answeredCorrectly":false},
{"question": "In darts getting three bull's eyes in a turn is called what?", "realAnswer": "A hat trick", "fakeAnswer1": "Darn lucky", "fakeAnswer2":"Three in a bed","fakeAnswer3": "A Low Ton", "answeredCorrectly":false},
{"question": "What was the Beatles' first single in 1962?", "realAnswer": "Love Me Do", "fakeAnswer1": "Help!", "fakeAnswer2":"I Saw Her Standing There","fakeAnswer3": "I Am the Walrus", "answeredCorrectly":false},
{"question": "What country was Vincent VanGogh from?", "realAnswer": "The Netherlands", "fakeAnswer1": "France","fakeAnswer2": "Germany","fakeAnswer3": "Austria", "answeredCorrectly":false},
{"question": "What is the most widely eaten fish in the world?", "realAnswer": "Herring", "fakeAnswer1": "Trout","fakeAnswer2": "Salmon","fakeAnswer3": "Tilapia", "answeredCorrectly":false}];
//=========================================================
// this is the syntax that works! 
//  var questionForDisplay = trivia[i].question;
//==========================================================

var listenToButtons = function(num) {

         $('#butt1').on('click', function() {
            var answerForDisplay = trivia[num].realAnswer;
            var playerChoice = $(this).text();
            console.log(playerChoice);
            if (playerChoice === answerForDisplay) {
            //    console.log('success');
            trivia[i].answeredCorrectly = true;
                unbindAllButtons;
                        newRound;
            }
            else {
                console.log('failure');
                unbindAllButtons;
                        newRound;
            }

    });

         
         $('#butt2').on('click', function() {
            var answerForDisplay = trivia[num].realAnswer;
            var playerChoice = $(this).text();
            console.log(playerChoice);
            if (playerChoice === answerForDisplay) {
                console.log('success');
                trivia[i].answeredCorrectly = true;
                unbindAllButtons;
                        newRound;

            }
            else {
                console.log('failure');
                unbindAllButtons;
                        newRound;

            }
            
    });

            $('#butt3').on('click', function() {
            var answerForDisplay = trivia[num].realAnswer;
            var playerChoice = $(this).text();
            console.log(playerChoice);
            if (playerChoice === answerForDisplay) {
            //    console.log('success');
            trivia[i].answeredCorrectly = true;
                unbindAllButtons;
                        newRound;

            }
            else {
                console.log('failure');
                unbindAllButtons;
                        newRound;

            }
    });

            $('#butt4').on('click', function() {
            var answerForDisplay = trivia[num].realAnswer;
            var playerChoice = $(this).text();
            console.log(playerChoice);
            if (playerChoice === answerForDisplay) {
            //    console.log('success');
            trivia[i].answeredCorrectly = true;
                unbindAllButtons;
                        newRound;

            }
            else {
                console.log('failure');
                unbindAllButtons;
                        newRound;
            }
            
    });
}




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

};
//main process
//================================================================






