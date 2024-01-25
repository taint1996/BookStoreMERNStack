/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/books/new" element={<CreateBook />} />
			<Route path="/books/:id/detail" element={<ShowBook />} />
			<Route path="/books/:id/edit" element={<EditBook />} />
			<Route path="/books/:id/delete" element={<DeleteBook />} />
		</Routes>
	);
};

export default App;
