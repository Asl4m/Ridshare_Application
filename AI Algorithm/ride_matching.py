from sklearn.neighbors import NearestNeighbors
import numpy as np

# Sample data for rides
rides = np.array([[12.9715987, 77.594566], [28.7040592, 77.1024902]]) # Lat, Long pairs

# Rider's location
rider_location = [12.935242, 77.624996]

# Finding nearest rides
neighbors = NearestNeighbors(n_neighbors=2, algorithm='ball_tree').fit(rides)
distances, indices = neighbors.kneighbors([rider_location])

print("Nearest Rides:", indices)
