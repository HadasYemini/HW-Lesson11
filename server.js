const express = require("express");
const app = express();
const bp = require("body-parser");

const { error } = require('console')
const fs = require('fs')
const out = fs.createWriteStream('output.txt')

app.use(express.static("client"));
app.use(bp.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

let name
app.post("/", (req, res) => {
  name = req.body.name
  res.sendFile(__dirname + "/client/register.html");
});

const data = fs.createWriteStream(__dirname+'/data.txt', 'utf8');

app.post("/register", (req, res) => {
  data.write(`Name : ${name}\n`);
  data.write(`Username : ${req.body.username}\n`);
  data.write(`Email : ${req.body.email}\n`);
  data.write(`Password : ${req.body.password}\n`);
  data.end();
  res.redirect('/home');
});


data.on('finish', function() {
  console.log('Finished writing data to file');
});

data.on('error', function(err) {
  console.log('Write failed. Error was:');
  console.log(err);
});

app.get("/home",(req,res) => {
    res.send('Hello '+ name)
}) 

  
app.listen("3000", () => {
  console.log("server is on: 3000");
});
