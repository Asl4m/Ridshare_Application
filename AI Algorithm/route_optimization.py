import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key='YOUR_API_KEY')

# Define the start and end locations
start = "Hexaware Technologies, Chennai"
end = "Hexaware Technologies, Bangalore"

# Request directions via driving
directions_result = gmaps.directions(start, end, mode="driving", departure_time=datetime.now())

print(directions_result)
