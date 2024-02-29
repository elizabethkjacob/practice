document.getElementById('showLoginFormBtn').addEventListener('click', function() {
    document.getElementById('loginFormContainer').classList.remove('hidden');
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your login logic here
  });
  