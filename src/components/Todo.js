import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = "indent-0"
    }
    
    render() {
        return (
            <div className="container border">
                <div className="row text-uppercase">{this.props.subjectName}</div>
            </div>
        )
    }
}

export default Todo
