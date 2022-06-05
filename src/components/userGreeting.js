/* 
    **********          Conditional Rendering       **********
    *      Using if-else statement
    **     Using element variables
    ***    Using ternary conditional operator
    ****   Using short circuit operator
*/

import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // Using if-else statement
        /* if (this.state.isLoggedIn) {
            return <div>Welcome Benjamin</div>
        } else {
            return <div>Welcome Guest</div>
        } */

        // Using JS element variables. They can help in rendering only a part of a component or the whole component
        /* let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome Benjamin</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return message; */

        // Using ternary operator
        /* return (
            this.state.isLoggedIn
            ? <div>Welcome Benjamin</div>
            : <div>Welcome Guest</div>
        ) */

        // Using the short circuit operator. If the condition evaluates to false, nothing is rendered
        return this.state.isLoggedIn && <div>Welcome Benjamin</div>
    }
}

export default UserGreeting;