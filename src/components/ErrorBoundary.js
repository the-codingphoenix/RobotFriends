import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // Lifecycle method to catch errors in children components
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // You can also log error info to an error reporting service here
    }

    render() {
        return this.state.hasError ? 
            <h1>Ooooops. Not good!</h1> 
            : 
            this.props.children;
    }
}

export default ErrorBoundary;