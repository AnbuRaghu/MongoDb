const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 6500;
const routes = require("./routes/index");
const bodyparser=require('body-parser')

app.use(bodyparser.json())// every request come to the server should 1st go through the bodyparser

// before we parse the requst to the router we have to use body_parser

app.use("/", routes); // all request come to this url will be transfered to routes
// this default route should be at the last position
// app.use("/", (req, res) => {
//   res.json({ result: "Hello world" });
// });     

const url ='mongodb://127.0.0.1:27017/AnbuDb';//
  //"mongodb+srv://Anbu:mundakanni28@cluster0.gbu4j.mongodb.net/TestDb?retryWrites=true&w=majority";

mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  }
);

// .then(client=>{

//     app.listen(port, () => {
//       console.log(`server is running on port ${port}`);
//     });
//   }
// ).catch(err=>{
//   console.log(err)
// })
