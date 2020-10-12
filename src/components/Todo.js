import React, { Component } from 'react'
import AddTask from './AddTask'
import Task from './Task'
import TodoHeader from './TodoHeader'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            latestIndent: "0",
            latestTaskIndex: "0",
            dataArray: [
                {
                    index: "0",
                    level: "0",
                    textTask: null,
                },
            ]
        }
    }
    
    // function to add task to the list
    addTask = () => {
        console.log("button clicked");
        const taskElement = {
            index: "0",
            level: "0",
            textTask: null,
        }
        const dataRow = this.state.dataArray;
        let previousIndexArray = dataRow[dataRow.length - 1]["index"].split(".");
        previousIndexArray[previousIndexArray.length - 1] = parseInt(previousIndexArray[previousIndexArray.length - 1]) + 1;

        taskElement["index"] = previousIndexArray.join(".");
        taskElement["level"] = dataRow[dataRow.length - 1]["level"];

        dataRow.push(taskElement);

        this.setState({
            dataArray: dataRow
        })
    } 

    // function to update task
    updateTask = (id, event) => {
        const dataRow = this.state.dataArray;
        dataRow[id]["textTask"] = event.target.value;
        this.setState({
            dataArray: dataRow
        }
        //, () => {console.log(this.state.dataTree)}
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
