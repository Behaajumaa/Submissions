const express = require("express");
const app = express();
const port = "3025";
//routes

app.get("/", (req, res) => {
  res.send("Hello World from Behaa :)");
});

app.get('/time',  (req, res) => {
    res.send({status:200, message:'12:32'});
  });

  app.get('/test',  (req, res)=> {
    res.send({status:200, message:'Ok'});
  });
  
app.listen(port, () => {
    console.log(`server is running at: http://localhost:${port}/`);
  });


