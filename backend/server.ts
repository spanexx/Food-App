import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import userRouter from './src/routers/user.router';
import foodRouter from './src/routers/food.router';
import orderRouter from './src/routers/order.router';

import { dbConnect } from './src/configs/database.config';
dbConnect();

const app = express();
app.use(express.json());

app.use(  
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
