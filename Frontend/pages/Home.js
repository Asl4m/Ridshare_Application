import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to RideShare</h1>
            <Link to="/search">Search Rides</Link>
            <Link to="/post">Post a Ride</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
}

export default Home;
