const express = require("express");
const serverless = require("serverless-http");
const app = express();



app.get("/tasks", function (request, response) {

  const tasklist = [
    {taskid: 1, completed: true,  taskname: 'Get up'},
    {taskid: 2, completed: false, taskname: 'Get out of bed'},
    {taskid: 3, completed: true,  taskname: 'Drag a comb across my head'}
  ];

  response.json(tasklist);
  
});

module.exports.handler = serverless(app);
