import React, { Component } from 'react';

class Output extends Component {
    render(props) {
        return <div className="result">
            <p>{this.props.result}</p>
        </div>
    }
}

export default Output;