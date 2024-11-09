from flask import Flask, jsonify, request
import random

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    # Get the user's message from the POST request
    user_message = request.json.get("message")
    
    # Simple responses based on the user's message
    bot_responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm doing great, thanks for asking!",
        "bye": "Goodbye! Have a great day!",
        "default": "Sorry, I didn't understand that. Can you please rephrase?"
    }

    # Convert user message to lowercase for easier comparison
    user_message = user_message.lower()

    # Check if the user's message matches a predefined question
    response = bot_responses.get(user_message, bot_responses["default"])

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
