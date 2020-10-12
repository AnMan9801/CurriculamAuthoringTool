// Funtion for indent utility To call brfore set State
const IndentTask = async ({ id, dataRaw }) => {
    // let dataRaw = this.state.dataArray;

    // cannot indent first task
    if (id == 0) {
        return dataRaw;
    }
    // cannot indent more than one level to parent
    if (dataRaw[id]["level"] == (dataRaw[id - 1]["level"] + 1)) {
        return dataRaw;
    }
    // For loop to indent all child 
    for (let index = id + 1; index < dataRaw.length; index++) {
        if (dataRaw[id]["level"] >= (dataRaw[index]["level"])) {
            break;
        }
        dataRaw[index]["level"]++;
    }
    // update level
    dataRaw[id]["level"] = dataRaw[id]["level"] + 1;
    return dataRaw;
}

export default IndentTask