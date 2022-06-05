import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(err, info) {
        console.log(err);
        console.log(info);
    }

    render() {
        if(this.state.hasError) {
            return <div>Something went wrong</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;