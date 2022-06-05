import React, {Component} from 'react';
import Input from './input';

class FocusInput extends Component {
    constructor() {
        super()
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        console.log(this);
        console.log(this.componentRef.current);
        this.componentRef.current.focusInput();
    }
    
    render() {
        return (
            <>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </>
        )
    }
}

export default FocusInput;