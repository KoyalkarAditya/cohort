const express = require("express"); //exports the Express.js framework
const port = 3000;
const app = express(); //creates a instance of a express application allowing to define routes, middleware, and handle HTTP requests.
app.get("/courses", (req, res) => {
  //The app.get() method sets up a route for handling GET requests at the "/courses" endpoint.
  //req represents the request object, containing information about the incoming request (e.g., query parameters, request headers, etc.).
  //res represents the response object, which is used to send a response back to the client.
  res.json({
    name: "Aditya",
    age: 20,
  });
});
app.get("/", (req, res) => {
  res.send("Hello!");
});
app.listen(port); // Method to start the Express server and make it listen on a specified port.
//create a todo app thats lets users store todo in server
//create https in C,rust using actix-web,golang using gurilla framework,spring boot java
