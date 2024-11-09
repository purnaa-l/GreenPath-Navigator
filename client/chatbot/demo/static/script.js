// Toggle chat window visibility
function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
  }
  
  // Handle user input
  function handleUserMessage(event) {
    if (event.key === 'Enter') {
      const userInput = document.getElementById('userInput').value;
      if (userInput.trim() !== '') {
        appendMessage('User', userInput);  // Display user message
        document.getElementById('userInput').value = '';  // Clear input field
        
        // Send message to Flask API and get response
        fetch('/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
          appendMessage('GreenBot', data.response); // Display bot response
        })
        .catch(error => console.error('Error:', error));
      }
    }
  }
  
  // Append message to chat window
  function appendMessage(sender, message) {
    const chatBody = document.getElementById('chatBody');
    const newMessage = document.createElement('p');
    newMessage.textContent = `${sender}: ${message}`;
    chatBody.appendChild(newMessage);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
  }
  