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


// Score
var scores = [];
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
        timer = timer - 10;
        document.getElementById("result").innerHTML = "Incorrect";
        document.getElementById("result").style.color = "red";
    }
    else {
        document.getElementById("result").innerHTML = "Correct";
        document.getElementById("result").style.color = "green";
    }
    setTimeout(function () {
        document.getElementById("result").innerHTML = "";
    }, 2000);
    var next = question + 1;
    document.getElementById("question" + question).style.display = "none";
    if (next > 5) {
        gameOver();
    }
    else {
        document.getElementById("question" + next).style.display = "block";

    }
}
// Shows game over page and stops timer
function gameOver() {
    clearInterval(countdown);
    document.getElementById("seconds").innerText = timer;
    var pages = document.querySelectorAll("#quiz>div");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    document.getElementById("gameoverpage").style.display = "block";
}
// Puts scores into array, sorts and displays it
function submitScore() {
    var initials = document.getElementById("initials").value;
    var score = timer;
    var object = {
        "initials": initials,
        "score": score
    };
    scores.push(object);
    scores.sort(function (a, b) {
        return b.score - a.score;
    });
    document.getElementById("scores").innerHTML = "";
    for (var i = 1; i < scores.length + 1; i++) {
        var div = document.createElement("div");
        div.innerHTML = "<b>" + i + "</b> " + scores[i - 1].initials + " - " + scores[i - 1].score;
        document.getElementById("scores").appendChild(div);
    }
    document.getElementById("gameoverpage").style.display = "none";
    document.getElementById("scorespage").style.display = "block";
}
// If: Shows start page and resets timer
// else: goes back to previous page
function goBack(restart) {
    document.getElementById("scorespage").style.display = "none";
    if (restart) {
        document.getElementById("startpage").style.display = "block";
        timer = 75;
        document.getElementById("seconds").innerText = timer;
    } else {
        document.getElementsByClassName("previous")[0].style.display = "block";
        document.getElementsByClassName("previous")[0].classList.remove("previous");
        document.getElementById("backbutton").setAttribute("onclick", "goBack(true)");
    }
}
// Clear scores
function clearScores() {
    document.getElementById("scores").innerHTML = "";
    scores = []
}
// View Scores and hide current page
function viewScores() {
    var current = document.querySelector("#quiz>div[style*='display: block']");
    current.classList.add("previous");
    current.style.display = "none";
    document.getElementById("backbutton").setAttribute("onclick", "goBack(false)");
    document.getElementById("scorespage").style.display = "block";

}