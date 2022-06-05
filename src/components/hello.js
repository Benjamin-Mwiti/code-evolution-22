import React from 'react';

const Hello = () => {
    // Using JSX to create HTML elements
    return (
        <h1 className='hello'>Hello world</h1>
    )
    // Non-JSX syntax of creating the HTML elements
    /* return React.createElement(
      'div', {
        className: 'hello'
      },
      React.createElement('h1', null, 'Hello Coder')
    ); */
}

export default Hello;