/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showType, setShowType] = useState("table");

	useEffect(() => {
		setLoading(true);

		axios
			.get("http://localhost:5555/books")
			.then((res) => {
				setBooks(res.data.data);
			})
			.catch((err) => {
				console.log(`Error when get list of Books ${err}`);
			})
			.finally(setLoading(false));
	}, []);

	const renderListBook = () => {
		if (loading) return <Spinner />;

		return showType === "table" ? (
			<BooksTable books={books} />
		) : (
			<BooksCard books={books} />
		);
	};

	return (
		<div className="p-4">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType("table")}
				>
					Table
				</button>

				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType("card")}
				>
					Card
				</button>
			</div>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl my-8">Books List</h1>
				<Link to="/books/new">
					<MdOutlineAddBox className="text-sky-800 text-4xl" />
				</Link>
			</div>
			{renderListBook()}
		</div>
	);
};

export default Home;
