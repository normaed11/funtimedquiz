// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//Button Timer on 75
var timer = 75;
// Starts timer and shows first quiz question
function startQuiz() {
    startTimer();
    document.getElementById("question1").style.display = "block";
    document.getElementById("startpage").style.display = "none";
}
// decrease timer by one every second and display
var ms = 0;
var countdown;
function startTimer() {
    countdown = setInterval(function () {
        ms = ms + 100;
        if (ms % 1000 == 0) {
            timer = timer - 1;
        }
        document.getElementById("seconds").innerText = timer;
        if (timer <= 0) {
            timer = 0;
            gameOver();
        }
    }, 100);

}
// Display Incorrect or Correct and move to next question
function isCorrect(question, correct) {
    if (correct == false) {
        timer = timer - 15;
        document.getElementById("result").innerHTML = "Incorrect";
    }
    else {
        document.getElementById("result").innerHTML = "Correct";
    }
    var next = question + 1;
    document.getElementById("question" + question).style.display = "none";
    if (next > 5) {
        gameOver();
    }
    else {
        document.getElementById("question" + next).style.display = "block";
    }
}
function gameOver() {
    var score = timer;
    clearInterval(countdown);

    document.getElementById("gameoverpage").style.display = "block";

}