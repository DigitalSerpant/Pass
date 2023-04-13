// Get references to the input fields and button
const usernameInput = document.getElementById('tb1');
const passwordInput = document.getElementById('tb2');
const goButton = document.querySelector('button');

// Add a click event listener to the button
function sus() {

    const username = tb1.value;
    const password = tb2.value;
  
    // Check if the username and password match the expected values
    if (username === 'user' && password === '123456') {
      // If they match, open youtube.com in a new window
      window.open('https://www.youtube.com/', '_blank');
    } else {
      // If they don't match, display an error message
      alert('Error: Invalid username or password');
    }

};
