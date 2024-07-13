import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// Main App component
class App extends Component {
    constructor() {
        super();
        // Initializing the state with an empty list of robots and an empty search field
        this.state = {
            robots: [], 
            searchfield: ''
        };
        // Binding the method to the current instance of the class
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    // Lifecycle method called after the component is mounted
    componentDidMount() {
        // Fetching users data from the API and setting it to the robots state
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
    }

    // Method to handle changes in the search input
    onSearchChange(event) {
        // Update the state with the new value of the search field
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const {robots, searchfield} = this.state;
        // Filtering the robots based on the search field input
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        // Check if robots data is still loading
        return !robots.length ? 
            // Show loading message while fetching data
            <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* Passing the searchChange method to the SearchBox component */}
                <SearchBox searchChange={this.onSearchChange} />
                {/* Wrapping the CardList component with the Scroll component for scrollable content */}
                <Scroll>
                    {/* Passing the filtered robots to the CardList component */}
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;