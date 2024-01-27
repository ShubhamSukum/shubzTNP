import express from "express";
import axios from "axios";
import {companyModel,companyModel2021,companyModel2022} from "../model/company.js";
import {ppoModel,ppoModel2021,ppoModel2022} from "../model/ppo.js"; 

import dotenv from "dotenv";
dotenv.config();

const googleSheet=process.env.googleSheet;

const routerZero=express.Router();

// ******************************************** 2020 ********************************************
routerZero.get("/2020",async(req,res)=>{
    try{
        const data=await companyModel.find({});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})

routerZero.get("/2020ppo",async(req,res)=>{
    try{
        const data=await ppoModel.find({});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})
// ******************************************** 2020 ********************************************

// ******************************************** 2021 ********************************************
routerZero.get("/2021",async(req,res)=>{
    try{
        const data=await companyModel2021.find({});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})

routerZero.get("/2021ppo",async(req,res)=>{
    try{
        const data=await ppoModel2021.find({});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})
// ******************************************** 2021 ********************************************

// ******************************************** 2022 ********************************************
routerZero.get("/2022",async(req,res)=>{
    try{
        const data=await companyModel2022.find({});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})

routerZero.get("/2022ppo",async(req,res)=>{
    try{
        const data=await ppoModel2022.find({});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})
// ******************************************** 2022 ********************************************


// ******************************************** 2023 ********************************************
routerZero.get("/2023",async(req,res)=>{
    try {
        const response = await axios.get(googleSheet);
        const data = response.data.data;

        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})
// ******************************************** 2023 ********************************************

export {routerZero};