CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    role ENUM('Rider', 'Driver', 'Admin') DEFAULT 'Rider'
);

CREATE TABLE Rides (
    ride_id INT PRIMARY KEY AUTO_INCREMENT,
    driver_id INT,
    start_location VARCHAR(100),
    end_location VARCHAR(100),
    date DATE,
    time TIME,
    available_seats INT,
    FOREIGN KEY (driver_id) REFERENCES Users(id)
);

CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    ride_id INT,
    amount DECIMAL(10, 2),
    rider_id INT,
    status VARCHAR(50),
    FOREIGN KEY (ride_id) REFERENCES Rides(ride_id),
    FOREIGN KEY (rider_id) REFERENCES Users(id)
);
