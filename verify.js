// verify.js
document.getElementById('verifyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredCode = document.getElementById('verificationCode').value;
    const storedCode = localStorage.getItem('verificationCode');
    const email = localStorage.getItem('pendingEmail');

    if (enteredCode === storedCode) {
        alert('Email verified successfully!');

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ email: email, name: email.split('@')[0], notifications: [] });
        localStorage.setItem('users', JSON.stringify(users));

        window.location.href = 'personal.html?email=' + encodeURIComponent(email);
    } else {
        alert('Invalid verification code. Please try again.');
    }
});
