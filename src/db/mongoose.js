import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({
    path: `./config/${process.env.NODE_ENV}.env`
})

try {
    mongoose.connect(process.env.MONGODB_URL);
} catch (error) {
    console.log("Error occured when connecting with the database.");
    console.log(error);
} finally {
}

export default mongoose;
