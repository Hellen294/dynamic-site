// signup.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    // Mock email verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem('pendingEmail', email);
    localStorage.setItem('verificationCode', verificationCode);

    alert(`Verification email sent to ${email} with code: ${verificationCode}`);
    window.location.href = 'verify.html';
});
