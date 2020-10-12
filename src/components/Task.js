import React, { Component } from 'react'
import TaskInputBar from './TaskInputBar';
import TaskUtilityBtns from './TaskUtilityBtns'

export class Task extends Component {

    render() {
        const { level, id, updateTask, utilIndent, utilOutdent, utilDelete} = this.props;
        let rem = level * 2;
        rem = "" + rem + "rem";

        return (
            <div className="row border-top border-bottom font-weight-bold text-secondary ">
                <TaskUtilityBtns id={id} utilIndent={utilIndent} utilDelete = {utilDelete} utilOutdent={utilOutdent} />
                <TaskInputBar id={id} level={level} updateTask={updateTask} rem={rem} />
        </div>
        )
    }
}

export default Task
