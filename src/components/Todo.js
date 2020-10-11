import React, { Component } from 'react'
import AddTask from './AddTask'
import Task from './Task'
import TodoHeader from './TodoHeader'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentIndent: "0",

            data : ""
        }
    }
    
    // function to add task to the list
    addTask = () => {
        console.log("button clicked")
    } 

    render() {
        return (
            <div className="container text-left">
                <div className="row text-secondary font-weight-bold text-uppercase">
                    {this.props.subjectName}
                </div>
                <TodoHeader />
                <Task indent="0" />
                {

                }
                <AddTask addTaskHandler={this.addTask} />
            </div>
        )
    }
}

export default Todo
