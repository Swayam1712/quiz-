
function updateLeaderboard() {
    var allScores = localStorage.getItem("quizScores");
    
    if (allScores !== null) {
        var scoresArray = JSON.parse(allScores);
        
        // sort the score high to low
        scoresArray.sort(function(a, b) {
            return b.score - a.score;
        });
        
        
        var tbody = document.getElementById("leaderboardBody");
        tbody.innerHTML = "";
        
        // add thepreviose score in the table
        for (var i = 0; i < scoresArray.length; i++) {
            var row = document.createElement("tr");
            
            
            if (i === 0) {
                row.className = "rank-1";
            } else if (i === 1) {
                row.className = "rank-2";
            } else if (i === 2) {
                row.className = "rank-3";
            }
            
            
            var rankCell = document.createElement("td");
            rankCell.textContent = i + 1;
            row.appendChild(rankCell);
            
            
            var nameCell = document.createElement("td");
            nameCell.textContent = scoresArray[i].name;
            row.appendChild(nameCell);
            
            
            var scoreCell = document.createElement("td");
            var difficulty = scoresArray[i].difficulty ? " (" + scoresArray[i].difficulty + ")" : "";
            scoreCell.textContent = scoresArray[i].score + "/10" + difficulty;
            row.appendChild(scoreCell);
            
            
            var dateCell = document.createElement("td");
            dateCell.textContent = scoresArray[i].date;
            row.appendChild(dateCell);
            
            tbody.appendChild(row);
        }
    } else {
        var tbody = document.getElementById("leaderboardBody");
        tbody.innerHTML = "<tr><td colspan='4' style='text-align: center; padding: 20px; color: #999;'>No scores yet. Play the quiz to add scores!</td></tr>";
    }
}


var clearHistoryBtn = document.getElementById("clearHistoryBtn");
clearHistoryBtn.addEventListener("click", function() {
    var confirmClear = window.confirm("Are you sure you want to clear the leaderboard?");
    
    if (confirmClear) {
        localStorage.removeItem("quizScores");
        updateLeaderboard();
    }
});

var historyLink = document.querySelector(".nav-link");
historyLink.addEventListener("click", function(e) {
    e.preventDefault();

    var historySection = document.getElementById("leaderboard");
    historySection.scrollIntoView({ behavior: "smooth" });
});


window.addEventListener("load", function() {
    updateLeaderboard();
});