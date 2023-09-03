import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async()=>{
    mongoose.set('strictQuery', true);
    if(!process.env.MONGODB_URL)return console.log('monogdb_url not found');
    if(isConnected) return console.log('connected to monogdb');

    try {
       await mongoose.connect(process.env.MONGODB_URL);
       isConnected = true; 
       console.log('connected to mongo_db');
    } catch (error) {
        console.log(error);
    }
}
