import React, {Component, PureComponent} from 'react';
import MemoComp from './memoComp';
import PureComp from './pureComp';
import RegComp from './regComp';

class ParentComp extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Benjamin'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Benjamin'
            });
        }, 1000);
    }

    render() {
        console.log("*****Parent Component*****");
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;