import mongoose from "mongoose";

const companyPpoSchema=new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    CE:{
        type:Number,
        required:true
    },
    ENTC:{
        type:Number,
        required:true
    },
    IT:{
        type:Number,
        required:true
    },
    male:{
        type:Number,
        required:true
    },
    female:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,   
        required:true
    },
    investment:{
        type:Number,
        required:true
    }
})

export const ppoModel=mongoose.model("ppozeros",companyPpoSchema);
export const ppoModel2021=mongoose.model("ppoones",companyPpoSchema);
export const ppoModel2022=mongoose.model("ppotwos",companyPpoSchema);
