import mongoose from "mongoose";
import dotenv  from 'dotenv'
dotenv.config()

const mongoURI =process.env.MONGO;

const connectToMonggo = () => {
  //
  mongoose.connect(mongoURI).then(
    () => {
      console.log("Connected to Database");
    },
    (err) => {
      console.log("error: " + err);
    }
  );
};

export  {connectToMonggo};
