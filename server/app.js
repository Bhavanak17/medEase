const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 5000
const cors = require('cors');
const {MONGOURI} = require('./keys');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(MONGOURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.on("connected",()=>{
    console.log("Connected to Database");
})
mongoose.connection.on("error", (err)=>{
    console.log("error: ", err);
})
require("./models/user");
require("./models/query");
require("./models/response");
app.use(require("./route/auth"));
app.use(require("./route/admin/auth"));
app.use(require("./route/query"));
app.use(require("./route/response"));


app.listen(PORT,()=>{
    console.log("Server is running on port",PORT);
})