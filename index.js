const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

//connect to mongodb
mongoose.connect("mongodb+srv://vasu:2001@cluster0.vr1db.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server Started...!!!")
        })
    }
);