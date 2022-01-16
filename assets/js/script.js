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
// Starts timer and quiz questions
function startQuiz() {
    startTimer();
}
// decrease timer by one every second and display
function startTimer() {
    var countdown = setInterval(function () {
        timer = timer - 1;
        document.getElementById("seconds").innerText = timer;
    }, 1000);
}