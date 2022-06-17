// console.log("it is working");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./route/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req,res)=> res.send("express is working"));
app.all("*",(req,res)=> res.send("this route doesn't exist..."));

app.listen(port,()=>console.log(`Server is listening at port: ${port}`));