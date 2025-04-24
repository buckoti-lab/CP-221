function greetUser() {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
  
    if (hour >= 0 && hour < 5) {
      greeting.textContent = "Good night!";
    } else if (hour >= 5 && hour < 12) {
      greeting.textContent = "Good morning!";
    } else if (hour >= 12 && hour < 17) {
      greeting.textContent = "Good afternoon!";
    } else if (hour >= 17 && hour < 21) {
      greeting.textContent = "Good evening!";
    } else {
      greeting.textContent = "Good night!";
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
  
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Save the user's theme preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
  