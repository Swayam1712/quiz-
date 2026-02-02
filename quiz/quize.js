var playerName = "";
var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 15;
var timerInterval;
var selectedDifficulty = "";
var filteredQuestions = [];
var soundEnabled = true;

var nameSection = document.getElementById("nameSection");
var difficultySection = document.getElementById("difficultySection");
var quizSection = document.getElementById("quizSection");
var resultSection = document.getElementById("resultSection");
var userNameInput = document.getElementById("userName");
var startBtn = document.getElementById("startBtn");
var nameError = document.getElementById("nameError");
var easyBtn = document.getElementById("easyBtn");
var mediumBtn = document.getElementById("mediumBtn");
var hardBtn = document.getElementById("hardBtn");
var soundToggle = document.getElementById("soundToggle");

// Sound Toggle
soundToggle.addEventListener("click", function() {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? "🔊" : "🔇";
});

startBtn.addEventListener("click", function() {
    var name = userNameInput.value.trim();
    
    if (name === "") {
        nameError.textContent = "Please enter your name!";
    } else {
        playerName = name;
        nameError.textContent = "";
        showDifficultySelection();
    }
});

// Show difficulty selection
function showDifficultySelection() {
    nameSection.style.display = "none";
    difficultySection.style.display = "block";
    quizSection.style.display = "none";
    resultSection.style.display = "none";
}

// Difficulty button listeners
easyBtn.addEventListener("click", function() {
    selectedDifficulty = "easy";
    startQuiz();
});

mediumBtn.addEventListener("click", function() {
    selectedDifficulty = "medium";
    startQuiz();
});

hardBtn.addEventListener("click", function() {
    selectedDifficulty = "hard";
    startQuiz();
});

// Function to filter questions by difficulty
function filterQuestionsByDifficulty() {
    filteredQuestions = quizQuestions.filter(function(q) {
        return q.difficulty === selectedDifficulty;
    });
}

// Function to start the quiz
function startQuiz() {
    filterQuestionsByDifficulty();
    
    nameSection.style.display = "none";
    difficultySection.style.display = "none";
    quizSection.style.display = "block";
    resultSection.style.display = "none";
    
    currentQuestionIndex = 0;
    score = 0;
    
    updateScore();
    showQuestion();
}

// Function to show question
function showQuestion() {
    if (currentQuestionIndex < filteredQuestions.length) {
        var question = filteredQuestions[currentQuestionIndex];
        
        
        document.getElementById("currentQuestion").textContent = currentQuestionIndex + 1;
        
        
        document.getElementById("questionText").textContent = question.question;
        
        // Update progress bar
        var progressPercentage = ((currentQuestionIndex) / filteredQuestions.length) * 100;
        document.getElementById("progressBar").style.width = progressPercentage + "%";
        
        
        
        var optionsBox = document.getElementById("optionsBox");
        optionsBox.innerHTML = "";
        
        
        for (var i = 0; i < question.options.length; i++) {
            var button = document.createElement("button");
            button.className = "option-btn";
            button.textContent = question.options[i];
            button.setAttribute("data-index", i);
            
            button.addEventListener("click", checkAnswer);
            
            optionsBox.appendChild(button);
        }
        
        startTimer();
    } else {
        showResult();
    }
}

// Timer function
function startTimer() {
    timeLeft = 15;
    document.getElementById("timer").textContent = timeLeft;
    
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoNextQuestion();
        }
    }, 1000);
}

function checkAnswer(event) {
    clearInterval(timerInterval);
    
    var selectedIndex = parseInt(event.target.getAttribute("data-index"));
    var correctIndex = filteredQuestions[currentQuestionIndex].correct;
    
    var buttons = document.querySelectorAll(".option-btn");
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    

    if (selectedIndex === correctIndex) {
        event.target.className = "option-btn correct";
        score++;
        updateScore();
        playSound("correct");
    } else {
        event.target.className = "option-btn wrong";
        buttons[correctIndex].className = "option-btn correct";
        playSound("wrong");
    }
    

    setTimeout(function() {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function autoNextQuestion() {
    var buttons = document.querySelectorAll(".option-btn");
    var correctIndex = filteredQuestions[currentQuestionIndex].correct;
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    buttons[correctIndex].className = "option-btn correct";
    
    setTimeout(function() {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function updateScore() {
    document.getElementById("currentScore").textContent = score;
}

function playSound(type) {
    if (!soundEnabled) return;
    
    var audio = type === "correct" ? 
        document.getElementById("correctSound") : 
        document.getElementById("wrongSound");
    
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(function(error) {
            console.log("Audio playback failed:", error);
        });
    }
}

function showResult() {
    quizSection.style.display = "none";
    resultSection.style.display = "block";
    
    // Complete the progress bar
    document.getElementById("progressBar").style.width = "100%";
    
    document.getElementById("resultName").textContent = playerName;
    document.getElementById("finalScore").textContent = score;
    
    saveScore();
    updateLeaderboard();
}

function saveScore() {
    var date = new Date();
    var dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    
    var scoreData = {
        name: playerName,
        score: score,
        difficulty: selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1),
        date: dateString
    };
    
    var allScores = localStorage.getItem("quizScores");
    
    if (allScores === null) {
        var scoresArray = [];
        scoresArray.push(scoreData);
        localStorage.setItem("quizScores", JSON.stringify(scoresArray));
    } else {
        var scoresArray = JSON.parse(allScores);
        scoresArray.push(scoreData);
        localStorage.setItem("quizScores", JSON.stringify(scoresArray));
    }
}

var playAgainBtn = document.getElementById("playAgainBtn");
playAgainBtn.addEventListener("click", function() {
    resultSection.style.display = "none";
    nameSection.style.display = "block";
    userNameInput.value = "";
    selectedDifficulty = "";
});