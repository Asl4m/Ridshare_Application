import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchRides from './pages/SearchRides';
import PostRide from './pages/PostRide';
import Profile from './pages/Profile';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/search" component={SearchRides} />
                    <Route path="/post" component={PostRide} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
