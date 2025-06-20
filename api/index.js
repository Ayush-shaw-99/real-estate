import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
const DB = process.env.MONGO;
mongoose
    .connect(DB)
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.log("Error in connection", error));

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);