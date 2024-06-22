// personal.js
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);

    if (user) {
        welcomeMessage.textContent = `Welcome, ${user.name}`;
    } else {
        welcomeMessage.textContent = `Welcome, Guest`;
    }

    const notificationLabel = document.getElementById('notificationLabel');
    if (user.notifications.length > 0) {
        notificationLabel.textContent = `You have ${user.notifications.length} new notifications.`;
    }
});
