import mongoose from "mongoose";

export const connectDatabase=()=>{
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    dbName: "todo",
  })
  .then((c) => console.log(`Database connected to ${c.connection.host}`))
  .catch((e) => console.log(e));
}