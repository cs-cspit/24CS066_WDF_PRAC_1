document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('reg-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        messageDiv.style.color = '#d8000c';
        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;

        if (!username || !email || !password || !confirmPassword) {
            messageDiv.textContent = 'All fields are required!';
            return;
        }
        if (!validateEmail(email)) {
            messageDiv.textContent = 'Please enter a valid email address!';
            return;
        }
        if (password.length < 6) {
            messageDiv.textContent = 'Password must be at least 6 characters!';
            return;
        }
        if (password !== confirmPassword) {
            messageDiv.textContent = 'Passwords do not match!';
            return;
        }
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Registration successful!';
        form.reset();
    });

    function validateEmail(email) {
        // Simple email regex
        return /^\S+@\S+\.\S+$/.test(email);
    }
});
