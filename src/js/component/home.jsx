import React from "react";

//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";

//create your first component

const Home = () => {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className="container">
				<Jumbotron />
				<div className="container row p-0 m-0">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div
				className="container-fluid bg-dark w-auto p-3 text-center"
				style={{ color: "white" }}>
				Copyright © Your Website 2022
			</div>
		</>
	);
};

export default Home;
