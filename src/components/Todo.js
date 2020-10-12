import React, { Component } from 'react'
import AddTask from './AddTask'
import DeleteTask from './DeleteTask'
import IndentTask from './IndentTask'
import OutdentTask from './OutdentTask'
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
                    level: 0,
                    textTask: ""
                }
            ]
        }
    }
    
    // function to add task to the list
    addTask = () => {
        const taskElement = {
            level: 0,
            textTask: ""
        }
        const dataRaw = this.state.dataArray;
        // let previousIndexArray = dataRaw[dataRaw.length - 1]["index"].split(".");
        // previousIndexArray[previousIndexArray.length - 1] = parseInt(previousIndexArray[previousIndexArray.length - 1]) + 1;

        // taskElement["index"] = previousIndexArray.join(".");
        taskElement["level"] = dataRaw[dataRaw.length - 1]["level"];

        dataRaw.push(taskElement);
        this.setState({
            dataArray: dataRaw
        })
    } 

    // function to update task
    updateTask = (id, event) => {
        const updateAsync = async ({id, dataRaw, updateText}) => {
            dataRaw[id]["textTask"] = updateText;
            return dataRaw;
        }
        updateAsync({id: id, dataRaw: this.state.dataArray, updateText: event.target.value }).then((result) => {
            this.setState({
                dataArray : result
            })
        }); 
    }

    // function to indent task
    utilIndent = (id) => {
        IndentTask({id: id, dataRaw: this.state.dataArray }).then((result) => {
            this.setState({
                dataArray : result
            })
        });    
    }

    // function to outdent task
    utilOutdent = (id) => {
        OutdentTask({ id:id, dataRaw:this.state.dataArray }).then((result) => {
            this.setState({
                dataArray : result
            })
        });    
    }

    // function to delete task
    utilDelete = (id) => {
        DeleteTask({id: id, dataRaw: this.state.dataArray }).then((result) => {
            this.setState({
                dataArray : result
            })
        });    
    }

    // Render
    render() {
        
        return (
            <div className="container text-left">
                <div className="row font-weight-bold text-uppercase text-inst">
                    {this.props.subjectName}
                </div>

                {/* Component for Head row */}
                <TodoHeader />

                {/* map for adding tasks */}
                {/* <Task indent="0" updateTask={this.updateTask}/> */}
                {
                    this.state.dataArray.map((task, index) => {
                        return <Task
                        key = {
                            index
                        }
                        id = {
                            index
                        }
                        level = {
                            task.level
                        }
                        textTask = {
                            task.textTask
                        }
                        updateTask = {
                            this.updateTask
                        }
                        utilIndent = {
                            this.utilIndent
                        }
                        utilOutdent = {
                            this.utilOutdent
                        }
                        utilDelete = {
                            this.utilDelete
                        }
                                />
                    } ,this)
                }
                
                {/* Component for button to add task */}
                <AddTask addTaskHandler={this.addTask} />

            </div>
        )
    }
}

export default Todo
