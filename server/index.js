import express from "express";
const app = express();
import cors from "cors"
import {data} from "./data.js"
app.use(cors(corsOptions))
 
var corsOptions = {
	origin: 'http://example.com',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.get("/", (req, res)=>{
	res.json(data)
})
app.listen(4000)