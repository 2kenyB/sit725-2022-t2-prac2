const express = require("express");
const app = express();
const bodyParser = require("body-parser");




  //get out app use body parser
app.use(bodyParser.urlencoded({ extended: true}))

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/twonumbers/index.html");
  });

    app.post("/", (req,res)=>{
      var Number1=req.body.number1
      var Number2=req.body.number2
      let Sum = Number(req.query.Number1) + Number(req.query.Number2);
    
      res.send("The sum is:" + Sum);
    }
    );