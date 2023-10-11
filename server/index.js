import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import mongoose from "mongoose";

import {routerZero} from "./src/routes/company.js";

const app=express();

app.use(express.json());
app.use(cors());

dotenv.config();
const MONGO_LINK=process.env.MONGO_LINK;
const api=process.env.api;

// APIs
app.use(api,routerZero);

mongoose.connect(MONGO_LINK,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen("3001",()=>{
        console.log("server running🌟✔");
    });
}).catch((err)=>{
    console.log(err);
})

