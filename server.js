const http = require("http")
require("dotenv").config
const PORT = process.env.PORT || 5001
const getReq = require("./methods/get-todo")
const postReq = require("./methods/post-todo")
const putReq = require("./methods/put-todo")
const deleteReq = require("./methods/delete-todo")
const todo = require("./data/todo.json")

const server = http.createServer((request, response) => {
    request.todo = todo
    switch (request.method) {
        case "GET":
            getReq(request, response)
            break;
        case "POST":
            postReq(request, response)
            break;
        case "PUT":
            putReq(request, response)
            break;
        case "DELETE":
            deleteReq(request, response)
            break;
        default:
            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json")
            response.write(JSON.stringify({ title: "Page Not Found", message: "Kahin aur dhoond jo tu dhioondra" }))
            response.end()
        }
        


})


server.listen(PORT, () => {
    console.log(`Listing on port number : ${PORT}`);

})