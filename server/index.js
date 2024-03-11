import  express  from "express";
import dotenv  from 'dotenv'
import { userRouter } from "./routes/user.js";
import  cors  from "cors";
import {connectToMonggo} from "./db.js";
dotenv.config()
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors)
app.use('/auth', userRouter)
// Connect to MongDB
connectToMonggo()

app.listen(port, ()=>{
    console.log(`Server is running at port:${port}`)
})