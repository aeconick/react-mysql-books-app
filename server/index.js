import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.listen(8800, () => {
  console.log("connected to backend1!");
});
