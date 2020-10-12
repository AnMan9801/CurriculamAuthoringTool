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
                    level: 0,
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
            level: 0,
            textTask: null,
        }
        const dataRaw = this.state.dataArray;
        let previousIndexArray = dataRaw[dataRaw.length - 1]["index"].split(".");
        previousIndexArray[previousIndexArray.length - 1] = parseInt(previousIndexArray[previousIndexArray.length - 1]) + 1;

        taskElement["index"] = previousIndexArray.join(".");
        taskElement["level"] = dataRaw[dataRaw.length - 1]["level"];

        dataRaw.push(taskElement);

        this.setState({
            dataArray: dataRaw
        })
    } 

    // function to update task
    updateTask = (id, event) => {
        let dataRaw = this.state.dataArray;
        dataRaw[id]["textTask"] = event.target.value;
        this.setState({
            dataArray: dataRaw
        }
        //, () => {console.log(this.state.dataTree)}
        )
    }

    // function to indent task
    utilIndent = (id) => {
        // const dataRaw = this.updateLevel(id).then(
        //     this.setState({
        //     dataArray : dataRaw
        // }));

        this.updateLevel(id).then((result) => {
            this.setState({
                dataArray : result
            })
        });
        
    }
    // fUNCTION TO CALL FROM UTILLiNDENT
    updateLevel = async(id) => {
        let dataRaw = this.state.dataArray;
        // Manage lavel for indent
        // cannot indent first task
        if (id == 0) {
            return dataRaw;
        }
        // cannot indent more than one level to parent
        if (dataRaw[id]["level"] == (dataRaw[id - 1]["level"]+1 )) {
            return dataRaw;
        }
        // For loop for child 
        for (let index = id + 1; index < dataRaw.length; index++) {
            
            if (dataRaw[id]["level"] == (dataRaw[index]["level"])) {
                break;
            }
            dataRaw[index]["level"]++;
        }
        // update level
        dataRaw[id]["level"] = dataRaw[id]["level"] + 1;
        return dataRaw;
    }

    // function to outdent task
    utilOutdent = (id, event) => {
        
        let dataRaw = this.state.dataArray;
        if (dataRaw[id]["level"] == 0) {
            return;
        }
        dataRaw[id]["level"] = dataRaw[id]["level"] - 1;
        this.setState({
            dataArray : dataRaw
        })
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
                        return <Task
                                key={
                                    index
                                }
                                id = {
                                    index
                                }
                                level = {
                                    task.level
                                }
                                updateTask = {
                                    this.updateTask
                                }
                            utilIndent={
                                    this.utilIndent
                                }
                            utilOutdent={
                                this.utilOutdent
                            }
                            utilDelete={
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
