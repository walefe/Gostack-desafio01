const express = require("express");

const server = express();

server.use(express.json());

const projects = [];

function CheckProjectsExists(req, res) {
  const project = req.body;
}

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params.id;
  const { title } = req.body.title;
});

server.listen(3000);
