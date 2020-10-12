import React, { Component } from 'react'
import AddTask from './AddTask'
import Task from './Task'
import TodoHeader from './TodoHeader'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentIndent: "0",
            dataArray: [
                {
                    index: ".0",
                    level: "0",
                    textTask: null,
                },
                {
                    index: ".1",
                    level: "0",
                    textTask: null,
                }
            ]
        }
    }
    
    // function to add task to the list
    addTask = () => {
        console.log("button clicked")
    } 

    // function to update task
    updateTask = (id, event) => {
        console.log(event.target.value);

        const dataRow = this.state.dataArray;
        dataRow[id]["textTask"] = event.target.value;
        this.setState({
            dataTree: dataRow
        },
        () => {console.log(this.state.dataTree)}
        )
    }

    // Render
    render() {
        
        return (
            <div className="container text-left">
                <div className="row text-secondary font-weight-bold text-uppercase">
                    {this.props.subjectName}
                </div>

                {/* Component for Head row */}
                <TodoHeader />

                {/* map for adding tasks */}
                {/* <Task indent="0" updateTask={this.updateTask}/> */}
                {
                    this.state.dataArray.map((task, index) => {
                        return <Task key={index} id={index} indent={task.level} updateTask={this.updateTask}/>
                    } ,this)
                }
                
                {/* Component for button to add task */}
                <AddTask addTaskHandler={this.addTask} />

            </div>
        )
    }
}

export default Todo
