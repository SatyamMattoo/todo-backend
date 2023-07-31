import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title:{
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted:{
      type: Boolean,
      default: false
    },
    user:{
        type: mongoose.Schema.ObjectId,
    }
  });
export const Task = mongoose.model("Task", userSchema);