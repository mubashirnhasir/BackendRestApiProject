module.exports = (request, response) => {
    if (request.url === "/api/todo") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify(request.todo))
    }
    else {
        response.statusCode = 404;
        response.end(JSON.stringify({ title: "Cannot get Todos", message: "Cannot get your todos" }))
    }

}