import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    pointer:{
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
        type:Number,   //mongoose.Decimal128,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    investment:{
        type:Number,
        required:true
    }
})

export const companyModel=mongoose.model("zeros",companySchema)