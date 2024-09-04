import { connect } from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connectDb = await connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected!! db host: ${connectDb.connection.host}`)
    } catch (error) {
        console.log('Mongodb connection failed', error)
    }
}

export default connectDB;