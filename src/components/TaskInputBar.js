import React from 'react'

function TaskInputBar({id,level,updateTask,rem,textTask}) {
    return (       
        <div className="row col-10 text-wrap text-break" style={{ paddingLeft: `${rem}` }}>
                <div className="col-1">
                    <div className="col-2 bg-light pt-2 pb-2">-</div>
                </div>
                <div className="col-10 pt-2 pb-2">
                < input onChange = {
                    (e) => {
                        updateTask(id, e);
                    }
                }
                type = "text"
                placeholder = "Add standard here."
                className = {
                    `container-fluid p-0 m-0 border-0 task-l${level>3 ? 3:level} text-wrap text-break`
                }
                value = {
                    `${textTask}`
                }
                /> 
                </div>
            </div>
    )
}

export default TaskInputBar
