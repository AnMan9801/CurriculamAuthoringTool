import React, { Component } from 'react'
import TodoHeader from './TodoHeader'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentIndent: "0",

            data : ""
        }
    }
    
    render() {
        return (
            <div className="container text-left">
                <div className="row text-secondary font-weight-bold text-uppercase">
                    {this.props.subjectName}
                </div>
                <TodoHeader />

            </div>
        )
    }
}

export default Todo
