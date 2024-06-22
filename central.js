// central.js
document.addEventListener('DOMContentLoaded', () => {
    // Mock data
    const onlineUsers = ['Alice', 'Bob', 'Charlie'];
    const updates = ['Update 1', 'Update 2'];
    const news = ['News 1', 'News 2'];
    const products = ['Product 1', 'Product 2'];

    document.getElementById('onlineUsers').textContent = `Users Online: ${onlineUsers.length}`;
    document.getElementById('updatesContainer').innerHTML = updates.join('<br>');
    document.getElementById('newsContainer').innerHTML = news.join('<br>');
    document.getElementById('productsContainer').innerHTML = products.join('<br>');
});
