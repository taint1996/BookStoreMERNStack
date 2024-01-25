import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import bookRoute from './routes/bookRoute.js'
import cors from 'cors'

const app = express();
// middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow All origin with default CORS (*)
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
//   })
// )

// Get
app.get("/", (req, res) => {
	console.log(req);
	return res.status(200).send("Welcome to MERN Stack Tutorial");
});

app.use('/books', bookRoute)

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log(`App connected to the DB`);
		app.listen(PORT, () => {
			console.log(`App is listening on to port: ${PORT} `);
		});
	})
	.catch((err) => {
		console.log(`Error when connect mongoose ${err}`);
	});
