// Funtion for indent utility To call brfore set State
const DeleteTask = async ({
    id,
    dataRaw
}) => {
    // can only clear task 0
    if (id == 0) {
        dataRaw = [{
            level: 0,
            textTask: ""
        }];
        return dataRaw;
    }
    // For loop to delete all child 
    // get index of last child and splice till that
    let index = id;
    for (index = id + 1; index < dataRaw.length; index++) {
        if (dataRaw[id]["level"] == (dataRaw[index]["level"])) {
            break;
        }
    }
    // splice
    dataRaw.splice(id,index-1);

    return dataRaw;
}

export default DeleteTask