const express = require("express");
const app = express();
const port = "3034";
//routes
app.get("/", (req, res) => {
  res.send("Hello World from Behaa :)");
});
app.listen(port, () => {
    console.log(`server is running at: http://localhost:${port}/`);
  });