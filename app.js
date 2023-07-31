import express from "express";
import {config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { error } from "./middlewares/error .js";

export const app = express();

config({path:"./data/config.env"})

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);

app.get("/", (req,res)=>{
  res.send("nice working")
});   

app.use(error);
