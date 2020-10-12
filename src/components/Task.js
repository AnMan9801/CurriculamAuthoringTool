import React, { Component } from 'react'
import TaskUtilityBtns from './TaskUtilityBtns'

export class Task extends Component {

    render() {
        const { level, id, updateTask } = this.props;
        let rem = level * 2;
        rem = "" + rem + "rem";

        return (
            <div className="row border-top border-bottom font-weight-bold text-secondary ">
                <TaskUtilityBtns />
                <div className="row col-10 text-wrap text-break" style={{ paddingLeft: `${rem}` }}>
                <div className="col-1">
                    <div className="col-2 bg-light pt-2 pb-2">-</div>
                </div>
                <div className="col-10 pt-2 pb-2">
                    < input onChange = {
                            (e) => {
                                updateTask(id,e);
                        }
                    }
                    type = "text"
                    placeholder = "Add standard here."
                    className = {
                        `p-0 m-0 border-0 task-l${level}`
                    }
                    />                        
                </div>
            </div>
        </div>
        )
    }
}

export default Task
