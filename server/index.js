import  express  from "express";
import dotenv  from 'dotenv'
import { userRouter } from "./routes/user.js";
import  cors  from "cors";
import {connectToMonggo} from "./db.js";
dotenv.config()
const port = process.env.PORT

// Connect to MongDB
connectToMonggo()

const app = express()
app.use(express.json())
app.use(cors())


app.use('/auth', userRouter)
  
app.listen(port||3000, ()=>{
    console.log(`Server is running at port:${port}`)
})