import React from 'react'

function TaskUtilityBtns({id, utilIndent, utilOutdent, utilDelete}) {
    return (
        <div className="col-2 p-0">

                <div className=" btn-group mr-2" role="group" aria-label="First group">
                    {/* Move Icon */}
                <button
                    data-toggle="tooltip" data-placement="top" title="move"
                    className="btn pl-0 pr-1 btn-task">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrows-move" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                        </svg>
                    </button>
                    {/* Out Dent Icon */}

                <button
                    data-toggle="tooltip" data-placement="top" title="outdent"
                    onClick={
                    () => {
                        utilOutdent(id)
                    }
                }
                    className="btn pl-0 pr-1 btn-task">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>

                    {/* Indent Icon */}
                < button
                    data-toggle="tooltip" data-placement="top" title="indent"
                    onClick={
                    () => {
                        utilIndent(id)
                    }
                }
                className = "btn pl-0 pr-1 btn-task" >
                    <svg width = "1em"
                height = "1em"
                viewBox = "0 0 16 16"
                className = "bi bi-arrow-right"
                fill = "currentColor"
                xmlns = "http://www.w3.org/2000/svg" >
                    <
                    path fillRule = "evenodd"
                d = "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" / >
                    </svg>
                </button>

                    {/* Delete Icon */}
                < button
                    data-toggle="tooltip" data-placement="top" title="delete"
                    onClick={
                        () => {
                            utilDelete(id)
                        }
                    }
                    className = "btn pl-0 pr-1 btn-task" >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                        </svg>
                    </button>
                </div>
                
            </div>
    )
}

export default TaskUtilityBtns
