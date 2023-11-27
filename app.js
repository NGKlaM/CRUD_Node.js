// const http = require("node:http");

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end(
//     `
//     <html>
//       <head><head>
//       <body>
//       <h1>Xin chao ca lop!</h1>
//       </body>
//     </html>
//     `
//   );
// });

// server.listen(8000, () => {
//   console.log("Server đang chạy trên PORT 8000");
// });


// app.post('/products/add/:id', (req, res) => {
//   res.send('Add new product page!')
// })






// const express = require('express')
// const app = express()
// const port = 8000

// app.get('/products', (req, res) => {
//   res.send('Product page!')
// })



// app.post('/products/:slug/:id', (req, res) => {
//     const {params, query, body} = req
//     console.log("params:", params)
//     console.log(query)
//     console.log(body)
//     res.send('Add new product page!')
//   })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// const http = require("node:http");
// import express from 'express'
// import router from './routes/product'
// const app = express()
// const port = 8000

// app.use(express.json())

// app.use("/", router)
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from "express";
import router from "./routes";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { PORT } = process.env;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017").then(()=>{
  console.log("connected to database");
}).catch((err) => console.log(err));

app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});