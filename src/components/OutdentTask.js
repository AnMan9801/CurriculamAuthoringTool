// Funtion for indent utility To call brfore set State
const OutdentTask = async ({ id, dataRaw }) => {
    // cannot outdent task at level 0
    if (dataRaw[id]["level"] == 0) {
        return dataRaw;
    }
    // For loop to outdent all child 
    for (let index = id + 1; index < dataRaw.length; index++) {
        if (dataRaw[id]["level"] >= (dataRaw[index]["level"])) {
            break;
        }
        dataRaw[index]["level"]--;
    }
    // update level
    dataRaw[id]["level"]--;
    return dataRaw;
}

export default OutdentTask