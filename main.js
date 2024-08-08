function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation for example purposes
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        return true; // Allow form submission
    } else {
        errorMessage.textContent = 'Invalid username or password!';
        return false; // Prevent form submission
    }
}
