const express = require("express");
const app = express();
const DB = require("./database").connectDB;//we are referring to it

//connect to our DB
DB();

app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});