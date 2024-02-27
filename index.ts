import express from "express";
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello From Georgia!");
});

app.listen(port, () => {
  console.log(`Example app listening
  at http://localhost:${port}`);
});

// checked, completion receipt: https://hub.docker.com/repository/docker/gmridge/hello-world-node-express/general
