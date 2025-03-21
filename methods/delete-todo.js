const writeToFile = require("../utils/writeToFile")

module.exports = (request, response) => {
    if (request.url.startsWith("/api/todo/") && request.method === "DELETE") {
        const id = request.url.split("/")[3];
        const index = request.todo.findIndex(todo => todo.id === id)
        if (index != -1) {
            request.todo = request.todo.filter(todo => todo.id != id)
            writeToFile(request.todo)
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json")
            response.end(JSON.stringify({ message: "Todo Deleted Successfully", todo: request.todo }))
        } else {
            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify({ message: "Todo Not Found" }));
        }


    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify({ message: "Route Not Found" }));
    }

}