function kirimpesan() {
    var messageInput = document.getElementById('messageInput');
    var chatBox = document.getElementById('chatBox');

    var message = messageInput.value.trim();

    if (message !== '') {
        var newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = message;

        chatBox.appendChild(newMessage);

        
        messageInput.value = '';

        
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
