import React from 'react'

function AddTask(props) {
    return (
        <div className="row mt-3">
            <button onClick={props.addTaskHandler} type="button" className="btn-addTask btn btn-sm btn-block rounded p-2">
                + Add a standard
            </button>
        </div>
    )
}

export default AddTask
