const express = require("express");
const app = express();
const port = "8080";
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

//step4
  app.get('/hello/:id/',  (req, res)=> {
    res.send({status:200, message:'Hello,'+ req.params.id});
  });



  app.get("/search/:se?", (req, res)=> {
    if (req.params.se) {
      res.json({ status: 200, message: `ok`, data: req.params.se });
    } else {
      res.json({
        status: 500,
        error: true,
        message: "you have to provide a search"
      });
    }
  });
  
  






 
app.listen(port, () => {
    console.log(`server is running at: http://localhost:${port}/`);
  });


