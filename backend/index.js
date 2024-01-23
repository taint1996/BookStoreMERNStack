import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import bookRoute from './routes/bookRoute.js'

const app = express();

// middleware
app.use(express.json());

// Get
app.get("/", (req, res) => {
	console.log("GET req ", req);
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
