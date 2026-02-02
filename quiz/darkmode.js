// Dark Mode Toggle Script

const darkModeToggle = document.getElementById("darkModeToggle");
const htmlElement = document.documentElement;


function initializeDarkMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-mode");
        darkModeToggle.textContent = "🌙";
    }
}

// Toggle dark mode
darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    
    
    darkModeToggle.textContent = isDarkMode ? "☀️" : "🌙";
});

// Initialize on page load
initializeDarkMode();
