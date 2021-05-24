import React, { Component } from 'react';

class Counter  extends Component {

    renderCount() {
         if (this.props.counter.value === 0) return <span className="m-2 bg bg-warning">Zero</span>
         return <span className="m-2 bg bg-primary"> {this.props.counter.value} </span>
        }

    render() { 
        return (
        <div>
            {this.renderCount()} 
            <button 
            onClick={() => this.props.onIncrement(this.props.counter) }
            className="btn btn-secondary btn-sm m-2"
            >Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                Delete</button>
        </div> );
    }
}

export default Counter;