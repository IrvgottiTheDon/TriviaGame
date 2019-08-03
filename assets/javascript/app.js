var timeRemaining=30;
var timerID = setInterval (countDown, 1000);
var numberOfCorrectAnswers=0;
var numberOfIncorrectAnswers=0;

//Update the timer on the screen
function updateTimerOnScreen(){
    document.getElementById("timer").innerHTML = timeRemaining;
    timeRemaining--;

}

//score the answer
function scoreAnswers (){
    var answer1, answer2, answer3, answer4, answer5;

    //OLD WAY OF CHECKING THE SELECTED INPUT
    // if (document.getElementById("choice1").checked){
    //     answer1 = document.getElementById("choice1").nodeValue;

    // }
    // else if (document.getElementById("choice2").checked){
    //     answer1 = document.getElementById("choice2").value;
    // }

    // else if (document.getElementById("choice3").checked){
    //     answer1 = document.getElementById("choice3").value;
    // }

    //NEW WAY OF CHECKING SELECTED INPUT USING JQUERY
    answer1 = $ ("#question1 input:checked").val();
    answer2 = $ ("#question2 input:checked").val();
    answer3 = $ ("#question3 input:checked").val();
    answer4 = $ ("#question4 input:checked").val();
    answer5 = $ ("#question5 input:checked").val();

    //CHECK OUR ANSWERS

    //ANSWER1
    if (answer1 == "D") {
        numberOfCorrectAnswers++;
    }
    else{
        numberOfIncorrectAnswers++;
    }

//ANSWER2
    if (answer2 == "question1") {
        numberOfCorrectAnswers++;
    }
    else{
        numberOfIncorrectAnswers++;
    }

//ANSWER3
    if (answer3== "question1") {
        numberOfCorrectAnswers++;
    }
    else{
        numberOfIncorrectAnswers++;
    }

//ANSWER4
    if (answer4 == "question1") {
        numberOfCorrectAnswers++;
    }
    else{
        numberOfIncorrectAnswers++;
    }

//ANSWER5
    if (answer5 == "question1") {
        numberOfCorrectAnswers++;
    }
    else{
        numberOfIncorrectAnswers++;
    }








    //tell player how many right answers
   console.log("You Have " + numberOfCorrectAnswers + " Correct Answers");
   document.getElementById("CorrectAnswers").innerHTML = "You Have " + numberOfCorrectAnswers + " Correct Answers";

    //tell player how many wrong answers
    console.log("You Have " + numberOfIncorrectAnswers + " Incorrect Answers");
    document.getElementById("IncorrectAnswers").innerHTML = "You Have " + numberOfIncorrectAnswers + " Incorrect Answers";
}
 //countdown the timer
 function countDown() {
     if (timeRemaining < 0) {
        clearTimeout (timerID);
        scoreAnswers();
     }
     else {
         updateTimerOnScreen();
     }
 }


