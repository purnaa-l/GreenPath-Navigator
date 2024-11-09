import requests
import random

# Token for air quality API (replace with your token)
API_TOKEN = "ef07f1b896e6842a1b1233c8ee916f84155ed377"

# Function to get air quality data for a specified city
def get_air_quality(city="beijing"):
    url = f"https://api.waqi.info/feed/{city}/?token={API_TOKEN}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if data['status'] == "ok":
            aqi = data['data']['aqi']
            pm25 = data['data']['iaqi'].get('pm25', {}).get('v', 'N/A')
            city_name = data['data']['city']['name']
            return f"The current AQI in {city_name} is {aqi}. PM2.5 level is {pm25}."
        else:
            return "Failed to retrieve air quality data."
    else:
        return "Error connecting to the air quality API."

# Mocked Gemini trend analysis function
def gemini_trend_analysis():
    trends = [
        "Renewable energy usage has increased by 10% this year.",
        "More cities are adopting electric buses to reduce emissions.",
        "Sustainable agriculture practices are gaining popularity.",
        "Water-saving initiatives have been launched in multiple regions."
    ]
    return random.choice(trends)

# Simple chatbot function
def sustainability_chatbot():
    print("Welcome to the Sustainability Chatbot! Type 'exit' to quit.")

    while True:
        user_input = input("You: ").strip().lower()

        if user_input == "exit":
            print("Bot: Thank you for using the Sustainability Chatbot. Stay green!")
            break
        
        elif "air quality" in user_input or "aqi" in user_input:
            print("Bot: Let me fetch the air quality data for you...")
            city = input("Please enter the city you want to check (default is Beijing): ") or "beijing"
            result = get_air_quality(city)
            print(f"Bot: {result}")

        elif "sustainability tip" in user_input or "eco tip" in user_input:
            tips = [
                "Reduce, reuse, and recycle to minimize waste.",
                "Consider using public transportation to reduce your carbon footprint.",
                "Save energy by turning off lights when you leave a room.",
                "Use a reusable water bottle to cut down on plastic waste."
            ]
            print(f"Bot: {random.choice(tips)}")

        elif "news" in user_input or "trend" in user_input:
            print("Bot: Fetching the latest sustainability trend analysis...")
            trend = gemini_trend_analysis()
            print(f"Bot: {trend}")

        else:
            print("Bot: I'm here to provide air quality updates, sustainability tips, and trends. Try asking about air quality or for an eco tip!")

# Run the chatbot
sustainability_chatbot()
