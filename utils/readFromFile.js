const fs = require("fs")
const path = require("path")


const readFromFile = ()=>{
    try {
        const data = fs.readFileSync(path.join(__dirname, "../data/todo.json"), "utf-8")
        return JSON.parse(data) || []
        
    } catch (error) {
        console.log(error);
        return []
    }
}




module.exports = readFromFile;