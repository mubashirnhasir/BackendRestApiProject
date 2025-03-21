const fs = require("fs")
const path = require("path")


const writeToFile = (data) => {
    try {
        fs.writeFileSync(path.join(__dirname, "../data/todo.json"), JSON.stringify(data, null, 2))
    } catch (error) {
        console.log("Error in writing into file", error);
    }
}

module.exports = writeToFile;