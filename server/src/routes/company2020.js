import express from "express";
import {companyModel} from "../model/company.js";

const routerZero=express.Router();

routerZero.get("/2020",async(req,res)=>{
    try{
        const data=await companyModel.find({});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})

export {routerZero};