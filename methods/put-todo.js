const requestBodyParser = require("../utils/body-parser")
const writeToFile = require("../utils/writeToFile")

module.exports = async (request, response) => {
    if (request.url.startsWith("/api/todo/") && request.method === "PUT") {
        try {
            const id = request.url.split("/")[3];
            let body = await requestBodyParser(request)
            const index = request.todo.findIndex(todo => todo.id === id)
            if (index != -1) {
                request.todo[index] = { ...request.todo[index], ...body }
                writeToFile(request.todo)
                response.statusCode = 200;
                response.setHeader("Content-Type", "application/json")
                response.end(JSON.stringify({ message: "Todo Updated Succssfully", todo: request.todo[index] }))
            }

            else {
                response.statusCode = 404;
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify({ title: "Not Found", message: "Todo not found with the given ID" }));
            }
        } catch (error) {
            response.statusCode = 500
            response.setHeader("Content-Type", "application/json")
            response.end(JSON.stringify({ title: "Cannot get Todos", message: "Routes not found" }))
        }
    }
    else {
        response.statusCode = 404
        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify({ title: "Cannot get Todos", message: "Routes not found" }))
    }


}