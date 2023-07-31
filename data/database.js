import mongoose from "mongoose";

export const connectDatabase=()=>{
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    dbName: "todo",
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(e));
}