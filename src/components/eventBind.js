import React, { Component } from 'react';

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }
    
    /* clickHandler() {
        this.setState({
            message: "Goodbye"
        });
        console.log(this);
    } */
    
    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        });
        console.log(this);
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                {/* 1st approach is binding in render. It is not good because the component is re-rendered every time the function is called */}
                {/* <button onClick={ this.clickHandler.bind(this) }>Click</button> */}
                {/* 2nd approach is using an arrow function to call the event handler */}
                {/* <button onClick={ () => this.clickHandler() }>Click</button> */}
                {/* 3rd approach is the best recommended approach by React documentation because the binding is done only once in the constructor */}
                <button onClick={ this.clickHandler }>Click</button>
                {/* 4th approach is the 2nd best approach. It is done by creating the event handler function using arrow functions and it is attached to the button the same way it is done in the 3rd approach */}
            </div>
        )
    }
}

export default EventBind;