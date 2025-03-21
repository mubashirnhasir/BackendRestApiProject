const Crypto = require("crypto")
const requestBodyParser = require("../utils/body-parser")
const writeToFile = require("../utils/writeToFile")
module.exports = async (request, response) => {
    if (request.url === "/api/todo" && request.method === "POST") {
        try {
            let body = await requestBodyParser(request)
            // TODO
            const id = Crypto.randomUUID()
            body.id = id;
            console.log(body.id)
            request.todo.push(body)
            writeToFile(request.todo)
            response.statusCode = 201;
            response.setHeader("Content-Type", "application/json")
            response.end(JSON.stringify({ message: "Todos Added Succesfully", todo: body }))
        } catch (error) {
            console.log(error)
            response.statusCode = 500;
            response.end(JSON.stringify({ error: "Internal server Error" }))
        }
    }
    else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify({ title: "Cannot get Todos", message: "Routes not found" }))
    }
}