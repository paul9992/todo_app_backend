const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/tasks", function (request, response) {

  const tasklist = ['Get up', 'Get out of bed', 'Drag a comb across my head'];

  response.json({
    message: `Here is your hard-coded list of tasks: ${tasklist}`
  });
});

module.exports.handler = serverless(app);
