const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
 //serve css as static
app.use(express.static(__dirname));

//get out app use body parser
app.use(bodyParser.urlencoded({ extended: true}))


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req,res)=>{
  var subName=req.body.yourname
  var admNo=req.body.admission
  var unitNmae=req.body.unit


  res.send("Hello " + subName + ", Thank you for registering in Student website Your Admisssion number is" + admNo + "the unit code is" + unitNmae);
}
);