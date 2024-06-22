// chat.js
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value;

    if (message.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
